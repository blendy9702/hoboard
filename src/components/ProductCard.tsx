"use client"

import Image from "next/image"
import Link from "next/link"
import { motion } from "framer-motion"
import { Keyboard, LAYOUT_LABELS } from "@/data/keyboards"

interface Props {
  keyboard: Keyboard
  index?: number
}

export default function ProductCard({ keyboard, index = 0 }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
    >
      <Link href={`/products/${keyboard.id}`} className="block group">
        <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100/80 transition-all duration-300">
          <div className="relative bg-[#F7F7F7]">
            {keyboard.badge && (
              <div className="absolute top-4 right-4 z-10">
                <span
                  className={`px-2.5 py-1 text-[11px] font-bold rounded-full tracking-wider ${
                    keyboard.badge === "NEW"
                      ? "bg-[#5B4FFF] text-white"
                      : keyboard.badge === "BEST"
                      ? "bg-[#E8FF47] text-black"
                      : "bg-black/70 text-white"
                  }`}
                >
                  {keyboard.badge}
                </span>
              </div>
            )}

            <div className="absolute top-4 left-4 z-10">
              <span className="px-2.5 py-1 text-[11px] font-semibold rounded-full bg-white/90 text-gray-600 shadow-sm">
                {LAYOUT_LABELS[keyboard.layout]}
              </span>
            </div>

            <motion.div
              whileHover={{ scale: 1.03 }}
              transition={{ duration: 0.3 }}
              className="aspect-[16/10]"
            >
              <Image
                src={keyboard.image}
                alt={keyboard.name}
                width={1200}
                height={750}
                className="w-full h-full object-contain"
              />
            </motion.div>
          </div>

          <div className="p-5">
            <div className="flex items-start justify-between gap-2">
              <div>
                <h3 className="text-[15px] font-bold text-gray-900 group-hover:text-[#5B4FFF] transition-colors">
                  {keyboard.name}
                </h3>
                <p className="text-[12px] text-gray-400 mt-0.5">{keyboard.subtitle}</p>
              </div>

              <div className="flex flex-col items-end shrink-0">
                <div className="flex items-center gap-1">
                  <span className="text-[12px] text-yellow-400">★</span>
                  <span className="text-[12px] font-semibold text-gray-700">
                    {keyboard.rating.toFixed(1)}
                  </span>
                </div>
                <span className="text-[11px] text-gray-400">
                  ({keyboard.reviewCount})
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-1.5 mt-3">
              {keyboard.features.slice(0, 3).map((f) => (
                <span
                  key={f}
                  className="px-2 py-0.5 bg-gray-50 text-[11px] text-gray-500 rounded-full border border-gray-100"
                >
                  {f}
                </span>
              ))}
            </div>

            <div className="flex items-center justify-between mt-4">
              <div>
                {keyboard.originalPrice && (
                  <span className="text-[12px] text-gray-300 line-through mr-1.5">
                    {keyboard.originalPrice.toLocaleString()}원
                  </span>
                )}
                <span className="text-[17px] font-bold text-gray-900">
                  {keyboard.price.toLocaleString()}
                  <span className="text-[13px] font-medium">원</span>
                </span>
              </div>

              <div className="flex items-center gap-1 text-[12px] font-medium text-[#5B4FFF] group-hover:gap-2 transition-all">
                자세히
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

          </div>
        </div>
      </Link>
    </motion.div>
  )
}
