import FilterSidebar from '@/components/FilterSidebar';
import { Fuel, Settings2, Gauge, ShieldCheck, Phone } from 'lucide-react';
import Image from 'next/image';

// MOCK DATABASE: Notice the raw numerical 'priceValue' added for actual logic.
const inventoryDB = [
  { id: 1, brand: "Hyundai", model: "Creta SX (O) Diesel", year: "2022", fuel: "Diesel", type: "Automatic", km: "24,500", priceStr: "₹14,20,000", priceValue: 1420000, emi: "₹28,500/m", image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=800&q=80" },
  { id: 2, brand: "Maruti", model: "Swift Dzire VXI", year: "2021", fuel: "Petrol", type: "Manual", km: "32,000", priceStr: "₹5,20,000", priceValue: 520000, emi: "₹11,400/m", image: "https://images.unsplash.com/photo-1549399542-7e3f8b79c341?auto=format&fit=crop&w=800&q=80" },
  { id: 3, brand: "Toyota", model: "Innova Crysta 2.4", year: "2020", fuel: "Diesel", type: "Manual", km: "65,000", priceStr: "₹14,80,000", priceValue: 1480000, emi: "₹29,800/m", image: "https://images.unsplash.com/photo-1552519507-da3b142c6e3d?auto=format&fit=crop&w=800&q=80" },
  { id: 4, brand: "Mahindra", model: "Scorpio S11", year: "2023", fuel: "Diesel", type: "Manual", km: "12,000", priceStr: "₹13,90,000", priceValue: 1390000, emi: "₹27,900/m", image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&w=800&q=80" },
  { id: 5, brand: "Honda", model: "City ZX CVT", year: "2021", fuel: "Petrol", type: "Automatic", km: "28,000", priceStr: "₹9,75,000", priceValue: 975000, emi: "₹19,600/m", image: "https://images.unsplash.com/photo-1590362891991-f776e747a588?auto=format&fit=crop&w=800&q=80" },
  { id: 6, brand: "Kia", model: "Seltos GTX Plus", year: "2022", fuel: "Petrol", type: "Automatic", km: "18,500", priceStr: "₹15,50,000", priceValue: 1550000, emi: "₹31,000/m", image: "https://images.unsplash.com/photo-1621007947382-d31190a02062?auto=format&fit=crop&w=800&q=80" }
];

export default function InventoryPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | undefined }
}) {
  // SERVER-SIDE FILTERING LOGIC
  let filteredCars = inventoryDB;

  if (searchParams.brand) {
    filteredCars = filteredCars.filter(car => car.brand === searchParams.brand);
  }

  if (searchParams.maxPrice) {
    const max = parseInt(searchParams.maxPrice, 10);
    filteredCars = filteredCars.filter(car => car.priceValue <= max);
  }

  return (
    <div className="min-h-screen bg-[#F8F9FA] font-sans pb-24">
      {/* Page Header */}
      <div className="bg-white border-b border-slate-200 py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-3xl font-black tracking-tight text-slate-900">Verified Bank Auction Inventory</h1>
          <p className="text-slate-500 mt-2 font-medium">Showing {filteredCars.length} vehicles matching your criteria.</p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col md:flex-row gap-8">
        
        {/* INJECTED CLIENT COMPONENT */}
        <FilterSidebar />

        {/* RIGHT GRID: Dense Data Cards */}
        <div className="w-full md:w-3/4 lg:w-4/5">
          {filteredCars.length === 0 ? (
            <div className="bg-white rounded-2xl border border-slate-200 p-12 text-center">
              <h3 className="text-xl font-bold text-slate-900 mb-2">No vehicles found</h3>
              <p className="text-slate-500">Try adjusting your filters to see more results.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-4">
              {filteredCars.map((car) => (
                <div key={car.id} className="bg-white border border-slate-200 rounded-xl overflow-hidden hover:shadow-lg transition-all flex flex-col sm:flex-row group">
                  
                  {/* Image Block */}
                  <div className="relative w-full sm:w-2/5 aspect-[4/3] sm:aspect-auto bg-slate-100 shrink-0">
                    <Image 
                      src={car.image} 
                      alt={car.model} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-500" 
                    />
                    <div className="absolute top-2 left-2 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-black uppercase tracking-wider text-slate-900 flex items-center gap-1">
                      <ShieldCheck size={12} className="text-green-600" /> Inspected
                    </div>
                  </div>

                  {/* Data Block */}
                  <div className="p-5 flex flex-col flex-grow w-full">
                    <div className="flex justify-between items-start mb-1">
                      <h3 className="text-lg font-bold text-slate-900 leading-tight">{car.brand} {car.model}</h3>
                      <span className="bg-slate-100 text-slate-600 text-xs font-bold px-2 py-1 rounded">{car.year}</span>
                    </div>
                    
                    <div className="flex items-end gap-3 mb-4">
                      <span className="text-2xl font-black text-slate-900 tracking-tight">{car.priceStr}</span>
                      <span className="text-xs font-semibold text-slate-500 mb-1">EMI: {car.emi}</span>
                    </div>

                    <div className="grid grid-cols-3 gap-2 text-xs font-semibold text-slate-600 mb-5 bg-slate-50 p-3 rounded-lg border border-slate-100">
                      <span className="flex flex-col gap-1"><Gauge size={14} className="text-slate-400"/> {car.km} km</span>
                      <span className="flex flex-col gap-1 border-l border-slate-200 pl-2"><Fuel size={14} className="text-slate-400"/> {car.fuel}</span>
                      <span className="flex flex-col gap-1 border-l border-slate-200 pl-2"><Settings2 size={14} className="text-slate-400"/> {car.type}</span>
                    </div>

                    <div className="mt-auto flex gap-3">
                      <button className="flex-1 bg-red-600 text-white font-bold py-2.5 rounded-lg text-sm hover:bg-red-700 transition-colors shadow-sm">
                        View Details
                      </button>
                      <button className="flex-shrink-0 border border-slate-200 text-slate-700 p-2.5 rounded-lg hover:bg-slate-50 transition-colors flex items-center justify-center">
                        <Phone size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}