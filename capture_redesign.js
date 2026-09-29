const { spawn } = require('child_process');
const fs = require('fs');
const path = require('path');

async function capture() {
  const chrome = spawn('C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe', [
    '--headless',
    '--remote-debugging-port=9227',
    '--disable-gpu',
    'about:blank'
  ]);

  await new Promise(r => setTimeout(r, 2000));

  try {
    const listRes = await fetch('http://localhost:9227/json/new', { method: 'PUT' });
    const tab = await listRes.json();
    const ws = new WebSocket(tab.webSocketDebuggerUrl);

    let msgId = 1;
    const callbacks = new Map();

    ws.onmessage = (event) => {
      const data = JSON.parse(event.data);
      if (callbacks.has(data.id)) {
        const cb = callbacks.get(data.id);
        callbacks.delete(data.id);
        cb(data.result);
      }
    };

    function send(method, params = {}) {
      return new Promise((resolve) => {
        const id = msgId++;
        callbacks.set(id, resolve);
        ws.send(JSON.stringify({ id, method, params }));
      });
    }

    async function evaluate(expression) {
      return await send('Runtime.evaluate', { expression, returnByValue: true });
    }

    await new Promise(r => ws.onopen = r);

    await send('Page.enable');
    await send('Runtime.enable');

    // 1. Desktop 1440x900 - Education Section
    console.log('Capturing Desktop Redesigned Education...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 1440,
      height: 900,
      deviceScaleFactor: 1,
      mobile: false,
    });
    await send('Page.navigate', { url: 'http://localhost:3000/#education' });
    await new Promise(r => setTimeout(r, 2000));

    let shot = await send('Page.captureScreenshot', { format: 'png' });
    let outPath = path.join(__dirname, 'public', 'desktop_education_redesigned.png');
    fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
    console.log('Saved desktop_education_redesigned.png');

    // 2. Mobile 390x844 - Education Section
    console.log('Capturing Mobile Redesigned Education...');
    await send('Emulation.setDeviceMetricsOverride', {
      width: 390,
      height: 844,
      deviceScaleFactor: 2,
      mobile: true,
      hasTouch: true,
    });
    await send('Page.navigate', { url: 'http://localhost:3000/#education' });
    await new Promise(r => setTimeout(r, 2000));

    shot = await send('Page.captureScreenshot', { format: 'png' });
    outPath = path.join(__dirname, 'public', 'mobile_education_redesigned_top.png');
    fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
    console.log('Saved mobile_education_redesigned_top.png');

    // Scroll mobile to bottom
    console.log('Scrolling mobile education to bottom...');
    await evaluate(`
      (() => {
        const sc = document.querySelector('.overflow-y-auto');
        if (sc) sc.scrollTop = sc.scrollHeight;
      })()
    `);
    await new Promise(r => setTimeout(r, 800));

    shot = await send('Page.captureScreenshot', { format: 'png' });
    outPath = path.join(__dirname, 'public', 'mobile_education_redesigned_bottom.png');
    fs.writeFileSync(outPath, Buffer.from(shot.data, 'base64'));
    console.log('Saved mobile_education_redesigned_bottom.png');

    ws.close();
  } catch (e) {
    console.error('Error:', e);
  } finally {
    chrome.kill();
  }
}

capture();
