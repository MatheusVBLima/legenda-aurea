"use client"

import Link from "next/link"
import { Navigation } from "./Navigation"
import dynamic from "next/dynamic"
import { Separator } from "./ui/separator"

const MobileNav = dynamic(() => import("./MobileNav"), { ssr: false })

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full backdrop-blur-sm">
      <div className="border-b border-amber-100">
        <div className="container mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center">
              <Link href="/" className="flex items-center space-x-2">
                <div>
                  <h1 className="text-amber-900 font-serif font-bold text-xl">Legenda Áurea</h1>
                  <p className="text-xs text-amber-600 italic -mt-1">Vidas e Histórias dos Santos</p>
                </div>
              </Link>
            </div>
            <Navigation />
            <MobileNav />
          </div>
        </div>
      </div>
      <Separator/>
    </header>
  )
}

