"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/santos", label: "Santos" },
  { href: "/santo-do-dia", label: "Santo do Dia" },
  { href: "/timeline", label: "Timeline" },
  { href: "/mapa", label: "Mapa" },
  { href: "/conexoes", label: "Conexões" },
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" aria-label="Menu de navegação">
          <Menu className="h-6 w-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full bg-amber-50 border-amber-100">
        <div className="flex flex-col space-y-2 mt-8">
          <h2 className="text-amber-900 text-xl font-medium mb-4">Menu</h2>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-3 rounded-md transition-colors text-lg",
                  pathname === link.href
                    ? "font-medium text-amber-900 bg-amber-100"
                    : "text-amber-700 hover:text-amber-900 hover:bg-amber-100"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
} 