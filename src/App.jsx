import React, { useState } from 'react'
import { Routes, Route, Link, NavLink } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Menu } from 'lucide-react'
import Diesel from './pages/Diesel.jsx'
import Petrol from './pages/Petrol.jsx'
import Jet from './pages/Jet.jsx'
import Lubes from './pages/Lubes.jsx'

const Container = ({ children, className = '' }) => (
    <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${className}`}>{children}</div>
)

const NavItem = ({ to, label, onClick }) => (
    <NavLink
        to={to}
        onClick={onClick}
        className={({ isActive }) =>
            `text-sm font-medium ${isActive ? 'text-red-600' : 'text-zinc-700'} hover:text-red-600 transition-colors`
        }
    >
        {label}
    </NavLink>
)

function Navbar() {
    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)

    return (
        <header className="sticky top-0 z-40 border-b border-zinc-200 bg-white/80 backdrop-blur">
            <Container className="flex items-center justify-between py-3">
                <Link to="/" className="flex items-center gap-3">
                    <img src="/assets/logo.png" alt="G9 Energy" className="h-10 w-auto" />
                    <div className="leading-tight">
                        <div className="text-xl font-extrabold tracking-tight">G9 ENERGY</div>
                        <div className="text-[11px] uppercase tracking-wider text-zinc-500">Fuel &amp; Lubricants</div>
                    </div>
                </Link>

                {/* Desktop nav */}
                <nav className="hidden md:flex items-center gap-6">
                    {/* Menu dropdown */}
                    <div className="relative">
                        <button
                            onClick={() => setMenuOpen(v => !v)}
                            className="text-sm font-medium text-zinc-700 hover:text-red-600 transition-colors"
                        >
                            Menu
                        </button>
                        {menuOpen && (
                            <div
                                onMouseLeave={() => setMenuOpen(false)}
                                className="absolute right-0 mt-2 w-56 rounded-xl border border-zinc-200 bg-white shadow-lg p-2"
                            >
                                <div className="px-3 py-1 text-xs uppercase text-zinc-500">Services</div>
                                <div className="grid gap-1">
                                    <Link to="/services/diesel" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-zinc-50">Diesel Supply</Link>
                                    <Link to="/services/petrol" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-zinc-50">Petrol Supply</Link>
                                    <Link to="/services/jet-fuel" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-zinc-50">Jet Fuel</Link>
                                    <Link to="/services/lubricants" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-zinc-50">Lubricants</Link>
                                </div>
                                <div className="px-3 py-1 text-xs uppercase text-zinc-500 mt-2">Company</div>
                                <div className="grid gap-1">
                                    <Link to="/team" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-zinc-50">Team</Link>
                                    <Link to="/contact" onClick={() => setMenuOpen(false)} className="px-3 py-2 rounded-lg hover:bg-zinc-50">Contact</Link>
                                </div>
                            </div>
                        )}
                    </div>

                    <NavItem to="/services" label="Services" />
                    <NavItem to="/team" label="Team" />
                    <NavItem to="/contact" label="Contact" />
                </nav>

                {/* Mobile toggler */}
                <div className="md:hidden">
                    <button onClick={() => setOpen(v => !v)} className="p-2 rounded-lg border border-zinc-300">
                        <Menu className="h-5 w-5" />
                    </button>
                </div>

                <div className="hidden md:flex items-center gap-2">
                    <Link to="/contact" className="px-4 py-2 rounded-2xl bg-red-600 text-white hover:bg-red-700 transition">
                        Get Supply
                    </Link>
                </div>
            </Container>

            {/* Mobile menu */}
            {open && (
                <div className="md:hidden border-t border-zinc-200 bg-white">
                    <Container className="py-3 grid gap-2">
                        <NavItem to="/services" label="Services" onClick={() => setOpen(false)} />
                        <NavItem to="/services/diesel" label="Diesel Supply" onClick={() => setOpen(false)} />
                        <NavItem to="/services/petrol" label="Petrol Supply" onClick={() => setOpen(false)} />
                        <NavItem to="/services/jet-fuel" label="Jet Fuel" onClick={() => setOpen(false)} />
                        <NavItem to="/services/lubricants" label="Lubricants" onClick={() => setOpen(false)} />
                        <NavItem to="/team" label="Team" onClick={() => setOpen(false)} />
                        <NavItem to="/contact" label="Contact" onClick={() => setOpen(false)} />
                    </Container>
                </div>
            )}
        </header>
    )
}

function Footer() {
    return (
        <footer className="border-t border-zinc-200 bg-white">
            <Container className="py-8 grid md:grid-cols-3 gap-6 text-sm">
                <div>
                    <div className="font-bold">G9 Energy</div>
                    <div className="mt-2 text-zinc-600">Powering Africa&apos;s Industries.</div>
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
                    <Link className="block hover:underline" to="/services/diesel">Diesel Supply</Link>
                    <Link className="block hover:underline" to="/services/petrol">Petrol Supply</Link>
                    <Link className="block hover:underline" to="/services/jet-fuel">Jet Fuel</Link>
                    <Link className="block hover:underline" to="/services/lubricants">Lubricants</Link>
                    <Link className="block hover:underline" to="/contact">Contact</Link>
                </div>
            </Container>
            <div className="border-t border-zinc-200">
                <Container className="py-4 text-xs text-zinc-500 flex items-center justify-between">
                    <div>© {new Date().getFullYear()} G9 Energy. All rights reserved.</div>
                    <div className="flex items-center gap-3">
                        <a href="/privacy.html" className="hover:underline">Privacy</a><span>•</span><a href="/terms.html" className="hover:underline">Terms</a>
                    </div>
                </Container>
            </div>
        </footer>
    )
}

function Hero() {
    return (
        <div className="relative">
            {/* Use your own hero image in /public/assets/hero.jpg if you want */}
            <img src="/assets/hero.jpg" alt="" className="w-full object-cover h-[52vh] md:h-[64vh]" />
            <div className="absolute inset-0 bg-black/30" />
            <Container className="absolute inset-0 flex items-center">
                <div className="text-white">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6 }}
                        className="text-4xl md:text-6xl font-extrabold tracking-tight whitespace-nowrap"
                    >
                        Powering Africa&apos;s Industries.
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.7, delay: 0.1 }}
                        className="mt-4 text-zinc-100 whitespace-nowrap"
                    >
                        Bulk Fuel Supply | Diesel, Petrol, Jet Fuel, Lubricants
                    </motion.p>
                    <div className="mt-8 flex gap-3">
                        <Link to="/services" className="px-5 py-2.5 rounded-2xl bg-white text-black hover:bg-zinc-200 font-medium">
                            Explore Services
                        </Link>
                        <Link to="/contact" className="px-5 py-2.5 rounded-2xl bg-red-600 text-white hover:bg-red-700 font-medium">
                            Contact Sales
                        </Link>
                    </div>
                </div>
            </Container>
        </div>
    )
}

function ServiceCard({ to, image, title, bullets }) {
    return (
        <Link to={to} className="rounded-2xl border border-zinc-200 bg-white shadow-sm h-full overflow-hidden hover:border-zinc-300 transition">
            <img src={image} alt="" className="h-40 w-full object-cover" />
            <div className="p-6">
                <div className="text-lg font-semibold">{title}</div>
                <ul className="mt-3 grid gap-1.5 text-sm text-zinc-700">
                    {bullets.map((b, i) => (
                        <li key={i} className="flex items-start gap-2">
                            <span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />
                            {b}
                        </li>
                    ))}
                </ul>
            </div>
        </Link>
    )
}

function Services() {
    return (
        <main className="py-12">
            <Container>
                <h1 className="text-3xl font-bold tracking-tight">Services</h1>
                <p className="mt-2 text-zinc-600">Bulk supply &amp; distribution with quality assurance and safety-first handling.</p>
                <div className="mt-8 grid md:grid-cols-2 gap-6">
                    <ServiceCard to="/services/diesel" image="/assets/diesel-hero.jpg" title="Diesel Supply" bullets={['Bulk deliveries', 'SANS-compliant', 'On-site storage']} />
                    <ServiceCard to="/services/petrol" image="/assets/petrol-hero.jpg" title="Petrol Supply" bullets={['Unleaded & premium', 'Quick turnaround', 'Quality assured']} />
                    <ServiceCard to="/services/jet-fuel" image="/assets/jet-hero.jpg" title="Jet Fuel" bullets={['Aviation-grade', 'Stringent handling', 'Traceability']} />
                    <ServiceCard to="/services/lubricants" image="/assets/lubes-hero.jpg" title="Lubricants" bullets={['Industrial oils & greases', 'OEM-approved', 'Supply programs']} />
                </div>
            </Container>
        </main>
    )
}

function Home() {
    return (
        <main>
            <Hero />
            {/* Featured services grid (same cards as Services) */}
            <section className="py-16">
                <Container>
                    <h2 className="text-3xl font-bold tracking-tight">What We Supply</h2>
                    <p className="mt-2 text-zinc-600">End-to-end supply &amp; distribution for mission-critical fuel and lubricants.</p>
                    <div className="mt-8 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        <ServiceCard to="/services/diesel" image="/assets/diesel-hero.jpg" title="Diesel Supply" bullets={['Bulk deliveries', 'SANS-compliant', 'On-site storage']} />
                        <ServiceCard to="/services/petrol" image="/assets/petrol-hero.jpg" title="Petrol Supply" bullets={['Unleaded & premium', 'Quick turnaround', 'Quality assured']} />
                        <ServiceCard to="/services/jet-fuel" image="/assets/jet-hero.jpg" title="Jet Fuel" bullets={['Aviation-grade', 'Stringent handling', 'Traceability']} />
                        <ServiceCard to="/services/lubricants" image="/assets/lubes-hero.jpg" title="Lubricants" bullets={['Industrial oils & greases', 'OEM-approved', 'Supply programs']} />
                    </div>
                </Container>
            </section>
        </main>
    )
}

function Team() {
    return (
        <main className="py-12">
            <Container>
                <h1 className="text-3xl font-bold tracking-tight">Leadership Team</h1>
                <div className="mt-8 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <TeamCard name="Onthatile Matjeding" role="Chief Executive Officer" phone="063 733 3919" phoneHref="+27637333919" />
                    <TeamCard name="Bokamoso Tshidada" role="Chief Operating Officer" phone="062 941 7835" phoneHref="+27629417835" />
                    <TeamCard name="Keorapetse Tlhapane" role="Chief Financial Officer" phone="066 330 0304" phoneHref="+27663300304" />
                </div>
            </Container>
        </main>
    )
}

const TeamCard = ({ name, role, phone, phoneHref }) => {
    const waNumber = (phoneHref || '').replace('+', '')
    const waText = encodeURIComponent(`Hi ${name}, I'd like to discuss supply.`)
    const waUrl = `https://wa.me/${waNumber}?text=${waText}`
    return (
        <div className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
            <div className="space-y-1">
                <div className="font-semibold">{name}</div>
                <div className="text-sm text-zinc-600">{role}</div>
                {phone && (
                    <div className="mt-2 flex flex-wrap items-center gap-3 text-sm">
                        <a href={`tel:${phoneHref}`} className="inline-flex items-center gap-2 text-zinc-800 hover:underline">{phone}</a>
                        <a href={waUrl} target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-red-600 text-white hover:bg-red-700 transition">WhatsApp</a>
                    </div>
                )}
            </div>
        </div>
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
                            <InfoRow label="Phone" value={<><a className="hover:underline" href="tel:+27637333919">063 733 3919</a> · <a className="hover:underline" href="tel:+27629417835">062 941 7835</a></>} />
                            <InfoRow label="Email" value={<a className="hover:underline" href="mailto:g9energysupply@gmail.com">g9energysupply@gmail.com</a>} />
                            <InfoRow label="Location" value="Midrand, Johannesburg, South Africa" />
                        </div>
                        <div className="mt-4 text-xs text-zinc-500">We reply within one business day.</div>
                    </div>
                    <div className="lg:col-span-4 rounded-2xl border border-zinc-200 bg-white shadow-sm p-6">
                        <h3 className="text-lg font-semibold">Request a Quote</h3>
                        <form name="contact" method="POST" data-netlify="true" data-netlify-honeypot="bot-field" className="mt-4 grid gap-4" action="/thank-you.html">
                            <input type="hidden" name="form-name" value="contact" />
                            <p className="hidden" aria-hidden="true"><label>Don’t fill this out: <input name="bot-field" /></label></p>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input name="name" placeholder="Full name" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-red-600" required />
                                <input name="email" type="email" placeholder="Email" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-red-600" required />
                            </div>
                            <div className="grid sm:grid-cols-2 gap-4">
                                <input name="phone" placeholder="Phone" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-red-600" />
                                <input name="company" placeholder="Company (optional)" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-red-600" />
                            </div>
                            <textarea name="message" rows="5" placeholder="Fuel type, volumes, frequency, delivery location" className="px-3 py-2 rounded-xl border border-zinc-300 focus:outline-none focus:ring-2 focus:ring-red-600" required></textarea>
                            <div className="flex items-center justify-between">
                                <p className="text-xs text-zinc-500">Bulk Fuel Supply | Diesel | Petrol | Jet Fuel | Lubricants</p>
                                <button type="submit" className="px-4 py-2 rounded-2xl bg-red-600 text-white hover:bg-red-700 transition">Send</button>
                            </div>
                        </form>
                    </div>
                </div>
            </Container>
        </main>
    )
}

function InfoRow({ label, value }) {
    return (
        <div>
            <div className="text-xs uppercase tracking-wide text-zinc-500">{label}</div>
            <div className="text-sm text-zinc-800">{value}</div>
        </div>
    )
}

export default function App() {
    return (
        <div className="min-h-screen bg-white text-zinc-900">
            <Navbar />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/services/diesel" element={<Diesel />} />
                <Route path="/services/petrol" element={<Petrol />} />
                <Route path="/services/jet-fuel" element={<Jet />} />
                <Route path="/services/lubricants" element={<Lubes />} />
                <Route path="/team" element={<Team />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
        </div>
    )
}