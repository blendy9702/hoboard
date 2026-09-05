"use client"

import Link from "next/link"
import { useState } from "react"
import { motion } from "framer-motion"
import Image from "next/image"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import { Keyboard, keyboards, LAYOUT_LABELS } from "@/data/keyboards"

export default function ProductDetail({ keyboard }: { keyboard: Keyboard }) {
  const [quantity, setQuantity] = useState(1)
  const [added, setAdded] = useState(false)

  const sameLayout = keyboards.filter(
    (kb) => kb.id !== keyboard.id && kb.layout === keyboard.layout
  )
  const related = sameLayout
    .slice(0, 3)
    .concat(
      keyboards
        .filter((kb) => kb.id !== keyboard.id && kb.layout !== keyboard.layout)
        .slice(0, Math.max(0, 3 - sameLayout.length))
    )
    .slice(0, 3)

  const handleAddToCart = () => {
    setAdded(true)
    setTimeout(() => setAdded(false), 2000)
  }

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />

      <div className="pt-24">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <nav className="flex items-center gap-2 text-[12px] text-gray-400">
            <Link href="/" className="hover:text-gray-600 transition-colors">Home</Link>
            <span>/</span>
            <Link href="/products" className="hover:text-gray-600 transition-colors">Products</Link>
            <span>/</span>
            <span className="text-gray-900">{keyboard.name}</span>
          </nav>
        </div>

        <section className="max-w-7xl mx-auto px-6 py-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              className="lg:sticky lg:top-28"
            >
              <div className="relative rounded-3xl overflow-hidden bg-[#F7F7F7]">
                {keyboard.badge && (
                  <div className="absolute top-6 right-6 z-10">
                    <span
                      className={`px-3 py-1.5 text-[12px] font-bold rounded-full tracking-wider ${
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

                <div className="absolute top-6 left-6 z-10">
                  <span className="px-3 py-1.5 text-[12px] font-semibold rounded-full bg-white/90 text-gray-600 shadow-sm">
                    {LAYOUT_LABELS[keyboard.layout]}
                  </span>
                </div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.96 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.8, delay: 0.2 }}
                  className="relative z-0 w-full"
                >
                  <Image
                    src={keyboard.image}
                    alt={keyboard.name}
                    width={1600}
                    height={900}
                    className="w-full h-auto"
                    priority
                  />
                </motion.div>
              </div>

              <div className="flex items-center gap-2 mt-6 justify-center">
                <div
                  className="w-6 h-6 rounded-full border-2 border-[#5B4FFF] ring-1 ring-[#5B4FFF]/30"
                  style={{ backgroundColor: keyboard.caseColor }}
                  title="케이스 컬러"
                />
                <div
                  className="w-6 h-6 rounded-full border border-gray-200"
                  style={{ backgroundColor: keyboard.keycapColor }}
                  title="키캡 컬러"
                />
                <div
                  className="w-6 h-6 rounded-full border border-gray-200"
                  style={{ backgroundColor: keyboard.accentColor }}
                  title="포인트 컬러"
                />
                <span className="ml-1 text-[12px] text-gray-400">컬러 구성</span>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="mb-6">
                <h1 className="text-[36px] sm:text-[44px] font-bold text-gray-900 tracking-tight leading-tight">
                  {keyboard.name}
                </h1>
                <p className="text-[15px] text-gray-400 mt-2">{keyboard.subtitle}</p>
              </div>

              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <span
                      key={i}
                      className={`text-[16px] ${i < Math.floor(keyboard.rating) ? "text-yellow-400" : "text-gray-200"}`}
                    >
                      ★
                    </span>
                  ))}
                </div>
                <span className="text-[14px] font-semibold text-gray-700">
                  {keyboard.rating.toFixed(1)}
                </span>
                <span className="text-[13px] text-gray-400">
                  ({keyboard.reviewCount}개 리뷰)
                </span>
              </div>

              <div className="flex items-baseline gap-3 mb-8">
                {keyboard.originalPrice && (
                  <span className="text-[18px] text-gray-300 line-through">
                    {keyboard.originalPrice.toLocaleString()}원
                  </span>
                )}
                <span className="text-[36px] font-bold text-gray-900">
                  {keyboard.price.toLocaleString()}
                  <span className="text-[20px] font-medium">원</span>
                </span>
                {keyboard.originalPrice && (
                  <span className="text-[13px] font-semibold text-red-500">
                    {Math.round((1 - keyboard.price / keyboard.originalPrice) * 100)}% OFF
                  </span>
                )}
              </div>

              <p className="text-[14px] text-gray-500 leading-relaxed mb-8 border-t border-gray-100 pt-6">
                {keyboard.description}
              </p>

              <div className="grid grid-cols-2 gap-3 mb-8">
                {[
                  { label: "레이아웃", value: LAYOUT_LABELS[keyboard.layout] },
                  { label: "소재", value: keyboard.material },
                  { label: "스위치", value: keyboard.switchType },
                  { label: "무게", value: keyboard.weight },
                ].map((spec) => (
                  <div key={spec.label} className="bg-gray-50 rounded-xl p-3">
                    <div className="text-[11px] text-gray-400 mb-1">{spec.label}</div>
                    <div className="text-[13px] font-semibold text-gray-800">{spec.value}</div>
                  </div>
                ))}
              </div>

              <div className="mb-8">
                <h3 className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  연결 방식
                </h3>
                <div className="flex flex-wrap gap-2">
                  {keyboard.connectivity.map((c) => (
                    <span
                      key={c}
                      className="px-3 py-1.5 bg-white border border-gray-200 text-[12px] text-gray-600 rounded-full font-medium"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mb-8">
                <h3 className="text-[12px] font-semibold text-gray-400 uppercase tracking-wider mb-3">
                  주요 특징
                </h3>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {keyboard.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-[13px] text-gray-600">
                      <span className="w-4 h-4 rounded-full bg-[#F4F3FF] flex items-center justify-center shrink-0">
                        <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                          <path d="M1.5 4l2 2 3-3.5" stroke="#5B4FFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      {f}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center gap-3">
                <div className="flex items-center border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-10 h-12 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-lg"
                  >
                    −
                  </button>
                  <span className="w-10 text-center text-[14px] font-semibold text-gray-900">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-10 h-12 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors text-lg"
                  >
                    +
                  </button>
                </div>

                <motion.button
                  onClick={handleAddToCart}
                  whileTap={{ scale: 0.97 }}
                  className={`flex-1 h-12 rounded-xl text-[14px] font-semibold transition-all duration-300 ${
                    added
                      ? "bg-green-500 text-white"
                      : "bg-[#111111] text-white hover:bg-[#333]"
                  }`}
                >
                  {added ? "✓ 담겼습니다" : "장바구니 담기"}
                </motion.button>

                <button className="w-12 h-12 rounded-xl border border-gray-200 flex items-center justify-center text-gray-400 hover:text-red-400 hover:border-red-200 transition-all">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              <button className="w-full h-12 mt-3 rounded-xl bg-[#5B4FFF] text-white text-[14px] font-semibold hover:bg-[#4940E0] transition-colors">
                바로 구매
              </button>
            </motion.div>
          </div>
        </section>

        {related.length > 0 && (
          <section className="py-20 px-6 border-t border-gray-100 mt-10">
            <div className="max-w-7xl mx-auto">
              <motion.h2
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="text-[28px] font-bold text-gray-900 mb-10"
              >
                함께 보면 좋은 제품
              </motion.h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((kb, i) => (
                  <ProductCard key={kb.id} keyboard={kb} index={i} />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>

      <Footer />
    </div>
  )
}
