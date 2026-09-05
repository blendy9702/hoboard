import Link from "next/link"
import Header from "@/components/Header"
import Footer from "@/components/Footer"

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#FAFAFA] flex flex-col">
      <Header />

      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-20 pb-24 text-center">
        <p className="text-[13px] font-semibold tracking-[0.2em] text-[#5B4FFF] uppercase mb-4">
          Error
        </p>
        <h1 className="text-[72px] sm:text-[96px] font-bold text-gray-900 tracking-tight leading-none">
          404
        </h1>
        <p className="mt-5 text-[16px] text-gray-500 max-w-sm leading-relaxed">
          요청하신 페이지를 찾을 수 없습니다.
          <br />
          주소를 다시 확인하거나 홈으로 이동해 주세요.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center gap-3">
          <Link
            href="/"
            className="w-full sm:w-auto px-7 py-3 bg-[#111111] text-white text-[14px] font-semibold rounded-full hover:bg-[#333] transition-colors"
          >
            홈으로 가기
          </Link>
          <Link
            href="/products"
            className="w-full sm:w-auto px-7 py-3 bg-white text-gray-700 text-[14px] font-medium rounded-full border border-gray-200 hover:border-gray-300 transition-colors"
          >
            제품 둘러보기
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
