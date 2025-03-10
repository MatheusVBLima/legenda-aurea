import { Metadata } from 'next'
import Link from 'next/link'

export const metadata: Metadata = {
  title: 'Santo do Dia | Legenda Áurea',
  description: 'Conheça o santo celebrado hoje segundo a Legenda Áurea',
}

export default function SantoDoDiaPage() {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-amber-900 mb-8">Santo do Dia</h1>
      
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="text-center mb-6">
          <div className="inline-block rounded-full bg-amber-100 p-6 mb-4">
            <div className="w-24 h-24 rounded-full bg-amber-200 flex items-center justify-center">
              <span className="text-4xl text-amber-800">🙏</span>
            </div>
          </div>
          <h2 className="text-2xl font-semibold text-amber-900">São Remígio</h2>
          <p className="text-gray-600">13 de janeiro</p>
        </div>
        
        <div className="prose prose-amber max-w-none">
          <p>
            São Remígio foi Arcebispo de Reims e é conhecido principalmente por ter batizado Clóvis I, 
            rei dos Francos, evento que marcou o início da conversão dos francos ao cristianismo.
          </p>
          
          <blockquote className="border-l-4 border-amber-300 pl-4 italic bg-amber-50 p-3 rounded-r-md">
            "Para adorar o que queimaste e queimar o que adoraste." 
            <footer className="text-right text-sm">— Palavras de São Remígio a Clóvis durante seu batismo</footer>
          </blockquote>
          
          <p>
            Remígio nasceu em Laon, França, por volta do ano 437, em uma nobre família galo-romana. 
            Com apenas 22 anos, foi escolhido para ser Bispo de Reims, cargo que ocupou por impressionantes 
            70 anos. Seu episcopado foi marcado por grande sabedoria e santidade.
          </p>
          
          <Link href="/santos" className="text-amber-700 hover:text-amber-900 font-medium inline-flex items-center mt-4">
            <span>Descubra mais santos</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-1" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
        
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="font-semibold text-amber-900 mb-2">Milagres</h3>
            <p className="text-sm text-gray-700">
              São Remígio realizou diversos milagres, incluindo a cura de cegos e a ressuscitação de uma jovem.
            </p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="font-semibold text-amber-900 mb-2">Relíquias</h3>
            <p className="text-sm text-gray-700">
              Suas relíquias são veneradas na Basílica de Saint-Remi em Reims, França.
            </p>
          </div>
          
          <div className="bg-amber-50 p-4 rounded-lg">
            <h3 className="font-semibold text-amber-900 mb-2">Patrono</h3>
            <p className="text-sm text-gray-700">
              É invocado como patrono da França e protetor contra epidemias.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
} 