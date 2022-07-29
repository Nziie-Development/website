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
</Head>
      <PYCHero
        title="Nziie"
        subtitle="Imagine a custom bot made to your liking"
        hasLogo={true}
      />
      <main className="content-wrap--home-page">
      I provide cheap Discord bot services - a Pycord, HTML, CSS, JS, CSS and SCSS Developer. Imagine a custom made to your liking...
      </main>
    </DefaultLayout>
  );
}