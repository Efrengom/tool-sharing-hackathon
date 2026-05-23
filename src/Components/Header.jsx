import { useState } from "react";
import { Link } from "react-router";

function Header() {
  /** @type {[boolean, Function]} State hook to toggle the visibility of the mobile menu */
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  /** * @type {Array<{name: string, href: string}>}
   * Centralized navigation schema for the sanctuary.
   */
  const navLinks = [
    { name: "Home", href: "/home" },
    { name: "Profile", href: "/profile" },
    { name: "Search", href: "/search" },
    //{ name: "Casting", href: "/casting" },
    //{ name: "Calendar", href: "/calendar" },
    //{ name: "Translate", href: "/translate" },
    //{ name: "About", href: "/about" },
  ];

  return (
    <header className="bg-blue-700 backdrop-blur-md sticky top-0 z-50 border-b border-stone-900 px-6 py-4">
      <nav
        className="max-w-7xl mx-auto flex justify-between items-center"
        aria-label="Main Navigation"
      >
        {/* LOGO & BRANDING SECTION 
            Combines the SVG logo with runic and latin text identifiers.
        */}
        <hgroup className="flex items-center gap-4">
          <div className="flex flex-col">
            <h1 className="text-slate-50 text-[10px] uppercase tracking-[0.4em] font-bold mt-1">
              Tool Sharing
            </h1>
          </div>
        </hgroup>

        {/* DESKTOP NAVIGATION
            Hidden on mobile, utilizes flex-row on large screens.
        */}
        <ul className="hidden lg:flex space-x-8">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href.replace("#", "/").toLowerCase()}
                className="text-slate-50 hover:text-amber-500 text-xs uppercase tracking-widest transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* HAMBURGER BUTTON (Mobile/Tablet Only)
            Controls the isMenuOpen state for the mobile overlay.
        */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="lg:hidden text-slate-50 hover:text-amber-500 focus:outline-none"
          aria-expanded={isMenuOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </svg>
        </button>
      </nav>

      {/* MOBILE MENU OVERLAY
          Conditionally rendered based on isMenuOpen state. 
          Closes automatically upon link selection.
      */}
      <div
        className={`${isMenuOpen ? "block" : "hidden"} lg:hidden absolute top-full left-0 w-full bg-stone-950 border-b border-stone-900 shadow-2xl`}
      >
        <ul className="flex flex-col p-6 space-y-4">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="block text-slate-50 hover:text-amber-500 text-sm uppercase tracking-[0.2em] transition-colors"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
}

export default Header;
