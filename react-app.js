import React from 'https://esm.sh/react@19.2.5';
import ReactDOM from 'https://esm.sh/react-dom@19.2.5/client';

function ReactPreview() {
  const [showMore, setShowMore] = React.useState(false);
  const [theme, setTheme] = React.useState('light');

  const cards = [
    { title: 'Interactive UI', description: 'Modern React components with smooth state updates.' },
    { title: 'Fast Rendering', description: 'React 19 powers efficient UI updates for dynamic content.' },
    { title: 'Build Ready', description: 'This file is separate and can be extended into a full React app.' },
  ];

  const sectionStyle = {
    padding: '2rem',
    borderRadius: '24px',
    background: theme === 'light' ? 'rgba(255,255,255,0.92)' : 'rgba(10,14,26,0.92)',
    color: theme === 'light' ? '#111' : '#f8faff',
    boxShadow: theme === 'light'
      ? '0 24px 80px rgba(17, 24, 39, 0.08)'
      : '0 24px 80px rgba(0,0,0,0.45)',
    maxWidth: 900,
    margin: '3rem auto',
    border: theme === 'light' ? '1px solid rgba(15, 23, 42, 0.08)' : '1px solid rgba(148, 163, 184, 0.15)',
  };

  return (
    <section style={sectionStyle}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '1rem', flexWrap: 'wrap' }}>
        <div style={{ flex: '1 1 320px' }}>
          <p style={{ margin: 0, fontSize: '0.95rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: '#868f9b' }}>
            React.js preview
          </p>
          <h2 style={{ margin: '0.4rem 0 1rem', fontSize: '2rem', lineHeight: 1.05 }}>
            Dynamic UI in its own file
          </h2>
          <p style={{ lineHeight: 1.8, maxWidth: '34rem' }}>
            This section is powered by React and can be expanded into a full interactive portfolio experience.
            Toggle the theme and reveal more details to see live state-driven behavior.
          </p>
        </div>
        <button
          onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}
          style={{
            border: 'none',
            borderRadius: 999,
            padding: '0.85rem 1.25rem',
            cursor: 'pointer',
            background: theme === 'light' ? '#111827' : '#f8fafc',
            color: theme === 'light' ? '#f8fafc' : '#111827',
            fontWeight: 600,
            minWidth: '165px',
          }}
        >
          {theme === 'light' ? 'Switch to dark' : 'Switch to light'}
        </button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1rem', marginTop: '2rem' }}>
        {cards.map((card) => (
          <article key={card.title} style={{ padding: '1.25rem', borderRadius: '18px', border: theme === 'light' ? '1px solid rgba(15, 23, 42, 0.07)' : '1px solid rgba(148, 163, 184, 0.18)', background: theme === 'light' ? '#fff' : '#0b1223' }}>
            <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{card.title}</h3>
            <p style={{ margin: '0.75rem 0 0', lineHeight: 1.75, color: theme === 'light' ? '#475569' : '#cbd5e1' }}>
              {card.description}
            </p>
          </article>
        ))}
      </div>

      <div style={{ marginTop: '1.75rem' }}>
        <button
          onClick={() => setShowMore((value) => !value)}
          style={{
            border: '1px solid transparent',
            borderRadius: 999,
            padding: '0.9rem 1.4rem',
            cursor: 'pointer',
            background: 'linear-gradient(90deg, #d97706, #2563eb)',
            color: '#fff',
            fontWeight: 700,
          }}
        >
          {showMore ? 'Hide details' : 'Show more'}
        </button>
        {showMore && (
          <p style={{ marginTop: '1rem', lineHeight: 1.8, color: theme === 'light' ? '#334155' : '#cbd5e1' }}>
            React enables dynamic content updates, reusable components, and modern state-driven UI. This separate file keeps the React logic modular while preserving the existing portfolio structure.
          </p>
        )}
      </div>
    </section>
  );
}

const rootElement = document.getElementById('react-root');
if (rootElement) {
  const root = ReactDOM.createRoot(rootElement);
  root.render(<ReactPreview />);
}
