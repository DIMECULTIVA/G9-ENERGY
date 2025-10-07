import React from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Fuel, Phone, Mail, MapPin, BadgeCheck, Droplets, Gauge, Factory, ChevronRight, MessageCircle } from 'lucide-react'

const Container = ({ children, className="" }) => (
  <div className={`container ${className}`}>{children}</div>
)

const NavItem = ({ to, label }) => (
  <NavLink to={to} className={({isActive}) =>
    `text-sm font-medium ${isActive ? 'text-brand-red' : 'text-zinc-700'} hover:text-brand-red transition-colors`}>
    {label}
  </NavLink>
)

function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
      <Container className="flex items-center justify-between py-3">
        <Link to="/" className="flex items-center gap-3">
          <img src="/assets/logo-placeholder.png" alt="G9 Energy" className="h-10 w-auto"/>
          <div className="leading-tight">
            <div className="text-xl font-extrabold tracking-tight">G9 ENERGY</div>
            <div className="text-[11px] uppercase tracking-wider text-zinc-500">Fuel & Lubricants</div>
          </div>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <NavItem to="/services" label="Services" />
          <NavItem to="/industries" label="Industries" />
          <NavItem to="/team" label="Team" />
          <NavItem to="/contact" label="Contact" />
        </nav>
        <div className="hidden md:flex items-center gap-2">
          <Link to="/contact" className="px-4 py-2 rounded-2xl bg-brand-red text-white hover:bg-red-700 transition">Get Supply</Link>
        </div>
      </Container>
    </header>
  )
}

function Footer() {
  return (
    <footer className="border-t border-zinc-200 bg-white">
      <Container className="py-8 grid md:grid-cols-3 gap-6 text-sm">
        <div>
          <div className="font-bold">G9 Energy</div>
          <div className="mt-2 text-zinc-600">Powering Africa's Industries.</div>
          <div className="mt-3 text-zinc-500">Midrand, Johannesburg, South Africa</div>
        </div>
        <div className="space-y-2">
          <div className="text-zinc-500 uppercase text-xs">Contact</div>
          <a href="tel:+27637333919" className="block hover:underline">CEO: Onthatile Matjeding — 063 733 3919</a>
          <a href="tel:+27629417835" className="block hover:underline">COO: Bokamoso Tshidada — 062 941 7835</a>
          <a href="tel:+27663300304" className="block hover:underline">CFO: Keorapetse Tlhapane — 066 330 0304</a>
          <a href="mailto:g9energysupply@gmail.com" className="block hover:underline">g9energysupply@gmail.com</a>
        </div>
        <div className="space-y-2">
          <div className="text-zinc-500 uppercase text-xs">Quick links</div>
          <Link className="block hover:underline" to="/services">Services</Link>
          <Link className="block hover:underline" to="/industries">Industries</Link>
          <Link className="block hover:underline" to="/team">Team</Link>
          <Link className="block hover:underline" to="/contact">Contact</Link>
        </div>
      </Container>
      <div className="border-t border-zinc-200">
        <Container className="py-4 text-xs text-zinc-500 flex items-center justify-between">
          <div>© {new Date().getFullYear()} G9 Energy. All rights reserved.</div>
          <div className="flex items-center gap-3">
            <a href="/privacy.html" className="hover:underline">Privacy</a>
            <span>•</span>
            <a href="/terms.html" className="hover:underline">Terms</a>
          </div>
        </Container>
      </div>
    </footer>
  )
}

function Hero() {
  return (
    <div className="relative">
      <img src="/assets/hero.jpg" alt="" className="w-full object-cover h-[52vh] md:h-[64vh]"/>
      <div className="absolute inset-0 bg-black/30" />
      <Container className="absolute inset-0 flex items-center">
        <div className="text-white">
          <motion.h1 initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.6}} className="text-4xl md:text-6xl font-extrabold tracking-tight">
            Powering Africa's Industries.
          </motion.h1>
          <motion.p initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:0.7,delay:0.1}} className="mt-4 max-w-2xl text-zinc-100">
            Bulk Fuel Supply | Diesel, Petrol, Jet Fuel, Lubricants
          </motion.p>
          <div className="mt-8 flex gap-3">
            <Link to="/services" className="px-5 py-2.5 rounded-2xl bg-white text-black hover:bg-zinc-200 font-medium">Explore Services</Link>
            <Link to="/contact" className="px-5 py-2.5 rounded-2xl bg-brand-red text-white hover:bg-red-700 font-medium">Contact Sales</Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

