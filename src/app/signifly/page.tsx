import type { Metadata } from 'next';
import Link from 'next/link';
import ClientWork from '@/components/ClientWork';
import EmbedFrame from '@/components/EmbedFrame';
import Reveal from '@/components/Reveal';
import Scramble from '@/components/Scramble';
import IntroReplay from '@/components/IntroReplay';
import Smooth from '@/components/Smooth';
import { profile } from '@/data/profile';
import styles from './signifly.module.css';

/*
 * An application page for one job: Creative Developer at Signifly.
 * Built in their stack (Next.js, TypeScript, React) and kept out of search
 * engines and the sitemap; it is only reached by the link in the application.
 */
export const metadata: Metadata = {
  title: 'Til Signifly',
  description: 'Ansøgning til stillingen som Creative Developer hos Signifly.',
  robots: { index: false, follow: false },
  openGraph: {
    title: 'Til Signifly | Emily Filsoof, Creative Developer',
    description: 'Ansøgning til stillingen som Creative Developer: smooth frontend, interaktion i produktion og agentic engineering.',
    url: '/signifly',
    siteName: profile.shortName,
    locale: 'da_DK',
    type: 'website',
  },
};

const REPO = 'https://github.com/Emilyfilsoof/portfolio';
const CV = '/cv/EmilyFilsoof_CV_CreativeDeveloper.pdf';

const handmade: { term: string; detail: string; touch?: string; replay?: boolean }[] = [
  { term: 'Intro', detail: 'Discipliner skifter, mit navn scrambler, og pladen glider op.', replay: true },
  { term: 'Ring-cursor', detail: 'Vokser over projekter og trækker magnetisk i links og knapper.' },
  {
    term: 'Scramble-labels',
    detail: 'Prøv at holde musen over overskrifterne på den her side.',
    touch: 'Prøv at trykke på overskrifterne på den her side.',
  },
  { term: 'Marquee og tilt', detail: 'Scroll-drevet typebånd og projektkort, der vipper i 3D.' },
  { term: 'Farveskift', detail: 'Baggrunden følger den sektion, du er i, så der aldrig blinker en forkert farve.' },
  { term: 'Smooooth', detail: 'Ét requestAnimationFrame-loop, der skriver direkte til DOM. Ingen re-renders.' },
];

const typesExcerpt = [
  'export type Block =',
  "  | { kind: 'lead'; text: string }",
  "  | { kind: 'statement'; text: string; attribution?: string }",
  "  | { kind: 'prose'; label?: string; heading?: string; paragraphs: string[] }",
  "  | { kind: 'figure'; label?: string; asset: Asset; wide?: boolean }",
  "  | { kind: 'figures'; columns: 2 | 3; assets: Asset[] }",
  "  | { kind: 'quote'; text: string; attribution: string }",
  "  | { kind: 'list'; label: string; items: { term: string; detail: string }[] }",
  '  // ... table, code, link, credits',
];

const gitLog = [
  { hash: '102531e', msg: 'Link DSB in Worked with to the Vinge Togværksted case' },
  { hash: 'b141f4b', msg: 'Use Hairholic front page as its cover' },
  { hash: 'da99774', msg: 'Calmer client work: one card per site, details on case pages' },
  { hash: '78fa846', msg: 'Add client work section with live sites and Green Log quiz' },
];

