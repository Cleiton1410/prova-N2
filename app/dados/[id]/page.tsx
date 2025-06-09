"use client"

import { useState, useEffect } from "react"
import { useParams } from "next/navigation"
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,
  CircularProgress,
  Alert,
  Chip,
  Divider,
  Button,
} from "@mui/material"
import { Person, Email, Phone, LocationCity, Work, CalendarToday, ArrowBack } from "@mui/icons-material"

interface UsuarioDetalhado {
  id: number
  nome: string
  email: string
  telefone: string
  cidade: string
  profissao: string
  idade: number
  endereco: string
  empresa: string
  salario: string
  dataContratacao: string
  status: string
}

export default function DadosPage() {
  const params = useParams()
  const id = params.id as string

  const [usuario, setUsuario] = useState<UsuarioDetalhado | null>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsuario = async () => {
      try {
        const response = await fetch(`http://localhost:3001/api/usuarios/${id}`)
        if (!response.ok) {
          throw new Error("Usuário não encontrado")
        }
        const data = await response.json()
        setUsuario(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido")
      } finally {
        setLoading(false)
      }
    }

    if (id) {
      fetchUsuario()
    }
  }, [id])

  if (loading) {
    return (
      <Container maxWidth="md" sx={{ py: 4, textAlign: "center" }}>
        <CircularProgress />
        <Typography variant="h6" sx={{ mt: 2 }}>
          Carregando dados do usuário...
        </Typography>
      </Container>
    )
  }

  if (error || !usuario) {
    return (
      <Container maxWidth="md" sx={{ py: 4 }}>
        <Alert severity="error">{error || "Usuário não encontrado"}</Alert>
        <Button variant="outlined" startIcon={<ArrowBack />} onClick={() => window.close()} sx={{ mt: 2 }}>
          Fechar
        </Button>
      </Container>
    )
  }

  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box display="flex" alignItems="center" mb={3}>
        <Button variant="outlined" startIcon={<ArrowBack />} onClick={() => window.close()} sx={{ mr: 2 }}>
          Fechar
        </Button>
        <Typography variant="h4" component="h1">
          Detalhes do Usuário
        </Typography>
      </Box>

      <Card>
        <CardContent sx={{ p: 4 }}>
          <Box display="flex" alignItems="center" mb={3}>
            <Person sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
            <Box>
              <Typography variant="h5" component="h2">
                {usuario.nome}
              </Typography>
              <Chip label={usuario.status} color={usuario.status === "Ativo" ? "success" : "default"} size="small" />
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box display="grid" gridTemplateColumns={{ xs: "1fr", md: "1fr 1fr" }} gap={3}>
            <Box>
              <Typography variant="h6" gutterBottom color="primary">
                Informações Pessoais
              </Typography>

              <Box display="flex" alignItems="center" mb={2}>
                <Email color="action" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Email
                  </Typography>
                  <Typography variant="body1">{usuario.email}</Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" mb={2}>
                <Phone color="action" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Telefone
                  </Typography>
                  <Typography variant="body1">{usuario.telefone}</Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" mb={2}>
                <LocationCity color="action" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Cidade
                  </Typography>
                  <Typography variant="body1">{usuario.cidade}</Typography>
                </Box>
              </Box>

              <Box display="flex" alignItems="center" mb={2}>
                <CalendarToday color="action" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Idade
                  </Typography>
                  <Typography variant="body1">{usuario.idade} anos</Typography>
                </Box>
              </Box>
            </Box>

            <Box>
              <Typography variant="h6" gutterBottom color="primary">
                Informações Profissionais
              </Typography>

              <Box display="flex" alignItems="center" mb={2}>
                <Work color="action" sx={{ mr: 2 }} />
                <Box>
                  <Typography variant="body2" color="text.secondary">
                    Profissão
                  </Typography>
                  <Typography variant="body1">{usuario.profissao}</Typography>
                </Box>
              </Box>

              <Box mb={2}>
                <Typography variant="body2" color="text.secondary">
                  Empresa
                </Typography>
                <Typography variant="body1">{usuario.empresa}</Typography>
              </Box>

              <Box mb={2}>
                <Typography variant="body2" color="text.secondary">
                  Salário
                </Typography>
                <Typography variant="body1">{usuario.salario}</Typography>
              </Box>

              <Box mb={2}>
                <Typography variant="body2" color="text.secondary">
                  Data de Contratação
                </Typography>
                <Typography variant="body1">{usuario.dataContratacao}</Typography>
              </Box>
            </Box>
          </Box>

          <Divider sx={{ my: 3 }} />

          <Box>
            <Typography variant="h6" gutterBottom color="primary">
              Endereço
            </Typography>
            <Typography variant="body1">{usuario.endereco}</Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  )
}
