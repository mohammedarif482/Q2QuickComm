import React, { useState, useEffect } from 'react';
import { Button, Drawer } from 'antd';
import { Rocket, Menu, X } from 'lucide-react';

interface NavbarProps {
    activeTab: string;
    onTabChange: (key: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeTab, onTabChange }) => {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { key: '1', label: 'Product' },
        { key: '2', label: 'Business Integration' },
        { key: '3', label: 'Impact & Outcomes' },
        { key: '4', label: 'Forward' },
    ];

    const handleNavClick = (key: string) => {
        onTabChange(key);
        setMobileMenuOpen(false);
        const tabsElement = document.getElementById('main-tabs');
        if (tabsElement) {
            tabsElement.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md border-b border-slate-200 py-3 shadow-soft' : 'bg-transparent py-5'
            }`}>
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <img src="/qcommdark.png" alt="QComm" className="h-12 w-auto" />
                    <span className="text-xl font-bold text-text-main">
                        Q<span className="text-primary">Comm</span>
                    </span>
                </div>



                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6 bg-primarySoft/50 px-6 py-2 rounded-full border border-primary/20 backdrop-blur-md">
                    {navItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => handleNavClick(item.key)}
                            className={`text-sm font-medium transition-colors ${activeTab === item.key ? 'text-primary' : 'text-text-muted hover:text-primary'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                </div>

                <div className="flex items-center gap-4">
                    <img src="/MOCbgless.png" alt="MOC" className="hidden sm:flex h-9 w-auto" />

                    {/* Mobile Menu Toggle */}
                    <button
                        className="lg:hidden text-text-main p-2"
                        onClick={() => setMobileMenuOpen(true)}
                    >
                        <Menu className="w-6 h-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Drawer */}
            <Drawer
                title={
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 bg-gradient-cta rounded-lg flex items-center justify-center">
                            <Rocket className="text-white w-5 h-5" />
                        </div>
                        <span className="text-lg font-bold text-text-main">Menu</span>
                    </div>
                }
                placement="right"
                onClose={() => setMobileMenuOpen(false)}
                open={mobileMenuOpen}
                styles={{
                    body: { backgroundColor: '#F9FAFB', color: '#111827' },
                    header: { backgroundColor: '#FFFFFF', borderBottom: '1px solid #e5e7eb', color: '#111827' }
                }}
                closeIcon={<X className="text-text-main" />}
            >
                <div className="flex flex-col gap-4">
                    {navItems.map((item) => (
                        <button
                            key={item.key}
                            onClick={() => handleNavClick(item.key)}
                            className={`text-left text-lg font-medium py-3 border-b border-slate-100 transition-colors ${activeTab === item.key ? 'text-primary' : 'text-text-muted'
                                }`}
                        >
                            {item.label}
                        </button>
                    ))}
                    <div className="mt-8">
                        <img src="/MOCbgless.png" alt="MOC" className="h-12 w-auto mx-auto" />
                    </div>
                </div>
            </Drawer>
        </nav>
    );
};
