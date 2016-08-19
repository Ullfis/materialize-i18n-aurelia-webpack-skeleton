
import 'materialize-css/bin/materialize.css';
import '../styles/styles.css';

// comment out if you don't want a Promise polyfill (remove also from webpack.config.js)
import * as Bluebird from 'bluebird';
Bluebird.config({ warnings: false });

import 'jquery';
import 'materialize-css';
import {Aurelia} from 'aurelia-framework';
import Backend from 'i18next-xhr-backend';

export async function configure(aurelia: Aurelia) {
  aurelia.use
    .standardConfiguration()
    .developmentLogging()
    .plugin('aurelia-materialize-bridge', b => b.useAll())
    .plugin('aurelia-i18n', instance => {
      instance.i18next.use(Backend);
      return instance.setup({
        ns: ['translation'],
        defaultNs: 'translation',
        backend: {
          loadPath: 'locales/{{lng}}/{{ns}}.json',
        },
        lng : 'en',
        attributes : ['t','i18n'],
        fallbackLng : 'en',
        debug : false
      });
  });

  // Uncomment the line below to enable animation.
  // aurelia.use.plugin('aurelia-animator-css');
  // if the css animator is enabled, add swap-order="after" to all router-view elements

  // Anyone wanting to use HTMLImports to load views, will need to install the following plugin.
  // aurelia.use.plugin('aurelia-html-import-template-loader')

  await aurelia.start();
  aurelia.setRoot('app');

  // if you would like your website to work offline (Service Worker),
  // install and enable the @easy-webpack/config-offline package in webpack.config.js and uncomment the following code:
  /*
  const offline = await System.import('offline-plugin/runtime');
  offline.install();
  */
}
