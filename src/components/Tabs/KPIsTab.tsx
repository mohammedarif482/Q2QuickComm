import React from 'react';
import { Section } from '../UI/Section';
import { Timer, ShoppingCart, DollarSign, TrendingUp, AlertCircle, CheckCircle, Package, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const KpiTile = ({ label, value, status, icon: Icon }: any) => (
    <motion.div
        whileHover={{ scale: 1.05 }}
        className="bg-white p-4 rounded-xl border border-slate-200 flex flex-col justify-between h-32 shadow-sm hover:shadow-md transition-shadow"
    >
        <div className="flex justify-between items-start">
            <div className="p-2 rounded-lg bg-slate-100">
                <Icon className="w-5 h-5 text-slate-500" />
            </div>
            <div className={`w-3 h-3 rounded-full ${status === 'good' ? 'bg-green-500' : status === 'warning' ? 'bg-yellow-500' : 'bg-red-500'}`} />
        </div>
        <div>
            <div className="text-2xl font-bold text-secondary">{value}</div>
            <div className="text-xs text-slate-500 uppercase tracking-wide">{label}</div>
        </div>
    </motion.div>
);

export const KPIsTab: React.FC = () => {
    return (
        <div className="space-y-12">
            <Section title="Real-Time Store Dashboard" subtitle="Monitor your Quick Commerce operations live.">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    <KpiTile label="Active Orders" value="24" status="good" icon={ShoppingCart} />
                    <KpiTile label="Avg Prep Time" value="4m 12s" status="good" icon={Timer} />
                    <KpiTile label="Rider SLA" value="98.5%" status="good" icon={CheckCircle} />
                    <KpiTile label="Stockouts" value="3 Items" status="warning" icon={AlertCircle} />
                    <KpiTile label="Day Sales" value="₹42,500" status="good" icon={DollarSign} />
                    <KpiTile label="AOV Today" value="₹415" status="good" icon={TrendingUp} />
                    <KpiTile label="Active Riders" value="8" status="good" icon={Users} />
                    <KpiTile label="Pending Pick" value="2" status="good" icon={Package} />
                </div>
            </Section>

            <Section title="Store Leaderboard" subtitle="Gamified performance tracking across your network.">
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
                            <tr>
                                <th className="p-4">Rank</th>
                                <th className="p-4">Store Name</th>
                                <th className="p-4">Orders</th>
                                <th className="p-4">SLA %</th>
                                <th className="p-4">Rating</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200">
                            {[
                                { name: "Koramangala Hub", orders: 450, sla: "99.2%", rating: 4.9 },
                                { name: "Indiranagar Central", orders: 412, sla: "98.5%", rating: 4.8 },
                                { name: "HSR Layout", orders: 389, sla: "97.8%", rating: 4.7 },
                                { name: "Whitefield Node", orders: 350, sla: "96.5%", rating: 4.6 },
                            ].map((store, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4">
                                        <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${i === 0 ? 'bg-yellow-500 text-black' : i === 1 ? 'bg-slate-300 text-black' : i === 2 ? 'bg-orange-700 text-white' : 'text-slate-500 bg-slate-100'}`}>
                                            {i + 1}
                                        </div>
                                    </td>
                                    <td className="p-4 font-medium text-secondary">{store.name}</td>
                                    <td className="p-4 text-slate-700">{store.orders}</td>
                                    <td className="p-4 text-green-600">{store.sla}</td>
                                    <td className="p-4 flex items-center gap-1 text-yellow-500">
                                        <span>★</span> {store.rating}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>
        </div>
    );
};
