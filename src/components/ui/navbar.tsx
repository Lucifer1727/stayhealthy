"use client";
import { cn } from "@/lib/utils";
import { IconMenu2, IconX } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

interface NavbarProps {
  className?: string;
}

const navItems = [
  { name: "Our Meal Plans", link: "#meal-plans" },
  { name: "Menu", link: "/menu" },
  { name: "Our Services", link: "#services" },
  { name: "Why Choose Us", link: "#why-choose-us" },
  { name: "Help", link: "/help" },
  { name: "Get In Touch", link: "#contact" },
];

export function Navbar({ className }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop & Mobile Navbar */}
      <motion.nav
        className={cn(
          "fixed top-0 left-0 right-0 z-50 border-b border-zinc-200/20 bg-cover bg-center bg-no-repeat bg-[#a8c9b8]",
          className
        )}
        style={{
          backgroundImage: "url('/navbar-bg.jpg')",
        }}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.3 }}
      >
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm"></div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/StayHealthy(1).png"
                alt="StayHealthy Logo"
                width={300}
                height={60}
                className="object-contain"
              />
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  className="text-zinc-700 hover:text-emerald-600 transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden p-2 rounded-md text-zinc-700 hover:bg-zinc-100 transition-colors"
              aria-label="Toggle menu"
            >
              {isOpen ? (
                <IconX className="w-6 h-6" />
              ) : (
                <IconMenu2 className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed top-16 left-0 right-0 z-40 border-b border-zinc-200/20 md:hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: "url('/navbar-bg.jpg')",
            }}
          >
            {/* Overlay for mobile menu */}
            <div className="absolute inset-0 bg-white/80 backdrop-blur-sm"></div>

            <div className="relative px-4 py-4 space-y-3">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 text-zinc-700 hover:bg-emerald-50 hover:text-emerald-600 rounded-md transition-colors text-sm font-medium"
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
