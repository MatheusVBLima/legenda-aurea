import { Card } from '@/components/ui/card'
import { Metadata } from 'next'
import Link from 'next/link'
import { saints } from '@/data/saints'
import { Button } from '@/components/ui/button'

export const metadata: Metadata = {
  title: 'Santo do Dia | Legenda Áurea',
  description: 'Conheça o santo celebrado hoje segundo a Legenda Áurea',
}

export default function SantoDoDiaPage() {
  const today = new Date()
  const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' }
  const dateString = today.toLocaleDateString('pt-BR', options)
  const formattedDate = `${dateString.split(' de ')[0]} de ${dateString.split(' de ')[1]}`

  const filteredSaints = saints.filter(saint => 
    saint.data_devocao?.toLowerCase() === formattedDate.toLowerCase()
  )

  return (
    <div className="container mx-auto py-8 px-2">
      <h1 className="text-3xl font-bold mb-8">Santo do Dia</h1>
      <div className="p-4 rounded-lg shadow-md bg-card text-card-foreground border border-border">
        {filteredSaints.length === 0 ? (
          <div className="text-center py-8">
            <div className="inline-block rounded-full bg-secondary p-6 mb-6">
              <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center">
                <span className="text-4xl">📅</span>
              </div>
            </div>
            <h2 className="text-2xl font-semibold mb-2">Sem celebração para hoje</h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Não encontramos nenhum santo com celebração para {formattedDate} em nosso calendário litúrgico.
            </p>
            
            <div className="flex items-center justify-center gap-6 max-w-2xl mx-auto mt-8">
              <Card className="p-6 border border-border hover:border-primary/50 transition-colors">
                <div className="flex flex-col items-center">
                  <div className="rounded-full bg-secondary p-3 mb-3">
                    <span className="text-xl">🔍</span>
                  </div>
                  <h3 className="font-semibold mb-2">Explorar todos os santos</h3>
                  <p className="text-sm text-muted-foreground mb-4">Conheça todos os santos da Legenda Áurea</p>
                  <Button asChild>
                    <Link href="/santos" className="flex items-center">
                      <span>Ver todos os santos</span>
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </Link>
                  </Button>
                </div>
              </Card>
              
             
            </div>
            
            <div className="mt-10 bg-secondary p-6 rounded-lg max-w-2xl mx-auto border border-border">
              <h3 className="font-semibold mb-2">Você sabia?</h3>
              <p className="text-sm text-foreground/80">
                A Legenda Áurea foi compilada por Tiago de Varazze no século XIII e contém relatos sobre a vida dos santos 
                que moldaram a devoção popular medieval. Nem todos os dias do ano possuem um santo específico, 
                pois o calendário litúrgico medieval organizava as celebrações de forma diferente do atual.
              </p>
            </div>
          </div>
        ) : (
          filteredSaints.map((saint) => (
            <div key={saint.name}>
              <div className="text-center mb-6">
                <div className="inline-block rounded-full bg-accent p-6 mb-4">
                  <div className="w-24 h-24 rounded-full bg-accent flex items-center justify-center">
                    <span className="text-4xl">🙏</span>
                  </div>
                </div>
                <h2 className="text-2xl font-semibold">{saint.name}</h2>
                <p className="text-muted-foreground">{saint.data_devocao}</p>
              </div>
              
              <div className="prose prose-accent max-w-none">
                <p>{saint.description}</p>
                
                {saint.additionalInfo?.biografia && (
                  <>
                    <h3 className="text-xl font-semibold mt-6">Biografia</h3>
                    <p>{saint.additionalInfo.biografia}</p>
                  </>
                )}

                {saint.additionalInfo?.milagres && (
                  <>
                    <h3 className="text-xl font-semibold mt-6">Milagres</h3>
                    <p>{saint.additionalInfo.milagres}</p>
                  </>
                )}

                <Link href="/santos" className="font-medium inline-flex items-center mt-4">
                  <span>Descubra mais santos</span>
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </Link>
              </div>
              
              <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {saint.additionalInfo?.milagres && (
                  <Card className="p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Milagres</h3>
                    <p className="text-sm text-muted-foreground">
                      {saint.additionalInfo.milagres.split('\n')[0]}
                    </p>
                  </Card>
                )}
                
                {saint.additionalInfo?.reliquias && (
                  <Card className="p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Relíquias</h3>
                    <p className="text-sm text-muted-foreground">
                      {saint.additionalInfo.reliquias.split('\n')[0]}
                    </p>
                  </Card>
                )}
                
                {saint.additionalInfo?.devocao && (
                  <Card className="p-4 rounded-lg">
                    <h3 className="font-semibold mb-2">Devoção</h3>
                    <p className="text-sm text-muted-foreground">
                      {saint.additionalInfo.devocao.split('\n')[0]}
                    </p>
                  </Card>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  )
} 