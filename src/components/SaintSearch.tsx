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
    <div className="w-full max-w-md mx-auto mb-12">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
          <Search className="h-5 w-5 " />
        </div>
        <Input
          type="text"
          placeholder="Pesquisar santos..."
          value={searchTerm}
          onChange={handleSearch}
          className="w-full pl-10 py-6 "
        />
      </div>
    </div>
  )
}

