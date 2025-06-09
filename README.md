# Sistema de Usuários - Docker API

Aplicação React com Next.js que consome dados de uma API Express containerizada com Docker.

## 🚀 Tecnologias Utilizadas

- **Frontend**: Next.js 14 (App Router) + Material UI
- **Backend**: Express.js + Node.js
- **Containerização**: Docker + Docker Compose
- **Estilização**: Material UI (MUI)

## 📋 Funcionalidades

### Rotas da Aplicação

1. **`/usuarios`** - Lista todos os usuários
   - Exibe cards com informações básicas dos usuários
   - Botão "Ver Detalhes" abre nova aba com dados completos

2. **`/dados/[id]`** - Detalhes do usuário
   - Extrai o ID da URL
   - Exibe informações completas do usuário
   - Interface responsiva com Material UI

### API Endpoints

- `GET /api/usuarios` - Lista todos os usuários
- `GET /api/usuarios/:id` - Busca usuário específico por ID
- `GET /health` - Health check da API

## 🐳 Como Executar com Docker

### 1. Executar apenas a API (Docker)

\`\`\`bash
# Navegar para o diretório da API
cd api

# Construir a imagem Docker
docker build -t usuarios-api .

# Executar o container
docker run -p 3001:3001 usuarios-api
\`\`\`

### 2. Executar com Docker Compose (Recomendado)

\`\`\`bash
# Na raiz do projeto
docker-compose up -d

# Para parar os containers
docker-compose down
\`\`\`

### 3. Executar o Frontend

\`\`\`bash
# Instalar dependências
npm install

# Executar em modo desenvolvimento
npm run dev
\`\`\`

## 🔧 Configuração

### Variáveis de Ambiente

A API utiliza as seguintes variáveis:
- `PORT`: Porta da API (padrão: 3001)
- `NODE_ENV`: Ambiente de execução

### Estrutura do Projeto

\`\`\`
├── app/                    # Frontend Next.js
│   ├── usuarios/          # Rota de listagem
│   ├── dados/[id]/        # Rota de detalhes
│   └── layout.tsx         # Layout principal
├── api/                   # Backend Express
│   ├── server.js          # Servidor da API
│   ├── Dockerfile         # Imagem Docker
│   └── package.json       # Dependências da API
├── docker-compose.yml     # Orquestração Docker
└── README.md             # Documentação
\`\`\`

## 📊 Dados Mock

A API utiliza dados mock com 6 usuários de exemplo, incluindo:
- Informações pessoais (nome, email, telefone, cidade, idade)
- Informações profissionais (profissão, empresa, salário)
- Status e data de contratação

## 🎯 Critérios de Aceite Atendidos

✅ **Rotas da Aplicação**: `/usuarios` e `/dados/[id]` implementadas  
✅ **Consumo de API**: Requisições GET para API containerizada  
✅ **Docker**: API completamente containerizada  
✅ **Interface**: Material UI com design responsivo  
✅ **Navegação**: Nova aba ao clicar em usuário  
✅ **Parâmetros URL**: Extração do ID da URL  
✅ **Dados Mock**: Lista de usuários sem banco de dados  

## 🚦 Como Testar

1. Execute a API com Docker: `docker-compose up -d`
2. Execute o frontend: `npm run dev`
3. Acesse `http://localhost:3000`
4. Navegue para `/usuarios`
5. Clique em "Ver Detalhes" de qualquer usuário
6. Verifique se abre nova aba com `/dados/[id]`

## 📝 Commits Convencionais

O projeto segue o padrão de Conventional Commits:
- `feat:` nova funcionalidade
- `fix:` correção de bug
- `docs:` documentação
- `style:` formatação
- `refactor:` refatoração
- `test:` testes
- `chore:` tarefas de build/config
