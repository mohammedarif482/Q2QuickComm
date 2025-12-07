import React from 'react';
import { RefreshCw, Zap, ShoppingBag, Store, Smartphone, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProductTabProps {
    onTabChange?: (key: string) => void;
}

export const ProductTab: React.FC<ProductTabProps> = ({ onTabChange }) => {
    return (
        <div className="w-full font-sans text-slate-900 animate-fade-up">

            {/* 1. Revolution Hero Section */}
            <section className="relative py-20 px-6 md:px-8 max-w-7xl mx-auto overflow-hidden">
                <div className="text-center max-w-4xl mx-auto space-y-6">
                    <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 tracking-wide uppercase">
                        Quick Commerce Revolution
                    </div>
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-slate-900 leading-tight">
                        Turn Your Stores Into <br />
                        <span className="text-green-600">Quick Commerce Hubs</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-slate-500 max-w-2xl mx-auto leading-relaxed">
                        Enable 30-min delivery using your existing infrastructure. Generate <span className="font-semibold text-slate-900">₹9M profit</span> in Year 1.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-12">
                        {[
                            { value: "14 Days", label: "Go Live", color: "text-green-600", bg: "bg-white" },
                            { value: "30 Mins", label: "Delivery Time", color: "text-green-600", bg: "bg-white" },
                            { value: "300%", label: "Year 1 ROI", color: "text-green-600", bg: "bg-white" }
                        ].map((stat, i) => (
                            <div key={i} className={`p-6 rounded-2xl ${stat.bg} flex flex-col items-center justify-center border border-slate-200 shadow-lg`}>
                                <div className={`text-4xl md:text-5xl font-extrabold ${stat.color} mb-2`}>{stat.value}</div>
                                <div className="text-sm font-semibold text-slate-600 uppercase tracking-widest">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 2. Detailed Hero Section - Clean White Background */}
            <section className="py-12 md:py-24 px-6 md:px-8 max-w-7xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20 items-center">
                    <div className="space-y-8">
                        <div className="inline-flex items-center px-4 py-1.5 rounded-full text-xs font-semibold bg-green-100 text-green-800 tracking-wide uppercase">
                            Built for JamJoom stores
                        </div>

                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-[1.1] text-slate-900">
                            Turn every JamJoom outlet into a 30‑minute commerce engine.
                        </h1>

                        <p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg">
                            A modern quick‑commerce layer on top of your existing POS and stores—no dark warehouses, no new staff model, just one app that makes JamJoom shoppable from anywhere in the city.
                        </p>

                        <ul className="space-y-4 pt-2">
                            {[
                                "Live inventory from your billing system, not a static catalog.",
                                "One JamJoom app for all locations, auto‑routing orders to the right store.",
                                "Designed to feel as smooth as Swiggy Instamart or Zepto, but fully JamJoom‑branded."
                            ].map((item, i) => (
                                <li key={i} className="flex items-start gap-3">
                                    <div className="mt-1.5 w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0">
                                        <div className="w-2 h-2 rounded-full bg-green-600" />
                                    </div>
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>

                        <div className="pt-6 flex flex-col sm:flex-row gap-4 items-start sm:items-center">
                            <button className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-green-600 rounded-full hover:bg-green-700 hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200">
                                See how the product works
                            </button>
                            <button
                                onClick={() => onTabChange?.('2')}
                                className="inline-flex items-center gap-2 px-6 py-4 text-base font-medium text-slate-500 hover:text-green-600 transition-colors group"
                            >
                                Or jump to Business Integration <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>

                    <div className="relative h-[500px] md:h-[600px] bg-slate-50 rounded-[2.5rem] flex items-center justify-center border border-slate-100 overflow-hidden shadow-2xl shadow-slate-200/50">
                        {/* Decorative background elements */}
                        <div className="absolute inset-0 bg-gradient-to-tr from-slate-50 to-white opacity-50" />
                        <div className="absolute -right-20 -top-20 w-80 h-80 bg-green-100/50 rounded-full blur-3xl mix-blend-multiply" />
                        <div className="absolute -left-20 -bottom-20 w-80 h-80 bg-blue-100/50 rounded-full blur-3xl mix-blend-multiply" />

                        {/* Phone Mockup Placeholder */}
                        <div className="relative z-10 flex flex-col items-center gap-4 text-slate-400">
                            <Smartphone className="w-20 h-20 text-slate-300" strokeWidth={1} />
                            <span className="text-sm font-medium tracking-widest uppercase">App Experience Preview</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 2. UI Showcase - Light Gray Band */}
            <section className="py-24 bg-slate-50 border-y border-slate-200/60">
                <div className="max-w-7xl mx-auto px-6 md:px-8">
                    <div className="max-w-3xl mx-auto text-center space-y-6 mb-20">
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 tracking-tight">
                            A familiar, Instamart‑grade experience—under the JamJoom brand.
                        </h2>
                        <p className="text-xl text-slate-500 leading-relaxed">
                            Customers get the speed and polish they expect from national apps, while JamJoom keeps the relationship, data, and margin.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="relative h-[400px] flex items-center justify-center perspective-1000">
                            {/* Stacked Phones */}
                            <div className="absolute left-10 md:left-20 top-10 w-48 h-80 bg-white rounded-3xl border-4 border-slate-100 shadow-xl transform -rotate-6 z-10 flex items-center justify-center text-slate-300">
                                <span className="text-xs font-bold uppercase tracking-wider">Onboarding</span>
                            </div>
                            <div className="absolute z-20 w-52 h-96 bg-white rounded-3xl border-4 border-slate-900 shadow-2xl transform rotate-0 flex items-center justify-center">
                                <span className="text-sm font-bold uppercase tracking-wider text-slate-900">Home Screen</span>
                            </div>
                            <div className="absolute right-10 md:right-20 top-10 w-48 h-80 bg-slate-100 rounded-3xl border-4 border-white shadow-lg transform rotate-6 z-0 flex items-center justify-center text-slate-400">
                                <span className="text-xs font-bold uppercase tracking-wider">Checkout</span>
                            </div>
                        </div>

                        <div className="space-y-12">
                            {[
                                {
                                    title: "Onboarding & location",
                                    desc: "“Deliver to Kizhakkethala” with store auto‑selection and promise time, so customers instantly see which JamJoom branch will serve them."
                                },
                                {
                                    title: "Home & promotions",
                                    desc: "Hero banner for “Today’s Fresh Picks”, category chips for Groceries, Bakery, Pharmacy and Electronics, and clear space for JamJoom and partner brand offers."
                                },
                                {
                                    title: "Categories & product cards",
                                    desc: "Clean grids of products with prices, offers and instant add‑to‑cart actions, optimised for quick repeat ordering on small screens."
                                }
                            ].map((feature, idx) => (
                                <div key={idx} className="flex gap-6">
                                    <div className="flex flex-col items-center">
                                        <div className="w-8 h-8 rounded-full bg-white border-2 border-green-500 text-green-600 flex items-center justify-center font-bold text-sm shadow-sm z-10">
                                            {idx + 1}
                                        </div>
                                        {idx !== 2 && <div className="w-0.5 h-full bg-slate-200 my-2" />}
                                    </div>
                                    <div className="pb-2">
                                        <h3 className="text-lg font-bold text-slate-900 mb-2">{feature.title}</h3>
                                        <p className="text-slate-500 leading-relaxed text-base">{feature.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-20 pt-8 border-t border-slate-200 flex justify-center">
                        <div className="flex items-center gap-4 text-sm font-semibold text-slate-400 tracking-wide uppercase">
                            <span>Browse</span>
                            <div className="w-1 h-1 rounded-full bg-slate-300" />
                            <span>Build Basket</span>
                            <div className="w-1 h-1 rounded-full bg-slate-300" />
                            <span className="text-green-600">30‑min Delivery</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Core Features - Clean Grid */}
            <section className="py-24 bg-white max-w-7xl mx-auto px-6 md:px-8">
                <div className="mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">Core product pillars</h2>
                    <p className="text-lg text-slate-500">Everything needed to run a modern quick commerce operation.</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {[
                        {
                            icon: RefreshCw,
                            color: "text-blue-600",
                            bg: "bg-blue-50",
                            title: "Live catalog from your POS",
                            desc: "JamJoom Quick plugs directly into your existing billing software, so product names, barcodes, prices and stock levels stay in sync in real‑time across all stores.",
                            sub: "No duplicate catalog management, no manual uploads when MRP or offers change."
                        },
                        {
                            icon: Store,
                            color: "text-green-600",
                            bg: "bg-green-50",
                            title: "One app, many stores",
                            desc: "Customers see a single JamJoom experience, while the platform routes each order to the closest store with stock available and capacity to fulfil within the SLA.",
                            sub: "Every branch runs its own inventory and delivery radius, but management sees it as one unified channel."
                        },
                        {
                            icon: ShoppingBag,
                            color: "text-orange-600",
                            bg: "bg-orange-50",
                            title: "Operations‑ready store app",
                            desc: "Store staff get a simple workflow: pick list by aisle, substitution suggestions, pack confirmation and handover to rider—all logged against the order.",
                            sub: "This turns each JamJoom location into a mini fulfilment hub without disrupting how billing works today."
                        },
                        {
                            icon: Zap,
                            color: "text-purple-600",
                            bg: "bg-purple-50",
                            title: "Promotional space",
                            desc: "Hero banners, category spotlights and “sponsored” product rows give JamJoom and partner brands prime digital shelf space—mirroring gondolas and end‑caps in your physical stores.",
                            sub: "Run chain‑wide offers or store‑specific campaigns with just a few clicks."
                        }
                    ].map((card, i) => (
                        <div key={i} className="group p-8 md:p-10 rounded-[2rem] bg-white border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.08)] transition-all duration-300">
                            <div className={`w-14 h-14 rounded-2xl ${card.bg} ${card.color} flex items-center justify-center mb-6`}>
                                <card.icon className="w-7 h-7" />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{card.title}</h3>
                            <p className="text-slate-500 leading-relaxed mb-4">
                                {card.desc}
                            </p>
                            <p className="text-sm text-slate-400 font-medium">
                                {card.sub}
                            </p>
                        </div>
                    ))}
                </div>

                <p className="mt-12 text-center text-slate-400 text-sm">
                    Everything is theme‑matched to JamJoom’s colours and photography.
                </p>
            </section>

            {/* 4. AI Section - Subtle Gradient */}
            <section className="py-24 bg-gradient-to-b from-slate-50 to-white border-t border-slate-100">
                <div className="max-w-7xl mx-auto px-6 md:px-8 grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
                    <div>
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-50 text-purple-700 text-xs font-bold mb-6 uppercase tracking-wider">
                            <Zap className="w-3 h-3" /> Future Ready
                        </div>
                        <h2 className="text-3xl md:text-5xl font-bold text-slate-900 mb-8 leading-tight">
                            AI that understands how people actually shop.
                        </h2>

                        <div className="space-y-10">
                            <div>
                                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
                                    <CheckCircle2 className="w-5 h-5 text-green-600" />
                                    Available from day one
                                </h3>
                                <ul className="space-y-4 pl-7">
                                    <li className="text-slate-600 leading-relaxed">
                                        <strong className="font-semibold text-slate-900">Smart search & typo‑tolerance</strong> — Customers find “Sunflower oil” or “brown bread” even with spelling mistakes.
                                    </li>
                                    <li className="text-slate-600 leading-relaxed">
                                        <strong className="font-semibold text-slate-900">Auto‑enriched catalog</strong> — Product images and attributes are pulled from the web and cleaned automatically.
                                    </li>
                                    <li className="text-slate-600 leading-relaxed">
                                        <strong className="font-semibold text-slate-900">Basic recommendations</strong> — “Frequently bought together” nudges to lift AOV.
                                    </li>
                                </ul>
                            </div>

                            <div className="pt-8 border-t border-slate-200">
                                <h3 className="text-lg font-bold text-slate-400 flex items-center gap-2 mb-4">
                                    Roadmap (6-12 months)
                                </h3>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                                    <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                        <strong className="block text-slate-900 mb-2">AI grocery planner</strong>
                                        <p className="text-sm text-slate-500">Builds baskets from meal plans automatically.</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                        <strong className="block text-slate-900 mb-2">Personalised re‑orders</strong>
                                        <p className="text-sm text-slate-500">Learns household rhythm and gently nudges.</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                        <strong className="block text-slate-900 mb-2">Voice Assistant</strong>
                                        <p className="text-sm text-slate-500">“Chicken biryani for 6” → Ingredient list.</p>
                                    </div>
                                    <div className="p-4 rounded-xl bg-white border border-slate-100 shadow-sm">
                                        <strong className="block text-slate-900 mb-2">Store Insights</strong>
                                        <p className="text-sm text-slate-500">Staffing prediction based on order volume.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="sticky top-24">
                        <div className="aspect-[4/3] bg-slate-900 rounded-[2.5rem] p-8 flex items-center justify-center relative overflow-hidden shadow-2xl">
                            <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-black" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-green-500/20 rounded-full blur-3xl animate-pulse" />

                            <div className="relative z-10 text-center space-y-6">
                                <div className="w-20 h-20 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center mx-auto border border-white/20">
                                    <Zap className="w-10 h-10 text-green-400" />
                                </div>
                                <div>
                                    <div className="text-white font-mono text-sm mb-2 opacity-60">Input</div>
                                    <div className="text-xl text-white font-medium">“Weekly groceries for 4”</div>
                                </div>
                                <ArrowRight className="w-6 h-6 text-slate-500 mx-auto transform rotate-90" />
                                <div>
                                    <div className="text-white font-mono text-sm mb-2 opacity-60">Output</div>
                                    <div className="p-3 bg-white/10 rounded-lg text-left text-sm text-green-300 font-mono">
                                        [Milk x2, Bread x1, Eggs x12...]
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 5. Footer CTA */}
            <section className="py-20 bg-white border-t border-slate-100 text-center">
                <div className="max-w-3xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-slate-900 mb-8">
                        Ready to see the business impact?
                    </h2>
                    <button
                        onClick={() => onTabChange?.('2')}
                        className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1"
                    >
                        Next: Business Integration <ArrowRight className="ml-2 w-5 h-5" />
                    </button>
                    <p className="mt-6 text-slate-400 text-sm">
                        or <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} className="text-slate-600 underline hover:text-slate-900">back to top</button>
                    </p>
                </div>
            </section>

        </div>
    );
};
