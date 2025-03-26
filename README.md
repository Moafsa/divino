# Divino Lanches

Sistema web para a Divino Lanches de Flores da Cunha, permitindo gerenciamento de pedidos, cardápio e atendimento aos clientes.

## Funcionalidades

- 🍔 Cardápio digital com categorias e produtos
- 🛒 Carrinho de compras
- 📝 Sistema de pedidos
- 🪑 Gerenciamento de mesas e comandas
- 👥 Área administrativa para gestão do estabelecimento
- 🔐 Sistema de autenticação para funcionários

## Tecnologias

- Next.js 13 (App Router)
- TypeScript
- Prisma (SQLite)
- TailwindCSS
- NextAuth.js
- Radix UI

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/Moafsa/divino.git
```

2. Instale as dependências:
```bash
npm install
```

3. Configure o banco de dados:
```bash
npx prisma generate
npx prisma migrate dev
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```

## Estrutura do Projeto

- `/src/app` - Rotas e páginas da aplicação
- `/src/components` - Componentes reutilizáveis
- `/prisma` - Schema e migrações do banco de dados

## Licença

Este projeto está licenciado sob a licença MIT - veja o arquivo [LICENSE](LICENSE) para mais detalhes.