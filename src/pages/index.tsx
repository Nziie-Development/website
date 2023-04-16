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
        subtitle="Imagine a custom bot made to your liking."
        hasLogo={true}
      />
      <main className="content-wrap--home-page">
        <div className="image_container">
        <a href='https://redirect.nziie.is-a.dev/purchase-basic'><img src='/img/nziie_banners1.png' className="index_image betterimage"/></a>
        <a href='https://redirect.nziie.is-a.dev/purchase-advanced'><img src='/img/nziie_banners2.png' className="index_image betterimage"/></a>
        <a href='https://redirect.nziie.is-a.dev/purchase-premium'><img src='/img/nziie_banners3.png' className="index_image betterimage"/></a>
        </div>
      </main>
    </DefaultLayout>
  );
}
