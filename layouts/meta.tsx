import Head from 'next/head';
import React from 'react';

const Meta = () => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta charSet="utf-8" />      <title>Project P</title>
      <link rel="shortcut icon" type="image/x-icon" href="/static/favicon.ico" />
      <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32"/>
       <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16"/>
      <link
        href="https://fonts.googleapis.com/css?family=Lexend+Deca&display=swap"
        rel="stylesheet"
      />
    </Head>
  </div>
);

export default Meta;
