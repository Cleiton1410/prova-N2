"use client"

import { useState, useEffect } from "react"
import {
  Container,
  Typography,
  Card,
  CardContent,
  CardActions,
  Button,
  Grid,
  Box,
  CircularProgress,
  Alert,
  AppBar,
  Toolbar,
} from "@mui/material"
import { Person, Email, Phone } from "@mui/icons-material"
import MuiThemeProvider from "@/components/mui-theme-provider"

interface Usuario {
  id: number
  nome: string
  email: string
  telefone: string
  cidade: string
}

export default function UsuariosPage() {
  const [usuarios, setUsuarios] = useState<Usuario[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchUsuarios = async () => {
      try {
        const response = await fetch("http://localhost:3001/api/usuarios")
        if (!response.ok) {
          throw new Error("Erro ao buscar usuários")
        }
        const data = await response.json()
        setUsuarios(data)
      } catch (err) {
        setError(err instanceof Error ? err.message : "Erro desconhecido")
      } finally {
        setLoading(false)
      }
    }

    fetchUsuarios()
  }, [])

  const handleVerDetalhes = (id: number) => {
    window.open(`/dados/${id}`, "_blank")
  }

  if (loading) {
    return (
      <MuiThemeProvider>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Sistema de Usuários
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" sx={{ py: 8, textAlign: "center" }}>
          <CircularProgress size={60} />
          <Typography variant="h6" sx={{ mt: 3 }}>
            Carregando usuários...
          </Typography>
        </Container>
      </MuiThemeProvider>
    )
  }

  if (error) {
    return (
      <MuiThemeProvider>
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div">
              Sistema de Usuários
            </Typography>
          </Toolbar>
        </AppBar>
        <Container maxWidth="md" sx={{ py: 4 }}>
          <Alert severity="error" sx={{ mt: 2 }}>
            {error}
          </Alert>
        </Container>
      </MuiThemeProvider>
    )
  }

  return (
    <MuiThemeProvider>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Sistema de Usuários
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="lg" sx={{ py: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          Lista de Usuários
        </Typography>
        <Typography variant="subtitle1" color="text.secondary" paragraph>
          Clique em "Ver Detalhes" para abrir os dados completos em uma nova aba
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {usuarios.map((usuario) => (
            
            <Grid item xs={12} sm={6} md={4} key={usuario.id}>
              <Card
                sx={{
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  transition: "transform 0.2s",
                  "&:hover": {
                    transform: "translateY(-4px)",
                  },
                }}
              >
                <CardContent sx={{ flexGrow: 1 }}>
                  <Box display="flex" alignItems="center" mb={2}>
                    <Person color="primary" sx={{ mr: 1, fontSize: 28 }} />
                    <Typography variant="h6" component="h2">
                      {usuario.nome}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" mb={1}>
                    <Email fontSize="small" color="action" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      {usuario.email}
                    </Typography>
                  </Box>

                  <Box display="flex" alignItems="center" mb={1}>
                    <Phone fontSize="small" color="action" sx={{ mr: 1 }} />
                    <Typography variant="body2" color="text.secondary">
                      {usuario.telefone}
                    </Typography>
                  </Box>

                  <Typography variant="body2" color="text.secondary">
                    <strong>Cidade:</strong> {usuario.cidade}
                  </Typography>
                </CardContent>

                <CardActions sx={{ p: 2 }}>
                  <Button
                    size="small"
                    variant="contained"
                    onClick={() => handleVerDetalhes(usuario.id)}
                    fullWidth
                    sx={{ py: 1 }}
                  >
                    Ver Detalhes
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </MuiThemeProvider>
  )
}
