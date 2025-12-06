import React from 'react';
import { Section } from '../UI/Section';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from 'recharts';

export const UnitEconomicsTab: React.FC = () => {
    const breakevenData = [
        { orders: 0, profit400: -8000, profit200: -8000, profit600: -8000 },
        { orders: 20, profit400: -7200, profit200: -7600, profit600: -6800 },
        { orders: 50, profit400: -5000, profit200: -6500, profit600: -3000 },
        { orders: 100, profit400: -1000, profit200: -4000, profit600: 3000 },
        { orders: 150, profit400: 3000, profit200: -1500, profit600: 9000 },
        { orders: 200, profit400: 7000, profit200: 1000, profit600: 15000 },
    ];

    const capexData = [
        { name: 'Traditional', capex: 50, fill: '#ef4444' },
        { name: 'Dark Store', capex: 25, fill: '#f97316' },
        { name: 'QComm', capex: 5, fill: '#10b981' },
    ];

    return (
        <div className="space-y-12">
            <Section title="Unit Economics" subtitle="The math that makes QComm profitable from Day 1.">
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <table className="w-full text-left">
                        <thead className="bg-slate-50 text-slate-500 uppercase text-xs">
                            <tr>
                                <th className="p-4">Line Item</th>
                                <th className="p-4">Value (₹)</th>
                                <th className="p-4">% of AOV</th>
                                <th className="p-4">Notes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700">
                            <tr>
                                <td className="p-4 font-bold text-secondary">Average Order Value (AOV)</td>
                                <td className="p-4 font-bold text-secondary">₹400</td>
                                <td className="p-4">100%</td>
                                <td className="p-4 text-slate-500">Industry Avg</td>
                            </tr>
                            <tr>
                                <td className="p-4 pl-8 text-slate-600">(-) COGS</td>
                                <td className="p-4 text-red-500">₹320</td>
                                <td className="p-4">80%</td>
                                <td className="p-4 text-slate-500">20% Gross Margin</td>
                            </tr>
                            <tr>
                                <td className="p-4 pl-8 text-slate-600">(-) Packaging</td>
                                <td className="p-4 text-red-500">₹5</td>
                                <td className="p-4">1.25%</td>
                                <td className="p-4 text-slate-500">Eco-friendly bags</td>
                            </tr>
                            <tr>
                                <td className="p-4 pl-8 text-slate-600">(-) Last Mile Delivery</td>
                                <td className="p-4 text-red-500">₹30</td>
                                <td className="p-4">7.5%</td>
                                <td className="p-4 text-slate-500" >₹15/order (batched 2)</td>
                            </tr>
                            <tr>
                                <td className="p-4 pl-8 text-slate-600">(-) Payment Gateway</td>
                                <td className="p-4 text-red-500">4</td>
                                <td className="p-4">1%</td>
                                <td className="p-4 text-slate-500">Typical UPI/Card mix</td>
                            </tr>
                            <tr className="bg-green-50 border-t border-green-200">
                                <td className="p-4 font-bold text-green-700">Contribution Margin 1</td>
                                <td className="p-4 font-bold text-green-700">₹41</td>
                                <td className="p-4 font-bold text-green-700">10.2%</td>
                                <td className="p-4 text-green-600">Profit per order before fixed costs</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Section>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto px-6">
                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-center text-secondary">Breakeven Analysis (Profit vs Orders/Day)</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <LineChart data={breakevenData}>
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                                <XAxis dataKey="orders" stroke="#64748B" label={{ value: 'Orders/Day', position: 'insideBottom', offset: -5 }} />
                                <YAxis stroke="#64748B" />
                                <Tooltip contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', color: '#1e293b' }} />
                                <Legend />
                                <Line type="monotone" dataKey="profit400" name="AOV ₹400" stroke="#10B981" strokeWidth={2} />
                                <Line type="monotone" dataKey="profit200" name="AOV ₹200" stroke="#EF4444" strokeWidth={2} />
                                <Line type="monotone" dataKey="profit600" name="AOV ₹600" stroke="#7C3AED" strokeWidth={2} />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                </div>

                <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
                    <h3 className="text-xl font-bold mb-6 text-center text-secondary">Setup CAPEX Comparison (₹ Lakhs)</h3>
                    <div className="h-[300px]">
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart data={capexData} layout="vertical">
                                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" horizontal={false} />
                                <XAxis type="number" stroke="#64748B" />
                                <YAxis dataKey="name" type="category" stroke="#334155" width={100} />
                                <Tooltip cursor={{ fill: 'transparent' }} contentStyle={{ backgroundColor: '#fff', border: '1px solid #e2e8f0', color: '#1e293b' }} />
                                <Bar dataKey="capex" barSize={40} radius={[0, 4, 4, 0]} label={{ position: 'right', fill: '#334155' }} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
};
