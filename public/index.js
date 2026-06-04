const dados = {
    becos: [
    {
      id: 1,
      nome: "Beco do Batman",
      cidade: "São Paulo, SP",
      descricao: "Um dos pontos mais icônicos de street art do Brasil. O beco vive mudando com novos grafites.",
      imagem: 'img/batam.jpg',
      imagens:[
        'img/batam(1).jpg',
        'img/batam(2).png',
        'img/batam(3).jpg'
      ],
      ano: 2010,
      destaque: "Arte Urbana"
    },
    {
      id: 2,
      nome: "Beco das Garrafas",
      cidade: "Rio de Janeiro, RJ",
      descricao: "Berço da Bossa Nova. Lugar onde grandes nomes da música brasileira começaram.",
      imagem: 'img/Beco-das-Garrafas.jpg',
      imagens:[
        'img/beco-das-garrafas (1).jpg',
        'img/beco-das-garrafas(2).jpg',
        'img/beco-das-garrafas(3).jpg'
      ],
      ano: 1950,
      destaque: "Histórico / Musical"
    },
    {
      id: 3,
      nome: "Callejón del Beso",
      cidade: "Guanajuato, México",
      descricao: "Um dos becos mais estreitos e românticos do mundo, com uma bela lenda.",
      imagem: 'img/beso.jpg',
      imagens:[
        'img/beso(1).jpg',
        'img/beso(2).jpg',
        'img/beso(3).jpg'
      ],
      ano: 1700,
      destaque: "Romântico"
    },
    {
      id: 4,
      nome: "Beco Catarina Mina",
      cidade: "São Luís, MA",
      descricao: "Um dos becos mais charmosos do centro histórico de São Luís, com casarões coloniais azulejados e uma atmosfera única.",
      imagem: 'img/luis.jpg',
      imagens: [
       'img/luis(1).jpg',
       'img/luis(2).jpg',
       'img/luis(3).jpg'
      ],
      ano: "1800",
      destaque: "Colonial"
    },
    {
      id: 5,
      nome: "Golden Gai",
      cidade: "Tóquio, Japão",
      descricao: "Uma rede de vielas estreitas com mais de 200 bares minúsculos. Um dos lugares mais autênticos e vibrantes de Shinjuku.",
      imagem: 'img/dai.jpg',
      imagens: [
        'img/dai(1).jpg',
        'img/dai(2).jpg',
        'img/dai(3).jpg'
      ],
      "ano": "1950",
      "destaque": "Noite e Cultura"
    },
    {
    id: 6,
    nome: "Rua do Amendoim",
    cidade: "Salvador, BA",
    descricao: "Uma estreita passagem histórica cercada por casarões coloniais e manifestações culturais do Pelourinho.",
    imagem: "img/amendoim.jpg",
    imagens: [
        'img/amendoim(1).jpg',
        'img/amendoim(2).jpg',
        'img/amendoim(3).jpg'
    ],
    ano: 1800,
    destaque: "Cultura Baiana"
    },
    {
    id: 7,
    nome: "Fan Tan Alley",
    cidade: "Victoria, Canadá",
    descricao: "Considerado um dos becos mais estreitos da América do Norte, repleto de pequenas lojas e cafés.",
    imagem: "img/fantan.jpg",
    imagens: [
        "img/fantan(1).jpg",
        "img/fantan(2).jpg",
        "img/fantan(3).jpg"
    ],
    ano: 1880,
    destaque: "Turístico"
    },
    {
    id: 8,
    nome: "Hosier Lane",
    cidade: "Melbourne, Austrália",
    descricao: "Famoso por seus murais e grafites, é um dos maiores símbolos da arte urbana australiana.",
    imagem: "img/hosier.jpg",
    imagens: [
        "img/hosier(1).jpg",
        "img/hosier(2).jpg",
        "img/hosier(3).jpg"
    ],
    ano: 1990,
    destaque: "Street Art"
    },
    {
    id: 9,
    nome: "Beco da Codorna",
    cidade: "Goiânia, GO",
    descricao: "Galeria a céu aberto que reúne artistas urbanos e coloridos murais de grafite.",
    imagem: "img/codorna.jpg",
    imagens: [
        "img/codorna(1).jpg",
        "img/codorna(2).jpg",
        "img/codorna(3).jpg"
    ],
    ano: 2015,
    destaque: "Arte Urbana"
    },
    {
    id: 10,
    nome: "The Shambles",
    cidade: "York, Inglaterra",
    descricao: "Rua medieval estreita e preservada que inspirou cenários de fantasia e encanta visitantes.",
    imagem: "img/shambles.jpg",
    imagens: [
        "img/shambles(1).jpg",
        "img/shambles(2).jpg",
        "img/shambles(3).jpg"
    ],
    ano: 1400,
    destaque: "Medieval"
    }

    ]
}

