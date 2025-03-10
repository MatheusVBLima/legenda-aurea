import { Card } from '@/components/ui/card'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Timeline | Legenda Áurea',
  description: 'Explore os santos da Legenda Áurea em ordem cronológica',
}

export default function TimelinePage() {
  return (
    <div className="container mx-auto py-8 px-2">
      <h1 className="text-3xl font-bold mb-8">Timeline dos Santos</h1>
      
      <div className="rounded-lg shadow-md">
        <p className="text-lg  mb-6">
          Explore os santos da Legenda Áurea através de uma linha do tempo cronológica. 
          Descubra como os santos se distribuem ao longo da história cristã, desde os primeiros 
          mártires até os santos dos séculos mais recentes.
        </p>
        
        <Card className="rounded-lg p-4 mb-8">
          <p className="">
            Esta funcionalidade está em desenvolvimento. Em breve você poderá explorar a timeline 
            completa dos santos da Legenda Áurea.
          </p>
        </Card>
        
        <Card className="h-96 rounded-lg flex items-center justify-center">
          <p className="text-muted-foreground">Timeline interativa será exibida aqui</p>
        </Card>
        
        <div className="mt-8 space-y-4">
          <Card className="pl-4 py-2">
            <div className="font-bold">Século I</div>
            <p >Os primeiros mártires cristãos, incluindo os apóstolos</p>
          </Card>
          
          <Card className="pl-4 py-2">
            <div className="font-bold">Séculos II-III</div>
            <p >Período das grandes perseguições romanas</p>
          </Card>
          
          <Card className="pl-4 py-2">
            <div className="font-bold">Séculos IV-V</div>
            <p >Padres do deserto, primeiros mosteiros e grande expansão do cristianismo</p>
          </Card>
          
          <Card className="pl-4 py-2">
            <div className="font-bold">Séculos VI-X</div>
            <p >Santos missionários e fundadores de ordens monásticas</p>
          </Card>
          
          <Card className="pl-4 py-2">
            <div className="font-bold">Séculos XI-XIII</div>
            <p >Era da Legenda Áurea original, escrita por Jacopo de Varazze</p>
          </Card>
        </div>
      </div>
    </div>
  )
} 