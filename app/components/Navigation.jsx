"use client";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinks = [
    { href: "/cast", text: "Casting Call" },
    { href: "/talent", text: "For Talent" },
    { href: "/signin", text: "Sign In" },
    { href: "/post", text: "Post" },
  ];

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="flex justify-between items-center p-8 text-white font-sans"
    >
      <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
        <Link href="/" className="text-xl font-bold">
          <Image
            className="text-slate-500"
            src="/logo.svg"
            width={70}
            height={50}
            alt="logo"
          />
        </Link>
      </motion.div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex gap-10 items-center">
        {navLinks.map((link, index) => (
          <motion.div
            key={link.href}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{
              delay: 0.1 * index,
              duration: 0.4,
              ease: "easeOut",
            }}
            whileHover={{
              scale: 1.05,
              color: "#F3F4F6",
              textShadow: "0px 0px 8px rgba(255,255,255,0.4)",
            }}
            whileTap={{ scale: 0.95 }}
            className="relative"
          >
            <Link
              href={link.href}
              className="text-lg font-medium tracking-wide transition-all duration-300 hover:text-gray-200"
            >
              {link.text}
              <motion.span
                className="absolute bottom-0 left-0 w-0 h-px bg-white"
                whileHover={{ width: "100%" }}
                transition={{ duration: 0.3 }}
              />
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Mobile Hamburger Button */}
      <div className="md:hidden">
        <button
          onClick={toggleMenu}
          className="text-white focus:outline-none"
          aria-label="Toggle menu"
        >
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: 45, y: 5 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-white mb-1.5"
          />
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { opacity: 0 },
              closed: { opacity: 1 },
            }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-white mb-1.5"
          />
          <motion.div
            animate={isOpen ? "open" : "closed"}
            variants={{
              open: { rotate: -45, y: -5 },
              closed: { rotate: 0 },
            }}
            transition={{ duration: 0.2 }}
            className="w-6 h-0.5 bg-white"
          />
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center md:hidden"
          >
            <button
              onClick={toggleMenu}
              className="absolute top-8 right-8 text-white text-2xl"
              aria-label="Close menu"
            >
              &times;
            </button>

            <div className="flex flex-col items-center gap-12">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{
                    delay: 0.1 * index,
                    duration: 0.3,
                    ease: "easeOut",
                  }}
                  exit={{ opacity: 0, y: 20 }}
                  whileHover={{
                    scale: 1.05,
                    color: "#F3F4F6",
                  }}
                  whileTap={{ scale: 0.95 }}
                  className="text-2xl font-medium"
                >
                  <Link
                    href={link.href}
                    onClick={toggleMenu}
                    className="block py-2 px-4"
                  >
                    {link.text}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

export default Navigation;
