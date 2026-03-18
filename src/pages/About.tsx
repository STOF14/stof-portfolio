import Footer from '../components/Footer';
import styles from './About.module.css';

const facts = [
  { key: 'Degree', val: 'BSc Physics — Computational Physics' },
  { key: 'University', val: 'University of Pretoria' },
  { key: 'Year', val: '2nd Year (2026)' },
  { key: 'Origin', val: 'East London, Eastern Cape' },
  { key: 'Languages', val: 'Multilingual' },
  { key: 'LinkedIn', val: '500+ connections, 0 posts (for now)' },
  { key: 'Interests', val: 'Quant finance, Quantum computing, QIT' },
  { key: 'Target', val: 'International Masters → HRT / IBM Quantum' },
];

const skills = [
  {
    group: 'Languages',
    items: ['Python', 'TypeScript', 'JavaScript', 'C', 'Java', 'LaTeX'],
  },
  {
    group: 'Libraries & Tools',
    items: ['numpy', 'pandas', 'cvxpy', 'React', 'Supabase', 'Vite'],
  },
  {
    group: 'Domain',
    items: ['Statistical modelling', 'Numerical methods', 'Linear algebra', 'Algorithm design', 'Backtesting'],
  },
];

export default function About() {
  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.eyebrow}>Luyolo Stofile — STOF</p>
          <h1 className={styles.name}>
            Physicist.
            <span className={styles.nameItalic}>Builder.</span>
          </h1>
          <div className={styles.bio}>
            <p className={styles.bioPara}>
              At 15 I was shooting sports events on weekends, editing until midnight,
              and delivering files to clients before school. By the time I finished
              matric I had six years of running a real business under my belt.
              Most people my age were figuring out what they wanted to do.{' '}
              <em>I was already doing it.</em>
            </p>
            <p className={styles.bioPara}>
              Then I discovered physics. And everything got harder — and more interesting.
            </p>
            <p className={styles.bioPara}>
              I'm now a second-year BSc student at the University of Pretoria, where
              Computational Physics sits at the collision point of three things I can't
              stop thinking about: the mathematics of how the universe behaves, the
              algorithms that let us model it, and the systems we build to make sense of it all.
            </p>
            <p className={styles.bioPara}>
              I closed both businesses — the photography and the apparel brand I built
              and scaled nationally — and went all in. The project on my desk right now
              is a full systematic trading engine, written from scratch. Every layer.
              No shortcuts. The kind of thing that teaches you where your understanding
              actually stops.
            </p>
            <p className={styles.bioPara}>
              <em>That gap between knowing how something works and making it actually
              run — that's the space I live in.</em>
            </p>
          </div>
        </div>

        <div className={styles.heroRight}>
          <div className={styles.factsLabel}>Profile</div>
          <div className={styles.factList}>
            {facts.map((f) => (
              <div key={f.key} className={styles.fact}>
                <span className={styles.factKey}>{f.key}</span>
                <span className={styles.factVal}>{f.val}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ── */}
      <section className={styles.skills}>
        <span className={styles.skillsLabel}>Technical</span>
        <div className={styles.skillColumns}>
          {skills.map((g) => (
            <div key={g.group} className={styles.skillGroup}>
              <div className={styles.skillGroupTitle}>{g.group}</div>
              {g.items.map((s) => (
                <div key={s} className={styles.skillItem}>{s}</div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── BUSINESSES ── */}
      <section className={styles.businesses}>
        <span className={styles.bizLabel}>Before</span>
        <div className={styles.bizGrid}>
          <div className={styles.bizCard}>
            <div className={styles.bizName}>Stof Photography</div>
            <div className={styles.bizPeriod}>Apr 2020 – Mar 2026 · 6 years</div>
            <p className={styles.bizDesc}>
              Freelance event and sports photography. Client booking, on-site
              technical photography, post-production editing, digital asset
              management. Full project lifecycle, solo.
            </p>
            <span className={styles.bizClosed}>Closed to focus on research</span>
          </div>
          <div className={styles.bizCard}>
            <div className={styles.bizName}>SthnStyle</div>
            <div className={styles.bizPeriod}>Jul 2024 – Jan 2026 · 1 yr 7 mos</div>
            <p className={styles.bizDesc}>
              Founded and scaled an online apparel brand nationally. Design,
              e-commerce, customer relations, social media marketing, inventory
              management, order fulfilment, pricing strategy.
            </p>
            <span className={styles.bizClosed}>Closed to focus on research</span>
          </div>
        </div>
      </section>

      {/* ── QUOTE ── */}
      <section className={styles.quote}>
        <blockquote className={styles.quoteText}>
          I'd rather be uncertain about something that matters{' '}
          <em>than comfortable doing something that doesn't.</em>{' '}
          <strong>The confusion is the learning.</strong> Every time something
          breaks or a concept doesn't click, that's the exact moment the
          project is doing its job.
        </blockquote>
        <p className={styles.quoteSource}>— How I work</p>
      </section>

      <Footer />
    </div>
  );
}
