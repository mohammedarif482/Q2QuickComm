import React, { useState } from 'react';
import { Slider, InputNumber } from 'antd';
import { motion } from 'framer-motion';

export const EconomicsCalculator: React.FC = () => {
    const [aov, setAov] = useState(400);
    const [ordersPerDay, setOrdersPerDay] = useState(100);

    const marginPercent = 0.25; // 25% margin
    const deliveryCostPerOrder = 45;
    const fixedCostMonthly = 150000; // Rent, Staff, Tech

    // Monthly Calcs
    const monthlyOrders = ordersPerDay * 30;
    const monthlyRevenue = monthlyOrders * aov;
    const monthlyGrossMargin = monthlyRevenue * marginPercent;
    const monthlyDeliveryCost = monthlyOrders * deliveryCostPerOrder;
    const monthlyProfit = monthlyGrossMargin - monthlyDeliveryCost - fixedCostMonthly;

    const annualProfit = monthlyProfit * 12;

    return (
        <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-xl backdrop-blur-md">
            <h3 className="text-2xl font-bold mb-6 text-secondary text-center">Live Profit Calculator</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div className="space-y-8">
                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-slate-600 font-medium">Average Order Value (₹)</label>
                            <InputNumber value={aov} onChange={(v) => setAov(v || 0)} className="w-24 border-slate-300" />
                        </div>
                        <Slider
                            min={200}
                            max={1000}
                            value={aov}
                            onChange={setAov}
                            trackStyle={{ backgroundColor: '#FF0000' }}
                            handleStyle={{ borderColor: '#FF0000', backgroundColor: '#fff', boxShadow: '0 0 0 2px rgba(255,0,0,0.2)' }}
                        />
                    </div>

                    <div>
                        <div className="flex justify-between mb-2">
                            <label className="text-slate-600 font-medium">Orders Per Day</label>
                            <InputNumber value={ordersPerDay} onChange={(v) => setOrdersPerDay(v || 0)} className="w-24 border-slate-300" />
                        </div>
                        <Slider
                            min={10}
                            max={500}
                            value={ordersPerDay}
                            onChange={setOrdersPerDay}
                            trackStyle={{ backgroundColor: '#282828' }}
                            handleStyle={{ borderColor: '#282828', backgroundColor: '#fff', boxShadow: '0 0 0 2px rgba(40,40,40,0.2)' }}
                        />
                    </div>
                </div>

                <div className="space-y-6">
                    <motion.div
                        layout
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center"
                    >
                        <span className="text-slate-600">Monthly Revenue</span>
                        <span className="text-xl font-bold text-secondary">₹{(monthlyRevenue / 100000).toFixed(2)} Lakh</span>
                    </motion.div>

                    <motion.div
                        layout
                        className="p-4 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center"
                    >
                        <span className="text-slate-600">Monthly Costs (Ops + Fixed)</span>
                        <span className="text-xl font-bold text-secondary">₹{((monthlyDeliveryCost + fixedCostMonthly) / 100000).toFixed(2)} Lakh</span>
                    </motion.div>

                    <motion.div
                        layout
                        className={`p-6 rounded-xl border flex flex-col items-center justify-center ${monthlyProfit > 0 ? 'bg-green-50 border-green-200' : 'bg-red-50 border-red-200'}`}
                    >
                        <span className={`text-sm font-bold uppercase tracking-widest mb-1 ${monthlyProfit > 0 ? 'text-green-700' : 'text-red-700'}`}>
                            Monthly Net Profit
                        </span>
                        <span className={`text-3xl md:text-4xl font-black ${monthlyProfit > 0 ? 'text-secondary' : 'text-red-600'}`}>
                            ₹{monthlyProfit.toLocaleString('en-IN')}
                        </span>
                        <span className="text-xs text-slate-500 mt-2">Annual: ₹{annualProfit.toLocaleString('en-IN')}</span>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}

