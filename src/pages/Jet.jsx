import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Jet() {
    return (
        <main>
            <div className="relative">
                <img src="/assets/jet-hero.jpg" alt="" className="w-full object-cover h-[36vh] md:h-[48vh]" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute inset-0 flex items-end pb-8">
                    <div className="text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Jet Fuel</h1>
                        <p className="mt-2 text-zinc-100">Aviation-grade fuel • Stringent handling</p>
                    </div>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold">Overview</h2>
                    <p className="mt-3 text-zinc-700">
                        Aviation-grade supply with strict quality and safety protocols for approved facilities and operations.
                    </p>

                    <h3 className="mt-8 text-xl font-semibold">Typical Use Cases</h3>
                    <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-zinc-700">
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Aviation support & ground ops</li>
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Helipad operations</li>
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Emergency services</li>
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Industrial turbine applications (where compatible)</li>
                    </ul>

                    <h3 className="mt-8 text-xl font-semibold">Delivery Options</h3>
                    <p className="mt-3 text-zinc-700">Coordinated deliveries to approved sites with verified handling.</p>

                    <h3 className="mt-8 text-xl font-semibold">Quality & Compliance</h3>
                    <p className="mt-3 text-zinc-700">Compliance-focused processes, safety equipment and trained personnel.</p>
                </div>

                <aside className="rounded-2xl border border-zinc-200 bg-white shadow-sm p-6 h-fit">
                    <h3 className="font-semibold">Request Supply</h3>
                    <p className="mt-2 text-sm text-zinc-600">Tell us volumes, frequency and delivery location.</p>
                    <Link to="/contact" className="mt-4 inline-flex items-center gap-2 px-4 py-2 rounded-2xl bg-red-600 text-white hover:bg-red-700 transition">Contact Sales <ChevronRight className="h-4 w-4" /></Link>
                </aside>
            </section>
        </main>
    )
}