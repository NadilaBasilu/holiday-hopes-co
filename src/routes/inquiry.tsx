import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Phone, Mail, MapPin, Send } from "lucide-react";

export const Route = createFileRoute("/inquiry")({
  head: () => ({
    meta: [
      { title: "Travel Inquiry Form — Ceyline Travels" },
      { name: "description", content: "Submit your travel inquiry to Ceyline Travels." },
    ],
  }),
  component: InquiryForm,
});

const destinations = [
  "Thailand (Special Offer)",
  "Malaysia (Special Offer)",
  "India",
  "Vietnam",
  "Maldives",
  "UAE",
  "China",
  "Japan",
  "Indonesia",
  "Philippines",
  "Turkey",
  "Egypt",
  "Azerbaijan",
  "Kenya",
  "Tanzania",
  "South Africa",
  "France",
  "Switzerland",
  "Liechtenstein",
  "Spain",
  "Portugal",
  "Italy",
  "Germany",
  "Netherlands",
];

const tripTimings = ["Within 1 month", "1–3 months", "3–6 months"];

function InquiryForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    contact: "",
    destination: "",
    timing: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-[#F7F7F7] text-foreground">
      <Navbar />

      <div className="pt-[140px] pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">

            {/* Left: Contact Details */}
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-[#1E90FF] mb-2">Get in touch</p>
              <h1 className="font-display text-5xl md:text-6xl text-[#0a3d8f] mb-4">Travel Inquiry</h1>
              <p className="text-gray-500 mb-10 text-base leading-relaxed">
                Fill in the form and our team will get back to you with the best travel package tailored just for you.
              </p>

              <div className="flex flex-col gap-6">
                <a href="tel:+94114511064" className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-smooth">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #0a3d8f, #1E90FF)" }}>
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400">Call us</p>
                    <p className="text-[#0a3d8f] font-semibold text-lg">+94 11 4511064</p>
                  </div>
                </a>

                <a href="mailto:travels@ceyline.lk" className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-smooth">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #0a3d8f, #1E90FF)" }}>
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400">Email us</p>
                    <p className="text-[#0a3d8f] font-semibold text-lg">travels@ceyline.lk</p>
                  </div>
                </a>

                <div className="flex items-center gap-4 p-5 bg-white rounded-2xl border border-gray-100 shadow-sm">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0" style={{ background: "linear-gradient(135deg, #0a3d8f, #1E90FF)" }}>
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs uppercase tracking-widest text-gray-400">Visit us</p>
                    <p className="text-[#0a3d8f] font-semibold">No 536, R A De Mel Mawatha,<br />Colombo 3, Sri Lanka</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Form */}
            <div className="bg-white rounded-3xl shadow-card border border-gray-100 p-8">
              {submitted ? (
                <div className="text-center py-16">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                    <Send className="w-7 h-7 text-green-600" />
                  </div>
                  <h2 className="font-display text-3xl text-[#0a3d8f] mb-2">Thank You!</h2>
                  <p className="text-gray-500">We've received your inquiry and will contact you shortly.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <h2 className="font-display text-3xl text-[#0a3d8f] mb-2">Inquiry Form</h2>

                  {/* Name */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-medium">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F7F7F7] text-gray-800 text-sm focus:outline-none focus:border-[#1E90FF] focus:ring-1 focus:ring-[#1E90FF] transition-smooth"
                    />
                  </div>

                  {/* Email */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-medium">Email Address *</label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F7F7F7] text-gray-800 text-sm focus:outline-none focus:border-[#1E90FF] focus:ring-1 focus:ring-[#1E90FF] transition-smooth"
                    />
                  </div>

                  {/* Contact Number */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-medium">Contact Number *</label>
                    <input
                      type="tel"
                      name="contact"
                      required
                      value={form.contact}
                      onChange={handleChange}
                      placeholder="+94 XX XXX XXXX"
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F7F7F7] text-gray-800 text-sm focus:outline-none focus:border-[#1E90FF] focus:ring-1 focus:ring-[#1E90FF] transition-smooth"
                    />
                  </div>

                  {/* Destination */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-medium">Destination Interested In *</label>
                    <select
                      name="destination"
                      required
                      value={form.destination}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F7F7F7] text-gray-800 text-sm focus:outline-none focus:border-[#1E90FF] focus:ring-1 focus:ring-[#1E90FF] transition-smooth"
                    >
                      <option value="">Select a destination</option>
                      {destinations.map((d) => (
                        <option key={d} value={d}>{d}</option>
                      ))}
                    </select>
                  </div>

                  {/* Trip Timing */}
                  <div className="flex flex-col gap-1.5">
                    <label className="text-xs uppercase tracking-widest text-gray-500 font-medium">When are you planning your next trip? *</label>
                    <select
                      name="timing"
                      required
                      value={form.timing}
                      onChange={handleChange}
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 bg-[#F7F7F7] text-gray-800 text-sm focus:outline-none focus:border-[#1E90FF] focus:ring-1 focus:ring-[#1E90FF] transition-smooth"
                    >
                      <option value="">Select timing</option>
                      {tripTimings.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-[#1E90FF] hover:bg-[#0a3d8f] text-white font-bold uppercase tracking-wider mt-2"
                  >
                    Submit Inquiry
                  </Button>
                </form>
              )}
            </div>

          </div>
        </div>
      </div>

      <footer className="bg-[#0a3d8f] text-white py-8">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-white/70">
          <p>© 2026 Ceyline Travels. All rights reserved.</p>
          <p className="uppercase tracking-widest text-xs">Terms & conditions apply</p>
        </div>
      </footer>
    </div>
  );
}
