const fs = require('fs');
const pdfModule = require('pdf-parse');

let pdfParse;
if (typeof pdfModule === 'function') {
  pdfParse = pdfModule;
} else if (pdfModule.default) {
  pdfParse = pdfModule.default;
} else {
  console.log('pdf-parse is not a function, keys:', Object.keys(pdfModule));
  process.exit(1);
}

const pdfPath = './public/assets/30JanUpdated.pdf';

fs.readFile(pdfPath, (err, data) => {
  if (err) {
    console.error('Error reading PDF:', err);
    return;
  }

  pdfParse(data).then((result) => {
    console.log('PDF Text:');
    console.log(result.text);
  }).catch((err) => {
    console.error('Error parsing PDF:', err);
  });
});