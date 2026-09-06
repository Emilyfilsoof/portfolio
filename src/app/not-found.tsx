import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="page" style={{ paddingBlock: '96px 60px' }}>
      <p className="label">404</p>
      <h1 className="display" style={{ margin: '12px 0 20px' }}>
        NOT
        <br />
        HERE
      </h1>
      <p className="body">That page does not exist.</p>
      <p style={{ marginTop: 24 }}>
        <Link
          href="/work"
          style={{
            fontSize: 12,
            fontWeight: 600,
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            borderBottom: '2px solid var(--ink)',
            paddingBottom: 3,
          }}
        >
          Selected work →
        </Link>
      </p>
    </section>
  );
}
