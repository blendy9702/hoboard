"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"
import ProductCard from "@/components/ProductCard"
import WordRotator from "@/components/WordRotator"
import FeatureScrollStack from "@/components/FeatureScrollStack"
import { keyboards } from "@/data/keyboards"

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
          <motion.h1
            initial={{ y: 80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="text-[52px] sm:text-[72px] md:text-[90px] font-bold leading-[1.05] tracking-tight"
          >
            <WordRotator />
          </motion.h1>

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

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.55, ease: [0.22, 1, 0.36, 1] }}
            className="mt-16 max-w-4xl mx-auto"
          >
            <Image
              src="/keyboards/keybo.png"
              alt="hoboard TKL"
              width={1600}
              height={900}
              className="w-full h-auto"
              priority
            />
          </motion.div>
        </div>
      </section>

      <FeatureScrollStack />

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
