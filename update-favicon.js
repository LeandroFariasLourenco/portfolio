const download = require('image-downloader');
const path = require('path');
const prompt = require('prompt-sync')();
const fs = require('fs');

const manifestProps = {
  name: '',
  short_name: '',
  start_url: '.',
  icons: [
    {
      src: 'favicon.ico',
      sizes: '64x64 32x32 24x24 16x16',
      type: 'image/x-icon',
    },
    {
      src: 'logo192.png',
      type: 'image/png',
      sizes: '192x192',
    },
    {
      src: 'logo512.png',
      type: 'image/png',
      sizes: '512x512',
    },
  ],
  display: 'standalone',
};
manifestProps.short_name = prompt('Fill in the short_name (default, Portfolio):') || 'Portfolio';
manifestProps.name = prompt('Fill in the full name (default, My portfolio):') || 'My portfolio';

const filesToDownload = manifestProps.icons.map(({ src, sizes }) => ({ fileName: src, size: sizes.split(/\/s/g)[0] }));

(async () => {
  await Promise.all(filesToDownload.map(({ size, fileName }) => download.image({
    url: `https://www.github.com/LeandroFariasLourenco.png?size=${size}`,
    dest: path.join(__dirname, `./public/${fileName}`),
  })));

  fs.writeFile('./public/manifest.json', JSON.stringify(manifestProps), 'utf-8', () => {});
})();
