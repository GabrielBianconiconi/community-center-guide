# Community Center Guide

## Requirements

- Node.js 20 or newer
- npm

## Install

Enter the project folder:

```bash
cd community-center-guide
```

If you are already in `C:\Users\gabri\Documents\stardew\community-center-guide`, run:

```bash
npm install
npm run download:images
```

## Development

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

`npm run dev` uses Webpack to avoid Turbopack memory/root issues on Windows.

To test Turbopack later:

```bash
npm run dev:turbo
```

## Validate Build

```bash
npm run lint
npm run build
```

## Environment Variables

The project does not require environment variables right now.

If that changes later, copy `.env.example` to `.env` and fill in local values.

## Docker

Before using Docker, open Docker Desktop and wait until it is running.

Download images before building the Docker image:

```bash
npm run download:images
```

Build the image:

```bash
docker build -t community-center-guide .
```

Run the container:

```bash
docker run --rm -p 3000:3000 community-center-guide
```

Or use compose:

```bash
docker compose up --build
```

Open:

```text
http://localhost:3000
```
