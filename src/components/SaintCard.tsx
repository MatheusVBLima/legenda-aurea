import type { Saint } from "@/data/saints"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

interface SaintCardProps {
  saint: Saint
}

export function SaintCard({ saint }: SaintCardProps) {

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
        <CardHeader className="pb-3 relative">
          <div className="flex items-center gap-4">
            <CardTitle className="text-xl font-serif text-foreground">{saint.name}</CardTitle>
          </div>
        </CardHeader>
        <CardContent className="pt-4 relative">
          <CardDescription className="leading-relaxed text-foreground/80">{saint.description}</CardDescription>
        </CardContent>
      </Card>
    </Link>
  )
}

