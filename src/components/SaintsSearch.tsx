"use client"

import { useState } from "react"
import { Input } from "./ui/input"
import { Search } from "lucide-react"

interface SaintSearchProps {
  onSearch: (searchTerm: string) => void
}

export function SaintSearch({ onSearch }: SaintSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSearch(searchTerm)
  }

  return (
    <form onSubmit={handleSubmit} className="mb-8">
      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Busque por um santo..."
          className="pl-10 bg-background border-border focus-visible:ring-primary"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </form>
  )
} 