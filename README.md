# Divino Ristorante

Sistema de gerenciamento para restaurante italiano, desenvolvido com Next.js 13, TypeScript, Tailwind CSS e Prisma.

## Funcionalidades

- 🏠 Site institucional com informações do restaurante
- 🍝 Cardápio digital
- 👨‍🍳 Interface para cozinha gerenciar pedidos
- 💰 Sistema de caixa para controle de pagamentos
- 🤵 Área do garçom para gerenciamento de mesas e comandas
- 📊 Relatórios e dashboards administrativos
- 👥 Sistema de autenticação e controle de acesso por perfis

## Tecnologias

- Next.js 13 (App Router)
- TypeScript
- Tailwind CSS
- Prisma (SQLite)
- NextAuth.js
- Lucide Icons
- Shadcn/ui

## Pré-requisitos

- Node.js 18+
- npm ou yarn

## Instalação

1. Clone o repositório
```bash
git clone https://github.com/Moafsa/divino.git
cd divino
```

2. Instale as dependências
```bash
npm install
# ou
yarn
```

3. Configure as variáveis de ambiente
```bash
cp .env.example .env
```

4. Execute as migrações do banco de dados
```bash
npx prisma migrate dev
```

5. Inicie o servidor de desenvolvimento
```bash
npm run dev
# ou
yarn dev
```

O projeto estará disponível em `http://localhost:3000`

## Estrutura do Projeto

```
src/
  ├── app/              # Rotas e páginas (Next.js App Router)
  ├── components/       # Componentes React reutilizáveis
  ├── lib/             # Utilitários e configurações
  ├── types/           # Definições de tipos TypeScript
  └── styles/          # Estilos globais
prisma/
  ├── schema.prisma    # Schema do banco de dados
  └── migrations/      # Migrações do banco de dados
public/               # Arquivos estáticos
```

## Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.