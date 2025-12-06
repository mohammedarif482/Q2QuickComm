import React from 'react';
import { motion } from 'framer-motion';

interface StatCardProps {
    label: string;
    value: string;
    subtext?: string;
    trend?: 'up' | 'down' | 'neutral';
    trendValue?: string;
}

export const StatCard: React.FC<StatCardProps> = ({ label, value, subtext, trend, trendValue }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white border border-slate-200 p-8 rounded-2xl flex flex-col items-center text-center hover:shadow-md transition-all shadow-sm"
        >
            <div className="text-slate-500 font-medium mb-2 uppercase tracking-wide text-sm">{label}</div>
            <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">
                {value}
            </div>
            {subtext && <div className="text-slate-500">{subtext}</div>}
            {trend && trendValue && (
                <div className={`mt-4 text-sm font-medium px-3 py-1 rounded-full ${trend === 'up' ? 'bg-green-100 text-green-700' :
                    trend === 'down' ? 'bg-red-100 text-red-700' : 'bg-slate-100 text-slate-700'
                    }`}>
                    {trend === 'up' ? '↑' : trend === 'down' ? '↓' : '→'} {trendValue}
                </div>
            )}
        </motion.div>
    );
};
