import type { Saint } from "@/data/saints"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface SaintCardProps {
  saint: Saint
}

export function SaintCard({ saint }: SaintCardProps) {
  // Função para gerar uma letra inicial decorativa
  const getInitial = () => {
    return saint.name.charAt(0)
  }

  // Criar um slug a partir do nome do santo
  const createSlug = (name: string) => {
    return name
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^\w\s]/g, "")
      .replace(/\s+/g, "-")
  }

  const slug = createSlug(saint.name)

  return (
    <Link href={`/santos/${slug}`} className="block h-full">
      <Card className="h-full transition-all hover:shadow-lg overflow-hidden group">
        <div className="absolute top-0 right-0 w-24 h-24 rounded-bl-full opacity-50 transition-opacity group-hover:opacity-80"></div>
        <CardHeader className="pb-3 relative">
          <div className="flex items-center gap-4">
            <div className="flex-shrink-0 w-12 h-12 rounded-full  flex items-center justify-center border  font-serif text-xl font-bold">
              {getInitial()}
            </div>
            <CardTitle className="text-xl font-serif">{saint.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4 relative">
          <CardDescription className="leading-relaxed">{saint.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}

