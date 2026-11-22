import { profile, site } from "@/content/site";
import Nav from "@/components/Nav";
import ThemeToggle from "@/components/ThemeToggle";
import SideRails from "@/components/SideRails";
import Hero from "@/components/Hero";
import Work from "@/components/Work";
import Experience from "@/components/Experience";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: profile.title,
  url: site.url,
  email: `mailto:${profile.email}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Denpasar",
    addressRegion: "Bali",
    addressCountry: "ID",
  },
  sameAs: [profile.github, profile.linkedin],
};

export default function Home() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
      <a className="skip" href="#work">
        Skip to selected work
      </a>
      <SideRails />
      <Nav />
      <main>
        <Hero />
        <Work />
        <Experience />
        <About />
        <Skills />
      </main>
      <Contact />
      <ThemeToggle />
    </>
  );
}
