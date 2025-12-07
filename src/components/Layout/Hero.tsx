import React from 'react';
import { Button } from 'antd';
import { ArrowRight, Zap, TrendingUp, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

interface HeroProps {
    onCtaClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onCtaClick }) => {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
            {/* Background Elements */}
            <div className="absolute inset-0 bg-gradient-hero">
                <div className="absolute top-0 -left-1/4 w-1/2 h-1/2 bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-0 -right-1/4 w-1/2 h-1/2 bg-accent/5 rounded-full blur-[120px]" />
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="pill-badge mb-8">
                        <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse"></span>
                        <span className="text-sm font-medium">Quick Commerce Revolution</span>
                    </div>

                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 text-text-main">
                        Turn Your Stores Into <br />
                        <span className="text-primary">
                            Quick Commerce Hubs
                        </span>
                    </h1>

                    <p className="text-xl md:text-2xl text-text-muted max-w-3xl mx-auto mb-10 leading-relaxed">
                        Enable <span className="text-primary font-semibold">30-min delivery</span> using your existing infrastructure.
                        Generate <span className="text-text-main font-bold">₹9M profit</span> in Year 1.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                        <button
                            onClick={onCtaClick}
                            className="primary-cta"
                        >
                            See Product <ArrowRight className="w-5 h-5 ml-2" />
                        </button>
                        <Button
                            size="large"
                            className="h-14 px-8 text-lg font-medium bg-white hover:bg-slate-50 border-slate-200 text-text-main flex items-center gap-2 shadow-soft rounded-full"
                        >
                            Calculate ROI
                        </Button>
                    </div>

                    <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        {[
                            { icon: Zap, label: 'Go Live', value: '14 Days' },
                            { icon: Clock, label: 'Delivery Time', value: '30 Mins' },
                            { icon: TrendingUp, label: 'Year 1 ROI', value: '300%' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.8 + (i * 0.1) }}
                                className="glass-card flex flex-col items-center p-6 hover:shadow-soft transition-all duration-300 hover:-translate-y-1"
                            >
                                <stat.icon className="w-8 h-8 text-primary mb-3" />
                                <div className="text-3xl font-bold text-text-main mb-1">{stat.value}</div>
                                <div className="text-sm text-text-muted font-medium uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
