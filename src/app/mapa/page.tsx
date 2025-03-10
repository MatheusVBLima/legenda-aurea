import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Mapa Interativo | Legenda Áurea',
  description: 'Explore a localização geográfica dos santos em um mapa interativo',
}

export default function MapaPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Mapa Interativo dos Santos</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-6">
          Explore os santos da Legenda Áurea através de sua distribuição geográfica. Descubra onde viveram, 
          realizaram milagres e foram martirizados ao longo da história cristã.
        </p>
        
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-8">
          <p className="text-amber-800">
            Esta funcionalidade está em desenvolvimento. Em breve você poderá explorar um mapa interativo 
            mostrando a localização dos santos e suas histórias.
          </p>
        </div>
        
        <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Mapa interativo será exibido aqui</p>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <h3 className="font-semibold text-amber-900 mb-2">Filtrar por Região</h3>
            <p className="text-sm text-gray-600">Selecione uma região para ver os santos associados a ela.</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <h3 className="font-semibold text-amber-900 mb-2">Filtrar por Século</h3>
            <p className="text-sm text-gray-600">Filtre os santos conforme o período histórico em que viveram.</p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg border border-amber-100">
            <h3 className="font-semibold text-amber-900 mb-2">Filtrar por Tipo</h3>
            <p className="text-sm text-gray-600">Veja a distribuição de mártires, confessores, virgens e outros tipos de santos.</p>
          </div>
        </div>
      </div>
    </div>
  )
} 