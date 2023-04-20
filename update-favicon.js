const download = require('image-downloader');
const path = require('path');
const prompt = require('prompt-sync')();

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
manifestProps.short_name = prompt('Fill in the short_name (default, Portfolio):');
manifestProps.name = prompt('Fill in the full name (default, My portfolio):');

const filesToDownload = [
  { fileName: 'favicon.ico', size: '64x64' },
  { fileName: 'logo192.png', size: '192x192' },
  { fileName: 'logo512.png', size: '512x512' },
];

Promise.all(filesToDownload.map(({ size, fileName }) => download.image({
  url: `https://www.github.com/LeandroFariasLourenco.png?size=${size}`,
  dest: path.join(__dirname, `./public/${fileName}`),
})));
