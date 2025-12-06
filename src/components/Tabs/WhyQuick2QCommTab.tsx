import React from 'react';
import { Section } from '../UI/Section';

export const WhyQuick2QCommTab: React.FC = () => {
    return (
        <div className="space-y-12">
            <Section title="Why QComm?" subtitle="Leveraging our unfair advantages.">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
                    {[
                        { title: "Physical Network", desc: "50+ existing stores acting as dark stores." },
                        { title: "Supply Chain", desc: "Established relationships with FMCG giants." },
                        { title: "Brand Trust", desc: "Decades of community trust that new startups can't buy." },
                        { title: "Operational DNA", desc: "Deep expertise in grocery sourcing and cold chain management." }
                    ].map((item, i) => (
                        <div key={i} className="p-8 rounded-full bg-white border border-slate-200 flex flex-col items-center justify-center aspect-square hover:scale-105 transition-transform shadow-sm hover:shadow-md">
                            <h3 className="text-xl font-bold text-secondary mb-4">{item.title}</h3>
                            <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                        </div>
                    ))}
                </div>
            </Section>

            <Section title="Competitive Landscape" className="overflow-x-auto">
                <div className="bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm">
                    <table className="w-full text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50">
                                <th className="p-4 border-b border-slate-200 text-slate-500 font-medium">Feature</th>
                                <th className="p-4 border-b border-slate-200 text-slate-500 font-medium">Zepto/Blinkit</th>
                                <th className="p-4 border-b border-slate-200 text-slate-500 font-medium">BigBasket</th>
                                <th className="p-4 border-b border-primary/20 text-primary bg-primary/5 rounded-t-xl font-bold">QComm</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 text-slate-700">
                            {[
                                { feat: "Delivery Time", comm: "10-20 mins", bb: "2-4 hours", jj: "15-30 mins" },
                                { feat: "Cost/Order", comm: "High (Dark Store)", bb: "Medium", jj: "Low (Existing Store)" },
                                { feat: "SKUs", comm: "3,000", bb: "20,000", jj: "15,000+" },
                                { feat: "Profitability", comm: "Cash Burn", bb: "Low Margin", jj: "High Margin" },
                                { feat: "Customer Trust", comm: "Transactional", bb: "Moderate", jj: "Deep Loyalty" },
                            ].map((row, i) => (
                                <tr key={i} className="hover:bg-slate-50 transition-colors">
                                    <td className="p-4 font-medium text-secondary">{row.feat}</td>
                                    <td className="p-4 text-slate-600">{row.comm}</td>
                                    <td className="p-4 text-slate-600">{row.bb}</td>
                                    <td className="p-4 font-bold text-primary bg-primary/5 border-x border-primary/10">{row.jj}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </Section>
        </div>
    );
};
