import React, { DetailedHTMLProps, HTMLAttributes }  from 'react';
import ReactDOM from 'react-dom';
import { SearchApp } from './components/SearchApp';
import { applyPolyfills, defineCustomElements, JSX as LocalJSX } from 'kclsu-components/loader';


type StencilProps<T> = {
    [P in keyof T]?: Omit<T[P], 'ref'> | HTMLAttributes<T>;
};

type ReactProps<T> = {
    [P in keyof T]?: DetailedHTMLProps<HTMLAttributes<T[P]>, T[P]>;
};

type StencilToReact<T = LocalJSX.IntrinsicElements, U = HTMLElementTagNameMap> = StencilProps<T> &
    ReactProps<U>;

declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    export namespace JSX {
        interface IntrinsicElements extends StencilToReact { }
    }
}

ReactDOM.render(<SearchApp />, document.querySelector('.search-app-root'));
applyPolyfills().then(() => {
    defineCustomElements(window);
});