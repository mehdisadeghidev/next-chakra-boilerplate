import Document, { Html, Head, Main, NextScript } from 'next/document';

export default class AppDocument extends Document {
  render() {
    return (
      <Html lang="fa-IR" dir="rtl">
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
