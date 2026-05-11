import { useState } from "react";
import { Link } from "@tanstack/react-router";
import logoImg from "@/assets/Logo Travels New.png";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Packages", to: "/", hash: "packages" },
  { label: "Destinations", to: "/destinations", hash: "" },
  { label: "Event", to: "/", hash: "event" },
  { label: "Contact", to: "/", hash: "contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="absolute top-0 inset-x-0 z-30 shadow-md" style={{ background: "linear-gradient(to right, #0a3d8f, #1E90FF, #63b8ff)" }}>
      <div className="max-w-7xl mx-auto px-6 py-0 flex items-center justify-between">
        <Link to="/" onClick={() => setOpen(false)}>
          <img src={logoImg} alt="Ceyline Travels" className="h-[120px] w-auto" />
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-white/90 text-sm uppercase tracking-widest">
          {navLinks.map((link) => (
            <Link key={link.label} to={link.to} hash={link.hash} className="hover:text-white transition-smooth">
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link to="/" hash="contact">
            <Button variant="secondary" className="font-semibold">Book Now</Button>
          </Link>
        </div>

        {/* Hamburger button */}
        <button
          className="md:hidden text-white p-2"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          {open ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden px-6 pb-6 pt-2 flex flex-col gap-4" style={{ background: "linear-gradient(to bottom, #1E90FF, #0a3d8f)" }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.to}
              hash={link.hash}
              className="text-white text-sm uppercase tracking-widest font-semibold border-b border-white/20 pb-3 hover:text-white/70 transition-smooth"
              onClick={() => setOpen(false)}
            >
              {link.label}
            </Link>
          ))}
          <Link to="/" hash="contact" onClick={() => setOpen(false)}>
            <Button variant="secondary" className="w-full font-semibold mt-2">Book Now</Button>
          </Link>
        </div>
      )}
    </header>
  );
}