// Carregar dados
async function carregarDados() {
    becos = dados.becos
}

// Criar Card
function criarCard(beco) {
    const card = document.createElement('div');
    card.className = 'card'
    
    card.innerHTML = `
        <img src="${beco.imagem}" alt="${beco.nome}">
        <div class="card-content">
            <h3>${beco.nome}</h3>
            <p class="cidade">${beco.cidade}</p>
            <p class="destaque">${beco.destaque}</p>
        </div>
    `

    card.addEventListener('click', () => {
        window.location.href = `detalhes.html?id=${beco.id}`
    })

    return card
}

// Página de Detalhes
function renderizarDetalhes() {
    const params = new URLSearchParams(window.location.search)
    const id = parseInt(params.get('id'))

    const beco = becos.find(b => b.id === id)
    if (!beco) {
        document.querySelector('main').innerHTML = `<h2 style="text-align:center; margin-top:100px;">Beco não encontrado </h2>`
        return
    }

    document.title = `${beco.nome} | Becos & Vielas`
    document.getElementById('beco-imagem').src = beco.imagem
    document.getElementById('beco-nome').textContent = beco.nome
    document.getElementById('beco-cidade').textContent = beco.cidade
    document.getElementById('beco-descricao').textContent = beco.descricao
    document.getElementById('beco-ano').textContent = beco.ano
    document.getElementById('beco-destaque').textContent = beco.destaque

    const galeria = document.getElementById('galeria');

    if (galeria) {
        galeria.innerHTML = '';

        beco.imagens.forEach(img => {
            const imagem = document.createElement('img');
            imagem.src = img;
            imagem.alt = beco.nome;
            galeria.appendChild(imagem);
        });
    }

    // Sugestões aleatórias 
    const sugestoesContainer = document.getElementById('sugestoes-container')
    sugestoesContainer.innerHTML = ''

    const outros = becos.filter(b => b.id !== id);
    const aleatorios = outros.sort(() => Math.random() - 0.5).slice(0, 3)

    aleatorios.forEach(beco => {
        sugestoesContainer.appendChild(criarCard(beco))
    })
}

// Renderizar Carrossel e Grid
function renderizarCarrossel() {
    const track = document.getElementById('carousel-track')
    if (!track) return
    track.innerHTML = ''
    becos.slice(0, 6).forEach(beco => track.appendChild(criarCard(beco)))
}

function renderizarGrid() {
    const container = document.getElementById('becos-container')
    if (!container) return
    container.innerHTML = ''
    becos.forEach(beco => container.appendChild(criarCard(beco)))
}

function configurarCarrossel() {
    const track = document.getElementById('carousel-track')
    const prevBtn = document.getElementById('prev-btn')
    const nextBtn = document.getElementById('next-btn')

    if (!track || !prevBtn || !nextBtn) return

    const scrollAmount = 340
    prevBtn.addEventListener('click', () => track.scrollBy({ left: -scrollAmount, behavior: 'smooth' }))
    nextBtn.addEventListener('click', () => track.scrollBy({ left: scrollAmount, behavior: 'smooth' }))
}

// Inicialização
document.addEventListener('DOMContentLoaded', async () => {
    await carregarDados()

    if (window.location.pathname.includes('detalhes.html')) {
        renderizarDetalhes()
    } else {
        renderizarCarrossel()
        renderizarGrid()
        configurarCarrossel()
    }
})