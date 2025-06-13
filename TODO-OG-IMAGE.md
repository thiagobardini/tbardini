# ✅ TODO: Corrigir Preview do WhatsApp

## Problema
A imagem não aparece quando você compartilha o link no WhatsApp porque:
- Estava apontando para `og-image.png` que não existia
- `logoNav250.png` é pequeno demais (250x250) para algumas plataformas

## Solução Rápida (JÁ FEITA) ⚡
- ✅ Atualizei as meta tags para usar `logoNav250.png` temporariamente
- ✅ Isso deve funcionar parcialmente, mas não é ideal

## Solução Completa (FAZER AGORA) 🎯

### 1. Gerar a Imagem (escolha uma opção):

**Opção A - Automática:**
```bash
npm install puppeteer
npm run generate-og
```

**Opção B - Manual:**
```bash
npm run dev
# Abra http://localhost:5173/og-image-generator.html
# Clique em "Download og-image.png"
# Mova o arquivo para a pasta public/
```

### 2. Atualizar as Meta Tags:
Depois de gerar `og-image.png`, edite `index.html`:
```html
<!-- Troque -->
<meta property="og:image" content="https://thiagobardini.com/logoNav250.png" />
<!-- Por -->
<meta property="og:image" content="https://thiagobardini.com/og-image.png" />

<!-- E atualize as dimensões -->
<meta property="og:image:width" content="1200" />
<meta property="og:image:height" content="630" />
```

### 3. Atualizar o Componente SEO:
Em `src/Components/SEO.jsx`, linha 9:
```javascript
// Troque
image = "https://thiagobardini.com/logoNav250.png"
// Por
image = "https://thiagobardini.com/og-image.png"
```

### 4. Fazer Deploy:
```bash
git add .
git commit -m "Add proper Open Graph image for social media previews"
git push
```

### 5. Testar:
- WhatsApp: Envie o link com `?v=new` no final
- Facebook: https://developers.facebook.com/tools/debug/
- Twitter: https://cards-dev.twitter.com/validator

## Resultado Esperado 🎉
Uma imagem bonita de 1200x630px com:
- Gradiente roxo de fundo
- Seu logo
- Seu nome e título
- Suas skills principais

Isso vai aparecer perfeitamente no WhatsApp, Facebook, Twitter e LinkedIn! 