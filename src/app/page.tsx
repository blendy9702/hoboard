"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import { keyboards } from "@/data/keyboards"

const FEATURES = [
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
      </svg>
    ),
    title: "가스켓 마운트",
    desc: "부드럽고 탄탄한 타이핑감을 위한 프리미엄 가스켓 마운트 구조",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="3" />
        <path d="M12 1v4M12 19v4M4.22 4.22l2.83 2.83M16.95 16.95l2.83 2.83M1 12h4M19 12h4M4.22 19.78l2.83-2.83M16.95 7.05l2.83-2.83" />
      </svg>
    ),
    title: "핫스왑 소켓",
    desc: "납땜 없이 스위치를 교체할 수 있는 핫스왑 소켓으로 무한한 커스터마이징",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" />
      </svg>
    ),
    title: "3모드 연결",
    desc: "유선 USB-C, 블루투스 5.0, 2.4GHz 무선으로 어디서든 자유롭게",
  },
  {
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
    title: "Per-key RGB",
    desc: "각 키마다 독립적으로 제어 가능한 RGB 조명으로 나만의 스타일",
  },
]

const SHOWCASE_IDS = ["hb-arc-60", "hb-navy-75", "hb-forest-65"] as const

export default function HomePage() {
  const showcase = SHOWCASE_IDS.map((id) => keyboards.find((kb) => kb.id === id)!)

  return (
    <div className="min-h-screen bg-[#FAFAFA]">
      <Header />

      {/* ── Hero Section ── */}
      <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-[#0D0D0D] px-6 pt-20 pb-16">
        {/* Background grid */}
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,.5) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.5) 1px,transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />

        {/* Glow blobs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] rounded-full bg-[#5B4FFF]/10 blur-[120px] pointer-events-none" />
        <div className="absolute top-1/3 right-1/4 w-[300px] h-[300px] rounded-full bg-[#E8FF47]/5 blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center max-w-5xl mx-auto">
          {/* Main headline */}
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-[52px] sm:text-[72px] md:text-[90px] font-bold text-white leading-[1.05] tracking-tight"
            >
              최상의
            </motion.h1>
          </div>
          <div className="overflow-hidden">
            <motion.h1
              initial={{ y: 80, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-[52px] sm:text-[72px] md:text-[90px] font-bold leading-[1.05] tracking-tight bg-gradient-to-r from-[#5B4FFF] via-[#9B8FFF] to-[#5B4FFF] bg-clip-text text-transparent"
            >
              타이핑 경험
            </motion.h1>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="text-[15px] sm:text-[17px] text-white/40 mt-6 max-w-md mx-auto leading-relaxed"
          >
            항공급 알루미늄 케이스와 가스켓 마운트로 완성되는<br className="hidden sm:block" />
            hoboard 프리미엄 기계식 키보드
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-3 mt-10"
          >
            <Link
              href="/products"
              className="w-full sm:w-auto px-8 py-3.5 bg-white text-black text-[14px] font-semibold rounded-full hover:bg-white/90 transition-colors"
            >
              제품 둘러보기
            </Link>
            <Link
              href="#features"
              className="w-full sm:w-auto px-8 py-3.5 bg-white/5 text-white/70 text-[14px] font-medium rounded-full border border-white/10 hover:bg-white/10 transition-colors"
            >
              더 알아보기
            </Link>
          </motion.div>

          {/* Hero keyboard visual */}
          <motion.div
            initial={{ opacity: 0, y: 40, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 max-w-3xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden bg-white">
              <div className="absolute inset-0 rounded-2xl bg-[#5B4FFF]/20 blur-2xl translate-y-4 scale-95 pointer-events-none" />
              <Image
                src="/keyboards/hb-tkl-pro.png"
                alt="HB TKL Pro"
                width={1600}
                height={900}
                className="relative z-10 w-full h-auto"
                priority
              />
            </div>
            <p className="text-[12px] text-white/25 mt-4">
              HB TKL Pro — Matte Black
            </p>
          </motion.div>
        </div>
      </section>

      {/* ── Features Section ── */}
      <section id="features" className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <span className="inline-block text-[12px] font-semibold tracking-widest text-[#5B4FFF] uppercase mb-4">
              Features
            </span>
            <h2 className="text-[36px] sm:text-[48px] font-bold text-gray-900 tracking-tight leading-tight">
              타협 없는<br />프리미엄 사양
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {FEATURES.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group p-6 bg-white rounded-2xl border border-gray-100 hover:border-[#5B4FFF]/20 hover:shadow-lg hover:shadow-[#5B4FFF]/5 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-[#F4F3FF] text-[#5B4FFF] flex items-center justify-center mb-4 group-hover:bg-[#5B4FFF] group-hover:text-white transition-colors duration-300">
                  {f.icon}
                </div>
                <h3 className="text-[15px] font-bold text-gray-900 mb-2">{f.title}</h3>
                <p className="text-[13px] text-gray-400 leading-relaxed">{f.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ── About / Brand Section ── */}
      <section id="about" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
            >
              <span className="inline-block text-[12px] font-semibold tracking-widest text-[#5B4FFF] uppercase mb-4">
                About hoboard
              </span>
              <h2 className="text-[36px] sm:text-[48px] font-bold text-gray-900 tracking-tight leading-tight mb-6">
                키보드에 대한<br />진지한 고민
              </h2>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-6">
                호보드는 기계식 키보드 애호가들이 만든 브랜드입니다. 타이핑 소리부터 무게감, 케이스의 마감까지 모든 디테일에 집착합니다.
              </p>
              <p className="text-[15px] text-gray-500 leading-relaxed mb-8">
                항공급 알루미늄 6063을 직접 CNC 가공해 제작한 케이스, 손수 튜닝한 스위치와 스태빌라이저. 그것이 hoboard입니다.
              </p>
              <div className="flex items-center gap-8">
                {[
                  { num: "12", label: "모델 라인업" },
                  { num: "457", label: "누적 리뷰" },
                  { num: "4.8★", label: "평균 평점" },
                ].map((stat) => (
                  <div key={stat.label}>
                    <div className="text-[28px] font-bold text-gray-900">{stat.num}</div>
                    <div className="text-[12px] text-gray-400 mt-0.5">{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Keyboard showcase stack */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="relative"
            >
              <div className="relative flex flex-col gap-4">
                {showcase.map((kb, i) => (
                  <motion.div
                    key={kb.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.15 }}
                    whileHover={{ scale: 1.02, rotate: 0 }}
                    style={{ rotate: i === 0 ? -2 : i === 1 ? 1 : -1 }}
                    className="bg-[#F7F7F7] rounded-xl overflow-hidden shadow-md border border-gray-100"
                  >
                    <Image
                      src={kb.image}
                      alt={kb.name}
                      width={1200}
                      height={675}
                      className="w-full h-auto"
                    />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <section id="products" className="py-28 px-6 bg-[#FAFAFA]">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-12"
          >
            <div>
              <span className="inline-block text-[12px] font-semibold tracking-widest text-[#5B4FFF] uppercase mb-3">
                Products
              </span>
              <h2 className="text-[36px] sm:text-[48px] font-bold text-gray-900 tracking-tight leading-tight">
                All Keyboards
              </h2>
            </div>
            <Link
              href="/products"
              className="inline-flex items-center gap-2 text-[13px] font-medium text-gray-500 hover:text-gray-900 transition-colors"
            >
              전체 보기
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2.5 7h9M8 4l3.5 3L8 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </Link>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {keyboards.slice(0, 6).map((kb, i) => (
              <ProductCard key={kb.id} keyboard={kb} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className="py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative bg-[#0D0D0D] rounded-3xl px-10 py-16 text-center overflow-hidden"
          >
            <div className="absolute inset-0 opacity-10" style={{
              backgroundImage: "radial-gradient(circle at 50% 0%, #5B4FFF 0%, transparent 70%)"
            }} />
            <div className="relative z-10">
              <h2 className="text-[32px] sm:text-[48px] font-bold text-white tracking-tight mb-4">
                지금 나에게 맞는<br />키보드를 찾아보세요
              </h2>
              <p className="text-[15px] text-white/40 mb-8">
                60%부터 풀 배열까지, 당신의 타이핑 스타일에 딱 맞는 키보드가 있습니다.
              </p>
              <Link
                href="/products"
                className="inline-flex items-center gap-2 px-8 py-4 bg-white text-black text-[14px] font-semibold rounded-full hover:bg-white/90 transition-colors"
              >
                제품 보러 가기
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8h10M9 5l4 3-4 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
