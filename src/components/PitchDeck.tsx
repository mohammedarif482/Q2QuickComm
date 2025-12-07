import React, { useState } from 'react';
import { ConfigProvider, Layout, Tabs, Typography, theme } from 'antd';
import { Rocket, Target, Zap, BarChart, Users, Mail } from 'lucide-react';

const { Header, Content, Footer } = Layout;
const { Title, Paragraph } = Typography;

// Placeholder components for sections
const HeroSection = () => (
    <div className="flex flex-col items-center justify-center min-h-[60vh] text-center space-y-8 animate-fadeIn">
        <div className="bg-blue-100 p-4 rounded-full mb-4">
            <Rocket className="w-12 h-12 text-blue-600" />
        </div>
        <Title level={1} className="!mb-0 text-5xl font-extrabold text-slate-900 tracking-tight">
            Hyper Market Quick Commerce
        </Title>
        <Paragraph className="text-xl text-slate-600 max-w-2xl px-4">
            Revolutionizing B2B supply chains with lightning-fast delivery and AI-driven logistics.
            Building the future of commerce, today.
        </Paragraph>
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-all shadow-lg hover:shadow-blue-500/30">
            Request Demo
        </button>
    </div>
);

const SectionContainer = ({ title, icon: Icon, children }: { title: string, icon: any, children: React.ReactNode }) => (
    <div className="max-w-4xl mx-auto py-12 px-4 animate-slideUp">
        <div className="flex items-center gap-3 mb-8 border-b border-slate-200 pb-4">
            <Icon className="w-8 h-8 text-blue-600" />
            <Title level={2} className="!mb-0 text-3xl text-slate-800">
                {title}
            </Title>
        </div>
        <div className="prose prose-lg text-slate-600">
            {children}
        </div>
    </div>
);

const ProblemSection = () => (
    <SectionContainer title="The Problem" icon={Target}>
        <Paragraph>
            Traditional B2B supply chains are fragmented, slow, and opaque. Retailers face frequent stockouts,
            unpredictable delivery times, and complex ordering processes involving multiple vendors.
        </Paragraph>
        <div className="grid md:grid-cols-3 gap-6 mt-8">
            {['Inefficient Logistics', 'Poor Inventory Visibility', 'High Operational Costs'].map((item) => (
                <div key={item} className="p-6 bg-white rounded-xl shadow-sm border border-slate-100">
                    <div className="h-2 w-12 bg-red-400 rounded-full mb-4"></div>
                    <h3 className="font-semibold text-lg text-slate-800">{item}</h3>
                </div>
            ))}
        </div>
    </SectionContainer>
);

const SolutionSection = () => (
    <SectionContainer title="Our Solution" icon={Zap}>
        <Paragraph>
            Hyper Market provides a unified Quick Commerce platform connecting manufacturers directly to retailers.
            Our tech-first approach ensures 24-hour delivery, real-time tracking, and automated inventory management.
        </Paragraph>
        <div className="grid md:grid-cols-2 gap-6 mt-8">
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-blue-800 text-lg mb-2">Smart Warehousing</h3>
                <p className="text-blue-600/80">AI-optimized storage nodes closer to demand centers.</p>
            </div>
            <div className="p-6 bg-blue-50 rounded-xl border border-blue-100">
                <h3 className="font-semibold text-blue-800 text-lg mb-2">Predictive Analytics</h3>
                <p className="text-blue-600/80">Demand forecasting to prevent stockouts and reduce waste.</p>
            </div>
        </div>
    </SectionContainer>
);

const MarketSection = () => (
    <SectionContainer title="Market Opportunity" icon={BarChart}>
        <Paragraph>
            The B2B e-commerce market is rapidly evolving. With a TAM of $500B+ in our target region,
            the shift towards digital procurement is undeniable.
        </Paragraph>
        <div className="mt-8 p-6 bg-gradient-to-r from-slate-900 to-slate-800 rounded-2xl text-white text-center">
            <div className="text-4xl font-bold text-blue-400 mb-2">$1.2 Trillion</div>
            <div className="opacity-80">Global Q-Commerce B2B Potential by 2030</div>
        </div>
    </SectionContainer>
);

