import { motion } from 'framer-motion'
import { BookOpen, Quote, Star, User } from 'lucide-react'
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar'
import { Button } from '../ui/button'
import Link from 'next/link'
import { scrollToSection } from '@/utils/scroll-to-section'

export default function TestimonialsSection() {
    return (
        <motion.section
            id="testimonials"
            className="py-20 bg-gradient-to-br from-violet-50/80 to-purple-50/80 dark:from-slate-900 dark:to-slate-800"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <motion.div
                    className="text-center mb-16"
                    initial={{ y: 20, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <span className="inline-block px-4 py-2 bg-violet-100 dark:bg-violet-900/50 text-violet-600 dark:text-violet-300 rounded-full font-medium mb-4">
                        Parent & Student Voices
                    </span>
                    <h2 className="text-4xl font-bold text-violet-900 dark:text-white mb-4">
                        Real Stories of Quranic Growth
                    </h2>
                    <p className="text-xl text-violet-700 dark:text-slate-300 max-w-3xl mx-auto">
                        Discover how our students have transformed their Quran recitation through authentic teaching methods
                    </p>
                </motion.div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            quote: "My daughter went from struggling with basic letters to confidently reciting Surah Al-Fatihah with proper tajweed in just 3 months!",
                            name: "Umm Aisha",
                            role: "Parent of 8-year-old student",
                            rating: 5,
                            program: "Children's Tajweed Program",
                            image: "/images/parent-avatar.jpg"
                        },
                        {
                            quote: "The personalized feedback on my recitation helped me correct mistakes I didn't even know I was making. My confidence has soared!",
                            name: "Abdullah",
                            role: "Adult Learner",
                            rating: 5,
                            program: "Advanced Qira'at Course",
                            image: "/images/student-avatar.jpg"
                        },
                        {
                            quote: "As a revert, I was intimidated by Arabic. The patient, structured approach made learning accessible and enjoyable.",
                            name: "Sarah",
                            role: "New Muslim",
                            rating: 5,
                            program: "New Muslim Foundation",
                            image: "/images/revert-avatar.jpg"
                        }
                    ].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            className="bg-white dark:bg-slate-700/50 rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 border border-violet-100 dark:border-slate-600"
                            initial={{ y: 50, opacity: 0 }}
                            whileInView={{ y: 0, opacity: 1 }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            viewport={{ once: true }}
                        >
                            <div className="flex items-center gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                                ))}
                            </div>

                            <blockquote className="text-lg text-violet-900 dark:text-slate-200 italic mb-6 leading-relaxed">
                                "{testimonial.quote}"
                            </blockquote>

                            <div className="flex items-center gap-4">
                                <Avatar className="h-12 w-12">
                                    <AvatarImage src={testimonial.image} />
                                    <AvatarFallback className="bg-violet-100 dark:bg-violet-900">
                                        <User className="h-5 w-5 text-violet-600 dark:text-violet-400" />
                                    </AvatarFallback>
                                </Avatar>
                                <div>
                                    <h3 className="font-semibold text-violet-900 dark:text-white">{testimonial.name}</h3>
                                    <p className="text-violet-600 dark:text-violet-400 text-sm">{testimonial.role}</p>
                                    <span className="inline-block mt-2 px-3 py-1 bg-violet-100 dark:bg-violet-900/50 text-violet-700 dark:text-violet-300 rounded-full text-xs font-medium">
                                        {testimonial.program}
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="mt-20 text-center bg-white dark:bg-slate-800 rounded-2xl p-12 shadow-lg border border-violet-100 dark:border-slate-700"
                    initial={{ scale: 0.95, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    viewport={{ once: true }}
                >
                    <div className="max-w-2xl mx-auto">
                        <BookOpen className="h-12 w-12 text-violet-600 dark:text-violet-400 mx-auto mb-6" />
                        <h3 className="text-2xl font-bold text-violet-900 dark:text-white mb-4">
                            Ready to Begin Your Quran Journey?
                        </h3>
                        <p className="text-violet-700 dark:text-slate-300 mb-8">
                            Join hundreds of satisfied students who've transformed their recitation through our authentic teaching methods
                        </p>

                        <Button
                            onClick={() => scrollToSection('pricing')}
                            className="cursor-pointer bg-gradient-to-r from-violet-600 to-purple-600 hover:from-violet-700 hover:to-purple-700 text-white px-8 py-6 text-lg">
                            Enroll Now
                        </Button>
                    </div>
                </motion.div>
            </div>
        </motion.section>
    )
}