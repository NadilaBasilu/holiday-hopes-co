import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
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
import { Navbar } from "@/components/Navbar";
import travelerImg from "@/assets/Traveler.jpeg";
import { Button } from "@/components/ui/button";
import {
  Plane,
  MapPin,
  Phone,
  Mail,
  Calendar,
  Check,
  Star,
  Hotel,
  Utensils,
  Ticket,
} from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ceyline Travels - Sancharaka Udawa" },
      {
        name: "description",
        content:
          "Exclusive Bangkok & Malaysia tour packages from Ceyline Travels at Sancharaka Udawa, 15-16 May 2026. From LKR 82,500. 4-star hotels, all-inclusive.",
      },
      { property: "og:title", content: "Ceyline Travels — Bangkok & Malaysia Packages" },
      {
        property: "og:description",
        content: "Special Sancharaka Udawa 2026 deals to Bangkok & Malaysia from Colombo.",
      },
    ],
  }),
  component: Index,
});

const tour1Includes = [
  { icon: Hotel, text: "01 Night Pattaya + 03 Nights Bangkok (4★)" },
  { icon: Utensils, text: "Daily breakfast throughout the tour" },
  { icon: Ticket, text: "Dream World (Super Visa) + Snow Town with lunch" },
  { icon: Ticket, text: "Chao Phraya Princess Dinner Cruise" },
  { icon: Plane, text: "Return airport transfers" },
  { icon: Star, text: "Free Pattaya tour with on-arrival breakfast" },
];

const tour2Includes = [
  { icon: Hotel, text: "03 Nights stay in 4★ hotels" },
  { icon: Utensils, text: "Daily breakfast throughout the tour" },
  { icon: MapPin, text: "Half-day City Tour" },
  { icon: Ticket, text: "Petronas Twin Towers — Skybridge & Observation Deck" },
  { icon: Ticket, text: "Genting Highlands + 2-way cable car + Batu Caves" },
  { icon: Star, text: "Sunway Lagoon Theme Park + Private transfers" },
];

const destinationImages = [
  { src: bangkokImg, name: "Thailand" },
  { src: malaysiaImg, name: "Malaysia" },
  { src: indiaImg, name: "India" },
  { src: vietnamImg, name: "Vietnam" },
  { src: maldivesImg, name: "Maldives" },
  { src: uaeImg, name: "UAE" },
  { src: chinaImg, name: "China" },
  { src: japanImg, name: "Japan" },
  { src: indonesiaImg, name: "Indonesia" },
  { src: philippinesImg, name: "Philippines" },
  { src: turkeyImg, name: "Turkey" },
  { src: egyptImg, name: "Egypt" },
];

const destinationImages2 = [
  { src: azerbaijanImg, name: "Azerbaijan" },
  { src: kenyaImg, name: "Kenya" },
  { src: tanzaniaImg, name: "Tanzania" },
  { src: southAfricaImg, name: "South Africa" },
  { src: franceImg, name: "France" },
  { src: switzerlandImg, name: "Switzerland" },
  { src: liechtensteinImg, name: "Liechtenstein" },
  { src: spainImg, name: "Spain" },
  { src: portugalImg, name: "Portugal" },
  { src: italyImg, name: "Italy" },
  { src: germanyImg, name: "Germany" },
  { src: netherlandsImg, name: "Netherlands" },
];

