import Image from 'next/image';
import { Fuel, Settings2, Gauge, ShieldCheck, MapPin, CheckCircle2, Phone, MessageCircle } from 'lucide-react';

// Using the same mock data for continuity. In a real app, this is a database fetch.
const inventoryDB = [
  { id: 1, brand: "Toyota", model: "Fortuner 2.8 4x2 AT", year: "2021", fuel: "Diesel", type: "Automatic", km: "42,000", priceStr: "₹32,50,000", emi: "₹65,400/m", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=1920&q=80", color: "Phantom Brown", ownership: "1st Owner", engine: "2755 cc" },
  { id: 2, brand: "Hyundai", model: "Creta SX (O) Diesel", year: "2022", fuel: "Diesel", type: "Manual", km: "18,500", priceStr: "₹14,20,000", emi: "₹28,500/m", image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=1920&q=80", color: "Polar White", ownership: "1st Owner", engine: "1493 cc" },
  { id: 3, brand: "Mahindra", model: "XUV700 AX7", year: "2023", fuel: "Petrol", type: "Automatic", km: "12,000", priceStr: "₹19,80,000", emi: "₹39,200/m", image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&w=1920&q=80", color: "Midnight Black", ownership: "1st Owner", engine: "1997 cc" },
  { id: 4, brand: "Kia", model: "Seltos GTX Plus", year: "2022", fuel: "Petrol", type: "Automatic", km: "24,000", priceStr: "₹15,50,000", emi: "₹31,000/m", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=1920&q=80", color: "Intense Red", ownership: "2nd Owner", engine: "1353 cc" }
];

export default function VehicleDetailPage({ params }: { params: { id: string } }) {
  const car = inventoryDB.find(c => c.id === parseInt(params.id));

  if (!car) {
    return <div className="min-h-screen flex items-center justify-center text-2xl font-black">Vehicle Not Found</div>;
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] pb-24 md:pb-12">
      {/* Massive Hero Image */}
      <div className="relative w-full h-[40vh] md:h-[60vh] bg-slate-900">
        <Image src={car.image} alt={car.model} fill className="object-cover opacity-90" priority />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
        <div className="absolute bottom-6 left-4 sm:left-6 lg:left-8 flex gap-2">
          <span className="bg-red-600 text-white text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded shadow-md">Bank Seized</span>
          <span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-black uppercase tracking-wider px-3 py-1.5 rounded flex items-center gap-1"><ShieldCheck size={14} className="text-green-600"/> Verified</span>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Details Column */}
          <div className="lg:col-span-2 space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100">
              <h1 className="text-3xl md:text-4xl font-black text-slate-900 mb-2">{car.brand} {car.model}</h1>
              <p className="text-slate-500 font-medium mb-6">{car.year} • {car.ownership} • TS Registration</p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                  <Gauge size={24} className="text-slate-400 mb-2"/>
                  <span className="text-sm font-bold text-slate-900">{car.km} km</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                  <Fuel size={24} className="text-slate-400 mb-2"/>
                  <span className="text-sm font-bold text-slate-900">{car.fuel}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                  <Settings2 size={24} className="text-slate-400 mb-2"/>
                  <span className="text-sm font-bold text-slate-900">{car.type}</span>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 flex flex-col items-center justify-center text-center">
                  <Settings2 size={24} className="text-slate-400 mb-2"/>
                  <span className="text-sm font-bold text-slate-900">{car.engine}</span>
                </div>
              </div>

              <h3 className="text-xl font-black text-slate-900 mb-4 border-b border-slate-100 pb-2">Vehicle Highlights</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Direct Bank Auction Title', 'No Accident History', 'Original Paint', 'Financing Available'].map((highlight, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-slate-600 font-medium">
                    <CheckCircle2 size={18} className="text-green-500 shrink-0"/> {highlight}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Sticky Pricing Sidebar */}
          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-xl shadow-slate-900/10 border border-slate-200">
              <p className="text-slate-500 font-bold text-sm uppercase tracking-wider mb-1">Final Auction Price</p>
              <div className="text-4xl font-black text-slate-900 tracking-tight mb-2">{car.priceStr}</div>
              <p className="text-slate-500 text-sm font-medium mb-6 pb-6 border-b border-slate-100">Estimated EMI: <strong className="text-slate-900">{car.emi}</strong></p>

              <div className="space-y-3">
                <button className="w-full bg-green-500 text-white font-bold py-4 rounded-xl hover:bg-green-600 transition-colors shadow-lg shadow-green-500/20 flex items-center justify-center gap-2 text-lg">
                  <MessageCircle size={22} />
                  WhatsApp Us
                </button>
                <button className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2 text-lg">
                  <Phone size={22} />
                  Call Dealer
                </button>
              </div>

              <div className="mt-6 bg-blue-50 p-4 rounded-xl flex items-start gap-3 border border-blue-100">
                <MapPin size={24} className="text-blue-900 shrink-0"/>
                <div>
                  <h4 className="font-bold text-blue-900 text-sm">Vehicle Location</h4>
                  <p className="text-blue-800/70 text-xs mt-1">Safilguda, Malkajgiri Yard. Available for physical inspection.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>

      {/* Mobile Sticky Footer - Only visible on small screens */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-4 shadow-[0_-10px_40px_rgba(0,0,0,0.1)] z-50 flex gap-3">
        <button className="flex-1 bg-green-500 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2">
          <MessageCircle size={18} /> WhatsApp
        </button>
        <button className="flex-1 bg-slate-900 text-white font-bold py-3.5 rounded-xl text-sm flex items-center justify-center gap-2">
          <Phone size={18} /> Call
        </button>
      </div>
    </div>
  );
}