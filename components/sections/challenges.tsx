import { motion } from 'framer-motion'
import { Frown, UserX, Clock, BookOpen, MapPin, BarChart2, Sparkles, Award, CalendarCheck, Gamepad2, Globe, TrendingUp, Star } from 'lucide-react';

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.2
        }
    }
};

export default function ChallengesSection() {
    return (
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="max-w-6xl mx-auto mt-20 mb-20 px-4 sm:px-6"
        >
            {/* Section Header */}
            <motion.div
                className="text-center mb-16"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 dark:text-white mb-4">
                    The <span className="bg-gradient-to-r from-blue-500 to-emerald-500 bg-clip-text text-transparent">Struggle</span> of Finding
                    <br />Proper Quran Education for Your Child
                </h2>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                    Parents face real challenges when seeking authentic Quran education. Here's how we solve them.
                </p>
            </motion.div>

            {/* Problems & Solutions Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Problems Column */}
                <motion.div
                    className="bg-gradient-to-br from-rose-50 to-amber-50 dark:from-rose-900/20 dark:to-amber-900/10 p-8 rounded-3xl border border-rose-100 dark:border-rose-900/30 shadow-lg"
                    initial={{ x: -50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Frown className="w-8 h-8 text-rose-500 dark:text-rose-400" />
                        <h3 className="text-2xl font-bold text-rose-800 dark:text-rose-300">
                            Common Parent Frustrations
                        </h3>
                    </div>

                    <div className="space-y-5">
                        {[
                            {
                                icon: <UserX className="w-6 h-6 text-rose-500" />,
                                text: "Uncertified teachers with questionable tajweed knowledge"
                            },
                            {
                                icon: <Clock className="w-6 h-6 text-amber-500" />,
                                text: "Inflexible schedules that don't fit school routines"
                            },
                            {
                                icon: <BookOpen className="w-6 h-6 text-rose-500" />,
                                text: "Boring teaching methods that fail to engage children"
                            },
                            {
                                icon: <MapPin className="w-6 h-6 text-amber-500" />,
                                text: "Limited access to qualified instructors locally"
                            },
                            {
                                icon: <BarChart2 className="w-6 h-6 text-rose-500" />,
                                text: "No clear progress tracking or milestones"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4 p-4 bg-white/50 dark:bg-rose-900/20 rounded-xl hover:bg-white/70 dark:hover:bg-rose-900/30 transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                            >
                                <span className="p-2 rounded-lg bg-rose-100 dark:bg-rose-900/40">
                                    {item.icon}
                                </span>
                                <p className="text-lg text-rose-900 dark:text-rose-100">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>

                {/* Solutions Column */}
                <motion.div
                    className="bg-gradient-to-br from-emerald-50 to-blue-50 dark:from-emerald-900/20 dark:to-blue-900/10 p-8 rounded-3xl border border-emerald-100 dark:border-emerald-900/30 shadow-lg"
                    initial={{ x: 50, opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="flex items-center gap-3 mb-6">
                        <Sparkles className="w-8 h-8 text-emerald-500 dark:text-emerald-400" />
                        <h3 className="text-2xl font-bold text-emerald-800 dark:text-emerald-300">
                            Heraa Academy Solutions
                        </h3>
                    </div>

                    <div className="space-y-5">
                        {[
                            {
                                icon: <Award className="w-6 h-6 text-emerald-500" />,
                                text: "Ijazah-certified teachers with verified credentials"
                            },
                            {
                                icon: <CalendarCheck className="w-6 h-6 text-blue-500" />,
                                text: "Flexible scheduling around school and family time"
                            },
                            {
                                icon: <Gamepad2 className="w-6 h-6 text-emerald-500" />,
                                text: "Interactive, child-friendly teaching methods"
                            },
                            {
                                icon: <Globe className="w-6 h-6 text-blue-500" />,
                                text: "Global access to top-tier Quran instructors"
                            },
                            {
                                icon: <TrendingUp className="w-6 h-6 text-emerald-500" />,
                                text: "Transparent progress reports with milestones"
                            }
                        ].map((item, index) => (
                            <motion.div
                                key={index}
                                className="flex items-start gap-4 p-4 bg-white/50 dark:bg-emerald-900/20 rounded-xl hover:bg-white/70 dark:hover:bg-emerald-900/30 transition-all"
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 + 0.3 }}
                            >
                                <span className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-900/40">
                                    {item.icon}
                                </span>
                                <p className="text-lg text-emerald-900 dark:text-emerald-100">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            {/* Guarantee Section */}
            <motion.div
                className="mt-16 text-center"
                initial={{ y: 30, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
            >
                <div className="inline-flex flex-col items-center p-8 bg-gradient-to-br from-blue-50 to-emerald-50 dark:from-blue-900/20 dark:to-emerald-900/20 rounded-3xl max-w-2xl mx-auto border border-blue-200 dark:border-blue-900/30 shadow-lg">
                    <div className="font-arabic text-5xl text-emerald-500 dark:text-emerald-400 mb-4">﷽</div>
                    <p className="text-slate-800 dark:text-slate-200">
                        <span className="block font-bold text-xl mb-2 text-blue-600 dark:text-blue-400">Our Learning Promise</span>
                        <span className="text-lg font-medium text-emerald-600 dark:text-emerald-400">See measurable progress in your child's recitation within 30 days</span>
                        <span className="text-slate-600 dark:text-slate-400 text-md block mt-3">or we'll provide free additional sessions until you do</span>
                    </p>
                    <div className="mt-6 flex items-center justify-center gap-2">
                        <div className="flex items-center">
                            {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-5 w-5 text-amber-400 fill-amber-400" />
                            ))}
                        </div>
                        <span className="text-blue-600 dark:text-blue-400">Trusted by Muslim families worldwide</span>
                    </div>
                </div>
            </motion.div>
        </motion.div>
    )
}