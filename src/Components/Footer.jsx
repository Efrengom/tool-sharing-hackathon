import { useState } from "react";

function Footer() {
  return (
    <footer className="bg-stone-950 border-t border-stone-900 py-6">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* Branding Column */}
        <div className="space-y-4">
          <span className="text-amber-500 text-xl tracking-widest font-serif">
            Tool Sharing
          </span>
          <p className="text-stone-500 text-sm leading-relaxed">
            A place to find and share tools.
          </p>
        </div>

        {/* Links Column */}
        <div className="flex flex-col space-y-2">
          <h4 className="text-stone-200 font-bold uppercase text-xs tracking-widest mb-2">
            External Links
          </h4>
          <a
            href="#"
            className="text-stone-500 hover:text-amber-500 text-sm transition-colors"
          >
            External Link 1
          </a>
          <a
            href="#"
            className="text-stone-500 hover:text-amber-500 text-sm transition-colors"
          >
            External Link 2
          </a>
          <a
            href="#"
            className="text-stone-500 hover:text-amber-500 text-sm transition-colors"
          >
            External Link 3
          </a>
        </div>

        {/* Legal/Copyright Column */}
        <div className="text-right flex flex-col justify-end">
          <p className="text-stone-600 text-[10px] uppercase tracking-tighter">
            Proprietary Architecture &copy; 2026 Efren Gomez
          </p>
          <p className="text-stone-700 text-[10px]">All Rights Reserved</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
