import React from "react";

const WelcomeScreen = ({ onStart }) => {
  return (
    <div className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-black transition-opacity duration-1000">
      {/* Гоёмсог анивчдаг бичиг */}
      <h1 className="text-white text-4xl md:text-6xl font-serif mb-12 tracking-widest animate-pulse">
        ARE YOU READY?
      </h1>

      {/* Enter товчлуур */}
      <button
        onClick={onStart}
        className="group relative px-12 py-4 overflow-hidden rounded-full border border-white/30 bg-transparent text-white transition-all hover:border-white"
      >
        <span className="relative z-10 font-light tracking-[0.2em] group-hover:text-black transition-colors duration-300">
          ENTER
        </span>
        <div className="absolute inset-0 z-0 bg-white translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
      </button>

      {/* Чимэглэл хэсэг */}
      <div className="absolute bottom-10 text-white/20 text-xs tracking-widest uppercase">
        Click to unlock the experience
      </div>
    </div>
  );
};

export default WelcomeScreen;
