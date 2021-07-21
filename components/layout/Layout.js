import React, { Fragment } from "react";
import Header from "./Header";
import { Global, css } from "@emotion/react";
import Head from "next/head";

const Layout = (props) => {
  return (
    <Fragment>
      <Global
        styles={css`
          :root {
            --gris: #3d3d3d;
            --gris2: #6f6f6f;
            --gris3: #e1e1e1;
            --naranja: #da552f;
          }

          html {
            font-size: 62.5%;
            box-sizing: border-box;
          }

          *,
          *::before,
          *::after {
            box-sizing: inherit;
          }

          body {
            font-family: 'Ubuntu', sans-serif;  
            font-size: 1.6rem; /* = 16px */
            line-height: 1.5;
          }

          h1,
          h2,
          h3 {
            margin: 0 0 2rem 0;
            line-height: 1.5;
          }

          h1, h2 {
            font-family: 'Roboto Slab', serif;
            font-weight: 700;
          }

          h3 {
            font-family: 'Ubuntu', sans-serif;
          }

          ul {
            list-style: none;
            margin: 0;
            padding: 0;
          }

          a {
            text-decoration: none;
          }

          .lds-circle {
            display: inline-block;
            transform: translateZ(1px);
          }
          .lds-circle > div {
            display: inline-block;
            width: 64px;
            height: 64px;
            margin: 8px;
            border-radius: 50%;
            background: var(--naranja);
            animation: lds-circle 2.4s cubic-bezier(0, 0.2, 0.8, 1) infinite;
          }
          @keyframes lds-circle {
            0%, 100% {
              animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
            }
            0% {
              transform: rotateY(0deg);
            }
            50% {
              transform: rotateY(1800deg);
              animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
            }
            100% {
              transform: rotateY(3600deg);
            }
          }

        `}
      />

      <Head>
        <title>Product Hunt Firebase y Next.js</title>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
          integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
          crossOrigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        {/* eslint-disable-next-line @next/next/no-page-custom-font*/}
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@400;700&family=Ubuntu:wght@400;700&display=swap" rel="stylesheet" />
        {/*eslint-disable-next-line @next/next/no-css-tags*/}
        <link href="/static/css/app.css" rel="stylesheet" />
      </Head>

      <Header />

      <main>{props.children}</main>
    </Fragment>
  );
};

export default Layout;
