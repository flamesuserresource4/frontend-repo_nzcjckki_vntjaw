import { useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/about", label: "About" },
    { to: "/programs", label: "Programs" },
    { to: "/volunteer", label: "Volunteer" },
    { to: "/#contact", label: "Contact" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-[#FDFBF8]/90 backdrop-blur border-b border-[#EDE0CF]">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <span className="inline-block w-3 h-3 rounded-full bg-[#C97B63]"></span>
          <span className="font-extrabold text-[#2C2C2C]">Bale Basa</span>
        </Link>

        <button
          aria-label="Toggle menu"
          className="md:hidden p-2 rounded-lg border border-[#EDE0CF]"
          onClick={() => setOpen((v) => !v)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            className="w-5 h-5"
          >
            <path d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.to}>
              {l.to.startsWith("/#") ? (
                <a className="text-sm font-medium text-[#2C2C2C]/80 hover:text-[#2C2C2C]" href={l.to}>
                  {l.label}
                </a>
              ) : (
                <Link className="text-sm font-medium text-[#2C2C2C]/80 hover:text-[#2C2C2C]" to={l.to}>
                  {l.label}
                </Link>
              )}
            </li>
          ))}
        </ul>
      </nav>

      {open && (
        <div className="md:hidden border-t border-[#EDE0CF] bg-[#FDFBF8]">
          <ul className="px-6 py-3 space-y-2">
            {links.map((l) => (
              <li key={l.to}>
                {l.to.startsWith("/#") ? (
                  <a
                    className="block py-2 text-sm font-medium text-[#2C2C2C]/80"
                    href={l.to}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </a>
                ) : (
                  <Link
                    className="block py-2 text-sm font-medium text-[#2C2C2C]/80"
                    to={l.to}
                    onClick={() => setOpen(false)}
                  >
                    {l.label}
                  </Link>
                )}
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
}
