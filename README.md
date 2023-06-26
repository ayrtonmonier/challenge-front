# ChallengeFront

Este repositório contém os arquivos necessários para executar a aplicação front-end do projeto Challenge, desenvolvido utilizando o framework Angular.

Este projeto foi gerado com o [Angular CLI](https://github.com/angular/angular-cli) versão 16.1.1.


## Estrutura do Projeto

A estrutura do projeto é organizada da seguinte forma:

- `/src`: Diretório raiz do código-fonte.
  - `/app`: Diretório que contém os arquivos principais da aplicação.
    - `/components`: Diretório que contém os componentes utilizados na aplicação.
      - `/template`: Diretório que contém os componentes de template.
        - `/footer`: Diretório do componente de rodapé.
        - `/header`: Diretório do componente de cabeçalho.
        - `/nav`: Diretório do componente de navegação principal.
          - `nav.component.css`: Arquivo de estilização do componente de navegação.
          - `nav.component.html`: Arquivo de marcação HTML do componente de navegação.
          - `nav.component.ts`: Arquivo TypeScript do componente de navegação.
    - `/views`: Diretório que contém os componentes de visualização da aplicação.
  - `app-routing.module.ts`: Arquivo de configuração das rotas da aplicação.
  - `app.component.html`: Arquivo de marcação HTML do componente principal.
  - `app.component.ts`: Arquivo TypeScript do componente principal.
  - `app.module.ts`: Arquivo de configuração do módulo principal da aplicação.
- `/assets`: Diretório para armazenar os recursos estáticos da aplicação.
- `/src/index.html`: Arquivo HTML principal da aplicação.
- `/src/styles.css`: Arquivo de estilos globais da aplicação.
- `/angular.json`: Arquivo de configuração do projeto Angular.
- `/package.json`: Arquivo de definição de pacotes e dependências do projeto.
- `/README.md`: Arquivo de documentação do projeto.

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

## Utilização

Para utilizar os componentes de Header, Footer e Nav em sua aplicação, siga as instruções abaixo:

1. Importe os arquivos de componente necessários em seu código:

   ```javascript
   import { HeaderComponent } from 'caminho-para-o-arquivo/header.component';
   import { FooterComponent } from 'caminho-para-o-arquivo/footer.component';
   import { NavComponent } from 'caminho-para-o-arquivo/nav.component';
   ```

2. Use os componentes em sua estrutura de página:

   ```html
   <app-header></app-header>
   <!-- Conteúdo da página -->
   <app-footer></app-footer>
   ```

   Certifique-se de fornecer o caminho correto para o arquivo de componente em seu projeto.

## Servidor de desenvolvimento

Execute o comando `ng serve` para iniciar um servidor de desenvolvimento. Acesse `http://localhost:4200/`. A aplicação será recarregada automaticamente se houver alterações nos arquivos de origem.


## Executando testes unitários

Execute o comando `ng test` para executar os testes unitários via [Karma](https://karma-runner.github.io).


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