import type React from "react"

export const metadata = {
  title: "Sistema de Usuários - Docker API",
  description: "Sistema de usuários com API containerizada usando Material UI",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
