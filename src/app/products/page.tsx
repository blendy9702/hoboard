"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import { keyboards, LayoutType, LAYOUT_LABELS } from "@/data/keyboards"

const FILTERS: { label: string; value: LayoutType | "all" }[] = [
  { label: "전체", value: "all" },
  { label: "60%", value: "60" },
  { label: "65%", value: "65" },
  { label: "75%", value: "75" },
  { label: "TKL", value: "tkl" },
  { label: "Full", value: "full" },
]

const SORT_OPTIONS = [
  { label: "추천순", value: "default" },
  { label: "낮은 가격순", value: "price_asc" },
  { label: "높은 가격순", value: "price_desc" },
  { label: "평점순", value: "rating" },
]

export default function ProductsPage() {
  const [activeFilter, setActiveFilter] = useState<LayoutType | "all">("all")
  const [sort, setSort] = useState("default")

  const filtered = keyboards
    .filter((kb) => activeFilter === "all" || kb.layout === activeFilter)
    .sort((a, b) => {
      if (sort === "price_asc") return a.price - b.price
      if (sort === "price_desc") return b.price - a.price
      if (sort === "rating") return b.rating - a.rating
      return 0
    })

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />

      {/* Page Header */}
      <section className="pt-32 pb-12 px-6 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block text-[12px] font-semibold tracking-widest text-[#5B4FFF] uppercase mb-3">
              Products
            </span>
            <h1 className="text-[40px] sm:text-[56px] font-bold text-gray-900 tracking-tight leading-tight">
              All Keyboards
            </h1>
            <p className="text-[15px] text-gray-400 mt-3">
              {keyboards.length}종의 프리미엄 기계식 키보드
            </p>
          </motion.div>

          {/* Filter + Sort */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mt-8">
            {/* Layout filters */}
            <div className="flex items-center gap-2 flex-wrap">
              {FILTERS.map((f) => (
                <button
                  key={f.value}
                  onClick={() => setActiveFilter(f.value)}
                  className={`px-4 py-2 text-[13px] font-medium rounded-full transition-all duration-200 ${
                    activeFilter === f.value
                      ? "bg-[#111111] text-white"
                      : "bg-gray-100 text-gray-500 hover:bg-gray-200"
                  }`}
                >
                  {f.label}
                  <span className="ml-1.5 text-[11px] opacity-60">
                    {f.value === "all"
                      ? keyboards.length
                      : keyboards.filter((kb) => kb.layout === f.value).length}
                  </span>
                </button>
              ))}
            </div>

            {/* Sort */}
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-4 py-2 text-[13px] text-gray-600 bg-white border border-gray-200 rounded-xl outline-none cursor-pointer hover:border-gray-300 transition-colors"
            >
              {SORT_OPTIONS.map((o) => (
                <option key={o.value} value={o.value}>
                  {o.label}
                </option>
              ))}
            </select>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-12 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filtered.map((kb, i) => (
                <ProductCard key={kb.id} keyboard={kb} index={i} />
              ))}
            </motion.div>
          </AnimatePresence>

          {filtered.length === 0 && (
            <div className="text-center py-24">
              <p className="text-gray-400 text-[15px]">해당 레이아웃의 제품이 없습니다.</p>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  )
}
