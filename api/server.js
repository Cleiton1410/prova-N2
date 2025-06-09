const express = require("express")
const cors = require("cors")

const app = express()
const PORT = process.env.PORT || 3001

// Middleware
app.use(cors())
app.use(express.json())

// Dados mock dos usuários
const usuarios = [
  {
    id: 1,
    nome: "João Silva",
    email: "joao.silva@email.com",
    telefone: "(11) 99999-1111",
    cidade: "São Paulo",
    profissao: "Desenvolvedor Frontend",
    idade: 28,
    endereco: "Rua das Flores, 123 - Vila Madalena, São Paulo - SP",
    empresa: "Tech Solutions Ltda",
    salario: "R$ 8.500,00",
    dataContratacao: "15/03/2022",
    status: "Ativo",
  },
  {
    id: 2,
    nome: "Maria Santos",
    email: "maria.santos@email.com",
    telefone: "(21) 88888-2222",
    cidade: "Rio de Janeiro",
    profissao: "UX Designer",
    idade: 32,
    endereco: "Av. Copacabana, 456 - Copacabana, Rio de Janeiro - RJ",
    empresa: "Design Studio",
    salario: "R$ 7.200,00",
    dataContratacao: "08/07/2021",
    status: "Ativo",
  },
  {
    id: 3,
    nome: "Pedro Oliveira",
    email: "pedro.oliveira@email.com",
    telefone: "(31) 77777-3333",
    cidade: "Belo Horizonte",
    profissao: "Backend Developer",
    idade: 35,
    endereco: "Rua da Liberdade, 789 - Centro, Belo Horizonte - MG",
    empresa: "DevCorp",
    salario: "R$ 9.800,00",
    dataContratacao: "22/01/2020",
    status: "Ativo",
  },
  {
    id: 4,
    nome: "Ana Costa",
    email: "ana.costa@email.com",
    telefone: "(47) 66666-4444",
    cidade: "Florianópolis",
    profissao: "Product Manager",
    idade: 29,
    endereco: "Rua das Palmeiras, 321 - Trindade, Florianópolis - SC",
    empresa: "StartupTech",
    salario: "R$ 11.000,00",
    dataContratacao: "10/11/2023",
    status: "Ativo",
  },
  {
    id: 5,
    nome: "Carlos Ferreira",
    email: "carlos.ferreira@email.com",
    telefone: "(85) 55555-5555",
    cidade: "Fortaleza",
    profissao: "DevOps Engineer",
    idade: 31,
    endereco: "Av. Beira Mar, 654 - Meireles, Fortaleza - CE",
    empresa: "CloudTech",
    salario: "R$ 10.500,00",
    dataContratacao: "05/09/2022",
    status: "Inativo",
  },
  {
    id: 6,
    nome: "Lucia Rodrigues",
    email: "lucia.rodrigues@email.com",
    telefone: "(61) 44444-6666",
    cidade: "Brasília",
    profissao: "Data Scientist",
    idade: 27,
    endereco: "SQN 308, Bloco A - Asa Norte, Brasília - DF",
    empresa: "DataLab",
    salario: "R$ 12.000,00",
    dataContratacao: "18/04/2023",
    status: "Ativo",
  },
]

// Rotas da API
app.get("/api/usuarios", (req, res) => {
  console.log("GET /api/usuarios - Listando todos os usuários")

  // Retorna apenas os dados básicos para a listagem
  const usuariosBasicos = usuarios.map((usuario) => ({
    id: usuario.id,
    nome: usuario.nome,
    email: usuario.email,
    telefone: usuario.telefone,
    cidade: usuario.cidade,
  }))

  res.json(usuariosBasicos)
})

app.get("/api/usuarios/:id", (req, res) => {
  const id = Number.parseInt(req.params.id)
  console.log(`GET /api/usuarios/${id} - Buscando usuário específico`)

  const usuario = usuarios.find((u) => u.id === id)

  if (!usuario) {
    return res.status(404).json({
      error: "Usuário não encontrado",
      message: `Usuário com ID ${id} não existe`,
    })
  }

  res.json(usuario)
})

// Rota de health check
app.get("/health", (req, res) => {
  res.json({
    status: "OK",
    message: "API funcionando corretamente",
    timestamp: new Date().toISOString(),
  })
})

// Middleware de tratamento de erros
app.use((err, req, res, next) => {
  console.error("Erro na API:", err)
  res.status(500).json({
    error: "Erro interno do servidor",
    message: err.message,
  })
})

// Middleware para rotas não encontradas
app.use("*", (req, res) => {
  res.status(404).json({
    error: "Rota não encontrada",
    message: `A rota ${req.originalUrl} não existe`,
  })
})

app.listen(PORT, "0.0.0.0", () => {
  console.log(`🚀 API rodando na porta ${PORT}`)
  console.log(`📋 Endpoints disponíveis:`)
  console.log(`   GET http://localhost:${PORT}/api/usuarios`)
  console.log(`   GET http://localhost:${PORT}/api/usuarios/:id`)
  console.log(`   GET http://localhost:${PORT}/health`)
})
