import Link from "next/link"
import { saints } from "@/data/saints"
import { ArrowRight, Calendar, Globe, Map, Network } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

export default function Home() {
  const saintsWithDetails = saints.filter(saint => saint.isDisplayed).length
  
  return (
    <main>
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-primary mx-auto mb-2"></div>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">Legenda Áurea</h1>
          <p className="text-xl md:text-2xl italic font-medium mb-8">
            Vidas e Histórias dos Santos Cristãos
          </p>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground mb-8">
            Explore a rica tradição hagiográfica cristã através de histórias de santos,
            seus milagres, relíquias e devoções ao longo dos séculos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
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
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center">
            Explore a Legenda Áurea
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Santo do Dia */}
            <Link href="/santo-do-dia" className="group">
              <Card className="rounded-lg p-6 h-full  hover:shadow-md">
                <Calendar className="h-10 w-10  mb-4" />
                <h3 className="text-xl font-medium mb-2 ">Santo do Dia</h3>
                <p className="text-muted-foreground mb-4">
                  Descubra o santo celebrado hoje e aprenda sobre sua vida, milagres e legado.
                </p>
                <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Visitar <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Card>
            </Link>
            
            <Link href="/timeline" className="group">
              <Card className="rounded-lg p-6 h-full  hover:shadow-md">
                <Network className="h-10 w-10  mb-4" />
                <h3 className="text-xl font-medium mb-2 ">Timeline</h3>
                <p className="text-muted-foreground mb-4">
                  Explore os santos organizados cronologicamente ao longo da história cristã.
                </p>
                <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Visitar <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Card>
            </Link>
            
            <Link href="/mapa" className="group">
              <Card className="rounded-lg p-6 h-full  hover:shadow-md">
                <Map className="h-10 w-10  mb-4" />
                <h3 className="text-xl font-medium mb-2 ">Mapa Interativo</h3>
                <p className="text-muted-foreground mb-4">
                  Descubra a distribuição geográfica dos santos e suas histórias locais.
                </p>
                <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Visitar <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Card>
            </Link>
            
            <Link href="/conexoes" className="group">
              <Card className="rounded-lg p-6 h-full  hover:shadow-md">
                <Globe className="h-10 w-10  mb-4" />
                <h3 className="text-xl font-medium mb-2 ">Conexões</h3>
                <p className="text-muted-foreground mb-4">
                  Explore as relações entre os santos, suas famílias e influências mútuas.
                </p>
                <div className="flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Visitar <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </Card>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12">
            Nossa Biblioteca de Santos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2">{saints.length}</div>
              <div className="text-muted-foreground">Santos Catalogados</div>
            </Card>
            
            <Card className="p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2">{saintsWithDetails}</div>
              <div className="text-muted-foreground">Biografias Detalhadas</div>
            </Card>
            
            <Card className="p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold mb-2">5</div>
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

