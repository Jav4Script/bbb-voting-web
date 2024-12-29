# 📝 BBB Voting Web

- [📝 BBB Voting Web](#-bbb-voting-web)
  - [📜 Description](#-description)
  - [✨ Features](#-features)
  - [🛠️ Stack](#️-stack)
  - [🖥️ Setup Steps](#️-setup-steps)
  - [📚 Project Structure](#-project-structure)
  - [📝 License](#-license)

## 📜 Description

Welcome to the **BBB Voting Web** frontend project! This application allows users to manage BBB voting using a beautiful, responsive UI built with React, Zustand, Tailwind CSS, and ShadCN UI. We also use React Query for fetching data and Axios for API communication.

## ✨ Features

- Participants Management: Create, view, and delete participants.
- Captcha Verification: Vote using captcha validation.
- BBB Voting system: Vote for your favorite participant.
- Results: View the results of the voting.
- Responsive UI: Built with Tailwind CSS, optimized for all screen sizes.
- State Management: Lightweight state management using Zustand.
- Design System: Consistent and accessible components with ShadCN UI.
- Feature-based architecture: Each feature has its own directory, promoting modularity and scalability.

## 🛠️ Stack

- React: JavaScript library for building user interfaces.
- Zustand: State management for storing data.
- Tailwind CSS: Utility-first CSS framework for rapid styling.
- ShadCN UI: A design system for building consistent, accessible UIs.
- React Query: For server state management and data fetching.
- Axios: For making HTTP requests.

## 🖥️ Setup Steps

1. Install Node.js
   Before getting started, make sure Node.js is installed on your machine. Node.js includes npm, which will be used to install PNPM.

Download and install Node.js
Verify the installation of Node.js and npm by running the following command:

```bash
node -v
npm -v
```

2. Install PNPM globally
   If PNPM is not already installed, you can install it globally using npm:

```bash
npm install -g pnpm
```

Verify that PNPM has been installed correctly:

```bash
pnpm -v
```

3. Clone the repository

```bash
git clone https://github.com/Jav4Script/bbb-voting-web.git
cd bbb-voting-web
```

4. Install PNPM:

```bash
npm install -g pnpm
```

5. Install dependencies using PNPM:

```bash
pnpm install
```

6. Create a .env file:
   Create a `.env` file in the root of the project with the following variables:

```bash
REACT_APP_API_BASE_URL=http://localhost:8000
```

7. Start the development server:

```bash
pnpm start
```

8. Execute unit tests:

```bash
pnpm test
```

9.  Build the project for production:

```bash
pnpm build
```

9. Run Tailwind CSS build script:

```bash
pnpm tailwind:build
```

## 📚 Project Structure

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
│   │   │   │   └── useParticipantStore.ts
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
│   │   └── use-toast.ts
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

## 📝 License

This project is licensed under the MIT License.
