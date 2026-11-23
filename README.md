# Desnomeia Ltda

> *"Desnomeia antes que seja tarde."*  
> *"Não vendemos nomes, evitamos 18 anos de bullying."*

Landing page internacional (**Português · English · Español**) de estética minimalista de alto padrão em preto obsidiana (`#080808`) e amarelo soberano (`#F5C400`) para a **Desnomeia Ltda** — consultoria personalizada para registro de novos nomes, hospedada em `https://desnomeia.tccodes.com.br`.

## Destaques

- **Identidade Visual & Logo (`logo-design-skill`):** Monograma geométrico *Sovereign Hex-D* construído em grade hexagonal exata de 30°/60° com corte editorial diagonal de desnomeação (score 100/100 em `svg_audit.py`), incluindo kit completo de favicons e variantes em `docs/brand/`.
- **Design System (`ui-ux-pro-max` + `impeccable`):** Tipografia editorial auto-hospedada (`Bodoni Moda Variable` + `Jost Variable` + `Fragment Mono`), contraste WCAG AAA em superfícies escuras e na faixa de manifesto amarelo soberano, zero dependências externas em runtime.
- **Triagem Onomástica & Concierge WhatsApp:** Avaliação preliminar interativa de nomes cogitados (com validação de sobrenome, iniciais e fricção ortográfica) integrada diretamente ao WhatsApp (`+55 45 99132-5244`) com dossiê pré-preenchido no idioma ativo (`PT`, `EN` ou `ES`).
- **Easter Egg JUSC & Abelhhudo (5s):** Um selo geométrico discreto de colmeia/abelha no rodapé (também desbloqueável clicando 3x na marca ou digitando `jusc`) revela por 5 segundos o emblema oficial do **JUSC** e o mascote **Abelhhudo**.
- **Pronto para Produção em Docker + Traefik:** Container multi-stage hardened com `nginxinc/nginx-unprivileged:1.27-alpine`, filesystem somente-leitura, `/healthz`, compressão Gzip, cache imutável e labels Traefik configuráveis via `.env`.

## Desenvolvimento Local

```bash
npm ci
npm run dev
```

Testes e build de produção:

```bash
npm run typecheck
npm test
npm run build
```

Preview local com Docker (sem Traefik):

```bash
docker compose -f docker-compose.local.yml up --build
# Acesse http://localhost:8080
```

## Deploy em Produção (VPS com Traefik)

1. Clone o repositório na sua VPS e crie o arquivo `.env` a partir do modelo:

```bash
cp .env.example .env
```

2. Ajuste as variáveis do seu Traefik no `.env`, se necessário:

```env
SITE_DOMAIN=desnomeia.tccodes.com.br
TRAEFIK_NETWORK=traefik
TRAEFIK_ENTRYPOINT=websecure
TRAEFIK_CERTRESOLVER=letsencrypt
```

3. Suba o serviço em produção:

```bash
docker compose up -d --build
```

4. Verifique o status de saúde do container:

```bash
docker compose ps
```

## Subindo para o GitHub

O repositório Git local já vem inicializado e pronto. Basta criar o repositório no seu GitHub e conectar o `origin`:

```bash
git remote add origin https://github.com/<seu-usuario>/desnomeia.git
git branch -M main
git push -u origin main
```
