import Link from "next/link"
import { saints } from "@/data/saints"
import { ArrowRight, Calendar, Globe, Map, Network } from "lucide-react"

export default function Home() {
  // Contar os santos com informações detalhadas
  const saintsWithDetails = saints.filter(saint => saint.isDisplayed).length
  
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-amber-50/70 to-white">
        <div className="container mx-auto px-4 text-center">
          <div className="inline-block mb-6">
            <div className="w-16 h-1 bg-amber-500 mx-auto mb-2"></div>
            <div className="w-24 h-1 bg-amber-500 mx-auto"></div>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">Legenda Áurea</h1>
          <p className="text-xl md:text-2xl italic font-medium mb-8 text-amber-900/80">
            Vidas e Histórias dos Santos Cristãos
          </p>
          <p className="max-w-2xl mx-auto text-lg text-gray-700 mb-8">
            Explore a rica tradição hagiográfica cristã através de histórias de santos,
            seus milagres, relíquias e devoções ao longo dos séculos.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/santos"
              className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium"
            >
              Explorar Santos
            </Link>
            <Link
              href="/santo-do-dia"
              className="px-6 py-3 bg-white border border-amber-300 text-amber-700 rounded-lg hover:bg-amber-50 transition-colors font-medium"
            >
              Santo do Dia
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12 text-center">
            Explore a Legenda Áurea
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Santo do Dia */}
            <Link href="/santo-do-dia" className="group">
              <div className="bg-amber-50 rounded-lg p-6 h-full border border-amber-100 transition-all hover:shadow-md">
                <Calendar className="h-10 w-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium mb-2 text-amber-900">Santo do Dia</h3>
                <p className="text-gray-700 mb-4">
                  Descubra o santo celebrado hoje e aprenda sobre sua vida, milagres e legado.
                </p>
                <div className="text-amber-600 flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Visitar <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>
            
            {/* Timeline */}
            <Link href="/timeline" className="group">
              <div className="bg-amber-50 rounded-lg p-6 h-full border border-amber-100 transition-all hover:shadow-md">
                <Network className="h-10 w-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium mb-2 text-amber-900">Timeline</h3>
                <p className="text-gray-700 mb-4">
                  Explore os santos organizados cronologicamente ao longo da história cristã.
                </p>
                <div className="text-amber-600 flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Visitar <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>
            
            {/* Mapa */}
            <Link href="/mapa" className="group">
              <div className="bg-amber-50 rounded-lg p-6 h-full border border-amber-100 transition-all hover:shadow-md">
                <Map className="h-10 w-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium mb-2 text-amber-900">Mapa Interativo</h3>
                <p className="text-gray-700 mb-4">
                  Descubra a distribuição geográfica dos santos e suas histórias locais.
                </p>
                <div className="text-amber-600 flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Visitar <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>
            
            {/* Conexões */}
            <Link href="/conexoes" className="group">
              <div className="bg-amber-50 rounded-lg p-6 h-full border border-amber-100 transition-all hover:shadow-md">
                <Globe className="h-10 w-10 text-amber-600 mb-4" />
                <h3 className="text-xl font-medium mb-2 text-amber-900">Conexões</h3>
                <p className="text-gray-700 mb-4">
                  Explore as relações entre os santos, suas famílias e influências mútuas.
                </p>
                <div className="text-amber-600 flex items-center text-sm font-medium group-hover:translate-x-1 transition-transform">
                  Visitar <ArrowRight className="h-4 w-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-amber-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold mb-12">
            Nossa Biblioteca de Santos
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-amber-600 mb-2">{saints.length}</div>
              <div className="text-gray-700">Santos Catalogados</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-amber-600 mb-2">{saintsWithDetails}</div>
              <div className="text-gray-700">Biografias Detalhadas</div>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <div className="text-4xl font-bold text-amber-600 mb-2">5</div>
              <div className="text-gray-700">Ferramentas de Exploração</div>
            </div>
          </div>
          
          <div className="mt-12">
            <Link
              href="/santos"
              className="px-6 py-3 bg-amber-600 text-white rounded-lg hover:bg-amber-700 transition-colors font-medium inline-flex items-center"
            >
              Ver Todos os Santos <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </main>
  )
}

