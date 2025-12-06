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

const App: React.FC = () => {
    const [activeTab, setActiveTab] = useState('1');

    const items = [
        { key: '1', label: 'Product', children: <ProductTab /> },
        { key: '2', label: 'Business Case', children: <BusinessTab /> },
        { key: '3', label: 'Why Quick2QComm', children: <WhyQuick2QCommTab /> },
        { key: '4', label: 'Competitive Moat', children: <CompetitiveMoatTab /> },
        { key: '5', label: 'Unit Economics', children: <UnitEconomicsTab /> },
        { key: '6', label: 'KPIs & Dashboards', children: <KPIsTab /> },
    ];

    return (
        <ConfigProvider
            theme={{
                token: {
                    colorPrimary: '#E81519',
                    colorBgBase: '#FFFFFF',
                    colorTextBase: '#282828',
                    fontFamily: 'Inter, sans-serif',
                },
                components: {
                    Tabs: {
                        itemColor: '#64748B', // Slate 500
                        itemSelectedColor: '#E81519',
                        itemHoverColor: '#E81519',
                        inkBarColor: '#E81519',
                    },
                    Button: {
                        colorPrimary: '#E81519',
                        colorPrimaryHover: '#B81652', // Gradient End Color
                    }
                }
            }}
        >
            <div className="min-h-screen bg-background text-text-main selection:bg-secondary selection:text-white">
                <Navbar activeTab={activeTab} onTabChange={setActiveTab} />

                <main className="pt-24">
                    <div id="main-tabs" className="bg-surface relative z-20">
                        {items.find(item => item.key === activeTab)?.children}
                    </div>
                </main>

                <Footer />
            </div>
        </ConfigProvider>
    );
}

export default App;
