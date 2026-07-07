import React from "react";

export default function KickChat() {
  return (
    <div className="relative w-full h-[500px] lg:h-[calc(100vh-112px)] overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-black/50">
      <iframe
        src="https://kick.com/popout/reda-3x/chat"
        className="w-full h-full"
        frameBorder="0"
        scrolling="no"
      />
      {/* Overlay to block chat input clicking & prevent Kick login redirect */}
      <div 
        className="absolute bottom-0 left-0 w-full h-[95px] bg-zinc-950/20 backdrop-blur-[1px] border-t border-zinc-800/40 z-10 cursor-not-allowed" 
        title="Chat is read-only on this hub"
      />
    </div>
  );
}
