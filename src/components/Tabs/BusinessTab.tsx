import React from 'react';
import { motion } from 'framer-motion';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { Section } from '../UI/Section';
import { StatCard } from '../UI/StatCard';
import { AlertTriangle, TrendingUp, Users, Wallet } from 'lucide-react';

const data = [
    { name: '2024', LaunchNow: 10, Wait: 0 },
    { name: '2025', LaunchNow: 50, Wait: 0 },
    { name: '2026', LaunchNow: 120, Wait: 20 },
    { name: '2027', LaunchNow: 250, Wait: 60 },
    { name: '2028', LaunchNow: 400, Wait: 120 },
];

export const BusinessTab: React.FC = () => {
    return (
        <div className="space-y-12">
            {/* 2.1 Market Stats */}
            <Section title="The Quick Commerce Opportunity" subtitle="A ₹12.6B market growing at 40% CAGR">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <StatCard label="Market Size" value="₹12.6B" subtext="Indian Q-Commerce Market by 2025" trend="up" trendValue="40% CAGR" />
                    <StatCard label="Total TAM" value="₹400Cr" subtext="Serviceable geography in your region" trend="up" trendValue="Expanding" />
                    <StatCard label="Adoption" value="25M+" subtext="Daily active users across platforms" trend="up" trendValue="Hyper-growth" />
                </div>
            </Section>

            {/* 2.2 Threat Timeline */}
            <Section title="The Cost of Waiting" subtitle="First-mover advantage dictates market leadership.">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 h-[400px] shadow-sm">
                    <h3 className="text-xl font-bold mb-4 text-center text-secondary">Projected Revenue (₹ Cr)</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <LineChart data={data}>
                            <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                            <XAxis dataKey="name" stroke="#64748B" />
                            <YAxis stroke="#64748B" />
                            <Tooltip
                                contentStyle={{ backgroundColor: '#fff', borderColor: '#e2e8f0', color: '#1e293b' }}
                                itemStyle={{ color: '#1e293b' }}
                            />
                            <Legend />
                            <Line type="monotone" dataKey="LaunchNow" name="If Launch Now (Green)" stroke="#10B981" strokeWidth={3} dot={{ r: 6 }} activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="Wait" name="If Wait 2 Years (Red)" stroke="#EF4444" strokeWidth={3} strokeDasharray="5 5" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </Section>

            {/* 2.3 TAM Breakdown */}
            <Section title="TAM Breakdown">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    {[
                        { label: "Population", val: "1.2M", icon: Users },
                        { label: "Grocery Spend", val: "₹650 Cr/mo", icon: Wallet },
                        { label: "QC Penetration", val: "15%", icon: TrendingUp },
                        { label: "Your Share", val: "₹15 Cr/mo", icon: AlertTriangle, highlight: true }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className={`p-6 rounded-2xl border ${item.highlight ? 'bg-primary/5 border-primary shadow-lg shadow-primary/10' : 'bg-white border-slate-200'}`}
                        >
                            <item.icon className={`w-8 h-8 mb-4 ${item.highlight ? 'text-primary' : 'text-slate-400'}`} />
                            <div className="text-sm text-slate-500">{item.label}</div>
                            <div className="text-2xl font-bold text-secondary">{item.val}</div>
                        </motion.div>
                    ))}
                </div>
            </Section>

            {/* 2.4 FOMO Math */}
            <Section title="Scenario Analysis">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-green-50 p-6 rounded-2xl border border-green-200">
                        <h3 className="text-xl font-bold text-green-700 mb-2">Launch Now</h3>
                        <div className="text-3xl font-bold text-secondary mb-2">₹9Cr</div>
                        <div className="text-sm text-green-700">Profit Year 1</div>
                        <div className="mt-4 text-xs text-green-600">Lock in 40% market share before competitors.</div>
                    </div>

                    <div className="bg-yellow-50 p-6 rounded-2xl border border-yellow-200">
                        <h3 className="text-xl font-bold text-yellow-700 mb-2">Wait 6 Months</h3>
                        <div className="text-3xl font-bold text-secondary mb-2">- ₹3Cr</div>
                        <div className="text-sm text-yellow-700">Lost Profit</div>
                        <div className="mt-4 text-xs text-yellow-600">Market share drops to 15%. CAC doubles.</div>
                    </div>

                    <div className="bg-red-50 p-6 rounded-2xl border border-red-200">
                        <h3 className="text-xl font-bold text-red-700 mb-2">Do Nothing</h3>
                        <div className="text-3xl font-bold text-secondary mb-2">Obsolete</div>
                        <div className="text-sm text-red-700">In 3 Years</div>
                        <div className="mt-4 text-xs text-red-600">Traditional walk-in traffic erodes by 30%.</div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
