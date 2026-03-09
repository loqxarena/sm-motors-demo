'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X, Phone } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-2xl font-black tracking-tighter text-slate-900">
              S M MOTORS <span className="text-red-600">- D BEST</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-slate-600 hover:text-slate-900 font-bold transition-colors">Home</Link>
            <Link href="/inventory" className="text-slate-600 hover:text-slate-900 font-bold transition-colors">Inventory</Link>
            <Link href="/#how-it-works" className="text-slate-600 hover:text-slate-900 font-bold transition-colors">How it Works</Link>
            <button className="bg-slate-900 text-white px-6 py-2.5 rounded-xl font-bold hover:bg-red-600 transition-colors flex items-center gap-2 shadow-md">
              <Phone size={18} />
              Call Now
            </button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-slate-900 hover:text-red-600 focus:outline-none p-2 bg-slate-50 rounded-lg border border-slate-200"
            >
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown (Only visible when Hamburger is clicked) */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200 absolute w-full left-0 top-20 shadow-2xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <Link href="/" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-slate-900 border-b border-slate-100 hover:bg-slate-50">Home</Link>
            <Link href="/inventory" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-slate-900 border-b border-slate-100 hover:bg-slate-50">Inventory</Link>
            <Link href="/#how-it-works" onClick={() => setIsOpen(false)} className="block px-3 py-4 text-base font-bold text-slate-900 border-b border-slate-100 hover:bg-slate-50">How it Works</Link>
            <div className="pt-4">
              <button className="w-full bg-red-600 text-white px-6 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-md">
                <Phone size={20} />
                Call Dealer Now
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}