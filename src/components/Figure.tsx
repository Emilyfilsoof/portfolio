import type { Asset } from '@/data/types';
import styles from './Figure.module.css';

/**
 * Renders an image when `src` is set, and a clearly labelled placeholder when it
 * is not — the placeholder names the exact original file that belongs there, so
 * nothing about a project is ever fabricated.
 *
 * Drop files into /public/images/<project>/ and set `src` in the project data.
 */
export default function Figure({
  asset,
  index,
  className = '',
}: {
  asset: Asset;
  index?: number;
  className?: string;
}) {
  const ratio = asset.ratio ?? '4 / 3';
  const dark = asset.tone === 'dark';
  const contained = asset.presentation === 'contained';

  return (
    <figure className={`${styles.figure} ${className}`}>
      {asset.src ? (
        contained ? (
          <div
            className={styles.containFrame}
            style={{ '--figure-frame-height': `${asset.frameHeight ?? 520}px` } as React.CSSProperties}
          >
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img className={styles.containedImg} src={asset.src} alt={asset.alt} />
          </div>
        ) : (
          // eslint-disable-next-line @next/next/no-img-element
          <img className={styles.img} src={asset.src} alt={asset.alt} style={{ aspectRatio: ratio }} />
        )
      ) : (
        <div
          className={`${styles.placeholder} ${dark ? styles.dark : ''}`}
          style={{ aspectRatio: ratio }}
          role="img"
          aria-label={`Image placeholder: ${asset.alt}`}
        >
          <div className={styles.placeholderTop}>
            <span className={styles.slot}>Image slot</span>
            <span className={styles.id}>{asset.id}</span>
          </div>
          <div className={styles.placeholderBody}>
            <p className={styles.need}>{asset.need}</p>
            <p className={styles.path}>/public/images/{asset.id}.jpg</p>
          </div>
        </div>
      )}
      {(asset.caption || index !== undefined) && (
        <figcaption className={styles.caption}>
          {index !== undefined && <span className={styles.num}>{String(index).padStart(2, '0')}</span>}
          {asset.caption ?? asset.alt}
        </figcaption>
      )}
    </figure>
  );
}
