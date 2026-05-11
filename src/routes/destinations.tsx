import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import bangkokImg from "@/assets/bangkok.jpg";
import malaysiaImg from "@/assets/malaysia.jpg";
import indiaImg from "@/assets/India.jpg";
import vietnamImg from "@/assets/Vietnam.jpeg";
import maldivesImg from "@/assets/Maldives.jpg";
import uaeImg from "@/assets/UAE.jpg";
import chinaImg from "@/assets/China.jpg";
import japanImg from "@/assets/Japan.jpg";
import indonesiaImg from "@/assets/Indonesia.jpg";
import philippinesImg from "@/assets/Philippines.jpeg";
import turkeyImg from "@/assets/Turkey.jpg";
import egyptImg from "@/assets/Egypt.jpg";
import azerbaijanImg from "@/assets/Azerbaijan.jpg";
import kenyaImg from "@/assets/Kenya.jpg";
import tanzaniaImg from "@/assets/Tanzania.png";
import southAfricaImg from "@/assets/South Africa.jpg";
import franceImg from "@/assets/France.jpeg";
import switzerlandImg from "@/assets/Switzerland.jpg";
import liechtensteinImg from "@/assets/Liechtenstein.jpg";
import spainImg from "@/assets/Spain.jpg";
import portugalImg from "@/assets/Portugal.jpg";
import italyImg from "@/assets/Italy.jpg";
import germanyImg from "@/assets/Germany.jpg";
import netherlandsImg from "@/assets/Netherlands.jpg";
import { MapPin, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/destinations")({
  head: () => ({
    meta: [
      { title: "Destinations — Ceyline Travels" },
      { name: "description", content: "Explore our handpicked travel destinations." },
    ],
  }),
  component: Destinations,
});

const destinations = [
  { id: 1, name: "Thailand", country: "Thailand", flag: "🇹🇭", image: bangkokImg, gradient: "", region: "Asia", highlights: ["Dream World Theme Park", "Chao Phraya Cruise", "Snow Town", "Pattaya Beach"] },
  { id: 2, name: "Malaysia", country: "Malaysia", flag: "🇲🇾", image: malaysiaImg, gradient: "", region: "Asia", highlights: ["Petronas Twin Towers", "Genting Highlands", "Batu Caves", "Sunway Lagoon"] },
  { id: 3, name: "India", country: "India", flag: "🇮🇳", image: indiaImg, gradient: "", region: "Asia", highlights: ["Taj Mahal", "Kerala Backwaters", "Rajasthan Forts", "Goa Beaches"] },
  { id: 4, name: "Vietnam", country: "Vietnam", flag: "🇻🇳", image: vietnamImg, gradient: "", region: "Asia", highlights: ["Ha Long Bay", "Hoi An Old Town", "Ho Chi Minh City", "Sapa Rice Terraces"] },
  { id: 5, name: "Maldives", country: "Maldives", flag: "🇲🇻", image: maldivesImg, gradient: "", region: "Asia", highlights: ["Overwater Bungalows", "Snorkelling & Diving", "Sunset Cruises", "Private Beach"] },
  { id: 6, name: "UAE", country: "UAE", flag: "🇦🇪", image: uaeImg, gradient: "", region: "Middle East", highlights: ["Burj Khalifa", "Desert Safari", "Dubai Mall", "Abu Dhabi Grand Mosque"] },
  { id: 7, name: "China", country: "China", flag: "🇨🇳", image: chinaImg, gradient: "", region: "Asia", highlights: ["Great Wall", "Forbidden City", "Li River", "Shanghai Skyline"] },
  { id: 8, name: "Japan", country: "Japan", flag: "🇯🇵", image: japanImg, gradient: "", region: "Asia", highlights: ["Mount Fuji", "Tokyo Shibuya", "Kyoto Temples", "Cherry Blossoms"] },
  { id: 9, name: "Indonesia", country: "Indonesia", flag: "🇮🇩", image: indonesiaImg, gradient: "", region: "Asia", highlights: ["Bali Temples", "Komodo Island", "Borobudur", "Raja Ampat"] },
  { id: 10, name: "Philippines", country: "Philippines", flag: "🇵🇭", image: philippinesImg, gradient: "", region: "Asia", highlights: ["Palawan Islands", "Chocolate Hills", "Boracay Beach", "Tubbataha Reef"] },
  { id: 11, name: "Turkey", country: "Turkey", flag: "🇹🇷", image: turkeyImg, gradient: "", region: "Europe / Asia", highlights: ["Cappadocia Balloons", "Hagia Sophia", "Pamukkale", "Bosphorus Cruise"] },
  { id: 12, name: "Egypt", country: "Egypt", flag: "🇪🇬", image: egyptImg, gradient: "", region: "Africa", highlights: ["Pyramids of Giza", "Nile River Cruise", "Luxor Temples", "Red Sea Diving"] },
  { id: 13, name: "Azerbaijan", country: "Azerbaijan", flag: "🇦🇿", image: azerbaijanImg, gradient: "", region: "Europe / Asia", highlights: ["Baku Old City", "Flame Towers", "Gobustan", "Sheki Palace"] },
  { id: 14, name: "Kenya", country: "Kenya", flag: "🇰🇪", image: kenyaImg, gradient: "", region: "Africa", highlights: ["Masai Mara Safari", "Mount Kenya", "Amboseli Park", "Diani Beach"] },
  { id: 15, name: "Tanzania", country: "Tanzania", flag: "🇹🇿", image: tanzaniaImg, gradient: "", region: "Africa", highlights: ["Serengeti Safari", "Mount Kilimanjaro", "Zanzibar Island", "Ngorongoro Crater"] },
  { id: 16, name: "South Africa", country: "South Africa", flag: "🇿🇦", image: southAfricaImg, gradient: "", region: "Africa", highlights: ["Cape Town", "Kruger National Park", "Table Mountain", "Garden Route"] },
  { id: 17, name: "France", country: "France", flag: "🇫🇷", image: franceImg, gradient: "", region: "Europe", highlights: ["Eiffel Tower", "Louvre Museum", "French Riviera", "Mont Saint-Michel"] },
  { id: 18, name: "Switzerland", country: "Switzerland", flag: "🇨🇭", image: switzerlandImg, gradient: "", region: "Europe", highlights: ["Swiss Alps", "Lake Geneva", "Interlaken", "Jungfraujoch"] },
  { id: 19, name: "Liechtenstein", country: "Liechtenstein", flag: "🇱🇮", image: liechtensteinImg, gradient: "", region: "Europe", highlights: ["Vaduz Castle", "Rhine Valley", "Malbun Ski Resort", "National Museum"] },
  { id: 20, name: "Spain", country: "Spain", flag: "🇪🇸", image: spainImg, gradient: "", region: "Europe", highlights: ["Sagrada Familia", "Alhambra Palace", "Ibiza", "La Tomatina"] },
  { id: 21, name: "Portugal", country: "Portugal", flag: "🇵🇹", image: portugalImg, gradient: "", region: "Europe", highlights: ["Lisbon Trams", "Algarve Beaches", "Sintra Palaces", "Porto Wine"] },
  { id: 22, name: "Italy", country: "Italy", flag: "🇮🇹", image: italyImg, gradient: "", region: "Europe", highlights: ["Colosseum", "Venice Canals", "Amalfi Coast", "Tuscany Vineyards"] },
  { id: 23, name: "Germany", country: "Germany", flag: "🇩🇪", image: germanyImg, gradient: "", region: "Europe", highlights: ["Neuschwanstein Castle", "Berlin Wall", "Black Forest", "Oktoberfest"] },
  { id: 24, name: "Netherlands", country: "Netherlands", flag: "🇳🇱", image: netherlandsImg, gradient: "", region: "Europe", highlights: ["Amsterdam Canals", "Keukenhof Tulips", "Windmills", "Van Gogh Museum"] },
];

