
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/angular-static-app/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/angular-static-app"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 519, hash: 'd57f2887ac598391e8f45e16b78d6553b865824cc1d79f53ddb3d495ebd10050', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1032, hash: '0eb13735e3bb393f7de6641214a692756b5684ae48c06d82c77d0d7ccd6090ad', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 20870, hash: '944b4039022c399b25b3ce22dee65647c4dafded6b6c886c2ff60bdf6e4e0ff7', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
