const dados = {
    servicos: [
        {
            id: 1,
            titulo: "Pulverização Inteligente",
            descricao: "Aplicação precisa com redução de custo e máximo rendimento",
            conteudo: {
                nome: "Pulverização Inteligente",
                descricaoCurta: "Precisão Cirúrgica",
                descricaoCompleta: "O DJI T25 se destaca pela uniformidade e pelo controle de deriva. Ele vem equipado com um sistema de pulverização atomizada por bicos centrífugos duplos, o que garante que as gotas sejam aplicadas no tamanho exato e correto para cada tipo de cultura. O fluxo é ajustado de forma inteligente em tempo real e, graças ao sistema de radar de matriz de fase ativa combinada com a visão binocular, o drone copia o relevo do terreno com precisão milimétrica. Isso garante a dose correta da ponta à raiz, minimizando drasticamente a deriva (o desperdício do produto carregado pelo vento), mesmo em áreas de declive ou formatos irregulares.",
                imagem: "img/img04.jpg",
                banner: "img/img08.jpg",
                categoria: "Tecnologia"
            }
        },
        {
            id: 2,
            titulo: "Monitoramento de Lavouras",
            descricao: "Acompanhe a saúde de sua lavoura em tempo real com Tecnologia avançada",
            conteudo: {
                nome: "Monitoramento de Lavouras",
                descricaoCurta: "Agilidade no Campo",
                descricaoCompleta: "Em termos de rendimento, o T25 impressiona pelo tamanho. Ele consegue cobrir até 12 hectares por hora em operações de pulverização (e cerca de 2,4 toneladas por hora em distribuição de sólidos/grânulos). O tempo de voo por bateria gira em torno de 10 a 12 minutos com o tanque cheio (20 litros para líquidos ou 25 kg para sólidos). O grande segredo operacional: O ciclo de carregamento da bateria com o gerador inteligente EFI leva apenas de 9 a 11 minutos. Isso significa que, operando com duas baterias, você consegue trabalhar de forma contínua (enquanto uma voa, a outra carrega).",
                imagem: "img/img06.jpg",
                banner: "img/img03.jpg",
                categoria: "Operação"
            }
        },
        {
            id: 3,
            titulo: "Terceirização de Serviço",
            descricao: "Melhor qualidade de trabalho para todos envolvidos",
            conteudo: {
                nome: "Terceirização de Serviço",
                descricaoCurta: "Retorno do Investimento",
                descricaoCompleta: "O investimento em um T25 se paga focado em dois pilares: economia de insumos e eliminação do amassamento de safra. Como a aplicação é localizada e ultraprecisa, há uma redução considerável no uso de defensivos e água. Para prestadores de serviço ou produtores de médio porte, o Retorno sobre o Investimento (ROI) costuma acontecer de forma rápida, pois o custo operacional por hectare é muito menor.",
                imagem: "img/img07.jpg",
                banner: "img/img01.jpg",
                categoria: "Financeiro"
            }
        },
        {
            id: 4,
            titulo: "Mapeamento Aéreo",
            descricao: "Mapas com alta precisão para melhor tomada de decisão",
            conteudo: {
                nome: "Mapeamento Aéreo",
                descricaoCurta: "Sustentabilidade Prática",
                descricaoCompleta: "No aspecto ecológico, o T25 cumpre um papel fundamental de mitigação de danos. A tecnologia de bicos centrífugos e o mapeamento de alta precisão reduzem o desperdício de produto químico que evaporaria ou escorreria para o solo de forma desnecessária. Como a deriva é controlada, o risco de contaminação fora da área alvo cai drasticamente. Além disso, por ser um equipamento 100% elétrico, ele elimina as emissões diretas de carbono na lavoura. Gere mapas NDVI, NDRE e de vegetação em alta resolução. Identifique zonas de manejo variável e tome decisões baseadas em dados reais da lavoura.",
                imagem: "img/img05.jpg",
                banner: "img/img09.jpg",
                categoria: "Ambiental"
            }
        },
        {
            id: 5,
            titulo: "Análise de Dados",
            descricao: "Dados inteligentes que geram insights e aumentam sua produtividade",
            conteudo: {
                nome: "Análise de Dados",
                descricaoCurta: "Insights Inteligentes",
                descricaoCompleta: "O DJI T25 foi desenhado para manter o produtor longe de dores de cabeça jurídicas. Como ele possui um peso máximo de decolagem inferior a 150 kg (ele pesa cerca de 25,7 kg sem bateria), ele se enquadra na categoria de Drones Classe 3 da ANAC. Isso facilita muito o processo de registro (SISANT) e os planos de voo no DECEA (SARPAS). Além disso, os sistemas de segurança integrados garantem que a operação cumpra rigidamente os requisitos do MAPA.",
                imagem: "img/img10.jpg",
                banner: "img/img02.jpg",
                categoria: "Tecnologia"
            }
        },
        {
            id: 6,
            titulo: "Distribuição de Sólidos",
            descricao: "Aplicação uniforme de fertilizantes e sementes com precisão",
            conteudo: {
                nome: "Distribuição de Sólidos",
                descricaoCurta: "Eficiência em Granulados",
                descricaoCompleta: "Distribuição precisa de fertilizantes, sementes e defensivos granulados com capacidade de 25 kg por voo. Controle total de taxa de aplicação por zona.",
                imagem: "img/img11.jpg",
                banner: "img/img04.jpg",
                categoria: "Operação"
            }
        }
    ],

    metricas: {
        cobertura: "40ha/dia",
        precisao: "98%",
        economia: "30%",
        velocidade: "15km/h"
    },
};

