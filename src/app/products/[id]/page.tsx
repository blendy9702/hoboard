import { notFound } from "next/navigation"
import ProductDetail from "@/components/ProductDetail"
import { getKeyboardById, keyboards } from "@/data/keyboards"

export function generateStaticParams() {
  return keyboards.map((kb) => ({ id: kb.id }))
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  const keyboard = getKeyboardById(id)

  if (!keyboard) notFound()

  return <ProductDetail keyboard={keyboard} />
}
