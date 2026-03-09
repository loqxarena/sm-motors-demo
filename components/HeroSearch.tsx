'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search } from 'lucide-react';

export default function HeroSearch() {
  const router = useRouter();
  const [maxPrice, setMaxPrice] = useState('');
  const [vehicleType, setVehicleType] = useState('');

  const handleSearch = () => {
    // Construct the URL parameters dynamically based on what the user selected
    const params = new URLSearchParams();
    
    if (maxPrice) params.set('maxPrice', maxPrice);
    if (vehicleType) params.set('type', vehicleType);

    // Push the user to the inventory page with the exact query state
    router.push(`/inventory?${params.toString()}`);
  };

  return (
    <div className="bg-white rounded-2xl shadow-2xl shadow-slate-900/10 p-2 sm:p-4 border border-slate-200">
      {/* Tabs */}
      <div className="flex border-b border-slate-200 mb-4 px-2">
        <button className="py-3 px-6 border-b-2 border-red-600 text-red-600 font-bold text-sm uppercase tracking-wide">By Budget</button>
        <button className="py-3 px-6 border-b-2 border-transparent text-slate-500 font-bold text-sm uppercase tracking-wide hover:text-slate-800">By Brand</button>
      </div>
      
      {/* Search Inputs */}
      <div className="flex flex-col md:flex-row gap-4 p-2">
        <select 
          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 appearance-none cursor-pointer"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        >
          <option value="">Any Budget</option>
          <option value="500000">Under ₹5 Lakhs</option>
          <option value="1000000">Under ₹10 Lakhs</option>
          <option value="1500000">Under ₹15 Lakhs</option>
          <option value="2000000">Under ₹20 Lakhs</option>
        </select>
        
        <select 
          className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-4 text-slate-700 font-medium focus:outline-none focus:ring-2 focus:ring-red-500/20 focus:border-red-500 appearance-none cursor-pointer"
          value={vehicleType}
          onChange={(e) => setVehicleType(e.target.value)}
        >
          <option value="">All Vehicle Types</option>
          <option value="Hatchback">Hatchback</option>
          <option value="Sedan">Sedan</option>
          <option value="SUV">SUV</option>
        </select>
        
        <button 
          onClick={handleSearch}
          className="bg-red-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-red-700 transition-colors flex items-center justify-center gap-2 md:w-auto w-full shadow-lg shadow-red-600/20"
        >
          <Search size={20} />
          Search
        </button>
      </div>
    </div>
  );
}