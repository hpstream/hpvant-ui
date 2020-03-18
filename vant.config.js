const path = require('path');

module.exports = {
  name: 'hpvant-ui',
  build: {
    css: {
      preprocessor: 'less',
      base: './theme/color.less',
    },
    site: {
      publicPath: '/hpvant-ui/',
      outputDir: path.join(__dirname, 'build'),
    },
    skipInstall: ['demo-button'],
  },
  site: {
    title: 'hpvant-ui',
    logo: 'https://img.yzcdn.cn/vant/logo.png',
    nav: [
      {
        title: '开发指南',
        items: [
          {
            path: 'home',
            title: '介绍',
          },
          {
            path: 'quickstart',
            title: '快速上手',
          },
        ],
      },
      {
        title: '基础组件',
        items: [
          {
            path: 'demo-button',
            title: 'DemoButton 按钮',
          },
          {
            path: 'svg-icon',
            title: 'icon 图标',
          },
        ],
      },
    ],
  },
};
