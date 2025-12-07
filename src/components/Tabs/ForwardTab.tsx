import React from 'react';
import { Section } from '../UI/Section';
import { Card } from 'antd';
import { CheckCircleOutlined, RocketOutlined, BuildOutlined, BarChartOutlined, CustomerServiceOutlined } from '@ant-design/icons';

export const ForwardTab: React.FC = () => {
    return (
        <div className="space-y-4">
            {/* Section 1 - Hero: what “Forward” means */}
            <Section
                title="A pilot product today. A long‑term growth partner tomorrow."
                subtitle=""
                className="pb-0"
            >
                <div className="max-w-4xl mx-auto text-center">
                    <p className="text-xl text-slate-600 leading-relaxed mb-8">
                        JamJoom Quick is not a one‑off app build. It is a white‑label product that keeps evolving with your customers, your stores and the wider quick‑commerce market.
                    </p>
                    <p className="text-lg text-slate-700 font-semibold bg-emerald-50 inline-block px-6 py-2 rounded-full border border-emerald-100">
                        The roadmap, feature drops and support model are designed so JamJoom can keep compounding value without rebuilding technology every 2–3 years.
                    </p>
                </div>
            </Section>

            {/* Section 2 – Feature drops */}
            <Section
                title="Planned feature drops"
                subtitle="Driven by market and product research."
                className="bg-slate-50 rounded-3xl my-8 py-16"
            >
                <p className="text-center text-slate-600 max-w-3xl mx-auto mb-12 text-lg">
                    We maintain a living roadmap based on what is working for leading quick‑commerce players, what customers in Kerala are asking for, and what JamJoom’s stores need operationally.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <Card bordered={false} className="shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-t-emerald-500">
                        <div className="mb-4 text-emerald-600 text-sm font-bold uppercase tracking-wider">Phase 1</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Launch essentials</h3>
                        <p className="text-slate-600 leading-relaxed">
                            High‑performance app, POS integration, catalog with images, picker/packer workflows, rider app and basic analytics.
                        </p>
                    </Card>

                    <Card bordered={false} className="shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-t-blue-500">
                        <div className="mb-4 text-blue-600 text-sm font-bold uppercase tracking-wider">Phase 2</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Growth & engagement</h3>
                        <p className="text-slate-600 leading-relaxed">
                            Smart re‑orders, saved baskets, store‑specific promotions, membership/loyalty hooks and richer brand promotion formats as volumes grow.
                        </p>
                    </Card>

                    <Card bordered={false} className="shadow-lg hover:shadow-xl transition-all duration-300 h-full border-t-4 border-t-purple-500">
                        <div className="mb-4 text-purple-600 text-sm font-bold uppercase tracking-wider">Phase 3</div>
                        <h3 className="text-xl font-bold text-slate-800 mb-3">Intelligence & automation</h3>
                        <p className="text-slate-600 leading-relaxed">
                            AI grocery planner, food‑to‑ingredients assistant, demand and staffing forecasts, and deeper assortment/price optimisation for each catchment.
                        </p>
                    </Card>
                </div>

                <div className="text-center mt-12 bg-white inline-block px-8 py-4 rounded-full shadow-sm border border-slate-200 mx-auto w-fit max-w-2xl">
                    <span className="text-slate-700 font-medium">✨ Every quarter, JamJoom sees a clear “feature drop” pack with what is shipping, the value it unlocks and how to roll it out to stores.</span>
                </div>
            </Section>

            {/* Section 3 – On‑demand features */}
            <Section
                title="Your needs go to the top of the backlog."
                subtitle="Because the product is white‑labelled, JamJoom gets a priority lane for customisation requests that make sense for your network."
            >
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                    <div className="flex flex-col gap-4 p-8 bg-white border border-slate-200 rounded-3xl hover:border-emerald-300 transition-colors group">
                        <div className="bg-emerald-50 w-14 h-14 rounded-2xl flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                            <BuildOutlined className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Store‑specific requests</h3>
                            <p className="text-slate-600">Examples: a special workflow for your bakery, local festival bundles, or support for new departments like electronics or fashion.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 p-8 bg-white border border-slate-200 rounded-3xl hover:border-blue-300 transition-colors group">
                        <div className="bg-blue-50 w-14 h-14 rounded-2xl flex items-center justify-center text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                            <CheckCircleOutlined className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Region‑specific behaviour</h3>
                            <p className="text-slate-600">Support for Malayalam content, local payment preferences or regulatory requirements in Kerala tier‑3 markets.</p>
                        </div>
                    </div>

                    <div className="flex flex-col gap-4 p-8 bg-white border border-slate-200 rounded-3xl hover:border-purple-300 transition-colors group">
                        <div className="bg-purple-50 w-14 h-14 rounded-2xl flex items-center justify-center text-purple-600 group-hover:bg-purple-600 group-hover:text-white transition-colors">
                            <RocketOutlined className="text-2xl" />
                        </div>
                        <div>
                            <h3 className="text-xl font-bold text-slate-900 mb-2">Enterprise integrations</h3>
                            <p className="text-slate-600">Connecting with your existing loyalty/CRM tools or accounting systems when you are ready for deeper automation.</p>
                        </div>
                    </div>
                </div>

                <p className="text-center mt-12 text-slate-500 italic max-w-2xl mx-auto bg-slate-50 py-3 px-6 rounded-full">
                    Note: We’ll maintain a joint wishlist with JamJoom leadership, rank items by impact vs effort, and slot agreed items into upcoming sprints.
                </p>
            </Section>

            {/* Section 4 – Strategic expansion & gap‑finding */}
            <Section className="bg-slate-900 text-white rounded-3xl py-20 relative overflow-hidden">
                {/* Decorative background elements */}
                <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>

                <div className="relative z-10 text-center mb-16 px-4">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white leading-tight">
                        We don’t just ship features. <br />
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-green-300">
                            We help you spot the next growth pockets.
                        </span>
                    </h2>
                    <p className="text-xl text-slate-300 max-w-3xl mx-auto">
                        Our team continually analyses data from JamJoom Quick—orders, locations, customer cohorts and product performance—to recommend where and how to expand.
                    </p>
                </div>

                <div className="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
                    <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-emerald-500/20 flex items-center justify-center mb-6">
                            <BarChartOutlined className="text-2xl text-emerald-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-white">New catchments & stores</h4>
                        <p className="text-slate-300 text-lg leading-relaxed">Identify high‑potential pin codes where quick‑commerce demand is strong and JamJoom stores or dark‑store‑style extensions could work best.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-blue-500/20 flex items-center justify-center mb-6">
                            <BarChartOutlined className="text-2xl text-blue-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-white">Category depth & cross‑sell</h4>
                        <p className="text-slate-300 text-lg leading-relaxed">Show which categories (e.g., fresh, ready‑to‑eat, pharmacy) are under‑represented online compared to offline sales, and what to surface more prominently.</p>
                    </div>

                    <div className="bg-white/5 backdrop-blur-lg p-8 rounded-3xl border border-white/10 hover:bg-white/10 transition-colors">
                        <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mb-6">
                            <BarChartOutlined className="text-2xl text-purple-400" />
                        </div>
                        <h4 className="text-xl font-bold mb-3 text-white">Operational improvements</h4>
                        <p className="text-slate-300 text-lg leading-relaxed">Flag stores where fulfilment is slower or cancellations are higher, and suggest staffing, layout or process tweaks to fix them.</p>
                    </div>
                </div>

                <div className="relative z-10 mt-16 text-center px-4">
                    <p className="text-2xl font-bold text-white max-w-4xl mx-auto bg-white/10 py-6 px-8 rounded-2xl backdrop-blur-sm border border-white/20">
                        The goal is simple: keep discovering small, compounding changes that grow JamJoom’s GMV, margins and customer lifetime value year after year.
                    </p>
                </div>
            </Section>

            {/* Section 5 – Adoption of modern and upcoming technologies */}
            <Section
                title="Future‑ready by design"
                subtitle="Built to plug into whatever comes next."
            >
                <p className="text-center text-slate-600 max-w-4xl mx-auto mb-16 text-xl leading-relaxed">
                    JamJoom Quick is architected so new technologies can be layered in without rewiring the whole system. As customer expectations and tools evolve—whether that is AI, ONDC‑style networks, new payment rails or smarter logistics—JamJoom can adopt them early instead of playing catch‑up.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
                    {[
                        { title: "AI everywhere, not just in one feature", desc: "From smarter search and recommendations to demand forecasting and staff scheduling, the platform is built to let new AI models slot into individual services as they mature—without breaking store operations." },
                        { title: "Open, API‑first integrations", desc: "Using an API‑centric approach makes it easier to connect to future services such as new payment options, national commerce networks, marketing tools or third‑party logistics providers as they become relevant for Kerala tier‑3 markets." },
                        { title: "Experimentation without risk", desc: "New technologies can be trialled in one or two JamJoom stores or customer segments first, measured for real business impact, and only then scaled chain‑wide—so experimentation doesn’t jeopardise day‑to‑day business." },
                        { title: "Continuous learning loop", desc: "As quick commerce and digital grocery models keep evolving in India, the product roadmap stays informed by what is working in other markets, but always adapted to JamJoom’s own data, customers and store formats." },
                    ].map((item, i) => (
                        <div key={i} className="flex gap-6">
                            <div className="w-4 h-4 rounded-full bg-emerald-500 mt-2 shadow-[0_0_0_4px_rgba(16,185,129,0.2)] shrink-0" />
                            <div>
                                <h4 className="font-bold text-slate-900 text-xl mb-2">{item.title}</h4>
                                <p className="text-slate-600 leading-relaxed">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 bg-emerald-50 p-8 rounded-2xl text-center border border-emerald-100 max-w-4xl mx-auto">
                    <p className="text-emerald-800 font-bold text-xl">
                        The commitment is simple: JamJoom should not have to think about “which new tech to chase next”. The platform will keep absorbing what is proven, useful and profitable—so JamJoom stays modern by default, not by exception.
                    </p>
                </div>
            </Section>

            {/* Section 6 – AMC & ongoing support */}
            <Section
                title="Annual Maintenance & Care"
                subtitle="Predictable support, zero surprises."
                className="bg-slate-50 rounded-t-3xl border-t border-slate-200"
            >
                <div className="flex flex-col xl:flex-row gap-16 items-center">
                    <div className="flex-1 w-full">
                        <p className="text-xl text-slate-700 mb-10 leading-relaxed font-medium">
                            To keep JamJoom Quick stable and evolving, we operate on a clear Annual Maintenance Contract (AMC). This covers day‑to‑day reliability as well as planned evolution.
                        </p>

                        <div className="space-y-6">
                            {[
                                { label: "Uptime & reliability", text: "Monitoring, bug fixes, security patches and performance tuning so the app, rider tools and dashboards remain fast and dependable." },
                                { label: "Compatibility updates", text: "Keeping up with Android/iOS changes, browser updates and third‑party service changes (payments, maps, messaging)." },
                                { label: "Quarterly roadmap reviews", text: "A structured check‑in every quarter to review metrics, prioritise upcoming feature drops and adjust the plan to JamJoom’s business goals." },
                                { label: "Support channels", text: "Named contacts, SLAs for issue response, and a clear escalation path for anything that could affect operations." },
                            ].map((item, i) => (
                                <div key={i} className="flex items-start gap-5 p-6 bg-white rounded-2xl shadow-sm border border-slate-200 hover:shadow-md transition-shadow">
                                    <CustomerServiceOutlined className="text-3xl text-emerald-600 mt-1" />
                                    <div>
                                        <h4 className="font-bold text-slate-900 text-lg mb-1">{item.label}</h4>
                                        <p className="text-slate-600">{item.text}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="bg-gradient-to-br from-emerald-600 to-green-500 rounded-3xl p-12 text-white shadow-2xl relative overflow-hidden">
                            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                            <h3 className="text-3xl font-bold mb-6 relative z-10">Our Promise</h3>
                            <p className="text-xl opacity-90 leading-relaxed relative z-10">
                                With JamJoom Quick as a white‑label platform plus a clear AMC and roadmap, JamJoom gets the benefits of a dedicated in‑house product team—without carrying the full tech and research load itself.
                            </p>
                        </div>
                    </div>
                </div>
            </Section>
        </div>
    );
};
