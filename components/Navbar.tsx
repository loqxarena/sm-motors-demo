import Link from 'next/link';
import { PhoneCall } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-slate-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="font-black text-2xl tracking-tighter text-slate-950">
              S M MOTORS <span className="text-red-600">- D BEST</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center font-medium text-slate-700">
            <Link href="/" className="hover:text-blue-900 transition-colors">Home</Link>
            <Link href="/inventory" className="hover:text-blue-900 transition-colors">Inventory</Link>
            <Link href="#how-it-works" className="hover:text-blue-900 transition-colors">How it Works</Link>
            <Link href="/about" className="hover:text-blue-900 transition-colors">About</Link>
            <Link href="/contact" className="hover:text-blue-900 transition-colors">Contact</Link>
          </div>

          {/* CTA Button */}
          <div className="flex items-center">
            <a 
              href="tel:+91XXXXXXXXXX" 
              className="hidden md:flex items-center gap-2 bg-blue-900 text-white px-5 py-2.5 rounded-lg font-bold hover:bg-blue-950 transition-all shadow-md shadow-blue-900/20"
            >
              <PhoneCall size={18} />
              Call Now
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}