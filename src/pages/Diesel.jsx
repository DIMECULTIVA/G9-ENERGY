import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Diesel() {
    return (
        <main>
            <div className="relative">
                <img src="/assets/diesel-hero.jpg" alt="" className="w-full object-cover h-[36vh] md:h-[48vh]" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute inset-0 flex items-end pb-8">
                    <div className="text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Diesel Supply</h1>
                        <p className="mt-2 text-zinc-100">Bulk deliveries • SANS-compliant • On-site storage options</p>
                    </div>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold">Overview</h2>
                    <p className="mt-3 text-zinc-700">
                        High-quality diesel for construction, mining, logistics and power generation. Fast scheduling across South Africa,
                        with documentation and batch traceability on request.
                    </p>

                    <h3 className="mt-8 text-xl font-semibold">Typical Use Cases</h3>
                    <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-zinc-700">
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Construction equipment & generators</li>
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Mining & quarry operations</li>
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Logistics fleets & yards</li>
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Agricultural machinery</li>
                    </ul>

                    <h3 className="mt-8 text-xl font-semibold">Delivery Options</h3>
                    <p className="mt-3 text-zinc-700">
                        Metered bowser trucks, bulk tankers and on-site tank refills. Temporary tanks and dispensing equipment can be coordinated.
                    </p>

                    <h3 className="mt-8 text-xl font-semibold">Quality & Compliance</h3>
                    <p className="mt-3 text-zinc-700">
                        Safety-first handling aligned to regulations and environmental standards. Delivery notes & quality docs issued on request.
                    </p>
                </div>

                <aside className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6 h-fit">
                    <h3 className="font-semibold">Request Supply</h3>
                    <p className="mt-2 text-sm text-zinc-600">Tell us volumes, frequency and delivery location.</p>
                    <Link to="/contact" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-red-600 text-white hover:bg-red-700 transition">Contact Sales <ChevronRight className="h-4 w-4" /></Link>
                    <div className="mt-6 text-xs text-zinc-500">Midrand, Johannesburg • National distribution</div>
                </aside>
            </section>
        </main>
    )
}