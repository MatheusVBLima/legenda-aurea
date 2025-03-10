"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

export function Navigation() {
  const pathname = usePathname()

  const links = [
    { href: "/", label: "Início" },
    { href: "/santos", label: "Santos" },
    { href: "/santo-do-dia", label: "Santo do Dia" },
    { href: "/timeline", label: "Timeline" },
    { href: "/mapa", label: "Mapa" },
    { href: "/conexoes", label: "Conexões" },
  ]

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-1 lg:gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm lg:text-base transition-colors hover:text-amber-900 hover:bg-amber-100",
                pathname === link.href
                  ? "font-medium text-amber-900 bg-amber-100"
                  : "text-amber-700"
              )}
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  )
} 