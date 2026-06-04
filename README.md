# Trabalho Prático - Semana 11

Nesta atividade, vamos dar continuidade ao projeto desenvolvido ao longo deste semestre, acrescentando a página de detalhes da aplicação.

Imagine que a página principal (home-page) mostre uma visão dos vários itens que existem no seu site. Ao clicar em um item, você é direcionado para a página de detalhes. A página de detalhes vai mostrar todas as informações sobre o item do seu projeto, seja esse item uma notícia, filme, receita, lugar turístico ou evento.

## Informações Gerais

- Nome: Marina Borges Bonomo de Matos
- Matrícula: 1638578
- Descreva brevemente seu projeto: Site de turismo voltado para recomendações de becos.

## Prints do trabalho

<<   IMAGEM - HOME-PAGE -  >>
![IMAGEM](/public/img/detalhes.png)

<<   IMAGEM - TELA DE DETALHES -  >>
![IMAGEM](/public/img/home.png)

## Dados em JSON
Inclua abaixo a estrutura de dados definida para o seu projeto, apresentando pelo menos dois exemplos de registros em formato JSON.

```json

{
  "becos": [
    {
      "id": 1,
      "nome": "Beco do Batman",
      "cidade": "São Paulo, SP",
      "descricao": "Um dos pontos mais icônicos de street art do Brasil. O beco vive mudando com novos grafites.",
      "imagem": "assets/images/beco-batman.jpg",
      "imagens":[
        'img/batam(1).jpg',
        'img/batam(2).png',
        'img/batam(3).jpg'
      ],
      "ano": "2010",
      "destaque": "Arte Urbana"
    },
    {
      "id": 2,
      "nome": "Beco das Garrafas",
      "cidade": "Rio de Janeiro, RJ",
      "descricao": "Berço da Bossa Nova. Lugar onde grandes nomes da música brasileira começaram.",
      "imagem": "assets/images/beco-garrafas.jpg",
      "imagens":[
        'img/beco-das-garrafas (1).jpg',
        'img/beco-das-garrafas(2).jpg',
        'img/beco-das-garrafas(3).jpg'
      ],
      "ano": "1950",
      "destaque": "Histórico / Musical"
    },
}
}
```



