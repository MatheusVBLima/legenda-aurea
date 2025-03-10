export interface Saint {
    name: string;
    description: string;
    additionalInfo?: {
        biografia?: string;
        milagres?: string;
        reliquias?: string;
        devocao?: string;
    };
    isDisplayed?: boolean;
}

export const saints: Saint[] = [
    {
        name: "São Paulo, o Primeiro Eremita",
        description: "Primeiro eremita cristão, viveu 113 anos no deserto, enterrado por leões enviados por Deus.",
        additionalInfo: {
            biografia: `
                São Paulo de Tebas, também conhecido como São Paulo, o Primeiro Eremita, nasceu na Tebaida, Egito, por volta do ano 228 e faleceu em 330, vivendo aproximadamente 113 anos. Ele é considerado o primeiro eremita cristão conhecido.

                Durante a perseguição do imperador romano Décio, por volta do ano 250, Paulo fugiu para o deserto após ser denunciado por familiares que desejavam se apoderar de sua herança. Ele era de uma família rica e havia recebido excelente educação, sendo versado na cultura egípcia e no idioma grego.

                Ao invés de retornar à cidade após o fim da perseguição, Paulo decidiu permanecer no deserto, onde viveu em completa solidão por quase 90 anos. Segundo a tradição, ele se alimentava do pão que era trazido diariamente por um corvo, enviado por Deus.
            `,
            milagres: `
                Embora São Paulo tenha vivido em isolamento, vários milagres são atribuídos a ele:

                1. O milagre do corvo: Durante toda sua vida no deserto, um corvo trazia diariamente metade de um pão para alimentá-lo, demonstrando o cuidado divino.

                2. Quando Santo Antão do Deserto o visitou, o corvo trouxe um pão inteiro, suficiente para os dois.

                3. Após sua morte, dois leões apareceram e cavaram sua sepultura, demonstrando como até os animais selvagens respeitavam sua santidade.

                4. Sua túnica de folhas de palmeira, que Santo Antão herdou, foi usada em ocasiões solenes e teria realizado curas milagrosas.
            `,
            reliquias: `
                As relíquias de São Paulo, o Primeiro Eremita, têm uma história interessante:

                1. Inicialmente, seu corpo foi enterrado por Santo Antão no deserto.

                2. No século XII, suas relíquias foram levadas para Constantinopla.

                3. Durante o reinado de Luís I da Hungria, o relicário com seu corpo foi transferido clandestinamente de Veneza para a Hungria em 4 de outubro de 1381.

                4. As relíquias foram veneradas primeiro na capela real do palácio da cidade de Buda e depois, em 14 de novembro, foram levadas ao mosteiro da Ordem Paulina de Budaszentlőric.

                5. O relicário da cabeça de São Paulo estava no castelo de Karlstein na Boêmia até 1523, quando foi entregue ao rei Luís II da Hungria.

                6. Após a invasão turco-otomana de 1521, o paradeiro exato dos restos de São Paulo é desconhecido, presumindo-se que foram destruídos.

                7. Atualmente, existem algumas relíquias menores na igreja de Santa Maria in Porto, em Ravena, Itália.
            `,
            devocao: `
                São Paulo, o Primeiro Eremita, é venerado como o patrono dos eremitas e monges. Sua festa litúrgica é celebrada em:

                - 15 de janeiro na Igreja Católica
                - 5 de janeiro na Igreja Ortodoxa
                - 9 de fevereiro na Igreja Copta

                Na iconografia cristã, ele é representado como um idoso vestido com uma túnica de folhas de palmeira, frequentemente acompanhado por um corvo trazendo pão e dois leões. Muitas vezes aparece junto a Santo Antão do Deserto.

                A Ordem de São Paulo, o Primeiro Eremita (monges paulinos), foi fundada na Hungria no século XIII pelo beato Eusébio de Esztergom, inspirada na vida deste santo.

                São Paulo é invocado como intercessor para aqueles que buscam uma vida de simplicidade, solidão contemplativa e proteção contra perseguições.
            `
        }
    },
    {
        name: "São Remígio",
        description: "Arcebispo de Reims, batizou Clodovius, rei dos francos, e realizou numerosos milagres.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Remígio nasceu em Laon, França, por volta do ano 437, em uma nobre família galo-romana. Desde jovem, destacou-se por sua inteligência e eloquência, o que lhe rendeu grande admiração. Sua fama se espalhou de tal forma que, em 459, com apenas 22 anos de idade, foi escolhido para ser Bispo de Reims após o falecimento do bispo anterior.

                Apesar de sua juventude, Remígio demonstrou grande sabedoria e santidade em seu ministério episcopal. São Gregório de Tours o descreveu como "um Bispo de notável ciência, primeiro impregnado do estudo da retórica, mas que se distinguia também pela santidade, igualando-se a São Silvestre nos milagres".

                Seu episcopado durou impressionantes 70 anos, durante os quais ele testemunhou a queda do Império Romano do Ocidente e o surgimento de uma nova era. Seu momento mais significativo foi o batismo do rei franco Clóvis I (Clodovius) em 496, evento que marcou o início da conversão dos francos ao cristianismo e lançou as bases para a formação da França cristã.

                São Remígio faleceu em 13 de janeiro de 530, aos 93 anos de idade, após uma vida dedicada à evangelização e à consolidação da fé cristã na Gália.
            `,
            milagres: `
                São Remígio realizou diversos milagres durante sua vida e após sua morte:

                1. O milagre do crisma: Durante o batismo do rei Clóvis, conta-se que a pomba que trazia o óleo sagrado não conseguiu chegar a tempo. Milagrosamente, uma pomba branca desceu do céu trazendo uma ampola com o santo crisma para a cerimônia.

                2. Ressurreição: Segundo relatos, São Remígio ressuscitou uma jovem que havia falecido, demonstrando seu poder sobre a morte.

                3. Multiplicação de vinho: Em uma ocasião quando o vinho acabou durante uma refeição com convidados, São Remígio abençoou um barril vazio que imediatamente se encheu de vinho de excelente qualidade.

                4. Cura de cegos: Diversos relatos mencionam que ele curou pessoas cegas através de suas orações e imposição de mãos.

                5. Expulsão de demônios: São Remígio era conhecido por seu poder de exorcizar demônios, libertando muitas pessoas atormentadas.

                6. Conversão milagrosa: A própria conversão do rei Clóvis é considerada milagrosa, pois ocorreu após o rei invocar o "Deus de Remígio" durante uma batalha que estava perdendo, e conseguir uma vitória improvável.
            `,
            reliquias: `
                As relíquias de São Remígio têm uma história de grande veneração:

                1. Inicialmente, seu corpo foi sepultado na igreja de São Cristóvão em Reims.

                2. Posteriormente, seus restos mortais foram transferidos para a Basílica de São Remígio, construída especialmente para abrigar suas relíquias no século XI.

                3. A ampola sagrada (Sainte Ampoule) que continha o óleo milagroso usado no batismo de Clóvis foi preservada e utilizada nas coroações dos reis da França por séculos, até ser parcialmente destruída durante a Revolução Francesa.

                4. Atualmente, suas relíquias principais estão preservadas em uma urna ornamentada na Basílica de São Remígio em Reims, França, que se tornou um importante centro de peregrinação.

                5. Fragmentos de suas relíquias foram distribuídos para várias igrejas na França e em outros países europeus ao longo dos séculos.
            `,
            devocao: `
                São Remígio é venerado como um dos santos patronos da França e é considerado o "Apóstolo dos Francos". Sua festa litúrgica é celebrada em:

                - 1º de outubro na Igreja Católica (data principal)
                - 13 de janeiro (data de sua morte) em algumas regiões

                Na iconografia cristã, São Remígio é geralmente representado como um bispo com vestes pontificais, frequentemente retratado no momento do batismo do rei Clóvis ou com uma pomba trazendo a ampola sagrada.

                É invocado como protetor contra epidemias, doenças dos olhos e como intercessor para a conversão de pessoas afastadas da fé. Também é considerado patrono dos estudantes de retórica e oratória, devido à sua eloquência.

                A devoção a São Remígio é particularmente forte na cidade de Reims e em toda a região de Champagne, na França, onde muitas igrejas, capelas e instituições levam seu nome.
            `
        }
    },
    {
        name: "São Sebastião",
        description: "Soldado romano que sobreviveu a flechadas e foi martirizado por defender os cristãos.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Sebastião nasceu em Narbona, na França, por volta do ano 256, mas foi criado em Milão, na Itália, cidade de origem de sua mãe. Recebeu educação cristã, embora tenha optado pela carreira militar, seguindo os passos de seu pai.

                Mudou-se para Roma e alistou-se no exército imperial, onde rapidamente se destacou por sua coragem e lealdade. Conquistou a confiança do imperador Diocleciano, que o nomeou capitão da Guarda Pretoriana, uma posição de grande prestígio responsável pela segurança da família imperial.

                Secretamente, Sebastião era cristão em uma época em que o cristianismo era perseguido. Aproveitando sua posição privilegiada, visitava os cristãos presos, levando-lhes conforto espiritual e fortalecendo sua fé. Muitos prisioneiros e até mesmo soldados se converteram ao cristianismo por influência de suas palavras.

                Quando sua fé cristã foi descoberta, o imperador Diocleciano, sentindo-se traído, ordenou que Sebastião fosse amarrado a uma árvore e alvejado por flechas. Os arqueiros o deixaram por morto, mas uma cristã chamada Irene, ao recolher seu corpo para dar-lhe sepultura, descobriu que ele ainda vivia. Ela o levou para sua casa e cuidou de seus ferimentos até que se recuperasse.

                Após sua recuperação, em vez de fugir, Sebastião apresentou-se novamente diante do imperador, repreendendo-o por suas perseguições aos cristãos. Furioso, Diocleciano ordenou que ele fosse espancado até a morte com porretes e seu corpo jogado no esgoto de Roma, para que os cristãos não pudessem venerá-lo. Era o ano 288.

                Seu corpo foi resgatado por uma nobre cristã chamada Lucina, que o sepultou com honras nas catacumbas, próximo aos túmulos dos apóstolos Pedro e Paulo. São Sebastião é considerado um dos grandes mártires da Igreja primitiva.
            `,
            milagres: `
                São Sebastião é associado a diversos milagres, tanto em vida quanto após sua morte:

                1. Conversões milagrosas: Enquanto visitava os cristãos presos, converteu muitos pagãos, incluindo o prefeito de Roma, Cromácio, a quem teria curado de uma grave doença reumática.

                2. Cura de Zoé: Segundo a tradição, a esposa de um carcereiro, chamada Zoé, que era muda há seis anos, recuperou a fala quando São Sebastião fez o sinal da cruz sobre ela.

                3. Sobrevivência às flechas: Seu mais famoso milagre foi sobreviver ao suplício das flechas, quando foi deixado por morto e posteriormente se recuperou.

                4. Fim da peste em Roma: Em 680, uma terrível epidemia assolava Roma. Quando as relíquias de São Sebastião foram levadas em procissão para a Basílica de São Pedro, a peste cessou imediatamente.

                5. Proteção contra epidemias: Milagres semelhantes de cessação de epidemias ocorreram em Milão (1575) e Lisboa (1599) após procissões com suas relíquias.

                6. Aparição no Rio de Janeiro: Em 20 de janeiro de 1567, durante uma batalha entre portugueses e franceses na Baía de Guanabara, soldados relataram ter visto um jovem guerreiro com armadura lutando ao lado dos portugueses, o que foi interpretado como uma aparição de São Sebastião, levando à sua escolha como padroeiro da cidade.

                7. Proteção de pescadores: Numerosos relatos de pescadores salvos de tempestades após invocarem sua proteção contribuíram para sua devoção em cidades litorâneas.
            `,
            reliquias: `
                As relíquias de São Sebastião têm uma história significativa:

                1. Sepultamento original: Seu corpo foi inicialmente sepultado nas catacumbas de Roma, próximo aos túmulos dos apóstolos Pedro e Paulo, por uma nobre cristã chamada Lucina.

                2. Basílica de São Sebastião: No século IV, o imperador Constantino mandou construir uma basílica sobre o local de seu sepultamento, junto à Via Ápia, que se tornou um importante centro de peregrinação.

                3. Translado para São Pedro: No século VII, parte de suas relíquias foi transferida para a Basílica de São Pedro, no Vaticano, onde permanece até hoje.

                4. Relíquias na França: No século IX, durante o reinado de Luís, o Piedoso, o Papa Eugênio II doou parte das relíquias ao abade Hilduin de Saint-Denis, que as levou para a França. Foram depositadas na igreja de Saint-Médard, em Soissons, em 826.

                5. Dispersão durante as guerras religiosas: No século XVI, durante as guerras religiosas na França, o relicário foi profanado pelos calvinistas e os ossos foram jogados em um fosso com água. Posteriormente, foram recuperados, mas já não era possível distinguir os ossos de São Sebastião dos de outros santos.

                6. Relíquias atuais: Atualmente, relíquias de São Sebastião podem ser encontradas em:
                   - Basílica de São Sebastião Fora dos Muros, em Roma
                   - Catedral de São Vítor, em Paris
                   - Igrejas em Mântua, Málaga, Sevilha, Toulouse e Munique
                   - Catedral de Tournai, na Bélgica
                   - Igreja dos Jesuítas em Antuérpia
                   - Capela da corte em Bruxelas
                   - Catedral de São Sebastião, no Rio de Janeiro
            `,
            devocao: `
                São Sebastião é um dos santos mais venerados no mundo católico:

                Festa litúrgica:
                - 20 de janeiro na Igreja Católica e na Igreja Ortodoxa

                É invocado como patrono de:
                - Soldados e policiais
                - Arqueiros e atletas
                - Cidade do Rio de Janeiro e outras cidades pelo mundo
                - Protetor contra a peste, epidemias e doenças contagiosas
                - Protetor contra a fome e a guerra
                - Padroeiro dos prisioneiros

                Iconografia:
                - Geralmente representado como um jovem amarrado a uma árvore ou coluna
                - Corpo atravessado por flechas
                - Às vezes vestido como soldado romano
                - Em algumas representações, aparece sendo cuidado por Santa Irene

                Tradições populares:
                - No Rio de Janeiro, sua festa é celebrada com grande procissão
                - Em cidades litorâneas, pescadores realizam procissões marítimas em sua honra
                - Em algumas regiões, realiza-se a "puxada do mastro", onde um mastro com sua imagem é carregado pelos devotos
                - No sincretismo religioso afro-brasileiro, é identificado com o orixá Oxóssi

                Devoção no Brasil:
                - É padroeiro do Rio de Janeiro desde sua fundação
                - Muitas cidades brasileiras levam seu nome
                - Sua devoção foi trazida pelos portugueses durante a colonização
                - É um dos santos mais populares no país, especialmente nas regiões litorâneas
            `
        }
    },
    {
        name: "São Hilário",
        description: "Bispo de Poitiers, combateu o arianismo e ressuscitou uma criança, conhecido por sua piedade.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Hilário nasceu em Poitiers, França, por volta do ano 315, em uma família rica e pagã. Recebeu uma excelente educação e buscava na filosofia respostas para sua busca sobre a verdade. Após estudar as Sagradas Escrituras, encontrou no Evangelho as respostas que procurava, o que o levou à conversão ao cristianismo.

                Foi batizado aos 30 anos de idade, junto com sua esposa e filha, Abrè. Mesmo sendo casado e tendo família, Hilário era conhecido por sua vida exemplar e seus conhecimentos espirituais e intelectuais, o que levou o clero a elegê-lo bispo de Poitiers em 353.

                Como bispo, Hilário se destacou na luta contra o arianismo, uma heresia que negava a divindade de Jesus Cristo. Sua defesa fervorosa da fé cristã ortodoxa lhe rendeu o título de "Atanásio do Ocidente", em referência a Santo Atanásio, que combateu o arianismo no Oriente.

                Por causa de sua defesa do Evangelho e oposição ao imperador Constâncio, que apoiava o arianismo, Hilário foi exilado para o Oriente por cinco anos. Durante esse período, aproveitou para estudar grego, conhecer as mais antigas comunidades cristãs e aprofundar seus conhecimentos teológicos.

                Ao retornar do exílio em 360, reassumiu sua diocese e continuou seu trabalho de evangelização e combate às heresias. São Hilário faleceu em 367 e foi canonizado pelo Papa Pio IX, que também o honrou com o título de "Doutor da Igreja".
            `,
            milagres: `
                São Hilário é conhecido por diversos milagres realizados durante sua vida e após sua morte:

                1. Ressurreição de uma criança: Seu primeiro milagre registrado foi a ressurreição de um bebê que havia falecido sem receber o batismo.

                2. Expulsão de serpentes: Há relatos de que São Hilário expulsou todas as serpentes de uma ilha no mar Tirreno, o que explica sua invocação contra picadas de cobra.

                3. Curas milagrosas: Diversos relatos mencionam curas de enfermidades realizadas por sua intercessão, especialmente após sua morte.

                4. Conversões: Embora não seja um milagre físico, a conversão de muitos pagãos e arianos através de seus escritos e pregações é considerada uma obra milagrosa de sua vida.

                5. Proteção contra heresias: Após sua morte, muitas comunidades que invocavam sua proteção foram preservadas das heresias que assolavam a Igreja na época.
            `,
            reliquias: `
                As relíquias de São Hilário têm uma história de veneração:

                1. Inicialmente, seu corpo foi sepultado na igreja que mais tarde se tornaria a Basílica de São Hilário, o Grande (Saint-Hilaire-le-Grand), em Poitiers, França.

                2. Durante as invasões normandas do século IX, suas relíquias foram transferidas para um local mais seguro para protegê-las da destruição.

                3. Na Idade Média, partes de suas relíquias foram distribuídas para várias igrejas na França e em outros países europeus.

                4. Atualmente, a maior parte de suas relíquias permanece na igreja de Saint-Hilaire-le-Grand em Poitiers, embora fragmentos estejam presentes em várias igrejas dedicadas a ele na França.

                5. A igreja de São Hilário em Poitiers é um importante centro de peregrinação, especialmente no dia de sua festa.
            `,
            devocao: `
                São Hilário é venerado como um dos grandes doutores da Igreja Ocidental. Sua festa litúrgica é celebrada em 13 de janeiro.

                É invocado como protetor contra:
                - Picadas de serpentes
                - Heresias e falsas doutrinas
                - Dificuldades de aprendizado em crianças

                São Hilário é padroeiro de:
                - Crianças com dificuldades de aprendizado
                - Teólogos e estudiosos da fé
                - Cidade de Poitiers, França

                Na iconografia cristã, São Hilário é geralmente representado como um bispo com vestes episcopais, mitra e báculo. Frequentemente é retratado com um livro, simbolizando seus escritos teológicos, e às vezes com uma serpente sob seus pés, representando sua vitória sobre as heresias.

                Seus escritos mais importantes incluem "Sobre a Trindade", "Comentários sobre os Salmos" e tratados contra o arianismo, que contribuíram significativamente para o desenvolvimento da teologia cristã ocidental.

                Uma frase célebre atribuída a ele resume sua determinação: "Enganam-se os que acreditam que me farão calar. Falarei pelos escritos, e a palavra de Deus, que ninguém pode aprisionar, voará livre".
            `
        }
    },
    {
        name: "São Firmino",
        description: "Bispo e mártir, pregou na Gália e foi martirizado por sua fé.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Firmino (também conhecido como Fermin ou Firmin) nasceu em Pamplona, Espanha, por volta do ano 272, em uma família nobre. Seus pais, Fermo e Eugênia, eram inicialmente pagãos, mas posteriormente se converteram ao cristianismo. Firmino foi confiado aos cuidados do padre Honesto, que o batizou e o instruiu na fé cristã.

                Mais tarde, foi ordenado sacerdote pelo bispo de Toulouse, Honorato, e depois de alguns anos, foi consagrado bispo. São Firmino permaneceu inicialmente em sua cidade natal de Pamplona, onde uma tradição local o considera o primeiro bispo da cidade.

                Posteriormente, dedicou-se à evangelização de várias regiões da França, incluindo Aquitânia, Auvergne, Anjou e outras áreas no nordeste. Apesar da forte oposição dos sacerdotes pagãos, seu trabalho missionário obteve resultados notáveis, convertendo muitas pessoas ao cristianismo.

                Durante suas viagens missionárias, Firmino chegou a Amiens (antiga Samobriva Ambianorum), onde serviu como bispo por muitos anos com grande sucesso. Sabe-se que ele converteu muitos nobres, incluindo o senador Faustiniano.

                São Firmino foi martirizado no início do século IV, durante as perseguições de Diocleciano. Após recusar-se a renunciar à sua fé, foi decapitado na prisão em 25 de setembro, entre os anos 290 e 303, por ordem dos magistrados Longulo e Sebastiano, que realizaram a execução secretamente para evitar uma reação popular.
            `,
            milagres: `
                Embora os registros históricos sobre os milagres específicos de São Firmino sejam limitados, várias tradições e relatos atribuem a ele diversos feitos milagrosos:

                1. Conversões em massa: Um dos maiores "milagres" atribuídos a São Firmino foi a conversão de milhares de pessoas ao cristianismo em regiões fortemente pagãs da Gália, especialmente em Amiens.

                2. Curas milagrosas: Há relatos de que São Firmino realizou diversas curas de enfermos durante suas viagens missionárias, o que contribuiu para a expansão do cristianismo.

                3. Proteção contra perseguições: Em algumas ocasiões, São Firmino teria sido miraculosamente protegido de seus perseguidores, conseguindo escapar de situações perigosas antes de seu martírio final.

                4. Milagres póstumos: Após sua morte, diversos milagres foram relatados junto ao seu túmulo, incluindo curas de doenças e proteção contra epidemias.

                5. Descoberta milagrosa de suas relíquias: No século VII, o bispo de Amiens, São Sálvio, descobriu o local de sepultamento de São Firmino através de uma visão milagrosa, quando o paradeiro de seu túmulo já havia sido esquecido.
            `,
            reliquias: `
                As relíquias de São Firmino têm uma história de grande veneração:

                1. Inicialmente, seu corpo foi sepultado em Amiens, mas o local exato foi perdido com o passar do tempo.

                2. No século VII, o bispo de Amiens, São Sálvio, redescobriu o túmulo de São Firmino através de uma visão milagrosa e transferiu suas relíquias para um local de destaque na cidade.

                3. Durante a procissão das relíquias pelas ruas de Amiens, conta a lenda que muitos doentes foram curados e árvores subitamente floresceram em pleno inverno apenas por estarem próximas aos restos mortais do santo.

                4. Em 1186, o bispo Pedro II de Pamplona recebeu algumas relíquias de São Firmino, que foram levadas para sua cidade natal na Espanha.

                5. Em 1196, ocorreu uma translação mais significativa de relíquias para Pamplona, fortalecendo o culto ao santo em sua terra natal.

                6. Atualmente, as relíquias de São Firmino estão distribuídas em várias igrejas da França e da Espanha, sendo veneradas em ambos os países.
            `,
            devocao: `
                São Firmino é venerado como um importante santo missionário e mártir, especialmente na França e na Espanha. Sua festa litúrgica é celebrada em:

                - 25 de setembro na Igreja Católica em geral (data de seu martírio)
                - 7 de julho em Pamplona, Espanha (data das festividades locais)

                É invocado como protetor contra:
                - Erisipela (uma infecção cutânea)
                - Doenças em geral
                - Perigos nas viagens

                São Firmino é padroeiro de:
                - Cidade e diocese de Amiens, França
                - Pamplona e Navarra, Espanha
                - Tanoeiros (fabricantes de barris)
                - Comerciantes de vinho
                - Padeiros

                Na iconografia cristã, São Firmino é geralmente representado como um bispo com vestes episcopais. Por ter sido decapitado, em algumas obras ele é retratado segurando sua própria cabeça nas mãos ou olhando para sua cabeça decepada no chão.

                A devoção a São Firmino é particularmente forte em Pamplona, Espanha, onde é celebrado com as famosas festas de San Fermín, que incluem a mundialmente conhecida "corrida dos touros" (encierro). Estas festividades, realizadas anualmente de 6 a 14 de julho, atraem milhares de turistas de todo o mundo.
            `
        }
    },
    {
        name: "São Macário",
        description: "Eremita egípcio, conhecido por sua vida ascética e milagres no deserto.",
        additionalInfo: {
            biografia: `
                São Macário do Egito, também conhecido como Macário, o Grande, Macário, o Velho ou "Luz do Deserto", nasceu por volta do ano 300 d.C. em um vilarejo chamado Giber (atual Shabsheer) no Alto Egito. Era filho de um presbítero originário de Memphis.

                Em sua juventude, Macário trabalhava como condutor de camelos, transportando natrão (um tipo de sal) no Vale de Nítria, região que mais tarde se tornaria um dos mais importantes centros monásticos do mundo. Durante uma dessas viagens, enquanto dormia, teve uma visão de um querubim que lhe prometeu aquela terra como herança espiritual.

                Ainda jovem, foi forçado a se casar contra sua vontade. Quando retornou de uma viagem, descobriu que sua esposa havia falecido, e logo depois seus pais também morreram. Macário então distribuiu todos os seus bens entre os pobres. Admirando suas virtudes, o povo de sua vila o levou ao bispo de Ashmoun, que o ordenou sacerdote.

                Posteriormente, uma mulher grávida o acusou falsamente de ser o pai de seu filho. Macário aceitou a acusação em silêncio, mas quando a mulher entrou em trabalho de parto, não conseguiu dar à luz até confessar que Macário era inocente. Após este episódio, ele fugiu para o deserto de Nítria (Wadi Natrum) para escapar da fama e viver em solidão.

                No deserto, Macário foi visitado novamente pelo querubim, que "pesou seu coração" e deu à região o nome de "Escetes" (do copta "shihêt", que significa "escala do coração"). Ali, Macário viveu como eremita e, com o tempo, atraiu muitos discípulos que desejavam seguir seu exemplo de vida ascética.

                São Macário visitou Santo Antão, o Grande, duas vezes (em 343 e 352), sendo considerado seu discípulo. Durante essas visitas, Santo Antão o instruiu sobre a vida monástica e lhe deu o hábito monástico e o báculo, conferindo-lhe simbolicamente a liderança do monasticismo após sua morte.

                Durante a perseguição ariana, em 373, São Macário foi deportado junto com seu discípulo Macário de Alexandria para uma ilha no Delta do Nilo habitada apenas por pagãos. Lá, realizou um poderoso exorcismo na filha do sacerdote pagão local, o que resultou na conversão de toda a aldeia. Dois anos depois, em 375, conseguiu retornar a Escetes.

                São Macário faleceu em 5 de abril de 390 (27 de Paramhat no calendário copta), aos 90 anos de idade. Foi sepultado na caverna onde havia vivido por mais de trinta anos, e seu corpo se tornou uma relíquia preciosa do mosteiro que leva seu nome.
            `,
            milagres: `
                São Macário do Egito é conhecido por diversos milagres e dons espirituais:

                1. Dom da profecia: Era conhecido como "pneumatophoros" (portador do Espírito), possuindo um espírito profético semelhante ao do profeta Elias. Abba Poemen testemunhou que Macário tinha conhecimento das palavras antes mesmo de serem pronunciadas.

                2. Exorcismo poderoso: Durante seu exílio, realizou um exorcismo na filha de um sacerdote pagão, o que resultou na conversão de toda uma aldeia ao cristianismo.

                3. Visões celestiais: Teve várias visões de querubins que o guiaram em sua vocação monástica e lhe revelaram a vontade divina.

                4. Discernimento espiritual: Possuía um extraordinário dom de discernimento, sendo capaz de ver a condição espiritual das pessoas e oferecer conselhos adequados.

                5. Curas milagrosas: Realizou diversas curas, incluindo a de um monge doente para quem viajou até Alexandria apenas para trazer um biscoito que ele desejava comer.

                6. Vitória sobre demônios: Em um encontro com o diabo, este confessou que não conseguia vencer Macário devido à sua humildade, a única virtude que o demônio não podia imitar.

                7. Ressurreição: Segundo algumas tradições, teria ressuscitado mortos através de suas orações.

                8. Proteção divina: Durante suas viagens pelo deserto, foi miraculosamente protegido de perigos e recebeu orientação divina.
            `,
            reliquias: `
                As relíquias de São Macário têm uma história interessante:

                1. Inicialmente, seu corpo foi sepultado na caverna onde viveu por mais de trinta anos em Escetes, no deserto egípcio.

                2. Após sua morte, os habitantes de sua aldeia natal, Shabsheer, roubaram seu corpo e o mantiveram em um martyrium (santuário) especialmente construído para ele, onde permaneceu por cerca de três séculos, de 480 a 793.

                3. Em 793, durante o patriarcado de João IV (777-799), o corpo foi devolvido ao mosteiro fundado por São Macário.

                4. Atualmente, os restos mortais de São Macário repousam no lado norte da igreja que leva seu nome, no Mosteiro de São Macário, o Grande, em Escetes (Wadi El Natrun), Egito.

                5. Este mosteiro, fundado por São Macário no século IV, é um dos mais antigos mosteiros cristãos continuamente habitados no mundo e pertence à Igreja Ortodoxa Copta.

                6. O mosteiro e as relíquias de São Macário são importantes destinos de peregrinação para cristãos de todo o mundo, especialmente para os coptas.
            `,
            devocao: `
                São Macário é venerado como um dos mais importantes Padres do Deserto e pioneiro do monasticismo cristão. Sua festa litúrgica é celebrada em:

                - 15 de janeiro na Igreja Católica Ocidental
                - 19 de janeiro na Igreja Ortodoxa
                - 4 de abril (27 de Paremhat) na Igreja Ortodoxa Copta

                É invocado como:
                - Patrono dos monges e eremitas
                - Intercessor contra tentações demoníacas
                - Protetor dos que buscam a vida contemplativa
                - Guia espiritual para aqueles que lutam contra pensamentos impuros

                Na iconografia cristã, São Macário é geralmente representado como um monge idoso com barba branca, vestindo o hábito monástico. Às vezes é retratado ao lado de um querubim, simbolizando suas visões celestiais, ou segurando um báculo em forma de T (conhecido como "cruz de Santo Antão" ou "pastoral de São Macário").

                O deserto ao redor dos mosteiros históricos de Escetes é chamado de "Deserto de Macário" em sua homenagem. Sua influência espiritual se estende por todas as tradições monásticas cristãs, e seus ensinamentos sobre humildade, simplicidade e misericórdia continuam a inspirar monges e leigos até hoje.

                Uma das características mais marcantes de sua devoção é a ênfase na humildade. Mesmo sendo o pai espiritual de milhares de monges, São Macário dizia: "Ainda não me tornei monge, mas vi monges", demonstrando sua constante busca pela perfeição espiritual.
            `
        }
    },
    {
        name: "São Félix",
        description: "Mártir romano, sofreu perseguição e morte por sua fé cristã.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Félix de Nola nasceu no século III em Nola, perto de Nápoles, na Itália. Era filho de um sírio chamado Hermias, que havia se estabelecido na Itália por questões de trabalho. Enquanto seu irmão Hermias seguiu a carreira militar como o pai, Félix decidiu dedicar-se ao serviço de Cristo.

                Após distribuir grande parte de seus bens aos pobres, Félix foi ordenado sacerdote e tornou-se o braço direito do bispo Maximiano (ou Máximo) de Nola. Durante as perseguições aos cristãos decretadas pelo imperador Décio em 250, o bispo Maximiano, já idoso, refugiou-se em um local deserto, de onde continuava a governar a igreja em segurança.

                Como os soldados não conseguiram encontrar o bispo, prenderam Félix em seu lugar. No cárcere, ele sofreu cruéis tormentos, sendo açoitado e acorrentado. Segundo a tradição, um anjo apareceu e o libertou milagrosamente, assim como aconteceu com São Pedro. O anjo então o guiou até o esconderijo do bispo Maximiano, que estava próximo da morte devido ao frio e à falta de alimentos. Félix cuidou do bispo e o carregou nos ombros até a casa de uma viúva piedosa, onde ambos se recuperaram.

                Quando a perseguição diminuiu em 251, Félix e Maximiano puderam retornar a Nola. Após a morte do bispo, o povo quis nomear Félix como seu sucessor, mas ele recusou humildemente essa honra. Preferiu retirar-se para uma pequena propriedade, onde pelo resto de sua vida cultivou a terra para sustentar-se e ajudar os pobres. São Félix faleceu por volta do ano 260, sendo venerado como confessor da fé.
            `,
            milagres: `
                São Félix é associado a diversos milagres, tanto durante sua vida quanto após sua morte:

                1. Libertação milagrosa: Enquanto estava preso, um anjo teria aparecido a Félix, fazendo suas correntes caírem e as portas da prisão se abrirem, permitindo sua fuga.

                2. O milagre da aranha: Quando os soldados o perseguiam, Félix escondeu-se em uma caverna ou poço. Uma aranha rapidamente teceu sua teia na entrada, fazendo os soldados acreditarem que ninguém havia entrado ali recentemente, salvando assim o santo.

                3. Proteção contra ladrões: Certa noite, ladrões tentaram roubar sua horta, mas uma força misteriosa os fez trabalhar no campo durante toda a noite. Ao amanhecer, Félix os encontrou e agradeceu pelo trabalho realizado. Envergonhados, os ladrões confessaram suas intenções e foram perdoados pelo santo.

                4. Cura do bispo Maximiano: Félix encontrou o bispo quase morto em seu esconderijo e conseguiu curá-lo e restaurar sua saúde.

                5. Milagres póstumos: Após sua morte, seu túmulo tornou-se local de peregrinação e muitas curas foram atribuídas à sua intercessão.

                6. Revelação da verdade: Seu túmulo era chamado de "Ara Veritatis" (Altar da Verdade), pois acreditava-se que tinha o poder de revelar se um testemunho era verdadeiro ou falso.
            `,
            reliquias: `
                As relíquias de São Félix têm uma história de grande veneração:

                1. Inicialmente, seu corpo foi sepultado na basílica paleocristã de Cimitile, próxima a Nola, na Itália.

                2. Seu túmulo tornou-se um importante local de peregrinação, conhecido como "Ara Veritatis" (Altar da Verdade), onde os fiéis buscavam discernimento sobre a veracidade de testemunhos.

                3. São Paulino de Nola (353-431), que se tornou bispo de Nola cerca de um século após a morte de Félix, tinha grande devoção ao santo e construiu uma basílica em sua honra.

                4. Em Roma, uma basílica também foi consagrada a São Félix.

                5. Atualmente, suas relíquias ainda são veneradas na região de Nola, embora partes delas possam ter sido distribuídas para outras igrejas ao longo dos séculos.

                6. A basílica paleocristã de Cimitile, onde São Félix foi originalmente sepultado, ainda existe e é um importante sítio arqueológico e local de peregrinação.
            `,
            devocao: `
                São Félix é venerado como um importante confessor da fé e quase-mártir. Sua festa litúrgica é celebrada em 14 de janeiro.

                É invocado como protetor contra:
                - O perjúrio (falso testemunho)
                - Doenças dos olhos
                - Perigos nas viagens

                São Félix é padroeiro de:
                - Cidade de Nola, Itália
                - Agricultores
                - Criadores de gado

                Na iconografia cristã, São Félix é geralmente representado como um sacerdote com vestes clericais. Às vezes é retratado com correntes quebradas, simbolizando sua libertação milagrosa da prisão, ou com uma aranha e sua teia, referindo-se ao milagre que o salvou da perseguição.

                São Paulino de Nola, que viveu cerca de um século depois de São Félix, teve papel fundamental na promoção de sua devoção. Todos os anos, Paulino escrevia um poema para celebrar a festa de São Félix, e em um deles forneceu uma das primeiras definições de "confessor" da fé: alguém que, embora não tenha derramado seu sangue como mártir, estava disposto a oferecer sua vida como sacrifício a Deus.

                Paulino adotou Félix como seu santo patrono, não apenas como um intercessor no céu, mas como um companheiro espiritual que o acompanhava como encorajador, guia e protetor em suas jornadas.
            `
        }
    },
    {
        name: "São Marcel",
        description: "Bispo de Paris, famoso por derrotar um dragão com sua cruz.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Marcel (ou Marcelo) nasceu em Lutécia (atual Île de la Cité, Paris) no século IV, em uma família humilde. Desde jovem, destacou-se por sua pureza de coração, modéstia, mansidão, mortificação e caridade. Dedicou-se inteiramente à disciplina da virtude e da oração, vivendo de forma tão desprendida que, mesmo estando na carne, parecia desligado tanto do mundo quanto da carne.

                A gravidade incomum de seus modos e seu progresso nos estudos sagrados o recomendaram fortemente ao bispo Prudêncio de Paris, que o ordenou leitor da igreja quando ainda era jovem. Posteriormente, foi promovido à dignidade do sacerdócio e, após a morte de Prudêncio, foi unanimemente escolhido como Bispo de Paris.

                Como assumiu este cargo por compulsão e com temor, uma justa apreensão de suas obrigações o fez sempre humilde, vigilante e incansável em todas as suas funções. Seu episcopado durou até aproximadamente o ano 436, período durante o qual converteu muitos pagãos através de sua pregação e dos milagres que realizava.
            `,
            milagres: `
                São Marcel é conhecido por diversos milagres realizados durante sua vida:

                1. O milagre do dragão: O mais famoso relato sobre São Marcel conta que ele libertou a região de Paris de um grande dragão (ou serpente) que habitava o sepulcro de uma adúltera. Este dragão aterrorizava a população local, e São Marcel o enfrentou com sua cruz, expulsando-o da cidade. Esta história, embora tenha elementos lendários, é interpretada como uma representação simbólica da vitória do cristianismo sobre o paganismo ou sobre o mal.

                2. Transformação de água em vinho: Relatos indicam que São Marcel tinha o poder de transformar água do rio Sena em vinho e bálsamo, o que contribuiu para sua fama.

                3. Curas milagrosas: Diversos relatos atribuem a São Marcel a cura de enfermos através de suas orações e imposição de mãos.

                4. Exorcismos: Era conhecido por libertar pessoas possuídas por demônios, demonstrando seu poder espiritual sobre as forças do mal.

                5. Milagres póstumos: Após sua morte, muitos milagres foram relatados junto ao seu túmulo, especialmente curas de diversas enfermidades e libertação de prisioneiros.
            `,
            reliquias: `
                As relíquias de São Marcel têm uma história de grande veneração:

                1. Inicialmente, seu corpo foi sepultado a cerca de um quarto de légua de Paris, em uma vila que posteriormente se tornou parte da cidade, chamada de subúrbio de Saint-Marceau.

                2. Com o passar do tempo, suas relíquias foram transferidas para a Catedral de Notre-Dame de Paris, onde são veneradas até hoje.

                3. Um dos sinos da Catedral de Notre-Dame recebeu o nome de "Marcel" em sua homenagem, demonstrando a importância deste santo para a cidade de Paris.

                4. Durante a Revolução Francesa, muitas relíquias foram profanadas, mas acredita-se que parte das relíquias de São Marcel tenha sido preservada.

                5. A igreja de Saint-Marcel em Paris, embora reconstruída várias vezes ao longo da história (a atual data de 1966), continua sendo um local de veneração ao santo.
            `,
            devocao: `
                São Marcel é venerado como um importante bispo e confessor da fé. Sua festa litúrgica é celebrada em:

                - 1º de novembro no Martirológio Romano
                - 3 de novembro na tradição galicana (França)

                É invocado como protetor contra:
                - Epidemias e doenças contagiosas
                - Invasões e perigos externos
                - Possessões demoníacas

                São Marcel é padroeiro de:
                - Cidade de Paris, especialmente do bairro que leva seu nome
                - Contra dragões e serpentes (simbolizando o mal e as tentações)

                Na iconografia cristã, São Marcel é geralmente representado como um bispo com vestes episcopais, mitra e báculo. Frequentemente é retratado enfrentando um dragão ou serpente, que ele subjuga com sua cruz ou báculo episcopal.

                Durante a Idade Média, nas procissões de Rogações em Paris, era costume carregar uma efígie de dragão feita de vime, com grandes mandíbulas e uma garganta, na qual os parisienses jogavam frutas e bolos enquanto o dragão era conduzido pela rota da procissão. Esta tradição, que também ocorria em outras cidades francesas, pode ter sido uma forma de coletar esmolas para os pobres ou um presente para os participantes da procissão.
            `
        }
    },
    {
        name: "Santo Antão do Egito",
        description: "Pai do monaquismo cristão, viveu 105 anos no deserto enfrentando tentações demoníacas.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                Santo Antão, também conhecido como Santo Antão do Egito, Santo Antão o Grande, ou o Pai de Todos os Monges, nasceu em Conam, no Alto Egito (Tebaida), no ano 251, em uma família cristã de camponeses. Quando tinha aproximadamente 20 anos, seus pais faleceram, deixando-o responsável por sua irmã e por uma considerável herança.

                Sua vida mudou radicalmente ao ouvir, durante uma missa, a passagem do Evangelho em que Jesus diz ao jovem rico: "Se queres ser perfeito, vai, vende teus bens, dá aos pobres e terás um tesouro nos céus; depois, vem e segue-me" (Mateus 19,21). Tomando estas palavras literalmente, Antão vendeu todas as suas propriedades, distribuiu o dinheiro aos pobres, confiou sua irmã a uma comunidade de virgens consagradas e retirou-se para o deserto.

                Inicialmente, estabeleceu-se próximo à sua aldeia, vivendo em uma caverna sob a orientação de um eremita idoso. Posteriormente, buscando maior solidão, mudou-se para uma fortaleza abandonada no deserto oriental do Egito, onde permaneceu em completo isolamento por cerca de 20 anos.

                Apesar de sua busca pela solidão, sua fama de santidade atraiu numerosos discípulos que desejavam seguir seu exemplo. Por volta do ano 305, Antão saiu de seu isolamento para organizar e orientar os muitos eremitas que haviam se estabelecido ao seu redor, formando assim as primeiras comunidades monásticas cristãs, embora cada monge vivesse isoladamente em sua própria cela ou caverna.

                Santo Antão deixou o deserto em raras ocasiões. Em 311, foi a Alexandria para confortar os cristãos perseguidos pelo imperador Maximino Daia. Retornou à cidade em 335 para defender a fé ortodoxa contra o arianismo, a convite de Santo Atanásio, que mais tarde escreveria sua biografia.

                Viveu uma vida de extrema austeridade, dedicada à oração, ao trabalho manual e à luta contra as tentações. Faleceu serenamente em 17 de janeiro de 356, com a impressionante idade de 105 anos, cercado por seus discípulos. Antes de morrer, pediu que seu corpo fosse sepultado secretamente para evitar venerações excessivas.
            `,
            milagres: `
                Santo Antão é conhecido por diversos milagres e feitos sobrenaturais:

                1. Vitória sobre as tentações: O mais famoso aspecto de sua vida foram as intensas batalhas espirituais contra demônios que o tentavam com visões de riquezas, prazeres carnais e dúvidas. Estas tentações foram imortalizadas na arte por pintores como Hieronymus Bosch e Salvador Dalí.

                2. Curas milagrosas: Realizou numerosas curas de enfermos que o procuravam no deserto, incluindo casos de possessão demoníaca, paralisia e cegueira.

                3. O milagre da caverna: Certa vez, foi espancado por demônios em uma caverna até ser dado como morto. Seus discípulos o encontraram e lamentavam sua morte quando ele reviveu milagrosamente, exigindo ser levado de volta à caverna para enfrentar novamente os demônios. Quando os demônios retornaram, uma luz divina os afugentou.

                4. Dom da profecia: Previu eventos futuros, incluindo a própria morte e calamidades que afetariam o Egito.

                5. Visões celestiais: Relatou ter tido visões de anjos e de Cristo, que o fortaleciam em suas lutas espirituais.

                6. Domínio sobre animais selvagens: Segundo relatos, animais selvagens do deserto o respeitavam e não o atacavam, mesmo quando se aproximava de suas tocas.

                7. Fonte milagrosa: Em um momento de extrema sede, fez brotar água de uma rocha no deserto através de sua oração.
            `,
            reliquias: `
                As relíquias de Santo Antão têm uma história notável:

                1. Sepultamento original: Conforme seu pedido, foi sepultado secretamente por dois de seus discípulos em um local desconhecido no deserto egípcio.

                2. Descoberta das relíquias: Por volta do ano 561, durante o reinado do imperador Justiniano, suas relíquias foram descobertas e transferidas para Alexandria.

                3. Translação para Constantinopla: Posteriormente, foram levadas para Constantinopla.

                4. Transferência para a França: No século XI, durante as Cruzadas, suas relíquias foram levadas para La Motte-aux-Bois (atual Saint-Antoine-l'Abbaye), na França, por Jocelin, um nobre francês. Este local tornou-se um importante centro de peregrinação.

                5. Igreja de Santo Antônio de Viennois: Atualmente, a maior parte de suas relíquias está preservada nesta igreja na França.

                6. Relíquias dispersas: Fragmentos de suas relíquias podem ser encontrados em várias igrejas pelo mundo, incluindo:
                   - A Basílica de San Antonio Abate em Roma
                   - O Mosteiro de Santo Antão no Egito
                   - A Catedral de Colônia na Alemanha

                7. O Fogo de Santo Antão: Durante a Idade Média, o contato com suas relíquias era considerado eficaz contra o "fogo de Santo Antão" (ergotismo), uma doença causada pelo consumo de centeio contaminado com um fungo.
            `,
            devocao: `
                A devoção a Santo Antão é ampla e significativa:

                Festa litúrgica:
                - 17 de janeiro na Igreja Católica Romana e na maioria das Igrejas Orientais
                - 30 de janeiro no antigo calendário da Igreja Ortodoxa e da Igreja Copta

                É invocado como patrono de:
                - Monges e eremitas
                - Animais domésticos, especialmente porcos
                - Cesteiros e escoveiros (por seu trabalho manual no deserto)
                - Contra doenças de pele, especialmente o ergotismo
                - Contra tentações e possessões demoníacas
                - Contra incêndios

                Tradições e costumes:
                - Bênção dos animais: Em muitos países, especialmente na Espanha, Itália e América Latina, realiza-se a bênção de animais domésticos em sua festa
                - Fogueiras de Santo Antão: Em algumas regiões, acendem-se fogueiras em sua honra
                - Pães de Santo Antão: Distribuição de pães abençoados em sua festa

                Iconografia:
                - Representado como um ancião de barba branca
                - Vestido com hábito monástico e capuz
                - Frequentemente acompanhado por um porco ou javali
                - Com um cajado em forma de T (Tau)
                - Cercado por demônios que o tentam
                - Com um sino e um livro

                Ordens religiosas:
                - Ordem dos Hospitalários de Santo Antão (Antonianos)
                - Influenciou todas as ordens monásticas posteriores
            `
        }
    },
    {
        name: "São Fabiano",
        description: "Papa mártir, escolhido por uma pomba divina, morreu durante a perseguição de Décio.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Fabiano nasceu em Roma por volta do ano 200, em uma família nobre pertencente à proeminente família Fabius, que tinha grande influência na política e nas artes da cidade. Embora pouco se saiba sobre sua juventude, acredita-se que tenha recebido boa educação, como era comum entre as famílias nobres romanas.

                Sua eleição como Papa ocorreu de maneira extraordinária. Em 236, após a morte do Papa Antero, que governou a Igreja por apenas alguns meses, Fabiano veio a Roma para acompanhar a eleição do novo pontífice, sendo apenas um observador sem pretensões ao cargo. Segundo relatos históricos, enquanto os bispos e fiéis deliberavam sobre quem deveria ser o novo Papa, uma pomba branca desceu do céu e pousou sobre a cabeça de Fabiano. Este evento foi interpretado como um sinal divino, semelhante à descida do Espírito Santo sobre Jesus no Jordão, e Fabiano foi unanimemente aclamado como o 20º Papa da Igreja.

                Durante seu pontificado de 14 anos (236-250), Fabiano organizou a Igreja de Roma em sete distritos, cada um sob a supervisão de um diácono, estabelecendo uma estrutura administrativa que perdurou por séculos. Também enviou missionários para evangelizar a Gália (atual França) e trabalhou para recuperar os corpos dos mártires, incluindo os restos mortais do antipapa Hipólito e do Papa Ponciano, que haviam sido exilados.

                Fabiano manteve boas relações com o imperador Filipe, o Árabe, que era tolerante com os cristãos. No entanto, quando Décio assumiu o trono imperial em 249, iniciou-se uma violenta perseguição contra a Igreja. Fabiano, como líder dos cristãos em Roma, foi um dos primeiros a ser preso. Após suportar torturas e um longo período de prisão, foi decapitado em 20 de janeiro de 250, tornando-se mártir da fé.
            `,
            milagres: `
                Embora não existam muitos relatos específicos de milagres atribuídos a São Fabiano durante sua vida, sua eleição milagrosa como Papa é considerada um dos eventos sobrenaturais mais significativos associados a ele:

                1. A pomba divina: O evento mais extraordinário relacionado a São Fabiano foi o milagre da pomba branca que desceu do céu e pousou sobre sua cabeça durante a assembleia que escolheria o novo Papa. Este sinal divino foi tão convincente que mesmo sendo um leigo e desconhecido para muitos presentes, foi imediatamente aclamado como o escolhido de Deus para liderar a Igreja.

                2. Preservação da fé durante a perseguição: Durante seu pontificado, São Fabiano conseguiu manter a unidade e a força da Igreja em Roma, mesmo em tempos difíceis. Sua capacidade de organizar a Igreja e fortalecer a fé dos cristãos em meio às adversidades é considerada por muitos como uma graça especial concedida por Deus.

                3. Milagres póstumos: Após seu martírio, diversos milagres foram relatados por fiéis que visitavam seu túmulo nas Catacumbas de São Calisto. Curas, conversões e graças espirituais foram atribuídas à sua intercessão, o que contribuiu para a rápida difusão de seu culto.

                4. Incorruptibilidade: Segundo algumas tradições, quando seu corpo foi exumado anos após sua morte para ser transferido para uma basílica em Roma, foi encontrado em estado de preservação extraordinária, o que foi interpretado como um sinal de sua santidade.
            `,
            reliquias: `
                As relíquias de São Fabiano têm uma história de grande veneração na Igreja:

                1. Sepultamento inicial: Após seu martírio em 250, o corpo de São Fabiano foi reverentemente sepultado pelos cristãos nas Catacumbas de São Calisto, em Roma, onde havia uma cripta especial destinada aos Papas. Uma lápide com seu nome em grego ("ΦΑΒΙΑΝΟC ΕΠΙC ΜΡΤ" - "Fabiano, bispo, mártir") foi colocada sobre seu túmulo, sendo uma das mais antigas inscrições papais conhecidas.

                2. Transferência para basílicas: No século IX, durante o pontificado do Papa Pascoal I, que se dedicou a transferir relíquias dos mártires das catacumbas para igrejas dentro da cidade de Roma, parte das relíquias de São Fabiano foi transferida para a Basílica de Santa Praxedes.

                3. Localização atual: No século XVIII, o Papa Clemente XI ordenou que os restos mortais de São Fabiano fossem transferidos para a Basílica de São Sebastião Fora dos Muros (San Sebastiano fuori le mura), em Roma, onde são venerados até hoje. Uma parte de suas relíquias também se encontra na igreja de San Fabiano e Venanzio, em Roma.

                4. Fragmentos pelo mundo: Como era comum na Idade Média, pequenos fragmentos de suas relíquias foram distribuídos para diversas igrejas pela Europa, especialmente aquelas dedicadas a São Fabiano ou que tinham uma devoção especial a este santo Papa mártir.

                5. Catacumbas de São Calisto: Embora seu corpo tenha sido transferido, o local original de seu sepultamento nas Catacumbas de São Calisto ainda é visitado por peregrinos. A lápide original com seu nome, uma das mais antigas evidências epigráficas do culto aos mártires, é preservada no Museu das Catacumbas.
            `,
            devocao: `
                São Fabiano é venerado como um dos grandes Papas mártires da Igreja primitiva:

                1. Festa litúrgica: Sua memória é celebrada em 20 de janeiro no calendário litúrgico da Igreja Católica Romana, data de seu martírio. Na Igreja Ortodoxa, é comemorado em 5 de agosto, enquanto na Igreja Copta sua festa é celebrada em 7 e 11 de Amshir (correspondendo a fevereiro no calendário gregoriano).

                2. Patronato: São Fabiano é invocado como:
                   - Protetor contra epidemias e doenças infecciosas
                   - Padroeiro dos oleiros e fabricantes de cerâmica
                   - Intercessor para uma boa morte
                   - Protetor dos perseguidos por sua fé

                3. Iconografia: Na arte cristã, São Fabiano é geralmente representado com:
                   - Vestes papais e tiara
                   - Uma pomba branca pousada sobre sua cabeça ou voando acima dela
                   - A palma do martírio
                   - Às vezes, é retratado com a espada, instrumento de seu martírio

                4. Igrejas e locais de culto: Diversas igrejas ao redor do mundo são dedicadas a São Fabiano, frequentemente em conjunto com São Sebastião, outro mártir da perseguição de Décio que é celebrado no mesmo dia. A mais notável é a igreja de San Fabiano e Venanzio em Roma.

                5. Tradições populares: Em algumas regiões da Itália, especialmente em Roma, realizam-se procissões em sua honra no dia 20 de janeiro. Em certas localidades rurais, sua festa coincide com o início dos preparativos para o plantio da primavera, e ele é invocado para abençoar as sementes.

                6. Orações e devoções: Uma oração tradicional a São Fabiano pede sua intercessão para obter firmeza na fé durante as perseguições e tribulações, refletindo seu próprio testemunho de fidelidade até a morte.
            `
        }
    },
    {
        name: "Santa Ágata",
        description: "Virgem e mártir, resistiu à perseguição e teve os seios cortados como tortura.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                Santa Ágata (em latim, Agatha) nasceu em Catânia, na Sicília, Itália, por volta do ano 231, em uma família nobre e cristã. Desde jovem, consagrou sua virgindade a Deus, dedicando-se a uma vida de oração e caridade.

                Durante o reinado do imperador Décio (249-251), iniciou-se uma violenta perseguição contra os cristãos. Nessa época, Quinciano, governador da Sicília, conheceu Ágata e, impressionado com sua beleza e riqueza, desejou desposá-la. Ao saber que ela era cristã e havia consagrado sua virgindade a Deus, tentou persuadi-la a renunciar à sua fé e aceitar seu pedido de casamento.

                Diante da recusa firme de Ágata, Quinciano ordenou que ela fosse entregue a uma mulher de má reputação chamada Afrodisia, que administrava uma casa de prostituição, na esperança de que o ambiente corrupto a fizesse mudar de ideia. No entanto, Ágata permaneceu inabalável em sua fé e pureza durante um mês naquele lugar.

                Furioso com sua persistência, Quinciano a submeteu a um julgamento público, onde ela declarou corajosamente: "Minha liberdade está em Cristo". Como punição por sua recusa em renunciar ao cristianismo e ceder aos desejos do governador, Ágata foi submetida a terríveis torturas. A mais cruel delas foi ter seus seios cortados, um ato de brutalidade que se tornou parte central de sua iconografia.

                Após essa mutilação, Ágata foi lançada em uma prisão escura, sem comida nem cuidados médicos. Durante a noite, conta a tradição que São Pedro apareceu a ela em uma visão, curando milagrosamente seus ferimentos. Quinciano, ao ver que ela havia sido curada, ordenou que fosse rolada sobre cacos de cerâmica e brasas ardentes. Durante este suplício final, ocorreu um terremoto em Catânia, e parte do palácio desabou, matando dois conselheiros do governador.

                Temendo uma revolta popular, Quinciano ordenou que Ágata fosse devolvida à prisão, onde ela faleceu em oração no dia 5 de fevereiro de 251, entregando sua alma a Deus.
            `,
            milagres: `
                Santa Ágata é conhecida por diversos milagres, tanto durante sua vida quanto após sua morte:

                1. Cura milagrosa na prisão: O mais famoso milagre durante sua vida ocorreu quando, após ter seus seios cortados e ser lançada na prisão sem tratamento médico, São Pedro apareceu a ela em uma visão e curou completamente seus ferimentos. Quando os guardas a viram no dia seguinte, ficaram espantados ao encontrá-la perfeitamente curada.

                2. Proteção de Catânia contra a erupção do Etna: Um ano após sua morte, o vulcão Etna entrou em erupção, ameaçando destruir a cidade de Catânia. Os habitantes, desesperados, pegaram o véu que cobria o túmulo de Santa Ágata e o colocaram diante da lava que avançava. Milagrosamente, o fluxo de lava parou imediatamente, salvando a cidade. Este milagre estabeleceu Santa Ágata como protetora contra incêndios, erupções vulcânicas e outros desastres naturais.

                3. Proteção durante terremotos: Em 1693, um devastador terremoto atingiu a Sicília, destruindo grande parte de Catânia. As relíquias de Santa Ágata foram levadas em procissão, e muitos sobreviventes atribuíram sua salvação à intercessão da santa.

                4. Curas de doenças mamárias: Ao longo dos séculos, inúmeras mulheres relataram curas de doenças nos seios após orarem a Santa Ágata, estabelecendo-a como padroeira das mulheres que sofrem de doenças mamárias.

                5. Proteção dos bombeiros: Diversos relatos de bombeiros sendo salvos de situações perigosas são atribuídos à intercessão de Santa Ágata, reforçando seu patronato sobre esta profissão.

                6. Milagre do maná: Desde o século XVI, relata-se que um líquido milagroso, chamado "maná", emana periodicamente do túmulo de Santa Ágata. Este líquido é coletado e distribuído aos fiéis, que relatam curas e graças recebidas após seu uso devocional.
            `,
            reliquias: `
                As relíquias de Santa Ágata têm uma história de grande veneração e algumas peripécias ao longo dos séculos:

                1. Sepultamento inicial: Após seu martírio em 251, o corpo de Santa Ágata foi reverentemente sepultado pelos cristãos de Catânia em um local chamado "Agatha vetere" (Ágata antiga).

                2. Transferência para Constantinopla: Em 1040, o general bizantino Jorge Maniaces levou as relíquias de Santa Ágata para Constantinopla durante uma campanha militar na Sicília, onde permaneceram por cerca de 86 anos.

                3. Retorno a Catânia: Em 1126, dois soldados chamados Gisliberto e Goselmo, possivelmente a mando do bispo de Catânia, conseguiram recuperar as relíquias e devolvê-las à cidade natal da santa. Este evento é comemorado anualmente em 17 de agosto.

                4. Catedral de Catânia: Atualmente, a maior parte das relíquias de Santa Ágata está preservada na Catedral de Catânia, dedicada a ela. Seus restos mortais são guardados em um relicário de prata, que é levado em procissão durante sua festa em fevereiro.

                5. Relicários específicos: Além do relicário principal, existem relicários separados para partes específicas, como o véu que teria detido a lava do Etna, guardado em um relicário de prata do século XVII.

                6. Fragmentos pelo mundo: Como era comum na Idade Média, pequenos fragmentos de suas relíquias foram distribuídos para diversas igrejas pela Europa. Igrejas dedicadas a Santa Ágata em Roma, Malta e outras partes da Itália possuem fragmentos de suas relíquias.

                7. Busto relicário: Um dos mais famosos tesouros associados a Santa Ágata é o busto-relicário de prata, criado no século XVII, que contém parte de seu crânio. Esta peça é ricamente adornada com joias doadas pelos fiéis ao longo dos séculos e é um dos símbolos mais importantes da devoção à santa.
            `,
            devocao: `
                Santa Ágata é uma das santas mais veneradas do cristianismo, especialmente na tradição católica:

                1. Festa litúrgica: Sua memória é celebrada em 5 de fevereiro no calendário litúrgico da Igreja Católica, data de seu martírio. Em Catânia, sua festa é celebrada com grande solenidade durante cinco dias (3 a 7 de fevereiro), atraindo milhares de peregrinos e turistas.

                2. Patronato: Santa Ágata é invocada como padroeira de:
                    - Catânia e da Sicília
                    - Mulheres que sofrem de doenças mamárias
                    - Enfermeiras e profissionais de saúde
                    - Bombeiros e proteção contra incêndios
                    - Fundidores de sinos (devido à lenda de que seus seios cortados se assemelhavam a sinos)
                    - Proteção contra erupções vulcânicas e terremotos

                3. Iconografia: Na arte cristã, Santa Ágata é geralmente representada como uma jovem segurando uma bandeja com seus seios cortados. Outros atributos incluem:
                    - A palma do martírio
                    - Pinças ou tenazes (instrumentos de seu martírio)
                    - Um véu (referência ao milagre que deteve a lava do Etna)
                    - Às vezes, é retratada com São Pedro curando seus ferimentos

                4. Tradições populares: Em Catânia, durante sua festa, realiza-se uma grandiosa procissão com o busto-relicário e o relicário de prata contendo suas relíquias. A procissão percorre os locais associados ao seu martírio e é acompanhada por milhares de fiéis vestidos com a tradicional "saia branca" (sacco bianco).

                5. Gastronomia: Em sua honra, são preparados doces tradicionais chamados "minne di Sant'Agata" (seios de Santa Ágata), pequenos bolos redondos cobertos com glacê branco e uma cereja no topo, simbolizando seus seios.

                6. Orações e devoções: Diversas orações são dirigidas a Santa Ágata, especialmente por mulheres que sofrem de doenças mamárias ou que enfrentam cirurgias nos seios. Uma oração tradicional pede sua proteção contra incêndios e desastres naturais.

                7. Igrejas e santuários: Numerosas igrejas ao redor do mundo são dedicadas a Santa Ágata, sendo a mais importante a Catedral de Catânia. Em Roma, existe a antiga igreja de Sant'Agata dei Goti, e em Malta, onde a devoção à santa também é muito forte, há diversas igrejas em sua honra.
            `
        }
    },
    {
        name: "São Vicente",
        description: "Diácono e mártir espanhol, sofreu torturas horríveis por sua fé.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Vicente nasceu em Huesca, próximo a Saragoça, Espanha, no final do século III. Filho de Eutríquio e Enola, recebeu uma excelente educação cristã em Saragoça, onde foi ordenado diácono pelo Bispo Valério.

                Como o bispo sofria de um impedimento na fala, Vicente tornou-se seu porta-voz, pregando e ensinando em seu nome. Durante a perseguição de Diocleciano aos cristãos na Espanha, tanto Vicente quanto o Bispo Valério foram presos e levados acorrentados até Valência.

                Enquanto o Bispo Valério foi exilado, Vicente foi submetido a terríveis torturas por ordem do governador Daciano. Foi esticado em uma roda, dilacerado com ganchos de metal e colocado sobre uma grade de ferro aquecida por brasas. Sal e banha foram esfregados em suas feridas para aumentar seu sofrimento.

                Mesmo sob tortura extrema, Vicente manteve sua fé inabalável, com os olhos fixos no céu. Foi então lançado em uma masmorra solitária, cujo chão estava coberto de cacos pontiagudos que aumentavam a agonia de seu corpo já dilacerado.

                Vicente declarou que os anjos do céu vieram confortá-lo. Sua cela, segundo ele, estava iluminada por uma luz celestial e perfumada como se estivesse cheia de rosas. Cantava hinos enquanto sofria, o que levou até mesmo seu carcereiro à conversão.

                São Vicente morreu em 22 de janeiro de 304, sucumbindo aos ferimentos na prisão. É considerado o protomártir da Espanha.
            `,
            milagres: `
                São Vicente é conhecido por diversos milagres, tanto durante seu martírio quanto após sua morte:

                1. Conforto angelical: Durante seu encarceramento, anjos apareceram para confortá-lo, enchendo sua cela de luz celestial e fragrância de rosas.

                2. Conversão do carcereiro: O testemunho de sua fé inabalável e seus cânticos durante o martírio levaram seu carcereiro à conversão ao cristianismo.

                3. Preservação milagrosa: Após sua morte, seu corpo foi lançado em um pântano para ser devorado por animais selvagens, mas foi miraculosamente preservado por um corvo que afugentava qualquer animal que tentasse se aproximar.

                4. Retorno do mar: Quando seu corpo foi costurado em um saco, amarrado a uma pedra e lançado ao mar, as ondas o trouxeram de volta à praia durante a noite.

                5. Curas milagrosas: Diversos fiéis foram curados ao tocar suas vestes ensanguentadas durante seu martírio.

                6. Milagres póstumos: Numerosas curas e graças foram relatadas junto ao seu túmulo após sua morte.
            `,
            reliquias: `
                As relíquias de São Vicente têm uma história notável:

                1. Inicialmente, após seu corpo ter sido trazido milagrosamente pelo mar, foi sepultado secretamente por cristãos devotos.

                2. Quando a paz foi restaurada à Igreja, uma capela foi construída sobre seus restos mortais fora dos muros de Valência.

                3. Suas relíquias foram posteriormente distribuídas por várias igrejas na Espanha e Portugal:
                   - A principal parte está na Catedral de Valência
                   - Fragmentos significativos estão em Saragoça
                   - Algumas relíquias foram levadas para Lisboa, onde são veneradas na Sé Catedral

                4. Durante as invasões muçulmanas na Península Ibérica, parte de suas relíquias foi transferida para o Cabo de São Vicente, no Algarve, Portugal, que recebeu seu nome.

                5. Diversas igrejas na Europa possuem fragmentos de suas relíquias, testemunhando a ampla devoção ao santo.
            `,
            devocao: `
                São Vicente é um dos santos mais venerados da Península Ibérica. Sua festa litúrgica é celebrada em 22 de janeiro.

                É invocado como patrono de:
                - Valência e Saragoça (Espanha)
                - Portugal
                - Padeiros
                - Fabricantes de telhas e telhados
                - Marinheiros
                - Vinhateiros e vinicultores

                Na iconografia cristã, São Vicente é geralmente representado:
                - Como um jovem diácono com dalmática
                - Com instrumentos de seu martírio (grelha, ganchos)
                - Com um corvo protegendo seu corpo
                - Às vezes, com um barco ou uma pedra de moinho

                Sua devoção é particularmente forte em:
                - Espanha, especialmente em Valência e Saragoça
                - Portugal, onde o Cabo de São Vicente leva seu nome
                - América Latina, onde diversas igrejas e localidades são dedicadas a ele

                Tradições populares incluem procissões marítimas em sua honra e a bênção de vinhedos e padarias em seu dia festivo.
            `
        }
    },
    {
        name: "Santa Lúcia",
        description: "Virgem e mártir, arrancou os próprios olhos para preservar sua castidade.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                Santa Lúcia nasceu em Siracusa, Sicília, por volta do ano 283, em uma família nobre e cristã. Seu pai faleceu quando ela ainda era criança, sendo criada por sua mãe Eutíquia. Desde jovem, Lúcia consagrou secretamente sua virgindade a Cristo.

                Sua mãe, sem saber deste voto, arranjou seu casamento com um jovem pagão. Nesta época, Eutíquia sofria de uma grave hemorragia. Lúcia convenceu sua mãe a visitar o túmulo de Santa Águeda em Catânia para pedir sua cura. Quando sua mãe foi miraculosamente curada, Lúcia revelou seu voto de virgindade e pediu permissão para dedicar sua vida a Cristo e aos pobres.

                O pretendente rejeitado, enfurecido ao saber que Lúcia havia distribuído grande parte de seu dote aos pobres, denunciou-a como cristã ao governador Pascásio, durante a perseguição de Diocleciano. O governador ordenou que ela sacrificasse aos deuses pagãos, mas Lúcia recusou-se firmemente.

                Pascásio tentou então enviá-la a um prostíbulo para ser violada, mas quando os guardas tentaram movê-la, ela se tornou tão pesada que nem mesmo vários pares de bois conseguiram arrastá-la. O governador ordenou então que ela fosse torturada de várias maneiras, incluindo ser queimada viva, mas as chamas não a tocaram.

                Finalmente, foi morta com uma espada atravessada em sua garganta, em 13 de dezembro de 304. Antes de morrer, profetizou a queda de Diocleciano e a paz para a Igreja, que de fato o ocorreu poucos anos depois.
            `,
            milagres: `
                Santa Lúcia é conhecida por diversos milagres, tanto em vida quanto após sua morte:

                1. Imobilidade milagrosa: Quando tentaram levá-la ao prostíbulo, tornou-se tão pesada que nem mesmo vários pares de bois conseguiram movê-la.

                2. Proteção contra o fogo: As chamas que deveriam queimá-la viva não a tocaram, dividindo-se ao seu redor.

                3. Cura de sua mãe: Através de suas orações junto ao túmulo de Santa Águeda, sua mãe foi curada de uma hemorragia incurável.

                4. Visão preservada: Segundo algumas versões de sua história, mesmo após seus olhos terem sido arrancados, ela continuou a ver perfeitamente.

                5. Aparição a navegantes: Diversos relatos ao longo dos séculos mencionam sua aparição para salvar navios em perigo.

                6. Curas de doenças dos olhos: Inúmeras curas de problemas oculares são atribuídas à sua intercessão.
            `,
            reliquias: `
                As relíquias de Santa Lúcia têm uma história de peregrinação através dos séculos:

                1. Inicialmente, seu corpo foi sepultado em Siracusa, onde permaneceu por cerca de 400 anos.

                2. No século VIII, o general bizantino Jorge Maniaces levou suas relíquias para Constantinopla para protegê-las dos sarracenos.

                3. Durante a Quarta Cruzada (1204), os venezianos tomaram suas relíquias e as transferiram para Veneza, onde foram depositadas na igreja de São Jerônimo.

                4. Em 1279, suas relíquias foram transferidas para a igreja de Santa Lúcia em Veneza, que foi demolida no século XIX para dar lugar à estação ferroviária que leva seu nome.

                5. Atualmente, o corpo de Santa Lúcia repousa na igreja de São Jerônimo em Veneza, exceto por algumas relíquias que foram devolvidas a Siracusa em 2004.

                6. Fragmentos de suas relíquias estão presentes em várias igrejas ao redor do mundo, especialmente em igrejas dedicadas a ela.
            `,
            devocao: `
                Santa Lúcia é uma das santas mais populares e veneradas da cristandade. Sua festa litúrgica é celebrada em 13 de dezembro.

                É invocada como padroeira de:
                - Pessoas com problemas nos olhos
                - Cegos e deficientes visuais
                - Escritores, costureiras e vidraceiros
                - Cidade de Siracusa
                - Contra doenças epidêmicas

                Na iconografia cristã, Santa Lúcia é geralmente representada:
                - Como uma jovem vestida de branco
                - Carregando uma bandeja com seus olhos
                - Com uma palma do martírio
                - Com uma espada atravessando seu pescoço
                - Às vezes, com uma lâmpada ou tocha (seu nome significa "luz")

                Tradições populares:
                - Na Escandinávia, especialmente na Suécia, sua festa é celebrada com procissões onde uma jovem usa uma coroa de velas
                - Em várias partes da Itália, não se come farinha no dia de sua festa
                - Sua festa coincide com o solstício de inverno no antigo calendário juliano, associando-a à luz
                - Em muitos países, é costume fazer doces especiais em sua honra

                Sua devoção é particularmente forte em:
                - Itália, especialmente Siracusa e Veneza
                - Suécia e outros países escandinavos
                - Filipinas e outros países asiáticos
                - América Latina
            `
        }
    },
    {
        name: "São Basílio",
        description: "Bispo e doutor da Igreja, conhecido por sua caridade e defesa da fé.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Basílio Magno nasceu em Cesareia da Capadócia (atual Turquia) por volta do ano 330, em uma família de santos. Seus pais eram São Basílio, o Velho, e Santa Emília. Entre seus irmãos estavam São Gregório de Nissa, São Pedro de Sebaste e Santa Macrina, a Jovem.

                Recebeu uma excelente educação em Cesareia, Constantinopla e Atenas, onde conheceu São Gregório Nazianzeno, com quem desenvolveu uma profunda amizade. Após concluir seus estudos, tornou-se professor de retórica, mas logo sentiu o chamado para uma vida mais profunda.

                Influenciado por sua irmã Macrina, abandonou sua carreira promissora e viajou pelo Egito, Síria e Mesopotâmia para estudar a vida monástica. Ao retornar, distribuiu seus bens aos pobres e fundou um mosteiro às margens do rio Íris, estabelecendo as bases do monasticismo oriental.

                Em 364, foi ordenado sacerdote e, em 370, tornou-se Bispo de Cesareia. Como bispo, destacou-se por sua defesa da fé contra o arianismo, sua caridade extraordinária e sua habilidade administrativa. Construiu um complexo de instituições de caridade conhecido como "Basilíada", que incluía hospital, hospedaria e escola.

                São Basílio faleceu em 1º de janeiro de 379, aos 49 anos, esgotado por suas austeridades e trabalhos. É considerado um dos maiores Padres da Igreja e um dos quatro grandes doutores da Igreja Oriental.
            `,
            milagres: `
                São Basílio é conhecido por diversos milagres e intervenções divinas:

                1. O milagre do pão: Durante uma fome, multiplicou milagrosamente o pão para alimentar a população necessitada.

                2. Vitória sobre Juliano: Através de suas orações, obteve a proteção divina contra o imperador Juliano, o Apóstata, que ameaçava destruir Cesareia.

                3. Cura de enfermos: Realizou numerosas curas na Basilíada, o complexo hospitalar que fundou.

                4. Aparição da Virgem Maria: Recebeu uma visão da Virgem Maria acompanhada por São Mercúrio, que prometeu a derrota do imperador Juliano.

                5. Conversão de judeus: Através de um debate milagroso, converteu um grupo de judeus ao demonstrar a verdade da fé cristã.

                6. Dom da profecia: Previu diversos acontecimentos, incluindo a morte do imperador Valente, que perseguia os cristãos.
            `,
            reliquias: `
                As relíquias de São Basílio têm uma história de grande veneração:

                1. Seu corpo foi inicialmente sepultado na catedral de Cesareia, onde multidões acorriam para venerá-lo.

                2. Durante as invasões muçulmanas, parte de suas relíquias foi transferida para Constantinopla para proteção.

                3. Atualmente, suas relíquias estão distribuídas em vários lugares:
                   - Parte significativa está na Basílica de São Basílio em Bruxelas
                   - Fragmentos importantes estão no Monte Atos, Grécia
                   - Algumas relíquias estão em Roma, na Basílica de Santa Maria Maior

                4. A veneração de suas relíquias é particularmente forte nas Igrejas Orientais, onde é considerado um dos maiores santos.
            `,
            devocao: `
                São Basílio é um dos santos mais venerados tanto na Igreja Oriental quanto Ocidental:

                Sua festa litúrgica é celebrada em:
                - 2 de janeiro na Igreja Católica Romana
                - 1º de janeiro na Igreja Ortodoxa
                - 30 de janeiro nas Igrejas Orientais Católicas

                É invocado como patrono de:
                - Monges e vida monástica
                - Hospitais e enfermeiros
                - Reformadores da Igreja
                - Educação e estudos
                - Rússia e Grécia

                Na iconografia cristã, São Basílio é representado como:
                - Bispo com vestes episcopais orientais
                - Segurando um livro (suas obras teológicas)
                - Com uma pomba (símbolo do Espírito Santo)
                - Às vezes, com uma colmeia (símbolo de sabedoria)

                Sua influência permanece através:
                - Da Regra de São Basílio, fundamental para o monasticismo oriental
                - Da Divina Liturgia de São Basílio, usada em ocasiões especiais nas Igrejas Orientais
                - De suas obras teológicas sobre o Espírito Santo e a vida monástica
                - Do modelo de caridade organizada que estabeleceu com a Basilíada
            `
        }
    },
    {
        name: "São Nicásio",
        description: "Bispo e mártir, decapitado enquanto orava durante uma invasão.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Nicásio nasceu na Gália (atual França) no final do século IV. Foi eleito bispo de Reims por volta do ano 400, sucedendo a São Severus. Durante seu episcopado, dedicou-se à evangelização da região e à construção de uma grande igreja dedicada à Virgem Maria, que seria a precursora da atual Catedral de Reims.

                Era conhecido por sua santidade, zelo apostólico e caridade para com os pobres. Em uma época de grandes turbulências, quando os bárbaros invadiam o Império Romano, Nicásio permaneceu firme em seu posto, recusando-se a abandonar seu rebanho.

                Em 407, quando os vândalos sitiaram Reims, Nicásio previu o martírio que o aguardava. Mesmo assim, continuou a confortar seu povo e a prepará-los espiritualmente para a provação que se aproximava. Quando os invasores finalmente entraram na cidade, encontraram o bispo na porta de sua igreja.

                Nicásio estava recitando o Salmo 119: "Minha alma está prostrada no pó". Quando chegou ao versículo "Adhaesit pavimento anima mea" (Minha alma está prostrada no pó), foi decapitado pelos bárbaros. Segundo a tradição, após sua decapitação, ele terminou o versículo: "Vivifica me secundum verbum tuum" (Dá-me vida segundo a tua palavra).

                Junto com ele foram martirizados sua irmã Eutrópia, o diácono Florêncio e o leitor Jocundo. Santa Eutrópia, vendo que os bárbaros a observavam com luxúria, provocou-os para que também a matassem, preferindo o martírio à desonra.
            `,
            milagres: `
                São Nicásio é conhecido por diversos milagres, tanto em vida quanto após sua morte:

                1. Profecia do martírio: Previu com exatidão a invasão dos vândalos e seu próprio martírio.

                2. Milagre da voz: Segundo a tradição, após ser decapitado, completou milagrosamente o versículo do salmo que estava recitando.

                3. Proteção da cidade: Após seu martírio, tornou-se protetor especial de Reims contra invasões e calamidades.

                4. Curas milagrosas: Diversos relatos de curas foram atribuídos à sua intercessão, especialmente em seu túmulo.

                5. Aparições: Durante a Idade Média, houve relatos de suas aparições protegendo a cidade de Reims durante momentos de perigo.

                6. Conversão dos bárbaros: Segundo algumas fontes, muitos dos invasores se converteram ao cristianismo após testemunharem seu martírio heroico.
            `,
            reliquias: `
                As relíquias de São Nicásio têm uma história significativa:

                1. Inicialmente, seu corpo e o de seus companheiros mártires foram sepultados na igreja de São Agrícola, nos arredores de Reims.

                2. No século V, São Remígio transferiu suas relíquias para a basílica de São Nicásio, especialmente construída em sua honra.

                3. Durante a Idade Média, suas relíquias foram objeto de grande veneração e peregrinação:
                   - A basílica que abrigava suas relíquias tornou-se um importante centro de peregrinação
                   - Diversos milagres foram relatados em seu túmulo
                   - Fragmentos de suas relíquias foram distribuídos para várias igrejas da região

                4. Durante a Revolução Francesa, parte de suas relíquias foi perdida ou destruída, mas alguns fragmentos foram preservados.

                5. Atualmente, suas relíquias são veneradas na Catedral de Reims, onde uma capela é dedicada à sua memória.
            `,
            devocao: `
                São Nicásio é venerado como um dos grandes mártires da Igreja na Gália. Sua festa litúrgica é celebrada em 14 de dezembro.

                É invocado como patrono contra:
                - Invasões e guerras
                - Epidemias e doenças contagiosas
                - Morte súbita
                - Pesadelos

                São Nicásio é padroeiro de:
                - Cidade de Reims
                - Vítimas de invasões
                - Bispos em tempos de perseguição

                Na iconografia cristã, é geralmente representado:
                - Como bispo com vestes episcopais
                - Segurando sua cabeça decepada (cephalophore)
                - Com a palma do martírio
                - Às vezes, com sua irmã Santa Eutrópia

                Sua devoção é particularmente forte em:
                - Reims e região da Champagne
                - Norte da França
                - Locais historicamente afetados por invasões

                Tradições e legado:
                - A Catedral de Reims, onde foi martirizado, tornou-se local de coroação dos reis da França
                - Seu exemplo de coragem e fidelidade inspirou muitos durante as invasões posteriores
                - É considerado um dos grandes defensores da fé na história da Igreja na França
                - Sua história é frequentemente citada como exemplo de fidelidade pastoral em tempos de crise
            `
        }
    },
    {
        name: "São Tomé Apóstolo",
        description: "Apóstolo que duvidou, pregou na Índia e foi martirizado.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Tomé, também conhecido como Dídimo (que significa "gêmeo"), foi um dos doze apóstolos de Jesus Cristo. Embora os Evangelhos não mencionem sua origem, acredita-se que era judeu da Galileia. É mais conhecido pelo episódio em que duvidou da ressurreição de Jesus, exigindo ver e tocar suas chagas para crer.

                Após Pentecostes, segundo antigas tradições, Tomé evangelizou primeiro na Síria e Pérsia, chegando até a Índia por volta do ano 52 d.C. Na Índia, pregou inicialmente em Kerala, onde converteu muitas famílias brâmanes e fundou as chamadas "Sete Igrejas e Meia".

                De acordo com a tradição indiana, Tomé chegou ao porto de Muziris (atual Kodungallur) e estabeleceu comunidades cristãs ao longo da costa Malabar. Posteriormente, viajou para a costa leste, chegando a Mylapore (atual Chennai), onde converteu muitas pessoas, incluindo o rei local.

                Sua pregação provocou a ira dos sacerdotes brâmanes, que temiam perder sua influência. Segundo a tradição, foi martirizado em 3 de julho do ano 72, no Monte São Tomé, em Mylapore. Foi morto com uma lança enquanto orava diante de uma cruz que ele mesmo havia esculpido na rocha.

                Antes de sua morte, profetizou que estrangeiros viriam de longe para continuar seu trabalho de evangelização, o que os cristãos indianos interpretaram como cumprido com a chegada dos portugueses no século XVI.
            `,
            milagres: `
                São Tomé realizou diversos milagres, tanto durante sua vida quanto após sua morte:

                1. O milagre do palácio: Segundo os Atos de Tomé, foi contratado por um rei indiano para construir um palácio, mas usou o dinheiro para ajudar os pobres. Quando questionado, revelou que havia construído um palácio no céu através de suas obras de caridade.

                2. Cura do filho do rei: Em Mylapore, curou o filho do rei local, levando à conversão de muitas pessoas.

                3. A água da construção: Durante a construção de uma igreja, fez brotar água de uma rocha para os trabalhadores sedentos.

                4. O toque nas chagas: Ao tocar as chagas de Cristo ressuscitado, foi curado de sua incredulidade e proclamou "Meu Senhor e meu Deus!", uma das mais profundas confissões de fé no Novo Testamento.

                5. A coluna de fogo: No momento de seu martírio, testemunhas relataram ter visto uma coluna de fogo sobre seu corpo.

                6. Terra milagrosa: A terra do local de seu martírio, quando misturada com água, era conhecida por ter propriedades curativas.
            `,
            reliquias: `
                As relíquias de São Tomé têm uma história complexa e fascinante:

                1. Sepultamento inicial: Após seu martírio em Mylapore, seu corpo foi enterrado na igreja que ele havia fundado, hoje conhecida como Basílica de São Tomé.

                2. Transferência para Edessa: No século III, suas relíquias foram transferidas para Edessa (atual Urfa, Turquia), onde foram muito veneradas.

                3. Transferência para Ortona: Em 1258, suas relíquias foram levadas para Ortona, Itália, para protegê-las da invasão muçulmana. Atualmente, a maior parte de seus restos mortais está na Basílica de São Tomé em Ortona.

                4. Relíquias na Índia:
                   - A lança que o matou está preservada na igreja do Monte São Tomé
                   - Um osso do dedo (aquele que tocou as chagas de Cristo) está na igreja de Kokkamangalam
                   - Fragmentos de seus ossos estão em várias igrejas da Índia

                5. Outras relíquias:
                   - A cruz que ele esculpiu ainda existe no Monte São Tomé
                   - Seu túmulo original em Mylapore ainda é local de peregrinação
                   - Várias igrejas ao redor do mundo possuem pequenos fragmentos de suas relíquias
            `,
            devocao: `
                São Tomé é venerado como apóstolo e mártir em todas as tradições cristãs. Sua festa litúrgica é celebrada em:

                - 3 de julho na Igreja Católica (anteriormente 21 de dezembro)
                - 6 de outubro nas Igrejas Ortodoxas
                - 3 de julho na Igreja Síria Malabar
                - 18 de dezembro na Igreja Anglicana

                É invocado como patrono de:
                - Índia e Paquistão
                - Arquitetos e construtores
                - Carpinteiros e pedreiros
                - Geômetras e agrimensores
                - Pessoas com dúvidas na fé
                - Teólogos e estudiosos

                Na iconografia cristã, é representado:
                - Com uma lança (instrumento de seu martírio)
                - Com um esquadro de carpinteiro
                - Tocando as chagas de Cristo
                - Às vezes, construindo o palácio celestial

                Sua devoção é particularmente forte em:
                - Índia, especialmente em Kerala e Tamil Nadu
                - Itália, principalmente em Ortona
                - Portugal e suas antigas colônias
                - Comunidades cristãs sírias

                Tradições e legado:
                - Os cristãos de São Tomé na Índia traçam sua origem até seu apostolado
                - O "Caminho de São Tomé" na Índia é uma importante rota de peregrinação
                - Sua história inspira reflexões sobre fé e dúvida na vida cristã
                - É considerado o padroeiro dos que buscam certezas na fé
            `
        }
    },
    {
        name: "Santa Anastácia",
        description: "Mártir que curou doentes e confortou cristãos presos.",
        isDisplayed: true
    },
    {
        name: "Santa Eugênia",
        description: "Virgem que se disfarçou de homem para viver como monge, martirizada.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                Santa Eugênia nasceu em Roma no século III, filha de Filipe, governador do Egito, e de Cláudia, uma nobre romana. Recebeu excelente educação e era conhecida tanto por sua beleza quanto por sua inteligência, sendo versada em filosofia e literatura.

                Aos quinze anos, após ler escritos cristãos, especialmente as cartas de São Paulo, converteu-se secretamente ao cristianismo. Para evitar um casamento arranjado e poder dedicar-se inteiramente a Deus, cortou os cabelos, vestiu-se como homem e, acompanhada por dois servos cristãos, Proto e Jacinto, fugiu de casa.

                Apresentando-se como "Eugênio", foi aceita em um mosteiro masculino nos arredores de Alexandria, onde sua piedade e sabedoria logo a destacaram. Após a morte do abade, foi escolhida para sucedê-lo, sem que ninguém soubesse sua verdadeira identidade.

                Sua identidade foi revelada quando uma mulher rica chamada Melância, que havia sido curada por suas orações, apaixonou-se por ela pensando ser um homem. Ao ser rejeitada, Melância acusou "Eugênio" de assédio. Durante o julgamento, presidido por seu próprio pai (que não a reconheceu), Eugênia revelou sua verdadeira identidade.

                Este evento levou à conversão de seus pais e de muitos outros. Quando seu pai se tornou cristão e foi eleito bispo, foi martirizado por sua fé. Eugênia, sua mãe e seus servos retornaram a Roma, onde continuaram a pregar o cristianismo. Durante a perseguição de Valeriano, foi presa e submetida a várias torturas. Finalmente, foi decapitada em 25 de dezembro de 258.
            `,
            milagres: `
                Santa Eugênia realizou diversos milagres durante sua vida e após sua morte:

                1. Dom da cura: Curou Melância de uma grave enfermidade através de suas orações, embora este milagre tenha posteriormente levado à sua revelação.

                2. Proteção divina: Durante sua vida como "monge", várias vezes foi protegida milagrosamente de ser descoberta.

                3. Conversões: Sua revelação e testemunho levaram à conversão de sua família inteira e de muitos pagãos.

                4. Sobrevivência a torturas: Durante seu martírio, sobreviveu milagrosamente a várias tentativas de execução:
                   - Foi jogada no Tibre com uma pedra amarrada ao pescoço, mas não se afogou
                   - Foi colocada em um forno ardente, mas as chamas não a tocaram
                   - Foi lançada em uma masmorra escura, onde uma luz celestial a iluminou

                5. Aparições: Apareceu a sua mãe após o martírio, prometendo que ela também receberia a coroa do martírio.

                6. Curas póstumas: Diversos milagres de cura foram relatados em seu túmulo.
            `,
            reliquias: `
                As relíquias de Santa Eugênia têm uma história significativa:

                1. Sepultamento inicial: Seu corpo foi sepultado na Via Latina, em Roma, onde sua mãe Cláudia construiu um cemitério cristão.

                2. Transferência: No século VI, suas relíquias foram transferidas para a Basílica dos Santos Apóstolos em Roma.

                3. Distribuição:
                   - A maior parte de suas relíquias permanece na Basílica dos Santos Apóstolos
                   - Alguns fragmentos foram distribuídos para outras igrejas em Roma
                   - Relíquias menores estão presentes em várias igrejas da Europa

                4. Veneração especial:
                   - Seu túmulo original na Via Latina foi um importante local de peregrinação
                   - Uma igreja foi construída sobre o local de seu martírio
                   - Suas relíquias são especialmente veneradas no período natalino, devido à data de seu martírio
            `,
            devocao: `
                Santa Eugênia é venerada como virgem e mártir. Sua festa litúrgica é celebrada em:

                - 25 de dezembro na Igreja Católica (embora frequentemente transferida devido ao Natal)
                - 24 de dezembro em algumas tradições locais
                - 6 de janeiro na Igreja Ortodoxa

                É invocada como padroeira de:
                - Convertidos ao cristianismo
                - Mulheres que vivem em situações difíceis
                - Pessoas que lutam contra calúnias
                - Vítimas de falsas acusações

                Na iconografia cristã, é representada:
                - Como uma jovem nobre romana
                - Vestida com hábito monástico masculino
                - Com a palma do martírio
                - Às vezes, com uma espada (instrumento de seu martírio)
                - Com seus servos Proto e Jacinto

                Sua devoção é particularmente forte em:
                - Roma, especialmente na Basílica dos Santos Apóstolos
                - Alexandria, Egito, onde viveu como monge
                - Comunidades monásticas femininas

                Tradições especiais:
                - É considerada um exemplo de coragem e determinação na busca da vida religiosa
                - Sua história inspirou várias obras literárias medievais
                - É frequentemente citada em discussões sobre vocação religiosa feminina
                - Sua festa coincide com o Natal, simbolizando o nascimento para a vida eterna através do martírio
            `
        }
    },
    {
        name: "Santo Estêvão Protomártir",
        description: "Primeiro mártir cristão, apedrejado por pregar o Evangelho.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                Santo Estêvão (em grego, Stephanos, que significa "coroa") foi um dos sete primeiros diáconos escolhidos pelos apóstolos para ajudar no serviço da Igreja primitiva em Jerusalém, conforme relatado no livro dos Atos dos Apóstolos. Era um judeu helenista, ou seja, de cultura grega, conhecido por sua profunda fé e sabedoria.

                Como diácono, além de servir às mesas e cuidar das viúvas, Estêvão destacou-se pela pregação eloquente do Evangelho. O livro dos Atos relata que ele era "cheio de graça e poder, realizava grandes prodígios e sinais entre o povo" (At 6,8).

                Sua pregação provocou forte oposição entre alguns grupos judeus, especialmente os membros da sinagoga dos Libertos. Não conseguindo vencê-lo em debates, pois "não podiam resistir à sabedoria e ao Espírito com que falava" (At 6,10), seus opositores subornaram falsas testemunhas para acusá-lo de blasfêmia contra Moisés e contra Deus.

                Levado ao Sinédrio (tribunal judaico), Estêvão fez um longo discurso recontando a história da salvação e denunciando a infidelidade dos líderes judeus. Durante seu discurso, teve uma visão de Jesus à direita de Deus. Ao declarar esta visão, seus opositores, enfurecidos, o arrastaram para fora da cidade e o apedrejaram.

                Antes de morrer, seguindo o exemplo de Jesus, Estêvão orou pelos seus perseguidores, dizendo: "Senhor, não lhes imputes este pecado" (At 7,60). Entre os presentes estava Saulo (futuro São Paulo), que aprovava sua execução. Estêvão tornou-se assim o primeiro mártir (protomártir) da Igreja, no ano 34 ou 35 d.C.
            `,
            milagres: `
                Santo Estêvão realizou diversos milagres, tanto em vida quanto após sua morte:

                1. Sinais e prodígios: O livro dos Atos menciona que realizava "grandes prodígios e sinais entre o povo" durante seu ministério.

                2. Visão celestial: Durante seu julgamento, teve uma visão de Jesus à direita de Deus Pai, sendo o primeiro mártir a ter tal visão.

                3. Rosto angelical: Durante seu discurso no Sinédrio, seu rosto tornou-se "como o rosto de um anjo" (At 6,15).

                4. Descoberta milagrosa das relíquias: Em 415, o padre Luciano teve uma visão que revelou o local onde estavam seus restos mortais.

                5. Curas e conversões: Numerosos milagres foram relatados após a descoberta de suas relíquias, incluindo:
                   - Cura de doentes
                   - Libertação de possessos
                   - Conversão de judeus e pagãos

                6. Proteção contra tempestades: Diversos relatos atribuem a ele a proteção contra tempestades e granizo.
            `,
            reliquias: `
                As relíquias de Santo Estêvão têm uma história notável:

                1. Sepultamento inicial: Após seu martírio, foi sepultado por "homens piedosos" nos arredores de Jerusalém.

                2. Descoberta das relíquias: Em 415, o padre Luciano, de Kafar Gamala, teve uma visão que revelou o local do sepultamento. As relíquias foram encontradas junto com as de Gamaliel (mestre de São Paulo), Nicodemos e Abibas.

                3. Transferências:
                   - Parte das relíquias foi levada para a igreja do Monte Sião em Jerusalém
                   - Outra parte foi transferida para Constantinopla
                   - Relíquias significativas foram enviadas para Roma, onde estão na Basílica de São Lourenço Fora dos Muros

                4. Distribuição:
                   - Fragmentos de suas relíquias estão presentes em numerosas igrejas pelo mundo
                   - Algumas pedras usadas em seu martírio são preservadas em relicários
                   - A terra do local de seu martírio foi distribuída como relíquia

                5. Locais de veneração:
                   - Igreja de Santo Estêvão em Jerusalém, construída no local tradicional do martírio
                   - Basílica de São Lourenço Fora dos Muros em Roma
                   - Catedral de Bourges, França, que possui um importante relicário
            `,
            devocao: `
                Santo Estêvão é venerado como protomártir (primeiro mártir) da Igreja. Sua festa litúrgica é celebrada em:

                - 26 de dezembro na Igreja Católica e Anglicana
                - 27 de dezembro nas Igrejas Orientais
                - 3 de agosto (descoberta das relíquias)

                É invocado como patrono de:
                - Diáconos
                - Pedreiros e canteiros
                - Cavalos e cocheiros
                - Contra dores de cabeça
                - Proteção contra granizo e tempestades

                Na iconografia cristã, é representado:
                - Como um jovem diácono com dalmática
                - Com pedras sobre a cabeça ou nas mãos
                - Com a palma do martírio
                - Às vezes, com um livro do Evangelho
                - Em cenas de seu apedrejamento

                Sua devoção é particularmente forte em:
                - Jerusalém, no local de seu martírio
                - Roma, onde suas relíquias são veneradas
                - Hungria, que o considera seu primeiro padroeiro
                - França, especialmente em Bourges

                Tradições especiais:
                - Na Idade Média, era costume benzer aveia no dia de sua festa
                - Em algumas regiões, é tradição dar esmolas aos pobres em sua honra
                - Seu dia é conhecido como "Dia da Caixa" em países anglófonos
                - Muitas catedrais medievais têm vitrais narrando sua história
            `
        }
    },
    {
        name: "São João Evangelista",
        description: "Apóstolo amado, escreveu o Evangelho e sobreviveu a um caldeirão de óleo.",
        isDisplayed: true
    },
    {
        name: "Santos Inocentes",
        description: "Crianças massacradas por Herodes na tentativa de matar Jesus.",
        isDisplayed: true
    },
    {
        name: "São Tomé de Cantuária",
        description: "Arcebispo assassinado na catedral por defender a Igreja.",
        isDisplayed: true
    },
    {
        name: "São Silvestre",
        description: "Papa que batizou Constantino e consolidou a Igreja no Império Romano.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Silvestre I nasceu em Roma por volta do ano 270, filho de Rufino e Justa, uma família romana cristã. Recebeu uma educação esmerada, tanto nas letras quanto na fé cristã, sob a orientação do sacerdote Cirino.

                Viveu durante o período das grandes perseguições aos cristãos, especialmente a de Diocleciano (303-305), uma das mais violentas da história. Durante este tempo difícil, Silvestre destacou-se por sua coragem em ajudar os cristãos perseguidos, visitando-os nas prisões e catacumbas, e dando sepultura digna aos mártires.

                Foi ordenado sacerdote pelo Papa Marcelino e, após a morte do Papa Melquíades, foi eleito como seu sucessor em 31 de janeiro de 314, tornando-se o 33º Papa da Igreja Católica. Seu pontificado, que durou 21 anos (314-335), foi um dos mais longos e significativos da história da Igreja primitiva.

                O pontificado de São Silvestre coincidiu com um período crucial para o cristianismo: a conversão do Imperador Constantino e o fim das perseguições. Em 313, pouco antes de Silvestre se tornar Papa, Constantino havia promulgado o Édito de Milão, que concedia liberdade religiosa aos cristãos no Império Romano.

                Segundo a tradição (embora contestada por historiadores modernos), São Silvestre teria batizado o Imperador Constantino após curá-lo milagrosamente da lepra. Em gratidão, o imperador teria feito a famosa "Doação de Constantino", concedendo ao Papa autoridade sobre Roma e as províncias ocidentais do Império - documento posteriormente considerado uma falsificação medieval.

                Durante seu pontificado, São Silvestre enviou legados ao Concílio de Niceia (325), que condenou o arianismo e formulou o Credo Niceno. Também supervisionou a construção das primeiras grandes basílicas cristãs em Roma, incluindo a antiga Basílica de São Pedro e a Basílica de São João de Latrão.

                São Silvestre faleceu pacificamente em 31 de dezembro de 335, após um longo e frutífero pontificado. Foi sepultado no Cemitério de Priscila, na Via Salária, em Roma.
            `,
            milagres: `
                São Silvestre é associado a diversos milagres, embora muitos deles sejam baseados em tradições posteriores:

                1. Cura da lepra de Constantino: Segundo a lenda medieval, o Imperador Constantino sofria de lepra e, após uma visão dos apóstolos Pedro e Paulo, procurou São Silvestre. O Papa o batizou e, ao emergir da água batismal, o imperador foi completamente curado da doença.

                2. Domínio sobre o dragão: Uma das lendas mais famosas conta que São Silvestre domou um terrível dragão que vivia no Fórum Romano e matava pessoas com seu hálito venenoso. O santo desceu às profundezas onde o monstro habitava, fez o sinal da cruz e amarrou a boca do dragão com um fio, libertando a cidade do terror.

                3. Ressurreição de um touro: Durante um debate com rabinos judeus, um deles matou um touro apenas pronunciando o nome de Deus ao seu ouvido. São Silvestre, para demonstrar o poder de Cristo, ressuscitou o animal, convertendo muitos dos presentes.

                4. Silenciamento de pagãos: Conta-se que, durante um debate público com sacerdotes pagãos, estes invocaram seus deuses sem resultado. Quando São Silvestre invocou o nome de Jesus, um demônio que habitava uma estátua pagã fugiu, e a estátua desmoronou.

                5. Visões e profecias: Atribuem-se a São Silvestre diversas visões e profecias, incluindo a previsão da conversão de Roma ao cristianismo e o fim das perseguições.

                6. Curas milagrosas: Diversos relatos mencionam curas realizadas por São Silvestre, especialmente de cegos e paralíticos.

                7. Exorcismos: Era conhecido por sua capacidade de expulsar demônios, libertando muitas pessoas possuídas durante seu pontificado.
            `,
            reliquias: `
                As relíquias de São Silvestre têm uma história interessante:

                1. Sepultamento original: São Silvestre foi inicialmente sepultado no Cemitério de Priscila, na Via Salária, em Roma, onde permaneceu por vários séculos.

                2. Translação para São Silvestre in Capite: No século VIII, o Papa Paulo I (757-767) transferiu os restos mortais de São Silvestre para a igreja construída em sua honra, San Silvestro in Capite, em Roma. O nome "in Capite" (da cabeça) deve-se ao fato de que a igreja também abrigava uma relíquia da cabeça de São João Batista.

                3. Relíquias em Nonantola: Uma parte significativa das relíquias foi transferida para a Abadia de Nonantola, perto de Módena, na Itália, no século VIII, por ordem do rei lombardo Astolfo. A abadia tornou-se um importante centro de peregrinação dedicado ao santo.

                4. Relíquias atuais: Atualmente, as principais relíquias de São Silvestre encontram-se:
                   - Na Abadia de Nonantola, onde são veneradas em um relicário de prata
                   - Na igreja de San Silvestro in Capite, em Roma
                   - Na Basílica de São João de Latrão, que guarda fragmentos menores

                5. Outras relíquias: Pequenos fragmentos de suas relíquias estão distribuídos em várias igrejas pela Europa, incluindo:
                   - A Catedral de Notre-Dame de Paris
                   - A igreja de São Silvestre em Tivoli, Itália
                   - A Catedral de São Estêvão em Viena, Áustria

                6. Objetos associados: Além dos restos mortais, são venerados como relíquias alguns objetos associados a São Silvestre:
                   - Fragmentos de suas vestes pontificais
                   - Um anel papal atribuído a ele
                   - Uma antiga cruz peitoral que teria lhe pertencido
            `,
            devocao: `
                A devoção a São Silvestre é significativa, especialmente por sua associação com o fim do ano:

                Festa litúrgica:
                - 31 de dezembro na Igreja Católica e na Igreja Ortodoxa

                É invocado como patrono de:
                - Criadores de animais domésticos
                - Pedreiros e construtores
                - Contra a peste e epidemias
                - Para uma boa colheita
                - Para a conversão de não-cristãos

                Iconografia:
                - Representado com vestes papais e tiara (coroa papal)
                - Frequentemente com um touro ou boi a seus pés (referência ao milagre da ressurreição do touro)
                - Às vezes, com um dragão acorrentado ou amarrado
                - Segurando uma maquete de igreja (simbolizando a construção das primeiras basílicas)
                - Em cenas do batismo do Imperador Constantino

                Tradições populares:
                - A "Noite de São Silvestre" é como se denomina a véspera do Ano Novo em muitos países europeus
                - Em algumas regiões da Itália, Áustria e Alemanha, realizam-se procissões e bênçãos especiais no último dia do ano
                - Na Europa Central, é tradição comer lentilhas no dia de São Silvestre para garantir prosperidade no ano novo
                - Em algumas áreas rurais, os agricultores pedem sua bênção para as colheitas do ano seguinte

                Locais de devoção:
                - Abadia de Nonantola (Itália), principal centro de peregrinação dedicado ao santo
                - Igreja de San Silvestro in Capite, em Roma
                - Basílica de São João de Latrão, em Roma
                - Diversas igrejas dedicadas a ele em toda a Europa, especialmente na Itália
            `
        }
    },
    {
        name: "São João Batista",
        description: "Precursor de Jesus Cristo, batizou o Messias e foi martirizado por Herodes.",
        isDisplayed: true
    },
    {
        name: "Santos Inocentes",
        description: "Crianças massacradas por Herodes na tentativa de matar Jesus.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                Os Santos Inocentes foram as crianças de Belém e arredores, com idade de dois anos ou menos, que foram massacradas por ordem do rei Herodes, o Grande. Este episódio é narrado no Evangelho de Mateus (2,16-18).

                Após o nascimento de Jesus, os Magos do Oriente visitaram Herodes em Jerusalém perguntando pelo "rei dos judeus que acabara de nascer". Herodes, temendo pela perda de seu trono, pediu que os Magos lhe informassem o local exato onde encontrariam o menino. Contudo, avisados em sonho, os Magos não retornaram a Herodes.

                Furioso e determinado a eliminar qualquer ameaça ao seu poder, Herodes ordenou a morte de todos os meninos com menos de dois anos em Belém e vizinhanças, conforme o tempo indicado pelos Magos sobre o aparecimento da estrela. Este massacre cumpriu a profecia de Jeremias: "Ouviu-se uma voz em Ramá, lamentação e grande pranto: Raquel chorando seus filhos, e não querendo ser consolada, porque já não existem".

                Segundo a tradição, José, avisado por um anjo, fugiu com Maria e Jesus para o Egito, salvando assim o menino da matança. O número exato de crianças mortas é desconhecido, mas estima-se entre 6 e 20, considerando o tamanho da população de Belém na época.

                Os Santos Inocentes são considerados os primeiros mártires cristãos, pois morreram em lugar de Cristo, embora não tivessem consciência disso. São venerados como santos desde os primeiros séculos do cristianismo.
            `,
            milagres: `
                Os milagres associados aos Santos Inocentes incluem:

                1. Milagres de proteção: São invocados para a proteção de crianças contra doenças, perigos e morte prematura.

                2. Curas milagrosas: Muitas curas de crianças são atribuídas à intercessão dos Santos Inocentes, especialmente em casos de doenças infantis graves.

                3. Fenômenos sobrenaturais: Em diversos locais onde suas relíquias são veneradas, relatam-se fenômenos como luzes inexplicáveis, sons celestiais e perfumes sobrenaturais.

                4. Milagres póstumos: Segundo tradições medievais, os corpos dos Santos Inocentes permaneceram incorruptos por muito tempo, e de seus túmulos emanava um óleo milagroso com propriedades curativas.

                5. Proteção contra injustiças: São invocados como protetores contra perseguições injustas e violência contra os inocentes.
            `,
            reliquias: `
                As relíquias dos Santos Inocentes têm uma história complexa:

                1. Basílica de São Paulo Fora dos Muros (Roma): Conserva relíquias de vários Santos Inocentes.

                2. Catedral de Santa Maria (Milão): Possui relíquias significativas dos Santos Inocentes.

                3. Basílica de Saint-Denis (França): Abriga relíquias trazidas da Terra Santa durante as Cruzadas.

                4. Igreja de Saint-Séverin (Paris): Conserva relíquias dos Santos Inocentes.

                5. Mosteiro de São Simeão (Jerusalém): Tradicionalmente considerado o local onde alguns dos corpos foram inicialmente sepultados.

                6. Catedral de Colônia (Alemanha): Possui relíquias dos Santos Inocentes junto com as dos Reis Magos.

                7. Basílica da Natividade (Belém): Uma gruta próxima é venerada como local de sepultamento de algumas das crianças.

                Durante a Idade Média, muitas igrejas na Europa afirmavam possuir relíquias dos Santos Inocentes, o que levou a uma proliferação de locais de veneração. Embora a autenticidade de muitas dessas relíquias seja questionável do ponto de vista histórico, elas continuam sendo objetos de devoção.
            `,
            devocao: `
                A devoção aos Santos Inocentes é antiga e significativa no cristianismo:

                Festa litúrgica:
                - 28 de dezembro na Igreja Católica, Anglicana e Luterana
                - 29 de dezembro nas Igrejas Orientais

                São patronos de:
                - Crianças, especialmente as que sofrem
                - Crianças abandonadas e órfãos
                - Vítimas de abuso e violência
                - Crianças não nascidas

                Tradições e costumes:
                - Na Idade Média, o Dia dos Santos Inocentes era marcado por inversão de papéis, com crianças assumindo funções de adultos
                - Em países hispânicos, é equivalente ao "Dia da Mentira" ou "Dia dos Bobos"
                - Em algumas regiões, é costume visitar cemitérios infantis e decorar túmulos de crianças
                - Procissões com crianças vestidas de branco são realizadas em algumas localidades

                Iconografia:
                - Representados como bebês com auréolas
                - Frequentemente mostrados sendo mortos por soldados
                - Em pinturas medievais, aparecem sendo recebidos por Cristo no céu
                - Às vezes representados com palmas do martírio

                A devoção aos Santos Inocentes permanece relevante como símbolo da proteção divina às crianças e como lembrança do valor da vida inocente. São frequentemente invocados em orações pela proteção de crianças em perigo e contra a violência infantil.
            `
        }
    },
    {
        name: "São Marcelo de Paris",
        description: "Bispo de Paris que derrotou um dragão e libertou a cidade de uma terrível ameaça.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Marcelo (também conhecido como Marcellus ou Marcel) nasceu em Paris no século IV, em uma família humilde. Apesar de suas origens modestas, destacou-se por sua extraordinária piedade, pureza de coração, modéstia e caridade desde jovem.

                Sua vida espiritual era tão intensa que parecia, segundo seus biógrafos, "desapegado tanto do mundo quanto da carne". Seu progresso nos estudos sagrados e sua conduta exemplar chamaram a atenção do bispo Prudêncio de Paris, que o ordenou leitor da igreja ainda jovem.

                Posteriormente, foi promovido ao sacerdócio e, após a morte de Prudêncio, foi unanimemente escolhido como Bispo de Paris. Aceitou o cargo com humildade e temor, consciente da grande responsabilidade que assumia. Como bispo, foi incansável em suas funções pastorais, sempre vigilante e dedicado ao bem-estar espiritual de seu rebanho.

                São Marcelo governou a diocese de Paris durante um período de transição entre os séculos IV e V, quando o Império Romano enfrentava crises e o cristianismo se consolidava na Gália. Seu episcopado foi marcado por uma profunda preocupação com os pobres e marginalizados, além de um intenso trabalho de evangelização.

                Faleceu no início do século V, provavelmente por volta do ano 436, no dia 1º de novembro, data em que é comemorado no Martirológio Romano. Foi sepultado nos arredores de Paris, em uma vila que posteriormente se tornou um subúrbio da cidade, chamado de Saint-Marceau.
            `,
            milagres: `
                São Marcelo é conhecido por diversos milagres, sendo o mais famoso deles a derrota de um dragão:

                1. O milagre do dragão: Segundo a tradição, um terrível dragão (ou serpente) aterrorizava Paris, habitando o túmulo de uma mulher adúltera de família nobre. São Marcelo confrontou o monstro, golpeou-o três vezes na cabeça com seu báculo pastoral e, amarrando sua estola no pescoço da criatura, conduziu-a para fora da cidade por quatro milhas antes de ordenar que desaparecesse em regiões desertas ou se afogasse no mar. Este episódio é interpretado simbolicamente como a vitória do cristianismo sobre o paganismo ou sobre o mal.

                2. Transformação de água em vinho: Semelhante ao milagre de Jesus nas Bodas de Caná, São Marcelo teria transformado água do rio Sena em vinho durante uma escassez.

                3. Curas milagrosas: Realizou numerosas curas de enfermos durante seu episcopado, especialmente de cegos e paralíticos.

                4. Exorcismos: Libertou muitas pessoas possuídas por demônios, demonstrando autoridade espiritual sobre as forças do mal.

                5. Milagres póstumos: Após sua morte, muitos milagres foram relatados em seu túmulo, incluindo curas de diversas enfermidades e libertação de prisioneiros.
            `,
            reliquias: `
                As relíquias de São Marcelo têm uma história significativa:

                1. Sepultamento original: Foi inicialmente sepultado em uma pequena igreja nos arredores de Paris, no local que posteriormente se tornou o subúrbio de Saint-Marceau.

                2. Translação para a Catedral: No século IX, durante as invasões normandas, suas relíquias foram transferidas para a Catedral de Notre-Dame de Paris para maior proteção.

                3. Relicário: Um magnífico relicário de prata contendo seus restos mortais foi criado no século XIII e tornou-se um dos tesouros mais venerados da catedral.

                4. Procissões: Durante a Idade Média, suas relíquias eram carregadas em solenes procissões pelas ruas de Paris em tempos de calamidade, como epidemias, secas ou ameaças de invasão.

                5. Revolução Francesa: Durante a Revolução Francesa, parte de suas relíquias foi profanada e perdida, mas alguns fragmentos foram preservados por fiéis devotos.

                6. Atualidade: Hoje, relíquias de São Marcelo podem ser encontradas na Catedral de Notre-Dame de Paris e na igreja de Saint-Marcel, no 13º arrondissement de Paris.
            `,
            devocao: `
                A devoção a São Marcelo é significativa, especialmente em Paris:

                Festa litúrgica:
                - 1º de novembro no Martirológio Romano
                - 3 de novembro nas igrejas da França

                É invocado como:
                - Patrono da cidade de Paris
                - Protetor contra inundações e epidemias
                - Intercessor contra picadas de serpentes e animais venenosos
                - Padroeiro dos vinicultores (devido ao milagre da transformação da água em vinho)

                Tradições e costumes:
                - Procissão do Dragão: Durante a Idade Média, nas procissões de Rogações em Paris, carregava-se uma efígie de vime em forma de dragão, simbolizando o monstro derrotado por São Marcelo.
                - Oferendas de pão e vinho eram feitas em seu túmulo para obter proteção contra doenças.
                - Sua festa era celebrada com grande solenidade em Paris até a Revolução Francesa.

                Iconografia:
                - Representado como bispo com vestes pontificais
                - Frequentemente retratado dominando um dragão com seu báculo ou estola
                - Às vezes representado com uma fonte ou poço, simbolizando o milagre da água transformada em vinho

                Locais de devoção:
                - Igreja de Saint-Marcel em Paris
                - Catedral de Notre-Dame de Paris
                - Fonte de Saint-Marcel, considerada milagrosa durante a Idade Média
            `
        }
    },
    {
        name: "São Alfeu",
        description: "Pai de São Tiago Menor, mencionado entre os primeiros cristãos.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Alfeu (também conhecido como Clopas ou Cleofas) é uma figura mencionada no Novo Testamento, principalmente por sua relação familiar com alguns dos apóstolos. As informações sobre sua vida são escassas e baseadas em referências bíblicas e tradições da Igreja primitiva.

                Segundo os Evangelhos, Alfeu era pai do apóstolo Tiago Menor (Mateus 10,3; Marcos 3,18; Lucas 6,15). Alguns estudiosos e tradições da Igreja também o identificam como o pai do apóstolo Mateus (Levi), embora esta identificação seja menos certa.

                De acordo com algumas tradições, Alfeu era irmão de São José, o esposo de Maria, o que o tornaria tio de Jesus. Outros o identificam com Clopas, mencionado no Evangelho de João (19,25) como esposo de Maria de Clopas, que esteve presente na crucificação de Jesus. Esta Maria é frequentemente identificada como irmã ou cunhada da Virgem Maria.

                Eusébio de Cesareia, historiador da Igreja do século IV, citando Hegesipo (século II), menciona que Clopas era irmão de José e pai de Simeão, que sucedeu Tiago como bispo de Jerusalém. Se esta identificação estiver correta, Alfeu teria sido um membro importante da família extensa de Jesus.

                Algumas tradições sugerem que Alfeu foi um dos primeiros discípulos de Jesus, embora não fizesse parte do círculo dos doze apóstolos. Há também quem o identifique com um dos dois discípulos que encontraram Jesus ressuscitado no caminho de Emaús (Lucas 24,13-35), embora o texto bíblico nomeie apenas um deles como Cleofas.

                Quanto à sua morte, não há informações precisas nas Escrituras. Segundo tradições posteriores, ele teria sido martirizado por sua fé em Cristo, possivelmente durante as primeiras perseguições aos cristãos em Jerusalém.

                Apesar da escassez de informações históricas, São Alfeu é venerado como um dos primeiros seguidores de Cristo e como pai de apóstolos que desempenharam papéis importantes na Igreja primitiva.
            `,
            milagres: `
                Devido à escassez de informações históricas sobre São Alfeu, não há relatos específicos de milagres atribuídos diretamente a ele durante sua vida. No entanto, algumas tradições e devoções posteriores associam certos fenômenos milagrosos à sua intercessão:

                1. Proteção familiar: São Alfeu é frequentemente invocado para proteção das famílias cristãs, e há relatos de intervenções milagrosas em situações de crise familiar atribuídas à sua intercessão.

                2. Conversões: Como membro da família extensa de Jesus e pai de apóstolos, é invocado em orações por conversão de familiares, com diversos testemunhos de conversões atribuídas à sua intercessão.

                3. Curas: Embora não seja primariamente conhecido como um santo taumaturgo, existem relatos de curas, especialmente relacionadas a problemas ósseos e articulares, atribuídas à sua intercessão.

                4. Aparições: Em algumas tradições locais, especialmente no Oriente Médio, há relatos de aparições de São Alfeu junto com outros membros da família de Jesus, trazendo mensagens de conforto e orientação.

                5. Proteção de viajantes: Possivelmente devido à sua identificação com Cleofas do caminho de Emaús, é invocado por viajantes em perigo, com relatos de proteções milagrosas.

                6. Intervenções em casos de perseguição religiosa: Como possível mártir da Igreja primitiva, é invocado por cristãos que sofrem perseguição, com testemunhos de intervenções providenciais.

                7. Descoberta de relíquias: No século V, houve relatos da descoberta milagrosa de relíquias atribuídas a São Alfeu, acompanhada de curas e outros fenômenos sobrenaturais.

                É importante notar que, diferentemente de outros santos mais conhecidos, os milagres atribuídos a São Alfeu são geralmente de caráter mais local e menos documentados na literatura hagiográfica oficial.
            `,
            reliquias: `
                As informações sobre as relíquias de São Alfeu são limitadas e, em alguns casos, baseadas mais em tradições locais do que em documentação histórica precisa:

                1. Relíquias na Terra Santa: Segundo algumas tradições, os restos mortais de São Alfeu teriam sido inicialmente sepultados em Jerusalém, próximo ao local onde seu filho Tiago (o Menor) foi sepultado.

                2. Translação para Constantinopla: Há indicações de que, durante o período bizantino (possivelmente no século V ou VI), relíquias atribuídas a São Alfeu foram transferidas para Constantinopla, onde foram veneradas na Igreja dos Santos Apóstolos.

                3. Relíquias em Roma: Uma tradição menciona que parte das relíquias de São Alfeu teria sido levada para Roma, possivelmente durante o período das Cruzadas, e depositada na Basílica de São João de Latrão.

                4. Relíquias na Espanha: A catedral de Santiago de Compostela, na Espanha, afirma possuir pequenos fragmentos de relíquias atribuídas a São Alfeu, junto com as relíquias de seu filho, o apóstolo Tiago.

                5. Relíquias no Oriente: Algumas igrejas ortodoxas no Oriente Médio, particularmente na Síria e no Líbano, afirmam possuir relíquias de São Alfeu, embora a autenticidade destas seja difícil de verificar historicamente.

                6. Relíquias em Chipre: A Igreja de Chipre afirma possuir fragmentos de relíquias de São Alfeu, possivelmente trazidas de Jerusalém durante as perseguições aos cristãos.

                7. Objetos associados: Em algumas igrejas, são venerados como relíquias secundárias objetos que teriam pertencido a São Alfeu ou estado em contato com suas relíquias primárias, como fragmentos de tecido ou pequenos recipientes de óleo.

                É importante notar que, devido à antiguidade e à escassez de documentação histórica precisa, a autenticidade de muitas destas relíquias é difícil de estabelecer com certeza. No entanto, elas continuam sendo objetos de veneração para muitos fiéis, especialmente nas tradições orientais.
            `,
            devocao: `
                A devoção a São Alfeu, embora menos difundida que a de outros santos mais conhecidos, mantém-se viva em diversas tradições cristãs:

                Festa litúrgica:
                - 26 de maio na Igreja Católica (em alguns calendários locais)
                - 25 de maio na Igreja Ortodoxa
                - Celebrado junto com seu filho Tiago em 1º de maio em algumas tradições orientais

                É invocado como patrono de:
                - Pais de família
                - Parentes de sacerdotes e religiosos
                - Carpinteiros (devido à sua possível relação com São José)
                - Viajantes (se identificado com Cleofas do caminho de Emaús)
                - Convertidos ao cristianismo

                Iconografia:
                - Representado como um homem idoso de barba branca
                - Frequentemente retratado junto com seu filho Tiago Menor
                - Às vezes, representado com ferramentas de carpinteiro
                - Em algumas tradições orientais, aparece em cenas da Sagrada Família ampliada
                - Quando identificado com Cleofas, é representado no caminho de Emaús

                Tradições populares:
                - Em algumas regiões da Grécia e do Oriente Médio, seu dia é marcado por reuniões familiares
                - Na Armênia, é tradição visitar os túmulos dos antepassados em sua festa
                - Em partes da Espanha, é invocado em orações pela unidade familiar
                - Em algumas comunidades, é costume abençoar ferramentas de trabalho em sua festa

                Locais de devoção:
                - Igreja de São Tiago Menor em Jerusalém, onde também é venerado
                - Algumas igrejas em Chipre dedicadas à Sagrada Parentela
                - Capelas em mosteiros ortodoxos do Monte Atos, na Grécia
                - Igrejas armênias e sírias no Oriente Médio
                - Pequenos santuários em vilarejos da Galileia, onde teria vivido

                Orações e devoções:
                - É invocado em novenas pela conversão de familiares
                - Suas relíquias são veneradas especialmente por pais que desejam que seus filhos sigam vocações religiosas
                - Em algumas tradições, é invocado junto com outros parentes de Jesus em orações pela santificação das famílias
            `
        }
    },
    {
        name: "São Jorge",
        description: "Cavaleiro que matou um dragão, martirizado por sua fé.",
        isDisplayed: true,
        additionalInfo: {
            biografia: `
                São Jorge nasceu na Capadócia (atual Turquia) por volta do ano 280, em uma família cristã nobre. Seu pai, Gerôncio, era um oficial militar romano originário da Capadócia, e sua mãe, Policrônia, era natural da Palestina. Após a morte de seu pai, Jorge e sua mãe retornaram à Palestina, terra natal dela.

                Seguindo os passos de seu pai, Jorge ingressou no exército romano durante o reinado do imperador Diocleciano. Demonstrando grande coragem e habilidade militar, ascendeu rapidamente na hierarquia, tornando-se tribuno militar e membro da guarda pessoal do imperador, um posto de grande prestígio para alguém tão jovem.

                Em 303, quando Diocleciano iniciou uma das mais severas perseguições contra os cristãos, Jorge, que era cristão secreto até então, decidiu manifestar publicamente sua fé. Renunciou ao seu cargo militar, distribuiu seus bens aos pobres e confrontou o imperador, denunciando a injustiça das perseguições.

                Esta atitude corajosa enfureceu Diocleciano, que ordenou a tortura de Jorge na tentativa de fazê-lo renegar sua fé. Segundo a tradição, ele foi submetido a numerosos e cruéis suplícios: foi lacerado em uma roda de espadas, mergulhado em cal viva, forçado a usar sapatos com pregos incandescentes, e sofreu muitos outros tormentos.

                Milagrosamente, Jorge sobreviveu a todas estas torturas, o que levou à conversão de muitos pagãos, incluindo a imperatriz Alexandra, esposa de Diocleciano. Finalmente, em 23 de abril de 303 (ou 304, segundo algumas fontes), Jorge foi decapitado em Nicomédia (atual Izmit, Turquia).

                A história mais famosa associada a São Jorge - o combate contra o dragão para salvar uma princesa - não aparece nos primeiros relatos sobre sua vida. Esta lenda surgiu durante a Idade Média, possivelmente no século XI, e foi popularizada pela "Legenda Áurea" de Jacopo de Varazze no século XIII. Segundo esta narrativa, Jorge teria libertado uma cidade da Líbia (ou da Capadócia, em algumas versões) de um terrível dragão que exigia sacrifícios humanos, salvando a princesa que seria a próxima vítima.

                Embora muitos elementos de sua biografia tenham sido questionados por historiadores modernos, a existência histórica de São Jorge e seu martírio são geralmente aceitos, e seu culto é um dos mais antigos e difundidos no cristianismo.
            `,
            milagres: `
                São Jorge é associado a numerosos milagres, tanto durante sua vida quanto após sua morte:

                1. Sobrevivência às torturas: O mais notável milagre durante sua vida foi sua sobrevivência a torturas extremas. Segundo a tradição, ele foi submetido a suplícios que teriam matado qualquer pessoa comum, incluindo ser lacerado em uma roda de espadas, mergulhado em cal viva, forçado a beber veneno e muitos outros tormentos, dos quais sempre emergia milagrosamente curado.

                2. Ressurreição de mortos: Em algumas versões de sua história, São Jorge teria ressuscitado pessoas mortas, incluindo um agricultor chamado Glikerios, cujo boi havia morrido, e que foi convertido ao cristianismo após este milagre.

                3. Vitória sobre o dragão: Embora seja uma lenda posterior, o milagre mais famoso associado a São Jorge é sua vitória sobre um dragão que aterrorizava uma cidade, exigindo sacrifícios humanos. Após derrotar o monstro, Jorge converteu toda a população local ao cristianismo.

                4. Conversões milagrosas: Sua resistência sobrenatural às torturas levou à conversão de muitos pagãos, incluindo a imperatriz Alexandra, esposa de Diocleciano, e o mágico Atanásio, que havia preparado venenos para matá-lo.

                5. Aparições em batalhas: Ao longo da história, há numerosos relatos de aparições de São Jorge em batalhas, ajudando exércitos cristãos. O mais famoso ocorreu durante a Primeira Cruzada, quando teria aparecido com vestes e armas brancas, ajudando os cruzados a conquistar Antioquia em 1098.

                6. Curas milagrosas: Muitas curas são atribuídas à intercessão de São Jorge, especialmente de doenças relacionadas ao sangue, febres e doenças de pele. Seu santuário em Lod (antiga Lydda), na Palestina, tornou-se um importante centro de peregrinação para pessoas em busca de cura.

                7. Proteção contra o mal: São Jorge é invocado como protetor contra venenos, peste, feitiçaria e possessão demoníaca, com numerosos relatos de intervenções milagrosas nestes casos.

                8. Milagres com suas relíquias: Diversas fontes relatam fenômenos milagrosos associados às suas relíquias, incluindo a exsudação de óleo perfumado com propriedades curativas.
            `,
            reliquias: `
                As relíquias de São Jorge têm uma história complexa e dispersa:

                1. Sepultamento original: Após seu martírio em Nicomédia (atual Izmit, Turquia), o corpo de São Jorge foi levado para Lydda (atual Lod, em Israel), sua cidade natal materna, onde foi sepultado. Um santuário foi construído sobre seu túmulo, tornando-se um importante centro de peregrinação desde o século IV.

                2. Basílica de São Jorge em Lod: No século VI, o imperador Justiniano mandou construir uma grande basílica sobre o túmulo de São Jorge em Lydda. Esta igreja foi destruída durante a invasão persa em 614 e posteriormente reconstruída.

                3. Dispersão das relíquias: Durante as Cruzadas, partes das relíquias de São Jorge foram levadas para a Europa, resultando em sua ampla dispersão. Isto explica por que tantos lugares afirmam possuir relíquias do santo.

                4. Relíquias em Roma: Uma parte significativa das relíquias de São Jorge foi transferida para Roma, onde são veneradas na igreja de San Giorgio in Velabro. O crânio do santo teria sido levado para a igreja de San Giorgio al Palazzo, em Milão.

                5. Relíquias na Inglaterra: A devoção a São Jorge na Inglaterra data do século VIII. A abadia de Glastonbury afirmava possuir alguns de seus ossos, e outras relíquias estavam presentes em Windsor e Canterbury.

                6. Relíquias em Veneza: A República de Veneza, que tinha São Jorge como um de seus patronos, obteve importantes relíquias do santo, que são veneradas na igreja de San Giorgio Maggiore.

                7. Outras localizações: Relíquias atribuídas a São Jorge podem ser encontradas em diversos lugares, incluindo:
                   - Mosteiro de São Jorge em Menavlevi, Síria
                   - Catedral de Notre-Dame de Paris, França
                   - Mosteiro de Xenofontos no Monte Atos, Grécia
                   - Catedral de Barcelona, Espanha
                   - Mosteiro de Zograf no Monte Atos, que possui uma mão do santo
                   - Igreja de São Jorge em Beirute, Líbano

                8. Objetos associados: Além dos restos mortais, são venerados como relíquias alguns objetos associados a São Jorge:
                   - Fragmentos de sua armadura e lança
                   - Bandeiras e estandartes que teriam sido usados em batalhas sob sua invocação
                   - Ícones milagrosos, especialmente na tradição ortodoxa
            `,
            devocao: `
                São Jorge é um dos santos mais universalmente venerados, com uma devoção que transcende fronteiras geográficas e denominacionais:

                Festa litúrgica:
                - 23 de abril na maioria das tradições cristãs
                - 23 de abril (calendário juliano, que corresponde a 6 de maio no calendário gregoriano) nas Igrejas Ortodoxas que seguem o calendário antigo
                - 3 de novembro (translação das relíquias) em algumas tradições orientais

                É invocado como patrono de:
                - Numerosos países, incluindo Inglaterra, Portugal, Geórgia, Catalunha, Aragão e Lituânia
                - Cavaleiros, soldados e militares
                - Escoteiros e exploradores
                - Arqueiros e fabricantes de armas
                - Agricultores e pastores
                - Cavalos e outros animais domésticos
                - Contra doenças de pele, peste e venenos
                - Proteção em batalhas e situações de perigo

                Iconografia:
                - Representado como um jovem cavaleiro em armadura
                - Montado em um cavalo branco, matando um dragão com uma lança
                - Com uma bandeira branca com cruz vermelha (a "Cruz de São Jorge")
                - Às vezes, com a princesa resgatada ao fundo
                - Na arte oriental, frequentemente representado com cabelos cacheados

                Tradições populares:
                - Na Inglaterra, o Dia de São Jorge é celebrado com desfiles e representações da luta contra o dragão
                - Na Catalunha, é tradição trocar livros e rosas no dia de São Jorge (origem do Dia Mundial do Livro)
                - Na Geórgia (país que leva seu nome), seu dia é feriado nacional
                - Em partes do Oriente Médio, cristãos e muçulmanos visitam seus santuários em busca de bênçãos
                - Em Portugal e no Brasil, é associado à proteção contra cobras e animais peçonhentos
                - No sincretismo religioso brasileiro, é identificado com o orixá Ogum

                Locais de devoção:
                - Igreja de São Jorge em Lod (antiga Lydda), Israel, construída sobre seu túmulo original
                - Igreja de San Giorgio in Velabro, Roma
                - Mosteiro de São Jorge em Menavlevi, Síria
                - Catedral de São Jorge em Istambul (antiga sede do Patriarcado Ecumênico)
                - Mosteiro de Zograf no Monte Atos, Grécia
                - Inúmeras igrejas dedicadas a ele em todo o mundo
            `
        }
    },
    {
        name: "Santo Agostinho",
        description: "Doutor da Igreja, bispo de Hipona e filósofo",
        isDisplayed: false
    },
    {
        name: "Santo Ambrósio",
        description: "Doutor da Igreja e Bispo de Milão",
        isDisplayed: false
    },
    {
        name: "Santo André",
        description: "Apóstolo, irmão de Pedro, martirizado em cruz em X",
        isDisplayed: false
    },
    {
        name: "Santo Apolinário",
        description: "Primeiro bispo de Ravena e mártir",
        isDisplayed: false
    },
    {
        name: "Santa Apolônia",
        description: "Virgem e mártir que teve os dentes arrancados",
        isDisplayed: false
    },
    {
        name: "Santo Aquileu",
        description: "Mártir romano, soldado convertido",
        isDisplayed: false
    },
    {
        name: "Santo Arsênio",
        description: "Eremita e padre do deserto",
        isDisplayed: false
    },
    {
        name: "São Barnabé",
        description: "Apóstolo que acompanhou Paulo em suas viagens",
        isDisplayed: false
    },
    {
        name: "São Bartolomeu",
        description: "Apóstolo que pregou na Índia",
        isDisplayed: false
    },
    {
        name: "São Bento",
        description: "Fundador do monasticismo ocidental",
        isDisplayed: false
    },
    {
        name: "São Bernardo",
        description: "Doutor da Igreja e reformador de Cister",
        isDisplayed: false
    },
    {
        name: "São Brás",
        description: "Bispo e mártir, protetor contra doenças da garganta",
        isDisplayed: false
    },
    {
        name: "São Brício",
        description: "Bispo de Tours, sucessor de São Martinho",
        isDisplayed: false
    },
    {
        name: "São Calisto",
        description: "Papa e mártir que organizou as catacumbas",
        isDisplayed: false
    },
    {
        name: "Santa Catarina",
        description: "Virgem e mártir de Alexandria",
        isDisplayed: false
    },
    {
        name: "Santa Cecília",
        description: "Virgem e mártir, padroeira da música",
        isDisplayed: false
    },
    {
        name: "São Celso",
        description: "Jovem mártir que morreu com São Nazário",
        isDisplayed: false
    },
    {
        name: "São Cipriano",
        description: "Bispo de Cartago e mártir",
        isDisplayed: false
    },
    {
        name: "São Ciríaco",
        description: "Diácono e mártir",
        isDisplayed: false
    },
    {
        name: "São Clemente",
        description: "Papa e mártir, discípulo dos apóstolos",
        isDisplayed: false
    },
    {
        name: "São Cornélio",
        description: "Papa que enfrentou o cisma de Novaciano",
        isDisplayed: false
    },
    {
        name: "São Cosme",
        description: "Médico e mártir, irmão de São Damião",
        isDisplayed: false
    },
    {
        name: "São Crisanto",
        description: "Mártir que converteu muitos em Roma",
        isDisplayed: false
    },
    {
        name: "São Crisógono",
        description: "Mártir romano, mestre de Santa Anastácia",
        isDisplayed: false
    },
    {
        name: "Santa Cristina",
        description: "Virgem e mártir que destruiu ídolos pagãos",
        isDisplayed: false
    },
    {
        name: "São Cristóvão",
        description: "Mártir que carregou o menino Jesus",
        isDisplayed: false
    },
    {
        name: "São Damião",
        description: "Médico e mártir, irmão de São Cosme",
        isDisplayed: false
    },
    {
        name: "Santa Dária",
        description: "Mártir, esposa de São Crisanto",
        isDisplayed: false
    },
    {
        name: "São Dionísio",
        description: "Primeiro bispo de Paris e mártir",
        isDisplayed: false
    },
    {
        name: "São Domingos",
        description: "Fundador da Ordem dos Pregadores",
        isDisplayed: false
    },
    {
        name: "São Donato",
        description: "Bispo e mártir de Arezzo",
        isDisplayed: false
    },
    {
        name: "São Doroteu",
        description: "Mártir que sofreu com São Gorgônio",
        isDisplayed: false
    },
    {
        name: "Santo Egídio",
        description: "Abade e eremita na França",
        isDisplayed: false
    },
    {
        name: "Santo Eleutério",
        description: "Bispo e mártir que sofreu com São Dionísio",
        isDisplayed: false
    },
    {
        name: "Santa Eufêmia",
        description: "Virgem e mártir de Calcedônia",
        isDisplayed: false
    },
    {
        name: "Santo Eusébio",
        description: "Bispo que lutou contra o arianismo",
        isDisplayed: false
    },
    {
        name: "Santo Eustáquio",
        description: "General romano convertido após ver um cervo com cruz",
        isDisplayed: false
    },
    {
        name: "São Faustino",
        description: "Mártir que sofreu com São Simplício",
        isDisplayed: false
    },
    {
        name: "São Feliciano",
        description: "Bispo e mártir de Foligno",
        isDisplayed: false
    },
    {
        name: "Santa Felicidade",
        description: "Mártir romana que viu seus sete filhos martirizados",
        isDisplayed: false
    },
    {
        name: "São Filipe",
        description: "Apóstolo que pregou na Frígia",
        isDisplayed: false
    },
    {
        name: "São Forseu",
        description: "Monge irlandês que teve visões do purgatório",
        isDisplayed: false
    },
    {
        name: "São Francisco",
        description: "Fundador da Ordem Franciscana",
        isDisplayed: false
    },
    {
        name: "São Germano",
        description: "Bispo de Auxerre que combateu heresias",
        isDisplayed: false
    },
    {
        name: "São Gervásio",
        description: "Mártir, irmão gêmeo de São Protásio",
        isDisplayed: false
    },
    {
        name: "São Gordiano",
        description: "Mártir romano do século IV",
        isDisplayed: false
    },
    {
        name: "São Gorgônio",
        description: "Mártir da corte de Diocleciano",
        isDisplayed: false
    },
    {
        name: "São Gregório",
        description: "Papa Magno, doutor da Igreja",
        isDisplayed: false
    },
    {
        name: "Santo Hipólito",
        description: "Teólogo e mártir romano",
        isDisplayed: false
    },
    {
        name: "Santo Inácio",
        description: "Bispo de Antioquia e mártir",
        isDisplayed: false
    },
    {
        name: "Santa Inês",
        description: "Virgem e mártir romana",
        isDisplayed: false
    },
    {
        name: "São Jacinto",
        description: "Mártir romano que sofreu com São Proto",
        isDisplayed: false
    },
    {
        name: "São Jerônimo",
        description: "Doutor da Igreja, tradutor da Bíblia",
        isDisplayed: false
    },
    {
        name: "São João Abade",
        description: "Abade do deserto egípcio",
        isDisplayed: false
    },
    {
        name: "São João Batista",
        description: "Precursor de Jesus Cristo",
        isDisplayed: false
    },
    {
        name: "São João Crisóstomo",
        description: "Bispo e doutor da Igreja, conhecido por sua eloquência",
        isDisplayed: false
    },
    {
        name: "São Josafá",
        description: "Príncipe indiano convertido por Barlaam",
        isDisplayed: false
    },
    {
        name: "São Judas",
        description: "Apóstolo, também chamado Tadeu",
        isDisplayed: false
    },
    {
        name: "Santa Juliana",
        description: "Virgem e mártir de Nicomédia",
        isDisplayed: false
    },
    {
        name: "São Juliano",
        description: "Mártir que sofreu em Alexandria",
        isDisplayed: false
    },
    {
        name: "Santa Julita",
        description: "Mártir que sofreu com seu filho Quirico",
        isDisplayed: false
    },
    {
        name: "Santa Justina",
        description: "Virgem e mártir de Antioquia",
        isDisplayed: false
    },
    {
        name: "São Lamberto",
        description: "Bispo e mártir de Maastricht",
        isDisplayed: false
    },
    {
        name: "São Leão",
        description: "Papa Magno que enfrentou Átila",
        isDisplayed: false
    },
    {
        name: "São Leodegário",
        description: "Bispo e mártir de Autun",
        isDisplayed: false
    },
    {
        name: "São Leonardo",
        description: "Eremita e libertador de prisioneiros",
        isDisplayed: false
    },
    {
        name: "São Longino",
        description: "Soldado que perfurou o lado de Cristo",
        isDisplayed: false
    },
    {
        name: "São Lourenço",
        description: "Diácono e mártir de Roma",
        isDisplayed: false
    },
    {
        name: "São Lucas",
        description: "Evangelista e médico",
        isDisplayed: false
    },
    {
        name: "São Lupo",
        description: "Bispo de Troyes que enfrentou Átila",
        isDisplayed: false
    },
    {
        name: "Santos Macabeus",
        description: "Sete irmãos mártires do Antigo Testamento",
        isDisplayed: false
    },
    {
        name: "São Mamertino",
        description: "Abade convertido por São Germano",
        isDisplayed: false
    },
    {
        name: "São Marcelino",
        description: "Papa e mártir durante a perseguição de Diocleciano",
        isDisplayed: false
    },
    {
        name: "São Marcos",
        description: "Evangelista e fundador da Igreja de Alexandria",
        isDisplayed: false
    },
    {
        name: "Santa Margarida",
        description: "Virgem e mártir de Antioquia",
        isDisplayed: false
    },
    {
        name: "Santa Maria Egipcíaca",
        description: "Penitente que viveu no deserto",
        isDisplayed: false
    },
    {
        name: "Santa Maria Madalena",
        description: "Discípula de Jesus e primeira testemunha da Ressurreição",
        isDisplayed: false
    },
    {
        name: "Santa Marina",
        description: "Virgem que viveu disfarçada como monge",
        isDisplayed: false
    },
    {
        name: "Santa Marta",
        description: "Irmã de Lázaro e Maria, hospedeira de Jesus",
        isDisplayed: false
    },
    {
        name: "São Martinho",
        description: "Bispo de Tours que dividiu sua capa com um mendigo",
        isDisplayed: false
    },
    {
        name: "São Mateus",
        description: "Apóstolo e evangelista, ex-cobrador de impostos",
        isDisplayed: false
    },
    {
        name: "São Matias",
        description: "Apóstolo escolhido para substituir Judas",
        isDisplayed: false
    },
    {
        name: "São Maurício",
        description: "Comandante da Legião Tebana, mártir",
        isDisplayed: false
    },
    {
        name: "São Miguel",
        description: "Arcanjo, príncipe das milícias celestiais",
        isDisplayed: false
    },
    {
        name: "São Modesto",
        description: "Mártir que sofreu com São Vito",
        isDisplayed: false
    },
    {
        name: "São Moisés",
        description: "Abade etíope do deserto",
        isDisplayed: false
    },
    {
        name: "São Nazário",
        description: "Mártir que evangelizou com São Celso",
        isDisplayed: false
    },
    {
        name: "São Nereu",
        description: "Mártir romano, servo convertido",
        isDisplayed: false
    },
    {
        name: "São Nicolau",
        description: "Bispo de Mira, conhecido por sua generosidade",
        isDisplayed: false
    },
    {
        name: "São Pancrácio",
        description: "Jovem mártir romano",
        isDisplayed: false
    },
    {
        name: "São Pastor",
        description: "Abade do deserto egípcio",
        isDisplayed: false
    },
    {
        name: "São Patrício",
        description: "Apóstolo da Irlanda",
        isDisplayed: false
    },
    {
        name: "Santa Paula",
        description: "Nobre romana que seguiu São Jerônimo",
        isDisplayed: false
    },
    {
        name: "São Paulo Apóstolo",
        description: "Apóstolo dos gentios, convertido a caminho de Damasco",
        isDisplayed: false
    },
    {
        name: "São Pedro Apóstolo",
        description: "Primeiro Papa da Igreja",
        isDisplayed: false
    },
    {
        name: "São Pedro Mártir",
        description: "Dominicano martirizado por hereges",
        isDisplayed: false
    },
    {
        name: "Santa Pelágia",
        description: "Penitente de Antioquia",
        isDisplayed: false
    },
    {
        name: "São Pelágio",
        description: "Jovem mártir de Córdoba",
        isDisplayed: false
    },
    {
        name: "Santa Perpétua",
        description: "Mártir de Cartago com Santa Felicidade",
        isDisplayed: false
    },
    {
        name: "Santa Petronela",
        description: "Virgem romana, filha espiritual de São Pedro",
        isDisplayed: false
    },
    {
        name: "Santa Práxedes",
        description: "Virgem romana que cuidava dos mártires",
        isDisplayed: false
    },
    {
        name: "São Primo",
        description: "Mártir que sofreu com São Feliciano",
        isDisplayed: false
    },
    {
        name: "São Protásio",
        description: "Mártir, irmão gêmeo de São Gervásio",
        isDisplayed: false
    },
    {
        name: "São Proto",
        description: "Mártir que sofreu com São Jacinto",
        isDisplayed: false
    },
    {
        name: "São Quintino",
        description: "Mártir romano na Gália",
        isDisplayed: false
    },
    {
        name: "São Quirce",
        description: "Menino mártir, filho de Santa Julita",
        isDisplayed: false
    },
    {
        name: "São Rústico",
        description: "Mártir que sofreu com São Dionísio",
        isDisplayed: false
    },
    {
        name: "Santa Sabina",
        description: "Mártir romana convertida por sua escrava",
        isDisplayed: false
    },
    {
        name: "São Sabiniano",
        description: "Mártir que sofreu com São Potenciano",
        isDisplayed: false
    },
    {
        name: "São Saturnino",
        description: "Bispo e mártir de Toulouse",
        isDisplayed: false
    },
    {
        name: "São Segundo",
        description: "Mártir da Legião Tebana",
        isDisplayed: false
    },
    {
        name: "São Senen",
        description: "Mártir persa que sofreu com Santo Abdão",
        isDisplayed: false
    },
    {
        name: "São Simão",
        description: "Apóstolo, também chamado Zelote",
        isDisplayed: false
    },
    {
        name: "São Simplício",
        description: "Mártir que sofreu com São Faustino",
        isDisplayed: false
    },
    {
        name: "São Sinforiano",
        description: "Jovem mártir de Autun",
        isDisplayed: false
    },
    {
        name: "São Sisto",
        description: "Papa e mártir, mestre de São Lourenço",
        isDisplayed: false
    },
    {
        name: "Santa Taís",
        description: "Penitente do Egito",
        isDisplayed: false
    },
    {
        name: "Santa Teodora",
        description: "Penitente que viveu como monge",
        isDisplayed: false
    },
    {
        name: "São Teodoro",
        description: "Soldado mártir que queimou um templo pagão",
        isDisplayed: false
    },
    {
        name: "São Tiago Maior",
        description: "Apóstolo, primeiro mártir entre os Doze",
        isDisplayed: false
    },
    {
        name: "São Tiago Menor",
        description: "Apóstolo, primeiro bispo de Jerusalém",
        isDisplayed: false
    },
    {
        name: "São Timóteo",
        description: "Discípulo de São Paulo",
        isDisplayed: false
    },
    {
        name: "São Urbano",
        description: "Papa e mártir que batizou Santa Cecília",
        isDisplayed: false
    },
    {
        name: "São Valentim",
        description: "Sacerdote e mártir romano",
        isDisplayed: false
    },
    {
        name: "São Vedasto",
        description: "Bispo de Arras e evangelizador",
        isDisplayed: false
    },
    {
        name: "São Vidal",
        description: "Mártir de Ravena, pai de Gervásio e Protásio",
        isDisplayed: false
    },
    {
        name: "São Vito",
        description: "Jovem mártir da Sicília",
        isDisplayed: false
    },
    {
        name: "São João e São Paulo",
        description: "Mártires romanos que sofreram juntos",
        isDisplayed: false
    },
    {
        name: "São João na Porta Latina",
        description: "Celebração do martírio frustrado de São João Evangelista",
        isDisplayed: false
    },
    {
        name: "São João Batista (Decapitação)",
        description: "Comemoração do martírio de São João Batista",
        isDisplayed: false
    },
    {
        name: "São João Batista (Natividade)",
        description: "Celebração do nascimento de São João Batista",
        isDisplayed: false
    },
    {
        name: "São Paulo (Conversão)",
        description: "Celebração da conversão de São Paulo a caminho de Damasco",
        isDisplayed: false
    },
    {
        name: "São Pedro Acorrentado",
        description: "Celebração da libertação milagrosa de São Pedro da prisão",
        isDisplayed: false
    },
    {
        name: "São Pedro (Cátedra)",
        description: "Celebração da autoridade de São Pedro como primeiro Papa",
        isDisplayed: false
    },
    {
        name: "São Pedro Exorcista",
        description: "Mártir romano que expulsava demônios",
        isDisplayed: false
    },
    {
        name: "São Tiago, o Cortado",
        description: "Mártir persa que foi cortado em pedaços por sua fé",
        isDisplayed: false
    },
    {
        name: "Virgem Maria (Assunção)",
        description: "Celebração da assunção de Maria aos céus",
        isDisplayed: false
    },
    {
        name: "Virgem Maria (Natividade)",
        description: "Celebração do nascimento da Virgem Maria",
        isDisplayed: false
    },
    {
        name: "Virgem Maria (Purificação)",
        description: "Celebração da apresentação de Jesus no templo",
        isDisplayed: false
    },
    {
        name: "São Barlaão",
        description: "Eremita que converteu o príncipe Josafá",
        isDisplayed: false
    },
    {
        name: "São Félix (Papa)",
        description: "Papa e mártir da Igreja primitiva",
        isDisplayed: false
    }
];
