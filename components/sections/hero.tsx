import { motion } from 'framer-motion'
import Link from 'next/link';
import { Button } from '../ui/button';
import { ArrowRight, CheckCircle, BookOpen, Users, Star, Moon, BookText, University } from 'lucide-react';

export default function HeroSection() {
    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-gradient-to-br from-blue-50 via-purple-50 to-amber-50 dark:from-indigo-900 dark:via-purple-900/30 dark:to-amber-900/10"
        >
            {/* Animated decorative shapes */}
            <motion.div
                className="absolute top-20 left-10 w-16 h-16 rounded-full bg-amber-300/30 blur-xl"
                animate={{ y: [0, 15, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-1/3 right-20 w-24 h-24 bg-blue-400/20 rounded-lg rotate-45"
                animate={{ y: [0, -20, 0], rotate: [45, 60, 45] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-20 left-1/4 w-20 h-20 bg-purple-400/20 rounded-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute top-40 right-1/4 w-12 h-12 bg-green-400/20 triangle"
                animate={{ y: [0, 25, 0] }}
                transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            />
            <motion.div
                className="absolute bottom-32 right-32 w-28 h-28 bg-pink-400/20 rounded-full blur-lg"
                animate={{ scale: [1, 1.3, 1] }}
                transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
            />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
                    <div className="lg:w-1/2">
                        <motion.div
                            initial={{ y: -20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="mb-8"
                        >
                            <span className="inline-block px-4 py-2 rounded-full bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-300 font-medium">
                                Fun Quran Learning for Kids
                            </span>
                        </motion.div>

                        <h1 className="text-5xl sm:text-6xl font-bold text-slate-900 dark:text-white mb-6 leading-tight">
                            <span className="relative inline-block">
                                <span className="relative z-10">Joyful Quran</span>
                                <motion.span
                                    className="absolute -bottom-2 left-0 w-full h-4 bg-amber-300/50 dark:bg-amber-400/30 z-0"
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    transition={{ delay: 0.4, duration: 0.8 }}
                                />
                            </span>
                            <br />
                            <span className="bg-gradient-to-r from-blue-500 via-purple-500 to-amber-500 bg-clip-text text-transparent">
                                Adventures for Kids!
                            </span>
                        </h1>

                        <motion.p
                            className="text-xl text-slate-700 dark:text-slate-300 mb-8 max-w-lg"
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            transition={{ delay: 0.3 }}
                        >
                            Engaging, interactive lessons that make Quran learning exciting and memorable for children of all ages.
                        </motion.p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-12">
                            <Link
                                href='#program'
                                onClick={(e) => {
                                    e.preventDefault();
                                    const target = document.querySelector('#program');
                                    if (target) {
                                        target.scrollIntoView({ behavior: 'smooth' });
                                    }
                                }}>
                                <Button
                                    className="h-14 text-lg relative overflow-hidden group px-8 transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl cursor-pointer"
                                    style={{
                                        background: 'linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%)',
                                    }}
                                >
                                    <div className="absolute inset-0 overflow-hidden">
                                        <div
                                            className="absolute -inset-[10rem] animate-shine opacity-0 group-hover:opacity-30 transition-opacity duration-300"
                                            style={{
                                                background: 'linear-gradient(90deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.3) 50%, rgba(255,255,255,0) 100%)'
                                            }}
                                        />
                                    </div>
                                    <motion.span
                                        className="flex items-center font-bold tracking-wide text-white"
                                        initial={{ letterSpacing: '0.025em' }}
                                        whileHover={{ letterSpacing: '0.05em' }}
                                    >
                                        How we can help your child باذن الله
                                        <motion.span
                                            className="ml-3"
                                            initial={{ x: 0 }}
                                            whileHover={{ x: 5 }}
                                        >
                                            <ArrowRight className="h-5 w-5" />
                                        </motion.span>
                                    </motion.span>
                                </Button>
                            </Link>
                        </div>

                        <div className="flex flex-wrap gap-6">
                            {[
                                { icon: <BookText className="h-6 w-6 text-blue-600 dark:text-blue-400" />, text: "Interactive Lessons" },
                                { icon: <University className="h-6 w-6 text-purple-600 dark:text-purple-400" />, text: "Masjid Approved" },
                                { icon: <Users className="h-6 w-6 text-amber-600 dark:text-amber-400" />, text: "Certified Teachers" }
                            ].map((item, index) => (
                                <motion.div
                                    key={index}
                                    className="flex items-center gap-2 px-4 py-2 bg-white dark:bg-slate-800 rounded-full shadow-sm"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.5 + index * 0.1 }}
                                >
                                    <span className="p-1.5 rounded-full bg-blue-100 dark:bg-blue-900/50">
                                        {item.icon}
                                    </span>
                                    <span className="text-slate-800 dark:text-slate-200 font-medium">
                                        {item.text}
                                    </span>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="lg:w-1/2 flex justify-center relative">
                        <motion.div
                            className="relative z-20 w-full max-w-md"
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            transition={{ duration: 0.5 }}
                        >
                            <div className="bg-gradient-to-br from-blue-200 to-purple-200 dark:from-blue-800 dark:to-purple-800 rounded-3xl p-8 shadow-2xl border-4 border-white dark:border-slate-700">
                                <div className="flex items-center mb-6">
                                    <div className="bg-blue-500 w-4 h-4 rounded-full mr-2"></div>
                                    <div className="bg-purple-500 w-4 h-4 rounded-full mr-2"></div>
                                    <div className="bg-amber-500 w-4 h-4 rounded-full"></div>
                                </div>

                                <div className="grid grid-cols-3 gap-4 mb-8">
                                    {[...Array(9)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            className="h-16 rounded-lg bg-white/80 dark:bg-slate-700/50 shadow-sm"
                                            animate={{
                                                y: [0, i % 2 === 0 ? -10 : 10, 0],
                                                rotate: [0, i % 3 === 0 ? 5 : -5, 0]
                                            }}
                                            transition={{
                                                duration: 4 + i,
                                                repeat: Infinity,
                                                ease: "easeInOut"
                                            }}
                                        >
                                            <div className="h-full flex items-center justify-center">
                                                <span className="text-2xl">
                                                    {['ب', 'ت', 'ث', 'ا', 'ل', 'ق', 'ر', 'ن', 'م'][i]}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                <div className="flex justify-center">
                                    <motion.div
                                        className="bg-gradient-to-r from-blue-500 to-purple-500 rounded-full p-5 w-28 h-28 flex items-center justify-center shadow-lg"
                                        animate={{
                                            scale: [1, 1.05, 1],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{
                                            duration: 8,
                                            repeat: Infinity,
                                            ease: "easeInOut"
                                        }}
                                    >
                                        <BookOpen className="h-12 w-12 text-white" />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>

                        {/* Floating badges */}
                        <motion.div
                            className="absolute -top-6 -left-6 z-20"
                            initial={{ x: -20, y: -20, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ delay: 0.3, duration: 0.5 }}
                        >
                            <div className="bg-amber-100 dark:bg-amber-900/70 p-4 rounded-2xl shadow-lg border-2 border-amber-200 dark:border-amber-700">
                                <div className="flex items-center">
                                    <Star className="h-6 w-6 text-amber-500" />
                                    <span className="ml-2 font-bold text-amber-800 dark:text-amber-200">5.0 Rating</span>
                                </div>
                            </div>
                        </motion.div>

                        <motion.div
                            className="absolute -bottom-6 -right-6 z-20"
                            initial={{ x: 20, y: 20, opacity: 0 }}
                            animate={{ x: 0, y: 0, opacity: 1 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                        >
                            <div className="bg-blue-100 dark:bg-blue-900/70 p-4 rounded-2xl shadow-lg border-2 border-blue-200 dark:border-blue-700">
                                <div className="flex items-center">
                                    <Users className="h-6 w-6 text-blue-500" />
                                    <span className="ml-2 font-bold text-blue-800 dark:text-blue-200">2,500+ Students</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Decorative elements */}
                        <div className="absolute -top-10 -right-10 w-40 h-40 rounded-full bg-purple-300/30 blur-3xl animate-pulse z-0"></div>
                        <div className="absolute bottom-0 left-0 w-48 h-48 rounded-full bg-amber-200/30 blur-3xl animate-pulse z-0"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .triangle {
                    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
                }
            `}</style>
        </motion.section>
    )
}