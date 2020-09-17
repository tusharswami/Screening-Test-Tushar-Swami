import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="shortcut icon" href="https://tusharswami.github.io/Screening-Test-Tushar-Swami/static/images/favicon.ico" />
          <title>Tushar Swami: Test Solution build with NextJS</title>
          <meta name="description" content="This app has been build with regards as a Screening test for Frontend Developer. This app has been solely build by Tushar Swami using NextJS"/>
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
