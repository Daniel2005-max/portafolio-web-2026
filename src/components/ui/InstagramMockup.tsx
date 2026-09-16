"use client";

import { useState } from "react";
import {
  Check,
  Grid,
  Bookmark,
  Heart,
  MessageCircle,
  ExternalLink,
  SlidersHorizontal,
  ChevronDown,
  Sparkles,
  Pin,
  Layers,
  Play,
} from "lucide-react";

export interface IgPost {
  image: string;
  likes: string;
  comments: string;
  caption?: string;
  isPinned?: boolean;
  type?: "image" | "carousel" | "reel";
}

export interface IgHighlight {
  title: string;
  image?: string;
}

interface InstagramMockupProps {
  username: string;
  name: string;
  category: string;
  bioLines: string[];
  websiteUrl: string;
  displayUrl: string;
  avatarUrl: string;
  avatarBg?: string;
  stats: {
    posts: string;
    followers: string;
    following: string;
  };
  highlights: IgHighlight[];
  posts: IgPost[];
  profileUrl: string;
}

export function InstagramMockup({
  username,
  name,
  category,
  bioLines,
  websiteUrl,
  displayUrl,
  avatarUrl,
  avatarBg = "bg-white",
  stats,
  highlights,
  posts,
  profileUrl,
}: InstagramMockupProps) {
  const [isFollowing, setIsFollowing] = useState(false);
  const [activeTab, setActiveTab] = useState<"posts" | "reels" | "saved">("posts");

  return (
    <div className="w-full h-full flex flex-col bg-white rounded-2xl md:rounded-[2.5rem] border border-gray-200 shadow-xl overflow-hidden font-sans">
      {/* IG Top App Header */}
      <div className="bg-white px-4 py-3 border-b border-gray-100 flex items-center justify-between shrink-0">
        <div className="flex items-center gap-1.5">
          <span className="font-extrabold text-sm text-gray-900 tracking-tight">{username}</span>
          <div className="w-3.5 h-3.5 rounded-full bg-blue-500 flex items-center justify-center text-white text-[8px] font-bold">
            ✓
          </div>
          <ChevronDown size={14} className="text-gray-500" />
        </div>

        <div className="flex items-center gap-3">
          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="flex items-center gap-1 px-3 py-1 bg-gradient-to-r from-pink-500 via-red-500 to-amber-500 text-white text-[11px] font-bold rounded-full shadow-sm hover:opacity-95 transition-opacity"
          >
            <span>Ver en Instagram</span>
            <ExternalLink size={11} />
          </a>
        </div>
      </div>

      {/* Profile Info Section */}
      <div className="p-4 md:p-6 bg-white border-b border-gray-100">
        {/* Row 1: Avatar & Stats */}
        <div className="flex items-center gap-4 md:gap-8 mb-4">
          {/* Avatar with gradient Story Ring */}
          <div className="relative shrink-0">
            <div className="w-20 h-20 md:w-24 md:h-24 rounded-full p-[2.5px] bg-gradient-to-tr from-amber-400 via-rose-500 to-purple-600 shadow-md">
              <div className={`w-full h-full rounded-full p-1.5 ${avatarBg} border-2 border-white overflow-hidden flex items-center justify-center`}>
                <img
                  src={avatarUrl}
                  alt={name}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="absolute bottom-0 right-0 w-6 h-6 rounded-full bg-blue-500 text-white flex items-center justify-center text-xs font-bold border-2 border-white shadow">
              +
            </div>
          </div>

          {/* Counts */}
          <div className="flex-1 flex justify-around text-center">
            <div>
              <div className="text-base md:text-lg font-black text-gray-900 leading-none mb-1">{stats.posts}</div>
              <div className="text-[11px] text-gray-500 font-medium">publicaciones</div>
            </div>
            <div>
              <div className="text-base md:text-lg font-black text-gray-900 leading-none mb-1">{stats.followers}</div>
              <div className="text-[11px] text-gray-500 font-medium">seguidores</div>
            </div>
            <div>
              <div className="text-base md:text-lg font-black text-gray-900 leading-none mb-1">{stats.following}</div>
              <div className="text-[11px] text-gray-500 font-medium">seguidos</div>
            </div>
          </div>
        </div>

        {/* Row 2: Bio & Details */}
        <div className="space-y-1 text-left">
          <h3 className="text-sm font-extrabold text-gray-900 leading-tight">{name}</h3>
          <span className="inline-block text-xs font-semibold text-gray-500">{category}</span>
          
          <div className="text-xs text-gray-800 leading-relaxed pt-1 space-y-0.5 font-medium">
            {bioLines.map((line, idx) => (
              <p key={idx}>{line}</p>
            ))}
          </div>

          {websiteUrl && (
            <div className="pt-1.5">
              <a
                href={websiteUrl}
                target="_blank"
                rel="noreferrer"
                className="text-xs font-bold text-blue-900 hover:underline flex items-center gap-1"
              >
                <span>🔗 {displayUrl}</span>
              </a>
            </div>
          )}
        </div>

        {/* Row 3: Action Buttons */}
        <div className="grid grid-cols-3 gap-2 mt-4">
          <button
            onClick={() => setIsFollowing(!isFollowing)}
            className={`py-1.5 rounded-lg text-xs font-bold transition-all shadow-sm flex items-center justify-center gap-1 ${
              isFollowing
                ? "bg-gray-100 text-gray-900 hover:bg-gray-200"
                : "bg-blue-500 text-white hover:bg-blue-600"
            }`}
          >
            {isFollowing ? (
              <>
                <Check size={13} />
                <span>Siguiendo</span>
              </>
            ) : (
              <span>Seguir</span>
            )}
          </button>

          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="py-1.5 rounded-lg text-xs font-bold bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors shadow-sm text-center flex items-center justify-center"
          >
            Mensaje
          </a>

          <a
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="py-1.5 rounded-lg text-xs font-bold bg-gray-100 text-gray-900 hover:bg-gray-200 transition-colors shadow-sm text-center flex items-center justify-center"
          >
            Contacto
          </a>
        </div>

        {/* Row 4: Stories Highlights */}
        {highlights && highlights.length > 0 && (
          <div className="flex items-center gap-3 md:gap-4 overflow-x-auto hide-scrollbar pt-4 mt-2">
            {highlights.map((h, i) => (
              <div key={i} className="flex flex-col items-center gap-1 shrink-0 cursor-pointer group">
                <div className="w-14 h-14 rounded-full p-[2px] bg-gray-200 group-hover:bg-gradient-to-tr group-hover:from-amber-400 group-hover:to-pink-500 transition-all">
                  <div className="w-full h-full rounded-full border-2 border-white bg-slate-100 overflow-hidden flex items-center justify-center p-1">
                    {h.image ? (
                      <img src={h.image} alt={h.title} className="w-full h-full object-cover rounded-full" />
                    ) : (
                      <Sparkles size={16} className="text-gray-500" />
                    )}
                  </div>
                </div>
                <span className="text-[10px] font-medium text-gray-700 max-w-[56px] truncate text-center">
                  {h.title}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-200 bg-white">
        <button
          onClick={() => setActiveTab("posts")}
          className={`flex-1 py-3 flex justify-center items-center gap-1.5 text-xs font-bold border-b-2 transition-colors ${
            activeTab === "posts"
              ? "border-black text-black"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          <Grid size={16} />
          <span className="hidden sm:inline">PUBLICACIONES</span>
        </button>

        <button
          onClick={() => setActiveTab("reels")}
          className={`flex-1 py-3 flex justify-center items-center gap-1.5 text-xs font-bold border-b-2 transition-colors ${
            activeTab === "reels"
              ? "border-black text-black"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          <SlidersHorizontal size={16} />
          <span className="hidden sm:inline">REELS</span>
        </button>

        <button
          onClick={() => setActiveTab("saved")}
          className={`flex-1 py-3 flex justify-center items-center gap-1.5 text-xs font-bold border-b-2 transition-colors ${
            activeTab === "saved"
              ? "border-black text-black"
              : "border-transparent text-gray-400 hover:text-gray-600"
          }`}
        >
          <Bookmark size={16} />
          <span className="hidden sm:inline">GUARDADAS</span>
        </button>
      </div>

      {/* Posts 3-Column Grid */}
      <div className="grid grid-cols-3 gap-1 md:gap-1.5 p-1 bg-white flex-1 min-h-0 overflow-y-auto hide-scrollbar content-start">
        {posts.map((post, idx) => (
          <a
            key={idx}
            href={profileUrl}
            target="_blank"
            rel="noreferrer"
            className="group relative aspect-square bg-gray-100 overflow-hidden cursor-pointer block"
            title={post.caption || `Ver publicación en Instagram`}
          >
            <img
              src={post.image}
              alt={`Post ${idx + 1}`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />

            {/* Real Instagram badges in top-right */}
            {post.isPinned && (
              <div className="absolute top-1.5 right-1.5 bg-black/60 backdrop-blur-sm p-1 rounded-full text-white shadow z-10">
                <Pin size={11} className="fill-white rotate-45" />
              </div>
            )}
            {!post.isPinned && post.type === "carousel" && (
              <div className="absolute top-1.5 right-1.5 bg-black/60 backdrop-blur-sm p-1 rounded-full text-white shadow z-10">
                <Layers size={11} />
              </div>
            )}
            {!post.isPinned && post.type === "reel" && (
              <div className="absolute top-1.5 right-1.5 bg-black/60 backdrop-blur-sm p-1 rounded-full text-white shadow z-10">
                <Play size={11} className="fill-white" />
              </div>
            )}

            {/* Hover overlay with likes and comments */}
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4 text-white font-bold text-xs z-10">
              <div className="flex items-center gap-1">
                <Heart size={14} className="fill-white" />
                <span>{post.likes}</span>
              </div>
              <div className="flex items-center gap-1">
                <MessageCircle size={14} className="fill-white" />
                <span>{post.comments}</span>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
