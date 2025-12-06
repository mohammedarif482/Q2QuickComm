import React from 'react';
import { Section } from '../UI/Section';

export const ForwardTab: React.FC = () => {
    return (
        <div className="space-y-12">
            <Section title="The Way Forward" subtitle="Our strategic roadmap for growth and expansion.">
                <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
                    <p className="text-lg text-slate-700 leading-relaxed mb-6">
                        We are poised to revolutionize the quick commerce landscape by leveraging our unique strengths.
                        Our focus is on sustainable growth, operational excellence, and delivering unmatched value to our customers.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-secondary mb-3">Phase 1: Consolidation</h3>
                            <p className="text-slate-600">Optimizing existing store network for quick commerce operations.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-secondary mb-3">Phase 2: Expansion</h3>
                            <p className="text-slate-600">Launching new dark stores in high-demand zones.</p>
                        </div>
                        <div className="p-6 bg-slate-50 rounded-2xl border border-slate-100">
                            <h3 className="text-xl font-bold text-secondary mb-3">Phase 3: Dominance</h3>
                            <p className="text-slate-600"> achieving market leadership through technology and service.</p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
