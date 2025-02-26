const fs = require('fs');

async function updateShayari() {
  try {
    const shayariData = require('./shayris.json');
    const randomIndex = Math.floor(Math.random() * shayariData.length);
    const selectedShayari = shayariData[randomIndex];  

    const { shayari, author } = selectedShayari;  

    const cardDesign = `
<!--STARTS_HERE_QUOTE_CARD-->
<p align="center">
    <img src="https://readme-daily-quotes.vercel.app/api?author=${encodeURIComponent(author)}&shayari=${encodeURIComponent(shayari)}&theme=dark&bg_color=220a28&author_color=ffeb95&accent_color=c56a90">
</p>
<!--ENDS_HERE_QUOTE_CARD-->
`;

    const readmePath = './README.md';
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    const regex = /<!--STARTS_HERE_QUOTE_CARD-->[\s\S]*<!--ENDS_HERE_QUOTE_CARD-->/;
    readmeContent = readmeContent.replace(regex, cardDesign);

    fs.writeFileSync(readmePath, readmeContent);
    console.log('✅ Shayari updated successfully!');
  } catch (error) {
    console.error('❌ Error updating shayari:', error);
  }
}

updateShayari();




/* const fs = require('fs');

async function updateShayari() {
  try {
    const shayari = require('./shayris.json');
    const randomIndex = Math.floor(Math.random() * shayari.length);
    const { shayari, author } = shayari[randomIndex];

    const cardDesign = `
<!--STARTS_HERE_QUOTE_CARD-->
<p align="center">
    <img src="https://readme-daily-quotes.vercel.app/api?author=${encodeURIComponent(author)}&shayari=${encodeURIComponent(quote)}&theme=dark&bg_color=220a28&author_color=ffeb95&accent_color=c56a90">
</p>
<!--ENDS_HERE_QUOTE_CARD-->
`;

    const readmePath = './README.md';
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    readmeContent = readmeContent.replace(
      /<!--STARTS_HERE_QUOTE_CARD-->(.|\n)*<!--ENDS_HERE_QUOTE_CARD-->/,
      cardDesign
    );

    fs.writeFileSync(readmePath, readmeContent);
  } catch (error) {
    console.error('Error updating quote:', error);
  }
}

updateShayari(); */
