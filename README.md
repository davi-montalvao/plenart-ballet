This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Descrição do Projeto

`Plenarte` é o site de uma escola de ballet, construído com Next.js (App Router) e Styled Components. O layout inclui seções para apresentação, classes, instrutores, galeria com carrossel responsivo, menu hamburger no mobile e um botão flutuante "Subir" que aparece ao rolar a página.

Principais pontos:
- Stack: Next.js 16, React 19, Styled Components.
- Layout baseado em `app/` (App Router) e estilos em `app/styles.tsx` + `app/globals.css`.
- Componentes reutilizáveis em `app/components` (ex.: `GalleryCarousel`, `Container`).

## Como rodar (desenvolvimento)

1. Instale as dependências:

```bash
npm install
```

2. Rode o servidor de desenvolvimento:

```bash
npm run dev
```

3. Abra http://localhost:3000 no navegador.

## Notas
- Tailwind foi removido do projeto; estilos são feitos com Styled Components e CSS global. Se encontrar classes utilitárias do Tailwind (ex.: `flex`, `bg-...`, `text-...`), converta-as para estilos no `app/styles.tsx` ou componentes.
- Para alterar o carrossel veja `app/components/GalleryCarousel.tsx`.

## Contribuições
- Abra uma issue ou envie um pull request com melhorias.

---


## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