function Home() {
  return (
    <main>
      <Hero />
      <section className="py-16">
        <Container>
          <h2 className="text-3xl font-bold tracking-tight">What We Supply</h2>
          <p className="mt-2 text-zinc-600">End-to-end supply and distribution for mission-critical fuel and lubricants.</p>
          <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card image="/assets/cat-diesel.jpg" title="Diesel" bullets={['Bulk deliveries', 'SANS-compliant', 'On-site storage']} />
            <Card image="/assets/cat-petrol.jpg" title="Petrol" bullets={['Unleaded & premium', 'Quick turnaround', 'Quality assured']} />
            <Card image="/assets/cat-jet.jpg" title="Jet Fuel" bullets={['Aviation-grade', 'Stringent handling', 'Traceability']} />
            <Card image="/assets/cat-lubes.jpg" title="Lubricants" bullets={['Industrial oils & greases', 'OEM-approved', 'Supply programs']} />
          </div>
        </Container>
      </section>

      <section className="bg-zinc-50 border-y border-zinc-200">
        <Container className="py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold">Why G9 Energy</h3>
            <ul className="mt-4 space-y-2 text-zinc-700 text-sm">
              <li className="flex items-start gap-2"><BadgeCheck className="h-4 w-4 text-brand-red mt-0.5"/><span>Reliable distribution network across SA</span></li>
              <li className="flex items-start gap-2"><Gauge className="h-4 w-4 text-brand-red mt-0.5"/><span>Rapid turnaround & flexible scheduling</span></li>
              <li className="flex items-start gap-2"><Factory className="h-4 w-4 text-brand-red mt-0.5"/><span>Serving construction, mining, logistics & manufacturing</span></li>
              <li className="flex items-start gap-2"><Droplets className="h-4 w-4 text-brand-red mt-0.5"/><span>Quality assurance with transparent documentation</span></li>
            </ul>
            <div className="mt-6">
              <Link to="/industries" className="inline-flex items-center gap-2 text-brand-red hover:text-red-700 font-medium">See industries we power <ChevronRight className="h-4 w-4"/></Link>
            </div>
          </div>
          <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
            <h4 className="font-semibold">Midrand HQ</h4>
            <div className="mt-3 grid gap-3 text-sm">
              <Row icon={MapPin} label="Location" value="Midrand, Johannesburg, South Africa" />
              <Row icon={Phone} label="Phone" value={<>
                <a href="tel:+27637333919" className="hover:underline">063 733 3919</a> · <a href="tel:+27629417835" className="hover:underline">062 941 7835</a>
              </>} />
              <Row icon={Mail} label="Email" value={<a href="mailto:g9energysupply@gmail.com" className="hover:underline">g9energysupply@gmail.com</a>} />
            </div>
          </div>
        </Container>
      </section>
    </main>
  )
}

function Services() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Services</h1>
        <p className="mt-2 text-zinc-600">Bulk supply & distribution with quality assurance and safety-first handling.</p>
        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <ServiceBlock title="Bulk Fuel Delivery" points={['Diesel, Petrol, Jet Fuel', 'Scheduled or on-demand drops', 'On-site and remote locations']} />
          <ServiceBlock title="Storage & Equipment" points={['Tanks, pumps & meters', 'Installation coordination', 'Maintenance programs']} />
          <ServiceBlock title="Lubricants Supply" points={['Industrial oils & greases', 'OEM- and API-licensed products', 'Consignment stock options']} />
          <ServiceBlock title="Compliance & QA" points={['Batch traceability', 'SANS standards', 'Safety & environmental compliance']} />
        </div>
      </Container>
    </main>
  )
}

function Industries() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Industries We Power</h1>
        <p className="mt-2 text-zinc-600">We support critical operations across South Africa.</p>
        <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {['Construction','Mining','Logistics & Transport','Manufacturing','Agriculture','Aviation'].map((x,i)=>(
            <div key={i} className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
              <div className="font-semibold">{x}</div>
              <p className="mt-2 text-sm text-zinc-600">Secure supply for {x.toLowerCase()} operations with flexible scheduling.</p>
            </div>
          ))}
        </div>
      </Container>
    </main>
  )
}

function Team() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Leadership Team</h1>
        <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <TeamCard name="Onthatile Matjeding" role="Chief Executive Officer" phone="063 733 3919" phoneHref="+27637333919" photo="/assets/ceo.png" />
          <TeamCard name="Bokamoso Tshidada" role="Chief Operating Officer" phone="062 941 7835" phoneHref="+27629417835" photo="/assets/coo.png" />
          <TeamCard name="Keorapetse Tlhapane" role="Chief Financial Officer" phone="066 330 0304" phoneHref="+27663300304" photo="/assets/cfo.png" />
        </div>
      </Container>
    </main>
  )
}

