import React from 'react';
import { ResponsiveContainer, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { Section } from '../UI/Section';

const retentionData = [
    { month: 'M1', zepto: 100, jj: 100 },
    { month: 'M2', zepto: 45, jj: 65 },
    { month: 'M3', zepto: 35, jj: 55 },
    { month: 'M4', zepto: 30, jj: 50 },
    { month: 'M5', zepto: 25, jj: 48 },
    { month: 'M6', zepto: 20, jj: 45 },
];

export const CompetitiveMoatTab: React.FC = () => {
    return (
        <div className="space-y-12">
            <Section title="Deepening the Moat" subtitle="How we lock in value over time.">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm">
                        <h3 className="text-xl font-bold mb-6 text-secondary">Superior Cohort Retention</h3>
                        <div className="h-[300px]">
                            <ResponsiveContainer width="100%" height="100%">
                                <AreaChart data={retentionData}>
                                    <defs>
                                        <linearGradient id="colorJj" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                                        </linearGradient>
                                        <linearGradient id="colorZepto" x1="0" y1="0" x2="0" y2="1">
                                            <stop offset="5%" stopColor="#EF4444" stopOpacity={0.3} />
                                            <stop offset="95%" stopColor="#EF4444" stopOpacity={0} />
                                        </linearGradient>
                                    </defs>
                                    <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                    <XAxis dataKey="month" stroke="#64748B" />
                                    <YAxis stroke="#64748B" unit="%" />
                                    <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', color: '#1e293b' }} />
                                    <Legend />
                                    <Area type="monotone" dataKey="jj" name="QComm (Trust)" stroke="#10B981" fillOpacity={1} fill="url(#colorJj)" strokeWidth={2} />
                                    <Area type="monotone" dataKey="zepto" name="Competitors (Cashback)" stroke="#EF4444" fillOpacity={1} fill="url(#colorZepto)" strokeWidth={2} />
                                </AreaChart>
                            </ResponsiveContainer>
                        </div>
                        <p className="mt-4 text-slate-600 text-sm">
                            QComm retains <span className="text-green-600 font-bold">2.2x</span> more users by Month 6 due to trust and physical store integration.
                        </p>
                    </div>

                    <div className="flex flex-col justify-center space-y-6">
                        {[
                            { title: "Store Density", desc: "Every 2km radius has a fulfillment node. Competitors can't match this density without billions in capex." },
                            { title: "SKU Cross-Sell", desc: "High-margin long-tail items from hypermarket inventory subsidize low-margin FMCG delivery." },
                            { title: "The Flywheel", desc: "More orders -> Better prediction -> Less waste -> Lower prices -> More orders." }
                        ].map((item, i) => (
                            <div key={i} className="p-6 rounded-xl border-l-4 border-primary bg-slate-50">
                                <h4 className="text-lg font-bold text-secondary mb-2">{item.title}</h4>
                                <p className="text-slate-600">{item.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </Section>

            <Section title="Expansion Roadmap">
                <div className="relative border-l-2 border-slate-200 ml-6 space-y-12">
                    {[
                        { phase: "Phase 1: Grocery", time: "Month 0-6", desc: "Dominate fresh and daily essentials." },
                        { phase: "Phase 2: Categories", time: "Month 6-12", desc: "Expand to Pharma, Electronics, and Beauty." },
                        { phase: "Phase 3: Subscription", time: "Year 2+", desc: "QComm Prime members get free delivery + in-store perks." }
                    ].map((step, i) => (
                        <div key={i} className="relative pl-8">
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary border-4 border-white shadow-sm" />
                            <h4 className="text-lg font-bold text-secondary">{step.phase} <span className="text-slate-500 text-sm font-normal ml-2">({step.time})</span></h4>
                            <p className="text-slate-600 mt-2">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>
        </div>
    );
};
