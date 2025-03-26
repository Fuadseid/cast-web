'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

const AboutPage = () => {
  // Animation variants
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

  const teamMembers = [
    {
      name: "Kebede Ayele",
      role: "Founder & CEO",
      bio: "Former casting director with 10+ years in the industry",
      img: "/team/kebede.jpg"
    },
    {
      name: "Selam Girma",
      role: "Head of Talent",
      bio: "Ex-model with 8 years scouting experience",
      img: "/team/selam.jpg"
    },
    {
      name: "Michael Tekle",
      role: "CTO",
      bio: "Tech innovator specializing in casting platforms",
      img: "/team/michael.jpg"
    },
    {
      name: "Amina Mohammed",
      role: "Community Manager",
      bio: "Connects talent with the right opportunities",
      img: "/team/amina.jpg"
    }
  ];

  const features = [
    {
      icon: "🎭",
      title: "Diverse Talent Pool",
      desc: "10,000+ vetted actors, models, and performers"
    },
    {
      icon: "⚡",
      title: "Fast Casting",
      desc: "Reduce audition times by 70% with our smart tools"
    },
    {
      icon: "🔒",
      title: "Secure Platform",
      desc: "End-to-end encrypted communications"
    }
  ];

  const stats = [
    { value: "10,000+", label: "Talents" },
    { value: "500+", label: "Casting Calls" },
    { value: "200+", label: "Projects/Month" },
    { value: "90%", label: "Success Rate" }
  ];

  return (
    <div className="from-blue-900/30 w-full to-zinc-950 text-white">
      <motion.section 
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="relative py-28 md:py-36 bg-gradient-to-b "
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.h1 
            variants={fadeIn}
            className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-300"
          >
            Connecting Talent with Opportunity
          </motion.h1>
          <motion.p 
            variants={fadeIn}
            className="text-lg md:text-xl max-w-3xl mx-auto text-gray-300"
          >
            Empowering actors, models, and creatives to showcase their skills while helping casting directors find the perfect talent.
          </motion.p>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={fadeIn}
        className="py-16 md:py-24 "
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Our Mission</h2>
          <p className="text-gray-300 text-lg md:text-xl">
            To revolutionize Ethiopia's casting industry through technology that connects exceptional talent with visionary creators.
          </p>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 md:py-24 "
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Why Choose Us?
          </motion.h2>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {features.map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ y: -5 }}
                className="from-slate-900/80 to-black-900/80 p-6 md:p-8 rounded-xl text-center border border-zinc-700 hover:border-blue-500 transition-all"
              >
                <span className="text-4xl block mb-4">{item.icon}</span>
                <h3 className="text-xl font-bold mb-3 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Team Section */}
      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 md:py-24 "
      >
        <div className="max-w-7xl mx-auto px-4">
          <motion.h2 variants={fadeIn} className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">
            Meet the Team
          </motion.h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                whileHover={{ scale: 1.03 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden border-2 border-blue-500 relative">
                  <Image
                    src={member.img}
                    fill
                    alt={member.name}
                    className="object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold text-white">{member.name}</h3>
                <p className="text-blue-400 mb-2">{member.role}</p>
                <p className="text-gray-400 text-sm">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="py-16 md:py-24 "
      >
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid md:grid-cols-4 divide-x divide-zinc-700 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="py-4"
              >
                <p className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</p>
                <p className="text-gray-300 uppercase text-sm tracking-wider">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-16 md:py-24 "
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <blockquote className="text-xl italic text-gray-300">
            "This platform helped us find lead actors for our film in 48 hours instead of weeks!"
            <span className="block mt-4 not-italic font-bold text-white">- Selam G., Casting Director</span>
          </blockquote>
        </div>
      </motion.section>

      <motion.section 
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeIn}
        className="py-20 bg-gradient-to-r from-slate-900/80 to-black-900/80"
      >
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white">Ready to Get Started?</h2>
          <motion.div
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400 }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <Link 
              href="/signup" 
              className="px-8 py-3 bg-white text-blue-900 font-bold rounded-lg hover:bg-gray-100 transition duration-300 text-sm md:text-base"
            >
              Join as Talent
            </Link>
            <Link 
              href="/signup" 
              className="px-8 py-3 border-2 border-white text-white font-bold rounded-lg hover:bg-white/10 transition duration-300 text-sm md:text-base"
            >
              Hire Talent
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
};

export default AboutPage;