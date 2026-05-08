import { createFileRoute } from "@tanstack/react-router";
import heroImg from "@/assets/hero.jpg";
import bangkokImg from "@/assets/bangkok.jpg";
import malaysiaImg from "@/assets/malaysia.jpg";
import { Button } from "@/components/ui/button";
import { Plane, MapPin, Phone, Mail, Calendar, Check, Star, Hotel, Utensils, Ticket } from "lucide-react";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ceyline Travels — Bangkok & Malaysia Tour Packages | Sancharaka Udawa 2026" },
      { name: "description", content: "Exclusive Bangkok & Malaysia tour packages from Ceyline Travels at Sancharaka Udawa, 15-16 May 2026. From LKR 82,500. 4-star hotels, all-inclusive." },
      { property: "og:title", content: "Ceyline Travels — Bangkok & Malaysia Packages" },
      { property: "og:description", content: "Special Sancharaka Udawa 2026 deals to Bangkok & Malaysia from Colombo." },
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

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="absolute top-0 inset-x-0 z-30">
        <div className="max-w-7xl mx-auto px-6 py-5 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 text-primary-foreground">
            <Plane className="w-6 h-6" />
            <span className="font-display text-2xl tracking-wider">Ceyline Travels</span>
          </a>
          <nav className="hidden md:flex items-center gap-8 text-primary-foreground/90 text-sm uppercase tracking-widest">
            <a href="#packages" className="hover:text-primary-foreground transition-smooth">Packages</a>
            <a href="#event" className="hover:text-primary-foreground transition-smooth">Event</a>
            <a href="#contact" className="hover:text-primary-foreground transition-smooth">Contact</a>
          </nav>
          <a href="#contact">
            <Button variant="secondary" className="font-semibold">Book Now</Button>
          </a>
        </div>
      </header>

      {/* Hero */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden">
        <img
          src={heroImg}
          alt="Tropical paradise destination"
          className="absolute inset-0 w-full h-full object-cover"
          width={1920}
          height={1088}
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 py-32 w-full">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 text-primary-foreground text-xs uppercase tracking-[0.2em] mb-6">
            <Calendar className="w-3.5 h-3.5" />
            Sancharaka Udawa · 15 & 16 May 2026
          </div>
          <h1 className="font-display text-primary-foreground text-6xl md:text-8xl lg:text-9xl leading-[0.9] max-w-4xl">
            Your next escape<br />starts here.
          </h1>
          <p className="mt-6 text-primary-foreground/85 text-lg md:text-xl max-w-xl font-light">
            Two unforgettable holiday packages to Bangkok and Malaysia — curated by Ceyline Travels with exclusive Sancharaka Udawa pricing.
          </p>
          <div className="mt-10 flex flex-wrap gap-4">
            <a href="#packages">
              <Button size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground font-bold uppercase tracking-wider px-8">
                Explore Packages
              </Button>
            </a>
            <a href="#contact">
              <Button size="lg" variant="outline" className="bg-transparent border-primary-foreground/40 text-primary-foreground hover:bg-primary-foreground/10 font-semibold uppercase tracking-wider px-8">
                Talk to us
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Event banner */}
      <section id="event" className="bg-gradient-brand text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">Meet us at</p>
            <h2 className="font-display text-4xl md:text-5xl mt-1">Sancharaka Udawa 2026</h2>
          </div>
          <div className="flex items-center gap-3 text-primary-foreground/90">
            <Calendar className="w-5 h-5" />
            <span className="text-lg">15<sup>th</sup> & 16<sup>th</sup> May 2026</span>
          </div>
          <a href="#packages">
            <Button size="lg" variant="secondary" className="font-bold uppercase tracking-wider">
              View Show Offers
            </Button>
          </a>
        </div>
      </section>

      {/* Packages */}
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
                <img src={bangkokImg} alt="Bangkok skyline at sunset" className="w-full h-full object-cover transition-smooth hover:scale-105" loading="lazy" width={1280} height={896} />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Tour 01</div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/80 text-xs uppercase tracking-widest">Thailand</p>
                  <h3 className="font-display text-white text-4xl">Bangkok & Pattaya</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">04 Nights · 05 Days</span>
                </div>
                <div className="flex items-end justify-between mb-6 pb-6 border-b border-border">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">From</p>
                    <p className="font-display text-5xl text-primary">LKR 82,500<span className="text-lg text-muted-foreground">/-</span></p>
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
                  <Button className="w-full bg-primary hover:bg-primary/90 font-bold uppercase tracking-wider">Reserve This Tour</Button>
                </a>
              </div>
            </article>

            {/* Tour 2 */}
            <article className="bg-gradient-card rounded-3xl overflow-hidden shadow-card border border-border transition-smooth hover:-translate-y-2 hover:shadow-glow">
              <div className="relative h-72 overflow-hidden">
                <img src={malaysiaImg} alt="Petronas Twin Towers, Kuala Lumpur" className="w-full h-full object-cover transition-smooth hover:scale-105" loading="lazy" width={1280} height={896} />
                <div className="absolute top-4 left-4 bg-accent text-accent-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">Tour 02</div>
                <div className="absolute top-4 right-4 bg-primary text-primary-foreground px-3 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider">10% Off</div>
                <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-black/70 to-transparent p-6">
                  <p className="text-white/80 text-xs uppercase tracking-widest">Malaysia</p>
                  <h3 className="font-display text-white text-4xl">Kuala Lumpur & Genting</h3>
                </div>
              </div>
              <div className="p-8">
                <div className="flex items-baseline gap-2 mb-2">
                  <span className="text-xs uppercase tracking-widest text-muted-foreground">03 Nights · 04 Days</span>
                </div>
                <div className="flex items-end justify-between mb-6 pb-6 border-b border-border">
                  <div>
                    <p className="text-xs uppercase tracking-widest text-muted-foreground">From</p>
                    <p className="font-display text-5xl text-primary">LKR 94,500<span className="text-lg text-muted-foreground">/-</span></p>
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
                  <Button className="w-full bg-primary hover:bg-primary/90 font-bold uppercase tracking-wider">Reserve This Tour</Button>
                </a>
              </div>
            </article>
          </div>

          <p className="text-center text-xs text-muted-foreground mt-10 uppercase tracking-widest">Terms and conditions apply.</p>
        </div>
      </section>

      {/* Why us */}
      <section className="py-24 bg-secondary/40">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-8">
          {[
            { icon: Hotel, label: "4★ Hotels", text: "Quality accommodation across every destination." },
            { icon: Plane, label: "All-Inclusive", text: "Flights, transfers, breakfast and curated tours." },
            { icon: Check, label: "Trusted Operator", text: "Decades of experience crafting holidays." },
            { icon: Star, label: "Best Value", text: "Exclusive show pricing for Sancharaka Udawa." },
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
          <p className="text-xs uppercase tracking-[0.3em] text-primary-foreground/70">Ready to travel?</p>
          <h2 className="font-display text-5xl md:text-6xl mt-3">Let's plan your trip</h2>
          <p className="mt-4 text-primary-foreground/85 max-w-xl mx-auto">
            Reach out to our team for bookings, queries, or to customise your itinerary.
          </p>
          <div className="grid md:grid-cols-3 gap-6 mt-12 text-left">
            <a href="tel:+94114511064" className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-6 transition-smooth hover:bg-primary-foreground/15">
              <Phone className="w-6 h-6 mb-3" />
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70">Call us</p>
              <p className="text-xl font-semibold mt-1">+94 11 4511064</p>
            </a>
            <a href="mailto:travels@ceyline.lk" className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-6 transition-smooth hover:bg-primary-foreground/15">
              <Mail className="w-6 h-6 mb-3" />
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70">Email us</p>
              <p className="text-xl font-semibold mt-1">travels@ceyline.lk</p>
            </a>
            <div className="bg-primary-foreground/10 backdrop-blur-md border border-primary-foreground/20 rounded-2xl p-6">
              <MapPin className="w-6 h-6 mb-3" />
              <p className="text-xs uppercase tracking-widest text-primary-foreground/70">Visit us</p>
              <p className="text-base font-semibold mt-1 leading-snug">No 536, R A De Mel Mawatha, Colombo 3, Sri Lanka</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-primary text-primary-foreground py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-primary-foreground/70">
          <div className="flex items-center gap-2">
            <Plane className="w-4 h-4" />
            <span className="font-display tracking-wider text-base">Ceyline Travels</span>
          </div>
          <p>© 2026 Ceyline Travels. All rights reserved.</p>
          <p className="uppercase tracking-widest text-xs">Terms & conditions apply</p>
        </div>
      </footer>
    </div>
  );
}
