// components/Navbar.tsx
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import { School, X, Menu, GraduationCap } from 'lucide-react';
import { Button } from "@/components/ui/button";
//import { AuthentificationCheck } from '@/lib/auth-check';
import { useRouter } from 'next/navigation';
import Link from 'next/link';

export default function LandingNavbar() {
    const router = useRouter();
    const [user, setUser] = useState<any>(null);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    //AuthentificationCheck({ setStatus: setUser });

    const navItems = [
        { name: 'What We Offer', href: '#program' },
        { name: 'Testimonials', href: '#testimonials' },
    ];

    return (
        <motion.nav
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="fixed w-full bg-transparent backdrop-blur-lg border-b border-indigo-100 z-50 shadow-sm"
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo Section */}
                    <div className="flex items-center gap-3">
                        <GraduationCap className="h-8 w-8 z-20 text-violet-600" />
                        <span className="text-2xl font-bold bg-gradient-to-br from-indigo-600 to-violet-600 bg-clip-text text-transparent tracking-tight">
                            Hidaya Academy
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center gap-8">
                        {navItems.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className="relative group text-indigo-700 font-medium transition-all"
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector(item.href);
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}
                            >
                                {item.name}
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-500 to-violet-500 transition-all group-hover:w-full"></span>
                            </Link>
                        ))}
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        className="md:hidden p-2 rounded-lg bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMenuOpen && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="md:hidden w-full bg-white border-b shadow-lg"
                >
                    <div className="px-4 pt-2 pb-5 space-y-3">
                        <div className="flex items-center justify-between py-3">
                            <div className="flex items-center gap-3">
                                <School className="h-7 w-7 text-indigo-600" />
                                <span className="text-xl font-bold text-indigo-900">Hidaya Academy</span>
                            </div>
                            <button
                                onClick={() => setIsMenuOpen(false)}
                                className="p-2 rounded-full bg-indigo-50 text-indigo-600 hover:bg-indigo-100"
                            >
                                <X className="h-5 w-5" />
                            </button>
                        </div>

                        <div className="space-y-1">
                            {navItems.map((item) => (
                                <Link
                                    key={item.name}
                                    href={item.href}
                                    className="block px-4 py-3 text-indigo-900 hover:bg-indigo-50 rounded-lg transition-colors"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        setIsMenuOpen(false);
                                        const target = document.querySelector(item.href);
                                        if (target) {
                                            target.scrollIntoView({ behavior: 'smooth' });
                                        }
                                    }}
                                >
                                    {item.name}
                                </Link>
                            ))}
                        </div>
                    </div>
                </motion.div>
            )}
        </motion.nav>
    );
}