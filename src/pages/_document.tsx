import Document, { Head, Html, Main, NextScript } from "next/document";
import React from "react";

export default class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head />
        <body className="bg-gray-100">
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
