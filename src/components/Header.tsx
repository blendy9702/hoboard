"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Logo from "./Logo"

export default function Header() {
  const pathname = usePathname()
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const onHero = pathname === "/" && !scrolled && !menuOpen

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <Logo inverted={onHero} />

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {[
              { href: "/products", label: "Products" },
              { href: "/#features", label: "Features" },
              { href: "/#about", label: "About" },
            ].map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`text-[13px] font-medium transition-colors ${
                  onHero
                    ? "text-white/70 hover:text-white"
                    : "text-gray-500 hover:text-gray-900"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Menu */}
          <div className="flex items-center gap-3">
            <Link
              href="/products"
              className="hidden md:inline-flex items-center gap-1.5 px-4 py-2 bg-[#111111] text-white text-[13px] font-medium rounded-full hover:bg-[#333] transition-colors"
            >
              Shop Now
            </Link>

            {/* Mobile menu button */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="md:hidden w-9 h-9 flex flex-col items-center justify-center gap-1.5"
              aria-label="메뉴 열기"
            >
              <motion.span
                animate={menuOpen ? { rotate: 45, y: 5 } : { rotate: 0, y: 0 }}
                className={`block w-5 h-[1.5px] origin-center transition-all ${
                  onHero ? "bg-white" : "bg-gray-900"
                }`}
              />
              <motion.span
                animate={menuOpen ? { opacity: 0 } : { opacity: 1 }}
                className={`block w-5 h-[1.5px] ${onHero ? "bg-white" : "bg-gray-900"}`}
              />
              <motion.span
                animate={menuOpen ? { rotate: -45, y: -5 } : { rotate: 0, y: 0 }}
                className={`block w-5 h-[1.5px] origin-center transition-all ${
                  onHero ? "bg-white" : "bg-gray-900"
                }`}
              />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="fixed inset-0 z-40 bg-white pt-16 px-6"
          >
            <nav className="flex flex-col gap-6 mt-8">
              {[
                { href: "/products", label: "Products" },
                { href: "/#features", label: "Features" },
                { href: "/#about", label: "About" },
              ].map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMenuOpen(false)}
                    className="text-3xl font-bold text-gray-900 hover:text-[#5B4FFF] transition-colors"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.24 }}
                className="mt-4"
              >
                <Link
                  href="/products"
                  onClick={() => setMenuOpen(false)}
                  className="inline-flex items-center px-6 py-3 bg-[#111111] text-white text-base font-medium rounded-full"
                >
                  Shop Now
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
