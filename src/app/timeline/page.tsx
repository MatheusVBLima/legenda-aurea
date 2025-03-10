import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timeline | Legenda Áurea',
  description: 'Explore os santos da Legenda Áurea em ordem cronológica',
}

export default function TimelinePage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Timeline dos Santos</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg text-gray-700 mb-6">
          Explore os santos da Legenda Áurea através de uma linha do tempo cronológica. 
          Descubra como os santos se distribuem ao longo da história cristã, desde os primeiros 
          mártires até os santos dos séculos mais recentes.
        </p>
        
        <div className="bg-amber-50 border border-amber-100 rounded-lg p-4 mb-8">
          <p className="text-amber-800">
            Esta funcionalidade está em desenvolvimento. Em breve você poderá explorar a timeline 
            completa dos santos da Legenda Áurea.
          </p>
        </div>
        
        <div className="h-96 bg-gray-100 rounded-lg flex items-center justify-center">
          <p className="text-gray-500">Timeline interativa será exibida aqui</p>
        </div>
        
        <div className="mt-8 space-y-4">
          <div className="border-l-4 border-amber-500 pl-4 py-2">
            <div className="font-bold text-amber-900">Século I</div>
            <p className="text-gray-600">Os primeiros mártires cristãos, incluindo os apóstolos</p>
          </div>
          
          <div className="border-l-4 border-amber-500 pl-4 py-2">
            <div className="font-bold text-amber-900">Séculos II-III</div>
            <p className="text-gray-600">Período das grandes perseguições romanas</p>
          </div>
          
          <div className="border-l-4 border-amber-500 pl-4 py-2">
            <div className="font-bold text-amber-900">Séculos IV-V</div>
            <p className="text-gray-600">Padres do deserto, primeiros mosteiros e grande expansão do cristianismo</p>
          </div>
          
          <div className="border-l-4 border-amber-500 pl-4 py-2">
            <div className="font-bold text-amber-900">Séculos VI-X</div>
            <p className="text-gray-600">Santos missionários e fundadores de ordens monásticas</p>
          </div>
          
          <div className="border-l-4 border-amber-500 pl-4 py-2">
            <div className="font-bold text-amber-900">Séculos XI-XIII</div>
            <p className="text-gray-600">Era da Legenda Áurea original, escrita por Jacopo de Varazze</p>
          </div>
        </div>
      </div>
    </div>
  )
} 