'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, DollarSign, Clock, Film } from 'lucide-react';

const CastingCallCard = ({ call }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-zinc-900/80 border border-zinc-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all"
    >
      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{call.title}</h3>
            <div className="flex items-center gap-2 text-blue-400 mb-3">
              <Film size={16} />
              <span className="text-sm">{call.projectType}</span>
            </div>
          </div>
          <span className="px-3 py-1 bg-blue-900/30 text-blue-400 rounded-full text-xs font-medium">
            {call.status}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-4 mt-4">
          <div className="flex items-center gap-2 text-gray-300">
            <MapPin size={16} className="text-blue-400" />
            <span className="text-sm">{call.location}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <DollarSign size={16} className="text-blue-400" />
            <span className="text-sm">{call.payRate}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Calendar size={16} className="text-blue-400" />
            <span className="text-sm">{call.date}</span>
          </div>
          <div className="flex items-center gap-2 text-gray-300">
            <Clock size={16} className="text-blue-400" />
            <span className="text-sm">Deadline: {call.deadline}</span>
          </div>
        </div>

        <p className="text-gray-400 mt-4 text-sm line-clamp-2">{call.description}</p>

        <div className="mt-6 flex justify-between items-center">
          <div className="flex gap-2 flex-wrap">
            {call.roles.map((role, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-zinc-800 text-xs rounded-md text-gray-300"
              >
                {role}
              </span>
            ))}
          </div>
          <Link
            href={`/casting-calls/${call.id}`}
            className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1"
          >
            View Details
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

const CastingCallsSection = () => {
  const castingCalls = [
    {
      id: "cc001",
      title: "Lead Actor - Feature Film 'Midnight'",
      projectType: "Feature Film",
      status: "Active",
      location: "Addis Ababa",
      payRate: "$250/day",
      date: "Jun 15 - Jul 30, 2023",
      deadline: "Jun 10, 2023",
      description: "Seeking talented lead actor for upcoming drama film about urban life in Ethiopia. Must be fluent in Amharic and available for 6-week shoot.",
      roles: ["Male Lead", "Age 25-35", "Drama"]
    },
    {
      id: "cc002",
      title: "Commercial Models Needed",
      projectType: "Commercial",
      status: "Urgent",
      location: "Dire Dawa",
      payRate: "$150/day",
      date: "May 20-22, 2023",
      deadline: "May 18, 2023",
      description: "Casting models for new beverage commercial. Looking for energetic personalities with great screen presence.",
      roles: ["Models", "Age 18-30", "All Genders"]
    },
    {
      id: "cc003",
      title: "Supporting Actors - TV Series",
      projectType: "TV Series",
      status: "Active",
      location: "Hawassa",
      payRate: "$120/day",
      date: "Jul 10 - Aug 15, 2023",
      deadline: "Jul 1, 2023",
      description: "Supporting roles for popular drama series. Previous acting experience preferred but not required.",
      roles: ["Supporting", "Various Ages", "Drama"]
    }
  ];

  return (
    <section className="py-16 md:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex justify-between items-end mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-2">Current Casting Calls</h2>
            <p className="text-gray-400">Find your next opportunity in Ethiopia's growing entertainment industry</p>
          </div>
          <Link
            href="/casting-calls"
            className="text-blue-400 hover:text-blue-300 text-sm font-medium flex items-center gap-1"
          >
            View All
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {castingCalls.map((call) => (
            <CastingCallCard key={call.id} call={call} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default CastingCallsSection;