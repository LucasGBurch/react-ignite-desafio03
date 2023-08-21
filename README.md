# Aplicação de Coffee Delivery:
 Repositório para **segundo Desafio do Ignite.** Uma aplicação simples e multipage de delivery para colocar em prática o que estudei durante as aulas do módulo 02 do Ignite, da Rocketseat.

# Sobre a aplicação:

- Essa aplicação possui três páginas/rotas diferentes:

  - Blog - Página onde os dados de usuário são apresentados no início da tela, fazendo o primeiro uso da API do GitHub, com esses dados de usuário armazenados em variáveis de estado dentro de uma ContextAPI. Além disso, essa rota possui uma Lista de Postagens (issues) e um formulário. A lista renderiza itens que usam o consumo de API do GitHub, dessa vez com um state para cada Issue renderizada em cada ListItem. Esses itens são também links para navegar para a outra página;

  - Post - Essa página renderiza dinamicamente, através de Ids, a issue selecionada na lista do Blog. Traduz também o texto escrito em markdown através da biblioteca react-markdown. Os dados para esses itens pertencem à API das issues;

- O ponto principal dessa aplicação é o consumo da API do GitHub, onde buscamos dados do usuário criador deste repositório e as issues criadas nele para fins de teste. Esse consumo foi realizado através da biblioteca axios e os dados armazenados em variáveis de estado através de uma ContextAPI. Ferramentas como useEffect para buscar os dados sempre que a aplicação é carregada e useCallback para armazenar as funções fetch, para fins de performance, também foram utilizadas nessa ContextAPI, armazenada no arquivo contexts/GitHubContext.

# Instruções para rodar:

- **ATENÇÃO!** Caso queira acessar diretamente a aplicação, sem baixar/olhar o projeto e seus códigos, ela está implementada neste link da Vercel: [INSERIR LINK] ;

- Caso contrário: ao Baixar/Abrir o projeto, **é recomendável fazê-lo no VSCode**, já que essa IDE foi utilizada para o desenvolvimento do desafio;

- **É preciso ter instalado na sua máquina uma versão LTS do Node** ( https://nodejs.org/pt-br/ ), para poder executar os comandos **npm (node package manager)**. Através dos passos abaixo:

  - Para instalar as dependências necessárias para rodar a aplicação, é preciso:
    
    - Clicar com o botão direito no diretório do projeto "...\react-ignite-desafio03" e clique em "abrir terminal integrado".

    - No terminal, execute o comando **"npm install" ou a abreviação "npm i"**. Isso é necessário porque a pasta de node_modules com as dependências necessárias para a aplicação não costumam ir para os repositórios devido ao seu peso no commit;

    - Ao ter a pasta node_modules adicionada ao projeto,  e executar o **comando "npm run dev" no mesmo terminal**. Você poderá agora abrir a aplicação no endereço https://localhost:5173;
