import React from 'react';
import { Button } from 'antd';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-[#212121] border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/qcommlight.png" alt="QComm" className="h-12 w-auto" />
                            <span className="text-xl font-bold text-white">
                                Q<span className="text-primary">Comm</span>
                            </span>
                        </div>
                        <p className="text-slate-300 text-lg leading-relaxed max-w-md mb-8">
                            Transforming traditional retail into high-speed commerce hubs.
                            The future of grocery retail is here.
                        </p>
                        <div className="flex gap-4">
                            <a href="https://www.linkedin.com/company/made-of-curiosity" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                                LinkedIn
                            </a>
                            <a href="https://www.instagram.com/madeofcuriosity/" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-primary transition-colors">
                                Instagram
                            </a>
                        </div>
                    </div>



                    <div className="flex flex-col items-end justify-end h-full">
                        <img src="/MOC4.png" alt="MOC" className="h-20 w-auto object-contain" />
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-400 text-sm">
                    <div>© 2024 QComm. All rights reserved.</div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