const regions = ["All", "Asia", "Middle East", "Europe / Asia", "Africa", "Europe"];

function Destinations() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Page Hero */}
      <section className="pt-[140px] pb-10 bg-[#F7F7F7] border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-xs uppercase tracking-[0.3em] text-[#1E90FF]">Explore</p>
          <h1 className="font-display text-5xl md:text-6xl text-[#0a3d8f] mt-1">Our Destinations</h1>
          <p className="text-gray-500 mt-2 text-sm">{destinations.length} destinations worldwide</p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {destinations.map((dest) => (
              <article
                key={dest.id}
                className="bg-white rounded-2xl overflow-hidden shadow-card border border-border transition-smooth hover:-translate-y-2 hover:shadow-glow group"
              >
                {/* Image / Gradient */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={dest.image}
                    alt={dest.name}
                    className="w-full h-full object-cover transition-smooth group-hover:scale-105"
                    loading="lazy"
                  />
                  <div className="absolute top-3 left-3 bg-black/40 backdrop-blur-sm text-white px-2 py-0.5 rounded-full text-xs font-medium">
                    {dest.region}
                  </div>
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                    <h2 className="font-display text-white text-xl leading-tight">{dest.name}</h2>
                  </div>
                </div>

                {/* Details */}
                <div className="p-4">
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mb-3">
                    <MapPin className="w-3 h-3" />
                    {dest.region}
                  </div>

                  {/* Highlights */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {dest.highlights.map((h, i) => (
                      <span key={i} className="bg-blue-50 text-[#1E90FF] text-xs px-2 py-0.5 rounded-full border border-blue-100">
                        {h}
                      </span>
                    ))}
                  </div>

                  <a href="/#contact">
                    <Button className="w-full bg-[#1E90FF] hover:bg-[#0a3d8f] text-white font-bold uppercase tracking-wider text-xs">
                      Book Now
                    </Button>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 text-center" style={{ background: "linear-gradient(to right, #0a3d8f, #1E90FF)" }}>
        <p className="text-white/70 text-xs uppercase tracking-widest mb-2">Ready to explore?</p>
        <h2 className="font-display text-4xl md:text-5xl text-white mb-4">Let's plan your journey</h2>
        <a href="tel:+94114511064" className="inline-flex items-center gap-2 bg-white text-[#0a3d8f] font-bold px-8 py-3 rounded-full hover:bg-blue-50 transition-smooth uppercase tracking-wider text-sm">
          <Phone className="w-4 h-4" />
          +94 11 4511064
        </a>
      </section>

      <footer className="bg-[#0a3d8f] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© 2026 Ceyline Travels. All rights reserved.</p>
          <p className="uppercase tracking-widest text-xs">Terms & conditions apply</p>
        </div>
      </footer>
    </div>
  );
}
