import { Card } from '@/components/ui/card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mapa Interativo | Legenda Áurea',
  description: 'Explore a localização geográfica dos santos em um mapa interativo',
}

export default function MapaPage() {
  return (
    <div className="container mx-auto py-8 px-2">
      <h1 className="text-3xl font-bold mb-8">Mapa Interativo dos Santos</h1>
      <div className="rounded-lg shadow-md">
        <p className="text-lg mb-6">
          Explore os santos da Legenda Áurea através de sua distribuição geográfica. Descubra onde viveram, 
          realizaram milagres e foram martirizados ao longo da história cristã.
        </p>
        
        <Card className="rounded-lg p-4 mb-8">
          <p>
            Esta funcionalidade está em desenvolvimento. Em breve você poderá explorar um mapa interativo 
            mostrando a localização dos santos e suas histórias.
          </p>
        </Card>
        
        <Card className="h-96 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Mapa interativo será exibido aqui</p>
        </Card>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className=" p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Filtrar por Região</h3>
            <p className="text-sm text-muted-foreground">Selecione uma região para ver os santos associados a ela.</p>
          </Card>
          
          <Card className=" p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Filtrar por Século</h3>
            <p className="text-sm text-muted-foreground">Filtre os santos conforme o período histórico em que viveram.</p>
          </Card>
          
          <Card className=" p-4 rounded-lg">
            <h3 className="font-semibold mb-2">Filtrar por Tipo</h3>
            <p className="text-sm text-muted-foreground">Veja a distribuição de mártires, confessores, virgens e outros tipos de santos.</p>
          </Card>
        </div>
      </div>
    </div>
  )
} 