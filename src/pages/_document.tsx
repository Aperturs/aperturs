import React from 'react';
import { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends React.Component {
  render(): JSX.Element {
    return (
      <Html>
        <Head>
          <script
            id="mcjs"
            src="https://chimpstatic.com/mcjs-connected/js/users/11745289bae4b1acf862f6450/c2ad266f7d39b4c9568a4951f.js"
            async
            defer
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
