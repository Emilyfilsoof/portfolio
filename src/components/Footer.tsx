import Link from 'next/link';
import { profile } from '@/data/profile';
import FooterCv from './FooterCv';
import HideOn from './HideOn';
import styles from './Footer.module.css';

/** Contact: the email at display scale, everything else in mono. */
export default function Footer() {
  return (
    <footer className={styles.footer} id="contact" data-bg="#0c0c0c" data-ink="#f4f2ec">
      {/* /signifly ends with its own contact block, so the big one is left out there. */}
      <HideOn paths={['/signifly']}>
        <div className={`page ${styles.inner}`}>
          <p className={styles.label}>Get in touch</p>

          <a className={styles.email} href={`mailto:${profile.contact.email}`} data-mag>
            {profile.contact.email.split('@')[0]}
            <wbr />@{profile.contact.email.split('@')[1]}
          </a>

          <div className={styles.foot}>
            <div className={styles.actions}>
              <a
                className={styles.primary}
                href={profile.contact.linkedinHref}
                target="_blank"
                rel="noreferrer"
                data-mag
              >
                LinkedIn
              </a>
              <FooterCv className={styles.ghost} />
              <a className={styles.ghost} href={`tel:${profile.contact.phoneHref}`} data-mag>
                {profile.contact.phone}
              </a>
            </div>
            <nav className={styles.links} aria-label="Footer">
              <Link className={styles.link} href="/work">
                Work
              </Link>
              <Link className={styles.link} href="/#about">
                About
              </Link>
            </nav>
          </div>
        </div>
      </HideOn>

      <div className={styles.band}>
        <span>{profile.availability}</span>
        <span className={styles.bandMeta}>{profile.location}</span>
      </div>
    </footer>
  );
}
