import { Separator } from "./ui/separator"

export function Header() {
  return (
    <header className="py-4 bg-gradient-to-b from-amber-50 to-transparent space-y-4">
      <div className="container mx-auto px-4 text-center">
        <div className="inline-block mb-4">
          <div className="w-16 h-1 bg-amber-500 mx-auto mb-2"></div>
          <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
        </div>
        <h1 className="text-4xl font-serif font-bold">Legenda Áurea</h1>
        <p className="text-lg  italic font-medium">Vidas e Histórias dos Santos </p>
        <div className="inline-block mt-4">
          <div className="w-24 h-1 bg-amber-500 mx-auto mb-2"></div>
          <div className="w-16 h-1 bg-amber-500 mx-auto"></div>
        </div>
      </div>
      <Separator />
    </header>
  )
}

