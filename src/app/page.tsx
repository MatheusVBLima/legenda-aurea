import Link from "next/link"
import { saints } from "@/data/saints"
import { ArrowRight, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const saintsWithDetails = saints.filter(saint => saint.isDisplayed).length
  
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="container px-4 mx-auto text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 mx-auto mb-2 bg-primary"></div>
            <div className="w-24 h-1 mx-auto bg-primary"></div>
          </div>
          <h1 className="mb-6 text-4xl font-bold md:text-5xl lg:text-6xl">Legenda Áurea</h1>
          <p className="mb-8 text-xl italic font-medium md:text-2xl">
            Vidas e Histórias dos Santos Cristãos
          </p>
          <p className="max-w-2xl mx-auto mb-8 text-lg text-muted-foreground">
            Explore a rica tradição hagiográfica cristã através de histórias de santos,
            seus milagres, relíquias e devoções ao longo dos séculos.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
           <Button asChild>
              <Link
                href="/santos"
              >
                Explorar Santos
              </Link>
           </Button>
           <Button asChild>
              <Link
                href="/santo-do-dia"
              >
                Santo do Dia
              </Link>
           </Button>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 mx-auto">
          <h2 className="mb-12 font-serif text-2xl font-bold text-center md:text-3xl">
            Explore a Legenda Áurea
          </h2>
          
          <div className="flex items-center justify-center">
            {/* Santo do Dia */}
            <Link href="/santo-do-dia" className="group">
              <Card className="h-full p-6 rounded-lg hover:shadow-md">
                <Calendar className="w-10 h-10 mb-4" />
                <h3 className="mb-2 text-xl font-medium ">Santo do Dia</h3>
                <p className="mb-4 text-muted-foreground">
                  Descubra o santo celebrado hoje e aprenda sobre sua vida, milagres e legado.
                </p>
                <div className="flex items-center text-sm font-medium transition-transform group-hover:translate-x-1">
                  Visitar <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </Card>
            </Link>
            
          
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container px-4 mx-auto text-center">
          <h2 className="mb-12 font-serif text-2xl font-bold md:text-3xl">
            Nossa Biblioteca de Santos
          </h2>
          
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            <Card className="p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-4xl font-bold">{saints.length}</div>
              <div className="text-muted-foreground">Santos Catalogados</div>
            </Card>
            
            <Card className="p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-4xl font-bold">{saintsWithDetails}</div>
              <div className="text-muted-foreground">Biografias Detalhadas</div>
            </Card>
            
            <Card className="p-6 rounded-lg shadow-sm">
              <div className="mb-2 text-4xl font-bold">2</div>
              <div className="text-muted-foreground">Ferramentas de Exploração</div>
            </Card>
          </div>
          
          <div className="mt-12">
            <Button asChild>
              <Link
                href="/santos"
              >
                Ver Todos os Santos <ArrowRight />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </main>
  )
}

