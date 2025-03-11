import type { Saint } from "@/data/saints"
import { SaintCard } from "@/components/SaintCard"
import { BookOpen } from "lucide-react"

interface SaintsListProps {
  saints: Saint[]
}

export function SaintsList({ saints }: SaintsListProps) {
  const displayedSaints = saints.filter(saint => saint.isDisplayed)

  if (displayedSaints.length === 0) {
    return (
      <div className="py-16 text-center border rounded-lg bg-accent/50 border-border">
        <BookOpen className="w-12 h-12 mx-auto mb-4 text-primary" />
        <p className="font-medium ">Nenhum santo encontrado.</p>
      </div>
    )
  }

  return (
    <div>
      <div className="inline-block px-4 py-2 mb-6 text-sm font-medium rounded-full text-foreground/80">
        {displayedSaints.length === 1 ? "1 santo encontrado" : `${displayedSaints.length} santos encontrados`}
      </div>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
        {displayedSaints.map((saint, index) => (
          <SaintCard key={index} saint={saint} />
        ))}
      </div>
    </div>
  )
}

