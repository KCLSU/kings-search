import React from 'react';
import ReactDOM from 'react-dom';
import { SearchApp } from './components/SearchApp';
import { applyPolyfills, defineCustomElements} from 'kclsu-components/loader';
import {Components as Some} from 'kclsu-components/loader'

declare global {
    namespace JSX {
      interface IntrinsicElements {
        "text-card": Some.TextCardAttributes;
      }
    }
  }

ReactDOM.render(<SearchApp />, document.querySelector('.search-app-root'));
applyPolyfills().then(() => {
    defineCustomElements(window);
});