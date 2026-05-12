# ✈️ Ceyline Travels

An event showcase website built for **Ceyline Travels (Pvt) Ltd** — an IATA-accredited travel agency and part of the Ceyline Group, Sri Lanka. Specializing in outbound & inbound tours, air ticketing, visa services, and more, this site was exclusively created to represent Ceyline Travels at the **Sankharaka Udawa 2026 – The Travel & Tourism Fair**, featuring international holiday packages and a travel inquiry form for fair visitors.

---

## 🎪 About This Project

This website was created for **Ceyline Travels** at the **Sankharaka Udawa 2026 – The Travel & Tourism Fair**. Visit us to discover exciting travel experiences, unforgettable destinations, and exclusive holiday opportunities.

| | |
|---|---|
| 📍 **Venue** | BMICH – Hall A |
| 📌 **Stall No** | C39 |
| 📅 **Date** | 15th & 16th May 2026 |

---

## 🌐 Live Demo

> [https://holiday-hopes-co.vercel.app/](https://holiday-hopes-co.vercel.app/)

---

## 📸 Features

- 🗺️ **Destination Showcase** — 24+ international destinations with imagery
- 📋 **Travel Inquiry Form** — Sends directly to the team via EmailJS (no backend)
- 📱 **Fully Responsive** — Mobile, tablet, and desktop ready
- ⚡ **Fast Performance** — Vite-powered build with optimized assets
- 🔀 **Client-side Routing** — Smooth navigation with TanStack Router
- 🎨 **Modern UI** — Built with shadcn/ui + Radix UI + Tailwind CSS

---

## 🧱 Tech Stack

| Layer | Technology |
|---|---|
| Framework | React 19 + TypeScript |
| Routing | TanStack Router + TanStack Start |
| Styling | Tailwind CSS v4 |
| UI Components | shadcn/ui + Radix UI |
| Icons | Lucide React |
| Forms | React Hook Form + Zod |
| Email | EmailJS (frontend-only, no backend) |
| Build Tool | Vite 7 |
| Deployment | Vercel |

---

## 📁 Project Structure

```
src/
├── routes/               # File-based pages (TanStack Router)
│   ├── index.tsx         # Home page
│   ├── inquiry.tsx       # Travel inquiry form
│   └── ...
├── components/
│   ├── Navbar.tsx        # Navigation bar
│   └── ui/               # shadcn/ui components
└── assets/               # Destination images, logo
public/
├── favicon.png
└── Logo Travels New.png
vite.config.ts            # Vite + TanStack Start config
vercel.json               # SPA routing rewrite rules
```

---

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/NadilaBasilu/holiday-hopes-co.git
cd holiday-hopes-co

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📦 Available Scripts

```bash
npm run dev        # Start local development server
npm run build      # Build for production (outputs to /dist)
npm run preview    # Preview the production build locally
npm run lint       # Run ESLint
npm run format     # Format code with Prettier
```

---

## 📧 Email Integration

This project uses **EmailJS** to handle the inquiry form directly from the browser — no backend or server required.

The form collects:
- Full Name
- Email Address
- Contact Number
- Whether they've traveled abroad before
- Destination of interest
- Planned trip timing

Emails are sent to `outbound@ceyline.lk` via the configured EmailJS service.

> **Security Note:** To prevent abuse, add your domain to the **Allowed Origins** list in your [EmailJS dashboard](https://dashboard.emailjs.com) under Account → Security.

---

## 🌍 Destinations Covered

Thailand · Malaysia · India · Vietnam · Maldives · UAE · China · Japan · Indonesia · Philippines · Turkey · Egypt · Azerbaijan · Kenya · Tanzania · South Africa · France · Switzerland · Liechtenstein · Spain · Portugal · Italy · Germany · Netherlands

---

## 📞 Contact

**Ceyline Travels**
No 536, R A De Mel Mawatha, Colombo 3, Sri Lanka

- 📞 +94 11 4511064
- 📞 +94 76 8422000
- 📞 +94 77 2824362
- 📧 outbound@ceyline.lk

---

## 📄 License

© 2026 Ceyline Travels. All rights reserved. Terms & conditions apply.
