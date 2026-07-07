import React from "react";

export default function KickChat() {
  return (
    <div className="flex flex-col w-full h-[500px] lg:h-[calc(100vh-112px)] overflow-hidden rounded-xl bg-zinc-900 border border-zinc-800 shadow-2xl shadow-black/50">
      <div className="flex-1 w-full overflow-hidden">
        <iframe
          src="https://kick.com/popout/reda-3x/chat"
          className="w-full h-full"
          frameBorder="0"
          scrolling="no"
        />
      </div>
      <div className="p-3 border-t border-zinc-800 bg-zinc-950/50 flex justify-center">
        <a
          href="https://kick.com/popout/reda-3x/chat"
          target="_blank"
          rel="noopener noreferrer"
          className="w-full text-center py-2 px-4 rounded-lg bg-red-600/10 border border-red-500/30 text-red-400 hover:bg-red-600 hover:text-zinc-950 text-xs font-bold uppercase tracking-wider transition-all duration-300 shadow-[0_0_10px_rgba(239,68,68,0.05)] hover:shadow-[0_0_15px_rgba(239,68,68,0.2)]"
        >
          Open Chat in New Tab
        </a>
      </div>
    </div>
  );
}
