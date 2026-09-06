import type { Block } from '@/data/types';
import Figure from './Figure';
import Reveal from './Reveal';
import styles from './CaseBlocks.module.css';

/**
 * Renders a case study from its declared blocks. Adding a new block kind means
 * adding a case here and a member to the union in data/types.ts — nothing else.
 */
export default function CaseBlocks({ blocks }: { blocks: Block[] }) {
  let figureCount = 0;

  return (
    <div className={styles.blocks}>
      {blocks.map((block, i) => {
        switch (block.kind) {
          case 'lead':
            return (
              <Reveal key={i} className={styles.block}>
                <p className={styles.lead}>{block.text}</p>
              </Reveal>
            );

          case 'statement':
            return (
              <Reveal key={i} className={styles.block}>
                <div className={styles.statement}>
                  <p>{block.text}</p>
                  {block.attribution && <p className={styles.attribution}>{block.attribution}</p>}
                </div>
              </Reveal>
            );

          case 'prose':
            return (
              <Reveal key={i} className={`${styles.block} ${styles.spine} ${styles.ruled}`}>
                <div className={styles.metaCol}>{block.label && <p className="label">{block.label}</p>}</div>
                <div className={styles.contentCol}>
                  {block.heading && <h2 className={styles.heading}>{block.heading}</h2>}
                  {block.paragraphs.map((p, j) => (
                    <p key={j} className={styles.p}>
                      {p}
                    </p>
                  ))}
                </div>
              </Reveal>
            );

          case 'split':
            return (
              <Reveal key={i} className={`${styles.block} ${styles.spine}`}>
                <div className={styles.metaCol}>{block.label && <p className="label">{block.label}</p>}</div>
                <div className={`${styles.contentCol} ${styles.splitGrid}`}>
                  {[block.left, block.right].map((side, j) => (
                    <div key={j} className={styles.splitCell}>
                      <p className={styles.splitLabel}>{side.label}</p>
                      {side.paragraphs.map((p, k) => (
                        <p key={k} className={styles.p}>
                          {p}
                        </p>
                      ))}
                    </div>
                  ))}
                </div>
              </Reveal>
            );

          case 'figure': {
            figureCount += 1;
            const n = figureCount;
            return (
              <Reveal key={i} className={`${styles.block} ${block.wide ? styles.wide : styles.spine}`}>
                {!block.wide && (
                  <div className={styles.metaCol}>{block.label && <p className="label">{block.label}</p>}</div>
                )}
                <div className={block.wide ? '' : styles.contentCol}>
                  {block.wide && block.label && <p className={`label ${styles.wideLabel}`}>{block.label}</p>}
                  <Figure asset={block.asset} index={n} />
                </div>
              </Reveal>
            );
          }

          case 'figures':
            return (
              <Reveal key={i} className={`${styles.block} ${styles.spine}`}>
                <div className={styles.metaCol}>{block.label && <p className="label">{block.label}</p>}</div>
                <div
                  className={`${styles.contentCol} ${block.layout === 'stack' ? styles.figureStack : ''}`}
                  style={
                    block.layout === 'stack'
                      ? undefined
                      : {
                          display: 'grid',
                          gap: '16px',
                          gridTemplateColumns: `repeat(auto-fit, minmax(min(280px, 100%), 1fr))`,
                        }
                  }
                >
                  {block.assets.map((asset) => {
                    figureCount += 1;
                    return <Figure key={asset.id} asset={asset} index={figureCount} />;
                  })}
                </div>
              </Reveal>
            );

          case 'quote':
            return (
              <Reveal key={i} className={`${styles.block} ${styles.spine}`}>
                <blockquote className={`${styles.contentCol} ${styles.quote}`}>
                  <p className={styles.quoteText}>“{block.text}”</p>
                  <footer className={styles.quoteFoot}>
                    <span>{block.attribution}</span>
                    {block.original && <span className={styles.original}>{block.original}</span>}
                  </footer>
                </blockquote>
              </Reveal>
            );

          case 'list':
            return (
              <Reveal key={i} className={`${styles.block} ${styles.spine}`}>
                <div className={styles.metaCol}>
                  <p className="label">{block.label}</p>
                </div>
                <div className={styles.contentCol}>
                  {block.heading && <h2 className={styles.heading}>{block.heading}</h2>}
                  <dl className={styles.dl}>
                    {block.items.map((item) => (
                      <div className={styles.dlRow} key={item.term}>
                        <dt className={styles.dt}>{item.term}</dt>
                        <dd className={styles.dd}>{item.detail}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </Reveal>
            );

          case 'table':
            return (
              <Reveal key={i} className={`${styles.block} ${styles.spine}`}>
                <div className={styles.metaCol}>
                  <p className="label">{block.label}</p>
                </div>
                <div className={styles.contentCol}>
                  {block.heading && <h2 className={styles.heading}>{block.heading}</h2>}
                  <div className={styles.tableWrap}>
                    <table className={styles.table}>
                      <thead>
                        <tr>
                          {block.head.map((h) => (
                            <th key={h}>{h}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {block.rows.map((row, j) => (
                          <tr key={j}>
                            {row.map((cell, k) => (
                              <td key={k}>{cell}</td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              </Reveal>
            );

          case 'code':
            return (
              <Reveal key={i} className={`${styles.block} ${styles.spine}`}>
                <div className={styles.metaCol}>
                  <p className="label">{block.label}</p>
                </div>
                <div className={styles.contentCol}>
                  <pre className={styles.pre}>
                    <code>{block.lines.join('\n')}</code>
                  </pre>
                  {block.caption && <p className={styles.caption}>{block.caption}</p>}
                </div>
              </Reveal>
            );

          case 'link':
            return (
              <Reveal key={i} className={`${styles.block} ${styles.spine}`}>
                <div className={styles.metaCol}>
                  <p className="label">{block.label}</p>
                </div>
                <div className={styles.contentCol}>
                  <a className={styles.bigLink} href={block.href} target="_blank" rel="noreferrer">
                    {block.text}
                  </a>
                  {block.note && <p className={styles.caption}>{block.note}</p>}
                </div>
              </Reveal>
            );

          case 'credits':
            return (
              <Reveal key={i} className={`${styles.block} ${styles.spine} ${styles.credits}`}>
                <div className={styles.metaCol}>
                  <p className="label">Credits</p>
                </div>
                <div className={styles.contentCol}>
                  <p className={styles.p}>{block.role}</p>
                  <p className={`${styles.p} ${styles.creditsContext}`}>{block.context}</p>
                  <div className={styles.creditsGrid}>
                    <div>
                      <p className="label label-grey">Methods</p>
                      <ul className={styles.ul}>
                        {block.methods.map((m) => (
                          <li key={m}>{m}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="label label-grey">Tools</p>
                      <ul className={styles.ul}>
                        {block.tools.map((t) => (
                          <li key={t}>{t}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </Reveal>
            );

          default:
            return null;
        }
      })}
    </div>
  );
}
