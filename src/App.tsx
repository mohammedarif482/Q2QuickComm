import React, { useState } from 'react';
import { ConfigProvider } from 'antd';
import { Navbar } from './components/Layout/Navbar';
import { Footer } from './components/Layout/Footer';
import { ProductTab } from './components/Tabs/ProductTab';
import { BusinessTab } from './components/Tabs/BusinessTab';
import { WhyQuick2QCommTab } from './components/Tabs/WhyQuick2QCommTab';
import { CompetitiveMoatTab } from './components/Tabs/CompetitiveMoatTab';
import { UnitEconomicsTab } from './components/Tabs/UnitEconomicsTab';
import { KPIsTab } from './components/Tabs/KPIsTab';
import { ForwardTab } from './components/Tabs/ForwardTab';

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState('1');

    const items = [
        { key: '1', label: 'Product', children: <ProductTab onTabChange={setActiveTab} /> },
        { key: '2', label: 'Business Integration', children: <BusinessTab onTabChange={setActiveTab} /> },
        { key: '3', label: 'Impact & Outcomes', children: <WhyQuick2QCommTab /> },
        { key: '4', label: 'Forward', children: <ForwardTab /> },
    ];

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#16A34A', // Main green
                    colorBgBase: '#F9FAFB', // Light grey background
                    colorTextBase: '#111827', // Slate-900 text
                    borderRadius: 16,
                    fontFamily: 'Inter, system-ui, -apple-system, BlinkMacSystemFont, sans-serif',
                },
                components: {
                    Layout: {
                        headerBg: '#064E3B', // Dark green header
                        bodyBg: '#F9FAFB',
                    },
                    Tabs: {
                        itemColor: '#6B7280', // Slate 500
                        itemSelectedColor: '#16A34A',
                        itemHoverColor: '#16A34A',
                        inkBarColor: '#16A34A',
                        horizontalMargin: '0 24px 0 0',
                        horizontalItemPadding: '12px 4px',
                    },
                    Button: {
                        colorPrimary: '#16A34A',
                        colorPrimaryHover: '#15803D',
                        colorPrimaryActive: '#166534',
                        borderRadius: 999,
                        paddingInlineLG: 28,
                        paddingBlockLG: 14,
                        fontSizeLG: 16,
                    },
                    Card: {
                        borderRadiusLG: 20,
                        boxShadow: '0 18px 45px rgba(15, 23, 42, 0.12)',
                        headerBg: '#FFFFFF',
                        colorBorderSecondary: '#E5E7EB',
                    },
                    Statistic: {
                        titleFontSize: 13,
                        contentFontSize: 26,
                    },
                    Tag: {
                        colorPrimary: '#BBF7D0',
                        defaultBg: '#ECFDF3',
                        defaultColor: '#166534',
                        borderRadiusSM: 999,
                    },
                }
            }}
        >
            <div className="min-h-screen bg-gradient-main text-text-main selection:bg-primary selection:text-white">
                <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

                <main className="pt-24">
                    <div id="main-tabs" className="relative z-20">
                        {items.find(item => item.key === activeTab)?.children}
                    </div>
                </main>

                <Footer />
            </div>
        </ConfigProvider>
    );
}

export default App;
