const imgZoom = [
  'vuepress-plugin-zooming',
  {
    selector: '.page img',
    delay: 700,
    options: {
      bgColor: 'white',
      zIndex: 10000,
    },
  },
];

module.exports = imgZoom;