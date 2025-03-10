import { Card } from '@/components/ui/card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Conexões entre Santos | Legenda Áurea',
  description: 'Explore as relações e conexões entre os santos da Legenda Áurea',
}

export default function ConexoesPage() {
  return (
    <div className="container mx-auto py-8 px-2">
      <h1 className="text-3xl font-bold  mb-8">Conexões entre Santos</h1>
      
      <div className="rounded-lg shadow-md">
        <p className="text-lg text-muted-foreground mb-6">
          Descubra as conexões entre os santos da Legenda Áurea. Explore as relações familiares, 
          mentores e discípulos, contemporâneos e outras conexões que formam a rica teia 
          de relacionamentos na história da santidade cristã.
        </p>
        
        <Card className=" rounded-lg p-4 mb-8">
          <p >
            Esta funcionalidade está em desenvolvimento. Em breve você poderá explorar um gráfico interativo 
            mostrando as diversas conexões entre os santos.
          </p>
        </Card>
        
        <Card className="h-96  rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Gráfico de conexões será exibido aqui</p>
        </Card>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className=" p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Tipos de Conexões</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• Familiares (pais, irmãos, filhos)</li>
              <li>• Mestre e discípulo</li>
              <li>• Contemporâneos que se conheceram</li>
              <li>• Participantes do mesmo evento</li>
              <li>• Fundadores da mesma ordem religiosa</li>
            </ul>
          </Card>
          
          <Card className=" p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Exemplos de Conexões</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>• São Basílio e São Gregório Nazianzeno (amigos)</li>
              <li>• Santa Mônica e Santo Agostinho (mãe e filho)</li>
              <li>• São Bento e Santa Escolástica (irmãos gêmeos)</li>
              <li>• São Francisco e Santa Clara (fundadores relacionados)</li>
              <li>• Santo Antão e São Paulo Eremita (encontro histórico)</li>
            </ul>
          </Card>
        </div>
      </div>
    </div>
  )
} 