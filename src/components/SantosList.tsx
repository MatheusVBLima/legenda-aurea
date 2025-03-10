"use client"

import { useState } from "react"
import { saints } from "@/data/saints"
import { SaintSearch } from "@/components/SaintSearch"
import { SaintsList } from "@/components/SaintsList"

export default function SantosListContainer() {
  const [filteredSaints, setFilteredSaints] = useState(saints)

  const handleSearch = (searchTerm: string) => {
    if (!searchTerm.trim()) {
      setFilteredSaints(saints)
      return
    }

    const searchTermLower = searchTerm.toLowerCase()
    const filtered = saints.filter(
      (saint) =>
        saint.name.toLowerCase().includes(searchTermLower) ||
        saint.description.toLowerCase().includes(searchTermLower)
    )

    setFilteredSaints(filtered)
  }

  return (
    <>
      <SaintSearch onSearch={handleSearch} />
      <SaintsList saints={filteredSaints} />
    </>
  )
} 