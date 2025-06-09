# Use a imagem oficial do Node.js
FROM node:18-alpine

# Define o diretório de trabalho
WORKDIR /app

# Copia os arquivos de dependências
COPY package*.json ./

# Instala as dependências
RUN npm install

# Copia o código da aplicação
COPY . .

# Expõe a porta da API
EXPOSE 3001

# Define o comando para iniciar a aplicação
CMD ["node", "server.js"]
