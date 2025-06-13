const puppeteer = require('puppeteer');
const path = require('path');

async function generateOGImage() {
  console.log('🎨 Generating Open Graph image...');
  
  const browser = await puppeteer.launch({
    headless: true,
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });
  
  const page = await browser.newPage();
  
  // Set viewport to OG image dimensions
  await page.setViewport({
    width: 1200,
    height: 630,
    deviceScaleFactor: 2 // For better quality
  });
  
  // Navigate to the generator page
  const generatorPath = `file://${path.join(__dirname, 'public/og-image-generator.html')}`;
  await page.goto(generatorPath, { waitUntil: 'networkidle0' });
  
  // Wait for the image to load
  await page.waitForTimeout(2000);
  
  // Take screenshot of just the canvas
  const canvas = await page.$('#canvas');
  await canvas.screenshot({
    path: 'public/og-image.png',
    omitBackground: true
  });
  
  await browser.close();
  
  console.log('✅ Open Graph image generated successfully at public/og-image.png');
  console.log('📏 Dimensions: 1200x630px');
  console.log('🎯 Perfect for WhatsApp, Facebook, Twitter, and LinkedIn!');
}

// Alternative method using canvas without puppeteer
async function generateOGImageWithCanvas() {
  const { createCanvas, loadImage } = require('canvas');
  const fs = require('fs');
  
  const canvas = createCanvas(1200, 630);
  const ctx = canvas.getContext('2d');
  
  // Background gradient
  const gradient = ctx.createLinearGradient(0, 0, 1200, 630);
  gradient.addColorStop(0, '#667eea');
  gradient.addColorStop(1, '#764ba2');
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 1200, 630);
  
  // Add decorative circles
  ctx.fillStyle = 'rgba(255, 255, 255, 0.05)';
  for (let i = 0; i < 15; i++) {
    ctx.beginPath();
    ctx.arc(
      Math.random() * 1200, 
      Math.random() * 630, 
      Math.random() * 100 + 50, 
      0, 
      Math.PI * 2
    );
    ctx.fill();
  }
  
  // Load and draw logo
  try {
    const logo = await loadImage('public/logoNav250.png');
    
    // White background for logo
    ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
    roundRect(ctx, 500, 120, 200, 200, 20);
    ctx.fill();
    
    // Draw logo centered
    ctx.drawImage(logo, 550, 170, 100, 100);
  } catch (err) {
    console.log('Could not load logo:', err);
  }
  
  // Add text
  ctx.fillStyle = 'white';
  ctx.font = 'bold 72px Arial';
  ctx.textAlign = 'center';
  ctx.shadowColor = 'rgba(0, 0, 0, 0.3)';
  ctx.shadowBlur = 10;
  ctx.shadowOffsetY = 4;
  
  // Name
  ctx.fillText('Thiago Bardini', 600, 420);
  
  // Title
  ctx.font = '36px Arial';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.95)';
  ctx.fillText('Software Engineer & Founder', 600, 480);
  
  // Skills
  ctx.font = '24px Arial';
  ctx.fillStyle = 'rgba(255, 255, 255, 0.9)';
  ctx.fillText('React • TypeScript • Node.js • AI Integration', 600, 540);
  
  // Save image
  const buffer = canvas.toBuffer('image/png');
  fs.writeFileSync('public/og-image.png', buffer);
  
  console.log('✅ Open Graph image generated with canvas!');
}

function roundRect(ctx, x, y, w, h, r) {
  ctx.beginPath();
  ctx.moveTo(x + r, y);
  ctx.arcTo(x + w, y, x + w, y + h, r);
  ctx.arcTo(x + w, y + h, x, y + h, r);
  ctx.arcTo(x, y + h, x, y, r);
  ctx.arcTo(x, y, x + w, y, r);
  ctx.closePath();
}

// Check which method to use
if (require.main === module) {
  try {
    require.resolve('puppeteer');
    generateOGImage().catch(console.error);
  } catch {
    try {
      require.resolve('canvas');
      generateOGImageWithCanvas().catch(console.error);
    } catch {
      console.log('📦 Please install either puppeteer or canvas:');
      console.log('   npm install puppeteer');
      console.log('   OR');
      console.log('   npm install canvas');
    }
  }
} 