const TeamSection = () => (
    <SectionContainer title="The Team" icon={Users}>
        <Paragraph>
            Led by industry veterans from top logistics and tech companies. We are a team of builders,
            data scientists, and operations experts committed to redefining commerce.
        </Paragraph>
        <div className="flex gap-4 mt-6 overflow-x-auto pb-4">
            {[1, 2, 3].map((i) => (
                <div key={i} className="min-w-[200px] flex-1 bg-white p-4 rounded-xl border border-slate-100 text-center">
                    <div className="w-20 h-20 bg-slate-200 rounded-full mx-auto mb-3"></div>
                    <div className="font-bold text-slate-800">Founder Name</div>
                    <div className="text-sm text-slate-500">CEO & Ex-Logistics</div>
                </div>
            ))}
        </div>
    </SectionContainer>
);

const ContactSection = () => (
    <SectionContainer title="Get in Touch" icon={Mail}>
        <div className="flex flex-col items-center justify-center p-8 bg-white rounded-2xl shadow-sm border border-slate-100">
            <Title level={3}>Ready to Partner?</Title>
            <Paragraph className="text-center max-w-md mb-6">
                Join the revolution. Whether you are a supplier or a retailer, we have a solution for you.
            </Paragraph>
            <button className="bg-slate-900 text-white px-8 py-3 rounded-lg font-semibold hover:bg-slate-800 transition-colors">
                Contact Sales
            </button>
        </div>
    </SectionContainer>
);

const PitchDeck = () => {
    const [activeTab, setActiveTab] = useState('1');

    const items = [
        {
            key: '1',
            label: 'Vision',
            children: <HeroSection />,
            icon: <Rocket className="w-4 h-4" />,
        },
        {
            key: '2',
            label: 'Problem',
            children: <ProblemSection />,
            icon: <Target className="w-4 h-4" />,
        },
        {
            key: '3',
            label: 'Solution',
            children: <SolutionSection />,
            icon: <Zap className="w-4 h-4" />,
        },
        {
            key: '4',
            label: 'Market',
            children: <MarketSection />,
            icon: <BarChart className="w-4 h-4" />,
        },
        {
            key: '5',
            label: 'Team',
            children: <TeamSection />,
            icon: <Users className="w-4 h-4" />,
        },
        {
            key: '6',
            label: 'Contact',
            children: <ContactSection />,
            icon: <Mail className="w-4 h-4" />,
        },
    ];

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#2563eb', // Blue 600
                    fontFamily: 'Inter, sans-serif',
                    borderRadius: 8,
                },
                components: {
                    Tabs: {
                        itemSelectedColor: '#2563eb',
                        inkBarColor: '#2563eb',
                        titleFontSize: 16,
                    }
                }
            }}
        >
            <Layout className="min-h-screen bg-slate-50">
                <Header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 border-b border-slate-200 px-4 md:px-8 flex items-center justify-between h-16">
                    <div className="text-xl font-bold bg-gradient-to-r from-blue-700 to-blue-500 bg-clip-text text-transparent flex items-center gap-2">
                        <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">H</div>
                        Hyper Market
                    </div>
                    <div className="hidden md:block">
                        {/* Can add extra header content here */}
                        <span className="text-sm text-slate-500 font-medium">B2B Pitch Deck 2025</span>
                    </div>
                </Header>

                <Content className="pt-6 pb-12 px-4 md:px-8 max-w-7xl mx-auto w-full">
                    <div className="bg-white rounded-2xl shadow-sm border border-slate-100 min-h-[80vh] overflow-hidden">
                        <Tabs
                            activeKey={activeTab}
                            onChange={setActiveTab}
                            items={items.map(item => ({ ...item, label: <span className="flex items-center gap-2">{item.icon}{item.label}</span> }))}
                            centered
                            size="large"
                            tabBarStyle={{ marginBottom: 0, padding: '0 16px', borderBottom: '1px solid #f1f5f9' }}
                            className="h-full flex flex-col"
                        />
                    </div>
                </Content>

                <Footer className="text-center text-slate-400 text-sm bg-transparent">
                    © {new Date().getFullYear()} Hyper Market Quick Commerce. Confidential.
                </Footer>
            </Layout>
        </ConfigProvider>
    );
};

export default PitchDeck;
