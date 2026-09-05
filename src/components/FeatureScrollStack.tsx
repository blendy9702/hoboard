"use client"

import { useRef } from "react"
import Image from "next/image"
import { motion, useScroll, useTransform } from "framer-motion"

const FEATURES = [
  {
    index: "01",
    title: "가스켓 마운트",
    desc: "플레이트와 케이스 사이에 부드러운 가스켓을 두어, 단단하면서도 탄탄한 타이핑감을 만듭니다. 진동을 고르게 분산해 장시간에도 손목이 편안합니다.",
    image: "/keyboards/gasket_mount.jpg",
    tag: "Mount",
  },
  {
    index: "02",
    title: "핫스왑 소켓",
    desc: "납땜 없이 스위치를 꽂고 빼는 핫스왑 소켓. 리니어, 택타일, 클리키를 취향대로 바꿔 나만의 타건음을 완성하세요.",
    image: "/features/hotswap.png",
    tag: "Hot-swap",
  },
  {
    index: "03",
    title: "3모드 연결",
    desc: "유선 USB-C, 블루투스 5.0, 2.4GHz 무선까지. 데스크와 노트북, 태블릿을 넘나들며 어디서든 같은 타이핑을 유지합니다.",
    image: "/features/wireless.png",
    tag: "Wireless",
  },
  {
    index: "04",
    title: "Per-key RGB",
    desc: "키마다 독립적으로 빛나는 RGB. 레이어와 매크로를 색으로 구분하고, 책상 위 분위기를 원하는 대로 바꾸세요.",
    image: "/features/rgb.png",
    tag: "Lighting",
  },
]

function StackCard({
  feature,
  index,
}: {
  feature: (typeof FEATURES)[number]
  index: number
}) {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "start 20%"],
  })
  const scale = useTransform(scrollYProgress, [0, 1], [0.92, 1])
  const opacity = useTransform(scrollYProgress, [0, 0.4, 1], [0.55, 0.85, 1])

  return (
    <div
      ref={ref}
      className="sticky mb-[55vh] last:mb-0"
      style={{ top: 96 + index * 22, zIndex: index + 1 }}
    >
      <motion.article
        style={{ scale, opacity }}
        className="overflow-hidden rounded-3xl border border-gray-100 bg-white shadow-[0_20px_60px_-24px_rgba(17,17,17,0.18)]"
      >
        <div className="grid grid-cols-1 md:grid-cols-2">
          <div className="relative aspect-[16/10] md:aspect-auto md:min-h-[380px] bg-[#F4F4F5]">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              className="object-cover"
              sizes="(min-width: 768px) 50vw, 100vw"
            />
          </div>

          <div className="flex flex-col justify-center px-8 py-10 sm:px-12">
            <div className="flex items-center justify-between gap-3 mb-6">
              <span className="text-[12px] font-semibold tracking-[0.18em] text-[#5B4FFF] uppercase">
                {feature.tag}
              </span>
              <span className="text-[13px] font-medium text-gray-300">
                {feature.index} / 04
              </span>
            </div>
            <h3 className="text-[32px] sm:text-[40px] font-bold text-gray-900 tracking-tight leading-tight">
              {feature.title}
            </h3>
            <p className="mt-4 text-[15px] text-gray-500 leading-relaxed">
              {feature.desc}
            </p>
          </div>
        </div>
      </motion.article>
    </div>
  )
}

export default function FeatureScrollStack() {
  return (
    <section id="features" className="relative px-6 pt-28">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block text-[12px] font-semibold tracking-widest text-[#5B4FFF] uppercase mb-4">
            Features
          </span>
          <h2 className="text-[36px] sm:text-[48px] font-bold text-gray-900 tracking-tight leading-tight">
            타협 없는<br />프리미엄 사양
          </h2>
        </div>

        {FEATURES.map((feature, index) => (
          <StackCard key={feature.title} feature={feature} index={index} />
        ))}

        <div className="h-[70vh]" aria-hidden />
      </div>
    </section>
  )
}
