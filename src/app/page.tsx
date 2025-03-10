"use client"

import { useState } from "react"
import { saints } from "@/data/saints"
import { SaintSearch } from "@/components/SaintSearch"
import { SaintsList } from "@/components/SaintsList"

export default function Home() {
  const [filteredSaints, setFilteredSaints] = useState(saints)

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setFilteredSaints(saints)
      return
    }

    const normalizedSearchTerm = searchTerm
      .toLowerCase()
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")

    const filtered = saints.filter((saint) => {
      const normalizedName = saint.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
      return normalizedName.includes(normalizedSearchTerm)
    })

    setFilteredSaints(filtered)
  }

  return (
    
      <main className="container mx-auto py-8 px-4 flex-grow">
        <SaintSearch onSearch={handleSearch} />
        <SaintsList saints={filteredSaints} />
      </main>
    
  )
}

