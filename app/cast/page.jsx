'use client';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { Calendar, MapPin, DollarSign, Clock, Film, Search, Filter } from 'lucide-react';
import { useState } from 'react';

const CastingCallCard = ({ call }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
      className="bg-zinc-900/80 border border-zinc-700 rounded-xl overflow-hidden hover:border-blue-500 transition-all h-full flex flex-col"
    >
      <div className="p-6 flex-grow">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">{call.title}</h3>
            <div className="flex items-center gap-2 text-blue-400 mb-3">
              <Film size={16} />
              <span className="text-sm">{call.projectType}</span>
            </div>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-medium ${
            call.status === 'Urgent' 
              ? 'bg-red-900/30 text-red-400' 
              : call.status === 'Active'
                ? 'bg-blue-900/30 text-blue-400'
                : 'bg-gray-700 text-gray-400'
          }`}>
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
      
      {/* Added application count */}
      <div className="border-t border-zinc-700 px-6 py-3 bg-zinc-900/50">
        <div className="flex justify-between items-center text-sm text-gray-400">
          <span>{call.applications} applications</span>
          <span>Posted {call.postedDate}</span>
        </div>
      </div>
    </motion.div>
  );
};

const CastingCallsSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filters, setFilters] = useState({
    projectType: '',
    location: '',
    status: ''
  });

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
      roles: ["Male Lead", "Age 25-35", "Drama"],
      applications: 42,
      postedDate: "2 days ago"
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
      roles: ["Models", "Age 18-30", "All Genders"],
      applications: 28,
      postedDate: "1 day ago"
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
      roles: ["Supporting", "Various Ages", "Drama"],
      applications: 35,
      postedDate: "3 days ago"
    },
    {
      id: "cc004",
      title: "Voice Actors - Animation Project",
      projectType: "Animation",
      status: "Active",
      location: "Remote",
      payRate: "$100/session",
      date: "Jun 1 - Aug 30, 2023",
      deadline: "May 30, 2023",
      description: "Looking for versatile voice actors for new animated series. Multiple characters available.",
      roles: ["Voice Acting", "All Ages", "Bilingual"],
      applications: 19,
      postedDate: "5 days ago"
    },
    {
      id: "cc005",
      title: "Extras - Historical Drama",
      projectType: "Feature Film",
      status: "Active",
      location: "Gondar",
      payRate: "$80/day",
      date: "Aug 5-20, 2023",
      deadline: "Jul 25, 2023",
      description: "Seeking background actors for large crowd scenes in historical drama set in 19th century Ethiopia.",
      roles: ["Extras", "Age 18-60", "No Exp Needed"],
      applications: 56,
      postedDate: "1 week ago"
    },
    {
      id: "cc006",
      title: "Child Actors - Educational TV",
      projectType: "TV Series",
      status: "Urgent",
      location: "Addis Ababa",
      payRate: "$90/day",
      date: "Jun 5-15, 2023",
      deadline: "Jun 1, 2023",
      description: "Casting children aged 6-12 for educational television program. Must be comfortable on camera.",
      roles: ["Child Actors", "Age 6-12", "Educational"],
      applications: 23,
      postedDate: "2 days ago"
    }
  ];

  const filteredCalls = castingCalls.filter(call => {
    const matchesSearch = call.title.toLowerCase().includes(searchTerm.toLowerCase()) || 
                         call.description.toLowerCase().includes(searchTerm.toLowerCase());
    
    const matchesFilters = (
      (!filters.projectType || call.projectType === filters.projectType) &&
      (!filters.location || call.location === filters.location) &&
      (!filters.status || call.status === filters.status)
    );
    
    return matchesSearch && matchesFilters;
  });

  const locations = [...new Set(castingCalls.map(call => call.location))];
  const projectTypes = [...new Set(castingCalls.map(call => call.projectType))];
  const statuses = [...new Set(castingCalls.map(call => call.status))];

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
            <p className="text-gray-400">Find your next opportunity in Ethiopia&apos;s growing entertainment industry</p>
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

        {/* Search and Filter Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mb-8 bg-zinc-900/50 border border-zinc-700 rounded-lg p-4"
        >
          <div className="flex flex-col md:flex-row gap-4">
            <div className="relative flex-grow">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                placeholder="Search casting calls..."
                className="pl-10 w-full bg-zinc-800 border border-zinc-700 rounded-md py-2 px-4 text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            
            <div className="flex gap-2 flex-wrap">
              <select
                className="bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.projectType}
                onChange={(e) => setFilters({...filters, projectType: e.target.value})}
              >
                <option value="">All Types</option>
                {projectTypes.map(type => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
              
              <select
                className="bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.location}
                onChange={(e) => setFilters({...filters, location: e.target.value})}
              >
                <option value="">All Locations</option>
                {locations.map(location => (
                  <option key={location} value={location}>{location}</option>
                ))}
              </select>
              
              <select
                className="bg-zinc-800 border border-zinc-700 rounded-md py-2 px-3 text-white text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                value={filters.status}
                onChange={(e) => setFilters({...filters, status: e.target.value})}
              >
                <option value="">All Statuses</option>
                {statuses.map(status => (
                  <option key={status} value={status}>{status}</option>
                ))}
              </select>
              
              <button 
                onClick={() => {
                  setSearchTerm('');
                  setFilters({
                    projectType: '',
                    location: '',
                    status: ''
                  });
                }}
                className="bg-zinc-700 hover:bg-zinc-600 text-gray-300 px-3 py-2 rounded-md text-sm flex items-center gap-1 transition-colors"
              >
                <Filter size={16} />
                Reset
              </button>
            </div>
          </div>
        </motion.div>

        {/* Results Count */}
        {filteredCalls.length === 0 ? (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-12"
          >
            <h3 className="text-xl text-gray-300 mb-2">No casting calls found</h3>
            <p className="text-gray-500">Try adjusting your search or filters</p>
          </motion.div>
        ) : (
          <>
            <div className="text-gray-400 text-sm mb-4">
              Showing {filteredCalls.length} of {castingCalls.length} casting calls
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredCalls.map((call) => (
                <CastingCallCard key={call.id} call={call} />
              ))}
            </div>
          </>
        )}

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-4">Ready to post your own casting call?</h3>
          <Link
            href="/post-call"
            className="inline-flex items-center px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors"
          >
            Post a Casting Call
            <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
            </svg>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default CastingCallsSection;