function Contact() {
  return (
    <main className="py-12">
      <Container>
        <h1 className="text-3xl font-bold tracking-tight">Contact Sales</h1>
        <div className="grid lg:grid-cols-7 gap-10 mt-6">
          <div className="lg:col-span-3">
            <div className="grid gap-3 text-sm">
              <Row icon={Phone} label="Phone" value={<>
                <a className="hover:underline" href="tel:+27637333919">063 733 3919</a> · <a className="hover:underline" href="tel:+27629417835">062 941 7835</a>
              </>} />
              <Row icon={Mail} label="Email" value={<a className="hover:underline" href="mailto:g9energysupply@gmail.com">g9energysupply@gmail.com</a>} />
              <Row icon={MapPin} label="Location" value="Midrand, Johannesburg, South Africa" />
            </div>
            <div className="mt-4 text-xs text-zinc-500">We reply within one business day.</div>
          </div>
          <div className="lg:col-span-4 rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
            <h3 className="text-lg font-semibold">Request a Quote</h3>
            <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="mt-4 grid gap-4" action="/thank-you.html">
              <input type="hidden" name="form-name" value="contact" />
              <p className="hidden" aria-hidden="true"><label>Don’t fill this out: <input name="bot-field" /></label></p>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="name" placeholder="Full name" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-brand-red" required />
                <input name="email" type="email" placeholder="Email" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-brand-red" required />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <input name="phone" placeholder="Phone" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-brand-red" />
                <input name="company" placeholder="Company (optional)" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-brand-red" />
              </div>
              <textarea name="message" rows="5" placeholder="Fuel type, volumes, frequency, delivery location" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-brand-red" required></textarea>
              <div className="flex items-center justify-between">
                <p className="text-xs text-zinc-500">Bulk Fuel Supply | Diesel | Petrol | Jet Fuel | Lubricants</p>
                <button type="submit" className="px-4 py-2 rounded-2xl bg-brand-red text-white hover:bg-red-700 transition">Send</button>
              </div>
            </form>
          </div>
        </div>
      </Container>
    </main>
  )
}

// Reusable components
const Row = ({ icon:Icon, label, value }) => (
  <div className="flex items-start gap-3">
    <div className="mt-0.5 h-9 w-9 rounded-xl bg-zinc-100 flex items-center justify-center">
      <Icon className="h-4 w-4 text-brand-red" />
    </div>
    <div>
      <div className="text-xs uppercase tracking-wide text-zinc-500">{label}</div>
      <div className="text-sm text-zinc-800">{value}</div>
    </div>
  </div>
)

function Card({ image, title, bullets }) {
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm h-full overflow-hidden">
      <img src={image} alt="" className="h-40 w-full object-cover"/>
      <div className="p-6">
        <div className="text-lg font-semibold">{title}</div>
        <ul className="mt-3 grid gap-1.5 text-sm text-zinc-700">
          {bullets.map((b,i)=>(<li key={i} className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-brand-red"></span>{b}</li>))}
        </ul>
      </div>
    </div>
  )
}

const TeamCard = ({ name, role, phone, phoneHref, photo }) => {
  const waNumber = (phoneHref || '').replace('+', '')
  const waText = encodeURIComponent(`Hi ${name}, I'd like to discuss supply.`)
  const waUrl = `https://wa.me/${waNumber}?text=${waText}`
  return (
    <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
      <div className="flex items-start gap-4">
        {photo && <img src={photo} alt={name} className="h-14 w-14 rounded-2xl object-cover" width="56" height="56" loading="lazy"/>}
        <div className="space-y-1">
          <div className="font-semibold">{name}</div>
          <div className="text-sm text-zinc-600">{role}</div>
          {phone && (
            <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
              <a href={`tel:${phoneHref}`} className="inline-flex items-center gap-2 text-zinc-800 hover:underline">
                <Phone className="h-4 w-4" /> {phone}
              </a>
              <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-brand-red text-white hover:bg-red-700 transition">
                <MessageCircle className="h-4 w-4" /> WhatsApp
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default function App() {
  return (
    <div className="min-h-screen bg-white text-brand-black">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/industries" element={<Industries />} />
        <Route path="/team" element={<Team />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </div>
  )
}
