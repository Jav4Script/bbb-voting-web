# 📝 BBB Voting Web

- [📝 BBB Voting Web](#-bbb-voting-web)
  - [📜 Descrição](#-descrição)
  - [✨ Funcionalidades](#-funcionalidades)
  - [🛠️ Stack](#️-stack)
  - [🖥️ Passos para Configuração](#️-passos-para-configuração)
  - [📚 Estrutura do Projeto](#-estrutura-do-projeto)
  - [🧹 Boas Práticas de Clean Code](#-boas-práticas-de-clean-code)
  - [🧩 Boas Práticas de Nomeação](#-boas-práticas-de-nomeação)
  - [📐 Bons Padrões de Codificação](#-bons-padrões-de-codificação)
  - [📝 Licença](#-licença)

## 📜 Descrição

Bem-vindo ao projeto frontend **BBB Voting Web**! Esta aplicação permite que os usuários gerenciem a votação do BBB usando uma interface bonita e responsiva construída com React, Zustand, Tailwind CSS e ShadCN UI. Também usamos React Query para buscar dados e Axios para comunicação com a API.

## ✨ Funcionalidades

- Gerenciamento de Participantes: Criar, visualizar e excluir participantes.
- Verificação de Captcha: Votar usando validação de captcha.
- Sistema de Votação do BBB: Vote no seu participante favorito.
- Resultados: Visualize os resultados da votação.
- UI Responsiva: Construída com Tailwind CSS, otimizada para todos os tamanhos de tela.
- Gerenciamento de Estado: Gerenciamento de estado leve usando Zustand.
- Sistema de Design: Componentes consistentes e acessíveis com ShadCN UI.
- Arquitetura baseada em funcionalidades: Cada funcionalidade tem seu próprio diretório, promovendo modularidade e escalabilidade.

## 🛠️ Stack

- React: Biblioteca JavaScript para construção de interfaces de usuário.
- Zustand: Gerenciamento de estado para armazenamento de dados.
- Tailwind CSS: Framework CSS utilitário para estilização rápida.
- ShadCN UI: Um sistema de design para construção de UIs consistentes e acessíveis.
- React Query: Para gerenciamento de estado do servidor e busca de dados.
- Axios: Para fazer requisições HTTP.

## 🖥️ Passos para Configuração

1. Instale o Node.js
   Antes de começar, certifique-se de que o Node.js está instalado na sua máquina. O Node.js inclui o npm, que será usado para instalar o PNPM.

Baixe e instale o Node.js
Verifique a instalação do Node.js e npm executando o seguinte comando:

```bash
node -v
npm -v
```

2. Instale o PNPM globalmente
   Se o PNPM ainda não estiver instalado, você pode instalá-lo globalmente usando o npm:

```bash
npm install -g pnpm
```

Verifique se o PNPM foi instalado corretamente:

```bash
pnpm -v
```

3. Clone o repositório

```bash
git clone https://github.com/Jav4Script/bbb-voting-web.git
cd bbb-voting-web
```

4. Instale as dependências usando o PNPM:

```bash
pnpm install
```

5. Crie um arquivo .env:
   Crie um arquivo `.env` na raiz do projeto com as seguintes variáveis:

```bash
REACT_APP_API_BASE_URL=http://localhost:8000
```

6. Inicie o servidor de desenvolvimento:

```bash
pnpm start
```

7. Execute os testes unitários:

```bash
pnpm test
```

8. Construa o projeto para produção:

```bash
pnpm build
```

9. Execute o script de build do Tailwind CSS:

```bash
pnpm tailwind:build
```

## 📚 Estrutura do Projeto

```
.
├── .babelrc
├── .env
├── .gitignore
├── .prettierrc
├── .vscode/
│   └── settings.json
├── components.json
├── eslint.config.js
├── index.html
├── package.json
├── pnpm-lock.yaml
├── postcss.config.js
├── README.md
├── shadcn.config.js
├── src/
│   ├── App.tsx
│   ├── features/
│   │   ├── captcha/
│   │   │   ├── components/
│   │   │   │   └── CaptchaForm.tsx
│   │   │   ├── dtos/
│   │   │   │   └── CaptchaDTO.ts
│   │   │   ├── entities/
│   │   │   │   └── Captcha.ts
│   │   │   ├── hooks/
│   │   │   │   └── useCaptcha.ts
│   │   │   ├── mappers/
│   │   │   │   └── CaptchaMapper.ts
│   │   │   ├── pages/
│   │   │   │   └── CaptchaPage.tsx
│   │   │   ├── services/
│   │   │   │   └── captchaService.ts
│   │   │   └── stores/
│   │   │       └── useCaptchaStore.ts
│   │   ├── participants/
│   │   │   ├── components/
│   │   │   │   ├── ParticipantForm.tsx
│   │   │   │   ├── ParticipantItem.tsx
│   │   │   │   └── ParticipantList.tsx
│   │   │   ├── entities/
│   │   │   │   └── Participant.ts
│   │   │   ├── hooks/
│   │   │   │   └── useParticipants.ts
│   │   │   ├── pages/
│   │   │   │   └── ParticipantsPage.tsx
│   │   │   ├── services/
│   │   │   │   └── participantService.ts
│   │   │   ├── stores/
│   │   │       └── useParticipantStore.ts
│   │   │   └── dtos/
│   │   │       └── ParticipantDTO.ts
│   │   ├── results/
│   │   │   ├── components/
│   │   │   │   ├── ResultItem.tsx
│   │   │   │   └── ResultList.tsx
│   │   │   ├── dtos/
│   │   │   │   ├── FinalResultDTO.ts
│   │   │   │   └── PartialResultDTO.ts
│   │   │   ├── entities/
│   │   │   │   ├── FinalResult.ts
│   │   │   │   └── PartialResult.ts
│   │   │   ├── hooks/
│   │   │   │   └── useResults.ts
│   │   │   ├── mappers/
│   │   │   │   └── ResultMapper.ts
│   │   │   ├── pages/
│   │   │   │   └── ResultsPage.tsx
│   │   │   ├── services/
│   │   │   │   └── resultService.ts
│   │   │   ├── stores/
│   │   │       └── useResultStore.ts
│   │   ├── votes/
│   │   │   ├── components/
│   │   │   │   ├── VoteForm.tsx
│   │   │   │   ├── VoteItem.tsx
│   │   │   │   └── VoteList.tsx
│   │   │   ├── dtos/
│   │   │   │   └── VoteDTO.ts
│   │   │   ├── entities/
│   │   │   │   └── Vote.ts
│   │   │   ├── hooks/
│   │   │   │   └── useVotes.ts
│   │   │   ├── mappers/
│   │   │   │   └── VoteMapper.ts
│   │   │   ├── pages/
│   │   │   │   └── VotesPage.tsx
│   │   │   ├── services/
│   │   │   │   └── voteService.ts
│   │   │   ├── stores/
│   │   │       └── useVoteStore.ts
│   ├── hooks/
│   │   └── useToast.ts
│   ├── index.tsx
│   ├── pages/
│   │   ├── HomePage.spec.tsx
│   │   └── HomePage.tsx
│   ├── setupTests.ts
│   ├── shared/
│   │   ├── components/
│   │   │   ├── layout/
│   │   │   │   ├── Footer.tsx
│   │   │   │   ├── Footer.spec.tsx
│   │   │   │   ├── Header.tsx
│   │   │   │   └── Header.spec.tsx
│   │   │   └── ui/
│   │   │       ├── button.tsx
│   │   │       ├── card.tsx
│   │   │       ├── form.tsx
│   │   │       ├── input.tsx
│   │   │       ├── modal.tsx
│   │   │       ├── skeleton.tsx
│   │   │       ├── textarea.tsx
│   │   │       ├── toast.tsx
│   │   │       └── toaster.tsx
│   │   ├── hooks/
│   │   ├── mocks/
│   │   │   └── tasks.ts
│   │   ├── services/
│   │   │   └── api.ts
│   │   └── utils/
│   │       └── shadcn.ts
├── store/
│   └── rootStore.ts
├── styles/
│   └── tailwind.css
├── tailwind.config.js
├── tsconfig.json
├── vitest.config.ts
└── webpack.config.js
```

## 🧹 Boas Práticas de Clean Code

Manter boas práticas de clean code é essencial para garantir que o código seja legível, sustentável e fácil de manter. Aqui estão algumas práticas recomendadas:

- **Nomes Significativos**: Use nomes descritivos e precisos para variáveis, funções e classes, que reflitam claramente sua finalidade.
- **Funções Pequenas**: Mantenha as funções curtas e focadas em uma única tarefa. Funções menores são mais fáceis de entender, testar e manter.
- **Evite Comentários Desnecessários**: Escreva código claro e autoexplicativo que não precise de muitos comentários. Use comentários para explicar o "porquê" e não o "como".
- **Consistência**: Siga um estilo de codificação consistente em todo o projeto. Utilize ferramentas como linters e formatadores automáticos para manter a consistência.
- **Tratamento de Erros**: Lide com erros de forma adequada e consistente. Use exceções para situações excepcionais e valide entradas para evitar erros.
- **Evite Código Duplicado**: Reutilize código sempre que possível para evitar duplicação. Utilize funções, classes e módulos para encapsular lógica reutilizável.
- **Responsabilidade Única**: Cada módulo, classe ou função deve ter uma única responsabilidade bem definida.
- **Modularidade**: Divida o código em módulos pequenos e independentes que possam ser facilmente testados e mantidos.
- **Legibilidade**: Priorize a legibilidade do código. Use espaçamento, indentação e quebras de linha para tornar o código mais fácil de ler.
- **Refatoração Regular**: Refatore o código regularmente para melhorar sua estrutura e legibilidade sem alterar seu comportamento externo.

Para mais detalhes, consulte o guia completo de clean code em JavaScript [aqui](https://github.com/ryanmcdermott/clean-code-javascript) e TypeScript [aqui](https://github.com/labs42io/clean-code-typescript).

## 🧩 Boas Práticas de Nomeação

Seguir boas práticas de nomeação é crucial para garantir que o código seja fácil de entender e manter. Aqui estão algumas recomendações:

- **Seja Descritivo**: Use nomes que descrevam claramente a finalidade da variável, função ou classe. Nomes descritivos ajudam a entender o código sem precisar de contexto adicional.
- **Use Padrões Consistentes**: Adote convenções de nomenclatura consistentes, como camelCase para variáveis e funções, e PascalCase para classes. Consistência facilita a leitura e manutenção do código.
- **Evite Abreviações**: Prefira nomes completos e descritivos em vez de abreviações que podem ser confusas. Abreviações podem dificultar a compreensão do código.
- **Contexto é Importante**: Inclua contexto suficiente nos nomes para que eles façam sentido fora de seu escopo imediato. Nomes contextuais ajudam a evitar ambiguidades.
- **Prefira Nomes Pronunciáveis**: Use nomes que possam ser facilmente pronunciados e lembrados. Nomes pronunciáveis facilitam a comunicação sobre o código.
- **Use Substantivos para Classes**: Nomeie classes com substantivos que descrevam claramente o que a classe representa.
- **Use Verbos para Funções**: Nomeie funções com verbos que descrevam claramente a ação que a função realiza.
- **Evite Nomes Genéricos**: Evite nomes genéricos como `data`, `item` ou `value`. Prefira nomes específicos que descrevam a finalidade do elemento.
- **Use Prefixos e Sufixos Quando Necessário**: Use prefixos e sufixos para adicionar contexto adicional aos nomes, como `is` para booleanos (`isActive`) ou `count` para contadores (`userCount`).

Para mais detalhes, consulte o guia completo de boas práticas de nomeação [aqui](https://github.com/kettanaito/naming-cheatsheet).

## 📐 Bons Padrões de Codificação

Seguir bons padrões de codificação é essencial para criar um código que seja fácil de entender, manter e escalar. Aqui estão alguns dos principais padrões de codificação que você deve considerar:

- **SOLID**: Um conjunto de princípios de design orientado a objetos que ajudam a criar sistemas mais compreensíveis, flexíveis e de fácil manutenção.
  - **S**: Single Responsibility Principle (Princípio da Responsabilidade Única)
  - **O**: Open/Closed Principle (Princípio Aberto/Fechado)
  - **L**: Liskov Substitution Principle (Princípio da Substituição de Liskov)
  - **I**: Interface Segregation Principle (Princípio da Segregação de Interface)
  - **D**: Dependency Inversion Principle (Princípio da Inversão de Dependência)

- **DRY (Don't Repeat Yourself)**: Evite duplicação de código. Cada parte do conhecimento deve ter uma representação única, não ambígua e autoritativa dentro de um sistema.

- **YAGNI (You Aren't Gonna Need It)**: Não adicione funcionalidades até que elas sejam realmente necessárias. Isso ajuda a manter o código simples e focado.

- **KISS (Keep It Simple, Stupid)**: Mantenha o código o mais simples possível. Complexidade desnecessária deve ser evitada.

- **DDD (Domain-Driven Design)**: Enfoca a solução dos problemas centrais do domínio do negócio, utilizando uma linguagem ubíqua compartilhada entre equipes técnicas e não-técnicas.

- **CQRS (Command Query Responsibility Segregation)**: Separe operações de leitura (queries) das operações de gravação (commands) para melhorar escalabilidade e organização.

- **Code Reviews**: Realizar revisões de código sistemáticas para identificar problemas antes que cheguem à produção, promovendo qualidade e aprendizado.

- **Boy Scout Rule**: Deixe o código em um estado melhor do que você o encontrou." Um princípio que encoraja melhorias contínuas no código.

- **High Cohesion, Low Coupling**: Projete sistemas onde os componentes tenham alta coesão (foco interno) e baixo acoplamento (dependências externas).

- **MVP (Minimum Viable Product)**: Construa o menor produto funcional possível para validar hipóteses e obter feedback rápido.

- **Fail Fast, Fail Often**: Encoraje experimentação rápida e iterativa para identificar falhas cedo no ciclo de desenvolvimento.

- **Kaizen**: Adote uma abordagem de melhoria contínua, promovendo pequenas mudanças incrementais que gerem impacto ao longo do tempo.

- **DevOps Principles**: Integre desenvolvimento e operações para acelerar entregas, melhorar qualidade e automatizar o ciclo de vida.

- **Clean Code Principles**: Um conjunto de práticas para manter o código limpo, como nomes claros, métodos pequenos e responsabilidade única.

- **Continuous Integration/Continuous Deployment (CI/CD)**: Automação de builds, testes e implantações para aumentar qualidade e reduzir tempo de entrega.

- **Defensive Programming**: Escreva código que antecipe erros e falhas, garantindo maior resiliência a cenários excepcionais.

- **CI/CD (Continuous Integration/Continuous Deployment)**: Práticas que envolvem a integração contínua de código e a entrega contínua de software, garantindo que o código esteja sempre em um estado de prontidão para produção.

## 📝 Licença

Este projeto está licenciado sob a Licença MIT.
