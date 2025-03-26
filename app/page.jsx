'use client';
import Image from 'next/image';
import Button from './components/Button';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Star, Users, Film, Calendar, Award } from 'lucide-react';

export default function Home() {
  return (
    <div className="space-y-16 pb-16">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative w-full max-w-[950px] mx-auto aspect-[950/560] rounded-3xl overflow-hidden"
      >
        <Image
          src={'/cinema.jpg'}
          fill
          className="object-cover rounded-3xl"
          alt="Casting website background"
          priority
        />
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50 p-4 text-center"
        >
          <motion.h1
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-2"
          >
            Your Talent Connection Platform
          </motion.h1>
          
          <motion.p
            initial={{ y: 10, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="text-lg md:text-xl text-white opacity-90 max-w-2xl mx-auto"
          >
            Where casting directors meet exceptional talent - streamline your casting process or launch your acting career
          </motion.p>
          
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            className="absolute bottom-8 left-0 right-0 flex justify-center gap-6 px-8"
          >
            <Link href={'/signin'}>
              <Button text="I'm Hiring Talent" />
            </Link>
            <Link href={'/signin'}>
              <Button text="I Want to Get Hired" />
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { icon: <Users size={36} />, value: "10,000+", label: "Talents" },
            { icon: <Film size={36} />, value: "500+", label: "Casting Calls" },
            { icon: <Calendar size={36} />, value: "200+", label: "Projects Monthly" },
            { icon: <Award size={36} />, value: "90%", label: "Success Rate" },
          ].map((stat, index) => (
            <motion.div
              key={index}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="p-6 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
            >
              <div className="text-blue-400 mb-2 mx-auto w-fit">
                {stat.icon}
              </div>
              <h3 className="text-3xl font-bold text-white">{stat.value}</h3>
              <p className="text-gray-300">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "For Talent",
              steps: [
                "Create your profile with photos & videos",
                "Apply to relevant casting calls",
                "Get booked and build your portfolio"
              ]
            },
            {
              title: "For Casting Directors",
              steps: [
                "Post your casting needs",
                "Review talent applications & reels",
                "Select and contact perfect matches"
              ]
            },
            {
              title: "For Productions",
              steps: [
                "Find vetted talent quickly",
                "Manage auditions & callbacks",
                "Complete contracts & payments"
              ]
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-xl border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-4 text-blue-400">{section.title}</h3>
              <ul className="space-y-3">
                {section.steps.map((step, i) => (
                  <li key={i} className="flex items-start">
                    <Star size={16} className="mt-1 mr-2 text-yellow-400 flex-shrink-0" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-12"
      >
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-white">Featured Opportunities</h2>
          <Link href="/cast" className="text-blue-400 hover:underline">
            View All
          </Link>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          {[
            {
              title: "Lead Actor - Feature Film 'Midnight'",
              type: "Drama",
              location: "New York",
              pay: "$2,500/day",
              deadline: "Jun 30, 2023"
            },
            {
              title: "Commercial Models - Sports Brand",
              type: "Commercial",
              location: "Los Angeles",
              pay: "$1,200/day",
              deadline: "Jul 15, 2023"
            }
          ].map((job, index) => (
            <motion.div
              key={index}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 p-6 rounded-xl border border-white/10 hover:border-blue-400/50 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2 text-white">{job.title}</h3>
              <div className="flex flex-wrap gap-4 mb-4">
                <span className="px-3 py-1 bg-blue-900/50 text-blue-300 rounded-full text-sm">{job.type}</span>
                <span className="px-3 py-1 bg-gray-700 text-gray-300 rounded-full text-sm">{job.location}</span>
                <span className="px-3 py-1 bg-green-900/50 text-green-300 rounded-full text-sm">{job.pay}</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-400">Deadline: {job.deadline}</span>
                <Link 
                  href={`/cast/${index}`} 
                  className="text-blue-400 hover:underline text-sm font-medium"
                >
                  View Details →
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>

      <motion.section
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-6xl mx-auto px-4 py-12"
      >
        <h2 className="text-3xl font-bold text-center mb-12 text-white">
          Success Stories
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              quote: "Found our lead actor in just 48 hours! The platform saved us weeks of casting calls.",
              name: "Sarah K.",
              role: "Casting Director, Netflix"
            },
            {
              quote: "Booked 3 roles in my first month using this platform. Life-changing!",
              name: "Michael T.",
              role: "Actor"
            }
          ].map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ y: 20 }}
              whileInView={{ y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-white/5 p-8 rounded-xl border border-white/10"
            >
              <div className="text-yellow-400 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} className="inline" />
                ))}
              </div>
              <p className="text-lg italic mb-6">"{testimonial.quote}"</p>
              <div>
                <p className="font-medium text-white">{testimonial.name}</p>
                <p className="text-sm text-gray-400">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </div>
  );
}