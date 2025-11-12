## Multi-stage build (Node + serve) sem Nginx
## Stage 1: build estático
FROM node:20-alpine AS build
WORKDIR /app

# Instala dependências (aproveita cache colocando lockfile antes)
COPY package.json pnpm-lock.yaml ./
RUN corepack enable && pnpm install --frozen-lockfile

# Copia restante do código
COPY . .

# Build de produção
RUN pnpm run build

## Stage 2: runtime leve com "serve" para arquivos estáticos
FROM node:20-alpine AS runner
WORKDIR /app

# Instala servidor estático
RUN npm i -g serve@14

# Copia artefatos gerados
COPY --from=build /app/dist ./dist

EXPOSE 448

HEALTHCHECK --interval=30s --timeout=5s --retries=3 CMD wget -qO- http://localhost:448/ || exit 1

CMD ["serve", "-s", "dist", "-l", "448"]