function Index() {
  const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-[#F7F7F7]">
        {/* Mobile/Tablet: Traveler as background */}
        <div
          className="absolute inset-0 md:hidden bg-cover bg-top bg-no-repeat"
          style={{ backgroundImage: `url(${travelerImg})`, backgroundSize: '75%', backgroundPosition: 'right bottom', backgroundColor: '#F7F7F7' }}
        />

        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Left: Text */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 border border-blue-200 text-blue-700 text-xs uppercase tracking-[0.2em] mb-6">
                <Calendar className="w-3.5 h-3.5" />
                Sancharaka Udawa · 15 & 16 May 2026
              </div>
              <h1 className="text-[#0a3d8f] text-6xl md:text-8xl lg:text-[7rem] leading-[1.05] max-w-4xl font-black tracking-tight" style={{ fontFamily: "'Playfair Display', serif" }}>
                Explore <span className="italic text-[#1E90FF]">the World.</span>
              </h1>
              <p className="mt-6 text-gray-600 text-lg md:text-xl max-w-xl font-light">
                Discover unforgettable memories through exclusive travel experiences, exciting adventures, and carefully curated holiday packages by Ceyline Travels.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#packages">
                  <Button
                    size="lg"
                    className="bg-[#1E90FF] hover:bg-[#0a3d8f] text-white font-bold uppercase tracking-wider px-8"
                  >
                    Explore Packages
                  </Button>
                </a>
                <Button
                    size="lg"
                    variant="outline"
                    className="border-[#1E90FF] text-[#1E90FF] hover:bg-blue-50 font-semibold uppercase tracking-wider px-8"
                    onClick={() => navigate({ to: '/inquiry' })}
                  >
                    Travel Inquiry Form
                  </Button>
              </div>
            </div>

            {/* Right: Traveler Image — desktop only */}
            <div className="hidden md:flex justify-center items-end">
              <img
                src={travelerImg}
                alt="Traveler"
                className="h-[520px] w-auto object-cover object-top translate-y-[20px]"
              />
            </div>
          </div>
        </div>
      </section>


      {/* Event banner - Destination Image Carousel */}
      <section id="event" className="bg-gradient-brand overflow-hidden py-6">
        <div className="flex gap-4 animate-scroll-left" style={{ width: 'max-content' }}>
          {[...destinationImages, ...destinationImages2, ...destinationImages, ...destinationImages2].map((img, i) => (
            <div key={i} className="w-48 h-32 rounded-xl overflow-hidden flex-shrink-0">
              <img src={img.src} alt={img.name} className="w-full h-full object-cover" />
            </div>
          ))}
        </div>
      </section>

      <section id="packages" className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <p className="text-xs uppercase tracking-[0.3em] text-accent">Featured Packages</p>
            <h2 className="font-display text-5xl md:text-6xl mt-3">Hand-picked holidays</h2>
            <p className="text-muted-foreground mt-4">
              Special show prices available exclusively at Sancharaka Udawa 2026.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Tour 1 */}
            <article className="bg-gradient-card rounded-3xl overflow-hidden shadow-card border border-border transition-smooth hover:-translate-y-2 hover:shadow-glow">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={bangkokImg}
                  alt="Bangkok skyline at sunset"
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                  loading="lazy"
                  width={1280}
                  height={896}
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Tour 01
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/80 text-xs uppercase tracking-widest">Thailand</p>
                  <h3 className="font-display text-white text-4xl">Bangkok & Pattaya</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    04 Nights · 05 Days
                  </span>
                </div>
                <div className="flex items-end justify-between mb-6 pb-6 border-b border-border">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">From</p>
                    <p className="font-display text-5xl text-primary">
                      LKR 82,500<span className="text-lg text-muted-foreground">/-</span>
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-accent">+ Free Pattaya Tour</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tour1Includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <item.icon className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 font-bold uppercase tracking-wider">
                    Reserve This Tour
                  </Button>
                </a>
              </div>
            </article>

            {/* Tour 2 */}
            <article className="bg-gradient-card rounded-3xl overflow-hidden shadow-card border border-border transition-smooth hover:-translate-y-2 hover:shadow-glow">
              <div className="relative h-72 overflow-hidden">
                <img
                  src={malaysiaImg}
                  alt="Petronas Twin Towers, Kuala Lumpur"
                  className="w-full h-full object-cover transition-smooth hover:scale-105"
                  loading="lazy"
                  width={1280}
                  height={896}
                />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  Tour 02
                </div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">
                  10% Off
                </div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/80 text-xs uppercase tracking-widest">Malaysia</p>
                  <h3 className="font-display text-white text-4xl">Kuala Lumpur & Genting</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">
                    03 Nights · 04 Days
                  </span>
                </div>
                <div className="flex items-end justify-between mb-6 pb-6 border-b border-border">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">From</p>
                    <p className="font-display text-5xl text-primary">
                      LKR 94,500<span className="text-lg text-muted-foreground">/-</span>
                    </p>
                  </div>
                  <span className="text-sm font-semibold text-accent">Visa Fees Free</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {tour2Includes.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm">
                      <item.icon className="w-4 h-4 mt-0.5 text-accent flex-shrink-0" />
                      <span>{item.text}</span>
                    </li>
                  ))}
                </ul>
                <a href="#contact">
                  <Button className="w-full bg-primary hover:bg-primary/90 font-bold uppercase tracking-wider">
                    Reserve This Tour
                  </Button>
                </a>
              </div>
            </article>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-10 uppercase tracking-widest">
            Terms and conditions apply.
          </p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            {
              icon: Hotel,
              label: "4★ Hotels",
              text: "Quality accommodation across every destination.",
            },
            {
              icon: Plane,
              label: "All-Inclusive",
              text: "Flights, transfers, breakfast and curated tours.",
            },
            {
              icon: Check,
              label: "Trusted Operator",
              text: "Decades of experience crafting holidays.",
            },
            {
              icon: Star,
              label: "Best Value",
              text: "Exclusive show pricing for Sancharaka Udawa.",
            },
          ].map((f, i) => (
            <div key={i} className="text-center">
              <div className="w-14 h-14 mx-auto rounded-2xl bg-gradient-brand flex items-center justify-center text-primary-foreground mb-4 shadow-glow">
                <f.icon className="w-6 h-6" />
              </div>
              <h3 className="font-display text-2xl">{f.label}</h3>
              <p className="text-muted-foreground text-sm mt-2">{f.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="py-24 bg-gradient-brand text-primary-foreground">
        <div className="max-w-5xl mx-auto px-6 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">
            Ready to travel?
          </p>
          <h2 className="font-display text-5xl md:text-6xl mt-3">Let's plan your trip</h2>
          <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">
            Reach out to our team for bookings, queries, or to customise your itinerary.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            <a
              href="tel:+94114511064"
              className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-6 transition-smooth hover:bg-primary-foreground/15"
            >
              <Phone className="w-6 h-6 mb-3" />
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70">
                Call us
              </p>
              <p className="text-xl font-semibold mt-1">+94 11 4511064</p>
            </a>
            <a
              href="mailto:travels@ceyline.lk"
              className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-6 transition-smooth hover:bg-primary-foreground/15"
            >
              <Mail className="w-6 h-6 mb-3" />
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70">
                Email us
              </p>
              <p className="text-xl font-semibold mt-1">travels@ceyline.lk</p>
            </a>
            <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-6">
              <MapPin className="w-6 h-6 mb-3" />
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70">
                Visit us
              </p>
              <p className="text-base font-semibold mt-1 leading-snug">
                No 536, R A De Mel Mawatha, Colombo 3, Sri Lanka
              </p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
          <div className="flex items-center">
            <p className="font-display tracking-wider text-base text-primary-foreground/70">Ceyline Travels</p>
          </div>
          <p>© 2026 Ceyline Travels. All rights reserved.</p>
          <p className="uppercase tracking-widest text-xs">Terms & conditions apply</p>
        </div>
      </footer>
    </div>
  );
}
