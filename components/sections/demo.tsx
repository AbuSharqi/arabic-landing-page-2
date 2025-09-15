/*
 * Demo Section
 *
 * This component introduces the qualified teachers at Hidaya Academy, 
 * showcasing their specializations, experience, and certifications. 
 * It aims to build trust and highlight the expertise behind the educational programs.
 */
import ProfilePicturePlaceholder from "@/lib/profile-picture-placeholder.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, CheckCircle2 } from "lucide-react";
import { Button } from "../ui/button";

export default function DemoSection() {
    return (
        <motion.section
            className="py-20 bg-blue-50 dark:bg-slate-800" // Changed from bg-emerald-50
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <motion.h2
                        className="text-4xl font-bold text-blue-900 dark:text-white mb-4" // Changed from text-emerald-900
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        viewport={{ once: true }}
                    >
                        Meet Our Qualified Teachers
                    </motion.h2>
                    <motion.p
                        className="text-xl text-blue-700 dark:text-slate-300 max-w-2xl mx-auto" // Changed from text-emerald-700
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Our team of male and female instructors are certified with traditional Ijazah and trained in modern teaching methods to make Quran learning engaging and effective.
                    </motion.p>
                </div>

                {/* Teachers Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            name: "Ustadh Muhammad Ali",
                            image: ProfilePicturePlaceholder,
                            specialty: "Quran Memorization",
                            experience: "10 years",
                            certifications: [
                                "Ijazah in Warsh 'an Nafi'",
                                "Certified Hifz Instructor",
                                "Arabic Language Expert",
                            ],
                            quote: "Every student can memorize with the right method and dedication.",
                        },
                        {
                            name: "Ustadh Yusuf Hassan",
                            image: ProfilePicturePlaceholder,
                            specialty: "Fiqh & Islamic Studies",
                            experience: "15 years",
                            certifications: [
                                "Master's in Islamic Jurisprudence",
                                "Ijazah in Sahih al-Bukhari",
                                "Prophetic Seerah Scholar",
                            ],
                            quote: "My goal is to make the beauty of fiqh practical for daily life.",
                        },
                        {
                            name: "Ustadh Omar Farooq",
                            image: ProfilePicturePlaceholder,
                            specialty: "Beginner Quran",
                            experience: "8 years",
                            certifications: [
                                "Ijazah in Qalun 'an Nafi",
                                "Early Childhood Educator",
                                "Interactive Learning Specialist",
                            ],
                            quote: "Building strong foundations for lifelong Quran connection.",
                        },
                    ].map((teacher, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-slate-700 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            {/* Teacher Image */}
                            <div className="relative h-64 w-full">
                                <Image
                                    src={teacher.image}
                                    alt={teacher.name}
                                    className="w-full h-full object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                                    <h3 className="text-2xl font-bold text-white">{teacher.name}</h3>
                                    <p className="text-sky-300">{teacher.specialty}</p> {/* Changed from text-emerald-300 */}
                                </div>
                            </div>

                            {/* Teacher Details */}
                            <div className="p-6">
                                <div className="flex items-center gap-2 mb-4">
                                    <Clock className="w-5 h-5 text-blue-500" /> {/* Changed from text-emerald-500 */}
                                    <span className="text-slate-600 dark:text-slate-300">
                                        {teacher.experience} experience
                                    </span>
                                </div>

                                <h4 className="font-semibold text-lg text-blue-800 dark:text-blue-300 mb-3"> {/* Changed from text-emerald-800/300 */}
                                    Certifications:
                                </h4>
                                <ul className="space-y-3 mb-6">
                                    {teacher.certifications.map((cert, i) => (
                                        <li key={i} className="flex items-start gap-2">
                                            <CheckCircle2 className="w-4 h-4 mt-1 text-blue-500 flex-shrink-0" /> {/* Changed from text-emerald-500 */}
                                            <span className="text-slate-700 dark:text-slate-300">{cert}</span>
                                        </li>
                                    ))}
                                </ul>

                                <div className="p-4 bg-blue-50 dark:bg-slate-600 rounded-lg"> {/* Changed from bg-emerald-50 */}
                                    <p className="text-blue-800 dark:text-blue-200 italic"> {/* Changed from text-emerald-800/200 */}
                                        "{teacher.quote}"
                                    </p>
                                </div>

                                <Button className="w-full mt-6 bg-blue-600 hover:bg-blue-700 text-white"> {/* Changed from bg-emerald-600/700 */}
                                    Learn with {teacher.name.split(" ")[0]}
                                </Button>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* View All Button */}
                <motion.div
                    className="flex justify-center mt-12"
                    initial={{ opacity: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                >
                    <Button variant="outline" className="opacity-25 border-blue-500 text-blue-600"> {/* Changed from border-emerald-500/text-emerald-600 */}
                        View All Instructors
                    </Button>
                </motion.div>
            </div>
        </motion.section>
    );
}