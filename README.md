# ChallengeFront

Este repositório contém os arquivos necessários para executar a aplicação front-end do projeto Challenge, desenvolvido utilizando o framework Angular.

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 16.1.1.


## Estrutura do Projeto

O projeto "challenge-front" está organizado da seguinte maneira:

- `.angular`: Diretório relacionado ao Angular.
- `.vscode`: Diretório relacionado às configurações do Visual Studio Code.
- `node_modules`: Diretório que contém as dependências do projeto.
- `src`: Diretório raiz do código-fonte.
  - `app`: Diretório que contém os principais arquivos da aplicação.
    - `components`: Diretório que contém os componentes utilizados na aplicação.
      - `template`: Diretório que contém os componentes de template.
        - `footer`: Diretório do componente de rodapé.
          - `footer.component.css`: Arquivo de estilização do componente de rodapé.
          - `footer.component.html`: Arquivo de marcação HTML do componente de rodapé.
          - `footer.component.ts`: Arquivo TypeScript do componente de rodapé.
        - `header`: Diretório do componente de cabeçalho.
          - `header.component.css`: Arquivo de estilização do componente de cabeçalho.
          - `header.component.html`: Arquivo de marcação HTML do componente de cabeçalho.
          - `header.component.ts`: Arquivo TypeScript do componente de cabeçalho.
        - `main-nav`: Diretório do componente de navegação principal.
          - `main-nav.component.css`: Arquivo de estilização do componente de navegação principal.
          - `main-nav.component.html`: Arquivo de marcação HTML do componente de navegação principal.
          - `main-nav.component.ts`: Arquivo TypeScript do componente de navegação principal.
        - `nav-user`: Diretório do componente de navegação do usuário.
          - `nav-user.component.css`: Arquivo de estilização do componente de navegação do usuário.
          - `nav-user.component.html`: Arquivo de marcação HTML do componente de navegação do usuário.
          - `nav-user.component.ts`: Arquivo TypeScript do componente de navegação do usuário.
    - `views`: Diretório que contém os componentes de visualização da aplicação.
      - `home`: Diretório do componente de visualização da página inicial.
        - `home.component.css`: Arquivo de estilização do componente de visualização da página inicial.
        - `home.component.html`: Arquivo de marcação HTML do componente de visualização da página inicial.
        - `home.component.ts`: Arquivo TypeScript do componente de visualização da página inicial.
      - `user`: Diretório do componente de visualização de usuário.
        - `user-listar`: Diretório do componente de visualização da lista de usuários.
          - `user-listar-routing.module.ts`: Arquivo de configuração de rotas do componente de visualização da lista de usuários.
          - `user-listar.component.css`: Arquivo de estilização do componente de visualização da lista de usuários.
          - `user-listar.component.html`: Arquivo de marcação HTML do componente de visualização da lista de usuários.
          - `user-listar.component.ts`: Arquivo TypeScript do componente de visualização da lista de usuários.
          - `user-listar.module.ts`: Arquivo de configuração do módulo do componente de visualização da lista de usuários.
    - `app-routing.module.ts`: Arquivo de configuração das rotas da aplicação.
    - `app.component.html`: Arquivo de marcação HTML do componente principal.
    - `app.component.ts`: Arquivo TypeScript do componente principal.
    - `app.module.ts`: Arquivo de configuração do módulo principal da aplicação.
- `assets`: Diretório que contém arquivos estáticos utilizados na aplicação.
- `favicon.ico`: Ícone da aplicação exibido no navegador.
- `index.html`: Página HTML principal da aplicação.
- `main.ts`: Arquivo TypeScript de inicialização da aplicação.
- `styles.css`: Arquivo de estilos globais da aplicação.
- `.gitignore`: Arquivo que especifica quais arquivos devem ser ignorados pelo controle de versão do Git.
- `angular.json`: Arquivo de configuração do projeto Angular.
- `LICENSE`: Arquivo de licença do projeto.
- `package-lock.json`: Arquivo gerado automaticamente que especifica as versões exatas das dependências do projeto.
- `package.json`: Arquivo que contém as informações e as dependências do projeto.
- `README.md`: Arquivo de documentação do projeto.
- `tsconfig.app.json`: Arquivo de configuração do compilador TypeScript para a aplicação.
- `tsconfig.json`: Arquivo de configuração do compilador TypeScript para todo o projeto.


## Instalação

Para executar a aplicação localmente, siga estas etapas:

1. Clone o repositório:

   ```bash
   git clone https://github.com/ayrtonmonier/challenge-front.git
   ```

2. Navegue até o diretório do projeto:

   ```bash
   cd challenge-front
   ```

3. Instale as dependências:

   ```bash
   npm install
   ```


## Servidor de desenvolvimento

Execute o comando `ng serve` para iniciar um servidor de desenvolvimento. Acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente se houver alterações nos arquivos de origem.


## Contribuição

Se você deseja contribuir para o projeto, siga estas etapas:

1. Faça um fork do repositório.

2. Crie uma nova branch com a sua contribuição:

   ```bash
   git checkout -b minha-contribuicao
   ```

3. Faça as alterações desejadas no código.

4. Faça o commit das suas alterações:

   ```bash
   git commit -m "Minha contribuição"
   ```

5. Envie as suas alterações para o repositório remoto:

   ```bash
   git push origin minha-contribuicao
   ```

6. Abra um pull request no repositório original e aguarde a revisão e aprovação da sua contribuição.

## Licença

Este projeto está licenciado sob a [Licença MIT](LICENCE).