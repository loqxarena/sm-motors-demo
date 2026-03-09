import { Fuel, Settings2, Gauge, ShieldCheck, Clock } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import FadeIn from '@/components/FadeIn';

// Shared database for the demo
const inventoryDB = [
  { id: 1, name: "Toyota Fortuner 2.8 4x2 AT", price: "₹32,50,000", emi: "₹65,400/m", km: "42,000", fuel: "Diesel", type: "Automatic", badge: "High Demand", image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80" },
  { id: 2, name: "Hyundai Creta SX (O) Diesel", price: "₹14,20,000", emi: "₹28,500/m", km: "18,500", fuel: "Diesel", type: "Manual", badge: "Recently Added", image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=800&q=80" },
  { id: 3, name: "Mahindra XUV700 AX7", price: "₹19,80,000", emi: "₹39,200/m", km: "12,000", fuel: "Petrol", type: "Automatic", badge: "2 Enquiries Today", image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&w=800&q=80" },
  { id: 4, name: "Kia Seltos GTX Plus", price: "₹15,50,000", emi: "₹31,000/m", km: "24,000", fuel: "Petrol", type: "Automatic", badge: "Best Value", image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80" }
];

export default function CompleteInventoryPage() {
  return (
    <div className="min-h-screen bg-[#F8F9FA] pt-32 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up">
          <div className="mb-12">
            <h1 className="text-4xl md:text-5xl font-black text-slate-900 tracking-tight mb-4">Complete Inventory</h1>
            <p className="text-slate-500 text-lg">Browse our full selection of verified bank-seized vehicles.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {inventoryDB.map((car, idx) => (
            <FadeIn key={car.id} delay={idx * 0.1} direction="up">
              <Link href={`/inventory/${car.id}`} className="block h-full">
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-red-200 transition-all duration-300 group flex flex-col h-full cursor-pointer relative">
                  
                  <div className="absolute top-3 right-3 z-10 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Clock size={12} className={car.badge.includes('Demand') ? 'text-red-400' : 'text-slate-300'} />
                    {car.badge}
                  </div>

                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <Image src={car.image} alt={car.name} fill className="object-cover group-hover:scale-105 transition-transform duration-700" />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider text-slate-900 flex items-center gap-1 shadow-sm">
                      <ShieldCheck size={12} className="text-green-600" /> Inspected
                    </div>
                  </div>

                  <div className="p-4 md:p-5 flex flex-col flex-grow">
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1 line-clamp-1 group-hover:text-red-600 transition-colors">{car.name}</h3>
                    
                    <div className="flex items-end gap-2 md:gap-3 mb-4">
                      <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{car.price}</span>
                      <span className="text-[10px] md:text-xs font-semibold text-slate-500 mb-1">EMI: {car.emi}</span>
                    </div>

                    <div className="flex items-center justify-between text-[10px] md:text-xs font-semibold text-slate-600 mb-5 bg-slate-50 p-2 md:p-2.5 rounded-lg border border-slate-100">
                      <span className="flex items-center gap-1"><Gauge size={14} className="text-slate-400 shrink-0"/> <span className="truncate">{car.km}</span></span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0 mx-1"></span>
                      <span className="flex items-center gap-1"><Fuel size={14} className="text-slate-400 shrink-0"/> <span className="truncate">{car.fuel}</span></span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0 mx-1"></span>
                      <span className="flex items-center gap-1"><Settings2 size={14} className="text-slate-400 shrink-0"/> <span className="truncate">{car.type}</span></span>
                    </div>

                    <div className="mt-auto pt-4 border-t border-slate-100">
                      <button className="w-full bg-white border-2 border-slate-200 text-slate-900 font-bold py-2.5 rounded-xl text-sm group-hover:bg-red-600 group-hover:border-red-600 group-hover:text-white transition-all shadow-sm">
                        View Details
                      </button>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}