import React, { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface SectionProps {
    children: ReactNode;
    className?: string;
    id?: string;
    title?: ReactNode;
    subtitle?: ReactNode;
}

export const Section: React.FC<SectionProps> = ({ children, className = '', id, title, subtitle }) => {
    return (
        <section id={id} className={`py-20 px-6 max-w-7xl mx-auto ${className}`}>
            {(title || subtitle) && (
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    {title && (
                        <h2 className="text-3xl md:text-5xl font-bold mb-4 text-text-main">
                            {title}
                        </h2>
                    )}
                    {subtitle && (
                        <p className="text-xl text-text-muted max-w-2xl mx-auto">
                            {subtitle}
                        </p>
                    )}
                </motion.div>
            )}
            {children}
        </section>
    );
};
