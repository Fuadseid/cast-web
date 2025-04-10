'use client';
import { motion } from 'framer-motion';
import { Star, Film, UserCheck, Award, Zap, Shield } from 'lucide-react';
import Link from 'next/link';

const ForTalent = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const benefits = [
    {
      icon: <Film size={32} className="text-blue-500 dark:text-blue-400" />,
      title: "Showcase Your Work",
      description: "Upload high-quality reels, headshots, and portfolio items to attract casting directors"
    },
    {
      icon: <UserCheck size={32} className="text-blue-500 dark:text-blue-400" />,
      title: "Get Discovered",
      description: "Appear in searches by top Ethiopian casting directors and producers"
    },
    {
      icon: <Award size={32} className="text-blue-500 dark:text-blue-400" />,
      title: "Build Credibility",
      description: "Verified profiles with badges for trained professionals"
    },
    {
      icon: <Zap size={32} className="text-blue-500 dark:text-blue-400" />,
      title: "Quick Applications",
      description: "One-click apply to casting calls with your pre-filled profile"
    },
    {
      icon: <Shield size={32} className="text-blue-500 dark:text-blue-400" />,
      title: "Safe Environment",
      description: "Verified projects and secure communication channels"
    },
    {
      icon: <Star size={32} className="text-blue-500 dark:text-blue-400" />,
      title: "Featured Talent",
      description: "Chance to be spotlighted on our homepage"
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-cyan-50 dark:bg-zinc-950 min-h-screen text-gray-800 dark:text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-cyan-500 dark:from-blue-400 dark:to-purple-500">
              For Actors & Models
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Everything you need to launch and grow your performing career in Ethiopia&apos;s entertainment industry
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              variants={fadeIn}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-zinc-900/50 p-8 rounded-xl border border-gray-200 dark:border-zinc-700 hover:border-blue-500 transition-all shadow-sm dark:shadow-none"
            >
              <div className="flex items-center mb-4">
                <div className="mr-4">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-800 dark:text-white">{benefit.title}</h3>
              </div>
              <p className="text-gray-600 dark:text-gray-400 pl-12">{benefit.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20 bg-white dark:bg-zinc-900 rounded-xl p-8 md:p-12 shadow-sm dark:shadow-none"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className="text-yellow-500 dark:text-yellow-400 fill-yellow-500 dark:fill-yellow-400" />
                ))}
              </div>
              <blockquote className="text-xl italic mb-6 text-gray-700 dark:text-gray-300">
                &quot;I booked 3 roles in my first month using TalentConnect. The platform made it so easy to connect with legitimate casting opportunities. &quot;
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-blue-500 mr-4 overflow-hidden">
                  <div className="w-full h-full bg-gray-300 dark:bg-gray-700"></div>
                </div>
                <div>
                  <p className="font-bold text-gray-800 dark:text-white">Liya Kebede</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Actor & Model, Addis Ababa</p>
                </div>
              </div>
            </div>
            <div className="bg-cyan-100 dark:bg-zinc-800 rounded-lg aspect-video flex items-center justify-center">
              <div className="text-center p-6">
                <Film size={48} className="mx-auto text-gray-500 mb-4" />
                <p className="text-gray-600 dark:text-gray-400">Success story video</p>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
          className="mt-20 text-center"
        >
          <h3 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">Ready to showcase your talent?</h3>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/post"
              className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-bold rounded-lg transition-colors duration-300"
            >
              Create Free Profile
            </Link>
            <Link
              href="/how-it-works"
              className="px-8 py-3 border border-gray-800 dark:border-white text-gray-800 dark:text-white font-bold rounded-lg hover:bg-gray-100 dark:hover:bg-white/10 transition-colors duration-300"
            >
              How It Works
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ForTalent;