import { Metadata } from "next"
import SantosListContainer from "@/components/SantosList"

export const metadata: Metadata = {
  title: "Santos | Legenda Áurea",
  description: "Explore os santos da Legenda Áurea, suas histórias, milagres e devoções",
}

export default function SantosPage() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Santos da Legenda Áurea</h1>
      <SantosListContainer />
    </main>
  )
} 