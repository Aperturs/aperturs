import Document, { Html, Head, Main, NextScript, DocumentContext } from 'next/document';

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html>
        <Head>
          <title>My App - Home</title>
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
