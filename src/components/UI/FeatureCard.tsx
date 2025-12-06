import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
    icon: LucideIcon;
    title: string;
    description: string;
}

export const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
    return (
        <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="bg-white border border-slate-200 rounded-2xl p-6 shadow-sm hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 group"
        >
            <div className="bg-primary/5 p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/10 transition-colors">
                <Icon className="w-8 h-8 text-primary group-hover:text-red-600 transition-colors" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-secondary">{title}</h3>
            <p className="text-slate-600 leading-relaxed">{description}</p>
        </motion.div>
    );
};
