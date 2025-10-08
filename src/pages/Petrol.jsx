import React from 'react'
import { Link } from 'react-router-dom'
import { ChevronRight } from 'lucide-react'

export default function Petrol() {
    return (
        <main>
            <div className="relative">
                <img src="/assets/petrol-hero.jpg" alt="" className="w-full object-cover h-[36vh] md:h-[48vh]" />
                <div className="absolute inset-0 bg-black/30" />
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 absolute inset-0 flex items-end pb-8">
                    <div className="text-white">
                        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Petrol Supply</h1>
                        <p className="mt-2 text-zinc-100">Unleaded & premium grades • Quick turnaround</p>
                    </div>
                </div>
            </div>

            <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                    <h2 className="text-2xl font-bold">Overview</h2>
                    <p className="mt-3 text-zinc-700">Reliable petrol supply for fleets, yard tanks and industrial applications with flexible scheduling.</p>

                    <h3 className="mt-8 text-xl font-semibold">Typical Use Cases</h3>
                    <ul className="mt-3 grid sm:grid-cols-2 gap-2 text-sm text-zinc-700">
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Fleet refuelling</li>
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Retail/yard tanks</li>
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Generators & small plant</li>
                        <li className="flex items-start gap-2"><span className="mt-1 h-1.5 w-1.5 rounded-full bg-red-600" />Municipal services</li>
                    </ul>

                    <h3 className="mt-8 text-xl font-semibold">Delivery Options</h3>
                    <p className="mt-3 text-zinc-700">Bulk tankers or smaller scheduled drops, including off-hours to suit access.</p>

                    <h3 className="mt-8 text-xl font-semibold">Quality & Compliance</h3>
                    <p className="mt-3 text-zinc-700">Chain-of-custody and documentation available on request.</p>
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