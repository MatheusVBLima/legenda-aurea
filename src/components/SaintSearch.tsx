"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"

interface SaintSearchProps {
  onSearch: (searchTerm: string) => void
}

export function SaintSearch({ onSearch }: SaintSearchProps) {
  const [searchTerm, setSearchTerm] = useState("")

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setSearchTerm(value)
    onSearch(value)
  }

  return (
    <div className="w-full max-w-md mb-12">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
          <Search className="w-5 h-5 " />
        </div>
        <Input
          type="text"
          placeholder="Pesquisar santos..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full py-6 pl-10 "
        />
      </div>
    </div>
  )
}

