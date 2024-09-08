# Especificações do Projeto

<span style="color:red">Pré-requisitos: <a href="01-Documentação de Contexto.md"> Documentação de Contexto</a></span>

O projeto Rede do Bem tem como objetivo combater o abandono de animais, oferecendo uma solução que facilita o resgate, cuidados e adoção de animais abandonados. Além disso, promove a conscientização da sociedade sobre posse responsável e direitos dos animais. Abaixo, detalharemos as personas, histórias de usuários, requisitos funcionais, não funcionais e restrições do projeto.

## Personas

1. Ana é uma mulher de 28 anos, amante dos animais e mora em um apartamento pequeno. Ela sempre quis adotar um cão de porte pequeno e está procurando uma plataforma que facilite a busca e adoção de um animal que se encaixe no seu estilo de vida.

2. João, de 35 anos, é um protetor independente que resgata animais de rua e de maus-tratos. Ele precisa de uma ferramenta que o ajude a cadastrar os animais resgatados para adoção, informando dados sobre saúde e comportamento, facilitando o encontro de adotantes responsáveis.

3. Carla, de 45 anos, trabalha como voluntária em uma ONG de proteção animal. Ela precisa de uma maneira eficaz de arrecadar doações para cobrir os custos de tratamentos veterinários e alimentar os animais que cuida, além de engajar possíveis adotantes e doadores.

> **Links Úteis**:
> - [Rock Content](https://rockcontent.com/blog/personas/)
> - [Hotmart](https://blog.hotmart.com/pt-br/como-criar-persona-negocio/)
> - [O que é persona?](https://resultadosdigitais.com.br/blog/persona-o-que-e/)
> - [Persona x Público-alvo](https://flammo.com.br/blog/persona-e-publico-alvo-qual-a-diferenca/)
> - [Mapa de Empatia](https://resultadosdigitais.com.br/blog/mapa-da-empatia/)
> - [Mapa de Stalkeholders](https://www.racecomunicacao.com.br/blog/como-fazer-o-mapeamento-de-stakeholders/)
>
Lembre-se que você deve ser enumerar e descrever precisamente e personalizada todos os clientes ideais que sua solução almeja.

## Histórias de Usuários

Com base na análise das personas, foram identificadas as seguintes histórias de usuários:

1. Ana, 28 anos, amante dos animais:
História de Usuário: Ana quer utilizar a plataforma Rede do Bem para encontrar um cão de pequeno porte que se encaixe no seu estilo de vida em um apartamento. Ela deseja visualizar fotos, saber a idade, histórico de saúde e, idealmente, conhecer o temperamento do cão antes de adotar.

2. João, 35 anos, protetor independente:
História de Usuário: João resgata cães e gatos de situações de maus-tratos e procura uma maneira simples de cadastrá-los na plataforma para adoção, com informações sobre saúde, vacinação e necessidades especiais.

3. Carla, 45 anos, voluntária de ONG:
História de Usuário: Carla trabalha em uma ONG que cuida de animais doentes ou feridos e precisa arrecadar fundos para cobrir os custos do tratamento e alimentação. Ela busca uma forma de engajar doadores e mostrar o impacto das doações, além de facilitar o processo de adoção.

> **Links Úteis**:
> - [Histórias de usuários com exemplos e template](https://www.atlassian.com/br/agile/project-management/user-stories)
> - [Como escrever boas histórias de usuário (User Stories)](https://medium.com/vertice/como-escrever-boas-users-stories-hist%C3%B3rias-de-usu%C3%A1rios-b29c75043fac)
> - [User Stories: requisitos que humanos entendem](https://www.luiztools.com.br/post/user-stories-descricao-de-requisitos-que-humanos-entendem/)
> - [Histórias de Usuários: mais exemplos](https://www.reqview.com/doc/user-stories-example.html)
> - [9 Common User Story Mistakes](https://airfocus.com/blog/user-story-mistakes/)



## Requisitos

As tabelas que se seguem apresentam os requisitos funcionais e não funcionais que detalham o escopo do projeto. Para determinar a prioridade de requisitos, aplicar uma técnica de priorização de requisitos e detalhar como a técnica foi aplicada.

### Requisitos Funcionais

1. Cadastro de animais para adoção:
A plataforma deve permitir o cadastro de animais para adoção, incluindo detalhes como nome, espécie, raça, idade, estado de saúde e histórico de vacinação, além de fotos dos animais.

2. Sistema de busca e filtragem de animais:
O sistema deve ter uma ferramenta de busca e filtros que permitam os usuários pesquisarem por características como espécie, raça, porte, idade e localização, para facilitar a busca por animais específicos.

3. Interface para ONGs e protetores independentes:
Deve ser possível para ONGs e protetores independentes cadastrarem seus perfis e gerirem seus animais na plataforma, com informações detalhadas sobre os animais sob sua responsabilidade.

4. Plataforma de doações:
A solução deve incluir uma plataforma para doações financeiras, que serão utilizadas para o resgate e cuidados veterinários dos animais, permitindo diferentes formas de pagamento (cartão de crédito, débito e transferência bancária).

5. Seção de informações sobre posse responsável:
A plataforma deve disponibilizar uma área dedicada à educação sobre a posse responsável, fornecendo dicas, guias de cuidados, informações sobre vacinação, castração e treinamento dos animais.


### Requisitos não Funcionais

1. Interface amigável e responsiva:
O sistema deve ser responsivo, permitindo que os usuários acessem a plataforma por meio de dispositivos móveis e desktops, com uma interface intuitiva e de fácil navegação.

2. Segurança de dados e transações:
A segurança deve ser garantida, especialmente em transações financeiras, utilizando criptografia de dados e protegendo as informações dos usuários.

3. Suporte a diferentes formas de pagamento:
A plataforma deve oferecer suporte a diversos métodos de pagamento, incluindo cartão de crédito, débito e transferência bancária, para facilitar o processo de doações.

4. Alta disponibilidade e performance:
O sistema deve ser capaz de suportar um grande volume de acessos simultâneos, garantindo alta disponibilidade e rápida resposta às interações dos usuários.


## Restrições

1. Limitações financeiras:
O projeto pode enfrentar limitações orçamentárias, especialmente no que se refere à manutenção dos servidores e ao suporte técnico contínuo.

2. Dependência de voluntários:
A manutenção da plataforma, incluindo a atualização de conteúdos e o gerenciamento dos cadastros de animais, pode depender fortemente de voluntários.

3. Módulo de backend limitado:
O desenvolvimento de um backend avançado pode não ser viável, dependendo de soluções como APIs externas para certos serviços, como processamento de pagamentos e gerenciamento de dados.

> **Links Úteis**:
> - [O que são Requisitos Funcionais e Requisitos Não Funcionais?](https://codificar.com.br/requisitos-funcionais-nao-funcionais/)
> - [O que são requisitos funcionais e requisitos não funcionais?](https://analisederequisitos.com.br/requisitos-funcionais-e-requisitos-nao-funcionais-o-que-sao/)
