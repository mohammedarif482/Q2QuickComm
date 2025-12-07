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
            className="glass-card p-6 hover:shadow-soft hover:shadow-primary/10 transition-all duration-300 group"
        >
            <div className="bg-primarySoft p-3 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                <Icon className="w-8 h-8 text-primary group-hover:scale-110 transition-transform" />
            </div>
            <h3 className="text-xl font-bold mb-2 text-text-main">{title}</h3>
            <p className="text-text-muted leading-relaxed">{description}</p>
        </motion.div>
    );
};
