# Trabalho Prático - Semana 11

Nesta atividade, vamos dar continuidade ao projeto desenvolvido ao longo deste semestre, acrescentando a página de detalhes da aplicação.

Imagine que a página principal (home-page) mostre uma visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado para a página de detalhes. A página de detalhes vai mostrar todas as informações sobre o item do seu projeto, seja esse item uma notícia, filme, receita, lugar turístico ou evento.

## Informações Gerais

- Nome: Marina Borges Bonomo de Matos
- Matrícula: 1638578
- Descreva brevemente seu projeto: Site institucional da empresa BIOTERRA voltada para soluções agrícolas utilizando drones.

## Prints do trabalho

<<   IMAGEM - HOME-PAGE -  >>
![IMAGEM](/public/img/paginahome.png)

<<   IMAGEM - TELA DE DETALHES -  >>
![IMAGEM](/public/img/paginadetalhes.png)

## Dados em JSON
Inclua abaixo a estrutura de dados definida para o seu projeto, apresentando pelo menos dois exemplos de registros em formato JSON.

```json
{
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
        }
    ],
     metricas: {
        cobertura: "40ha/dia",
        precisao: "98%",
        economia: "30%",
        velocidade: "15km/h"
    },
}
}
```


