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
    <p>I offer mainly custom Discord bots. You can contact me on my Discord server <a target="_blank" href="/discord" >Nziie Development</a> <!-- or directly using Discord DMs - <a target="_blank" href="https://discordapp.com/users/550476809280421903">vNziie--#7777</a> -->.</span><br /> <span>I also have one public bot - <a target="_blank" href="https://servermanagerbot.ml/invite">Server Manager</a>. Server Manager is a multipurpose bot, growing in features but is mainly a simple moderation bot with many customizations.</p>
     <p id="text02"><span>I code all Discord bots in Python (pycord library - discord.py v2 fork).</span><br /> <span>In a partnership with <a target="_blank" href="https://anondev.ml">AnonDev</a> I offer cheap hosting for the custom bots on powerful servers with good uptime. If you are interested in getting custom bot from me, please join <strong><a target="_blank" href="/discord" >Nziie Development</a> Discord server and open ticket </strong>. If you are interested in hosting your Discord bot on <em>AnonDev&#39;s hosting service</em>, please join the support server and open new support ticket. 
 </main>
    </DefaultLayout>
  );
}