export type Saint = {
    name: string;
    description: string;
    additionalInfo?: {
        biografia?: string;
        milagres?: string;
        reliquias?: string;
        devocao?: string;
    };
    isDisplayed?: boolean;
    data_devocao?: string;
}

export const saints: Saint[] = [
    {
        name: "Santo André",
        description: "Apóstolo de Jesus, primeiro chamado e mártir crucificado.",
        additionalInfo: {
            biografia: "Santo André, nascido em Betsaida, Galileia, no século I a.C., foi pescador e discípulo de João Batista antes de seguir Jesus como seu primeiro apóstolo (João 1:40-42). Pregou na Ásia Menor e Grécia, sendo crucificado em uma cruz em forma de X (Cruz de Santo André) em Patras, por volta de 60 d.C., aos cerca de 60 anos, por ordem do governador romano Égeas.",
            milagres: "Converteu a esposa de Égeas com sua pregação, resistiu à crucificação por dias pregando, fez uma cruz brilhar para deter seus algozes, curou um possuído na Grécia e apareceu após a morte para guiar pescadores perdidos.",
            reliquias: "Enterrado em Patras, suas relíquias foram trasladadas para Constantinopla e depois para Amalfi, Itália, na Catedral de Santo André. Seu crânio em Patras é venerado por proteção marítima e cura de males físicos.",
            devocao: "Celebrado em 30 de novembro, André é padroeiro dos pescadores e da Escócia. Sua festa inclui bênçãos de redes e orações por vocações. Em arte, é mostrado com a cruz em X, e os fiéis o invocam por coragem e missão."
        },
        isDisplayed: true,
        data_devocao: "30 de novembro"
    },
    {
        name: "São Nicolau",
        description: "Bispo de Mira, conhecido por sua caridade e milagres.",
        additionalInfo: {
            biografia: "São Nicolau nasceu em Patara, Lícia (atual Turquia), por volta de 270 d.C. Tornou-se bispo de Mira, destacando-se por sua generosidade. Salvou marinheiros e crianças, morrendo em 6 de dezembro de 343 d.C., aos cerca de 73 anos, de causas naturais, sendo enterrado em Mira.",
            milagres: "Salvou três moças da prostituição jogando ouro em sua casa, ressuscitou três crianças assassinadas, acalmou uma tempestade no mar, multiplicou trigo em uma fome e apareceu após a morte para libertar um prisioneiro injustiçado.",
            reliquias: "Suas relíquias foram trasladadas para Bari, Itália, em 1087, na Basílica de São Nicolau. Fragmentos de ossos e 'manna de São Nicolau' (líquido exsudado) são venerados por proteção em viagens e cura de crianças.",
            devocao: "Celebrado em 6 de dezembro, Nicolau é padroeiro dos marinheiros, crianças e comerciantes. Sua festa inclui troca de presentes e bênçãos náuticas. Em arte, é mostrado com três bolsas de ouro, e os fiéis o invocam por caridade e justiça."
        },
        isDisplayed: true,
        data_devocao: "6 de dezembro"
    },
    {
        name: "Santa Lúcia",
        description: "Virgem e mártir siciliana, protetora da visão.",
        additionalInfo: {
            biografia: "Santa Lúcia nasceu em Siracusa, Sicília, por volta de 283 d.C., de família nobre. Consagrou-se a Deus, rejeitando o casamento. Denunciada como cristã, foi martirizada em 13 de dezembro de 304 d.C., aos 21 anos, durante a perseguição de Diocleciano, tendo os olhos arrancados ou apunhalada.",
            milagres: "Curou a mãe de uma hemorragia com uma oração, resistiu ao fogo durante o martírio, previu o fim da perseguição, fez seus olhos reaparecerem em visões e apareceu após a morte para curar um cego em Siracusa.",
            reliquias: "Enterrada em Siracusa, suas relíquias estão em Veneza, na Igreja de São Jeremias. Fragmentos de seus olhos são venerados por cura da cegueira e proteção espiritual.",
            devocao: "Celebrada em 13 de dezembro, Lúcia é padroeira dos cegos e oftalmologistas. Sua festa inclui procissões com luzes e bênçãos dos olhos. Em arte, é mostrada com olhos em um prato, e os fiéis a invocam por visão e pureza."
        },
        isDisplayed: true,
        data_devocao: "13 de dezembro"
    },
    {
        name: "São Tomé, apóstolo",
        description: "Apóstolo de Jesus, conhecido por sua dúvida e missão na Índia.",
        additionalInfo: {
            biografia: "São Tomé nasceu na Galileia no século I a.C. Apóstolo de Jesus, famoso por duvidar da Ressurreição até tocar as chagas (João 20:24-29). Pregou na Pérsia e Índia, sendo martirizado em Mylapore, Índia, por volta de 72 d.C., aos cerca de 70 anos, perfurado por lanças.",
            milagres: "Fez uma cruz flutuar para converter indianos, curou um rei cego ao batizá-lo, previu seu martírio em visões, ressuscitou um menino afogado e apareceu após a morte para guiar missionários na Índia.",
            reliquias: "Enterrado em Mylapore, suas relíquias estão na Basílica de São Tomé, Chennai, Índia, e em Ortona, Itália. Fragmentos de ossos são venerados por fé renovada e cura de dúvidas espirituais.",
            devocao: "Celebrado em 21 de dezembro, Tomé é padroeiro dos arquitetos e da Índia. Sua festa inclui orações por fé e missas missionárias. Em arte, é mostrado com uma lança, e os fiéis o invocam por convicção e evangelização."
        },
        isDisplayed: true,
        data_devocao: "21 de dezembro"
    },
    {
        name: "A Natividade do Senhor",
        description: "Festa do nascimento de Jesus Cristo, Salvador da humanidade.",
        additionalInfo: {
            biografia: "A Natividade celebra o nascimento de Jesus em Belém, por volta de 4-6 a.C., filho de Maria e José, conforme os Evangelhos (Lucas 2:1-20, Mateus 1:18-25). Filho de Deus encarnado, viveu até cerca de 33 d.C., quando foi crucificado e ressuscitou, marcando a salvação cristã.",
            milagres: "Nasceu de uma virgem, anjos anunciaram seu nascimento aos pastores, uma estrela guiou os magos, curou enfermos desde a infância (apócrifos) e transformou a história com sua vinda.",
            reliquias: "Relíquias associadas incluem o presépio em Santa Maria Maior, Roma, e fragmentos da manjedoura. São venerados por paz e redenção espiritual.",
            devocao: "Celebrada em 25 de dezembro, é a principal festa cristã, com missas da meia-noite e presépios. Os fiéis a celebram como 'Natal', pedindo amor e salvação, com hinos como 'Noite Feliz'."
        },
        isDisplayed: true,
        data_devocao: "25 de dezembro"
    },
    {
        name: "Santa Anastácia",
        description: "Mártir romana, conhecida por sua caridade em prisões.",
        additionalInfo: {
            biografia: "Santa Anastácia nasceu em Roma por volta de 275 d.C., de família nobre cristã. Após ficar viúva, dedicou-se a ajudar prisioneiros cristãos. Foi martirizada em 25 de dezembro de 304 d.C., aos cerca de 29 anos, queimada viva na Ilíria durante a perseguição de Diocleciano.",
            milagres: "Curou um prisioneiro cego com uma oração, resistiu ao fogo por horas pregando, previu sua morte em visões, libertou almas de prisões espirituais e apareceu após a morte para confortar mártires.",
            reliquias: "Enterrada na Ilíria, suas relíquias estão em Roma, na Igreja de Santa Anastácia. Fragmentos de ossos são venerados por libertação e cura de dores.",
            devocao: "Celebrada em 25 de dezembro, Anastácia é padroeira dos sofredores e viúvas. Sua festa coincide com o Natal, com orações por prisioneiros. Em arte, é mostrada com uma palma, e os fiéis a invocam por consolo."
        },
        isDisplayed: true,
        data_devocao: "25 de dezembro"
    },
    {
        name: "Santo Estêvão, mártir",
        description: "Primeiro mártir cristão, diácono e pregador.",
        additionalInfo: {
            biografia: "Santo Estêvão, nascido em Jerusalém no século I d.C., foi um dos sete primeiros diáconos (Atos 6:5). Pregou com ousadia, sendo apedrejado até a morte por volta de 36 d.C., aos cerca de 30 anos, por ordem do Sinédrio, tornando-se o primeiro mártir cristão (Atos 7:54-60).",
            milagres: "Curou enfermos enquanto pregava, teve uma visão de Jesus antes de morrer, fez pedras brilharem durante o apedrejamento, converteu Saulo (Paulo) indiretamente e apareceu após a morte para revelar suas relíquias.",
            reliquias: "Enterrado perto de Jerusalém, suas relíquias foram descobertas em 415 d.C. e estão na Basílica de São Lourenço Fora dos Muros, Roma. São veneradas por coragem e cura de perseguições.",
            devocao: "Celebrado em 26 de dezembro, Estêvão é padroeiro dos diáconos e pedreiros. Sua festa inclui bênçãos de pedras e orações por fortaleza."
        },
        isDisplayed: true,
        data_devocao: "26 de dezembro"
    },
    {
        name: "São João, apóstolo",
        description: "Apóstolo e evangelista, discípulo amado de Jesus.",
        additionalInfo: {
            biografia: "São João, nascido na Galileia no século I a.C., foi pescador e um dos primeiros chamados por Jesus (Mateus 4:21). Autor do quarto Evangelho, das Epístolas e do Apocalipse, cuidou de Maria após a crucificação. Morreu de causas naturais em Éfeso por volta de 100 d.C., aos cerca de 90 anos.",
            milagres: "Sobreviveu a óleo fervente em Roma, transformou água em vinho em visões, previu o futuro no Apocalipse, ressuscitou um morto em Éfeso e apareceu após a morte para guiar cristãos perseguidos.",
            reliquias: "Enterrado em Éfeso, suas relíquias estão na Basílica de São João, hoje em ruínas. Fragmentos em Roma são venerados por sabedoria e cura espiritual.",
            devocao: "Celebrado em 27 de dezembro, João é padroeiro dos teólogos e escritores. Sua festa inclui leituras do Evangelho e orações por amor. Em arte, é mostrado com uma águia, e os fiéis o invocam por discernimento."
        },
        isDisplayed: true,
        data_devocao: "27 de dezembro"
    },
    {
        name: "Os inocentes",
        description: "Crianças martirizadas por Herodes em Belém.",
        additionalInfo: {
            biografia: "Os Santos Inocentes foram bebês mortos por ordem de Herodes, o Grande, por volta de 4-6 a.C., em Belém, na tentativa de eliminar o Messias (Mateus 2:16-18). Eram crianças com menos de dois anos, consideradas os primeiros mártires cristãos, sem idade exata definida para morte individual.",
            milagres: "Anjos protegeram suas almas ao morrerem, suas mortes anunciaram a vinda de Cristo, curaram mães em visões, previram a salvação em sonhos proféticos e aparecem como coro celestial em relatos místicos.",
            reliquias: "Enterrados em Belém, relíquias simbólicas estão na Basílica de São Paulo Fora dos Muros, Roma. Ossos de crianças são venerados por proteção infantil e cura de mães.",
            devocao: "Celebrados em 28 de dezembro, são padroeiros das crianças e dos injustiçados. A festa inclui missas por inocentes e orações por proteção. Em arte, são mostrados com coroas, e os fiéis os invocam por pureza."
        },
        isDisplayed: true,
        data_devocao: "28 de dezembro"
    },
    {
        name: "São Tomás de Canterbury",
        description: "Arcebispo e mártir, defensor da Igreja contra o rei.",
        additionalInfo: {
            biografia: "São Tomás Becket nasceu em Londres, Inglaterra, em 1118. Chanceler do rei Henrique II, tornou-se arcebispo de Canterbury em 1162. Oposto ao rei por direitos eclesiásticos, foi assassinado em 29 de dezembro de 1170, aos 52 anos, por cavaleiros na catedral de Canterbury.",
            milagres: "Curou um cego com seu sangue após o martírio, previu sua morte em visões, fez sinos tocarem sozinhos em sua morte, protegeu Canterbury de invasões e apareceu para reconciliar Henrique II.",
            reliquias: "Enterrado na Catedral de Canterbury, suas relíquias foram destruídas em 1538, mas fragmentos sobrevivem em Roma. São veneradas por justiça e cura de conflitos.",
            devocao: "Celebrado em 29 de dezembro, Tomás é padroeiro do clero e da Inglaterra. Sua festa inclui orações por coragem e missas em catedrais. Em arte, é mostrado com uma espada, e os fiéis o invocam por resistência."
        },
        isDisplayed: true,
        data_devocao: "29 de dezembro"
    },
    {
        name: "São Silvestre",
        description: "Papa durante o reinado de Constantino, consolidou a Igreja.",
        additionalInfo: {
            biografia: "São Silvestre I nasceu em Roma por volta de 270 d.C. Papa de 314 a 335 d.C., presidiu a Igreja durante a conversão de Constantino e o Concílio de Niceia (325). Morreu em 31 de dezembro de 335 d.C., aos cerca de 65 anos, de causas naturais, sendo enterrado em Roma.",
            milagres: "Converteu Constantino em visão, curou um leproso ao batizá-lo, derrotou um dragão em lenda, previu a paz da Igreja e apareceu após a morte para abençoar Roma.",
            reliquias: "Enterrado nas Catacumbas de Priscila, suas relíquias estão na Igreja de São Silvestre in Capite, Roma. Fragmentos são venerados por estabilidade e cura espiritual.",
            devocao: "Celebrado em 31 de dezembro, Silvestre é padroeiro dos papas e da paz eclesiástica. Sua festa coincide com o Ano Novo, com missas de ação de graças. Em arte, é mostrado com um touro, e os fiéis o invocam por renovação."
        },
        isDisplayed: true,
        data_devocao: "31 de dezembro"
    },
    {
        name: "A circuncisão do Senhor",
        description: "Festa da circuncisão de Jesus, marco de sua humanidade.",
        additionalInfo: {
            biografia: "A Circuncisão celebra o ritual judaico realizado em Jesus oito dias após seu nascimento, por volta de 4-6 a.C., em Belém (Lucas 2:21). Filho de Maria e José, foi circuncidado como sinal da aliança com Deus, vivendo até sua crucificação em 33 d.C.",
            milagres: "Curou um enfermo no dia da circuncisão (apócrifo), anjos cantaram em sua honra, previu sua missão em visões infantis, abençoou os presentes no ritual e apareceu como menino em sonhos salvíficos.",
            reliquias: "Relíquias simbólicas, como o prepúcio, estão em Calcata, Itália (contestadas). São veneradas por humildade e cura de males físicos.",
            devocao: "Celebrada em 1 de janeiro, marca o Nome de Jesus. A festa inclui bênçãos e orações por obediência. Os fiéis a celebram como início do ano cristão, pedindo santidade."
        },
        isDisplayed: true,
        data_devocao: "1 de janeiro"
    },
    {
        name: "Epifania",
        description: "Festa da manifestação de Jesus aos gentios.",
        additionalInfo: {
            biografia: "A Epifania celebra a visita dos Reis Magos a Jesus em Belém, por volta de 4-6 a.C. (Mateus 2:1-12). Filho de Maria e José, foi revelado como Salvador universal, vivendo até sua crucificação em 33 d.C., marcando a salvação para todos os povos.",
            milagres: "Uma estrela guiou os magos, anjos protegeram a fuga ao Egito, curou um servo dos magos (apócrifo), previu sua glória em visões e transformou presentes em bênçãos espirituais.",
            reliquias: "Relíquias dos magos estão na Catedral de Colônia, Alemanha. Fragmentos simbólicos são venerados por revelação e cura espiritual.",
            devocao: "Celebrada em 6 de janeiro, é a festa da manifestação divina. Inclui bênçãos de giz e orações por missão. Os fiéis pedem sabedoria, com hinos como 'Ó Vem, Adoremos'."
        },
        isDisplayed: true,
        data_devocao: "6 de janeiro"
    },
    {
        name: "São Paulo, eremita",
        description: "Primeiro eremita cristão, viveu no deserto egípcio.",
        additionalInfo: {
            biografia: "São Paulo de Tebas nasceu em Tebas, Egito, por volta de 228 d.C. Fugiu da perseguição de Décio em 250 d.C., vivendo como eremita no deserto por 90 anos. Morreu em 10 de janeiro de 341 d.C., aos 113 anos, assistido por Santo Antônio, conforme relato de São Jerônimo.",
            milagres: "Foi alimentado por um corvo por décadas, curou um possuído no deserto, previu sua morte a Antônio, resistiu a tentações demoníacas e apareceu após a morte para guiar eremitas.",
            reliquias: "Enterrado no deserto por Antônio, suas relíquias estão no Mosteiro de São Paulo, Egito. Fragmentos são venerados por solidão e cura de males espirituais.",
            devocao: "Celebrado em 10 de janeiro, Paulo é padroeiro dos eremitas. Sua festa inclui orações por retiro e missas em desertos. Em arte, é mostrado com um corvo, e os fiéis o invocam por contemplação."
        },
        isDisplayed: true,
        data_devocao: "10 de janeiro"
    },
    {
        name: "São Remígio",
        description: "Bispo de Reims, batizou Clóvis, rei dos francos.",
        additionalInfo: {
            biografia: "São Remígio nasceu em Laon, Gália, por volta de 437 d.C. Bispo de Reims aos 22 anos, batizou Clóvis I em 496 d.C., convertendo os francos ao cristianismo. Morreu em 13 de janeiro de 533 d.C., aos cerca de 96 anos, de causas naturais.",
            milagres: "Curou um cego ao batizá-lo, fez uma pomba trazer o óleo santo para Clóvis, previu a conversão dos francos, apagou um incêndio com oração e apareceu após a morte para abençoar Reims.",
            reliquias: "Enterrado em Reims, suas relíquias estão na Basílica de São Remígio. Fragmentos são venerados por conversão e cura de males físicos.",
            devocao: "Celebrado em 14 de janeiro, Remígio é padroeiro da França e dos bispos. Sua festa inclui bênçãos de água e orações por evangelização. Em arte, é mostrado com uma pomba, e os fiéis o invocam por missão."
        },
        isDisplayed: true,
        data_devocao: "14 de janeiro"
    },
    {
        name: "Santo Hilário",
        description: "Bispo de Poitiers, defensor contra o arianismo.",
        additionalInfo: {
            biografia: "Santo Hilário nasceu em Poitiers, Gália, por volta de 310 d.C. Convertido do paganismo, tornou-se bispo em 350 d.C. Exilado por combater o arianismo, escreveu obras teológicas e morreu em 13 de janeiro de 367 d.C., aos cerca de 57 anos.",
            milagres: "Curou um enfermo com uma oração, resistiu a tormentas no exílio, previu o fim do arianismo, fez uma cruz brilhar em debate e apareceu após a morte para converter hereges.",
            reliquias: "Enterrado em Poitiers, suas relíquias estão na Igreja de São Hilário. Fragmentos são venerados por ortodoxia e cura espiritual.",
            devocao: "Celebrado em 14 de janeiro, Hilário é padroeiro dos teólogos e exilados. Sua festa inclui leituras trinitárias e orações por verdade. Em arte, é mostrado com um livro, e os fiéis o invocam por sabedoria."
        },
        isDisplayed: true,
        data_devocao: "14 de janeiro"
    },
    {
        name: "São Félix, confessor",
        description: "Sacerdote e confessor, exemplo de caridade em Roma.",
        additionalInfo: {
            biografia: "São Félix de Nola nasceu em Nola, Itália, por volta de 170 d.C. Filho de um sírio, tornou-se sacerdote e sobreviveu à perseguição de Décio (250 d.C.), ajudando cristãos. Morreu em 14 de janeiro de 260 d.C., aos cerca de 90 anos, de causas naturais.",
            milagres: "Escapou da prisão por anjos, curou um leproso com pão, multiplicou alimentos para perseguidos, previu sua libertação e apareceu após a morte para salvar um escravo cristão.",
            reliquias: "Enterrado em Nola, suas relíquias estão na Catedral de Nola. Fragmentos são venerados por caridade e cura de males físicos.",
            devocao: "Celebrado em 14 de janeiro, Félix é padroeiro dos confessores e pobres. Sua festa inclui esmolas e orações por fortaleza. Em arte, é mostrado com correntes, e os fiéis o invocam por generosidade."
        },
        isDisplayed: true,
        data_devocao: "14 de janeiro"
    },
    {
        name: "São Macário",
        description: "Eremita egípcio, mestre da vida ascética.",
        additionalInfo: {
            biografia: "São Macário, o Grande, nasceu no Alto Egito por volta de 300 d.C. Tornou-se eremita no deserto de Scete aos 30 anos, liderando monges. Morreu em 15 de janeiro de 391 d.C., aos cerca de 91 anos, de causas naturais, após uma vida de penitência.",
            milagres: "Expulsou demônios com orações, curou um possuído no deserto, previu ataques de bandidos, fez água brotar de uma rocha e apareceu após a morte para guiar ascetas.",
            reliquias: "Enterrado em Scete, suas relíquias estão no Mosteiro de São Macário, Egito. Fragmentos são venerados por santidade e cura espiritual.",
            devocao: "Celebrado em 15 de janeiro, Macário é padroeiro dos monges e ascetas. Sua festa inclui jejuns e orações por disciplina. Em arte, é mostrado com uma caveira, e os fiéis o invocam por penitência."
        },
        isDisplayed: true,
        data_devocao: "15 de janeiro"
    },
    {
        name: "São Marcelo",
        description: "Papa e mártir, organizou a Igreja em Roma.",
        additionalInfo: {
            biografia: "São Marcelo I nasceu em Roma por volta de 255 d.C. Papa de 308 a 309 d.C., reorganizou a Igreja após a perseguição de Diocleciano. Exilado por Maxêncio, morreu em 16 de janeiro de 309 d.C., aos cerca de 54 anos, como mártir por exaustão ou execução.",
            milagres: "Curou um enfermo na prisão, previu seu exílio em visões, fez uma cruz brilhar para confortar fiéis, resistiu a torturas iniciais e apareceu após a morte para proteger Roma.",
            reliquias: "Enterrado nas Catacumbas de Priscila, suas relíquias estão na Igreja de São Marcelo, Roma. Fragmentos são venerados por ordem e cura espiritual.",
            devocao: "Celebrado em 16 de janeiro, Marcelo é padroeiro dos papas e exilados. Sua festa inclui missas em catacumbas e orações por liderança. Em arte, é mostrado com uma palma, e os fiéis o invocam por estrutura eclesiástica."
        },
        isDisplayed: true,
        data_devocao: "16 de janeiro"
    },
    {
        name: "Santo Antônio",
        description: "Eremita egípcio, pai do monaquismo cristão.",
        additionalInfo: {
            biografia: "Santo Antônio, o Grande, nasceu em Coma, Egito, por volta de 251 d.C. Aos 20 anos, vendeu seus bens e tornou-se eremita no deserto. Fundou comunidades monásticas e morreu em 17 de janeiro de 356 d.C., aos 105 anos, de causas naturais.",
            milagres: "Expulsou demônios com o sinal da cruz, curou um possuído no deserto, previu ataques demoníacos, resistiu a tentações por décadas e apareceu após a morte para guiar monges.",
            reliquias: "Enterrado no Monte Colzim, suas relíquias estão no Mosteiro de Santo Antônio, Egito, e em Arles, França. Fragmentos são venerados por proteção e cura de doenças.",
            devocao: "Celebrado em 17 de janeiro, Antônio é padroeiro dos monges e contra pragas. Sua festa inclui bênçãos de animais e orações por asceticismo. Em arte, é mostrado com um porco, e os fiéis o invocam por fortaleza."
        },
        isDisplayed: true,
        data_devocao: "17 de janeiro"
    },
    {
        name: "São Fabiano",
        description: "Papa e mártir, organizador da Igreja primitiva.",
        additionalInfo: {
            biografia: "São Fabiano nasceu em Roma por volta de 200 d.C. Eleito papa em 236 d.C. por uma pomba pousar sobre ele, organizou clero e missões. Foi martirizado em 20 de janeiro de 250 d.C., aos cerca de 50 anos, decapitado na perseguição de Décio.",
            milagres: "Curou um cego ao batizá-lo, previu seu martírio em visões, fez uma pomba anunciar sua eleição, resistiu a torturas iniciais e apareceu após a morte para confortar cristãos.",
            reliquias: "Enterrado nas Catacumbas de Calisto, suas relíquias estão na Igreja de São Sebastião, Roma. Fragmentos são venerados por liderança e cura espiritual.",
            devocao: "Celebrado em 20 de janeiro, Fabiano é padroeiro dos papas e missionários. Sua festa inclui missas em catacumbas e orações por unidade. Em arte, é mostrado com uma pomba, e os fiéis o invocam por eleição divina."
        },
        isDisplayed: true,
        data_devocao: "20 de janeiro"
    },
    {
        name: "São Sebastião",
        description: "Mártir romano, soldado e protetor contra pragas.",
        additionalInfo: {
            biografia: "São Sebastião nasceu em Narbona, Gália, por volta de 256 d.C. Soldado romano, converteu-se e ajudou cristãos. Martirizado em 20 de janeiro de 288 d.C., aos 32 anos, por Diocleciano, foi flechado e depois golpeado até a morte após sobreviver às flechas.",
            milagres: "Curou uma muda ao batizá-la, sobreviveu milagrosamente às flechas, previu sua segunda execução, protegeu Roma de uma peste e apareceu após a morte para deter epidemias.",
            reliquias: "Enterrado nas Catacumbas de São Sebastião, suas relíquias estão na Basílica de São Sebastião, Roma. Fragmentos são venerados por cura e proteção contra doenças.",
            devocao: "Celebrado em 20 de janeiro, Sebastião é padroeiro dos soldados e contra pestes. Sua festa inclui bênçãos de saúde e orações por resistência. Em arte, é mostrado com flechas, e os fiéis o invocam por fortaleza."
        },
        isDisplayed: true,
        data_devocao: "20 de janeiro"
    },
    {
        name: "Santa Inês",
        description: "Virgem e mártir romana, símbolo de pureza.",
        additionalInfo: {
            biografia: "Santa Inês nasceu em Roma por volta de 291 d.C., de família nobre. Consagrou-se a Deus aos 12 anos, rejeitando casamento. Martirizada em 21 de janeiro de 304 d.C., aos 13 anos, na perseguição de Diocleciano, foi decapitada após resistir a abusos.",
            milagres: "Fez seu cabelo crescer para cobri-la, curou um agressor ao perdoá-lo, resistiu ao fogo no martírio, previu sua morte em visões e apareceu após a morte com um cordeiro para confortar fiéis.",
            reliquias: "Enterrada na Via Nomentana, suas relíquias estão na Igreja de Santa Inês Fora dos Muros, Roma. Seu crânio em Sant’Agnese in Agone é venerado por pureza e cura de jovens.",
            devocao: "Celebrada em 21 de janeiro, Inês é padroeira das virgens e meninas. Sua festa inclui bênçãos de cordeiros e orações por castidade. Em arte, é mostrada com um cordeiro, e os fiéis a invocam por inocência."
        },
        isDisplayed: true,
        data_devocao: "21 de janeiro"
    },
    {
        name: "São Vicente",
        description: "Diácono e mártir espanhol, símbolo de resistência.",
        additionalInfo: {
            biografia: "São Vicente de Saragoça nasceu em Huesca, Espanha, por volta de 270 d.C. Diácono em Saragoça, foi martirizado em 22 de janeiro de 304 d.C., aos cerca de 34 anos, na perseguição de Diocleciano, torturado em uma grelha e morto após pregar na prisão.",
            milagres: "Converteu um carrasco com sua serenidade, resistiu à grelha com louvor, previu sua vitória em visões, fez corvos protegerem seu corpo e apareceu após a morte para curar um possesso.",
            reliquias: "Enterrado em Valência, suas relíquias estão na Catedral de Valência. Fragmentos são venerados por resistência e cura de males físicos.",
            devocao: "Celebrado em 22 de janeiro, Vicente é padroeiro dos diáconos e vinicultores. Sua festa inclui bênçãos de vinho e orações por coragem. Em arte, é mostrado com uma grelha, e os fiéis o invocam por perseverança."
        },
        isDisplayed: true,
        data_devocao: "22 de janeiro"
    },
    {
        name: "São João, esmoler",
        description: "Bispo de Alexandria, conhecido por sua caridade.",
        additionalInfo: {
            biografia: "São João, o Esmoler, nasceu em Amatonte, Chipre, por volta de 550 d.C. Patriarca de Alexandria em 610 d.C., dedicou-se aos pobres. Morreu em 23 de janeiro de 619 d.C., aos cerca de 69 anos, de causas naturais, deixando um legado de generosidade.",
            milagres: "Curou um mendigo com uma esmola, previu uma seca para ajudar os pobres, multiplicou moedas para caridade, protegeu Alexandria de saques e apareceu após a morte para guiar esmolas.",
            reliquias: "Enterrado em Alexandria, suas relíquias foram perdidas, mas fragmentos estão em igrejas locais. São veneradas por generosidade e cura de necessidades.",
            devocao: "Celebrado em 23 de janeiro, João é padroeiro dos pobres e bispos. Sua festa inclui esmolas e orações por compaixão. Em arte, é mostrado com uma bolsa, e os fiéis o invocam por caridade."
        },
        isDisplayed: true,
        data_devocao: "23 de janeiro"
    },
    {
        name: "A conversão de São Paulo",
        description: "Festa da conversão do apóstolo das nações.",
        additionalInfo: {
            biografia: "A Conversão celebra o evento em que Saulo, nascido em Tarso por volta de 5 d.C., foi convertido por Jesus na estrada de Damasco (Atos 9:1-19), por volta de 35 d.C. Tornou-se Paulo, apóstolo dos gentios, morrendo martirizado em 67 d.C., aos cerca de 62 anos.",
            milagres: "Foi cegado e curado por uma luz divina, ouviu a voz de Cristo, curou Ananias ao ser batizado, previu sua missão em visões e apareceu após a morte para guiar missionários.",
            reliquias: "Enterrado em Roma, suas relíquias estão na Basílica de São Paulo Fora dos Muros. Fragmentos são venerados por conversão e cura espiritual.",
            devocao: "Celebrada em 25 de janeiro, marca a missão universal. Inclui leituras de Atos e orações por transformação. Os fiéis pedem mudança de coração, com hinos como 'Ó Paulo, Apóstolo'."
        },
        isDisplayed: true,
        data_devocao: "25 de janeiro"
    },
    {
        name: "Santa Paula",
        description: "Viúva romana, fundadora de mosteiros em Belém.",
        additionalInfo: {
            biografia: "Santa Paula nasceu em Roma em 347 d.C., de família nobre. Após enviuvar, seguiu São Jerônimo a Belém, fundando mosteiros. Morreu em 26 de janeiro de 404 d.C., aos 56 anos, de causas naturais, dedicada à oração e estudo.",
            milagres: "Curou uma freira com ervas, previu sua morte em visões, fez uma cruz brilhar em Belém, protegeu seu mosteiro de saques e apareceu após a morte para guiar monjas.",
            reliquias: "Enterrada em Belém, suas relíquias estão na Basílica da Natividade. Fragmentos são venerados por santidade e cura de viúvas.",
            devocao: "Celebrada em 26 de janeiro, Paula é padroeira das viúvas e monjas. Sua festa inclui orações por entrega e missas em Belém. Em arte, é mostrada com um livro, e os fiéis a invocam por devoção."
        },
        isDisplayed: true,
        data_devocao: "26 de janeiro"
    },
    {
        name: "São Juliano",
        description: "Bispo e mártir, protetor contra doenças.",
        additionalInfo: {
            biografia: "São Juliano nasceu em Roma por volta de 250 d.C. Bispo de Sora, fugiu da perseguição de Aureliano, mas foi capturado e decapitado em 26 de janeiro de 305 d.C., aos cerca de 55 anos, por sua fé cristã.",
            milagres: "Curou um enfermo na prisão, previu seu martírio em visões, fez uma cela brilhar para confortar fiéis, resistiu a torturas iniciais e apareceu após a morte para deter uma peste em Sora.",
            reliquias: "Enterrado em Sora, suas relíquias estão na Catedral de Sora. Fragmentos são venerados por cura de doenças e proteção espiritual.",
            devocao: "Celebrado em 26 de janeiro, Juliano é padroeiro dos doentes e de Sora. Sua festa inclui bênçãos de saúde e orações por resistência. Em arte, é mostrado com uma palma, e os fiéis o invocam por cura."
        },
        isDisplayed: true,
        data_devocao: "26 de janeiro"
    },
    {
        name: "Santo Inácio (e São Sabiniano)",
        description: "Bispo de Antioquia e mártir, defensor da fé cristã.",
        additionalInfo: {
            biografia: "Santo Inácio nasceu na Síria por volta de 35 d.C. Bispo de Antioquia, foi condenado por Trajano e martirizado em Roma em 1 de fevereiro de 107 d.C., aos cerca de 72 anos, devorado por leões. São Sabiniano, seu companheiro, também foi martirizado na mesma época, com poucos detalhes históricos.",
            milagres: "Curou um possuído na prisão, previu seu martírio em cartas, fez leões hesitarem antes de atacá-lo, protegeu Antioquia em visões e apareceu após a morte para guiar bispos.",
            reliquias: "Enterrado em Roma, suas relíquias estão na Basílica de São Clemente. Fragmentos de Inácio são venerados por coragem e união eclesiástica; de Sabiniano, há poucos registros.",
            devocao: "Celebrado em 1 de fevereiro, Inácio é padroeiro dos bispos e teólogos. Sua festa inclui leituras de suas cartas e orações por fidelidade. Em arte, é mostrado com leões, e os fiéis o invocam por fortaleza, junto a Sabiniano por companheirismo."
        },
        isDisplayed: true,
        data_devocao: "1 de fevereiro"
    },
    {
        name: "A Purificação da Virgem",
        description: "Festa da apresentação de Jesus e purificação de Maria.",
        additionalInfo: {
            biografia: "A Purificação celebra o evento 40 dias após o nascimento de Jesus, por volta de 4-6 a.C., quando Maria e José o apresentaram no Templo (Lucas 2:22-39). Maria, nascida por volta de 20 a.C., viveu até cerca de 50 d.C., sendo elevada na Assunção.",
            milagres: "Simeão profetizou a missão de Jesus, uma luz brilhou no Templo, Maria curou uma mulher estéril em visão, anjos cantaram no ritual e a festa inspirou conversões místicas.",
            reliquias: "Relíquias simbólicas incluem velas benzidas em Roma. São veneradas por pureza e cura espiritual.",
            devocao: "Celebrada em 2 de fevereiro, chamada 'Candelária', inclui bênçãos de velas e orações por consagração. Os fiéis pedem purificação, com hinos como 'Ave Maria Puríssima'."
        },
        isDisplayed: true,
        data_devocao: "2 de fevereiro"
    },
    {
        name: "São Brás",
        description: "Bispo e mártir, protetor contra males da garganta.",
        additionalInfo: {
            biografia: "São Brás nasceu em Sebaste, Armênia, por volta de 260 d.C. Médico e bispo, foi martirizado em 3 de fevereiro de 316 d.C., aos cerca de 56 anos, na perseguição de Licínio, decapitado após ser lacerado com pentes de ferro.",
            milagres: "Salvou um menino de um espinho na garganta, curou animais no deserto, previu seu martírio em visões, resistiu a torturas com serenidade e apareceu após a morte para deter uma peste.",
            reliquias: "Enterrado em Sebaste, suas relíquias estão em Maratea, Itália. Fragmentos são venerados por cura da garganta e proteção animal.",
            devocao: "Celebrado em 3 de fevereiro, Brás é padroeiro dos otorrinolaringologistas. Sua festa inclui bênçãos da garganta e orações por saúde. Em arte, é mostrado com velas, e os fiéis o invocam por cura."
        },
        isDisplayed: true,
        data_devocao: "3 de fevereiro"
    },
    {
        name: "Santa Ágata",
        description: "Virgem e mártir siciliana, protetora contra desastres.",
        additionalInfo: {
            biografia: "Santa Ágata nasceu em Catânia, Sicília, por volta de 231 d.C. Consagrada a Deus, rejeitou um pretendente pagão e foi martirizada em 5 de fevereiro de 251 d.C., aos 20 anos, na perseguição de Décio, tendo os seios cortados e morrendo no fogo.",
            milagres: "Curou uma mulher ferida ao perdoá-la, resistiu ao fogo com louvor, previu a erupção do Etna, protegeu Catânia de lava e apareceu após a morte para deter um incêndio.",
            reliquias: "Enterrada em Catânia, suas relíquias estão na Catedral de Santa Ágata. Seu véu é venerado por proteção contra fogo e cura de doenças femininas.",
            devocao: "Celebrada em 5 de fevereiro, Ágata é padroeira de Catânia e das mulheres. Sua festa inclui procissões com seu véu e orações por segurança. Em arte, é mostrada com seios em um prato, e os fiéis a invocam por fortaleza."
        },
        isDisplayed: true,
        data_devocao: "5 de fevereiro"
    },
    {
        name: "São Vedasto",
        description: "Bispo de Arras, evangelizador dos francos.",
        additionalInfo: {
            biografia: "São Vedasto (ou Vaast) nasceu na Gália por volta de 453 d.C. Monge e bispo de Arras, ajudou Remígio a converter Clóvis. Morreu em 6 de fevereiro de 540 d.C., aos cerca de 87 anos, de causas naturais, após restaurar a diocese.",
            milagres: "Curou um cego ao batizá-lo, expulsou um demônio de um poço, previu a conversão de Clóvis, fez uma cruz brilhar em Arras e apareceu após a morte para guiar bispos.",
            reliquias: "Enterrado em Arras, suas relíquias estão na Catedral de São Vedasto. Fragmentos são venerados por evangelização e cura espiritual.",
            devocao: "Celebrado em 6 de fevereiro, Vedasto é padroeiro de Arras e dos missionários. Sua festa inclui missas de conversão e orações por missão. Em arte, é mostrado com um lobo, e os fiéis o invocam por zelo."
        },
        isDisplayed: true,
        data_devocao: "6 de fevereiro"
    },
    {
        name: "Santo Amando",
        description: "Bispo e missionário, evangelizador da Bélgica.",
        additionalInfo: {
            biografia: "Santo Amando nasceu na Aquitânia, Gália, por volta de 584 d.C. Monge e bispo itinerante, pregou aos pagãos na Flandres. Morreu em 6 de fevereiro de 679 d.C., aos cerca de 95 anos, de causas naturais, em Elnone (atual Saint-Amand-les-Eaux).",
            milagres: "Curou um paralítico ao batizá-lo, previu uma tempestade para salvar fiéis, fez uma fonte brotar em missão, converteu um chefe pagão e apareceu após a morte para proteger Flandres.",
            reliquias: "Enterrado em Elnone, suas relíquias estão na Abadia de Saint-Amand. Fragmentos são venerados por missão e cura de males físicos.",
            devocao: "Celebrado em 6 de fevereiro, Amando é padroeiro dos cervejeiros e missionários. Sua festa inclui bênçãos de cerveja e orações por evangelização. Em arte, é mostrado com uma cruz, e os fiéis o invocam por coragem."
        },
        isDisplayed: true,
        data_devocao: "6 de fevereiro"
    },
    {
        name: "São Valentino",
        description: "Mártir romano, patrono dos enamorados.",
        additionalInfo: {
            biografia: "São Valentino nasceu em Terni, Itália, por volta de 226 d.C. Sacerdote ou bispo, casou soldados cristãos secretamente. Martirizado em 14 de fevereiro de 269 d.C., aos cerca de 43 anos, decapitado por Cláudio II por sua fé e ações.",
            milagres: "Curou a filha cega de um juiz, previu seu martírio em visões, fez flores brotarem na prisão, uniu casais em sonhos e apareceu após a morte para abençoar amantes.",
            reliquias: "Enterrado na Via Flaminia, suas relíquias estão na Basílica de Santa Maria em Cosmedin, Roma. Seu crânio em Terni é venerado por amor e cura de corações.",
            devocao: "Celebrado em 14 de fevereiro, Valentino é padroeiro dos namorados. Sua festa inclui bênçãos de casais e orações por amor. Em arte, é mostrado com um coração, e os fiéis o invocam por união."
        },
        isDisplayed: true,
        data_devocao: "14 de fevereiro"
    },
    {
        name: "Santa Juliana",
        description: "Virgem e mártir, resistiu ao paganismo.",
        additionalInfo: {
            biografia: "Santa Juliana nasceu em Nicomédia, Ásia Menor, por volta de 286 d.C. Rejeitou um casamento pagão e foi martirizada em 16 de fevereiro de 304 d.C., aos 18 anos, na perseguição de Diocleciano, decapitada após torturas.",
            milagres: "Expulsou um demônio que a tentou, resistiu a uma roda de espinhos, curou um ferido na prisão, previu seu martírio e apareceu após a morte para deter uma tempestade.",
            reliquias: "Enterrada em Nicomédia, suas relíquias estão em Bruxelas, Bélgica. Fragmentos são venerados por pureza e cura de males espirituais.",
            devocao: "Celebrada em 16 de fevereiro, Juliana é padroeira das virgens e doentes. Sua festa inclui orações por castidade e missas de resistência. Em arte, é mostrada com um dragão, e os fiéis a invocam por força."
        },
        isDisplayed: true,
        data_devocao: "16 de fevereiro"
    },
    {
        name: "A cátedra de São Pedro",
        description: "Festa da autoridade apostólica de Pedro em Roma.",
        additionalInfo: {
            biografia: "A Cátedra celebra a liderança de São Pedro, nascido em Betsaida por volta de 1 a.C., como primeiro papa. Chamado por Jesus (Mateus 16:18), morreu martirizado em Roma em 67 d.C., aos cerca de 68 anos, crucificado de cabeça para baixo.",
            milagres: "Curou um coxo em Jerusalém, ressuscitou Tabita (Atos 9:36-41), libertou-se da prisão por um anjo, previu sua morte e estabeleceu a Igreja em Roma com milagres.",
            reliquias: "Enterrado sob a Basílica de São Pedro, suas relíquias estão no Vaticano. A Cátedra de Pedro (cadeira simbólica) é venerada por autoridade e cura espiritual.",
            devocao: "Celebrada em 22 de fevereiro, marca a primazia papal. Inclui missas no Vaticano e orações por unidade. Os fiéis pedem liderança, com hinos como 'Tu és Pedro'."
        },
        isDisplayed: true,
        data_devocao: "22 de fevereiro"
    },
    {
        name: "São Matias",
        description: "Apóstolo escolhido para substituir Judas Iscariotes como uma forma de celebrar o dia.",
        additionalInfo: {
            biografia: "São Matias nasceu na Judeia no século I a.C. Escolhido por sorteio para substituir Judas Iscariotes entre os apóstolos (Atos 1:21-26), pregou o Evangelho, possivelmente na Etiópia. Martirizado por volta de 80 d.C., aos cerca de 70 anos, por apedrejamento ou decapitação.",
            milagres: "Curou um paralítico em missão, previu sua eleição em visões, fez uma cruz brilhar para converter pagãos, ressuscitou um morto em lenda e apareceu após a morte para guiar apóstolos.",
            reliquias: "Enterrado possivelmente na Geórgia ou Jerusalém, suas relíquias estão na Basílica de Santa Maria Maggiore, Roma. Fragmentos são venerados por eleição divina e cura espiritual.",
            devocao: "Celebrado em 24 de fevereiro, Matias é padroeiro dos eleitos e carpinteiros. Sua festa inclui sorteios simbólicos e orações por vocação. Em arte, é mostrado com um machado, e os fiéis o invocam por chamado."
        },
        isDisplayed: true,
        data_devocao: "24 de fevereiro"
    },
    {
        name: "São Gregório",
        description: "Papa e doutor da Igreja, reformador do canto litúrgico.",
        additionalInfo: {
            biografia: "São Gregório I, o Grande, nasceu em Roma por volta de 540 d.C. Prefeito de Roma, tornou-se monge e papa em 590 d.C. Enviou missionários à Inglaterra e morreu em 12 de março de 604 d.C., aos cerca de 64 anos, de causas naturais.",
            milagres: "Curou um doente com uma relíquia, previu a conversão dos anglos, fez sinos tocarem em sua morte, protegeu Roma de uma peste e apareceu após a morte para guiar papas.",
            reliquias: "Enterrado na Basílica de São Pedro, suas relíquias estão no Vaticano. Fragmentos são venerados por sabedoria e cura espiritual.",
            devocao: "Celebrado em 12 de março, Gregório é padroeiro dos músicos e papas. Sua festa inclui canto gregoriano e orações por missão. Em arte, é mostrado com uma pomba, e os fiéis o invocam por liderança."
        },
        isDisplayed: true,
        data_devocao: "12 de março"
    },
    {
        name: "São Longino",
        description: "Soldado romano que perfurou Jesus, convertido ao cristianismo.",
        additionalInfo: {
            biografia: "São Longino nasceu na Capadócia por volta do século I a.C. Centurião na crucificação, perfurou o lado de Jesus (João 19:34) e converteu-se. Martirizado em 15 de março de 60 d.C., aos cerca de 50 anos, decapitado por pregar a fé.",
            milagres: "Curou-se da cegueira com o sangue de Jesus, previu sua conversão em visões, fez a lança brilhar na cruz, converteu soldados e apareceu após a morte para revelar a lança.",
            reliquias: "Enterrado na Capadócia, suas relíquias estão na Basílica de São Pedro (Lança Sagrada). Fragmentos são venerados por conversão e cura de olhos.",
            devocao: "Celebrado em 15 de março, Longino é padroeiro dos convertidos e soldados. Sua festa inclui orações por fé e missas com a lança. Em arte, é mostrado com uma lança, e os fiéis o invocam por transformação."
        },
        isDisplayed: true,
        data_devocao: "15 de março"
    },
    {
        name: "São Patrício",
        description: "Missionário irlandês, evangelizador da Irlanda.",
        additionalInfo: {
            biografia: "São Patrício nasceu na Britânia por volta de 387 d.C. Capturado por piratas, escapou e tornou-se missionário. Bispo da Irlanda, morreu em 17 de março de 461 d.C., aos cerca de 74 anos, de causas naturais, após converter o país.",
            milagres: "Expulsou cobras da Irlanda (lenda), curou um rei cego ao batizá-lo, previu a cristianização da Irlanda, usou o trevo para explicar a Trindade e apareceu após a morte para proteger os irlandeses.",
            reliquias: "Enterrado em Downpatrick, suas relíquias estão na Catedral de Down. Fragmentos são venerados por missão e cura espiritual.",
            devocao: "Celebrado em 17 de março, Patrício é padroeiro da Irlanda. Sua festa inclui desfiles e orações por evangelização. Em arte, é mostrado com um trevo, e os fiéis o invocam por fé."
        },
        isDisplayed: true,
        data_devocao: "17 de março"
    },
    {
        name: "São Bento",
        description: "Fundador do monaquismo ocidental, autor da Regra.",
        additionalInfo: {
            biografia: "São Bento nasceu em Núrsia, Itália, por volta de 480 d.C. Eremita e fundador dos beneditinos em Monte Cassino, morreu em 21 de março de 547 d.C., aos cerca de 67 anos, de causas naturais ou febre, segundo a tradição.",
            milagres: "Expulsou um demônio de um monge, previu a destruição de Monte Cassino, fez uma cruz deter veneno, ressuscitou um jovem em lenda e apareceu após a morte para guiar monges.",
            reliquias: "Enterrado em Monte Cassino, suas relíquias estão na Abadia de Fleury, França. Fragmentos são venerados por disciplina e cura espiritual.",
            devocao: "Celebrado em 21 de março, Bento é padroeiro dos monges e da Europa. Sua festa inclui a Regra e orações por ordem. Em arte, é mostrado com um livro, e os fiéis o invocam por santidade."
        },
        isDisplayed: true,
        data_devocao: "21 de março"
    },
    {
        name: "A Anunciação do Senhor",
        description: "Festa da anunciação do nascimento de Jesus a Maria.",
        additionalInfo: {
            biografia: "A Anunciação celebra a visita do anjo Gabriel a Maria em Nazaré, por volta de 6 a.C. (Lucas 1:26-38). Maria, nascida por volta de 20 a.C., aceitou ser a Mãe de Deus, vivendo até cerca de 50 d.C., quando foi assunta ao céu.",
            milagres: "Concebeu virginalmente, anjos cantaram em sua honra, curou uma estéril em visão, previu a salvação em seu 'Fiat' e apareceu como Virgem para guiar fiéis.",
            reliquias: "Relíquias simbólicas estão na Casa de Loreto, Itália. São veneradas por obediência e cura espiritual.",
            devocao: "Celebrada em 25 de março, marca a Encarnação. Inclui o 'Angelus' e orações por entrega. Os fiéis pedem humildade, com hinos como 'Ave Maria'."
        },
        isDisplayed: true,
        data_devocao: "25 de março"
    },
    {
        name: "São Segundo",
        description: "Mártir espanhol, defensor da fé cristã.",
        additionalInfo: {
            biografia: "São Segundo nasceu em Astorga, Espanha, por volta de 270 d.C. Convertido, foi martirizado em 30 de março de 306 d.C., aos cerca de 36 anos, na perseguição de Diocleciano, decapitado por pregar o cristianismo.",
            milagres: "Curou um possuído na prisão, previu seu martírio em visões, fez uma cruz brilhar para confortar fiéis, resistiu a torturas iniciais e apareceu após a morte para proteger Astorga.",
            reliquias: "Enterrado em Astorga, suas relíquias estão na Catedral de Astorga. Fragmentos são venerados por coragem e cura espiritual.",
            devocao: "Celebrado em 30 de março, Segundo é padroeiro dos mártires locais. Sua festa inclui missas de resistência e orações por fé. Em arte, é mostrado com uma palma, e os fiéis o invocam por fortaleza."
        },
        isDisplayed: true,
        data_devocao: "30 de março"
    },
    {
        name: "São Mamertino",
        description: "Monge e mártir, exemplo de penitência.",
        additionalInfo: {
            biografia: "São Mamertino nasceu na Gália por volta de 350 d.C. Convertido de uma vida de crime, tornou-se monge em Auxerre. Martirizado em 30 de março de 410 d.C., aos cerca de 60 anos, por invasores bárbaros ou por sua fé.",
            milagres: "Curou um enfermo com penitência, previu sua morte em visões, fez uma cela brilhar em oração, converteu ladrões e apareceu após a morte para guiar penitentes.",
            reliquias: "Enterrado em Auxerre, suas relíquias estão na Igreja de São Mamertino. Fragmentos são venerados por conversão e cura de pecados.",
            devocao: "Celebrado em 30 de março, Mamertino é padroeiro dos penitentes. Sua festa inclui confissões e orações por mudança. Em arte, é mostrado com correntes, e os fiéis o invocam por arrependimento."
        },
        isDisplayed: true,
        data_devocao: "30 de março"
    },
    {
        name: "Santa Maria Egipcíaca",
        description: "Penitente do deserto, exemplo de conversão.",
        additionalInfo: {
            biografia: "Santa Maria nasceu no Egito por volta de 344 d.C. Após uma vida de prostituição, converteu-se em Jerusalém e viveu como eremita no deserto da Jordânia. Morreu em 2 de abril de 421 d.C., aos cerca de 77 anos, de causas naturais.",
            milagres: "Levitou em oração, atravessou o Jordão a pé, previu sua morte a São Zósimo, viveu sem comida por milagre e apareceu após a morte para guiar pecadores.",
            reliquias: "Enterrada no deserto, suas relíquias foram perdidas, mas fragmentos simbólicos estão em Roma. São veneradas por penitência e cura espiritual.",
            devocao: "Celebrada em 2 de abril, Maria é padroeira dos convertidos. Sua festa inclui jejuns e orações por transformação. Em arte, é mostrada com cabelos longos, e os fiéis a invocam por redenção."
        },
        isDisplayed: true,
        data_devocao: "2 de abril"
    },
    {
        name: "Santo Ambrósio",
        description: "Bispo de Milão, doutor da Igreja e conversor de Agostinho.",
        additionalInfo: {
            biografia: "Santo Ambrósio nasceu em Tréveris, Gália, por volta de 340 d.C. Governador, foi eleito bispo de Milão em 374 d.C. Morreu em 4 de abril de 397 d.C., aos cerca de 57 anos, de causas naturais, após influenciar a Igreja e Agostinho.",
            milagres: "Curou um cego ao batizá-lo, previu sua eleição em visões, fez abelhas pousarem em sua boca como bebê, resistiu ao imperador Teodósio e apareceu após a morte para guiar Milão.",
            reliquias: "Enterrado em Milão, suas relíquias estão na Basílica de Santo Ambrósio. Fragmentos são venerados por sabedoria e cura espiritual.",
            devocao: "Celebrado em 4 de abril, Ambrósio é padroeiro dos bispos e apicultores. Sua festa inclui hinos ambrosianos e orações por eloquência. Em arte, é mostrado com abelhas, e os fiéis o invocam por conversão."
        },
        isDisplayed: true,
        data_devocao: "4 de abril"
    },
    {
        name: "São Jorge",
        description: "Mártir e soldado, matador do dragão em lenda.",
        additionalInfo: {
            biografia: "São Jorge nasceu na Capadócia por volta de 275 d.C. Soldado romano, foi martirizado em 23 de abril de 303 d.C., aos cerca de 28 anos, na perseguição de Diocleciano, decapitado por renunciar ao paganismo.",
            milagres: "Matou um dragão em lenda, curou um ferido na prisão, resistiu a torturas milagrosamente, previu seu martírio e apareceu após a morte para proteger soldados.",
            reliquias: "Enterrado em Lida, suas relíquias estão na Igreja de São Jorge, Israel. Fragmentos são venerados por coragem e cura física.",
            devocao: "Celebrado em 23 de abril, Jorge é padroeiro dos soldados e da Inglaterra. Sua festa inclui cavalgadas e orações por bravura. Em arte, é mostrado com um dragão, e os fiéis o invocam por proteção."
        },
        isDisplayed: true,
        data_devocao: "23 de abril"
    },
    {
        name: "São Marcos",
        description: "Evangelista e discípulo de Pedro, autor do segundo Evangelho.",
        additionalInfo: {
            biografia: "São Marcos nasceu em Cirene ou Jerusalém por volta de 10 d.C. Companheiro de Pedro e Paulo, fundou a Igreja de Alexandria. Martirizado em 25 de abril de 68 d.C., aos cerca de 58 anos, arrastado por cordas até a morte.",
            milagres: "Curou um cego em Alexandria, previu sua morte em visões, fez um leão obedecê-lo em lenda, protegeu seu Evangelho e apareceu após a morte para guiar cristãos.",
            reliquias: "Enterrado em Alexandria, suas relíquias estão na Basílica de São Marcos, Veneza. Fragmentos são venerados por evangelização e cura espiritual.",
            devocao: "Celebrado em 25 de abril, Marcos é padroeiro dos escribas e de Veneza. Sua festa inclui leituras do Evangelho e orações por missão. Em arte, é mostrado com um leão, e os fiéis o invocam por inspiração."
        },
        isDisplayed: true,
        data_devocao: "25 de abril"
    },
    {
        name: "São Marcelino",
        description: "Papa e mártir, liderou a Igreja em tempos de perseguição.",
        additionalInfo: {
            biografia: "São Marcelino nasceu em Roma por volta de 250 d.C. Papa de 296 a 304 d.C., enfrentou a perseguição de Diocleciano. Morreu em 26 de abril de 304 d.C., aos cerca de 54 anos, martirizado por execução ou exílio forçado.",
            milagres: "Curou um possuído na prisão, previu o fim da perseguição, fez uma cruz brilhar para confortar fiéis, resistiu a torturas iniciais e apareceu após a morte para proteger Roma.",
            reliquias: "Enterrado nas Catacumbas de Priscila, suas relíquias foram perdidas, mas fragmentos estão em igrejas romanas. São veneradas por liderança e cura espiritual.",
            devocao: "Celebrado em 26 de abril, Marcelino é padroeiro dos papas perseguidos. Sua festa inclui missas em catacumbas e orações por fortaleza. Em arte, é mostrado com uma palma, e os fiéis o invocam por resistência."
        },
        isDisplayed: true,
        data_devocao: "26 de abril"
    },
    {
        name: "São Vidal",
        description: "Mártir de Ravena, exemplo de fidelidade cristã.",
        additionalInfo: {
            biografia: "São Vidal (ou Vital) nasceu em Milão por volta de 270 d.C. Soldado romano, foi martirizado em 28 de abril de 304 d.C., aos cerca de 34 anos, na perseguição de Diocleciano, queimado vivo em Ravena com sua esposa Valéria e filhos.",
            milagres: "Curou um ferido na prisão, resistiu ao fogo com louvor, previu seu martírio em visões, protegeu sua família em espírito e apareceu após a morte para confortar cristãos.",
            reliquias: "Enterrado em Ravena, suas relíquias estão na Basílica de São Vidal. Fragmentos são venerados por fidelidade e cura familiar.",
            devocao: "Celebrado em 28 de abril, Vidal é padroeiro das famílias e mártires. Sua festa inclui orações por união e missas em Ravena. Em arte, é mostrado com fogo, e os fiéis o invocam por lealdade."
        },
        isDisplayed: true,
        data_devocao: "28 de abril"
    },
    {
        name: "São Pedro, Mártir",
        description: "Dominicano e inquisidor, mártir contra heresias.",
        additionalInfo: {
            biografia: "São Pedro de Verona nasceu em Verona, Itália, por volta de 1205. Dominicanos, combateu os cátaros e foi assassinado em 29 de abril de 1252, aos 47 anos, por hereges que o golpearam com um machado na cabeça.",
            milagres: "Curou um mudo ao pregar, previu seu martírio em visões, fez uma cruz brilhar contra hereges, converteu seu assassino e apareceu após a morte para deter heresias.",
            reliquias: "Enterrado em Milão, suas relíquias estão na Basílica de Santo Eustórgio. Fragmentos são venerados por ortodoxia e cura de ferimentos.",
            devocao: "Celebrado em 29 de abril, Pedro é padroeiro dos inquisidores e pregadores. Sua festa inclui orações por verdade e missas dominicanas. Em arte, é mostrado com um machado, e os fiéis o invocam por zelo."
        },
        isDisplayed: true,
        data_devocao: "29 de abril"
    },
    {
        name: "São Filipe",
        description: "Apóstolo de Jesus, pregador na Ásia Menor.",
        additionalInfo: {
            biografia: "São Filipe nasceu em Betsaida, Galileia, no século I a.C. Chamado por Jesus (João 1:43), pregou na Frígia e foi martirizado em Hierápolis por volta de 80 d.C., aos cerca de 70 anos, crucificado de cabeça para baixo.",
            milagres: "Curou um paralítico em missão, previu sua morte em visões, fez uma cruz brilhar para converter pagãos, ressuscitou um menino em lenda e apareceu após a morte para guiar missionários.",
            reliquias: "Enterrado em Hierápolis, suas relíquias estão na Basílica dos Santos Apóstolos, Roma. Fragmentos são venerados por missão e cura física.",
            devocao: "Celebrado em 1 de maio, Filipe é padroeiro dos missionários. Sua festa inclui orações por evangelização e missas apostólicas. Em arte, é mostrado com uma cruz, e os fiéis o invocam por chamado."
        },
        isDisplayed: true,
        data_devocao: "1 de maio"
    },
    {
        name: "São Tiago, o Menor",
        description: "Apóstolo e primeiro bispo de Jerusalém, autor da epístola.",
        additionalInfo: {
            biografia: "São Tiago, o Menor, nasceu na Galileia no século I a.C. Primo de Jesus, liderou a Igreja de Jerusalém (Atos 15). Martirizado em 1 de maio de 62 d.C., aos cerca de 60 anos, apedrejado e golpeado por judeus opositores.",
            milagres: "Curou um coxo em Jerusalém, previu seu martírio em visões, fez uma pedra brilhar durante o Concílio, resistiu a torturas iniciais e apareceu após a morte para guiar cristãos.",
            reliquias: "Enterrado em Jerusalém, suas relíquias estão na Basílica dos Santos Apóstolos, Roma. Fragmentos são venerados por liderança e cura espiritual.",
            devocao: "Celebrado em 1 de maio, Tiago é padroeiro dos bispos e trabalhadores. Sua festa inclui leituras da Epístola e orações por justiça. Em arte, é mostrado com um bastão, e os fiéis o invocam por sabedoria."
        },
        isDisplayed: true,
        data_devocao: "1 de maio"
    },
    {
        name: "A descoberta da Santa Cruz",
        description: "Festa da descoberta da cruz de Jesus por Santa Helena.",
        additionalInfo: {
            biografia: "A Descoberta celebra a busca de Santa Helena, nascida por volta de 250 d.C., que encontrou a Vera Cruz em Jerusalém por volta de 326 d.C. Mãe de Constantino, morreu em 330 d.C., aos cerca de 80 anos, deixando o legado da cruz.",
            milagres: "Ressuscitou um morto com a cruz, curou um enfermo ao tocá-la, previu a descoberta em visões, fez a cruz brilhar para identificá-la e inspirou conversões após o achado.",
            reliquias: "Fragmentos da Vera Cruz estão na Basílica de Santa Cruz, Roma, e em Jerusalém. São venerados por salvação e cura física.",
            devocao: "Celebrada em 3 de maio, marca a redenção. Inclui veneração da cruz e orações por sacrifício. Os fiéis pedem redenção, com hinos como 'Crux Fidelis'."
        },
        isDisplayed: true,
        data_devocao: "3 de maio"
    },
    {
        name: "São João diante da Porta Latina",
        description: "Festa da tentativa de martírio de João em Roma.",
        additionalInfo: {
            biografia: "São João, apóstolo, nasceu na Galileia por volta de 10 d.C. Sobreviveu a óleo fervente diante da Porta Latina em Roma por volta de 95 d.C., sob Domiciano. Morreu em Éfeso em 100 d.C., aos cerca de 90 anos, de causas naturais.",
            milagres: "Saiu ileso do óleo, curou um cego após o milagre, previu sua sobrevivência, fez o óleo brilhar em sinal divino e apareceu após a morte para confortar fiéis.",
            reliquias: "Enterrado em Éfeso, relíquias simbólicas estão na Igreja de São João, Roma. São veneradas por proteção e cura espiritual.",
            devocao: "Celebrada em 6 de maio, marca a invencibilidade de João. Inclui bênçãos de óleo e orações por resistência. Os fiéis pedem fortaleza, com hinos como 'Apóstolo Amado'."
        },
        isDisplayed: true,
        data_devocao: "6 de maio"
    },
    {
        name: "São Gordiano",
        description: "Mártir romano, exemplo de fé juvenil.",
        additionalInfo: {
            biografia: "São Gordiano nasceu em Roma por volta de 290 d.C. Convertido, foi martirizado em 10 de maio de 304 d.C., aos cerca de 14 anos, na perseguição de Diocleciano, decapitado por sua fé, junto a São Epímaco.",
            milagres: "Curou um ferido na prisão, previu seu martírio em visões, fez uma cruz brilhar para confortar fiéis, converteu um carrasco e apareceu após a morte para proteger jovens.",
            reliquias: "Enterrado nas Catacumbas de São Calisto, suas relíquias estão na Igreja de São Gordiano, Roma. Fragmentos são venerados por juventude e cura espiritual.",
            devocao: "Celebrado em 10 de maio, Gordiano é padroeiro dos jovens mártires. Sua festa inclui orações por coragem e missas em catacumbas. Em arte, é mostrado com uma palma, e os fiéis o invocam por zelo."
        },
        isDisplayed: true,
        data_devocao: "10 de maio"
    },
    {
        name: "Santos Nereu e Aquileu",
        description: "Mártires romanos, soldados convertidos.",
        additionalInfo: {
            biografia: "Santos Nereu e Aquileu nasceram em Roma por volta de 70 d.C. Soldados pretorianos, converteram-se e foram martirizados em 12 de maio de 100 d.C., aos cerca de 30 anos, decapitados sob Trajano por abandonarem o paganismo.",
            milagres: "Curaram um cego ao batizá-lo, previram seu martírio em visões, fizeram uma cruz brilhar na prisão, converteram companheiros soldados e apareceram após a morte para proteger Roma.",
            reliquias: "Enterrados na Via Ardeatina, suas relíquias estão na Igreja de Santos Nereu e Aquileu, Roma. Fragmentos são venerados por fidelidade e cura física.",
            devocao: "Celebrados em 12 de maio, são padroeiros dos soldados cristãos. Sua festa inclui orações por conversão e missas militares. Em arte, são mostrados com espadas, e os fiéis os invocam por lealdade."
        },
        isDisplayed: true,
        data_devocao: "12 de maio"
    },
    {
        name: "São Pancrácio",
        description: "Mártir romano, jovem símbolo de coragem.",
        additionalInfo: {
            biografia: "São Pancrácio nasceu em Frígia por volta de 289 d.C. Órfão, foi a Roma e converteu-se. Martirizado em 12 de maio de 304 d.C., aos 14 anos, na perseguição de Diocleciano, decapitado na Via Aurélia.",
            milagres: "Curou um possuído na prisão, previu seu martírio em visões, fez uma cruz brilhar para confortar fiéis, converteu seu tio e apareceu após a morte para proteger jovens.",
            reliquias: "Enterrado na Via Aurélia, suas relíquias estão na Basílica de São Pancrácio, Roma. Fragmentos são venerados por juventude e cura espiritual.",
            devocao: "Celebrado em 12 de maio, Pancrácio é padroeiro dos jovens e juramentos. Sua festa inclui orações por coragem e missas juvenis. Em arte, é mostrado com uma palma, e os fiéis o invocam por fidelidade."
        },
        isDisplayed: true,
        data_devocao: "12 de maio"
    },
    {
        name: "Santo Urbano",
        description: "Papa e mártir, organizador da Igreja primitiva.",
        additionalInfo: {
            biografia: "Santo Urbano I nasceu em Roma por volta de 170 d.C. Papa de 222 a 230 d.C., enfrentou cismas e perseguições. Martirizado em 25 de maio de 230 d.C., aos cerca de 60 anos, decapitado sob Alexandre Severo.",
            milagres: "Curou um enfermo ao batizá-lo, previu o fim de um cisma, fez uma cruz brilhar em Roma, resistiu a torturas iniciais e apareceu após a morte para guiar papas.",
            reliquias: "Enterrado nas Catacumbas de Pretextato, suas relíquias estão na Igreja de Santa Maria in Trastevere, Roma. Fragmentos são venerados por unidade e cura espiritual.",
            devocao: "Celebrado em 25 de maio, Urbano é padroeiro dos papas e vinicultores. Sua festa inclui missas em catacumbas e orações por harmonia. Em arte, é mostrado com uvas, e os fiéis o invocam por liderança."
        },
        isDisplayed: true,
        data_devocao: "25 de maio"
    },
    {
        name: "Santa Petronela",
        description: "Virgem e mártir, associada a São Pedro.",
        additionalInfo: {
            biografia: "Santa Petronela nasceu em Roma por volta de 50 d.C. Tradicionalmente considerada filha espiritual de Pedro, foi martirizada por volta de 98 d.C., aos cerca de 48 anos, sob Domiciano, apedrejada ou decapitada por sua fé.",
            milagres: "Curou uma paralítica com oração, previu seu martírio em visões, fez uma cruz brilhar na prisão, converteu um carrasco e apareceu após a morte para proteger fiéis.",
            reliquias: "Enterrada na Via Ardeatina, suas relíquias estão na Basílica de São Pedro, Roma. Fragmentos são venerados por pureza e cura de males femininos.",
            devocao: "Celebrada em 31 de maio, Petronela é padroeira das virgens e doentes. Sua festa inclui orações por castidade e missas em Roma. Em arte, é mostrada com Pedro, e os fiéis a invocam por santidade."
        },
        isDisplayed: true,
        data_devocao: "31 de maio"
    },
    {
        name: "São Pedro, exorcista",
        description: "Mártir romano, companheiro de São Marcelino.",
        additionalInfo: {
            biografia: "São Pedro nasceu em Roma por volta de 270 d.C. Exorcista da Igreja, foi martirizado com Marcelino em 2 de junho de 304 d.C., aos cerca de 34 anos, na perseguição de Diocleciano, decapitado por sua fé.",
            milagres: "Expulsou demônios com oração, curou um possuído na prisão, previu seu martírio em visões, fez uma cruz brilhar para confortar fiéis e apareceu após a morte para libertar almas.",
            reliquias: "Enterrado nas Catacumbas de São Sebastião, suas relíquias estão na Igreja de São Pedro in Vincoli, Roma. Fragmentos são venerados por libertação e cura espiritual.",
            devocao: "Celebrado em 2 de junho, Pedro é padroeiro dos exorcistas. Sua festa inclui orações contra o mal e missas em catacumbas. Em arte, é mostrado com Marcelino, e os fiéis o invocam por proteção."
        },
        isDisplayed: true,
        data_devocao: "2 de junho"
    },
    {
        name: "Santos Primo e Feliciano",
        description: "Mártires romanos, irmãos na fé.",
        additionalInfo: {
            biografia: "Santos Primo e Feliciano nasceram em Roma por volta de 220 d.C. Nobres convertidos, foram martirizados em 9 de junho de 297 d.C., Primo aos cerca de 77 anos e Feliciano aos cerca de 70, na perseguição de Diocleciano, torturados e decapitados.",
            milagres: "Curaram um paralítico na prisão, previram seu martírio em visões, fizeram uma cruz brilhar para confortar fiéis, resistiram a torturas com serenidade e apareceram após a morte para proteger Roma.",
            reliquias: "Enterrados na Via Nomentana, suas relíquias estão na Basílica de Santo Estêvão Rotondo, Roma. Fragmentos são venerados por fraternidade e cura física.",
            devocao: "Celebrados em 9 de junho, são padroeiros dos irmãos e mártires. Sua festa inclui orações por união e missas em Roma. Em arte, são mostrados juntos, e os fiéis os invocam por lealdade."
        },
        isDisplayed: true,
        data_devocao: "9 de junho"
    },
    {
        name: "São Barnabé",
        description: "Companheiro de Paulo, apóstolo dos gentios.",
        additionalInfo: {
            biografia: "São Barnabé nasceu em Chipre por volta de 10 d.C. Levita, vendeu seus bens para a Igreja (Atos 4:36-37) e pregou com Paulo. Martirizado em 11 de junho de 61 d.C., aos cerca de 51 anos, apedrejado em Salamina.",
            milagres: "Curou um coxo em Listra, previu sua morte em visões, fez uma cruz brilhar para converter pagãos, protegeu Paulo em missão e apareceu após a morte para guiar missionários.",
            reliquias: "Enterrado em Salamina, suas relíquias estão no Mosteiro de São Barnabé, Chipre. Fragmentos são venerados por missão e cura espiritual.",
            devocao: "Celebrado em 11 de junho, Barnabé é padroeiro dos missionários e de Chipre. Sua festa inclui orações por evangelização e missas apostólicas. Em arte, é mostrado com Paulo, e os fiéis o invocam por generosidade."
        },
        isDisplayed: true,
        data_devocao: "11 de junho"
    },
    {
        name: "Santos Vito e Modesto",
        description: "Mártires sicilianos, protetores contra epilepsia.",
        additionalInfo: {
            biografia: "São Vito nasceu na Sicília por volta de 290 d.C., filho de pagãos, criado por Modesto e Crescência. Martirizado com Modesto em 15 de junho de 303 d.C., Vito aos 13 anos e Modesto aos cerca de 40, na perseguição de Diocleciano, mortos em um caldeirão.",
            milagres: "Curou um epiléptico ao batizá-lo, resistiu ao caldeirão com louvor, previu seu martírio em visões, converteu seu pai em lenda e apareceu após a morte para deter convulsões.",
            reliquias: "Enterrados na Sicília, suas relíquias estão na Catedral de São Vito, Praga. Fragmentos são venerados por cura de epilepsia e proteção juvenil.",
            devocao: "Celebrados em 15 de junho, Vito e Modesto são padroeiros dos epilépticos. Sua festa inclui bênçãos de saúde e orações por proteção. Em arte, Vito é mostrado com um galo, e os fiéis os invocam por cura."
        },
        isDisplayed: true,
        data_devocao: "15 de junho"
    },
    {
        name: "São Quirce e Santa Julita, sua mãe",
        description: "Mártires de Tarso, exemplos de fé familiar.",
        additionalInfo: {
            biografia: "São Quirce nasceu em Icônio por volta de 301 d.C., filho de Santa Julita, uma viúva cristã nobre. Ambos foram martirizados em Tarso em 15 de junho de 304 d.C., na perseguição de Diocleciano; Quirce, aos 3 anos, foi morto diante da mãe, que foi decapitada logo após.",
            milagres: "Quirce falou milagrosamente ao juiz, Julita resistiu ao fogo com louvor, previram seu martírio em visões, curaram um enfermo na prisão e apareceram após a morte para confortar mães.",
            reliquias: "Enterrados em Tarso, suas relíquias estão na Igreja de São Quirce, Lisboa. Fragmentos são venerados por proteção infantil e cura maternal.",
            devocao: "Celebrados em 15 de junho, Quirce e Julita são padroeiros das famílias e crianças. Sua festa inclui bênçãos de mães e orações por união. Em arte, são mostrados juntos, e os fiéis os invocam por fortaleza familiar."
        },
        isDisplayed: true,
        data_devocao: "15 de junho"
    },
    {
        name: "Santa Marina",
        description: "Virgem e eremita, viveu disfarçada como monge.",
        additionalInfo: {
            biografia: "Santa Marina nasceu em Bitínia por volta de 400 d.C. Após a morte da mãe, seguiu o pai a um mosteiro, vivendo como 'Marino'. Morreu em 18 de junho de 450 d.C., aos cerca de 50 anos, de causas naturais, sendo sua identidade revelada postumamente.",
            milagres: "Curou um possuído com oração, previu sua morte em visões, resistiu a falsas acusações, fez uma cruz brilhar em sua cela e apareceu após a morte para revelar sua santidade.",
            reliquias: "Enterrada no mosteiro, suas relíquias estão em Veneza, na Igreja de Santa Marina. Fragmentos são venerados por humildade e cura espiritual.",
            devocao: "Celebrada em 18 de junho, Marina é padroeira das penitentes e disfarçados. Sua festa inclui orações por segredo e missas em silêncio. Em arte, é mostrada com hábito, e os fiéis a invocam por discrição."
        },
        isDisplayed: true,
        data_devocao: "18 de junho"
    },
    {
        name: "Santos Gervásio e Protásio",
        description: "Mártires gêmeos de Milão, filhos de mártires.",
        additionalInfo: {
            biografia: "Santos Gervásio e Protásio nasceram em Milão por volta de 160 d.C., filhos de São Vital e Santa Valéria. Martirizados em 19 de junho de 190 d.C., aos cerca de 30 anos, sob Nero ou Marco Aurélio, foram decapitados por sua fé.",
            milagres: "Curaram um cego ao morrerem, previram seu martírio em visões, fizeram uma cruz brilhar na prisão, resistiram a torturas iniciais e apareceram a Santo Ambrósio para revelar suas relíquias.",
            reliquias: "Enterrados em Milão, suas relíquias estão na Basílica de Santo Ambrósio. Fragmentos são venerados por fraternidade e cura física.",
            devocao: "Celebrados em 19 de junho, são padroeiros dos irmãos e de Milão. Sua festa inclui orações por união e missas em basílicas. Em arte, são mostrados como gêmeos, e os fiéis os invocam por harmonia."
        },
        isDisplayed: true,
        data_devocao: "19 de junho"
    },
    {
        name: "A Natividade de São João Batista",
        description: "Festa do nascimento do precursor de Jesus.",
        additionalInfo: {
            biografia: "A Natividade celebra o nascimento de João Batista em Ain Karim, por volta de 6 a.C. (Lucas 1:57-66), filho de Zacarias e Isabel. Pregou no deserto e foi decapitado por Herodes em 31 d.C., aos cerca de 37 anos.",
            milagres: "Fez Zacarias falar ao nascer, anjos anunciaram seu nascimento, previu a vinda de Cristo, batizou com poder divino e apareceu após a morte para guiar penitentes.",
            reliquias: "Enterrado em Sebaste, suas relíquias estão na Mesquita dos Omíadas, Damasco, e em Roma. Fragmentos são venerados por preparação e cura espiritual.",
            devocao: "Celebrada em 24 de junho, marca o Precursor. Inclui fogueiras e orações por conversão. Os fiéis pedem penitência, com hinos como 'Ó Voz do Deserto'."
        },
        isDisplayed: true,
        data_devocao: "24 de junho"
    },
    {
        name: "Santos João e Paulo",
        description: "Mártires romanos, irmãos e servos imperiais.",
        additionalInfo: {
            biografia: "Santos João e Paulo nasceram em Roma por volta de 330 d.C. Servos de Constância, filha de Constantino, foram martirizados em 26 de junho de 362 d.C., aos cerca de 32 anos, sob Juliano, o Apóstata, decapitados em casa por recusarem o paganismo.",
            milagres: "Curaram um possuído antes da morte, previram seu martírio em visões, fizeram uma cruz brilhar em sua casa, resistiram a subornos e apareceram após a morte para proteger Roma.",
            reliquias: "Enterrados em sua casa, suas relíquias estão na Basílica de São João e Paulo, Roma. Fragmentos são venerados por lealdade e cura física.",
            devocao: "Celebrados em 26 de junho, são padroeiros dos irmãos e servos. Sua festa inclui missas em basílicas e orações por fidelidade. Em arte, são mostrados com espadas, e os fiéis os invocam por união."
        },
        isDisplayed: true,
        data_devocao: "26 de junho"
    },
    {
        name: "São Leão",
        description: "Papa e doutor da Igreja, defensor da ortodoxia.",
        additionalInfo: {
            biografia: "São Leão I, o Grande, nasceu na Toscana por volta de 400 d.C. Papa de 440 a 461 d.C., enfrentou Átila e o Concílio de Calcedônia. Morreu em 28 de junho de 461 d.C., aos cerca de 61 anos, de causas naturais.",
            milagres: "Convenceu Átila a poupar Roma, curou um enfermo em oração, previu o sucesso de Calcedônia, fez uma cruz brilhar em Roma e apareceu após a morte para guiar papas.",
            reliquias: "Enterrado na Basílica de São Pedro, suas relíquias estão no Vaticano. Fragmentos são venerados por autoridade e cura espiritual.",
            devocao: "Celebrado em 28 de junho, Leão é padroeiro dos papas e diplomatas. Sua festa inclui leituras teológicas e orações por liderança. Em arte, é mostrado com Átila, e os fiéis o invocam por sabedoria."
        },
        isDisplayed: true,
        data_devocao: "28 de junho"
    },
    {
        name: "São Pedro, apóstolo",
        description: "Apóstolo e primeiro papa, fundamento da Igreja.",
        additionalInfo: {
            biografia: "São Pedro nasceu em Betsaida por volta de 1 a.C. Pescador chamado por Jesus (Mateus 4:18), liderou os apóstolos e foi martirizado em 29 de junho de 67 d.C., aos cerca de 68 anos, crucificado de cabeça para baixo em Roma.",
            milagres: "Curou um coxo (Atos 3:6), ressuscitou Tabita, libertou-se da prisão por um anjo, previu sua morte e fundou a Igreja com milagres.",
            reliquias: "Enterrado sob a Basílica de São Pedro, suas relíquias estão no Vaticano. Fragmentos são venerados por liderança e cura espiritual.",
            devocao: "Celebrado em 29 de junho, Pedro é padroeiro dos pescadores e papas. Sua festa inclui bênçãos de redes e orações por unidade. Em arte, é mostrado com chaves, e os fiéis o invocam por firmeza."
        },
        isDisplayed: true,
        data_devocao: "29 de junho"
    },
    {
        name: "São Paulo, apóstolo",
        description: "Apóstolo dos gentios, convertido na estrada de Damasco.",
        additionalInfo: {
            biografia: "São Paulo nasceu em Tarso por volta de 5 d.C. Fariseu convertido (Atos 9), pregou aos gentios e foi martirizado em 30 de junho de 67 d.C., aos cerca de 62 anos, decapitado em Roma sob Nero.",
            milagres: "Curou um coxo em Listra, sobreviveu a uma picada de cobra, previu naufrágios, ressuscitou Êutico e apareceu após a morte para guiar missionários.",
            reliquias: "Enterrado na Via Ostiense, suas relíquias estão na Basílica de São Paulo Fora dos Muros, Roma. Fragmentos são venerados por missão e cura física.",
            devocao: "Celebrado em 30 de junho, Paulo é padroeiro dos missionários. Sua festa inclui leituras das Epístolas e orações por evangelização. Em arte, é mostrado com uma espada, e os fiéis o invocam por zelo."
        },
        isDisplayed: true,
        data_devocao: "30 de junho"
    },
    {
        name: "Os sete filhos de Santa Felicidade",
        description: "Mártires romanos, irmãos mortos por sua fé.",
        additionalInfo: {
            biografia: "Os sete filhos de Santa Felicidade nasceram em Roma por volta de 130 d.C. Com a mãe, foram martirizados em 10 de julho de 165 d.C., sob Marco Aurélio, com idades entre 12 e 25 anos, executados de várias formas (decapitação, apedrejamento, etc.).",
            milagres: "Curaram um cego na prisão, resistiram às torturas com louvor, previram seu martírio em visões, converteram espectadores e apareceram após a morte para confortar Felicidade.",
            reliquias: "Enterrados nas Catacumbas de Priscila, suas relíquias estão na Igreja de Santa Felicidade, Roma. Fragmentos são venerados por união familiar e cura espiritual.",
            devocao: "Celebrados em 10 de julho, são padroeiros das famílias numerosas. Sua festa inclui orações por coragem e missas em catacumbas. Em arte, são mostrados com Felicidade, e os fiéis os invocam por fidelidade."
        },
        isDisplayed: true,
        data_devocao: "10 de julho"
    },
    {
        name: "Santo Aleixo",
        description: "Eremita romano, exemplo de desapego.",
        additionalInfo: {
            biografia: "Santo Aleixo nasceu em Roma por volta de 390 d.C., de família nobre. Abandonou riquezas para viver como mendigo e eremita. Morreu em 17 de julho de 417 d.C., aos cerca de 27 anos, de causas naturais, sendo reconhecido após a morte.",
            milagres: "Curou um enfermo com esmolas, previu sua morte em visões, fez sinos tocarem ao morrer, resistiu a tentações demoníacas e apareceu após a morte para revelar sua identidade.",
            reliquias: "Enterrado na Igreja de São Bonifácio e Aleixo, Roma, suas relíquias estão no mesmo local. Fragmentos são venerados por humildade e cura espiritual.",
            devocao: "Celebrado em 17 de julho, Aleixo é padroeiro dos mendigos e peregrinos. Sua festa inclui esmolas e orações por desapego. Em arte, é mostrado como mendigo, e os fiéis o invocam por pobreza espiritual."
        },
        isDisplayed: true,
        data_devocao: "17 de julho"
    },
    {
        name: "Santa Margarida",
        description: "Virgem e mártir, protetora das parturientes.",
        additionalInfo: {
            biografia: "Santa Margarida nasceu em Antioquia da Pisídia por volta de 275 d.C. Convertida, rejeitou um pretendente pagão e foi martirizada em 20 de julho de 304 d.C., aos cerca de 29 anos, na perseguição de Diocleciano, decapitada após torturas.",
            milagres: "Expulsou um demônio em forma de dragão, curou uma mulher estéril, resistiu ao fogo, previu seu martírio e apareceu após a morte para ajudar mulheres em parto.",
            reliquias: "Enterrada em Antioquia, suas relíquias estão em Veneza, na Igreja de Santa Margarida. Fragmentos são venerados por proteção maternal e cura física.",
            devocao: "Celebrada em 20 de julho, Margarida é padroeira das grávidas. Sua festa inclui bênçãos de mães e orações por coragem. Em arte, é mostrada com um dragão, e os fiéis a invocam por parto seguro."
        },
        isDisplayed: true,
        data_devocao: "20 de julho"
    },
    {
        name: "Santa Praxedes",
        description: "Virgem romana, ajudou mártires cristãos.",
        additionalInfo: {
            biografia: "Santa Praxedes nasceu em Roma por volta de 100 d.C., filha de São Pudente. Dedicou-se a mártires na perseguição de Marco Aurélio, morreu em 21 de julho de 165 d.C., aos cerca de 65 anos, de causas naturais.",
            milagres: "Curou um ferido com ervas, previu o fim de uma perseguição, fez uma cruz brilhar em sua casa, escondeu mártires milagrosamente e apareceu após a morte para confortar cristãos.",
            reliquias: "Enterrada na Igreja de Santa Praxedes, Roma, suas relíquias estão no mesmo local. Fragmentos são venerados por caridade e cura espiritual.",
            devocao: "Celebrada em 21 de julho, Praxedes é padroeira das viúvas e benfeitoras. Sua festa inclui orações por generosidade e missas em Roma. Em arte, é mostrada com mártires, e os fiéis a invocam por compaixão."
        },
        isDisplayed: true,
        data_devocao: "21 de julho"
    },
    {
        name: "Santa Maria Madalena",
        description: "Discípula de Jesus, primeira testemunha da Ressurreição.",
        additionalInfo: {
            biografia: "Santa Maria Madalena nasceu em Magdala por volta de 10 a.C. Curada por Jesus (Lucas 8:2), seguiu-o até a cruz e viu-o ressuscitado (João 20:11-18). Morreu em Éfeso ou França por volta de 70 d.C., aos cerca de 80 anos, de causas naturais.",
            milagres: "Expulsou sete demônios com Jesus, previu a Ressurreição em visões, levou o Evangelho à França em lenda, curou um cego em missão e apareceu após a morte para guiar penitentes.",
            reliquias: "Enterrada em Vézelay ou Saint-Maximin, suas relíquias estão na Basílica de Maria Madalena, França. Fragmentos são venerados por conversão e cura espiritual.",
            devocao: "Celebrada em 22 de julho, Madalena é padroeira das penitentes. Sua festa inclui unção com óleos e orações por arrependimento. Em arte, é mostrada com um frasco, e os fiéis a invocam por redenção."
        },
        isDisplayed: true,
        data_devocao: "22 de julho"
    },
    {
        name: "Santo Apolinário",
        description: "Bispo e mártir, primeiro evangelizador de Ravena.",
        additionalInfo: {
            biografia: "Santo Apolinário nasceu em Antioquia por volta de 50 d.C. Discípulo de Pedro, tornou-se bispo de Ravena e foi martirizado em 23 de julho de 75 d.C., aos cerca de 25 anos, apedrejado por pagãos após pregar.",
            milagres: "Curou um cego ao batizá-lo, previu seu martírio em visões, fez uma cruz brilhar em Ravena, converteu um sacerdote pagão e apareceu após a morte para proteger a diocese.",
            reliquias: "Enterrado em Ravena, suas relíquias estão na Basílica de Santo Apolinário in Classe. Fragmentos são venerados por missão e cura física.",
            devocao: "Celebrado em 23 de julho, Apolinário é padroeiro de Ravena e missionários. Sua festa inclui missas em basílicas e orações por evangelização. Em arte, é mostrado com uma mitra, e os fiéis o invocam por zelo."
        },
        isDisplayed: true,
        data_devocao: "23 de julho"
    },
    {
        name: "Santa Cristina",
        description: "Virgem e mártir, resistiu ao paganismo.",
        additionalInfo: {
            biografia: "Santa Cristina nasceu em Tiro por volta de 280 d.C., filha de um governador pagão. Convertida, foi martirizada em 24 de julho de 304 d.C., aos cerca de 24 anos, na perseguição de Diocleciano, após torturas como flechas e afogamento.",
            milagres: "Sobreviveu a uma roda de fogo, curou um ferido na prisão, resistiu a serpentes, previu seu martírio e apareceu após a morte para proteger Tiro.",
            reliquias: "Enterrada em Bolsena, suas relíquias estão na Catedral de Santa Cristina. Fragmentos são venerados por coragem e cura física.",
            devocao: "Celebrada em 24 de julho, Cristina é padroeira das virgens e mártires. Sua festa inclui orações por resistência e missas em Bolsena. Em arte, é mostrada com flechas, e os fiéis a invocam por fortaleza."
        },
        isDisplayed: true,
        data_devocao: "24 de julho"
    },
    {
        name: "São Tiago, o Maior",
        description: "Apóstolo de Jesus, primeiro mártir entre os Doze.",
        additionalInfo: {
            biografia: "São Tiago nasceu na Galileia por volta de 5 a.C. Pescador e filho de Zebedeu, foi chamado por Jesus (Mateus 4:21). Martirizado em 25 de julho de 44 d.C., aos cerca de 49 anos, decapitado por Herodes Agripa em Jerusalém (Atos 12:2).",
            milagres: "Curou um paralítico em missão, previu seu martírio em visões, fez uma cruz brilhar para converter pagãos, apareceu em Compostela e guiou peregrinos após a morte.",
            reliquias: "Enterrado em Compostela, suas relíquias estão na Catedral de Santiago. Fragmentos são venerados por missão e cura espiritual.",
            devocao: "Celebrado em 25 de julho, Tiago é padroeiro da Espanha e peregrinos. Sua festa inclui o Caminho de Santiago e orações por viagem. Em arte, é mostrado com um bordão, e os fiéis o invocam por proteção."
        },
        isDisplayed: true,
        data_devocao: "25 de julho"
    },
    {
        name: "São Cristóvão",
        description: "Mártir e gigante, protetor dos viajantes.",
        additionalInfo: {
            biografia: "São Cristóvão nasceu na Síria por volta de 250 d.C. Convertido, ajudava viajantes a cruzar rios. Martirizado em 28 de julho de 304 d.C., aos cerca de 54 anos, na perseguição de Diocleciano, decapitado após resistir ao fogo.",
            milagres: "Carregou o Menino Jesus através de um rio, resistiu a flechas no martírio, curou um cego ao batizá-lo, previu sua morte e apareceu após a morte para proteger motoristas.",
            reliquias: "Enterrado em Lícia, suas relíquias estão em Veneza e outras igrejas. Fragmentos são venerados por segurança e cura física.",
            devocao: "Celebrado em 28 de julho, Cristóvão é padroeiro dos viajantes. Sua festa inclui bênçãos de veículos e orações por proteção. Em arte, é mostrado com o Menino, e os fiéis o invocam por viagens seguras."
        },
        isDisplayed: true,
        data_devocao: "28 de julho"
    },
    {
        name: "Os sete dormentes",
        description: "Már cryopreservados de Éfeso, testemunhas da Ressurreição.",
        additionalInfo: {
            biografia: "Os Sete Dormentes nasceram em Éfeso por volta de 230 d.C. Jovens cristãos, fugiram da perseguição de Décio e dormiram em uma caverna por 200 anos, acordando em 447 d.C., morrendo logo após, aos cerca de 27 anos de idade biológica.",
            milagres: "Dormiram por séculos, acordaram para provar a Ressurreição, curaram um enfermo ao despertar, previram seu milagre e apareceram após a morte para guiar fiéis.",
            reliquias: "Enterrados na caverna de Éfeso, suas relíquias estão perdidas, mas fragmentos simbólicos estão em igrejas. São venerados por esperança e cura espiritual.",
            devocao: "Celebrados em 28 de julho, são padroeiros da esperança e juventude. Sua festa inclui orações por fé e missas em cavernas. Em arte, são mostrados dormindo, e os fiéis os invocam por paciência."
        },
        isDisplayed: true,
        data_devocao: "28 de julho"
    },
    {
        name: "Santos Nazário e Celso",
        description: "Mártires de Milão, pregadores da fé.",
        additionalInfo: {
            biografia: "Santos Nazário e Celso nasceram por volta de 20 d.C., Nazário em Roma e Celso como seu discípulo. Martirizados em 28 de julho de 68 d.C., Nazário aos cerca de 48 anos e Celso aos 12, decapitados em Milão sob Nero.",
            milagres: "Curaram um possuído em missão, previram seu martírio em visões, fizeram uma cruz brilhar em Milão, converteram soldados e apareceram a Santo Ambrósio para revelar suas relíquias.",
            reliquias: "Enterrados em Milão, suas relíquias estão na Basílica de São Nazário. Fragmentos são venerados por missão e cura espiritual.",
            devocao: "Celebrados em 28 de julho, são padroeiros dos pregadores e jovens. Sua festa inclui orações por evangelização e missas em Milão. Em arte, são mostrados juntos, e os fiéis os invocam por zelo."
        },
        isDisplayed: true,
        data_devocao: "28 de julho"
    },
    {
        name: "São Félix, papa",
        description: "Papa e mártir, defensor da Igreja primitiva.",
        additionalInfo: {
            biografia: "São Félix II (ou III) nasceu em Roma por volta de 480 d.C. Papa de 526 a 530 d.C., enfrentou divisões e morreu em 29 de julho de 530 d.C., aos cerca de 50 anos, possivelmente martirizado por Teodorico ou de causas naturais.",
            milagres: "Curou um enfermo ao rezar, previu o fim de um cisma, fez uma cruz brilhar em Roma, resistiu a pressões góticas e apareceu após a morte para guiar papas.",
            reliquias: "Enterrado na Basílica de São Pedro, suas relíquias foram perdidas, mas fragmentos estão em igrejas romanas. São venerados por unidade e cura espiritual.",
            devocao: "Celebrado em 29 de julho, Félix é padroeiro dos papas em crise. Sua festa inclui missas em Roma e orações por liderança. Em arte, é mostrado com uma tiara, e os fiéis o invocam por estabilidade."
        },
        isDisplayed: true,
        data_devocao: "29 de julho"
    },
    {
        name: "Santos Simplício e Faustino",
        description: "Mártires irmãos de Roma, exemplos de fraternidade.",
        additionalInfo: {
            biografia: "Santos Simplício e Faustino nasceram em Roma por volta de 270 d.C. Convertidos, foram martirizados em 29 de julho de 304 d.C., aos cerca de 34 anos, na perseguição de Diocleciano, afogados no Tibre com sua irmã Beatriz.",
            milagres: "Curaram um cego na prisão, resistiram às torturas com louvor, previram seu martírio em visões, converteram um carrasco e apareceram após a morte para proteger Roma.",
            reliquias: "Enterrados na Via Portuense, suas relíquias estão na Igreja de Santa Bibiana, Roma. Fragmentos são venerados por união e cura física.",
            devocao: "Celebrados em 29 de julho, são padroeiros dos irmãos e mártires. Sua festa inclui orações por família e missas em Roma. Em arte, são mostrados com Beatriz, e os fiéis os invocam por harmonia."
        },
        isDisplayed: true,
        data_devocao: "29 de julho"
    },
    {
        name: "Santa Marta",
        description: "Discípula de Jesus, irmã de Lázaro e Maria.",
        additionalInfo: {
            biografia: "Santa Marta nasceu em Betânia por volta de 10 a.C. Acolheu Jesus em sua casa (Lucas 10:38-42) e testemunhou a ressurreição de Lázaro. Morreu em Tarascon, França, por volta de 80 d.C., aos cerca de 90 anos, de causas naturais, segundo a lenda.",
            milagres: "Domou um dragão em lenda, curou um enfermo com oração, previu a ressurreição de Lázaro, serviu Jesus milagrosamente e apareceu após a morte para guiar hospitaleiros.",
            reliquias: "Enterrada em Tarascon, suas relíquias estão na Igreja de Santa Marta. Fragmentos são venerados por serviço e cura espiritual.",
            devocao: "Celebrada em 29 de julho, Marta é padroeira das donas de casa. Sua festa inclui bênçãos de lares e orações por hospitalidade. Em arte, é mostrada com um dragão, e os fiéis a invocam por dedicação."
        },
        isDisplayed: true,
        data_devocao: "29 de julho"
    },
    {
        name: "Santos Abdão e Senen",
        description: "Mártires persas, exemplos de fé em Roma.",
        additionalInfo: {
            biografia: "Santos Abdão e Senen nasceram na Pérsia por volta de 250 d.C. Levados a Roma como escravos, foram martirizados em 30 de julho de 304 d.C., aos cerca de 54 anos, na perseguição de Diocleciano, decapitados por sua fé.",
            milagres: "Curaram um possuído na prisão, previram seu martírio em visões, fizeram uma cruz brilhar em Roma, converteram seus captores e apareceram após a morte para proteger escravos.",
            reliquias: "Enterrados nas Catacumbas de Ponciano, suas relíquias estão na Igreja de São Marcos, Roma. Fragmentos são venerados por liberdade e cura espiritual.",
            devocao: "Celebrados em 30 de julho, são padroeiros dos escravos e agricultores. Sua festa inclui orações por libertação e missas em catacumbas. Em arte, são mostrados com grilhões, e os fiéis os invocam por resistência."
        },
        isDisplayed: true,
        data_devocao: "30 de julho"
    },
    {
        name: "São Germano",
        description: "Bispo de Auxerre, evangelizador da Gália.",
        additionalInfo: {
            biografia: "São Germano nasceu em Auxerre, Gália, por volta de 378 d.C. Soldado e depois bispo, pregou na Britânia e morreu em 31 de julho de 448 d.C., aos cerca de 70 anos, de causas naturais, em Ravena.",
            milagres: "Curou um cego ao batizá-lo, previu a invasão dos hunos, fez uma cruz brilhar em Auxerre, derrotou pagãos em visões e apareceu após a morte para proteger sua diocese.",
            reliquias: "Enterrado em Auxerre, suas relíquias estão na Catedral de São Germano. Fragmentos são venerados por missão e cura física.",
            devocao: "Celebrado em 31 de julho, Germano é padroeiro de Auxerre e missionários. Sua festa inclui missas de evangelização e orações por zelo. Em arte, é mostrado com uma mitra, e os fiéis o invocam por coragem."
        },
        isDisplayed: true,
        data_devocao: "31 de julho"
    },
    {
        name: "Santo Eusébio",
        description: "Bispo de Vercelli, defensor contra o arianismo.",
        additionalInfo: {
            biografia: "Santo Eusébio nasceu na Sardenha por volta de 283 d.C. Bispo de Vercelli em 345 d.C., foi exilado por Constâncio II e morreu em 1 de agosto de 371 d.C., aos cerca de 88 anos, de causas naturais ou martírio por ariano.",
            milagres: "Curou um possuído em exílio, previu o fim do arianismo, fez uma cruz brilhar em Vercelli, resistiu a torturas iniciais e apareceu após a morte para guiar bispos.",
            reliquias: "Enterrado em Vercelli, suas relíquias estão na Catedral de Santo Eusébio. Fragmentos são venerados por ortodoxia e cura espiritual.",
            devocao: "Celebrado em 1 de agosto, Eusébio é padroeiro de Vercelli e teólogos. Sua festa inclui leituras trinitárias e orações por verdade. Em arte, é mostrado com um livro, e os fiéis o invocam por sabedoria."
        },
        isDisplayed: true,
        data_devocao: "1 de agosto"
    },
    {
        name: "Os santos Macabeus",
        description: "Mártires judeus, exemplos de resistência à idolatria.",
        additionalInfo: {
            biografia: "Os Santos Macabeus, sete irmãos e sua mãe, nasceram em Israel por volta de 180 a.C. Martirizados em 1 de agosto de 166 a.C., com idades variadas, sob Antíoco IV, mortos por recusarem comer carne impura (2 Macabeus 7).",
            milagres: "Resistiram a torturas com louvor, previram a vitória dos judeus, curaram um ferido em visão, inspiraram mártires cristãos e apareceram após a morte para fortalecer fiéis.",
            reliquias: "Enterrados em Antioquia, suas relíquias estão na Igreja de São Pedro, Roma. Fragmentos são venerados por coragem e cura espiritual.",
            devocao: "Celebrados em 1 de agosto, são padroeiros dos resistentes à opressão. Sua festa inclui orações por fidelidade e missas em Roma. Em arte, são mostrados com a mãe, e os fiéis os invocam por perseverança."
        },
        isDisplayed: true,
        data_devocao: "1 de agosto"
    },
    {
        name: "São Pedro Acorrentado",
        description: "Festa da libertação de Pedro da prisão.",
        additionalInfo: {
            biografia: "São Pedro, nascido em Betsaida por volta de 1 a.C., foi libertado de correntes por um anjo em Jerusalém por volta de 42 d.C. (Atos 12:6-11). Martirizado em 67 d.C., aos cerca de 68 anos, crucificado em Roma.",
            milagres: "Foi libertado por um anjo, curou um coxo em missão, previu sua morte, fez correntes brilharem em Roma e apareceu após a morte para guiar a Igreja.",
            reliquias: "Correntes estão na Igreja de São Pedro Acorrentado, Roma. Relíquias de Pedro estão no Vaticano, veneradas por libertação e cura espiritual.",
            devocao: "Celebrada em 1 de agosto, marca a proteção divina. Inclui bênçãos de correntes e orações por liberdade. Os fiéis pedem libertação, com hinos como 'Ó Pedro, Pastor'."
        },
        isDisplayed: true,
        data_devocao: "1 de agosto"
    },
    {
        name: "Santo Estêvão, papa",
        description: "Papa e mártir, defensor da Igreja em crise.",
        additionalInfo: {
            biografia: "Santo Estêvão I nasceu em Roma por volta de 200 d.C. Papa de 254 a 257 d.C., enfrentou disputas sobre batismo e morreu em 2 de agosto de 257 d.C., aos cerca de 57 anos, martirizado por decapitação sob Valeriano.",
            milagres: "Curou um enfermo ao batizá-lo, previu o fim de uma disputa, fez uma cruz brilhar em Roma, resistiu a torturas iniciais e apareceu após a morte para guiar papas.",
            reliquias: "Enterrado nas Catacumbas de Calisto, suas relíquias estão na Igreja de Santo Estêvão, Roma. Fragmentos são venerados por unidade e cura espiritual.",
            devocao: "Celebrado em 2 de agosto, Estêvão é padroeiro dos papas em crise. Sua festa inclui missas em catacumbas e orações por liderança. Em arte, é mostrado com uma palma, e os fiéis o invocam por firmeza."
        },
        isDisplayed: true,
        data_devocao: "2 de agosto"
    },
    {
        name: "A descoberta do corpo de Santo Estêvão, mártir",
        description: "Festa da descoberta das relíquias do primeiro mártir.",
        additionalInfo: {
            biografia: "Santo Estêvão, nascido em Jerusalém por volta de 5 d.C., foi o primeiro mártir cristão, apedrejado em 36 d.C., aos cerca de 31 anos (Atos 7). Suas relíquias foram descobertas em 415 d.C. por Luciano em Caphargamala.",
            milagres: "Curou um enfermo ao morrer, previu sua morte em visões, fez pedras brilharem no martírio, revelou suas relíquias em sonho e apareceu após a descoberta para curar fiéis.",
            reliquias: "Descobertas em Caphargamala, suas relíquias estão na Basílica de São Lourenço, Roma. Fragmentos são venerados por coragem e cura física.",
            devocao: "Celebrada em 3 de agosto, marca o testemunho de Estêvão. Inclui bênçãos de pedras e orações por resistência. Os fiéis pedem fortaleza, com hinos como 'Primeiro Mártir'."
        },
        isDisplayed: true,
        data_devocao: "3 de agosto"
    },
    {
        name: "São Domingos",
        description: "Fundador dos dominicanos, pregador contra heresias.",
        additionalInfo: {
            biografia: "São Domingos de Gusmão nasceu em Caleruega, Espanha, em 1170. Fundou a Ordem dos Pregadores em 1215 e morreu em 4 de agosto de 1221, aos 51 anos, de exaustão em Bolonha, Itália.",
            milagres: "Curou um possuído ao pregar, previu a Ordem em visões, fez um livro sobreviver ao fogo, converteu albigenses e apareceu após a morte para guiar dominicanos.",
            reliquias: "Enterrado em Bolonha, suas relíquias estão na Basílica de São Domingos. Fragmentos são venerados por verdade e cura espiritual.",
            devocao: "Celebrado em 4 de agosto, Domingos é padroeiro dos pregadores. Sua festa inclui o Rosário e orações por sabedoria. Em arte, é mostrado com um livro, e os fiéis o invocam por eloquência."
        },
        isDisplayed: true,
        data_devocao: "4 de agosto"
    },
    {
        name: "São Sisto",
        description: "Papa e mártir, liderou a Igreja em perseguição.",
        additionalInfo: {
            biografia: "São Sisto II nasceu em Atenas por volta de 200 d.C. Papa de 257 a 258 d.C., foi martirizado em 6 de agosto de 258 d.C., aos cerca de 58 anos, decapitado com diáconos sob Valeriano nas Catacumbas de Calisto.",
            milagres: "Curou um cego ao batizá-lo, previu seu martírio em visões, fez uma cruz brilhar nas catacumbas, resistiu a torturas iniciais e apareceu após a morte para confortar fiéis.",
            reliquias: "Enterrado nas Catacumbas de Calisto, suas relíquias estão na Igreja de São Sisto, Roma. Fragmentos são venerados por liderança e cura espiritual.",
            devocao: "Celebrado em 6 de agosto, Sisto é padroeiro dos papas mártires. Sua festa inclui missas em catacumbas e orações por coragem. Em arte, é mostrado com diáconos, e os fiéis o invocam por fortaleza."
        },
        isDisplayed: true,
        data_devocao: "6 de agosto"
    },
    {
        name: "São Donato",
        description: "Bispo e mártir, protetor contra tempestades.",
        additionalInfo: {
            biografia: "São Donato nasceu em Arezzo, Itália, por volta de 300 d.C. Bispo de Arezzo, foi martirizado em 7 de agosto de 362 d.C., aos cerca de 62 anos, decapitado sob Juliano, o Apóstata, por sua fé.",
            milagres: "Reconstruiu um cálice quebrado, curou um possuído, previu seu martírio, protegeu Arezzo de uma tempestade e apareceu após a morte para deter raios.",
            reliquias: "Enterrado em Arezzo, suas relíquias estão na Catedral de São Donato. Fragmentos são venerados por proteção e cura física.",
            devocao: "Celebrado em 7 de agosto, Donato é padroeiro de Arezzo e contra tempestades. Sua festa inclui bênçãos de água e orações por segurança. Em arte, é mostrado com um cálice, e os fiéis o invocam por paz."
        },
        isDisplayed: true,
        data_devocao: "7 de agosto"
    },
    {
        name: "São Ciríaco e seus companheiros",
        description: "Diácono e mártires, mortos por sua fé em Roma.",
        additionalInfo: {
            biografia: "São Ciríaco nasceu em Roma por volta de 270 d.C. Diácono, foi martirizado com companheiros em 8 de agosto de 304 d.C., aos cerca de 34 anos, na perseguição de Diocleciano, decapitado na Via Salária.",
            milagres: "Curou um possuído na prisão, previu seu martírio em visões, fez uma cruz brilhar na cela, converteu um carrasco e apareceu após a morte para proteger Roma.",
            reliquias: "Enterrados na Via Salária, suas relíquias estão na Igreja de Santa Maria in Via Lata, Roma. Fragmentos são venerados por caridade e cura espiritual.",
            devocao: "Celebrados em 8 de agosto, Ciríaco e companheiros são padroeiros dos diáconos. Sua festa inclui orações por serviço e missas em Roma. Em arte, são mostrados com palmas, e os fiéis os invocam por dedicação."
        },
        isDisplayed: true,
        data_devocao: "8 de agosto"
    },
    {
        name: "São Lourenço",
        description: "Diácono e mártir, protetor dos pobres.",
        additionalInfo: {
            biografia: "São Lourenço nasceu em Huesca, Espanha, por volta de 225 d.C. Diácono em Roma, foi martirizado em 10 de agosto de 258 d.C., aos cerca de 33 anos, queimado numa grelha sob Valeriano por distribuir bens aos pobres.",
            milagres: "Curou um cego na prisão, resistiu à grelha com serenidade, previu seu martírio, fez estrelas caírem em sua festa e apareceu após a morte para proteger Roma.",
            reliquias: "Enterrado na Via Tiburtina, suas relíquias estão na Basílica de São Lourenço Fora dos Muros, Roma. Fragmentos são venerados por caridade e cura física.",
            devocao: "Celebrado em 10 de agosto, Lourenço é padroeiro dos diáconos e cozinheiros. Sua festa inclui bênçãos de fogo e orações por generosidade. Em arte, é mostrado com uma grelha, e os fiéis o invocam por coragem."
        },
        isDisplayed: true,
        data_devocao: "10 de agosto"
    },
    {
        name: "Santo Hipólito e seus companheiros",
        description: "Mártir romano, convertido por Lourenço.",
        additionalInfo: {
            biografia: "Santo Hipólito nasceu em Roma por volta de 230 d.C. Soldado que guardou Lourenço, converteu-se e foi martirizado em 13 de agosto de 258 d.C., aos cerca de 28 anos, arrastado por cavalos sob Valeriano, com outros cristãos.",
            milagres: "Curou um ferido ao batizá-lo, previu seu martírio após Lourenço, fez uma cruz brilhar na prisão, converteu seus guardas e apareceu após a morte para confortar fiéis.",
            reliquias: "Enterrado na Via Tiburtina, suas relíquias estão na Igreja de São Lourenço, Roma. Fragmentos são venerados por conversão e cura espiritual.",
            devocao: "Celebrado em 13 de agosto, Hipólito é padroeiro dos convertidos e cavaleiros. Sua festa inclui orações por mudança e missas em Roma. Em arte, é mostrado com cavalos, e os fiéis o invocam por transformação."
        },
        isDisplayed: true,
        data_devocao: "13 de agosto"
    },
    {
        name: "A Assunção da Virgem",
        description: "Festa da elevação de Maria ao céu.",
        additionalInfo: {
            biografia: "A Assunção celebra Maria, nascida por volta de 20 a.C., elevada ao céu por volta de 50 d.C., aos cerca de 70 anos, após a morte de Jesus (dogma de 1950). Mãe de Deus, viveu em Éfeso ou Jerusalém até seu 'dormitio'.",
            milagres: "Subiu ao céu em corpo e alma, anjos cantaram em sua Assunção, curou um enfermo em visão, previu sua elevação e apareceu como Rainha para guiar fiéis.",
            reliquias: "Túmulo vazio em Jerusalém ou Éfeso, relíquias simbólicas estão em Assis. São veneradas por pureza e cura espiritual.",
            devocao: "Celebrada em 15 de agosto, marca a glorificação de Maria. Inclui procissões e orações por intercessão. Os fiéis pedem santidade, com hinos como 'Ó Virgem Assunta'."
        },
        isDisplayed: true,
        data_devocao: "15 de agosto"
    },
    {
        name: "São Bernardo",
        description: "Abade cisterciense, doutor da Igreja.",
        additionalInfo: {
            biografia: "São Bernardo nasceu em Fontaine-lès-Dijon, França, em 1090. Fundou Claraval e influenciou as Cruzadas. Morreu em 21 de agosto de 1153, aos 63 anos, de causas naturais, após uma vida de pregação e asceticismo.",
            milagres: "Curou um mudo ao rezar, previu o sucesso de Claraval, fez uma cruz brilhar em sermões, pacificou guerras e apareceu após a morte para guiar monges.",
            reliquias: "Enterrado em Claraval, suas relíquias foram perdidas na Revolução Francesa, mas fragmentos estão em Troyes. São venerados por sabedoria e cura espiritual.",
            devocao: "Celebrado em 21 de agosto, Bernardo é padroeiro dos monges e apicultores. Sua festa inclui orações marianas e missas cistercienses. Em arte, é mostrado com abelhas, e os fiéis o invocam por eloquência."
        },
        isDisplayed: true,
        data_devocao: "21 de agosto"
    },
    {
        name: "São Timóteo",
        description: "Discípulo de Paulo, bispo e mártir.",
        additionalInfo: {
            biografia: "São Timóteo nasceu em Listra por volta de 17 d.C. Companheiro de Paulo (Atos 16:1), tornou-se bispo de Éfeso e foi martirizado em 22 de agosto de 97 d.C., aos cerca de 80 anos, apedrejado por pagãos.",
            milagres: "Curou um coxo em missão, previu seu martírio em visões, fez uma cruz brilhar em Éfeso, converteu um sacerdote pagão e apareceu após a morte para guiar bispos.",
            reliquias: "Enterrado em Éfeso, suas relíquias estão na Basílica de São João, Roma. Fragmentos são venerados por missão e cura espiritual.",
            devocao: "Celebrado em 22 de agosto, Timóteo é padroeiro dos jovens bispos. Sua festa inclui leituras das Epístolas e orações por zelo. Em arte, é mostrado com Paulo, e os fiéis o invocam por fidelidade."
        },
        isDisplayed: true,
        data_devocao: "22 de agosto"
    },
    {
        name: "São Sinforiano",
        description: "Mártir jovem de Autun, símbolo de resistência cristã.",
        additionalInfo: {
            biografia: "São Sinforiano nasceu em Autun, Gália, por volta de 160 d.C., de família cristã nobre. Martirizado em 22 de agosto de 180 d.C., aos cerca de 20 anos, sob Marco Aurélio, decapitado por recusar adorar Cibele, diante de sua mãe, Santa Augusta.",
            milagres: "Curou um cego ao ser preso, resistiu às torturas com serenidade, previu seu martírio em visões, fez uma cruz brilhar em Autun e apareceu após a morte para confortar sua mãe.",
            reliquias: "Enterrado em Autun, suas relíquias estão na Igreja de São Sinforiano. Fragmentos são venerados por juventude e cura espiritual.",
            devocao: "Celebrado em 22 de agosto, Sinforiano é padroeiro dos jovens mártires. Sua festa inclui orações por coragem e missas em Autun. Em arte, é mostrado com uma palma, e os fiéis o invocam por fortaleza."
        },
        isDisplayed: true,
        data_devocao: "22 de agosto"
    },
    {
        name: "São Bartolomeu",
        description: "Apóstolo de Jesus, missionário na Armênia.",
        additionalInfo: {
            biografia: "São Bartolomeu, também chamado Natanael, nasceu na Galileia no século I a.C. Chamado por Jesus (João 1:45-51), pregou na Índia e Armênia, sendo martirizado em 24 de agosto de 71 d.C., aos cerca de 60 anos, esfolado vivo por ordem do rei Astíages.",
            milagres: "Curou um possuído em missão, previu seu martírio em visões, fez uma cruz brilhar para converter pagãos, resistiu ao esfolamento pregando e apareceu após a morte para guiar missionários.",
            reliquias: "Enterrado em Albanópolis, suas relíquias estão na Basílica de São Bartolomeu, Roma. Fragmentos são venerados por missão e cura física.",
            devocao: "Celebrado em 24 de agosto, Bartolomeu é padroeiro dos curtidores e missionários. Sua festa inclui orações por evangelização e missas apostólicas. Em arte, é mostrado com uma faca, e os fiéis o invocam por coragem."
        },
        isDisplayed: true,
        data_devocao: "24 de agosto"
    },
    {
        name: "São Luís",
        description: "Rei da França, modelo de justiça cristã.",
        additionalInfo: {
            biografia: "São Luís IX nasceu em Poissy, França, em 25 de abril de 1214. Rei de 1226 a 1270, liderou cruzadas e promoveu a justiça. Morreu em 25 de agosto de 1270, aos 56 anos, de disenteria durante a Oitava Cruzada em Túnis.",
            milagres: "Curou um enfermo com oração, previu sua morte em visões, fez uma cruz brilhar em batalha, multiplicou pão para pobres e apareceu após a morte para guiar reis.",
            reliquias: "Enterrado em Saint-Denis, suas relíquias estão dispersas; a Coroa de Espinhos está em Notre-Dame. Fragmentos são venerados por justiça e cura espiritual.",
            devocao: "Celebrado em 25 de agosto, Luís é padroeiro da França e governantes. Sua festa inclui missas reais e orações por liderança. Em arte, é mostrado com uma coroa, e os fiéis o invocam por equidade."
        },
        isDisplayed: true,
        data_devocao: "25 de agosto"
    },
    {
        name: "São Zeferino",
        description: "Papa e mártir, organizador da Igreja primitiva.",
        additionalInfo: {
            biografia: "São Zeferino nasceu em Roma por volta de 150 d.C. Papa de 199 a 217 d.C., enfrentou heresias e perseguições. Morreu em 26 de agosto de 217 d.C., aos cerca de 67 anos, possivelmente martirizado sob Sétimo Severo.",
            milagres: "Curou um possuído ao rezar, previu o fim de uma heresia, fez uma cruz brilhar em Roma, resistiu a pressões pagãs e apareceu após a morte para guiar papas.",
            reliquias: "Enterrado nas Catacumbas de Calisto, suas relíquias estão perdidas, mas fragmentos estão em igrejas romanas. São venerados por unidade e cura espiritual.",
            devocao: "Celebrado em 26 de agosto, Zeferino é padroeiro dos papas em crise. Sua festa inclui missas em catacumbas e orações por liderança. Em arte, é mostrado com uma tiara, e os fiéis o invocam por estabilidade."
        },
        isDisplayed: true,
        data_devocao: "26 de agosto"
    },
    {
        name: "São José de Calasanz",
        description: "Fundador dos escolápios, educador dos pobres.",
        additionalInfo: {
            biografia: "São José de Calasanz nasceu em Peralta de la Sal, Espanha, em 1557. Sacerdote, fundou as Escolas Pias em Roma para crianças pobres. Morreu em 25 de agosto de 1648, aos 90 anos, de causas naturais, após enfrentar oposições.",
            milagres: "Curou um aluno enfermo, previu a expansão de sua ordem, fez uma cruz brilhar em aula, protegeu escolas de saques e apareceu após a morte para guiar educadores.",
            reliquias: "Enterrado em Roma, suas relíquias estão na Igreja de São Pantaleão. Fragmentos são venerados por educação e cura espiritual.",
            devocao: "Celebrado em 27 de agosto, José é padroeiro dos professores e estudantes. Sua festa inclui bênçãos de escolas e orações por aprendizado. Em arte, é mostrado com crianças, e os fiéis o invocam por ensino."
        },
        isDisplayed: true,
        data_devocao: "27 de agosto"
    },
    {
        name: "Santo Agostinho",
        description: "Bispo de Hipona, doutor da Igreja e converso.",
        additionalInfo: {
            biografia: "Santo Agostinho nasceu em Tagaste, Numídia, em 13 de novembro de 354. Após uma vida mundana, converteu-se em 386 e tornou-se bispo em 395. Morreu em 28 de agosto de 430, aos 75 anos, durante o cerco vândalo.",
            milagres: "Curou um cego ao batizá-lo, ouviu a voz divina para converter-se, previu a queda de Hipona, escreveu milagrosamente e apareceu após a morte para guiar teólogos.",
            reliquias: "Enterrado em Hipona, suas relíquias estão na Basílica de São Pedro em Ciel d’Oro, Pavia. Fragmentos são venerados por conversão e cura espiritual.",
            devocao: "Celebrado em 28 de agosto, Agostinho é padroeiro dos teólogos e conversos. Sua festa inclui leituras das 'Confissões' e orações por sabedoria. Em arte, é mostrado com um coração, e os fiéis o invocam por graça."
        },
        isDisplayed: true,
        data_devocao: "28 de agosto"
    },
    {
        name: "O martírio de São João Batista",
        description: "Festa da decapitação do precursor de Jesus.",
        additionalInfo: {
            biografia: "São João Batista nasceu em Ain Karim por volta de 6 a.C. Pregador e batizador de Jesus, foi decapitado em 29 de agosto de 31 d.C., aos cerca de 37 anos, por ordem de Herodes Antipas, a pedido de Herodias (Marcos 6:17-29).",
            milagres: "Batizou Jesus com sinais celestes, previu seu martírio em visões, fez sua cabeça falar após a morte, curou um possuído em lenda e apareceu para guiar penitentes.",
            reliquias: "Enterrado em Sebaste, sua cabeça está na Mesquita dos Omíadas, Damasco, e fragmentos em Roma. São venerados por penitência e cura espiritual.",
            devocao: "Celebrada em 29 de agosto, marca o testemunho de João. Inclui jejuns e orações por coragem. Os fiéis pedem preparação, com hinos como 'Precursor do Senhor'."
        },
        isDisplayed: true,
        data_devocao: "29 de agosto"
    },
    {
        name: "Santa Rosa de Lima",
        description: "Primeira santa das Américas, penitente dominicana.",
        additionalInfo: {
            biografia: "Santa Rosa nasceu em Lima, Peru, em 20 de abril de 1586. Terciária dominicana, viveu em penitência e morreu em 24 de agosto de 1617, aos 31 anos, de causas naturais agravadas por jejuns extremos.",
            milagres: "Curou um enfermo com ervas, previu sua morte em visões, fez flores brotarem em seu jardim, protegeu Lima de piratas e apareceu após a morte para consolar os pobres.",
            reliquias: "Enterrada em Lima, suas relíquias estão na Basílica de São Domingos. Fragmentos são venerados por penitência e cura física.",
            devocao: "Celebrada em 30 de agosto, Rosa é padroeira da América Latina. Sua festa inclui procissões floridas e orações por humildade. Em arte, é mostrada com rosas, e os fiéis a invocam por santidade."
        },
        isDisplayed: true,
        data_devocao: "30 de agosto"
    },
    {
        name: "Santo Aidano",
        description: "Bispo e missionário, evangelizador da Northumbria.",
        additionalInfo: {
            biografia: "Santo Aidano nasceu na Irlanda por volta de 590 d.C. Monge em Iona, tornou-se bispo de Lindisfarne e morreu em 31 de agosto de 651 d.C., aos cerca de 61 anos, de causas naturais, após converter os anglo-saxões.",
            milagres: "Curou um cego ao batizá-lo, previu uma tempestade para salvar fiéis, fez uma cruz brilhar em Lindisfarne, converteu o rei Oswaldo e apareceu após a morte para guiar monges.",
            reliquias: "Enterrado em Lindisfarne, suas relíquias foram perdidas, mas fragmentos estão em igrejas inglesas. São venerados por missão e cura espiritual.",
            devocao: "Celebrado em 31 de agosto, Aidano é padroeiro dos missionários ingleses. Sua festa inclui missas monásticas e orações por evangelização. Em arte, é mostrado com uma cruz, e os fiéis o invocam por zelo."
        },
        isDisplayed: true,
        data_devocao: "31 de agosto"
    },
    {
        name: "São Raimundo Nonato",
        description: "Frade mercedário, libertador de cativos.",
        additionalInfo: {
            biografia: "São Raimundo nasceu em Portell, Espanha, por volta de 1204. Mercedário, resgatou escravos e morreu em 31 de agosto de 1240, aos cerca de 36 anos, possivelmente martirizado ou de exaustão em Argel.",
            milagres: "Curou um cativo com oração, resistiu a torturas como refém, previu sua morte em visões, fez correntes quebrarem e apareceu após a morte para libertar prisioneiros.",
            reliquias: "Enterrado em Cardona, suas relíquias estão na Igreja de São Raimundo. Fragmentos são venerados por liberdade e cura física.",
            devocao: "Celebrado em 31 de agosto, Raimundo é padroeiro das parturientes e prisioneiros. Sua festa inclui bênçãos de mães e orações por libertação. Em arte, é mostrado com cadeados, e os fiéis o invocam por resgate."
        },
        isDisplayed: true,
        data_devocao: "31 de agosto"
    },
    {
        name: "Santo Egídio",
        description: "Eremita e abade, protetor dos pobres.",
        additionalInfo: {
            biografia: "Santo Egídio nasceu em Atenas por volta de 650 d.C. Eremita na Provença, fundou um mosteiro e morreu em 1 de setembro de 710 d.C., aos cerca de 60 anos, de causas naturais, após proteger um cervo do rei.",
            milagres: "Curou um enfermo com ervas, protegeu um cervo de flechas, previu a fundação de seu mosteiro, fez uma cruz brilhar na floresta e apareceu após a morte para ajudar mendigos.",
            reliquias: "Enterrado em Saint-Gilles, suas relíquias estão na Igreja de Santo Egídio. Fragmentos são venerados por caridade e cura espiritual.",
            devocao: "Celebrado em 1 de setembro, Egídio é padroeiro dos eremitas e aleijados. Sua festa inclui esmolas e orações por compaixão. Em arte, é mostrado com um cervo, e os fiéis o invocam por proteção."
        },
        isDisplayed: true,
        data_devocao: "1 de setembro"
    },
    {
        name: "A Natividade de Nossa Senhora",
        description: "Festa do nascimento da Virgem Maria.",
        additionalInfo: {
            biografia: "A Natividade celebra o nascimento de Maria em Jerusalém por volta de 20 a.C., filha de Joaquim e Ana. Mãe de Jesus, viveu até cerca de 50 d.C., sendo assunta ao céu após sua dormição.",
            milagres: "Nasceu de pais estéreis, anjos cantaram em seu nascimento, previu sua missão em visões, curou uma mulher ao nascer e apareceu como Mãe para guiar fiéis.",
            reliquias: "Relíquias simbólicas estão na Basílica de Santa Maria Maior, Roma. São veneradas por pureza e cura espiritual.",
            devocao: "Celebrada em 8 de setembro, marca a Mãe de Deus. Inclui rosários e orações por humildade. Os fiéis pedem intercessão, com hinos como 'Ó Virgem Nascida'."
        },
        isDisplayed: true,
        data_devocao: "8 de setembro"
    },
    {
        name: "São Pedro Claver",
        description: "Jesuíta, apóstolo dos escravos na Colômbia.",
        additionalInfo: {
            biografia: "São Pedro Claver nasceu em Verdú, Espanha, em 26 de junho de 1580. Jesuíta, serviu escravos em Cartagena e morreu em 8 de setembro de 1654, aos 74 anos, de causas naturais agravadas por exaustão.",
            milagres: "Curou um escravo com água benta, previu a chegada de navios negreiros, fez uma cruz brilhar em Cartagena, resistiu a doenças e apareceu após a morte para libertar cativos.",
            reliquias: "Enterrado em Cartagena, suas relíquias estão na Igreja de São Pedro Claver. Fragmentos são venerados por justiça e cura física.",
            devocao: "Celebrado em 9 de setembro, Pedro é padroeiro dos escravos e missionários. Sua festa inclui orações por igualdade e missas em Cartagena. Em arte, é mostrado com escravos, e os fiéis o invocam por compaixão."
        },
        isDisplayed: true,
        data_devocao: "9 de setembro"
    },
    {
        name: "São Nicolau de Tolentino",
        description: "Frade agostiniano, consolador das almas do purgatório.",
        additionalInfo: {
            biografia: "São Nicolau nasceu em Sant’Angelo, Itália, em 1245. Agostiniano, pregou e morreu em 10 de setembro de 1305, aos 60 anos, de causas naturais, após uma vida de penitência.",
            milagres: "Curou um cego com oração, previu sua morte em visões, multiplicou pão para pobres, libertou almas do purgatório e apareceu após a morte para consolar fiéis.",
            reliquias: "Enterrado em Tolentino, suas relíquias estão no Santuário de São Nicolau. Fragmentos são venerados por alívio e cura espiritual.",
            devocao: "Celebrado em 10 de setembro, Nicolau é padroeiro das almas do purgatório. Sua festa inclui missas pelos mortos e orações por misericórdia. Em arte, é mostrado com estrelas, e os fiéis o invocam por intercessão."
        },
        isDisplayed: true,
        data_devocao: "10 de setembro"
    },
    {
        name: "O santo nome de Maria",
        description: "Festa em honra ao nome da Virgem Maria.",
        additionalInfo: {
            biografia: "A festa celebra o nome de Maria, nascida por volta de 20 a.C., Mãe de Jesus, cujo nome significa 'senhora' ou 'amada'. Viveu até cerca de 50 d.C., sendo assunta ao céu.",
            milagres: "Curou um enfermo ao ser invocada, inspirou vitórias cristãs, previu sua glorificação, fez seu nome brilhar em visões e apareceu para abençoar devotos.",
            reliquias: "Relíquias simbólicas estão em igrejas marianas, como Santa Maria Maggiore, Roma. São veneradas por devoção e cura espiritual.",
            devocao: "Celebrada em 12 de setembro, exalta a Mãe de Deus. Inclui ladainhas e orações por proteção. Os fiéis pedem intercessão, com hinos como 'Ó Nome Sagrado'."
        },
        isDisplayed: true,
        data_devocao: "12 de setembro"
    },
    {
        name: "São João Crisóstomo",
        description: "Bispo de Constantinopla, doutor da Igreja e pregador.",
        additionalInfo: {
            biografia: "São João nasceu em Antioquia por volta de 347 d.C. Bispo em 397, foi exilado por criticar a corte e morreu em 14 de setembro de 407 d.C., aos cerca de 60 anos, de exaustão no exílio.",
            milagres: "Curou um possuído ao pregar, previu seu exílio em visões, fez uma cruz brilhar em Constantinopla, resistiu a perseguições e apareceu após a morte para guiar pregadores.",
            reliquias: "Enterrado em Comana, suas relíquias estão na Basílica de São Pedro, Roma. Fragmentos são venerados por eloquência e cura espiritual.",
            devocao: "Celebrado em 14 de setembro, João é padroeiro dos oradores. Sua festa inclui homilias e orações por sabedoria. Em arte, é mostrado com um livro, e os fiéis o invocam por palavra."
        },
        isDisplayed: true,
        data_devocao: "14 de setembro"
    },
    {
        name: "A Exaltação da Santa Cruz",
        description: "Festa da vitória da cruz de Cristo.",
        additionalInfo: {
            biografia: "A Exaltação celebra a dedicação das basílicas do Santo Sepulcro em 335 d.C., ligada à cruz de Jesus, encontrada por Santa Helena em 326 d.C. Jesus, nascido por volta de 6 a.C., morreu em 33 d.C. na cruz.",
            milagres: "Ressuscitou um morto ao tocar a cruz, curou enfermos em Jerusalém, previu sua exaltação, fez a cruz brilhar em visões e inspirou conversões após sua descoberta.",
            reliquias: "Fragmentos da Vera Cruz estão na Basílica de Santa Cruz, Roma. São venerados por redenção e cura física.",
            devocao: "Celebrada em 14 de setembro, exalta a Cruz Salvador. Inclui veneração da cruz e orações por sacrifício. Os fiéis pedem salvação, com hinos como 'Ó Cruz Gloriosa'."
        },
        isDisplayed: true,
        data_devocao: "14 de setembro"
    },
    {
        name: "Nossa Senhora das Dores",
        description: "Festa das sete dores de Maria ao pé da cruz.",
        additionalInfo: {
            biografia: "A festa honra Maria, nascida por volta de 20 a.C., sofrendo as dores profetizadas por Simeão (Lucas 2:35). Mãe de Jesus, viveu até cerca de 50 d.C., sendo assunta ao céu.",
            milagres: "Consolou os apóstolos na cruz, previu suas dores em visões, curou um enfermo com lágrimas, fez seu coração brilhar em devoção e apareceu como Mãe Dolorosa.",
            reliquias: "Relíquias simbólicas estão em igrejas marianas, como Santa Maria Maggiore. São veneradas por compaixão e cura espiritual.",
            devocao: "Celebrada em 15 de setembro, lembra o sofrimento de Maria. Inclui o 'Stabat Mater' e orações por consolo. Os fiéis pedem fortaleza, com hinos como 'Ó Virgem Dolorosa'."
        },
        isDisplayed: true,
        data_devocao: "15 de setembro"
    },
    {
        name: "São Cornélio",
        description: "Papa e mártir, defensor da reconciliação.",
        additionalInfo: {
            biografia: "São Cornélio nasceu em Roma por volta de 180 d.C. Papa de 251 a 253 d.C., enfrentou cismas e morreu em 16 de setembro de 253 d.C., aos cerca de 73 anos, martirizado por exílio sob Galo.",
            milagres: "Curou um enfermo ao reconciliá-lo, previu o fim do cisma, fez uma cruz brilhar em Roma, resistiu a torturas e apareceu após a morte para guiar papas.",
            reliquias: "Enterrado nas Catacumbas de Calisto, suas relíquias estão na Igreja de Santa Maria in Trastevere. Fragmentos são venerados por unidade e cura espiritual.",
            devocao: "Celebrado em 16 de setembro, Cornélio é padroeiro dos papas e reconciliados. Sua festa inclui missas em catacumbas e orações por harmonia. Em arte, é mostrado com uma tiara, e os fiéis o invocam por paz."
        },
        isDisplayed: true,
        data_devocao: "16 de setembro"
    },
    {
        name: "São Cipriano",
        description: "Bispo de Cartago, mártir e escritor eclesiástico.",
        additionalInfo: {
            biografia: "São Cipriano nasceu em Cartago por volta de 200 d.C. Convertido, tornou-se bispo em 249 e foi martirizado em 14 de setembro de 258 d.C., aos cerca de 58 anos, decapitado sob Valeriano.",
            milagres: "Curou um possuído ao batizá-lo, previu sua morte em visões, fez uma cruz brilhar em Cartago, resistiu a torturas e apareceu após a morte para guiar bispos.",
            reliquias: "Enterrado em Cartago, suas relíquias estão perdidas, mas fragmentos estão em igrejas. São venerados por liderança e cura espiritual.",
            devocao: "Celebrado em 16 de setembro, Cipriano é padroeiro dos bispos e mártires. Sua festa inclui leituras de suas cartas e orações por coragem. Em arte, é mostrado com uma espada, e os fiéis o invocam por firmeza."
        },
        isDisplayed: true,
        data_devocao: "16 de setembro"
    },
    {
        name: "São Roberto Belarmino",
        description: "Jesuíta, doutor da Igreja e defensor da fé.",
        additionalInfo: {
            biografia: "São Roberto nasceu em Montepulciano, Itália, em 4 de outubro de 1542. Cardeal e teólogo, combateu a Reforma e morreu em 17 de setembro de 1621, aos 78 anos, de causas naturais em Roma.",
            milagres: "Curou um enfermo com oração, previu sua morte em visões, fez uma cruz brilhar em debate, confundiu hereges com sabedoria e apareceu após a morte para guiar teólogos.",
            reliquias: "Enterrado em Roma, suas relíquias estão na Igreja de Santo Inácio. Fragmentos são venerados por sabedoria e cura espiritual.",
            devocao: "Celebrado em 17 de setembro, Roberto é padroeiro dos teólogos e canonistas. Sua festa inclui leituras teológicas e orações por verdade. Em arte, é mostrado com um livro, e os fiéis o invocam por discernimento."
        },
        isDisplayed: true,
        data_devocao: "17 de setembro"
    },
    {
        name: "São José de Cupertino",
        description: "Frade franciscano, conhecido por levitações.",
        additionalInfo: {
            biografia: "São José nasceu em Cupertino, Itália, em 17 de junho de 1603. Franciscano de vida simples, morreu em 18 de setembro de 1663, aos 60 anos, de causas naturais, famoso por êxtases e levitações.",
            milagres: "Levitou em oração, curou um enfermo com bênção, previu sua morte em visões, fez uma cruz brilhar em êxtase e apareceu após a morte para consolar fiéis.",
            reliquias: "Enterrado em Osimo, suas relíquias estão no Santuário de São José. Fragmentos são venerados por humildade e cura espiritual.",
            devocao: "Celebrado em 18 de setembro, José é padroeiro dos estudantes e aviadores. Sua festa inclui orações por exames e missas em Osimo. Em arte, é mostrado voando, e os fiéis o invocam por simplicidade."
        },
        isDisplayed: true,
        data_devocao: "18 de setembro"
    },
    {
        name: "São Januário",
        description: "Bispo e mártir, conhecido pelo milagre do sangue.",
        additionalInfo: {
            biografia: "São Januário nasceu em Benevento por volta de 270 d.C. Bispo de Nápoles, foi martirizado em 19 de setembro de 305 d.C., aos cerca de 35 anos, decapitado na perseguição de Diocleciano em Pozzuoli.",
            milagres: "Seu sangue liquefaz-se desde o século IV, curou um possuído na prisão, previu seu martírio, resistiu ao fogo e apareceu após a morte para proteger Nápoles.",
            reliquias: "Enterrado em Nápoles, suas relíquias estão na Catedral de São Januário. Seu sangue é venerado por proteção e cura física.",
            devocao: "Celebrado em 19 de setembro, Januário é padroeiro de Nápoles. Sua festa inclui a exibição do sangue e orações por segurança. Em arte, é mostrado com uma ampola, e os fiéis o invocam por milagres."
        },
        isDisplayed: true,
        data_devocao: "19 de setembro"
    },
    {
        name: "Santo Eustáquio",
        description: "Mártir romano, convertido por uma visão.",
        additionalInfo: {
            biografia: "Santo Eustáquio nasceu em Roma por volta de 80 d.C. General romano, converteu-se ao ver um cervo com uma cruz e foi martirizado em 20 de setembro de 118 d.C., aos cerca de 38 anos, sob Adriano, queimado com sua família.",
            milagres: "Viu Cristo num cervo, curou um ferido ao batizá-lo, resistiu ao fogo com louvor, previu seu martírio e apareceu após a morte para guiar caçadores.",
            reliquias: "Enterrado em Roma, suas relíquias estão na Igreja de Santo Eustáquio. Fragmentos são venerados por conversão e cura física.",
            devocao: "Celebrado em 20 de setembro, Eustáquio é padroeiro dos caçadores. Sua festa inclui bênçãos de caça e orações por fé. Em arte, é mostrado com um cervo, e os fiéis o invocam por transformação."
        },
        isDisplayed: true,
        data_devocao: "20 de setembro"
    },
    {
        name: "São Mateus",
        description: "Apóstolo e evangelista, autor do primeiro Evangelho.",
        additionalInfo: {
            biografia: "São Mateus nasceu na Galileia por volta de 10 a.C. Cobrador de impostos, chamado por Jesus (Mateus 9:9), pregou na Etiópia e morreu martirizado em 21 de setembro de 60 d.C., aos cerca de 70 anos, por espada ou lança.",
            milagres: "Curou um cego ao batizá-lo, previu sua morte em visões, fez uma cruz brilhar para converter pagãos, escreveu milagrosamente e apareceu após a morte para guiar missionários.",
            reliquias: "Enterrado em Salerno, suas relíquias estão na Catedral de São Mateus. Fragmentos são venerados por missão e cura espiritual.",
            devocao: "Celebrado em 21 de setembro, Mateus é padroeiro dos contadores. Sua festa inclui leituras do Evangelho e orações por conversão. Em arte, é mostrado com um anjo, e os fiéis o invocam por chamado."
        },
        isDisplayed: true,
        data_devocao: "21 de setembro"
    },
    {
        name: "São Maurício",
        description: "Mártir romano, líder da Legião Tebana.",
        additionalInfo: {
            biografia: "São Maurício nasceu em Tebas, Egito, por volta de 250 d.C. Comandante da Legião Tebana, foi martirizado em 22 de setembro de 287 d.C., aos cerca de 37 anos, sob Maximiano, decapitado com seus soldados por recusar sacrifícios pagãos.",
            milagres: "Curou um ferido na legião, resistiu às torturas com louvor, previu seu martírio em visões, fez uma cruz brilhar em Agauno e apareceu após a morte para proteger soldados.",
            reliquias: "Enterrado em Agauno, suas relíquias estão na Abadia de São Maurício, Suíça. Fragmentos são venerados por coragem e cura física.",
            devocao: "Celebrado em 22 de setembro, Maurício é padroeiro dos soldados cristãos. Sua festa inclui orações por bravura e missas militares. Em arte, é mostrado com uma lança, e os fiéis o invocam por lealdade."
        },
        isDisplayed: true,
        data_devocao: "22 de setembro"
    },
    {
        name: "São Lino",
        description: "Segundo papa, sucessor de São Pedro.",
        additionalInfo: {
            biografia: "São Lino nasceu em Volterra, Itália, por volta de 10 d.C. Papa de 67 a 76 d.C., após Pedro, foi martirizado em 23 de setembro de 76 d.C., aos cerca de 66 anos, possivelmente decapitado sob Nero.",
            milagres: "Curou um enfermo ao rezar, previu o fim de uma perseguição, fez uma cruz brilhar em Roma, resistiu a pressões pagãs e apareceu após a morte para guiar papas.",
            reliquias: "Enterrado no Vaticano, suas relíquias estão sob a Basílica de São Pedro. Fragmentos são venerados por liderança e cura espiritual.",
            devocao: "Celebrado em 23 de setembro, Lino é padroeiro dos papas primitivos. Sua festa inclui missas em Roma e orações por sucessão. Em arte, é mostrado com uma tiara, e os fiéis o invocam por continuidade."
        },
        isDisplayed: true,
        data_devocao: "23 de setembro"
    },
    {
        name: "São Tecla",
        description: "Virgem e mártir, discípula de São Paulo.",
        additionalInfo: {
            biografia: "Santa Tecla nasceu em Icônio por volta de 30 d.C. Convertida por Paulo, escapou de perseguições e morreu em 24 de setembro de 90 d.C., aos cerca de 60 anos, de causas naturais ou martírio em Selêucia.",
            milagres: "Escapou do fogo milagrosamente, curou um possuído com oração, resistiu a feras, previu sua morte e apareceu após a morte para guiar virgens.",
            reliquias: "Enterrada em Selêucia, suas relíquias estão em Tarragona, Espanha. Fragmentos são venerados por pureza e cura espiritual.",
            devocao: "Celebrada em 24 de setembro, Tecla é padroeira das virgens e perseguidas. Sua festa inclui orações por resistência e missas em Selêucia. Em arte, é mostrada com feras, e os fiéis a invocam por coragem."
        },
        isDisplayed: true,
        data_devocao: "24 de setembro"
    },
    {
        name: "São Firmino",
        description: "Bispo e mártir, evangelizador de Pamplona.",
        additionalInfo: {
            biografia: "São Firmino nasceu em Pamplona por volta de 272 d.C. Bispo de Amiens, foi martirizado em 25 de setembro de 303 d.C., aos cerca de 31 anos, decapitado na perseguição de Diocleciano.",
            milagres: "Curou um cego ao batizá-lo, previu seu martírio em visões, fez uma cruz brilhar em Amiens, converteu pagãos e apareceu após a morte para proteger Pamplona.",
            reliquias: "Enterrado em Amiens, suas relíquias estão na Catedral de Pamplona. Fragmentos são venerados por missão e cura física.",
            devocao: "Celebrado em 25 de setembro, Firmino é padroeiro de Pamplona. Sua festa inclui a San Fermín e orações por evangelização. Em arte, é mostrado com uma mitra, e os fiéis o invocam por zelo."
        },
        isDisplayed: true,
        data_devocao: "25 de setembro"
    },
    {
        name: "Santos Cosme e Damião",
        description: "Mártires médicos, conhecidos como 'sem dinheiro'.",
        additionalInfo: {
            biografia: "Santos Cosme e Damião nasceram em Égea, Arábia, por volta de 260 d.C. Médicos gêmeos, foram martirizados em 27 de setembro de 303 d.C., aos cerca de 43 anos, na perseguição de Diocleciano, decapitados após torturas.",
            milagres: "Curaram um enfermo sem cobrar, resistiram ao fogo, previram seu martírio, transplantaram uma perna em lenda e apareceram após a morte para curar doentes.",
            reliquias: "Enterrados em Cirro, suas relíquias estão na Basílica de Cosme e Damião, Roma. Fragmentos são venerados por cura e caridade.",
            devocao: "Celebrados em 27 de setembro, são padroeiros dos médicos. Sua festa inclui bênçãos de saúde e orações por generosidade. Em arte, são mostrados com instrumentos médicos, e os fiéis os invocam por cura."
        },
        isDisplayed: true,
        data_devocao: "27 de setembro"
    },
    {
        name: "São Venceslau",
        description: "Duque da Boêmia, mártir e patrono da nação.",
        additionalInfo: {
            biografia: "São Venceslau nasceu em Praga por volta de 907. Duque cristão, foi assassinado em 28 de setembro de 935, aos 28 anos, por seu irmão Boleslau, por motivos políticos e religiosos.",
            milagres: "Curou um cego com oração, previu sua morte em visões, fez uma cruz brilhar em batalha, protegeu Praga em espírito e apareceu após a morte para guiar o povo.",
            reliquias: "Enterrado em Praga, suas relíquias estão na Catedral de São Venceslau. Fragmentos são venerados por justiça e cura espiritual.",
            devocao: "Celebrado em 28 de setembro, Venceslau é padroeiro da República Tcheca. Sua festa inclui hinos nacionais e orações por liderança. Em arte, é mostrado com uma coroa, e os fiéis o invocam por paz."
        },
        isDisplayed: true,
        data_devocao: "28 de setembro"
    },
    {
        name: "São Miguel Arcanjo",
        description: "Arcanjo, defensor contra o mal e líder celestial.",
        additionalInfo: {
            biografia: "São Miguel, ser celestial, é mencionado na Bíblia (Daniel 12, Apocalipse 12) como chefe dos anjos. Não tem nascimento ou morte, sendo eterno, e combateu Satanás, sendo venerado desde os primeiros séculos.",
            milagres: "Expulsou Lúcifer do céu, curou enfermos em Monte Gargano, previu vitórias cristãs, fez sua espada brilhar em batalhas e aparece para proteger fiéis.",
            reliquias: "Relíquias simbólicas estão no Monte Gargano, Itália. São veneradas por proteção e cura espiritual.",
            devocao: "Celebrado em 29 de setembro, Miguel é padroeiro dos guerreiros. Sua festa inclui orações de exorcismo e missas angelicais. Em arte, é mostrado com uma espada, e os fiéis o invocam por defesa."
        },
        isDisplayed: true,
        data_devocao: "29 de setembro"
    },
    {
        name: "São Forseu",
        description: "Mártir obscuro, testemunha da fé cristã.",
        additionalInfo: {
            biografia: "São Forseu nasceu em local incerto por volta do século III. Pouco se sabe de sua vida; foi martirizado em 29 de setembro de 304 d.C., na perseguição de Diocleciano, possivelmente decapitado ou morto em circunstâncias desconhecidas.",
            milagres: "Curou um ferido na prisão, resistiu às torturas com serenidade, previu seu martírio em visões, fez uma cruz brilhar em sua cela e apareceu após a morte para confortar fiéis.",
            reliquias: "Suas relíquias são desconhecidas ou perdidas, possivelmente veneradas localmente em igrejas antigas. São associadas à coragem e cura espiritual.",
            devocao: "Celebrado em 29 de setembro, Forseu é invocado por resistência. Sua festa é simples, com orações por fortaleza. Em arte, é mostrado com uma palma, e os fiéis pedem proteção em tempos difíceis."
        },
        isDisplayed: true,
        data_devocao: "29 de setembro"
    },
    {
        name: "São Miguel",
        description: "Arcanjo, líder das milícias celestes contra o mal.",
        additionalInfo: {
            biografia: "São Miguel é um arcanjo bíblico (Daniel 10:13, Apocalipse 12:7), sem nascimento ou morte terrena. Comandou os anjos contra Lúcifer e é celebrado como protetor da Igreja. Sua festa em 29 de setembro remonta ao século V com a dedicação de uma basílica em Roma.",
            milagres: "Expulsou Lúcifer do céu, protegeu fiéis em batalhas, apareceu no Monte Gargano, curou enfermos com sua espada e guia almas ao céu em visões.",
            reliquias: "Sem relíquias físicas, locais como Monte Gargano e Mont-Saint-Michel são venerados como seus santuários. Associados à proteção e cura espiritual.",
            devocao: "Celebrado em 29 de setembro, Miguel é padroeiro dos guerreiros e policiais. Sua festa inclui orações de exorcismo e missas solenes. Em arte, é mostrado com uma espada, e os fiéis o invocam por defesa contra o mal."
        },
        isDisplayed: true,
        data_devocao: "29 de setembro"
    },
    {
        name: "São Jerônimo",
        description: "Doutor da Igreja, tradutor da Vulgata.",
        additionalInfo: {
            biografia: "São Jerônimo nasceu em Estridão, Dalmácia, por volta de 347 d.C. Erudito e asceta, traduziu a Bíblia para o latim e morreu em 30 de setembro de 420 d.C., aos cerca de 73 anos, de causas naturais em Belém.",
            milagres: "Curou um cego com oração, previu sua morte em visões, fez um leão servi-lo em lenda, resistiu a tentações demoníacas e apareceu após a morte para guiar estudiosos.",
            reliquias: "Enterrado em Belém, suas relíquias estão na Basílica de Santa Maria Maior, Roma. Fragmentos são venerados por sabedoria e cura espiritual.",
            devocao: "Celebrado em 30 de setembro, Jerônimo é padroeiro dos biblistas e bibliotecários. Sua festa inclui leituras da Vulgata e orações por conhecimento. Em arte, é mostrado com um leão, e os fiéis o invocam por estudo."
        },
        isDisplayed: true,
        data_devocao: "30 de setembro"
    },
    {
        name: "A translação de São Remígio",
        description: "Festa da transferência das relíquias de São Remígio.",
        additionalInfo: {
            biografia: "São Remígio nasceu em Laon, Gália, por volta de 437 d.C. Bispo de Reims, batizou Clóvis e morreu em 13 de janeiro de 533 d.C., aos cerca de 96 anos. Suas relíquias foram trasladadas em 1 de outubro de um ano posterior, marcando esta festa.",
            milagres: "Curou um possuído ao batizá-lo, previu a conversão de Clóvis, fez uma cruz brilhar em Reims, ressuscitou uma jovem em lenda e apareceu após a morte para proteger a França.",
            reliquias: "Enterrado em Reims, suas relíquias estão na Basílica de São Remígio. Fragmentos são venerados por conversão e cura espiritual.",
            devocao: "Celebrada em 1 de outubro, honra o 'Apóstolo dos Francos'. Inclui missas em Reims e orações por missão. Os fiéis pedem evangelização, com hinos como 'Ó Santo Batizador'."
        },
        isDisplayed: true,
        data_devocao: "1 de outubro"
    },
    {
        name: "São Leodegário",
        description: "Bispo e mártir, defensor da justiça na Gália.",
        additionalInfo: {
            biografia: "São Leodegário nasceu em Autun, Gália, por volta de 615 d.C. Bispo de Autun, resistiu a tiranos e foi martirizado em 2 de outubro de 679 d.C., aos cerca de 64 anos, torturado e decapitado por ordem de Ebroin.",
            milagres: "Curou um cego em oração, previu seu martírio em visões, resistiu a torturas com serenidade, fez uma cruz brilhar em Autun e apareceu após a morte para guiar bispos.",
            reliquias: "Enterrado em Autun, suas relíquias estão na Catedral de São Leodegário. Fragmentos são venerados por justiça e cura espiritual.",
            devocao: "Celebrado em 2 de outubro, Leodegário é padroeiro dos bispos perseguidos. Sua festa inclui orações por coragem e missas em Autun. Em arte, é mostrado com uma palma, e os fiéis o invocam por resistência."
        },
        isDisplayed: true,
        data_devocao: "2 de outubro"
    },
    {
        name: "São Francisco",
        description: "Fundador dos franciscanos, amante da pobreza e da criação.",
        additionalInfo: {
            biografia: "São Francisco nasceu em Assis, Itália, em 1181 ou 1182. Após conversão, fundou a Ordem Franciscana e morreu em 3 de outubro de 1226, aos cerca de 44 anos, de causas naturais, recebendo os estigmas em 1224.",
            milagres: "Recebeu os estigmas, curou um leproso, pregou aos pássaros, multiplicou pão para pobres e apareceu após a morte para guiar frades.",
            reliquias: "Enterrado em Assis, suas relíquias estão na Basílica de São Francisco. Fragmentos são venerados por humildade e cura espiritual.",
            devocao: "Celebrado em 4 de outubro, Francisco é padroeiro dos ecologistas e pobres. Sua festa inclui bênçãos de animais e orações por simplicidade. Em arte, é mostrado com estigmas, e os fiéis o invocam por paz."
        },
        isDisplayed: true,
        data_devocao: "4 de outubro"
    },
    {
        name: "Santa Pelágia",
        description: "Penitente de Antioquia, convertida do teatro.",
        additionalInfo: {
            biografia: "Santa Pelágia nasceu em Antioquia por volta de 430 d.C. Atriz e dançarina, converteu-se e viveu como eremita em Jerusalém, morrendo em 8 de outubro de 457 d.C., aos cerca de 27 anos, de causas naturais ou penitências extremas.",
            milagres: "Curou um enfermo ao abandonar o palco, previu sua conversão em visões, fez uma cruz brilhar em sua cela, resistiu a tentações e apareceu após a morte para guiar pecadores.",
            reliquias: "Enterrada no Monte das Oliveiras, suas relíquias estão perdidas, mas fragmentos simbólicos estão em igrejas. São venerados por conversão e cura espiritual.",
            devocao: "Celebrada em 8 de outubro, Pelágia é padroeira das penitentes. Sua festa inclui orações por mudança e missas em silêncio. Em arte, é mostrada com véu, e os fiéis a invocam por redenção."
        },
        isDisplayed: true,
        data_devocao: "8 de outubro"
    },
    {
        name: "Santa Margarida",
        description: "Virgem e mártir, associada a São Francisco em algumas tradições.",
        additionalInfo: {
            biografia: "Santa Margarida nasceu em data incerta, possivelmente no século XIII, em Itália. Terciária franciscana em algumas tradições, morreu em 8 de outubro (data incerta), talvez martirizada ou de causas naturais, com poucos registros claros.",
            milagres: "Curou um pobre com oração, previu sua morte em visões, fez uma cruz brilhar em sua cela, resistiu a tentações e apareceu após a morte para consolar franciscanos.",
            reliquias: "Suas relíquias são incertas, possivelmente veneradas em igrejas franciscanas locais. Associadas à humildade e cura espiritual.",
            devocao: "Celebrada em 8 de outubro, Margarida é invocada por simplicidade. Sua festa é discreta, com orações por pobreza espiritual. Em arte, é mostrada com hábito, e os fiéis pedem proteção."
        },
        isDisplayed: true,
        data_devocao: "8 de outubro"
    },
    {
        name: "Santa Taís",
        description: "Penitente do Egito, convertida da prostituição.",
        additionalInfo: {
            biografia: "Santa Taís nasceu no Egito por volta de 300 d.C. Cortesã famosa, foi convertida por São Pafúncio e morreu em 8 de outubro de 348 d.C., aos cerca de 48 anos, de causas naturais após penitência em reclusão.",
            milagres: "Curou um enfermo ao queimar seus bens, previu sua conversão em visões, fez uma cruz brilhar em sua cela, resistiu a tentações e apareceu após a morte para guiar pecadores.",
            reliquias: "Enterrada no deserto egípcio, suas relíquias estão perdidas, mas fragmentos simbólicos estão em igrejas. São venerados por arrependimento e cura espiritual.",
            devocao: "Celebrada em 8 de outubro, Taís é padroeira das penitentes. Sua festa inclui jejuns e orações por transformação. Em arte, é mostrada com fogo, e os fiéis a invocam por redenção."
        },
        isDisplayed: true,
        data_devocao: "8 de outubro"
    },
    {
        name: "Santos Dionísio, Rústico e Eleutério",
        description: "Mártires de Paris, primeiros evangelizadores da Gália.",
        additionalInfo: {
            biografia: "Santos Dionísio, Rústico e Eleutério nasceram em locais incertos por volta do século I ou III. Dionísio, bispo de Paris, foi martirizado com seus companheiros em 9 de outubro de 258 d.C., decapitados sob Valeriano em Montmartre.",
            milagres: "Dionísio carregou sua cabeça após decapitação, curou um cego em missão, previu seu martírio, fez uma cruz brilhar em Paris e apareceu após a morte para proteger a cidade.",
            reliquias: "Enterrados em Paris, suas relíquias estão na Basílica de Saint-Denis. Fragmentos são venerados por missão e cura física.",
            devocao: "Celebrados em 9 de outubro, são padroeiros de Paris. Sua festa inclui missas em Saint-Denis e orações por evangelização. Em arte, Dionísio é mostrado com sua cabeça, e os fiéis os invocam por zelo."
        },
        isDisplayed: true,
        data_devocao: "9 de outubro"
    },
    {
        name: "São Calisto",
        description: "Papa e mártir, organizador das catacumbas.",
        additionalInfo: {
            biografia: "São Calisto I nasceu em Roma por volta de 160 d.C., como escravo. Papa de 217 a 222 d.C., foi martirizado em 14 de outubro de 222 d.C., aos cerca de 62 anos, possivelmente jogado num poço sob Sétimo Severo.",
            milagres: "Curou um enfermo ao batizá-lo, previu o fim de uma heresia, fez uma cruz brilhar em Roma, resistiu a torturas e apareceu após a morte para guiar papas.",
            reliquias: "Enterrado nas Catacumbas de Calisto, suas relíquias estão na Igreja de Santa Maria in Trastevere. Fragmentos são venerados por unidade e cura espiritual.",
            devocao: "Celebrado em 14 de outubro, Calisto é padroeiro dos cemitérios. Sua festa inclui missas em catacumbas e orações por liderança. Em arte, é mostrado com uma tiara, e os fiéis o invocam por estabilidade."
        },
        isDisplayed: true,
        data_devocao: "14 de outubro"
    },
    {
        name: "São Leonardo",
        description: "Eremita e libertador de prisioneiros.",
        additionalInfo: {
            biografia: "São Leonardo nasceu na Gália por volta de 496 d.C. Nobre convertido, tornou-se eremita e morreu em 15 de outubro de 559 d.C., aos cerca de 63 anos, de causas naturais, após libertar cativos com permissão de Clóvis.",
            milagres: "Libertou prisioneiros milagrosamente, curou um enfermo com oração, previu sua morte em visões, fez uma cruz brilhar na floresta e apareceu após a morte para quebrar correntes.",
            reliquias: "Enterrado em Noblat, suas relíquias estão na Igreja de São Leonardo. Fragmentos são venerados por liberdade e cura espiritual.",
            devocao: "Celebrado em 15 de outubro, Leonardo é padroeiro dos prisioneiros. Sua festa inclui orações por libertação e missas em Noblat. Em arte, é mostrado com cadeias, e os fiéis o invocam por resgate."
        },
        isDisplayed: true,
        data_devocao: "15 de outubro"
    },
    {
        name: "São Lucas",
        description: "Evangelista e médico, autor do terceiro Evangelho.",
        additionalInfo: {
            biografia: "São Lucas nasceu em Antioquia por volta de 10 d.C. Médico e discípulo de Paulo, escreveu o Evangelho e Atos, morrendo em 18 de outubro de 84 d.C., aos cerca de 74 anos, de causas naturais na Beócia, Grécia.",
            milagres: "Curou um enfermo em missão, previu sua morte em visões, fez uma cruz brilhar em suas viagens, pintou a Virgem em lenda e apareceu após a morte para guiar médicos.",
            reliquias: "Enterrado em Tebas, suas relíquias estão na Basílica de Santa Justina, Pádua. Fragmentos são venerados por cura e inspiração.",
            devocao: "Celebrado em 18 de outubro, Lucas é padroeiro dos médicos e artistas. Sua festa inclui leituras do Evangelho e orações por saúde. Em arte, é mostrado com um boi, e os fiéis o invocam por sabedoria."
        },
        isDisplayed: true,
        data_devocao: "18 de outubro"
    },
    {
        name: "As onze mil virgens",
        description: "Mártires lendárias, lideradas por Santa Úrsula.",
        additionalInfo: {
            biografia: "As Onze Mil Virgens, lideradas por Santa Úrsula, nasceram em data incerta, possivelmente no século IV. Segundo a lenda, foram martirizadas em 21 de outubro de 383 d.C., em Colônia, por hunos, após uma peregrinação.",
            milagres: "Curaram um cego em viagem, resistiram aos hunos com louvor, previram seu martírio, fizeram cruzes brilharem em Colônia e apareceram após a morte para proteger virgens.",
            reliquias: "Enterradas em Colônia, suas relíquias estão na Basílica de Santa Úrsula. Fragmentos são venerados por pureza e cura espiritual.",
            devocao: "Celebradas em 21 de outubro, são padroeiras das virgens e estudantes. Sua festa inclui orações por castidade e missas em Colônia. Em arte, Úrsula é mostrada com flechas, e os fiéis as invocam por proteção."
        },
        isDisplayed: true,
        data_devocao: "21 de outubro"
    },
    {
        name: "São Crisanto e Santa Dária",
        description: "Mártires romanos, casal convertido ao cristianismo.",
        additionalInfo: {
            biografia: "São Crisanto nasceu em Alexandria por volta de 260 d.C., e Santa Dária, sua esposa, em local incerto. Convertidos, foram martirizados em 25 de outubro de 283 d.C., aos cerca de 23 anos, enterrados vivos sob Diocleciano em Roma.",
            milagres: "Curaram um possuído ao batizá-lo, resistiram às torturas com serenidade, previram seu martírio, fizeram uma cruz brilhar na prisão e apareceram após a morte para unir casais.",
            reliquias: "Enterrados na Via Salária, suas relíquias estão na Catedral de Reggio Emilia. Fragmentos são venerados por amor e cura espiritual.",
            devocao: "Celebrados em 25 de outubro, são padroeiros dos casais cristãos. Sua festa inclui bênçãos de casamentos e orações por fidelidade. Em arte, são mostrados juntos, e os fiéis os invocam por união."
        },
        isDisplayed: true,
        data_devocao: "25 de outubro"
    },
    {
        name: "Santos Simão e Judas",
        description: "Apóstolos de Jesus, missionários e mártires.",
        additionalInfo: {
            biografia: "Santos Simão e Judas nasceram na Galileia no século I a.C. Simão, o Zelote, e Judas Tadeu, chamados por Jesus, pregaram na Pérsia e foram martirizados em 28 de outubro de 70 d.C., Simão serrado e Judas golpeado, aos cerca de 60 anos.",
            milagres: "Curaram um paralítico em missão, previram seu martírio, fizeram cruzes brilharem na Pérsia, converteram pagãos e apareceram após a morte para guiar fiéis.",
            reliquias: "Enterrados na Pérsia, suas relíquias estão na Basílica de São Pedro, Roma. Fragmentos são venerados por missão e cura física.",
            devocao: "Celebrados em 28 de outubro, Judas é padroeiro das causas impossíveis. Sua festa inclui orações por esperança e missas apostólicas. Em arte, Judas tem um machado, e os fiéis os invocam por auxílio."
        },
        isDisplayed: true,
        data_devocao: "28 de outubro"
    },
    {
        name: "São Quintino",
        description: "Mártir romano, evangelizador da Gália.",
        additionalInfo: {
            biografia: "São Quintino nasceu em Roma por volta de 230 d.C. Missionário na Gália, foi martirizado em 31 de outubro de 287 d.C., aos cerca de 57 anos, decapitado sob Maximiano em Vermand.",
            milagres: "Curou um cego ao batizá-lo, resistiu às torturas com serenidade, previu seu martírio, fez uma cruz brilhar em Vermand e apareceu após a morte para proteger a região.",
            reliquias: "Enterrado em Saint-Quentin, suas relíquias estão na Basílica de São Quintino. Fragmentos são venerados por missão e cura espiritual.",
            devocao: "Celebrado em 31 de outubro, Quintino é padroeiro dos missionários locais. Sua festa inclui missas em Saint-Quentin e orações por coragem. Em arte, é mostrado com uma palma, e os fiéis o invocam por resistência."
        },
        isDisplayed: true,
        data_devocao: "31 de outubro"
    },
    {
        name: "Todos os santos",
        description: "Festa em honra a todos os santos canonizados e anônimos.",
        additionalInfo: {
            biografia: "Instituída no século VII, celebra todos os santos, conhecidos e desconhecidos, que viveram e morreram em santidade. Fixada em 1 de novembro por Gregório III (731-741) com a dedicação de uma capela em Roma.",
            milagres: "Inúmeros milagres atribuídos aos santos, como curas, visões e proteção, refletem a intercessão coletiva dos bem-aventurados.",
            reliquias: "Relíquias de vários santos estão em igrejas, como São Pedro, Roma. Veneradas por santidade e cura espiritual.",
            devocao: "Celebrada em 1 de novembro, é um dia de louvor universal. Inclui litanias dos santos e orações por intercessão. Os fiéis pedem santidade, com hinos como 'Ó Santos em Glória'."
        },
        isDisplayed: true,
        data_devocao: "1 de novembro"
    },
    {
        name: "A comemoração das almas",
        description: "Festa em memória dos fiéis defuntos no purgatório.",
        additionalInfo: {
            biografia: "Instituída por Santo Odilo de Cluny em 998, celebra as almas dos fiéis falecidos em 2 de novembro, pedindo sua purificação para o céu. Não ligada a uma pessoa específica, mas à Igreja universal.",
            milagres: "Visões de almas libertas, curas atribuídas a orações, sinais de luz em cemitérios e alívio espiritual relatado por fiéis.",
            reliquias: "Sem relíquias específicas, mas cemitérios e ossuários são venerados como locais de memória e cura espiritual.",
            devocao: "Celebrada em 2 de novembro, é dia de sufrágio. Inclui missas pelos mortos e orações por purificação. Os fiéis pedem misericórdia, com hinos como 'Dies Irae'."
        },
        isDisplayed: true,
        data_devocao: "2 de novembro"
    },
    {
        name: "Os quatro coroados",
        description: "Mártires romanos, escultores que rejeitaram idolatria.",
        additionalInfo: {
            biografia: "Os Quatro Coroados (Cláudio, Nicostrato, Sinforiano e Castório) nasceram por volta de 270 d.C. Escultores, foram martirizados em 8 de novembro de 304 d.C., aos cerca de 34 anos, na perseguição de Diocleciano, afogados por recusar esculpir ídolos.",
            milagres: "Curaram um ferido com oração, resistiram às torturas com serenidade, previram seu martírio, fizeram uma cruz brilhar em Roma e apareceram após a morte para proteger artesãos.",
            reliquias: "Enterrados na Via Labicana, suas relíquias estão na Basílica dos Quatro Coroados, Roma. Fragmentos são venerados por trabalho e cura espiritual.",
            devocao: "Celebrados em 8 de novembro, são padroeiros dos escultores. Sua festa inclui bênçãos de ferramentas e orações por fidelidade. Em arte, são mostrados com martelos, e os fiéis os invocam por artesanato."
        },
        isDisplayed: true,
        data_devocao: "8 de novembro"
    },
    {
        name: "São Teodoro",
        description: "Mártir militar, conhecido como 'Tiro' ou recruta.",
        additionalInfo: {
            biografia: "São Teodoro nasceu em Euchaïta por volta de 275 d.C. Soldado romano, foi martirizado em 9 de novembro de 306 d.C., aos cerca de 31 anos, queimado vivo sob Galério por incendiar um templo pagão.",
            milagres: "Curou um possuído ao rezar, resistiu ao fogo com louvor, previu seu martírio, fez uma cruz brilhar em Amásia e apareceu após a morte para proteger soldados.",
            reliquias: "Enterrado em Euchaïta, suas relíquias estão em Veneza, na Igreja de São Salvador. Fragmentos são venerados por coragem e cura física.",
            devocao: "Celebrado em 9 de novembro, Teodoro é padroeiro dos soldados. Sua festa inclui orações por bravura e missas militares. Em arte, é mostrado com fogo, e os fiéis o invocam por proteção."
        },
        isDisplayed: true,
        data_devocao: "9 de novembro"
    },
    {
        name: "São Martinho",
        description: "Bispo de Tours, conhecido por dividir seu manto.",
        additionalInfo: {
            biografia: "São Martinho nasceu em Sabária, Panônia, por volta de 316 d.C. Soldado convertido, tornou-se bispo e morreu em 11 de novembro de 397 d.C., aos cerca de 81 anos, de causas naturais em Candes.",
            milagres: "Curou um leproso, ressuscitou um morto em lenda, previu sua morte, fez uma cruz brilhar em Tours e apareceu após a morte para proteger os pobres.",
            reliquias: "Enterrado em Tours, suas relíquias estão na Basílica de São Martinho. Fragmentos são venerados por caridade e cura espiritual.",
            devocao: "Celebrado em 11 de novembro, Martinho é padroeiro dos soldados e pobres. Sua festa inclui lanternas e orações por generosidade. Em arte, é mostrado com um manto, e os fiéis o invocam por compaixão."
        },
        isDisplayed: true,
        data_devocao: "11 de novembro"
    },
    {
        name: "São Brício",
        description: "Bispo de Tours, sucessor de São Martinho.",
        additionalInfo: {
            biografia: "São Brício nasceu na Gália por volta de 370 d.C. Discípulo de Martinho, tornou-se bispo de Tours e morreu em 13 de novembro de 444 d.C., aos cerca de 74 anos, de causas naturais, após um exílio por calúnias.",
            milagres: "Curou um enfermo com oração, previu sua morte em visões, fez uma cruz brilhar em Tours, resistiu a falsas acusações e apareceu após a morte para guiar bispos.",
            reliquias: "Enterrado em Tours, suas relíquias estão na Catedral de São Martinho. Fragmentos são venerados por perseverança e cura espiritual.",
            devocao: "Celebrado em 13 de novembro, Brício é invocado por paciência. Sua festa inclui missas em Tours e orações por justiça. Em arte, é mostrado com uma mitra, e os fiéis pedem resistência."
        },
        isDisplayed: true,
        data_devocao: "13 de novembro"
    },
    {
        name: "Santa Cecília",
        description: "Virgem e mártir, padroeira dos músicos.",
        additionalInfo: {
            biografia: "Santa Cecília nasceu em Roma por volta de 200 d.C. Nobre cristã, foi martirizada em 22 de novembro de 230 d.C., aos cerca de 30 anos, sob Alexandre Severo, decapitada após tentativas de asfixia e fervura.",
            milagres: "Cantou a Deus durante o martírio, curou um cego ao batizá-lo, resistiu às torturas, previu sua morte e apareceu após a morte para inspirar músicos.",
            reliquias: "Enterrada nas Catacumbas de Calisto, suas relíquias estão na Basílica de Santa Cecília, Roma. Fragmentos são venerados por harmonia e cura espiritual.",
            devocao: "Celebrada em 22 de novembro, Cecília é padroeira dos músicos. Sua festa inclui concertos e orações por arte. Em arte, é mostrada com um órgão, e os fiéis a invocam por melodia."
        },
        isDisplayed: true,
        data_devocao: "22 de novembro"
    },
    {
        name: "São Clemente",
        description: "Papa e mártir, autor de uma epístola apostólica.",
        additionalInfo: {
            biografia: "São Clemente I nasceu em Roma por volta de 35 d.C. Papa de 88 a 97 d.C., foi exilado e martirizado em 23 de novembro de 99 d.C., aos cerca de 64 anos, jogado ao mar com uma âncora sob Trajano.",
            milagres: "Curou um possuído ao rezar, previu seu martírio, fez uma fonte brotar no exílio, resistiu às torturas e apareceu após a morte para guiar papas.",
            reliquias: "Recuperadas do mar, suas relíquias estão na Basílica de São Clemente, Roma. Fragmentos são venerados por liderança e cura espiritual.",
            devocao: "Celebrado em 23 de novembro, Clemente é padroeiro dos marinheiros. Sua festa inclui missas em Roma e orações por estabilidade. Em arte, é mostrado com uma âncora, e os fiéis o invocam por firmeza."
        },
        isDisplayed: true,
        data_devocao: "23 de novembro"
    },
    {
        name: "São Saturnino, Santa Perpétua, Santa Felicidade e outros companheiros",
        description: "Mártires de Cartago, exemplos de fé em grupo.",
        additionalInfo: {
            biografia: "São Saturnino, Perpétua, Felicidade e companheiros nasceram em Cartago por volta de 180 d.C. Catecúmenos, foram martirizados em 23 de novembro de 203 d.C., Perpétua aos 22 anos, Felicidade após o parto, sob Sétimo Severo, mortos por feras.",
            milagres: "Curaram um cego na prisão, resistiram às feras com louvor, previram seu martírio, fizeram cruzes brilharem em Cartago e apareceram após a morte para confortar cristãos.",
            reliquias: "Enterrados em Cartago, suas relíquias estão dispersas, algumas em Roma. Fragmentos são venerados por coragem e cura espiritual.",
            devocao: "Celebrados em 23 de novembro, são padroeiros dos mártires. Sua festa inclui leituras do martírio e orações por resistência. Em arte, são mostrados com feras, e os fiéis os invocam por fortaleza."
        },
        isDisplayed: true,
        data_devocao: "23 de novembro"
    },
    {
        name: "São Crisógono",
        description: "Mártir romano, conselheiro de Santa Anastácia.",
        additionalInfo: {
            biografia: "São Crisógono nasceu em Roma por volta de 260 d.C. Soldado cristão, foi martirizado em 24 de novembro de 304 d.C., aos cerca de 44 anos, decapitado em Aquileia na perseguição de Diocleciano.",
            milagres: "Curou um ferido na prisão, resistiu às torturas com serenidade, previu seu martírio, fez uma cruz brilhar em Aquileia e apareceu após a morte para confortar Anastácia.",
            reliquias: "Enterrado em Aquileia, suas relíquias estão na Igreja de São Crisógono, Roma. Fragmentos são venerados por coragem e cura espiritual.",
            devocao: "Celebrado em 24 de novembro, Crisógono é invocado por resistência. Sua festa inclui missas em Roma e orações por fortaleza. Em arte, é mostrado com uma espada, e os fiéis pedem proteção."
        },
        isDisplayed: true,
        data_devocao: "24 de novembro"
    },
    {
        name: "Santa Catarina",
        description: "Virgem e mártir, filósofa convertida ao cristianismo.",
        additionalInfo: {
            biografia: "Santa Catarina nasceu em Alexandria por volta de 287 d.C. Nobre erudita, foi martirizada em 25 de novembro de 305 d.C., aos cerca de 18 anos, na perseguição de Maxêncio, morta numa roda quebrada e decapitada.",
            milagres: "Converteu sábios pagãos, resistiu à roda de tortura, previu seu martírio, fez anjos intervirem e apareceu após a morte para guiar no Monte Sinai.",
            reliquias: "Enterrada no Monte Sinai, suas relíquias estão no Mosteiro de Santa Catarina. Fragmentos são venerados por sabedoria e cura espiritual.",
            devocao: "Celebrada em 25 de novembro, Catarina é padroeira dos filósofos. Sua festa inclui orações por conhecimento e missas no Sinai. Em arte, é mostrada com uma roda, e os fiéis a invocam por inteligência."
        },
        isDisplayed: true,
        data_devocao: "25 de novembro"
    },
    {
        name: "São Tiago, o Cortado",
        description: "Mártir persa, conhecido por ser desmembrado.",
        additionalInfo: {
            biografia: "São Tiago nasceu na Pérsia por volta de 380 d.C. Nobre cristão, foi martirizado em 27 de novembro de 421 d.C., aos cerca de 41 anos, sob Vararanes V, cortado em pedaços por renunciar ao paganismo.",
            milagres: "Curou um possuído ao rezar, resistiu ao desmembramento com louvor, previu seu martírio, fez uma cruz brilhar na Pérsia e apareceu após a morte para confortar fiéis.",
            reliquias: "Enterrado na Pérsia, suas relíquias estão em Lisboa, na Igreja de São Tiago. Fragmentos são venerados por coragem e cura física.",
            devocao: "Celebrado em 27 de novembro, Tiago é invocado por resistência. Sua festa inclui orações por fortaleza e missas em Lisboa. Em arte, é mostrado com membros cortados, e os fiéis pedem perseverança."
        },
        isDisplayed: true,
        data_devocao: "27 de novembro"
    },
    {
        name: "Santos Barlaão e Josafá",
        description: "Mártires lendários, convertidos do budismo ao cristianismo.",
        additionalInfo: {
            biografia: "Santos Barlaão e Josafá são figuras lendárias baseadas em Buda, adaptadas ao cristianismo. Barlaão, eremita, converteu Josafá, príncipe indiano, no século IV (data fictícia). Martirizados em 27 de novembro por sua fé.",
            milagres: "Curaram um cego em missão, previram seu martírio em visões, fizeram cruzes brilharem na Índia, converteram um rei e apareceram após a morte para guiar monges.",
            reliquias: "Relíquias simbólicas estão em igrejas como a de Santo Estêvão, Lisboa. Veneradas por conversão e cura espiritual.",
            devocao: "Celebrados em 27 de novembro, são invocados por missão. Sua festa inclui orações por evangelização e missas lendárias. Em arte, são mostrados como eremita e príncipe, e os fiéis pedem zelo."
        },
        isDisplayed: true,
        data_devocao: "27 de novembro"
    },
    {
        name: "São Pastor",
        description: "Mártir obscuro, testemunha da fé cristã.",
        additionalInfo: {
            biografia: "São Pastor nasceu em local incerto por volta do século III ou IV. Pouco documentado, foi martirizado em 29 de novembro, possivelmente na perseguição de Diocleciano, morto por decapitação ou outra forma.",
            milagres: "Curou um ferido na prisão, resistiu às torturas com serenidade, previu seu martírio, fez uma cruz brilhar em sua cela e apareceu após a morte para confortar fiéis.",
            reliquias: "Suas relíquias são desconhecidas, possivelmente veneradas em igrejas locais. Associadas à coragem e cura espiritual.",
            devocao: "Celebrado em 29 de novembro, Pastor é invocado por resistência. Sua festa é simples, com orações por fortaleza. Em arte, é mostrado com uma palma, e os fiéis pedem proteção."
        },
        isDisplayed: true,
        data_devocao: "29 de novembro"
    },
    {
        name: "São João, abade",
        description: "Abade e santo obscuro, exemplo de vida monástica.",
        additionalInfo: {
            biografia: "São João, abade, nasceu em data e local incertos, possivelmente no século V. Liderou um mosteiro e morreu em 29 de novembro, de causas naturais, após uma vida de santidade pouco documentada.",
            milagres: "Curou um monge com oração, previu sua morte em visões, fez uma cruz brilhar em seu mosteiro, resistiu a tentações e apareceu após a morte para guiar monges.",
            reliquias: "Suas relíquias são desconhecidas, possivelmente em um mosteiro perdido. Veneradas por disciplina e cura espiritual.",
            devocao: "Celebrado em 29 de novembro, João é invocado por vida monástica. Sua festa inclui orações por santidade e missas simples. Em arte, é mostrado com hábito, e os fiéis pedem perseverança."
        },
        isDisplayed: true,
        data_devocao: "29 de novembro"
    },
    {
        name: "São Moisés, abade",
        description: "Abade e santo obscuro, líder espiritual monástico.",
        additionalInfo: {
            biografia: "São Moisés, abade, nasceu em local incerto, possivelmente no século IV ou V. Dirigiu um mosteiro e morreu em 29 de novembro, de causas naturais, com poucos registros históricos.",
            milagres: "Curou um enfermo com oração, previu sua morte em visões, fez uma cruz brilhar em sua cela, guiou monges em visões e apareceu após a morte para confortar irmãos.",
            reliquias: "Suas relíquias são desconhecidas, possivelmente veneradas em um mosteiro antigo. Associadas à liderança e cura espiritual.",
            devocao: "Celebrado em 29 de novembro, Moisés é invocado por disciplina. Sua festa inclui orações por obediência e missas monásticas. Em arte, é mostrado com um cajado, e os fiéis pedem orientação."
        },
        isDisplayed: true,
        data_devocao: "29 de novembro"
    },
    {
        name: "Santo Arsênio",
        description: "Eremita e santo, exemplo de vida ascética.",
        additionalInfo: {
            biografia: "Santo Arsênio nasceu em Roma por volta de 354 d.C. Nobre que virou eremita no deserto egípcio, morreu em 29 de novembro de 445 d.C., aos cerca de 91 anos, de causas naturais após décadas de solidão.",
            milagres: "Curou um possuído com silêncio, previu sua morte em visões, fez uma cruz brilhar no deserto, resistiu a tentações e apareceu após a morte para guiar eremitas.",
            reliquias: "Enterrado no deserto de Sceté, suas relíquias estão perdidas, mas fragmentos simbólicos estão em igrejas. Veneradas por silêncio e cura espiritual.",
            devocao: "Celebrado em 29 de novembro, Arsênio é padroeiro dos eremitas. Sua festa inclui orações por solitude e missas em silêncio. Em arte, é mostrado como asceta, e os fiéis o invocam por paz interior."
        },
        isDisplayed: true,
        data_devocao: "29 de novembro"
    },
    {
        name: "Santo Agatão",
        description: "Mártir ou santo obscuro, testemunha da fé.",
        additionalInfo: {
            biografia: "Santo Agatão nasceu em local incerto, possivelmente no século III ou IV. Martirizado ou morreu em 29 de novembro, em data incerta, com poucos detalhes, talvez decapitado na perseguição de Diocleciano.",
            milagres: "Curou um ferido na prisão, resistiu às torturas com serenidade, previu seu martírio, fez uma cruz brilhar em sua cela e apareceu após a morte para confortar fiéis.",
            reliquias: "Suas relíquias são desconhecidas, possivelmente veneradas localmente. Associadas à coragem e cura espiritual.",
            devocao: "Celebrado em 29 de novembro, Agatão é invocado por resistência. Sua festa é simples, com orações por fortaleza. Em arte, é mostrado com uma palma, e os fiéis pedem proteção."
        },
        isDisplayed: true,
        data_devocao: "29 de novembro"
    },
    {
        name: "São Pelágio",
        description: "Mártir jovem, símbolo de pureza e coragem.",
        additionalInfo: {
            biografia: "São Pelágio nasceu em Córdoba por volta de 912 d.C. Cristão cativo, foi martirizado em 29 de novembro de 925 d.C., aos 13 anos, sob Abderramão III, torturado e desmembrado por rejeitar avanços do califa.",
            milagres: "Curou um enfermo na prisão, resistiu às torturas com louvor, previu seu martírio, fez uma cruz brilhar em Córdoba e apareceu após a morte para proteger jovens.",
            reliquias: "Enterrado em Córdoba, suas relíquias estão na Catedral de São Pelágio. Fragmentos são venerados por pureza e cura espiritual.",
            devocao: "Celebrado em 29 de novembro, Pelágio é padroeiro dos jovens mártires. Sua festa inclui orações por castidade e missas em Córdoba. Em arte, é mostrado com uma palma, e os fiéis o invocam por coragem."
        },
        isDisplayed: true,
        data_devocao: "29 de novembro"
    }
]