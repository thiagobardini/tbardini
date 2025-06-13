# 🔧 Como Corrigir o Preview do WhatsApp/Social Media

## O Problema
Quando você compartilha seu portfólio no WhatsApp, Facebook ou outras redes sociais, a imagem não aparece ou aparece apenas o ícone pequeno (tbtag.png).

## Por que isso acontece?
1. **Imagem inexistente**: As meta tags apontavam para `/og-image.png` que não existia
2. **Tamanho inadequado**: WhatsApp precisa de imagens com pelo menos 300x200px (ideal: 1200x630px)
3. **Cache**: Plataformas sociais fazem cache das imagens

## Solução Rápida (Temporária) ✅
Já atualizei as meta tags para usar `logoNav250.png`, mas esta imagem é pequena (250x250px) e pode não aparecer bem em todas as plataformas.

## Solução Definitiva 🎯

### Opção 1: Gerar Imagem Manualmente
1. Abra no navegador: `http://localhost:5173/og-image-generator.html`
2. Clique em "Download og-image.png"
3. Coloque o arquivo em `/public/og-image.png`
4. Atualize as meta tags no `index.html`:
```html
<meta property="og:image" content="https://thiagobardini.com/og-image.png" />
<meta property="twitter:image" content="https://thiagobardini.com/og-image.png" />
```

### Opção 2: Gerar Automaticamente
```bash
# Instale uma das dependências
npm install puppeteer
# OU
npm install canvas

# Execute o script
node generate-og-image.js
```

## Testar as Mudanças 🧪

### 1. Facebook Debugger
- Acesse: https://developers.facebook.com/tools/debug/
- Cole seu URL: https://thiagobardini.com
- Clique em "Debug" e depois "Scrape Again"

### 2. Twitter Card Validator
- Acesse: https://cards-dev.twitter.com/validator
- Cole seu URL e valide

### 3. WhatsApp (Forçar Atualização)
- Adicione um parâmetro ao URL: `https://thiagobardini.com?v=2`
- Ou limpe o cache do WhatsApp

### 4. LinkedIn Post Inspector
- Acesse: https://www.linkedin.com/post-inspector/
- Cole seu URL e inspecione

## Meta Tags Ideais 📱
```html
<!-- Imagem principal (1200x630px) -->
<meta property="og:image" content="https://thiagobardini.com/og-image.png" />
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
<meta property="og:image:type" content="image/png" />

<!-- Imagem alternativa quadrada (para WhatsApp em alguns casos) -->
<meta property="og:image" content="https://thiagobardini.com/og-image-square.png" />
<meta property="og:image:width" content="512" />
<meta property="og:image:height" content="512" />
```

## Requisitos da Imagem 📐
- **Tamanho mínimo**: 300x200px
- **Tamanho recomendado**: 1200x630px
- **Tamanho máximo do arquivo**: 8MB
- **Formatos**: PNG, JPG, GIF
- **Proporção**: 1.91:1 (ideal)

## Dicas Importantes 💡
1. **Use HTTPS**: A imagem DEVE estar em HTTPS
2. **URL absoluto**: Use URL completo, não relativo
3. **Primeira imagem**: A primeira meta tag og:image é a mais importante
4. **Sem hotlinking**: A imagem deve estar no seu próprio servidor

## Deploy no Vercel 🚀
Após fazer o upload da imagem:
```bash
git add public/og-image.png
git commit -m "Add Open Graph image for social media preview"
git push
```

O Vercel irá automaticamente servir a imagem com HTTPS.

## Troubleshooting 🔍
- **Imagem não atualiza**: Adicione `?v=timestamp` ao final do URL
- **WhatsApp mostra imagem antiga**: Envie com parâmetro diferente
- **Facebook não mostra**: Use o debugger para forçar novo scraping
- **Imagem cortada**: Certifique-se que está 1200x630px 