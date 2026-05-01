# Community Center Guide

## Requisitos

- Node.js 20 ou superior
- npm

## Instalar

Entre na pasta do projeto:

```bash
cd community-center-guide
```

Se voce ja estiver em `C:\Users\gabri\Documents\stardew\community-center-guide`, rode:

```bash
npm install
npm run download:images
```

## Rodar em desenvolvimento

```bash
npm run dev
```

Acesse:

```text
http://localhost:3000
```

O comando `npm run dev` usa Webpack para evitar problemas de memoria/root do Turbopack no Windows.

Se quiser testar Turbopack depois:

```bash
npm run dev:turbo
```

## Validar build

```bash
npm run lint
npm run build
```

## Variaveis de ambiente

No momento o projeto nao precisa de variaveis de ambiente.

Se algum dia precisar, copie `.env.example` para `.env` e preencha os valores locais.

## Docker

Antes de usar Docker, abra o Docker Desktop e espere ele ficar rodando.

Baixe as imagens antes de criar a imagem Docker:

```bash
npm run download:images
```

Build da imagem:

```bash
docker build -t community-center-guide .
```

Rodar o container:

```bash
docker run --rm -p 3000:3000 community-center-guide
```

Ou com compose:

```bash
docker compose up --build
```

Acesse:

```text
http://localhost:3000
```
