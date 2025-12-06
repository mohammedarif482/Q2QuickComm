import React from 'react';
import { Button } from 'antd';
import { Rocket, Mail, Phone, MapPin } from 'lucide-react';

export const Footer: React.FC = () => {
    return (
        <footer className="bg-secondary border-t border-white/10 pt-20 pb-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <img src="/q2qlight.png" alt="Quick2QComm" className="h-12 w-auto" />
                            <span className="text-xl font-bold text-white">
                                Quick2<span className="text-primary">QComm</span>
                            </span>
                        </div>
                        <p className="text-slate-400 text-lg leading-relaxed max-w-md mb-8">
                            Transforming traditional retail into high-speed commerce hubs.
                            The future of grocery retail is here.
                        </p>
                        <div className="flex gap-4">
                            {['Twitter', 'LinkedIn', 'Instagram'].map((social) => (
                                <a key={social} href="#" className="text-slate-500 hover:text-white transition-colors">
                                    {social}
                                </a>
                            ))}
                        </div>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Contact</h4>
                        <div className="space-y-4">
                            <a href="mailto:hello@quick2qcomm.com" className="flex items-center gap-3 text-slate-400 hover:text-white transition-colors">
                                <Mail className="w-5 h-5" />
                                hello@quick2qcomm.com
                            </a>
                            <div className="flex items-center gap-3 text-slate-400">
                                <Phone className="w-5 h-5" />
                                +91 98765 43210
                            </div>
                            <div className="flex items-center gap-3 text-slate-400">
                                <MapPin className="w-5 h-5" />
                                Bengaluru, India
                            </div>
                        </div>
                    </div>

                    <div>
                        <p className="text-slate-400 italic mb-4">From The Infinite Canvas Of</p>
                        <img src="/MOC.png" alt="MOC" className="h-20 w-auto" />
                    </div>
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-slate-500 text-sm">
                    <div>© 2024 Quick2QComm. All rights reserved.</div>
                    <div className="flex gap-8">
                        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
