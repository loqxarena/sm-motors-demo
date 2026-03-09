'use client';

import { useRouter, useSearchParams } from 'next/navigation';
import { Filter, Check } from 'lucide-react';

const BRANDS = ['Maruti', 'Hyundai', 'Toyota', 'Mahindra', 'Honda', 'Kia'];

export default function FilterSidebar() {
  const router = useRouter();
  const searchParams = useSearchParams();
  
  const currentBrand = searchParams.get('brand');
  const currentMaxPrice = searchParams.get('maxPrice');

  const updateFilter = (key: string, value: string | null) => {
    const params = new URLSearchParams(searchParams.toString());
    if (value) {
      params.set(key, value);
    } else {
      params.delete(key);
    }
    router.push(`/inventory?${params.toString()}`);
  };

  return (
    <aside className="w-full md:w-1/4 lg:w-1/5 shrink-0">
      <div className="sticky top-24 bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
        <div className="flex items-center gap-2 mb-6 border-b border-slate-100 pb-4">
          <Filter className="text-slate-900" size={20} />
          <h2 className="text-xl font-black text-slate-900 tracking-tight">Filters</h2>
        </div>

        {/* Budget Filter */}
        <div className="mb-8">
          <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Max Budget</h3>
          <select 
            className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 font-medium focus:outline-none focus:border-red-500"
            value={currentMaxPrice || ''}
            onChange={(e) => updateFilter('maxPrice', e.target.value)}
          >
            <option value="">Any Budget</option>
            <option value="500000">Under ₹5 Lakhs</option>
            <option value="1000000">Under ₹10 Lakhs</option>
            <option value="1500000">Under ₹15 Lakhs</option>
            <option value="2000000">Under ₹20 Lakhs</option>
          </select>
        </div>

        {/* Brand Filter */}
        <div className="mb-6">
          <h3 className="font-bold text-slate-900 mb-3 text-sm uppercase tracking-wider">Brand</h3>
          <div className="space-y-3">
            <label className="flex items-center gap-3 cursor-pointer group">
              <input 
                type="radio" 
                name="brand" 
                className="hidden" 
                checked={!currentBrand}
                onChange={() => updateFilter('brand', null)}
              />
              <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${!currentBrand ? 'bg-red-600 border-red-600' : 'border-slate-300 group-hover:border-red-500'}`}>
                {!currentBrand && <Check size={14} className="text-white" />}
              </div>
              <span className={`text-sm font-medium ${!currentBrand ? 'text-slate-900 font-bold' : 'text-slate-600'}`}>All Brands</span>
            </label>

            {BRANDS.map((brand) => (
              <label key={brand} className="flex items-center gap-3 cursor-pointer group">
                <input 
                  type="radio" 
                  name="brand" 
                  className="hidden" 
                  checked={currentBrand === brand}
                  onChange={() => updateFilter('brand', brand)}
                />
                <div className={`w-5 h-5 rounded border flex items-center justify-center transition-colors ${currentBrand === brand ? 'bg-red-600 border-red-600' : 'border-slate-300 group-hover:border-red-500'}`}>
                  {currentBrand === brand && <Check size={14} className="text-white" />}
                </div>
                <span className={`text-sm font-medium ${currentBrand === brand ? 'text-slate-900 font-bold' : 'text-slate-600'}`}>{brand}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );
}