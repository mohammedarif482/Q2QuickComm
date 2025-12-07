import React from 'react';
import { motion } from 'framer-motion';
import {
    LayoutDashboard,
    Smartphone,
    Store,
    Truck,
    Search,
    Database,
    CreditCard,
    ArrowRight,
    Check,
    Layers,
    MapPin,
    Package,
    Settings,
    FileText,
    BarChart,
    Users
} from 'lucide-react';
import { Section } from '../UI/Section';
import { Button } from 'antd';

interface BusinessTabProps {
    onTabChange?: (key: string) => void;
}

export const BusinessTab: React.FC<BusinessTabProps> = ({ onTabChange }) => {
    return (
        <div className="space-y-0">
            {/* 1. Hero Section - How it fits into Hyper Market */}
            <Section className="!py-12 bg-white">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <span className="px-4 py-2 rounded-full bg-green-100 text-green-700 text-sm font-semibold mb-6 inline-block">
                            Business Integration
                        </span>
                        <h1 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 leading-tight">
                            Drop‑in quick commerce, not a rip‑and‑replace project.
                        </h1>
                        <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                            Q Comm sits on top of your existing billing and store operations. The app talks to your POS, your staff handle fulfilment, and a light partner app manages riders—all stitched together by one central dashboard.
                        </p>

                        <div className="space-y-4">
                            {[
                                "Uses your current billing and inventory system as the single source of truth.",
                                "Adds a thin operations layer for picking, packing and delivery—not a new ERP.",
                                "Starts with simple web APIs and scales into deeper integrations as volume grows."
                            ].map((text, i) => (
                                <div key={i} className="flex items-start gap-3">
                                    <div className="mt-1 min-w-[20px] h-5 rounded-full bg-green-100 flex items-center justify-center">
                                        <Check className="w-3 h-3 text-green-600" />
                                    </div>
                                    <span className="text-gray-700">{text}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="bg-gray-50 rounded-3xl p-8 border border-gray-200"
                    >
                        {/* Simple Systems Map Illustration */}
                        <div className="flex flex-col items-center justify-center space-y-6 relative py-8">
                            {/* Dashboard Center */}
                            <div className="relative z-10 bg-white p-4 rounded-xl shadow-lg border border-green-100 w-48 text-center">
                                <LayoutDashboard className="w-8 h-8 text-green-600 mx-auto mb-2" />
                                <div className="font-bold text-gray-900">Central Dashboard</div>
                            </div>

                            {/* Connections */}
                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="w-[1px] h-full bg-gray-300"></div>
                                <div className="h-[1px] w-full absolute bg-gray-300"></div>
                            </div>

                            {/* Nodes Grid */}
                            <div className="w-full grid grid-cols-2 gap-24 relative z-10">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <Smartphone className="w-6 h-6 text-blue-500 mx-auto mb-2" />
                                    <div className="font-medium text-gray-700">App</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <Database className="w-6 h-6 text-purple-500 mx-auto mb-2" />
                                    <div className="font-medium text-gray-700">POS</div>
                                </div>
                            </div>
                            <div className="w-full grid grid-cols-2 gap-24 relative z-10">
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <Store className="w-6 h-6 text-orange-500 mx-auto mb-2" />
                                    <div className="font-medium text-gray-700">Stores</div>
                                </div>
                                <div className="bg-white p-4 rounded-xl shadow-sm border border-gray-200 text-center">
                                    <Truck className="w-6 h-6 text-gray-700 mx-auto mb-2" />
                                    <div className="font-medium text-gray-700">Riders</div>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </Section>

            {/* 2. Custom Search API */}
            <Section className="bg-gray-50">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                        <div className="lg:col-span-2">
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">Phase 1: Go live fast with Custom Search + POS feed.</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                To get Q Comm off the ground, we start with a simple integration: a daily product feed from your billing system (name, barcode, price, stock) and an image layer powered by a custom search API.
                            </p>
                            <p className="text-lg text-gray-600 mb-8">
                                Most FMCG and grocery SKUs already have high‑quality images on the web, so 70–80% of the catalog can be visually complete in days, not months.
                            </p>

                            <div className="space-y-3 mb-8">
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    CSV/API feed from POS → central catalog service → app.
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    Custom Search API fetches product images and basic attributes.
                                </div>
                                <div className="flex items-center gap-3 text-gray-700">
                                    <div className="w-2 h-2 rounded-full bg-green-500"></div>
                                    In‑store staff can fix edge cases manually over time.
                                </div>
                            </div>

                            <p className="text-sm text-gray-500 italic border-l-4 border-green-200 pl-4">
                                This “easy start” path gives Hyper Market a polished digital shelf quickly, while we prepare deeper, real‑time integrations in the background.
                            </p>
                        </div>

                        <div className="bg-gray-50 rounded-2xl p-6 flex flex-col justify-center border border-gray-100">
                            {/* Diagram POS -> Catalog -> App */}
                            <div className="space-y-4">
                                <div className="flex flex-col items-center">
                                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 w-full text-center">
                                        <Database className="w-5 h-5 text-purple-500 mx-auto mb-1" />
                                        <span className="text-sm font-semibold">POS Feed</span>
                                    </div>
                                    <ArrowRight className="text-gray-400 rotate-90 my-2" />
                                    <div className="bg-green-50 p-3 rounded-lg shadow-sm border border-green-200 w-full text-center relative">
                                        <div className="absolute -right-3 top-1/2 -translate-y-1/2 bg-yellow-100 text-yellow-800 text-[10px] px-2 py-0.5 rounded-full border border-yellow-200 whitespace-nowrap">
                                            + Image API
                                        </div>
                                        <Search className="w-5 h-5 text-green-600 mx-auto mb-1" />
                                        <span className="text-sm font-semibold text-green-900">Catalog Svc</span>
                                    </div>
                                    <ArrowRight className="text-gray-400 rotate-90 my-2" />
                                    <div className="bg-white p-3 rounded-lg shadow-sm border border-gray-200 w-full text-center">
                                        <Smartphone className="w-5 h-5 text-blue-500 mx-auto mb-1" />
                                        <span className="text-sm font-semibold">Customer App</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 3. Store Operations */}
            <Section title="What changes inside each store (and what doesn’t)" subtitle="Online orders move from screen to shelf to rider in under 10 minutes.">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {[
                        {
                            title: "Online order console",
                            desc: "A tablet or desktop view at each store that shows new quick‑commerce orders, priority, and promised time.",
                            icon: LayoutDashboard,
                            color: "bg-blue-50 text-blue-600"
                        },
                        {
                            title: "Picker workflow",
                            desc: "A simple mobile UI for pickers with aisle‑wise pick lists, quantity checks and substitution suggestions.",
                            icon: Check,
                            color: "bg-green-50 text-green-600"
                        },
                        {
                            title: "Packing & staging zone",
                            desc: "Dedicated area where picked orders are packed, labelled and queued. Each packet is tagged with order ID.",
                            icon: Package,
                            color: "bg-orange-50 text-orange-600"
                        },
                        {
                            title: "Ops playbook & training",
                            desc: "Clear SOPs on who does what (cashier vs picker vs dispatcher) and shift patterns during peak hours.",
                            icon: FileText,
                            color: "bg-purple-50 text-purple-600"
                        }
                    ].map((item, i) => (
                        <div key={i} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow">
                            <div className={`w-12 h-12 rounded-xl ${item.color} flex items-center justify-center mb-4`}>
                                <item.icon className="w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-gray-600">{item.desc}</p>
                        </div>
                    ))}
                </div>
                <div className="mt-8 text-center">
                    <span className="inline-block bg-gray-100 text-gray-700 px-4 py-2 rounded-lg text-sm font-medium">
                        Footnote: No new ERP, no duplicate stock ledger—your existing POS remains the system of record.
                    </span>
                </div>
            </Section>

            {/* 4. Partner / Rider App */}
            <Section className="bg-gray-50">
                <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-gray-200">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-3xl font-bold mb-6 text-gray-900">A lightweight partner app for riders and local fleets.</h2>
                            <p className="text-lg text-gray-600 mb-8">
                                Quick commerce fails when delivery is handled over phone calls and WhatsApp. Q Comm ships with a dedicated partner app so riders know exactly what to pick up, where to go, and how they are paid.
                            </p>

                            <div className="space-y-6">
                                {[
                                    {
                                        title: "Order queue by store",
                                        desc: "Riders see nearby orders from a specific Hyper Market store, with pickup time, drop location, and pay per drop."
                                    },
                                    {
                                        title: "Navigation & proof of delivery",
                                        desc: "One‑tap maps, customer call, and OTP/photo confirmation at drop."
                                    },
                                    {
                                        title: "Flexible sourcing",
                                        desc: "Works with Hyper Market’s own riders, third‑party fleet partners, or a mix."
                                    },
                                    {
                                        title: "Basic earnings view",
                                        desc: "Simple daily/weekly payout summaries to keep riders motivated."
                                    }
                                ].map((item, i) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="min-w-[8px] h-2 mt-2 rounded-full bg-green-500"></div>
                                        <div>
                                            <h4 className="font-bold text-gray-900">{item.title}</h4>
                                            <p className="text-gray-600 text-sm">{item.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-8 pt-4 border-t border-gray-100">
                                <p className="text-sm text-gray-500">
                                    This separates delivery logistics from your store counters while still keeping everything visible in the central dashboard.
                                </p>
                            </div>
                        </div>

                        <div className="flex justify-center">
                            {/* Phone Mockup */}
                            <div className="w-[280px] bg-gray-900 rounded-[35px] p-3 shadow-2xl border-4 border-gray-800">
                                <div className="bg-white h-full w-full rounded-[25px] overflow-hidden relative">
                                    {/* App UI Header */}
                                    <div className="bg-green-600 h-16 w-full p-4 flex items-end">
                                        <div className="w-8 h-8 bg-green-500 rounded-full"></div>
                                        <div className="ml-2 w-20 h-4 bg-green-500 rounded-full"></div>
                                    </div>
                                    {/* Map Area */}
                                    <div className="h-40 bg-blue-50 w-full relative">
                                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                            <MapPin className="w-8 h-8 text-red-500 hover:animate-bounce" />
                                        </div>
                                    </div>
                                    {/* Action Card */}
                                    <div className="p-4 space-y-3">
                                        <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                                        <div className="h-3 w-1/2 bg-gray-100 rounded"></div>
                                        <div className="mt-4 bg-green-600 text-white rounded-lg py-2 text-center text-sm font-bold">
                                            Accept Order
                                        </div>
                                    </div>
                                    {/* Earnings */}
                                    <div className="absolute bottom-0 w-full border-t border-gray-100 p-4">
                                        <div className="flex justify-between items-center">
                                            <div className="text-xs text-gray-500">Earnings</div>
                                            <div className="font-bold text-green-600">₹450</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 5. Billing Software Integration */}
            <Section title="Your POS stays the brain" subtitle="Mobile checkout becomes just another counter.">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <p className="text-lg text-gray-600 mb-6">
                            Every Q Comm order ends its journey inside your existing billing software, just like a walk‑in customer—only under a separate “online” or “quick commerce” counter code.
                        </p>
                        <p className="text-lg text-gray-600 mb-8">
                            That means stock, sales, discounts and taxes remain consistent across offline and online channels, with no extra reconciliation at month‑end.
                        </p>

                        <div className="space-y-4 bg-blue-50 p-6 rounded-2xl border border-blue-100">
                            {[
                                "Each confirmed app order is pushed into POS as a bill with items, prices, tax and payment mode.",
                                "Online‑specific charges (delivery fee, promo codes) are handled as separate line items or tender types.",
                                "Cashless payments settle to your existing payment gateways."
                            ].map((text, i) => (
                                <div key={i} className="flex gap-3">
                                    <Check className="w-5 h-5 text-blue-600 shrink-0" />
                                    <span className="text-gray-700 text-sm">{text}</span>
                                </div>
                            ))}
                        </div>
                        <p className="mt-4 font-semibold text-blue-800">
                            Result: For finance, Q Comm is “just another billing counter”.
                        </p>
                    </div>

                    <div className="bg-white p-6 rounded-2xl border border-gray-200 shadow-lg">
                        <div className="flex items-center justify-between mb-8">
                            <div className="text-center w-1/4">
                                <div className="w-12 h-12 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-2 text-2xl">📱</div>
                                <div className="text-xs font-bold">App Order</div>
                            </div>
                            <ArrowRight className="text-gray-300 w-6 h-6" />
                            <div className="text-center w-1/4">
                                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2 text-2xl">⚡</div>
                                <div className="text-xs font-bold">Online Counter</div>
                            </div>
                            <ArrowRight className="text-gray-300 w-6 h-6" />
                            <div className="text-center w-1/4">
                                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 text-2xl">📠</div>
                                <div className="text-xs font-bold">Master POS</div>
                            </div>
                        </div>

                        <div className="bg-gray-50 rounded-xl p-4 border border-gray-200 font-mono text-xs">
                            <div className="flex justify-between mb-2 pb-2 border-b border-gray-200">
                                <span>Bill #QC-8392</span>
                                <span>{new Date().toLocaleDateString()}</span>
                            </div>
                            <div className="space-y-1 mb-2">
                                <div className="flex justify-between"><span>Milk 1L</span><span>1</span></div>
                                <div className="flex justify-between"><span>Bread</span><span>1</span></div>
                                <div className="flex justify-between text-blue-600"><span>Delivery Fee</span><span>1</span></div>
                            </div>
                            <div className="flex justify-between font-bold pt-2 border-t border-gray-200">
                                <span>Total</span>
                                <span>₹145.00</span>
                            </div>
                        </div>
                    </div>
                </div>
            </Section>

            {/* 6. Dashboard - High Fidelity Redesign */}
            <Section className="bg-slate-900 !py-20 rounded-[2.5rem] my-12 mx-4 lg:mx-8 max-w-[calc(100%-2rem)] lg:max-w-[calc(100%-4rem)] overflow-hidden relative border border-slate-800 shadow-2xl">
                {/* Background Ambient Glows */}
                <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                    <div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-green-500/10 rounded-full blur-[100px]" />
                    <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-blue-500/10 rounded-full blur-[100px]" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-800 border border-slate-700 text-slate-300 text-xs font-medium uppercase tracking-wider mb-2">
                            <LayoutDashboard className="w-3 h-3 text-green-400" /> Control Center
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
                            One control room for the entire chain.
                        </h2>
                        <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
                            HQ gets a live pulse of the business: every order, every rider, and every store, visualised in real-time.
                        </p>
                    </div>

                    {/* Dashboard Visual Interface */}
                    <div className="bg-slate-950 rounded-2xl border border-slate-800 shadow-2xl overflow-hidden flex flex-col md:flex-row min-h-[600px]">

                        {/* Sidebar */}
                        <div className="w-full md:w-64 bg-slate-900 border-r border-slate-800 p-4 flex flex-col hidden md:flex">
                            <div className="flex items-center gap-2 mb-8 px-2">
                                <div className="w-8 h-8 bg-green-600 rounded-lg flex items-center justify-center">
                                    <div className="w-4 h-4 border-2 border-white rounded-full" />
                                </div>
                                <span className="text-white font-bold tracking-wide">Q Comm</span>
                            </div>

                            <div className="space-y-1">
                                <div className="px-3 py-2 bg-slate-800 rounded-lg text-white font-medium flex items-center gap-3 cursor-pointer border border-slate-700">
                                    <LayoutDashboard className="w-4 h-4 text-green-400" /> Overview
                                </div>
                                <div className="px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg font-medium flex items-center gap-3 cursor-pointer transition-colors">
                                    <Store className="w-4 h-4" /> Live Stores
                                </div>
                                <div className="px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg font-medium flex items-center gap-3 cursor-pointer transition-colors">
                                    <Truck className="w-4 h-4" /> Fleet Map
                                </div>
                                <div className="px-3 py-2 text-slate-400 hover:text-white hover:bg-slate-800/50 rounded-lg font-medium flex items-center gap-3 cursor-pointer transition-colors">
                                    <Layers className="w-4 h-4" /> Catalog
                                </div>
                            </div>

                            <div className="mt-auto pt-4 border-t border-slate-800">
                                <div className="flex items-center gap-3 px-2">
                                    <div className="w-8 h-8 rounded-full bg-slate-700" />
                                    <div>
                                        <div className="text-xs text-slate-400">Logged in as</div>
                                        <div className="text-sm font-semibold text-white">HQ Admin</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Main Content Area */}
                        <div className="flex-1 flex flex-col bg-slate-950 relative">
                            {/* Top Bar */}
                            <div className="h-16 border-b border-slate-800 flex items-center justify-between px-6 bg-slate-900/50 backdrop-blur-sm sticky top-0 z-20">
                                <span className="text-white font-semibold">Dashboard / Overview</span>
                                <div className="flex items-center gap-4">
                                    <div className="flex items-center gap-2 text-xs text-green-400 bg-green-400/10 px-2 py-1 rounded border border-green-400/20">
                                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" /> Live
                                    </div>
                                    <span className="text-slate-400 text-sm">Today, {new Date().toLocaleDateString()}</span>
                                </div>
                            </div>

                            {/* Dashboard Grid */}
                            <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-6 overflow-y-auto max-h-[700px]">
                                {/* Stats Row */}
                                <div className="lg:col-span-3 grid grid-cols-2 md:grid-cols-4 gap-4">
                                    {[
                                        { label: "Total Revenue", val: "₹4.2L", trend: "+12%", color: "text-white" },
                                        { label: "Active Orders", val: "1,248", trend: "+5%", color: "text-green-400" },
                                        { label: "Avg Delivery", val: "12m 30s", trend: "-2%", color: "text-blue-400" },
                                        { label: "Active Riders", val: "342", trend: "High Demand", color: "text-orange-400" }
                                    ].map((stat, i) => (
                                        <div key={i} className="bg-slate-900 p-4 rounded-xl border border-slate-800 hover:border-slate-700 transition-colors">
                                            <div className="text-slate-500 text-xs font-medium uppercase mb-1">{stat.label}</div>
                                            <div className={`text-2xl font-bold ${stat.color} mb-1`}>{stat.val}</div>
                                            <div className="text-xs text-green-500 flex items-center gap-1">
                                                <ArrowRight className="w-3 h-3 -rotate-45" /> {stat.trend}
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Map / Chart Area - Main Focus */}
                                <div className="lg:col-span-2 bg-slate-900 rounded-xl border border-slate-800 p-1 min-h-[300px] relative overflow-hidden group">
                                    <div className="absolute top-4 left-4 z-10 flex gap-2">
                                        <button className="bg-slate-800 hover:bg-slate-700 text-white text-xs px-3 py-1.5 rounded-md border border-slate-700 transition-colors">Heatmap</button>
                                        <button className="bg-slate-900/50 hover:bg-slate-800 text-slate-400 text-xs px-3 py-1.5 rounded-md border border-slate-800 transition-colors">Markers</button>
                                    </div>
                                    <div className="w-full h-full bg-slate-900 relative flex items-center justify-center">
                                        {/* Abstract Map Representation */}
                                        <div className="absolute inset-0 opacity-20">
                                            <div className="w-full h-full bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:16px_16px]" />
                                        </div>
                                        {/* Pulsing Dots representing Stores/activity */}
                                        {[...Array(5)].map((_, i) => (
                                            <div key={i} className="absolute w-4 h-4" style={{ top: `${20 + Math.random() * 60}%`, left: `${20 + Math.random() * 60}%` }}>
                                                <div className="absolute inset-0 bg-green-500 rounded-full opacity-40 animate-ping" style={{ animationDelay: `${i * 0.5}s` }} />
                                                <div className="absolute inset-1 bg-green-500 rounded-full border border-green-300 shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
                                            </div>
                                        ))}
                                        {[...Array(8)].map((_, i) => (
                                            <div key={i} className="absolute w-2 h-2 bg-blue-500 rounded-full opacity-60" style={{ top: `${10 + Math.random() * 80}%`, left: `${10 + Math.random() * 80}%` }} />
                                        ))}

                                        <div className="absolute bottom-4 right-4 bg-slate-900/90 backdrop-blur border border-slate-700 p-2 rounded-lg text-xs text-slate-400 shadow-xl">
                                            <div className="flex items-center gap-2 mb-1"><div className="w-2 h-2 rounded-full bg-green-500" /> High Order Volume</div>
                                            <div className="flex items-center gap-2"><div className="w-2 h-2 rounded-full bg-blue-500" /> Active Riders</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Live Activity / Alerts */}
                                <div className="lg:col-span-1 bg-slate-900 rounded-xl border border-slate-800 p-0 flex flex-col">
                                    <div className="p-4 border-b border-slate-800 flex justify-between items-center">
                                        <h3 className="text-white text-sm font-semibold">Live Feed</h3>
                                        <Settings className="w-3.5 h-3.5 text-slate-500 cursor-pointer hover:text-white" />
                                    </div>
                                    <div className="flex-1 overflow-y-auto p-2 space-y-2 max-h-[300px] custom-scrollbar">
                                        {[
                                            { text: "Order #8932 delivered", loc: "Sector 4", time: "Just now", type: "success" },
                                            { text: "New spike in South City", loc: "High demand", time: "2m ago", type: "info" },
                                            { text: "Rider unavailable", loc: "Store 04", time: "5m ago", type: "warning" },
                                            { text: "Order #8930 picked", loc: "Sector 9", time: "8m ago", type: "info" },
                                            { text: "Order #8931 delivered", loc: "Sector 4", time: "10m ago", type: "success" },
                                        ].map((item, i) => (
                                            <div key={i} className="flex gap-3 p-2 hover:bg-slate-800/50 rounded-lg transition-colors items-start">
                                                <div className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${item.type === 'success' ? 'bg-green-500' :
                                                    item.type === 'warning' ? 'bg-orange-500' : 'bg-blue-500'
                                                    }`} />
                                                <div className="flex-1 min-w-0">
                                                    <div className="text-sm text-slate-300 truncate">{item.text}</div>
                                                    <div className="text-xs text-slate-500">{item.loc}</div>
                                                </div>
                                                <div className="text-[10px] text-slate-600 self-center whitespace-nowrap">{item.time}</div>
                                            </div>
                                        ))}
                                    </div>
                                    <div className="p-3 border-t border-slate-800 text-center">
                                        <button className="text-xs text-green-400 hover:text-green-300 font-medium">View All Activity</button>
                                    </div>
                                </div>

                                {/* Bottom Controls */}
                                <div className="lg:col-span-3 grid grid-cols-1 md:grid-cols-3 gap-6 mt-2">
                                    {[
                                        { title: "Store Controls", desc: "Toggle QC availablity per store.", color: "border-purple-500/20 bg-purple-500/5 text-purple-400 hover:border-purple-500/40" },
                                        { title: "Campaigns", desc: "Boost visibility for specific SKUs.", color: "border-blue-500/20 bg-blue-500/5 text-blue-400 hover:border-blue-500/40" },
                                        { title: "Rider Payouts", desc: "Review daily earnings & bonuses.", color: "border-orange-500/20 bg-orange-500/5 text-orange-400 hover:border-orange-500/40" }
                                    ].map((box, i) => (
                                        <div key={i} className={`p-4 rounded-xl border ${box.color} border transition-all cursor-pointer group`}>
                                            <h4 className="text-sm font-bold mb-1 flex items-center justify-between">
                                                {box.title} <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity transform -rotate-45" />
                                            </h4>
                                            <p className="text-xs text-slate-500 group-hover:text-slate-400 transition-colors">{box.desc}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mt-16 text-center border-t border-gray-800 pt-8">
                    <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
                        This integration layer is designed to be thin, modular and reversible—start with the Custom Search + POS feed, then deepen integrations only as quick‑commerce volume and confidence grow.
                    </p>

                </div>
            </Section>
        </div>
    );
};
