'use client';
import Image from 'next/image';
import Link from "next/link";
import { motion } from "framer-motion";

function Navigation() {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center p-8 text-white"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <Link href="/" className="text-xl font-bold">
          <Image className='text-slate-500' src="/logo.svg" width={70} height={50} alt="logo" />
        </Link>
      </motion.div>

      <div className="flex gap-6">
        {[
          { href: "/cast", text: "Casting Call" },
          { href: "/talent", text: "For Talent" },
          { href: "/signin", text: "Sign In" },
          { href: "/post", text: "Post" },
        ].map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 0.1 * index,
              duration: 0.3
            }}
            whileHover={{ 
              scale: 1.05,
              color: "#D1D5DB" 
            }}
            whileTap={{ scale: 0.95 }}
          >
            <Link href={link.href} className="transition-colors">
              {link.text}
            </Link>
          </motion.div>
        ))}
      </div>
    </motion.nav>
  );
}

export default Navigation;