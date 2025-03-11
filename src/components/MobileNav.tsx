"use client"

import Link from "next/link"
import { Menu } from "lucide-react"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { ThemeSwitcher } from "./ThemeSwitcher"
const navLinks = [
  { href: "/", label: "Início" },
  { href: "/santos", label: "Santos" },
  { href: "/santo-do-dia", label: "Santo do Dia" },
 
]

export default function MobileNav() {
  const pathname = usePathname()

  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" className="md:hidden" aria-label="Menu de navegação">
          <Menu className="w-6 h-6" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full bg-background border-border">
        <div className="flex flex-col mt-8 space-y-2">
          <h2 className="mb-4 text-xl font-medium text-center">Menu</h2>
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <Button asChild key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "px-3 py-3 rounded-md transition-colors text-lg",
                    pathname === link.href
                      ? "font-medium "
                      : ""
                  )}
                >
                  {link.label}
                </Link>
              </Button>
            ))}
            <div className="flex w-full "><ThemeSwitcher /></div>
          </nav>
        </div>
      </SheetContent>
    </Sheet>
  )
} 