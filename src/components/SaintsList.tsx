import type { Saint } from "@/data/saints"
import { SaintCard } from "@/components/SaintCard"
import { BookOpen } from "lucide-react"

interface SaintsListProps {
  saints: Saint[]
}

export function SaintsList({ saints }: SaintsListProps) {
  if (saints.length === 0) {
    return (
      <div className="text-center py-16 bg-amber-50/50 rounded-lg border border-amber-100">
        <BookOpen className="h-12 w-12 mx-auto text-amber-300 mb-4" />
        <p className="text-amber-700 font-medium">Nenhum santo encontrado.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="mb-6 text-sm font-medium inline-block px-4 py-2 rounded-full">
        {saints.length === 1 ? "1 santo encontrado" : `${saints.length} santos encontrados`}
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {saints.map((saint, index) => (
          <SaintCard key={index} saint={saint} />
        ))}
      </div>
    </div>
  )
}

