import React from 'react';
import { Section } from '../UI/Section';
import {
    Users,
    Smartphone,
    TrendingUp,
    AlertTriangle,
    CheckCircle2,
    ArrowRight
} from 'lucide-react';
import { Card } from 'antd';

export const WhyQuick2QCommTab: React.FC = () => {
    return (
        <div className="space-y-8 animate-fadeIn pb-12">
            {/* Section 1: Transition */}
            <Section title="Transition: How Tier‑3 Shoppers Are Changing" subtitle="Tier‑3 customers now shop online like metros—just with fewer options.">
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm relative overflow-hidden group hover:shadow-md transition-all duration-300">
                    <div className="lg:flex gap-12 items-start">
                        <div className="flex-1 space-y-6 text-slate-600 leading-relaxed text-lg">
                            <p>
                                Since 2020, about <strong className="text-slate-900">60% of new Indian online shoppers</strong> have come from tier‑3 and smaller cities, not metros.
                            </p>
                            <p>
                                Tier‑2/3 locations already drive 60–65% of India’s ecommerce demand, and tier‑3 alone contributed nearly half of festive online orders in recent sales.
                            </p>
                            <p>
                                Grocery and daily‑use categories are expected to contribute around 70% of incremental online growth, with penetration forecast to grow <strong className="text-slate-900">2–4× from current levels</strong> over the next few years.
                            </p>

                            <div className="bg-emerald-50 border-l-4 border-emerald-500 p-6 rounded-r-xl mt-6">
                                <p className="text-emerald-800 font-medium text-lg italic">
                                    "JamJoom’s core shopper in Malappuram is already buying online—just not yet from JamJoom."
                                </p>
                            </div>
                        </div>
                        <div className="lg:w-1/3 mt-8 lg:mt-0 bg-slate-50 rounded-2xl p-6 flex flex-col items-center justify-center text-center space-y-4">
                            <div className="bg-white p-4 rounded-full shadow-sm mb-2">
                                <TrendingUp className="w-8 h-8 text-emerald-600" />
                            </div>
                            <h4 className="text-xl font-bold text-slate-800">Tier-3 Growth</h4>
                            <p className="text-slate-500">Tier-3 cities driving 60% of new e-commerce adoption across India.</p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 2: Demographic Drivers */}
            <Section title="Demographic Drivers" subtitle="Younger, busier, more digital—that’s who is driving quick commerce in tier‑3.">
                <div className="grid md:grid-cols-2 gap-8">
                    <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
                        <div className="flex items-center gap-4 mb-2">
                            <div className="p-3 bg-blue-50 rounded-full text-blue-600">
                                <Users size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-slate-900">The New Shopper Profile</h3>
                        </div>
                        <ul className="space-y-4 text-slate-600 leading-relaxed">
                            <li className="flex gap-3">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                <span>Studies show that <strong>18–35 year‑olds</strong> are the most active segment, valuing convenience and time savings over small price differences.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                <span>Tier‑2/3 India has seen a <strong>50–70% surge</strong> in digital payments, with UPI as the default for daily spending.</span>
                            </li>
                            <li className="flex gap-3">
                                <span className="mt-2 w-1.5 h-1.5 rounded-full bg-blue-500 flex-shrink-0" />
                                <span>Rising dual‑income households mean more demand for "I’ll order it on my way home" behaviour instead of weekend stock‑up trips.</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden">
                        <div className="absolute top-6 right-6 opacity-10">
                            <Smartphone size={120} />
                        </div>
                        <h3 className="text-2xl font-bold mb-6 relative z-10">The Insight</h3>
                        <p className="text-slate-300 text-lg leading-relaxed italic relative z-10">
                            "The JamJoom customer of the next decade is a digital‑native 25‑year‑old who expects groceries to be one tap away, not one bus ride away."
                        </p>
                    </div>
                </div>
            </Section>

            {/* Section 3: The Decision Window */}
            <Section title="Do Now or Die: The Decision Window" subtitle="Quick commerce is no longer 'nice to have'—it’s becoming the default grocery journey.">
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm">
                    <div className="grid lg:grid-cols-3 gap-8 mb-8">
                        <div className="p-6 bg-slate-50 rounded-2xl">
                            <h4 className="text-4xl font-bold text-emerald-600 mb-2">$11B</h4>
                            <p className="text-slate-800 font-bold">Expected Market Size by 2030</p>
                            <p className="text-sm text-slate-500 mt-1">Growing from $1.5B (2022)</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl">
                            <h4 className="text-4xl font-bold text-emerald-600 mb-2">2/3rds</h4>
                            <p className="text-slate-800 font-bold">Of Online Grocery Orders</p>
                            <p className="text-sm text-slate-500 mt-1">Now happen via Quick Commerce</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl">
                            <h4 className="text-4xl font-bold text-emerald-600 mb-2">90%</h4>
                            <p className="text-slate-800 font-bold">Consumer Awareness</p>
                            <p className="text-sm text-slate-500 mt-1">Mainstream adoption achieved</p>
                        </div>
                    </div>

                    <div className="space-y-4 text-slate-600 mb-8 max-w-4xl">
                        <p>Quick commerce has grown from roughly USD 1.5 billion in 2022 to USD 5–7 billion by 2024, and is expected to cross USD 9–11 billion before 2030 in India.</p>
                        <p>Recent industry playbooks estimate that nearly two‑thirds of India’s online grocery orders now happen via quick‑commerce platforms, with smaller cities growing at 8–9% annually.</p>
                    </div>

                    <div className="bg-orange-50 border border-orange-200 rounded-xl p-6 flex items-start gap-4">
                        <AlertTriangle className="text-orange-600 flex-shrink-0 mt-1 w-6 h-6" />
                        <p className="text-orange-900 text-lg font-bold">
                            In 12–18 months, quick commerce will be “how people buy groceries online” in Malappuram. If JamJoom is not there, someone else will be.
                        </p>
                    </div>
                </div>
            </Section>

            {/* Section 4: Chunk Distribution */}
            <Section title="Chunk Distribution: Offline vs Online Share" subtitle="Offline will stay big—but the most profitable chunk is shifting online.">
                <div className="bg-white rounded-3xl p-8 border border-slate-100 shadow-sm space-y-6">
                    <div className="lg:w-3/4 space-y-6">
                        <p className="text-slate-600 leading-relaxed">
                            E‑grocery is projected to reach around USD 7–11 billion by 2029, still only a few percent of India’s total grocery market—but almost all incremental organised growth comes from this slice.
                        </p>
                        <p className="text-slate-600 leading-relaxed">
                            In categories like grocery, lifestyle and general merchandise, online penetration is expected to grow 2–4× from current levels, with quick commerce capturing a disproportionate share of high‑frequency baskets.
                        </p>
                    </div>

                    <div className="my-8 py-10 px-6 md:px-12 bg-slate-900 rounded-2xl text-center relative overflow-hidden shadow-xl">
                        <div className="absolute inset-0 bg-grid-white/[0.05] bg-[size:30px_30px]" />
                        <div className="relative z-10 max-w-3xl mx-auto">
                            <p className="text-2xl md:text-3xl font-serif italic text-white leading-relaxed">
                                "If Malappuram's organised grocery moves to 10% online, the 'missing' share for JamJoom is not footfall—it’s margin leaking to apps that own the digital channel."
                            </p>
                        </div>
                    </div>
                </div>
            </Section>

            {/* Section 5: Comparison */}
            <Section title="Profit Impact: Enter Now vs. Wait" subtitle="The cost of inaction is measured in lost margin forever.">
                <div className="grid lg:grid-cols-2 gap-8">
                    {/* Enter Now */}
                    <Card
                        className="bg-emerald-50/40 border-emerald-100 h-full hover:shadow-lg transition-all duration-300"
                        title={
                            <div className="flex items-center gap-3 text-emerald-800">
                                <CheckCircle2 className="w-6 h-6" />
                                <span className="text-xl font-bold">If JamJoom Enters Now</span>
                            </div>
                        }
                    >
                        <ul className="space-y-6">
                            <li className="bg-white p-5 rounded-xl shadow-sm border border-emerald-100">
                                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Market Potential</div>
                                <div className="text-slate-700 leading-snug">Assume Malappuram + catchment has ₹3,000–3,500 Cr annual grocery spend. A 10% shift means a <strong className="text-slate-900">₹300–350 Cr online pool</strong>.</div>
                            </li>
                            <li className="bg-white p-5 rounded-xl shadow-sm border border-emerald-100">
                                <div className="text-xs font-bold text-emerald-600 uppercase tracking-wider mb-2">Likely Share</div>
                                <div className="text-slate-700 leading-snug">A strong regional brand can capture 25–35%, driving <strong className="text-slate-900">₹75–120 Cr annual GMV</strong>.</div>
                            </li>
                            <li className="bg-emerald-600 p-6 rounded-xl shadow-md text-white mt-2 ring-4 ring-emerald-100">
                                <div className="text-emerald-100 text-xs font-bold uppercase tracking-wider mb-1">Bottom Line Impact</div>
                                <div className="text-2xl font-bold">₹9–18 Cr</div>
                                <div className="text-emerald-100 text-sm mt-1 font-medium">Annual Contribution Profit</div>
                            </li>
                        </ul>
                    </Card>

                    {/* Wait */}
                    <Card
                        className="bg-red-50/40 border-red-100 h-full hover:shadow-lg transition-all duration-300"
                        title={
                            <div className="flex items-center gap-3 text-red-800">
                                <AlertTriangle className="w-6 h-6" />
                                <span className="text-xl font-bold">If JamJoom Waits</span>
                            </div>
                        }
                    >
                        <ul className="space-y-6">
                            <li className="bg-white p-5 rounded-xl shadow-sm border border-red-100">
                                <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">Lost Ground</div>
                                <div className="text-slate-700 leading-snug">External platforms capture 60–70% of the online pool first, leaving JamJoom to fight for <strong className="text-slate-900">15–20% share</strong>.</div>
                            </li>
                            <li className="bg-white p-5 rounded-xl shadow-sm border border-red-100">
                                <div className="text-xs font-bold text-red-600 uppercase tracking-wider mb-2">Margin Crunch</div>
                                <div className="text-slate-700 leading-snug">Selling through aggregators or discount channels compresses margins to <strong className="text-slate-900">5–8%</strong>.</div>
                            </li>
                            <li className="bg-red-600 p-6 rounded-xl shadow-md text-white mt-2 ring-4 ring-red-100">
                                <div className="text-red-100 text-xs font-bold uppercase tracking-wider mb-1">Bottom Line Impact</div>
                                <div className="text-2xl font-bold">₹2–5 Cr</div>
                                <div className="text-red-100 text-sm mt-1 font-medium">Massive loss compared to entering now.</div>
                            </li>
                        </ul>
                    </Card>
                </div>
                <div className="mt-8 text-center max-w-3xl mx-auto">
                    <p className="text-slate-500 font-medium italic">
                        "Every year JamJoom delays quick commerce, it effectively leaves 60–70% of the future online grocery profit in its catchment on the table for outside platforms."
                    </p>
                </div>
            </Section>

            {/* Section 6: Closing */}
            <Section title="Conclusion: Why JamJoom Quick?">
                <div className="bg-slate-900 rounded-3xl p-8 lg:p-12 text-white shadow-2xl">
                    <div className="grid md:grid-cols-2 gap-12">
                        <ul className="space-y-8">
                            {[
                                { title: "Customer Behaviour Shifted", desc: "Tier‑3 shoppers are now the majority of India’s new online buyers." },
                                { title: "Profit Pool Moving", desc: "Almost all new, high‑margin, data‑rich growth is in quick commerce." },
                                { title: "Structural Advantage", desc: "Large stores, wide assortment, and trust are things national apps pay billions to replicate." },
                                { title: "Cost of Inaction", desc: "Waiting lets someone else train your customers to order elsewhere." }
                            ].map((item, i) => (
                                <li key={i} className="flex gap-4 items-start group">
                                    <div className="p-1 mt-1">
                                        <div className="w-2 h-2 rounded-full bg-emerald-400 group-hover:scale-150 transition-transform" />
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-emerald-400 text-lg mb-1 group-hover:text-emerald-300 transition-colors">{item.title}</h4>
                                        <p className="text-slate-300 leading-relaxed text-sm lg:text-base">{item.desc}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col justify-center border-t md:border-t-0 md:border-l border-slate-700 pt-8 md:pt-0 md:pl-12">
                            <p className="text-xl md:text-2xl font-serif italic leading-relaxed text-slate-200 mb-8">
                                "The question isn’t whether Malappuram will move to app‑based grocery—it already is. The real choice is simple: build JamJoom Quick now and own that shift, or watch other apps earn the margin on your customers."
                            </p>
                            <button className="bg-emerald-500 hover:bg-emerald-600 text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-emerald-500/25 flex items-center justify-center gap-2 self-start group">
                                Start The Transformation <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </button>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
