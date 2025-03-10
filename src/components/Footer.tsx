import { Separator } from "./ui/separator"

export function Footer() {
  return (
    <footer className="py-8 mt-12 space-y-4 bg-gradient-to-t from-amber-50 to-transparent">
      <Separator/>
      <div className="container mx-auto px-4 text-center">
        <div className="w-12 h-12 rounded-full bg-amber-100 flex items-center justify-center mx-auto mb-4">
          <span className=" font-serif text-xl">†</span>
        </div>
        <p className="text-center ">Legenda Áurea - Baseado na obra de Jacopo de Varazze (século XIII)</p>
      </div>
    </footer>
  )
}

