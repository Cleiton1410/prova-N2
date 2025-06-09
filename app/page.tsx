"use client"
import { Button, Container, Typography, Box, AppBar, Toolbar } from "@mui/material"
import Link from "next/link"
import MuiThemeProvider from "@/components/mui-theme-provider"

export default function HomePage() {
  return (
    <MuiThemeProvider>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div">
            Sistema de Usuários - Docker API
          </Typography>
        </Toolbar>
      </AppBar>

      <Container maxWidth="md" sx={{ py: 8 }}>
        <Box textAlign="center">
          <Typography variant="h3" component="h1" gutterBottom color="primary">
            Sistema de Usuários
          </Typography>
          <Typography variant="h6" color="text.secondary" paragraph>
            Aplicação com consumo de API via Docker
          </Typography>
          <Button component={Link} href="/usuarios" variant="contained" size="large" sx={{ mt: 4, px: 4, py: 1.5 }}>
            Ver Usuários
          </Button>
        </Box>
      </Container>
    </MuiThemeProvider>
  )
}
