import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle2, XCircle, Truck, Store, Box, Zap, ShoppingBag, DollarSign, Layers, ShieldCheck } from 'lucide-react';
import { Section } from '../UI/Section';
import { FeatureCard } from '../UI/FeatureCard';
import { Hero } from '../Layout/Hero';

export const ProductTab: React.FC = () => {
    const handleCtaClick = () => {
        const element = document.getElementById('product-content');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-12">
            <Hero onCtaClick={handleCtaClick} />

            {/* 1.1 Hero Comparison */}
            <Section id="product-content" title="The Quick Commerce Shift" subtitle="Why traditional models fail and why we win.">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-8 rounded-2xl bg-white border border-slate-200 shadow-sm"
                    >
                        <h3 className="text-2xl font-bold mb-6 text-red-600 flex items-center gap-2">
                            <XCircle className="w-6 h-6" /> Traditional QC
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-500/50 mt-1" />
                                <span className="text-slate-600">High CAPEX (<span className="text-secondary font-semibold">₹50 Cr+</span>)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-500/50 mt-1" />
                                <span className="text-slate-600">24 months to breakeven</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <XCircle className="w-5 h-5 text-red-500/50 mt-1" />
                                <span className="text-slate-600">Limited SKU range (3k-5k)</span>
                            </li>
                        </ul>
                    </motion.div>

                    <motion.div
                        whileHover={{ scale: 1.02 }}
                        className="p-8 rounded-2xl bg-gradient-to-br from-primary/5 to-primary/10 border border-primary/20 relative overflow-hidden"
                    >
                        <div className="absolute top-0 right-0 p-3 bg-primary/20 rounded-bl-xl text-xs font-bold text-primary uppercase tracking-widest">
                            Winner
                        </div>
                        <h3 className="text-2xl font-bold mb-6 text-primary flex items-center gap-2">
                            <CheckCircle2 className="w-6 h-6" /> QComm
                        </h3>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary/50 mt-1" />
                                <span className="text-slate-700">Min CAPEX (<span className="text-secondary font-semibold">₹5 Cr</span>)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary/50 mt-1" />
                                <span className="text-slate-700">6 months to breakeven</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <CheckCircle2 className="w-5 h-5 text-primary/50 mt-1" />
                                <span className="text-slate-700">Full range (15k+ SKUs)</span>
                            </li>
                        </ul>
                    </motion.div>
                </div>
            </Section>

            {/* 1.2 How It Works */}
            <Section title="How It Works" className="bg-slate-50">
                <div className="relative">
                    {/* Connecting Line */}
                    <div className="absolute top-12 left-0 right-0 h-0.5 bg-gradient-to-r from-slate-200 via-primary to-slate-200 hidden md:block" />

                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        {[
                            { icon: ShoppingBag, title: "Order", desc: "Customer places order on app" },
                            { icon: Store, title: "Store", desc: "Existing store receives order" },
                            { icon: Box, title: "Pack", desc: "Dedicated staff packs in 5 mins" },
                            { icon: Truck, title: "Delivery", desc: "Rider delivers in 15 mins" },
                        ].map((step, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.2 }}
                                className="relative z-10 flex flex-col items-center text-center"
                            >
                                <div className="w-24 h-24 rounded-full bg-white border-4 border-white flex items-center justify-center mb-6 shadow-xl relative">
                                    <step.icon className="w-10 h-10 text-primary" />
                                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold border-4 border-white">
                                        {i + 1}
                                    </div>
                                </div>
                                <h3 className="text-xl font-bold text-secondary mb-2">{step.title}</h3>
                                <p className="text-slate-600 text-sm">{step.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </Section>

            {/* 1.3 Features Grid */}
            <Section title="Core Capabilities">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <FeatureCard
                        icon={Zap}
                        title="Lightning Fast"
                        description="Optimized pick paths and localized inventory enable sub-30 min delivery."
                    />
                    <FeatureCard
                        icon={Layers}
                        title="Inventory Sync"
                        description="Real-time sync between POS and Quick Commerce app. Zero cancellations."
                    />
                    <FeatureCard
                        icon={ShieldCheck}
                        title="Zero Shrinkage"
                        description="AI-powered inventory checks and staff accountability systems."
                    />
                    <FeatureCard
                        icon={DollarSign}
                        title="Dynamic Pricing"
                        description="Auto-adjust prices based on demand, expiry, and competition."
                    />
                    <FeatureCard
                        icon={Store}
                        title="Store Overlay"
                        description="Operate without disrupting walk-in customers. Hybrid model."
                    />
                    <FeatureCard
                        icon={Truck}
                        title="Smart Routing"
                        description="Batch orders and optimize delivery routes for max efficiency."
                    />
                </div>
            </Section>
        </div>
    );
};
