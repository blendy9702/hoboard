import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "hoboard — 최상의 타이핑 경험",
  description: "프리미엄 기계식 키보드의 새로운 기준, 호보드. 60%부터 풀 배열까지 다양한 레이아웃의 알루미늄 키보드.",
  keywords: ["기계식 키보드", "알루미늄 키보드", "hoboard", "호보드", "커스텀 키보드"],
  icons: {
    icon: "/hb_icon.png",
    apple: "/hb_icon.png",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko" data-scroll-behavior="smooth">
      <body>{children}</body>
    </html>
  )
}
