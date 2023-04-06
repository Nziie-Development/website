import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PYCHero from "@site/src/components/PYCHero";
import PYCButton from "@site/src/components/Button";
import Head from '@docusaurus/Head';

export default function Home(): JSX.Element {
  return (
    <DefaultLayout
      title="Nziie"
      description="Nziie development services"
    >
<Head>
  <meta
  property="description"
  content="Imagine a custom bot made to your liking at a very cheap price."
  />
        <meta property="title" content="vNziie--" />
        
        <meta property="og:site_name" content="vNziie--"/>
        <meta
          property="og:description"
          content="Imagine a custom bot made to your liking at a very cheap price."
        />
        <meta property="og:title" content="vNziie--" />
<script async src="https://arc.io/widget.min.js#hD9CJ6sv"></script>
</Head>
      <PYCHero
        title="Nziie"
        subtitle="Imagine a custom bot made to your liking"
        hasLogo={true}
      />
      <main className="content-wrap--home-page">
      I provide cheap Discord bot services - a Pycord, HTML, CSS, JS, CSS and SCSS Developer. Imagine a custom bot made to your liking...
      </main>
    </DefaultLayout>
  );
}
