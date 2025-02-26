const fs = require('fs');

async function updateShayari() {
  try {
    const shayariData = require('./shayris.json');
    const randomIndex = Math.floor(Math.random() * shayariData.length);
    const { shayari, author } = shayariData[randomIndex];

    const cardDesign = `
<!--STARTS_HERE_SHAYRI_CARD-->
<p align="center">
    <img src="https://readme-daily-quotes.vercel.app/api?author=${encodeURIComponent(author)}&quote=${encodeURIComponent(shayari)}&theme=dark&bg_color=220a28&author_color=ffeb95&accent_color=c56a90">
</p>
<!--ENDS_HERE_SHAYRI_CARD-->
`;

    const readmePath = './README.md';
    let readmeContent = fs.readFileSync(readmePath, 'utf-8');

    const regex = /<!--STARTS_HERE_SHAYRI_CARD-->[\s\S]*<!--ENDS_HERE_SHAYRI_CARD-->/;
    readmeContent = readmeContent.replace(regex, cardDesign);

    fs.writeFileSync(readmePath, readmeContent);
    console.log('✅ Shayari updated successfully!');
  } catch (error) {
    console.error('❌ Error updating shayari:', error);
  }
}

updateShayari();