// Renderização dos cards na Home
const container = document.getElementById("servicos-container");
if (container) {
    container.innerHTML = '';
    dados.servicos.forEach(servico => {
        const info = servico.conteudo;
        container.innerHTML += `
            <div class="col-md-6 col-lg-4 mb-4">
                <article class="service-card h-100">
                    <img src="${info.imagem}" alt="${servico.titulo}">
                    <div class="service-content">
                        <span>${info.categoria}</span>
                        <h3>${servico.titulo}</h3>
                        <p>${servico.descricao}</p>
                        <a href="detalhes.html?id=${servico.id}" class="btn btn-hero">Ver detalhes</a>
                    </div>
                </article>
            </div>
        `;
    });
}

// Página de Detalhes
const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));

if (id) {
    const servicoEncontrado = dados.servicos.find(s => s.id === id);
    if (servicoEncontrado) {
        const info = servicoEncontrado.conteudo;

        // Banner
        const bannerEl = document.getElementById("banner-detalhe");
        if (bannerEl) {
            bannerEl.style.backgroundImage = `linear-gradient(rgba(0,0,0,.7), rgba(0,0,0,.8)), url(${info.banner})`;
            bannerEl.style.backgroundSize = "cover";
            bannerEl.style.backgroundPosition = "center";
        }
        if(document.getElementById("titulo-servico")) document.getElementById("titulo-servico").textContent = servicoEncontrado.titulo;
        if(document.getElementById("descricao-servico")) document.getElementById("descricao-servico").textContent = servicoEncontrado.descricao;
        if(document.getElementById("categoria-servico")) document.getElementById("categoria-servico").textContent = info.categoria;
        if(document.getElementById("titulo-detalhe")) document.getElementById("titulo-detalhe").textContent = info.nome;
        if(document.getElementById("texto-detalhe")) document.getElementById("texto-detalhe").textContent = info.descricaoCompleta;
        if(document.getElementById("imagem-detalhe")) document.getElementById("imagem-detalhe").src = info.imagem;

        // Métricas
        if(document.getElementById("metric-cobertura")) document.getElementById("metric-cobertura").textContent = dados.metricas.cobertura;
        if(document.getElementById("metric-precisao")) document.getElementById("metric-precisao").textContent = dados.metricas.precisao;
        if(document.getElementById("metric-economia")) document.getElementById("metric-economia").textContent = dados.metricas.economia;
        if(document.getElementById("metric-velocidade")) document.getElementById("metric-velocidade").textContent = dados.metricas.velocidade;

        }}