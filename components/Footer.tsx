'use client';

import { MapPin, Mail, Phone, Send } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="w-full bg-slate-900 text-slate-300">
      {/* CONTACT SECTION */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 border-b border-slate-800">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          
          {/* Left Column: Dealership Info */}
          <div>
            <h2 className="text-4xl font-black text-white mb-8 tracking-tight">Contact Us</h2>
            <div className="space-y-6 mb-10">
              <div className="flex items-start gap-4 group">
                <div className="bg-slate-800 p-3 rounded-lg group-hover:bg-red-600/20 transition-colors">
                  <MapPin className="text-red-500 shrink-0" size={24} />
                </div>
                <div>
                  <h3 className="text-white font-bold text-xl mb-1">S M MOTORS – D BEST</h3>
                  <p className="text-slate-400 font-medium text-sm uppercase tracking-wider mb-2">Bank Seized Car Dealers</p>
                  <p className="text-slate-300 leading-relaxed">
                    Safilguda, Malkajgiri<br />
                    Hyderabad – 500047<br />
                    Telangana, India
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-slate-800 p-3 rounded-lg group-hover:bg-red-600/20 transition-colors">
                  <Mail className="text-red-500 shrink-0" size={24} />
                </div>
                <a href="mailto:Subburaj208@gmail.com" className="text-white hover:text-red-400 font-medium transition-colors">
                  Subburaj208@gmail.com
                </a>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-slate-800 p-3 rounded-lg group-hover:bg-red-600/20 transition-colors">
                  <Phone className="text-red-500 shrink-0" size={24} />
                </div>
                <a href="tel:+910000000000" className="text-white hover:text-red-400 font-medium transition-colors">
                  +91 00000 00000
                </a>
              </div>
            </div>

            {/* Live Google Maps Embed */}
            <div className="w-full h-64 bg-slate-800 rounded-2xl overflow-hidden border border-slate-700 relative shadow-inner">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d30449.208197771746!2d78.52044391672323!3d17.45265439483324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9b9f7a77e231%3A0xf59d1889c258d4a6!2sSafilguda%2C%20Malkajgiri%2C%20Secunderabad%2C%20Telangana%20500047!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="S M Motors Location"
                className="absolute inset-0"
              ></iframe>
            </div>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="bg-slate-800 p-8 sm:p-10 rounded-3xl border border-slate-700 shadow-xl shadow-black/50">
            <h3 className="text-2xl font-bold text-white mb-2">Send an Enquiry</h3>
            <p className="text-slate-400 mb-8 text-sm">Fill out the form below and our team will get back to you immediately.</p>
            
            <form className="space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Full Name</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" 
                  placeholder="Enter your name" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" 
                  placeholder="+91 00000 00000" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Car of Interest</label>
                <input 
                  type="text" 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all" 
                  placeholder="e.g., Hyundai Creta 2022" 
                />
              </div>
              <div>
                <label className="block text-sm font-bold text-slate-300 mb-2">Message</label>
                <textarea 
                  rows={4} 
                  className="w-full bg-slate-900 border border-slate-700 rounded-xl px-4 py-3.5 text-white placeholder:text-slate-600 focus:outline-none focus:border-red-500 focus:ring-1 focus:ring-red-500 transition-all resize-none" 
                  placeholder="I would like to know the final price and documentation process..."
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="w-full bg-red-600 text-white font-bold py-4 rounded-xl hover:bg-red-700 transition-colors flex items-center justify-center gap-2 shadow-lg shadow-red-600/20 mt-2"
              >
                <Send size={20} />
                Submit Enquiry
              </button>
            </form>
          </div>
          
        </div>
      </div>

      {/* SEO FOOTER */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
          <p className="text-[11px] text-slate-500 max-w-3xl leading-relaxed text-center lg:text-left">
            Your trusted partner for Bank Seized Cars Hyderabad, Bank Auction Cars Telangana, and Cheap Used Cars Hyderabad. We source Bank Repo Vehicles India and provide the best Auction Cars Hyderabad.
          </p>
          <p className="text-sm text-slate-400 font-medium shrink-0">
            © {new Date().getFullYear()} S M MOTORS – D BEST.
          </p>
        </div>
      </div>
    </footer>
  );
}