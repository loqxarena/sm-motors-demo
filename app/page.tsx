import { ChevronRight, Fuel, Settings2, Gauge, ShieldCheck, MapPin, Star, Banknote, Clock, TrendingDown, CheckCircle2, FileCheck, Tags } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSearch from '@/components/HeroSearch';
import FadeIn from '@/components/FadeIn';

// UPDATED DATA: Fixed Mahindra Logo using a PNG thumbnail to bypass SVG hotlink blocks
const brandsData = [
  { name: "Maruti Suzuki", logo: "https://cdn.simpleicons.org/suzuki/0F172A" },
  { name: "Hyundai", logo: "https://cdn.simpleicons.org/hyundai/0F172A" },
  { name: "Tata", logo: "https://cdn.simpleicons.org/tata/0F172A" },
  { name: "Mahindra", logo: "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3d/Mahindra_and_Mahindra_Logo.svg/256px-Mahindra_and_Mahindra_Logo.svg.png" },
  { name: "Toyota", logo: "https://cdn.simpleicons.org/toyota/0F172A" },
  { name: "Kia", logo: "https://cdn.simpleicons.org/kia/0F172A" }
];

const trendingCars = [
  {
    id: 1,
    name: "Toyota Fortuner 2.8 4x2 AT",
    price: "₹32,50,000",
    emi: "₹65,400/m",
    km: "42,000",
    fuel: "Diesel",
    type: "Automatic",
    badge: "High Demand",
    image: "https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 2,
    name: "Hyundai Creta SX (O) Diesel",
    price: "₹14,20,000",
    emi: "₹28,500/m",
    km: "18,500",
    fuel: "Diesel",
    type: "Manual",
    badge: "Recently Added",
    image: "https://images.unsplash.com/photo-1619682817481-e994891cd1f5?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 3,
    name: "Mahindra XUV700 AX7",
    price: "₹19,80,000",
    emi: "₹39,200/m",
    km: "12,000",
    fuel: "Petrol",
    type: "Automatic",
    badge: "2 Enquiries Today",
    image: "https://images.unsplash.com/photo-1566008885218-90abf9200ddb?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: 4,
    name: "Kia Seltos GTX Plus",
    price: "₹15,50,000",
    emi: "₹31,000/m",
    km: "24,000",
    fuel: "Petrol",
    type: "Automatic",
    badge: "Best Value",
    image: "https://images.unsplash.com/photo-1542362567-b07e54358753?auto=format&fit=crop&w=800&q=80"
  }
];

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA] font-sans">
      
      {/* 1. AGGREGATOR HERO SECTION */}
      <section className="relative bg-slate-950 pt-20 pb-36 lg:pt-32 lg:pb-48 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image 
            src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?auto=format&fit=crop&w=1920&q=80" 
            alt="Premium Dealership" 
            fill 
            className="object-cover object-center opacity-40 mix-blend-luminosity"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#F8F9FA] via-slate-950/80 to-slate-950/90"></div>
        </div>

        <FadeIn direction="up" delay={0}>
          <div className="relative z-10 max-w-7xl mx-auto text-center px-2">
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-red-500/10 border border-red-500/20 text-red-500 text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
              Live Bank Auctions
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-7xl font-black text-white tracking-tight mb-6 leading-[1.1]">
              Skip the Middleman. <br className="hidden md:block" />
              Buy at <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Auction Prices.</span>
            </h1>
            <p className="text-base md:text-xl text-slate-300 font-medium max-w-2xl mx-auto mb-8">
              Gain direct access to 500+ verified seized vehicles in Hyderabad. Wholesale pricing directly to the public.
            </p>
          </div>
        </FadeIn>
      </section>

      {/* 2. THE SEARCH COMPONENT */}
      <section className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 -mt-24 md:-mt-32 mb-16">
        <FadeIn direction="up" delay={0.1}>
          <HeroSearch />
        </FadeIn>
      </section>

      {/* 3. POPULAR BRANDS SECTION */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <FadeIn direction="up" delay={0.2}>
          <div className="flex justify-between items-end mb-6 md:mb-8">
            <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">Browse by Brand</h2>
            <button className="text-red-600 font-bold text-sm flex items-center hover:text-red-700 transition-all group">
              View All <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
          <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-3 md:gap-4">
            {brandsData.map((brand, idx) => (
              <div key={idx} className="bg-white border border-slate-200 hover:border-slate-300 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 rounded-2xl p-4 md:p-6 flex flex-col items-center justify-center cursor-pointer group">
                <div className="w-14 h-14 bg-slate-50 rounded-full mb-3 group-hover:bg-red-50 transition-colors border border-slate-100 flex items-center justify-center overflow-hidden p-2">
                   <img 
                     src={brand.logo} 
                     alt={brand.name} 
                     className="w-8 h-8 object-contain filter grayscale group-hover:grayscale-0 opacity-70 group-hover:opacity-100 transition-all"
                   />
                </div>
                <span className="font-bold text-slate-700 text-xs md:text-sm text-center group-hover:text-slate-900 line-clamp-2">{brand.name}</span>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* 4. DENSE INVENTORY CARDS */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <FadeIn direction="up" delay={0.1}>
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-6 md:mb-8 gap-4">
            <div>
              <h2 className="text-xl md:text-2xl font-black text-slate-900 tracking-tight mb-1">Trending Auction Vehicles</h2>
              <p className="text-slate-500 text-xs md:text-sm font-medium">These vehicles are priced below market value and sell fast.</p>
            </div>
            <button className="text-red-600 font-bold text-sm flex items-center hover:text-red-700 transition-all group">
              View All Inventory <ChevronRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {trendingCars.map((car, idx) => (
            <FadeIn key={car.id} delay={idx * 0.1} direction="up">
              <Link href={`/inventory/${car.id}`} className="block h-full">
                <div className="bg-white border border-slate-200 rounded-2xl overflow-hidden hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.1)] hover:border-red-200 transition-all duration-300 group flex flex-col h-full cursor-pointer relative">
                  
                  {/* Urgency Badge */}
                  <div className="absolute top-3 right-3 z-10 bg-slate-900/90 backdrop-blur-md text-white text-[10px] font-bold px-2.5 py-1 rounded-full flex items-center gap-1.5 shadow-lg">
                    <Clock size={12} className={car.badge.includes('Demand') ? 'text-red-400' : 'text-slate-300'} />
                    {car.badge}
                  </div>

                  {/* Image Box */}
                  <div className="relative aspect-[4/3] bg-slate-100 overflow-hidden">
                    <Image 
                      src={car.image} 
                      alt={car.name} 
                      fill 
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-3 left-3 bg-white/95 backdrop-blur px-2.5 py-1 rounded text-[10px] font-black uppercase tracking-wider text-slate-900 flex items-center gap-1 shadow-sm">
                      <ShieldCheck size={12} className="text-green-600" /> Inspected
                    </div>
                  </div>

                  {/* Data Box */}
                  <div className="p-4 md:p-5 flex flex-col flex-grow">
                    <h3 className="text-base md:text-lg font-bold text-slate-900 mb-1 line-clamp-1 group-hover:text-red-600 transition-colors">{car.name}</h3>
                    
                    {/* Price & EMI */}
                    <div className="flex items-end gap-2 md:gap-3 mb-4">
                      <span className="text-xl md:text-2xl font-black text-slate-900 tracking-tight">{car.price}</span>
                      <span className="text-[10px] md:text-xs font-semibold text-slate-500 mb-1">EMI: {car.emi}</span>
                    </div>

                    {/* Dense Specs Row */}
                    <div className="flex items-center justify-between text-[10px] md:text-xs font-semibold text-slate-600 mb-5 bg-slate-50 p-2 md:p-2.5 rounded-lg border border-slate-100">
                      <span className="flex items-center gap-1"><Gauge size={14} className="text-slate-400 shrink-0"/> <span className="truncate">{car.km}</span></span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0 mx-1"></span>
                      <span className="flex items-center gap-1"><Fuel size={14} className="text-slate-400 shrink-0"/> <span className="truncate">{car.fuel}</span></span>
                      <span className="w-1 h-1 rounded-full bg-slate-300 shrink-0 mx-1"></span>
                      <span className="flex items-center gap-1"><Settings2 size={14} className="text-slate-400 shrink-0"/> <span className="truncate">{car.type}</span></span>
                    </div>

                    {/* Actions */}
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
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 bg-white border-y border-slate-200 mt-12">
        <FadeIn direction="up">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-4 tracking-tight">The S M MOTORS Advantage</h2>
            <p className="text-slate-500 text-lg">We bring transparency and unbeatable value to the Hyderabad used car market.</p>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { icon: ShieldCheck, title: "Verified Documentation", desc: "Clear titles directly from financial institutions." },
            { icon: TrendingDown, title: "Lowest Market Prices", desc: "Buy at wholesale auction rates, not retail." },
            { icon: Clock, title: "Fast Vehicle Delivery", desc: "Streamlined process to get you on the road." },
            { icon: MapPin, title: "Trusted in Hyderabad", desc: "Local expertise and dedicated support." }
          ].map((feature, idx) => (
            <FadeIn key={idx} delay={idx * 0.1} direction="up">
              <div className="bg-[#F8F9FA] p-8 rounded-3xl shadow-lg shadow-slate-200/50 border border-slate-100 hover:-translate-y-1 transition-transform duration-300 h-full flex flex-col">
                <div className="bg-red-50 border border-red-100 w-16 h-16 rounded-2xl flex items-center justify-center text-red-600 mb-6">
                  <feature.icon size={32} />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 tracking-tight">{feature.title}</h3>
                <p className="text-slate-600 leading-relaxed text-sm mt-auto">{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* HOW IT WORKS SECTION */}
      <section id="how-it-works" className="py-24 bg-[#F8F9FA]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-black text-slate-950 mb-4 tracking-tight">The Auction-to-Garage Timeline</h2>
              <p className="text-slate-500 text-lg">A simple, transparent path to massive savings on your next car.</p>
            </div>
          </FadeIn>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Bank Repossession", desc: "Banks repossess vehicles from loan defaulters." },
              { step: "02", title: "Auction to Dealer", desc: "Vehicles are auctioned to licensed dealers like us." },
              { step: "03", title: "Customer Purchase", desc: "Customers can purchase them at lower prices." },
              { step: "04", title: "Complete Paperwork", desc: "Clear titles directly from financial institutions." }
            ].map((item, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <div className="relative group p-6 bg-white rounded-3xl border border-slate-200 h-full flex flex-col">
                  <div className="text-7xl font-black text-slate-100 absolute -top-10 -left-6 z-0 group-hover:text-red-50 transition-colors">
                    {item.step}
                  </div>
                  <div className="relative z-10 pt-4 flex flex-col h-full">
                    <h3 className="text-xl font-bold text-slate-900 mb-3 flex items-center gap-2">
                      <CheckCircle2 className="text-red-600" size={20} />
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed mt-auto text-sm">{item.desc}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINANCING */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
        <FadeIn direction="up" delay={0.1}>
          <div className="bg-gradient-to-br from-slate-950 to-slate-800 rounded-3xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 shadow-2xl shadow-slate-900/30 overflow-hidden relative border border-slate-800">
            <div className="absolute -right-20 -top-20 opacity-10">
              <Banknote size={300} />
            </div>
            <div className="relative z-10 text-center md:text-left max-w-xl">
              <h2 className="text-3xl md:text-4xl font-black text-white tracking-tight mb-4 leading-tight">Need Financing?</h2>
              <p className="text-slate-300 text-lg mb-6">We partner with leading banks to provide up to 90% financing on seized auction vehicles with instant approvals.</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
                <button className="bg-red-600 text-white font-bold py-3.5 px-8 rounded-xl hover:bg-red-500 transition-colors shadow-lg shadow-red-600/30">
                  Check Eligibility
                </button>
                <button className="bg-white/10 text-white border border-white/20 font-bold py-3.5 px-8 rounded-xl hover:bg-white/20 transition-colors backdrop-blur-sm">
                  EMI Calculator
                </button>
              </div>
            </div>
            <div className="relative z-10 hidden md:block">
               <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl w-64 text-center">
                  <p className="text-slate-300 text-sm font-bold uppercase tracking-wider mb-2">Starting Interest</p>
                  <p className="text-5xl font-black text-white">8.5<span className="text-2xl">%</span></p>
                  <p className="text-slate-400 text-xs mt-2">Subject to credit profile</p>
               </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* 6. SOCIAL PROOF / TESTIMONIALS */}
      <section className="bg-white border-y border-slate-200 mt-8 md:mt-12 py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn direction="up">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-black text-slate-900 tracking-tight mb-4">Trusted by Hyderabad</h2>
              <p className="text-slate-500 text-lg">Don't just take our word for it. Here is what our buyers say.</p>
            </div>
          </FadeIn>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
            {[
              { name: "Rahul T.", car: "Bought a Hyundai Creta", text: "I was skeptical about bank auctions, but S M Motors handled all the RTO paperwork. I saved almost ₹2.5 Lakhs compared to Spinny." },
              { name: "Sneha M.", car: "Bought a Honda City", text: "The transparency is unmatched. They showed me the actual bank NOC before I even paid the booking amount. Highly professional dealership." },
              { name: "Karthik R.", car: "Bought a Toyota Innova", text: "Got a commercial Innova at wholesale rate. Condition was exactly as described. Best dealership in Safilguda hands down." }
            ].map((review, idx) => (
              <FadeIn key={idx} delay={idx * 0.1} direction="up">
                <div className="bg-[#F8F9FA] p-8 rounded-3xl border border-slate-200 flex flex-col h-full">
                  <div className="flex text-yellow-400 mb-4 gap-1">
                    {[...Array(5)].map((_, i) => <Star key={i} size={18} fill="currentColor" />)}
                  </div>
                  <p className="text-slate-700 italic mb-6 leading-relaxed flex-grow">"{review.text}"</p>
                  <div className="mt-auto pt-4 border-t border-slate-200">
                    <p className="font-black text-slate-900">{review.name}</p>
                    <p className="text-xs text-slate-500 font-medium tracking-wide uppercase mt-1">{review.car}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* 7. TRUST BANNER (UPDATED WITH ICONS) */}
      <section className="bg-slate-950 text-white py-12">
        <FadeIn direction="up" delay={0.2}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 text-center divide-y md:divide-y-0 md:divide-x divide-slate-800">
            <div className="p-2 md:p-4 pt-0 md:pt-4 flex flex-col items-center justify-center">
              <FileCheck size={28} className="text-red-500 mb-3" />
              <h4 className="text-lg md:text-xl font-black mb-2">100% Direct Bank Titles</h4>
              <p className="text-slate-400 text-xs md:text-sm max-w-xs mx-auto md:max-w-none">No shady third-party transfers. Clean paperwork guaranteed.</p>
            </div>
            <div className="p-2 md:p-4 pt-6 md:pt-4 flex flex-col items-center justify-center">
              <Tags size={28} className="text-red-500 mb-3" />
              <h4 className="text-lg md:text-xl font-black mb-2">Wholesale Pricing</h4>
              <p className="text-slate-400 text-xs md:text-sm max-w-xs mx-auto md:max-w-none">Skip the retail markup. Buy directly at auction floor rates.</p>
            </div>
            <div className="p-2 md:p-4 pt-6 md:pt-4 flex flex-col items-center justify-center">
              <MapPin size={28} className="text-red-500 mb-3" />
              <h4 className="text-base md:text-lg font-bold">Visit our Hyderabad Yard</h4>
              <p className="text-slate-400 text-xs mt-1">Safilguda, Malkajgiri - 500047</p>
            </div>
          </div>
        </FadeIn>
      </section>
    </main>
  );
}