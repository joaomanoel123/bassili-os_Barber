# Dom Bassilio — Landing Page

Landing page da barbearia **Dom Bassilio** (Campinas - SP). React + Vite + TypeScript + Tailwind CSS + Lucide.

Fontes (Cormorant Garamond e Inter) são hospedadas localmente via `@fontsource`, sem dependência do Google Fonts.

## Executar

```bash
npm install
npm run dev        # servidor de desenvolvimento (http://localhost:5173)
npm run build      # build de produção em dist/
npm run preview    # serve o build localmente
```

## Onde editar

Tudo que é comercial fica em **`src/config/business.ts`**:

- nome, cidade, WhatsApp, Instagram e mensagem padrão;
- serviços (nome, descrição, `price` e `duration` opcionais);
- imagens (hero, sobre, galeria) e textos dos diferenciais.

Enquanto `price` não for preenchido, o card mostra "Consulte pelo WhatsApp". `duration` só aparece se existir.

Os links do WhatsApp são gerados por `src/lib/whatsapp.ts` (`buildWhatsAppLink`), que codifica a mensagem corretamente.

## Trocar as imagens

As imagens atuais são **ilustrações de demonstração** (`public/images/*.svg`), não fotos da barbearia.
Coloque as fotos reais em `public/images/` (de preferência `.webp`/`.jpg` otimizadas, em preto e branco para combinar com o visual), então em `business.ts` altere `src`, `alt` e `placeholder: false`. Os avisos "Imagem de demonstração" somem automaticamente.

## Publicar no GitHub Pages

O projeto já está configurado (`base: './'` em `vite.config.ts` + workflow em `.github/workflows/deploy.yml`). Funciona em `usuario.github.io/<repositorio>/` e também em domínio próprio.

1. Crie um repositório no GitHub e envie o projeto para a branch `main`:
   ```bash
   git init
   git add .
   git commit -m "Landing page Dom Bassilio"
   git branch -M main
   git remote add origin https://github.com/<usuario>/<repositorio>.git
   git push -u origin main
   ```
2. No repositório: **Settings → Pages → Build and deployment → Source: GitHub Actions**.
3. A aba **Actions** executa o deploy a cada push na `main`. Ao terminar, o endereço aparece em Settings → Pages.

Domínio próprio (opcional): configure em Settings → Pages → Custom domain.

Se trocar imagens, use sempre a função `asset('images/arquivo.jpg')` em `business.ts`, para o caminho funcionar no GitHub Pages.

## Outras hospedagens

O build gera arquivos estáticos em `dist/`. Opções:

- **Vercel / Netlify / Cloudflare Pages**: conecte o repositório, comando `npm run build`, pasta de saída `dist`.
- **Hospedagem comum**: envie o conteúdo de `dist/` para o servidor.

Depois de publicar, preencha `siteUrl` em `business.ts` e adicione `og:image` e `canonical` no `index.html`.

## Pendências (informações a confirmar)

Nada abaixo foi inventado; está oculto ou configurável:

- fotografias reais (hero, sobre, galeria);
- lista real de serviços, preços e durações;
- endereço, horário de funcionamento e mapa (não incluídos);
- URL do site e imagem de compartilhamento (Open Graph).
