import Link from "next/link"
import { Button } from "./ui/button"
import { ThemeSwitcher } from "./ThemeSwitcher"

export function Navigation() {
 

  const links = [
    { href: "/", label: "Início" },
    { href: "/santos", label: "Santos" },
    { href: "/santo-do-dia", label: "Santo do Dia" },
 
  ]

  return (
    <nav className="hidden md:block">
      <ul className="flex items-center gap-1 lg:gap-2">
        {links.map((link) => (
          <li key={link.href}>
            <Button asChild size="sm">
              <Link
                href={link.href}
               
              >
                {link.label}
              </Link>
            </Button>
          </li>
        ))}
        <ThemeSwitcher />
      </ul>
    </nav>
  )
} 