export default function SigniflyPage() {
  return (
    <div lang="da">
      <section className={`page ${styles.hero}`} data-bg="#f4f2ec" data-ink="#0c0c0c">
        <div className={styles.heroTop}>
          <Scramble className="label label-ink" text="Ansøgning · Creative Developer · Signifly" />
          <span className={styles.meta}>Emily Rose Shereen Filsoof · København</span>
        </div>

        <div className={styles.heroMain}>
          <h1 className={styles.title}>
            <span className={styles.line}>Hej Signifly.</span>
            <span className={styles.line}>Jeg bygger det</span>
            <span className={`${styles.line} ${styles.smoothLine}`}>
              <Smooth />
            </span>
          </h1>
          <p className={styles.hint}>
            <span className={styles.hintPointer}>Bevæg musen hurtigt, eller scroll. Ordet følger med.</span>
            <span className={styles.hintTouch}>Scroll hurtigt. Ordet følger med.</span>
          </p>
        </div>

        <div className={styles.heroBottom}>
          <p className={styles.lead}>
            Jeg er designer og frontendudvikler. Jeg designer i Figma, bygger i TypeScript, React og Next.js og
            bruger agenter hver dag uden at give køb på håndværket. Den her side er bygget til jer, i jeres stack.
          </p>
          <div className={styles.actions}>
            <a className={styles.primary} href="#shipped" data-mag>
              Se hvad jeg har shippet ↓
            </a>
            <a className={styles.secondary} href={REPO} target="_blank" rel="noreferrer" data-mag>
              Koden på GitHub ↗
            </a>
            <a className={styles.secondary} href={CV} target="_blank" rel="noreferrer" data-mag>
              CV (PDF)
            </a>
          </div>
        </div>
      </section>

      <section className={`page ${styles.section}`} data-bg="#f4f2ec" data-ink="#0c0c0c">
        <div className={styles.sectionHead}>
          <Scramble className="label label-ink" text="01 · Smooth frontend og interaktioner" />
          <h2 className={styles.h2}>Alt, der bevæger sig på emilyfilsoof.com, er bygget fra bunden.</h2>
          <p className={styles.note}>Ingen animationsbiblioteker. Respekterer prefers-reduced-motion.</p>
        </div>
        <ol className={styles.grid3}>
          {handmade.map((item, i) => (
            <Reveal as="li" key={item.term} delay={i * 60} className={styles.cell}>
              <span className={styles.no}>{String(i + 1).padStart(2, '0')}</span>
              <Scramble className={styles.term} text={item.term} />
              {item.touch ? (
                <span className={styles.detail}>
                  <span className={styles.hintPointer}>{item.detail}</span>
                  <span className={styles.hintTouch}>{item.touch}</span>
                </span>
              ) : (
                <span className={styles.detail}>{item.detail}</span>
              )}
              {item.replay && <IntroReplay className={styles.replay} label="Afspil introen ↺" />}
            </Reveal>
          ))}
        </ol>
      </section>

      <section className={styles.dark} data-bg="#0c0c0c" data-ink="#f4f2ec">
        <div className={`page ${styles.section}`}>
          <div className={styles.sectionHead}>
            <Scramble className="label" text="02 · Interaktion i produktion" />
            <h2 className={styles.h2}>En onboarding, jeg har designet og kodet. Den kører live her.</h2>
            <p className={styles.bodyDark}>
              The Green Log har over 100 handlinger. Onboardingen stiller tre spørgsmål og giver hver organisation de
              tre handlinger, den skal starte med, og et signup-link med svarene udfyldt. Det er én selvstændig blok
              HTML, CSS og JavaScript, der monteres i Drupal via en data-attribut og skalerer et fast 375px-layout til
              enhver telefon.
            </p>
          </div>
          <div className={styles.embed}>
            <EmbedFrame className={styles.iframe} src="/embeds/greenlog-quiz.html" title="The Green Log: onboarding" />
          </div>
        </div>
      </section>

      <section className={`page ${styles.section}`} data-bg="#f4f2ec" data-ink="#0c0c0c">
        <div className={styles.sectionHead}>
          <Scramble className="label label-ink" text="03 · Agentic engineering, med håndværket i centrum" />
          <h2 className={styles.h2}>Agenten skriver koden. Arkitekturen bestemmer, hvad den må.</h2>
        </div>
        <div className={styles.split}>
          <ul className={styles.rules}>
            <li>
              <b>Typer som rammer.</b> Indholdet ligger i typede datafiler, og en case kan kun bestå af de blokke, typen
              tillader. Agenten kan ændre alt indhold, men ikke opfinde nye komponenter.
            </li>
            <li>
              <b>Faste regler.</b> Intet er færdigt, før det er tjekket på desktop og mobil med screenshots, og ingen tekst
              må påstå noget, der ikke passer.
            </li>
            <li>
              <b>Fordelingen.</b> Jeg arbejder med Claude direkte i kodebasen. Den skriver, tester og bygger. Jeg bestemmer
              retningen, og hvornår det er godt nok.
            </li>
          </ul>
          <div className={styles.code}>
            <div className={styles.codeBar}>
              <span>src/data/types.ts</span>
            </div>
            <pre className={styles.pre}>
              <code>{typesExcerpt.join('\n')}</code>
            </pre>
            <div className={styles.codeBar}>
              <span>$ git log --oneline</span>
            </div>
            <pre className={styles.pre}>
              <code>
                {gitLog.map((c) => (
                  <span key={c.hash} className={styles.logLine}>
                    <span className={styles.hash}>{c.hash}</span> {c.msg}
                    {'\n'}
                  </span>
                ))}
                <span className={styles.trailer}>Co-Authored-By: Claude</span>
              </code>
            </pre>
          </div>
        </div>
      </section>

      <div id="shipped">
        <ClientWork label="04 · Shipped: live sites" note="Klik på et site for at se, hvad jeg byggede" from="signifly" />
      </div>

      <section id="more" className={`page ${styles.section}`} data-bg="#f4f2ec" data-ink="#0c0c0c">
        <div className={styles.sectionHead}>
          <Scramble className="label label-ink" text="05 · Mere kreativ kode" />
        </div>
        <div className={styles.more}>
          <Link href="/work/ambient-motion-painter?fra=signifly" className={styles.moreCard} data-cursor="Open">
            <span className={styles.moreTitle}>Ambient Motion Painter</span>
            <span className={styles.detail}>
              Telefonens kamera og bevægelsessensorer bliver en pensel: to p5.js-sketches forbundet over MQTT maler,
              mens man går.
            </span>
          </Link>
          <Link href="/work/breathing-the-city?fra=signifly" className={styles.moreCard} data-cursor="Open">
            <span className={styles.moreTitle}>Breathing the City</span>
            <span className={styles.detail}>
              Mit speciale: en håndsyet åndedrætsmaske og et feltkit, testet med fire løbere over fire uger.
            </span>
          </Link>
        </div>
      </section>

      <section className={`page ${styles.cta}`} data-bg="#00e5ff" data-ink="#0c0c0c">
        <h2 className={styles.ctaTitle}>Lad os tale om det.</h2>
        <div className={styles.contact}>
          <a href={`mailto:${profile.contact.email}`} data-mag>
            {profile.contact.email}
          </a>
          <a href={`tel:${profile.contact.phoneHref}`} data-mag>
            +45 {profile.contact.phone}
          </a>
          <a href={profile.contact.linkedinHref} target="_blank" rel="noreferrer" data-mag>
            LinkedIn ↗
          </a>
          <a href={REPO} target="_blank" rel="noreferrer" data-mag>
            GitHub ↗
          </a>
          <a href={CV} target="_blank" rel="noreferrer" data-mag>
            CV (PDF)
          </a>
        </div>
        <p className={styles.ctaNote}>Taler og skriver dansk og arbejder gerne på engelsk.</p>
      </section>
    </div>
  );
}
