let cidades = [
  {
    cidade: "Recife",
    descricao:
      "Recife, a Veneza Brasileira, é um destino que encanta com sua rica história, cultura vibrante e paisagens deslumbrantes. A cidade oferece uma mistura única de construções coloniais, praias exuberantes e uma culinária deliciosa. Se você busca sol, mar, história e muita animação, Recife é o lugar ideal para você!",
    imagem: "recife2.jpg",
    hoteis: [
      {
        nome: "Rede Andrade LG Inn Hotel",
        imagem: "andrade.jpg",
        link: "https://www.google.com/travel/hotels/entity/CgoImJjauuLl5uUzEAE?ts=CAEaIAoCGgASGhIUCgcI6A8QCRgIEgcI6A8QCRgJGAEyAhAAKgkKBToDQlJMGgA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjojcK1nK-IAxUAAAAAHQAAAAAQBA",
        site: "https://www.redeandradelginn.com.br/",
        valor: "R$ 132,00",
        familia: true,
        acessibilidade: false,
        pet: true,
        estrelas: 3,
      },
      {
        nome: "Rede Andrade Vela Branca Hotel",
        imagem: "branca.webp",
        link: "https://www.google.com/travel/hotels/entity/CgoItMqUu46OlIM5EAE?ts=CAEaIAoCGgASGhIUCgcI6A8QCRgIEgcI6A8QCRgJGAEyAhAAKgkKBToDQlJMGgA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjoiKypnq-IAxUAAAAAHQAAAAAQBA",
        site: "https://redeandradevelabranca.com.br/",
        valor: "R$ 106,00",
        familia: false,
        acessibilidade: false,
        pet: true,
        estrelas: 3,
      },
      {
        nome: "Navegantes Praia Hotel",
        imagem: "navegantes.webp",
        link: "https://www.google.com/travel/hotels/entity/CgoIlKbSypafxtAmEAE?ts=CAEaIAoCGgASGhIUCgcI6A8QCRgIEgcI6A8QCRgJGAEyAhAAKgkKBToDQlJMGgA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwiAzZ6-n6-IAxUAAAAAHQAAAAAQBA",
        site: "https://www.navegantespraiahotel.com.br/",
        valor: "R$ 119,00",
        familia: false,
        acessibilidade: false,
        pet: true,
        estrelas: 2,
      },
      {
        nome: "Mercure Recife Navegantes Hotel",
        imagem: "mercure.webp",
        link: "https://www.google.com/travel/hotels/entity/CgsItuGQ4MK2_YqRARAB?ts=CAEaIAoCGgASGhIUCgcI6A8QCRgIEgcI6A8QCRgJGAEyAhAAKgkKBToDQlJMGgA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwigq93JoK-IAxUAAAAAHQAAAAAQBA",
        site: "https://mercure-recife-navegantes.recife-hotels-br.com/pt/",
        valor: "R$ 212,00",
        familia: true,
        acessibilidade: true,
        pet: false,
        estrelas: 4,
      },
      {
        nome: "ibis Recife Boa Viagem",
        imagem: "ibis.webp",
        link: "https://www.google.com/travel/hotels/entity/CgoI4d2wh8i7qvhvEAE?ts=CAEaIAoCGgASGhIUCgcI6A8QCRgIEgcI6A8QCRgJGAEyAhAAKgkKBToDQlJMGgA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwiI_evHoa-IAxUAAAAAHQAAAAAQBA",
        site: "https://all.accor.com/ssr/app/accor/rates/6000/index.pt-br.shtml?compositions=1&dateIn=2024-09-06&nights=1&facets=ibh&hideHotelDetails=false&hideWDR=false&destination=recife-state-of-pernambuco-brazil&utm_campaign=ppc-ibi-mar-goo-br-pt-dom_top-mix-se&utm_content=br-pt-BR-V6849&utm_medium=cpc&utm_source=google&utm_term=mar",
        valor: "R$ 222,00",
        familia: false,
        acessibilidade: true,
        pet: true,
        estrelas: 3,
      },
    ],
    restaurantes: [
      {
        nome: "Camarada Camarão",
        link: "https://www.instagram.com/camaradacamarao/",
        endereco:
          "https://www.google.com/maps/search/camarada+camarao+recife/@-8.1181434,-34.9432702,14z?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
        imagem: "camarada.png",
        familia: false,
        pet: false,
        acessibilidade: true,
        descricao:
          "Especializado em frutos do mar, o Camarada Camarão é um clássico da culinária pernambucana. Os pratos são generosos e saborosos, e o ambiente é descontraído.",
      },
      {
        nome: "Bode do Nô",
        link: "https://www.instagram.com/bodedono/",
        endereco:
          "https://www.google.com/maps/place/Bode+do+N%C3%B4+Boa+Viagem/@-8.1245297,-34.9092765,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab1fb36def056f:0x22574d1a07db0960!8m2!3d-8.124535!4d-34.9044109!16s%2Fg%2F11c5h44gpw?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
        imagem: "bode.jpeg",
        familia: false,
        pet: false,
        acessibilidade: true,
        descricao:
          "Conhecido por seus pratos à base de bode, o Bode do Nô é uma experiência única para quem quer experimentar a culinária regional. O ambiente é tradicional e aconchegante.",
      },
      {
        nome: "Entre Amigos Praia",
        link: "https://www.instagram.com/praiaentreamigos/",
        endereco:
          "https://www.google.com/maps/place/Entre+Amigos+Praia/@-8.0982434,-34.8866558,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab18c1ca51271b:0x362a194821a415eb!8m2!3d-8.0982487!4d-34.8840755!16s%2Fg%2F1td42pv5?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
        imagem: "amigos.jpeg",
        familia: false,
        pet: false,
        acessibilidade: true,
        descricao:
          "Localizado na praia de Boa Viagem, o Entre Amigos Praia oferece um ambiente sofisticado e uma vista privilegiada do mar. O cardápio é variado, com opções de frutos do mar, carnes e massas.",
      },
      {
        nome: "Parraxaxá",
        link: "https://www.instagram.com/parraxaxa/",
        endereco:
          "https://www.google.com/maps/place/Restaurante+Parraxax%C3%A1+Casa+Forte/@-8.0381683,-34.9881168,13z/data=!3m1!5s0x7ab19012db1b67b:0x51c00422933c1631!4m10!1m2!2m1!1sparraxaxa!3m6!1s0x7ab19012db68f37:0x19a5dffb88c37efa!8m2!3d-8.0381683!4d-34.9118991!15sCglwYXJyYXhheGEiA4gBAVoLIglwYXJyYXhheGGSARdzZWxmX3NlcnZpY2VfcmVzdGF1cmFudOABAA!16s%2Fg%2F1yfdpbn5x?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
        imagem: "parraxaxa.jpeg",
        familia: true,
        pet: false,
        acessibilidade: true,
        descricao:
          "O Parraxaxá é um restaurante que oferece um buffet variado com pratos típicos da culinária nordestina. O ambiente é decorado com artesanatos locais e a comida é saborosa e farta.",
      },
      {
        nome: "Lupi Pizzeria",
        link: "https://www.instagram.com/lupipizzeria/",
        endereco:
          "https://www.google.com/maps/place/Pizzaria+Lupi/@-8.1341415,-34.9083876,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab1f360690f32d:0x46e6ca90f551912c!8m2!3d-8.1341468!4d-34.9058073!16s%2Fg%2F11fqzhhg5s?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
        imagem: "lupi.jpeg",
        familia: false,
        pet: false,
        acessibilidade: true,
        descricao:
          "Se você é fã de pizza, a Lupi Pizzeria é uma ótima opção. A massa é artesanal e os ingredientes são frescos, resultando em pizzas saborosas e com um toque especial.",
      },
    ],
    atividades: [
      {
        nome: "Recife Antigo e Marco Zero",
        imagem: "marco-zero.png",
        familia: true,
        acessibilidade: true,
        pet: true,
        descricao:
          "Um passeio por um dos centros históricos mais charmosos do Brasil, com casarões coloniais, igrejas barrocas e a famosa Praça do Marco Zero, símbolo da cidade.",
        link: "https://visit.recife.br/o-que-fazer/atracoes/parques-e-pracas/praca-do-marco-zero",
        endereco:
          "https://www.google.com/maps/place/Pra%C3%A7a+do+Marco+Zero/@-8.0631425,-34.8737195,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab18a48f03c145:0xef4ac38fd080a24!8m2!3d-8.0631478!4d-34.8711392!16s%2Fg%2F12yygfcz1?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        nome: "Paço do Frevo",
        imagem: "paco-frevo.png",
        familia: true,
        acessibilidade: true,
        pet: false,
        descricao:
          "Um museu dedicado ao frevo, um ritmo musical típico de Pernambuco. O visitante pode conhecer a história do ritmo, interagir com instrumentos musicais e assistir a apresentações.",
        link: "https://visit.recife.br/o-que-fazer/atracoes/museus/paco-do-frevo",
        endereco:
          "https://www.google.com/maps/place/Pa%C3%A7o+do+Frevo/@-8.0614339,-34.8741204,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab18a36b5ed785:0xaca9c7fdd427b964!8m2!3d-8.0614392!4d-34.8715401!16s%2Fg%2F11byxg1b5c?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        nome: "Praia de Boa Viagem",
        imagem: "boa-viagem.webp",
        familia: true,
        acessibilidade: true,
        pet: true,
        descricao:
          "Uma das praias mais famosas de Recife, com águas mornas e calmas, ideal para um dia de sol e relaxamento.",
        link: "https://www.voltologo.net/praia-de-boa-viagem/",
        endereco:
          "https://www.google.com/maps/place/Praia+de+Boa+Viagem/@-8.1308388,-34.9187405,14z/data=!3m1!4b1!4m6!3m5!1s0x7ab1f0bc42e306d:0x2bf385bd7cec6239!8m2!3d-8.11807!4d-34.8932392!16s%2Fg%2F120v12mm?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        nome: "Instituto Ricardo Brennand",
        imagem: "instituto.jpg",
        familia: true,
        acessibilidade: true,
        pet: false,
        descricao:
          "Um complexo cultural com um acervo impressionante de arte, arqueologia e história. O visitante pode conhecer a coleção particular de Ricardo Brennand, que inclui esculturas, pinturas e objetos antigos.",
        link: "https://pt.wikipedia.org/wiki/Instituto_Ricardo_Brennand",
        endereco:
          "https://www.google.com/maps/place/Instituto+Ricardo+Brennand/@-8.0663184,-34.965838,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab1be5b258dc45:0xcba66c54ffed227a!8m2!3d-8.0663237!4d-34.9632577!16s%2Fm%2F0267t_x?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        nome: "Oficina Cerâmica Francisco Brennand",
        imagem: "oficina.jpg",
        familia: true,
        acessibilidade: true,
        pet: false,
        descricao:
          "Um espaço dedicado à produção de cerâmica, com obras de arte espalhadas por todo o terreno. O visitante pode conhecer o processo de criação das peças e apreciar a beleza da cerâmica brasileira.",
        link: "https://oficinafranciscobrennand.org.br/",
        endereco:
          "https://www.google.com/maps/place/Oficina+Francisco+Brennand/@-8.0527608,-34.9763256,17z/data=!3m1!4b1!4m6!3m5!1s0x7ab1bb18f522789:0x1354cbbde16d3cfa!8m2!3d-8.0527661!4d-34.9737453!16s%2Fg%2F11cnc9knj2?entry=ttu&g_ep=EgoyMDI0MDkwNC4wIKXMDSoASAFQAw%3D%3D",
      },
    ],
  },
  {
    cidade: "Fortaleza",
    descricao:
      "Fortaleza, a capital do Ceará, é uma cidade vibrante e acolhedora que encanta a todos que a visitam. Com um clima tropical privilegiado, belas praias, uma rica cultura e uma gastronomia saborosa, Fortaleza é um dos destinos turísticos mais populares do Brasil. A cidade oferece uma variedade de atrações, desde os famosos beach clubs e restaurantes à beira-mar até museus, centros culturais e parques. A vida noturna é agitada, com diversas opções de bares e casas de shows. Além disso, a hospitalidade dos fortalezenses é um dos grandes destaques da cidade.",
    imagem: "fortaleza.jpg",
    hoteis: [
      {
        nome: "Iate Plaza Hotel",
        imagem: "iate.jpg",
        link: "https://www.google.com/travel/hotels/entity/CgsI_dy82ofmitS5ARAB?ts=CAEaIAoCGgASGhIUCgcI6A8QCRgHEgcI6A8QCRgIGAEyAhAAKgkKBToDQlJMGgA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwiAzI7Gja2IAxUAAAAAHQAAAAAQBA",
        site: "https://iateplaza.com.br/",
        valor: "R$ 270,00",
        familia: true,
        acessibilidade: false,
        pet: true,
        estrelas: 4,
      },
      {
        nome: "Ibis Budget Fortaleza Praia De Iracema",
        imagem: "ibis.webp",
        link: "https://www.google.com/travel/hotels/entity/CgoIvIrQkN-O3MITEAE?ts=CAEaIAoCGgASGhIUCgcI6A8QCRgHEgcI6A8QCRgIGAEyAhAAKgkKBToDQlJMGgA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwiQlv2Aj62IAxUAAAAAHQAAAAAQBA",
        site: "https://all.accor.com/ssr/app/ibis/rates/9325/index.pt.shtml?compositions=1&dateIn=2024-09-06&nights=1&facets=ibb&hideHotelDetails=false&hideWDR=false&destination=fortaleza-ceara-brazil&utm_campaign=ppc-ibb-mar-goo-br-pt-dom_top-mix-se&utm_content=br-pt-BR-V6235&utm_medium=cpc&utm_source=google&utm_term=mar",
        valor: "R$ 210,00",
        familia: false,
        acessibilidade: true,
        pet: false,
        estrelas: 2,
      },
      {
        nome: "Algarve Praia Hotel",
        imagem: "algarve.webp",
        link: "https://www.google.com/travel/hotels/entity/CgsInP_9z-nI0KmlARAB?ts=CAEaIAoCGgASGhIUCgcI6A8QCRgHEgcI6A8QCRgIGAEyAhAAKgkKBToDQlJMGgA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjo59_7kq2IAxUAAAAAHQAAAAAQBA",
        site: "https://algarvepraiahotel.com/",
        valor: "R$ 134,00",
        familia: true,
        acessibilidade: false,
        pet: false,
        estrelas: 2,
      },
      {
        nome: "Angra Praia Hotel",
        imagem: "angra.webp",
        link: "https://www.google.com/travel/hotels/entity/CgoIqsGrwaryh_JREAE?ts=CAEaIAoCGgASGhIUCgcI6A8QCRgHEgcI6A8QCRgIGAEyAhAAKgkKBToDQlJMGgA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjA5qvYk62IAxUAAAAAHQAAAAAQCA",
        site: "https://angra-praia.hotels-in-fortaleza.com/pt/",
        valor: "156,00",
        familia: true,
        acessibilidade: true,
        pet: false,
        estrelas: 3,
      },
      {
        nome: "Hotel Litoral Fortaleza",
        imagem: "litoral.webp",
        link: "https://www.google.com/travel/hotels/entity/CgsIotPql9CX_8zXARAB?ts=CAEaIAoCGgASGhIUCgcI6A8QCRgHEgcI6A8QCRgIGAEyAhAAKgkKBToDQlJMGgA&utm_campaign=sharing&utm_medium=link&utm_source=htls&ved=0CAAQ5JsGahcKEwjIqvXxlK2IAxUAAAAAHQAAAAAQBA",
        site: "https://www.hotellitoralfortaleza.com.br/",
        valor: "R$ 201,00",
        familia: true,
        acessibilidade: false,
        pet: false,
        estrelas: 3,
      },
    ],
    restaurantes: [
      {
        nome: "Coco Bambu",
        link: "https://www.instagram.com/cocobambumeireles/",
        imagem: "coco.jpeg",
        endereco:
          "https://www.google.com.br/maps/place//@-5.1435472,-38.0948752,15z/data=!3m1!4b1?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        descricao:
          "Um dos restaurantes mais famosos de Fortaleza, conhecido por sua culinária impecável e ambiente elegante.",
        familia: true,
        pet: false,
        acessibilidade: true,
      },
      {
        nome: "Moleskine Gastrobar",
        link: "https://www.instagram.com/moleskinegastrobar/",
        imagem: "moleskine.jpg",
        endereco:
          "https://www.google.com/maps/place/Moleskine+Gastrobar/@-3.7345842,-38.4941223,17z/data=!4m15!1m8!3m7!1s0x7c7487dc81df71b:0x40871b167a70a6eb!2sR.+Prof.+Dias+da+Rocha,+578+-+Meireles,+Fortaleza+-+CE,+60170-310!3b1!8m2!3d-3.7345896!4d-38.491542!16s%2Fg%2F11bw3yl49s!3m5!1s0x7c7487dcb693547:0x7a3d527386ee296!8m2!3d-3.7345934!4d-38.4915352!16s%2Fg%2F11b6g99vmq?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        descricao:
          "Um menu que mistura ingredientes locais e influências internacionais. Perfeito para quem busca uma experiência gastronômica contemporânea.",
        familia: false,
        pet: false,
        acessibilidade: true,
      },
      {
        nome: "Quintal da Varjota",
        link: "https://cardapio.menu/restaurants/fortaleza/quintal-da-varjota-em-fortaleza#google_vignette",
        imagem: "quintal.jpeg",
        endereco:
          "https://www.google.com/maps/place/Quintal+da+Varjota+%7C+Restaurante+em+Fortaleza/@-3.7292238,-38.4918312,17z/data=!3m1!4b1!4m6!3m5!1s0x7c748799412a763:0xf0fc6cb4c30aa1e2!8m2!3d-3.7292292!4d-38.4892509!16s%2Fg%2F11bxgv702l?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        descricao:
          "Um menu variado que inclui pratos típicos e contemporâneos. Ideal para quem busca um ambiente familiar e descontraído.",
        familia: true,
        pet: true,
        acessibilidade: true,
      },
      {
        nome: "Villa Restaurante",
        link: "https://www.instagram.com/_villarestaurante/",
        imagem: "villa.jpeg",
        endereco:
          "https://www.google.com/maps/place/Villa+Restaurante/@-3.7360616,-38.4983372,17z/data=!3m1!4b1!4m6!3m5!1s0x7c749c5e90c15b3:0x6660321bc0f23e7d!8m2!3d-3.736067!4d-38.4957569!16s%2Fg%2F11vbjf2xq2?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        descricao:
          "Um dos restaurantes mais exclusivos de Fortaleza, com um menu degustação que surpreende a cada temporada. Ideal para ocasiões especiais e celebrações.",
        familia: false,
        pet: false,
        acessibilidade: true,
      },
      {
        nome: "Carneiro do Ordones",
        link: "https://www.instagram.com/carneirodoordonesoriginal/",
        imagem: "ordones.png",
        endereco:
          "https://www.google.com/maps/place/Carneiro+do+Ordones/@-3.7350354,-38.6255722,13z/data=!3m1!5s0x7c749751fbb9d85:0x963400937ed12d87!4m10!1m2!2m1!1sCarneiro+do+Ordones!3m6!1s0x7c7497523c8b26d:0x7e14446cb438ab77!8m2!3d-3.7350354!4d-38.5493545!15sChNDYXJuZWlybyBkbyBPcmRvbmVzWhUiE2Nhcm5laXJvIGRvIG9yZG9uZXOSAQpyZXN0YXVyYW504AEA!16s%2Fg%2F1tk9qz_w?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
        descricao:
          "Uma experiência gastronômica única, com um cardápio que celebra a culinária cearense. Ideal para quem busca um ambiente mais informal e quer experimentar os sabores da região.",
        familia: true,
        pet: true,
        acessibilidade: true,
      },
    ],
    atividades: [
      {
        nome: "Praia do Futuro",
        imagem: "futuro.jpeg",
        familia: true,
        acessibilidade: true,
        pet: true,
        descricao:
          "A praia mais famosa de Fortaleza, com uma infraestrutura completa de bares, restaurantes e hotéis. Ideal para quem busca diversão e agito.",
        link: "https://pt.wikipedia.org/wiki/Praia_do_Futuro",
        endereco:
          "https://www.google.com/maps/place/Praia+do+Futuro/@-3.739178,-38.4922009,13z/data=!3m1!4b1!4m6!3m5!1s0x7c747be96378151:0x566f88a305935f84!8m2!3d-3.7492867!4d-38.4470984!16s%2Fg%2F1s067bqdz?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        nome: "Centro Dragão do Mar de Arte e Cultura",
        imagem: "centro.jpeg",
        familia: true,
        acessibilidade: true,
        pet: false,
        descricao:
          "Um dos principais centros culturais do Nordeste, com uma programação variada de exposições, shows e oficinas. Ideal para quem busca cultura e lazer.",
        link: "https://pt.wikipedia.org/wiki/Centro_Drag%C3%A3o_do_Mar_de_Arte_e_Cultura",
        endereco:
          "https://www.google.com/maps/place/Centro+Drag%C3%A3o+do+Mar+de+Arte+e+Cultura/@-3.7211171,-38.5226688,17z/data=!3m1!4b1!4m6!3m5!1s0x7c748493b3c94a9:0xb09caf7194866252!8m2!3d-3.7211225!4d-38.5200885!16zL20vMGRnY2Iw?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        nome: "Mercado Central de Fortaleza",
        imagem: "mercado.jpeg",
        familia: true,
        acessibilidade: true,
        pet: false,
        descricao:
          "Um lugar perfeito para conhecer a cultura local e comprar lembrancinhas.",
        link: "https://pt.wikipedia.org/wiki/Mercado_Central_de_Fortaleza",
        endereco:
          "https://www.google.com/maps/place/Mercado+Central+de+Fortaleza/@-3.7235263,-38.5266211,17z/data=!3m1!4b1!4m6!3m5!1s0x7c7484b8840959b:0x6ed535a1099961fd!8m2!3d-3.7235317!4d-38.5240408!16s%2Fg%2F120m1dg2?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        nome: "Passeio Público",
        imagem: "passeio.jpg",
        familia: true,
        acessibilidade: true,
        pet: true,
        descricao:
          "Um lugar tranquilo para relaxar e apreciar a natureza no centro da cidade.",
        link: "https://www.tripadvisor.com.br/Attraction_Review-g303293-d4586490-Reviews-Passeio_Publico-Fortaleza_State_of_Ceara.html",
        endereco:
          "https://www.google.com/maps/place/R.+Dr.+Jo%C3%A3o+Moreira+-+Centro,+Fortaleza+-+CE,+60030-000/@-3.7227994,-38.529562,17z/data=!3m1!4b1!4m6!3m5!1s0x7c749b34e837a79:0x21eef7a355d7bbbf!8m2!3d-3.7228048!4d-38.5269817!16s%2Fg%2F1ymtj1y76?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
      },
      {
        nome: "Praia de Iracema",
        imagem: "iracema.jpeg",
        familia: true,
        acessibilidade: true,
        pet: true,
        descricao:
          "Uma praia ideal para quem busca diversão e agito, com diversas opções de restaurantes e bares.",
        link: "https://pt.wikipedia.org/wiki/Praia_de_Iracema",
        endereco:
          "https://www.google.com/maps/place/Praia+de+Iracema/@-3.7200362,-38.5180774,16z/data=!4m10!1m2!2m1!1spraia+de+iracema!3m6!1s0x7c74841ba67de31:0xef2de945119c588f!8m2!3d-3.7190976!4d-38.5122545!15sChBwcmFpYSBkZSBpcmFjZW1hkgEFYmVhY2jgAQA!16s%2Fm%2F0g55kpy?entry=ttu&g_ep=EgoyMDI0MDkwMy4wIKXMDSoASAFQAw%3D%3D",
      },
    ],
  },
];
