import Image from "next/image"
import Link from "next/link"

interface Props {
  inverted?: boolean
}

export default function Logo({ inverted = false }: Props) {
  return (
    <Link href="/" className="flex items-center gap-2.5 group">
      <Image
        src="/hb_icon.png"
        alt="hoboard"
        width={32}
        height={32}
        className="w-8 h-8 rounded-lg object-cover"
        priority
      />
      <span
        className={`text-[15px] font-bold tracking-tight transition-colors ${
          inverted ? "text-white" : "text-gray-900"
        }`}
      >
        hoboard
      </span>
    </Link>
  )
}
