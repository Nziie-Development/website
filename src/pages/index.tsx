import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import PYCHero from "@site/src/components/PYCHero";
import PYCButton from "@site/src/components/Button";

export default function Home(): JSX.Element {
  return (
    <DefaultLayout
      title="Nziie"
      description="Nziie Development services"
    >
      <PYCHero
        title="Nziie's Website"
        subtitle="Imagine a cheap custom bot made to your liking"
        hasLogo={true}
      />
      <main className="content-wrap--home-page">
      I provide cheap Discord bot services - a Pycord, HTML, CSS, JS, CSS and SCSS Developer. Imagine a custom made to your liking...
      </main>
    </DefaultLayout>
  );
}
