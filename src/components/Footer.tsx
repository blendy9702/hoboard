"use client"

import Link from "next/link"
import Logo from "./Logo"

export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="mb-4">
              <Logo />
            </div>
            <p className="text-[13px] text-gray-400 leading-relaxed">
              최상의 타이핑 경험을 위한<br />
              프리미엄 기계식 키보드
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-[13px] font-semibold text-gray-900 mb-4">Products</h4>
            <ul className="space-y-3">
              {["60% 레이아웃", "65% 레이아웃", "75% 레이아웃", "TKL 키보드", "풀 배열"].map((item) => (
                <li key={item}>
                  <Link href="/products" className="text-[13px] text-gray-400 hover:text-gray-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-[13px] font-semibold text-gray-900 mb-4">Support</h4>
            <ul className="space-y-3">
              {["FAQ", "배송 안내", "교환/환불", "A/S 신청", "문의하기"].map((item) => (
                <li key={item}>
                  <Link href="#" className="text-[13px] text-gray-400 hover:text-gray-900 transition-colors">
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-[13px] font-semibold text-gray-900 mb-4">뉴스레터</h4>
            <p className="text-[13px] text-gray-400 mb-4 leading-relaxed">
              신제품 출시와 한정 에디션 소식을 가장 먼저 받아보세요.
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="이메일 주소"
                className="flex-1 px-3 py-2 text-[13px] border border-gray-200 rounded-lg outline-none focus:border-[#5B4FFF] transition-colors"
              />
              <button className="px-4 py-2 bg-[#111111] text-white text-[13px] font-medium rounded-lg hover:bg-[#333] transition-colors whitespace-nowrap">
                구독
              </button>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-16 pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-[12px] text-gray-400">
            © 2026 hoboard. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            {["개인정보처리방침", "이용약관"].map((item) => (
              <Link key={item} href="#" className="text-[12px] text-gray-400 hover:text-gray-900 transition-colors">
                {item}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
