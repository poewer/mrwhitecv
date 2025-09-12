# Etap 1: Build aplikacji
FROM node:18-alpine AS builder

# Ustaw katalog roboczy
WORKDIR /app

# Skopiuj package.json i package-lock.json
COPY package*.json ./

# Instalacja zależności
RUN npm install --legacy-peer-deps

# Skopiuj resztę kodu
COPY . .

# Zbuduj aplikację Next.js
RUN npm run build

# Etap 2: Serwowanie aplikacji
FROM node:18-alpine AS runner

WORKDIR /app

# Kopiujemy tylko potrzebne pliki z buildu
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/.next ./.next
COPY --from=builder /app/public ./public
COPY --from=builder /app/node_modules ./node_modules

# Zmienna środowiskowa (możesz dostosować)
ENV NODE_ENV=production

# Uruchom aplikację
CMD ["npm", "start"]

# Port wewnątrz kontenera
EXPOSE 3000
