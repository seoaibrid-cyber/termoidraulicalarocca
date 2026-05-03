const puppeteer = require('puppeteer-core');

async function analyzeSERP(query) {
  try {
    const browserURL = 'http://localhost:9222';
    console.log(`Connecting to browser at ${browserURL}...`);
    const browser = await puppeteer.connect({ browserURL });
    
    console.log(`Opening new page for query: ${query}`);
    const page = await browser.newPage();
    await page.goto(`https://www.google.it/search?q=${encodeURIComponent(query)}`, { waitUntil: 'domcontentloaded' });
    
    console.log('Extracting search results...');
    const results = await page.evaluate(() => {
      const extracted = [];
      const h3s = document.querySelectorAll('h3');
      for (const h3 of h3s) {
        if (!h3.closest('a')) continue;
        const link = h3.closest('a').href;
        
        let snippet = '';
        let parentBlock = h3.closest('div');
        for(let i=0; i<3; i++) {
          if(!parentBlock) break;
          const textBlock = parentBlock.nextElementSibling;
          if (textBlock && textBlock.textContent.length > 50) {
            snippet = textBlock.textContent;
            break;
          }
          parentBlock = parentBlock.parentElement;
        }

        extracted.push({
          title: h3.textContent,
          url: link,
          snippet: snippet.slice(0, 150).replace(/\s+/g, ' ')
        });
      }
      return extracted;
    });
    
    console.log(`\n--- TOP ORGANIC RESULTS FOR '${query}' ---`);
    results.forEach((res, i) => {
      console.log(`${i+1}. TITLE: ${res.title}`);
      console.log(`   URL: ${res.url}`);
      console.log(`   SNIP: ${res.snippet}\n`);
    });
    
    await page.close();
    await browser.disconnect();
    
  } catch (error) {
    console.error('Error during scraping:', error);
  }
}

const args = process.argv.slice(2);
const query = args[0] || 'idraulico salerno';
analyzeSERP(query);
