'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from "next/image";
import { CalendarDays, ArrowRight } from 'lucide-react';

const Blog = () => {
  const contents = [
    {
      date: "20 Nov 2023",
      title: "The Future of Streaming Platforms in Africa",
      subtitle: "Exploring how African content is reshaping global streaming platforms and what it means for local creators.",
      link: "/blog/streaming-platforms-africa",
      category: "Industry Trends",
      readTime: "5 min read",
      image: "/blog-streaming.png"
    },
    {
      date: "15 Nov 2023",
      title: "Ethiopian Cinema: A Rising Global Force",
      subtitle: "How Ethiopian filmmakers are gaining international recognition and what aspiring actors can learn from their success.",
      link: "/blog/ethiopian-cinema",
      category: "Spotlight",
      readTime: "7 min read",
      image: "/blog-cinema.webp"
    },
    {
      date: "10 Nov 2023",
      title: "Digital Casting: Revolutionizing Talent Discovery",
      subtitle: "The impact of digital casting platforms on traditional audition processes and how to adapt as a performer.",
      link: "/blog/digital-casting",
      category: "Technology",
      readTime: "4 min read",
      image: "/blog-casting.jpg"
    }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20 ">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={staggerContainer}
        className="max-w-4xl mb-16 md:mx-auto text-center"
      >
        <motion.div variants={fadeInUp}>
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold tracking-wider text-teal-300 uppercase rounded-full bg-teal-900/50">
            Latest Updates
          </span>
        </motion.div>
        
        <motion.h2 
          variants={fadeInUp}
          className="mb-6 text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
        >
          Industry <span className="text-blue-400">Insights</span> & News
        </motion.h2>
        
        <motion.p 
          variants={fadeInUp}
          className="text-lg text-gray-300 md:text-xl"
        >
          Stay ahead with expert analysis, trends, and stories shaping the entertainment industry in Ethiopia and beyond.
        </motion.p>
      </motion.div>
      
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={staggerContainer}
        className="grid gap-8 lg:grid-cols-3"
      >
        {contents.map((content, index) => (
          <motion.div 
            key={index}
            variants={fadeInUp}
            whileHover={{ y: -5 }}
            className="overflow-hidden border border-gray-800 rounded-xl bg-gray-900 hover:shadow-lg hover:shadow-blue-900/20 transition-all duration-300"
          >
            <div className="relative h-48 overflow-hidden">
              <Image
                src={content.image}
                alt={content.title}
                fill
                className="object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 left-0 right-0 h-1/2 bg-gradient-to-t from-gray-900 to-transparent" />
              <span className="absolute top-4 left-4 px-3 py-1 text-xs font-medium rounded-full bg-blue-600 text-white">
                {content.category}
              </span>
            </div>
            
            <div className="p-6">
              <div className="flex items-center gap-3 text-sm text-gray-400 mb-3">
                <CalendarDays size={16} />
                <span>{content.date}</span>
                <span>•</span>
                <span>{content.readTime}</span>
              </div>
              
              <Link
                href={content.link}
                className="block mb-3 text-xl font-bold text-white hover:text-blue-400 transition-colors"
              >
                {content.title}
              </Link>
              
              <p className="mb-6 text-gray-300">
                {content.subtitle}
              </p>
              
              <Link
                href={content.link}
                className="inline-flex items-center text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                Read article
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mt-16 text-center"
      >
        <Link
          href="/blog"
          className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-full transition-colors"
        >
          View All Articles
          <ArrowRight size={20} className="ml-2" />
        </Link>
      </motion.div>
    </div>
  );
};

export default Blog;