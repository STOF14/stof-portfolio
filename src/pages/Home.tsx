import { useNavigate } from 'react-router-dom';
import { projects } from '../data/content';
import Footer from '../components/Footer';
import styles from './Home.module.css';

const domainLabel: Record<string, string> = {
  quant: 'Quant Finance',
  quantum: 'Quantum Computing',
  app: 'App',
  research: 'Research',
};

export default function Home() {
  const navigate = useNavigate();

  return (
    <div className={styles.page}>
      {/* ── HERO ── */}
      <section className={styles.hero}>
        <div className={styles.heroLeft}>
          <p className={styles.eyebrow}>BSc Physics — Computational Physics · UP · 2nd Year</p>
          <h1 className={styles.heroTitle}>
            Building<br />
            <em>at the edge</em><br />
            of what I know.
          </h1>
          <p className={styles.heroPitch}>
            I'm a second-year physics student at the University of Pretoria, 
            specialising in Computational Physics. I build things at the intersection
            of mathematics, physics, and computation — and document the process openly.
          </p>
        </div>
        <div className={styles.heroRight}>
          {[
            { label: 'Active projects', value: '2' },
            { label: 'Deployed apps', value: '1' },
            { label: 'Year of study', value: '2nd' },
            { label: 'Research papers', value: '0 → 2' },
          ].map(s => (
            <div key={s.label} className={styles.stat}>
              <span className={styles.statLabel}>{s.label}</span>
              <span className={styles.statValue}>{s.value}</span>
            </div>
          ))}
        </div>
      </section>

      {/* ── STATUS STRIP ── */}
      <div className={styles.statusStrip}>
        <span className={styles.statusLabel}>Now</span>
        <div className={styles.statusItems}>
          {[
            { label: 'Systematic Trading Engine', active: true },
            { label: 'Quantum Computing Platform', active: true },
            { label: 'BSc Physics Year 2, Semester 1', active: true },
            { label: 'LinkedIn — building in public', active: false },
          ].map((item) => (
            <div key={item.label} className={styles.statusItem}>
              <div className={`${styles.dot} ${item.active ? styles.active : ''}`} />
              <span className={styles.statusText}>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ── FEATURED PROJECTS ── */}
      <section className={styles.featured}>
        <div className={styles.sectionHeader}>
          <span className={styles.sectionTitle}>Selected Work</span>
          <button onClick={() => navigate('/projects')} className={styles.sectionLink}>
            All projects →
          </button>
        </div>
        <div className={styles.projectGrid}>
          {projects.map((p, i) => (
            <div
              key={p.id}
              className={styles.projectCard}
              onClick={() => navigate(`/projects`)}
              role="button"
              tabIndex={0}
              onKeyDown={(e) => e.key === 'Enter' && navigate('/projects')}
            >
              <div className={styles.cardNum}>0{i + 1}</div>
              <div className={styles.cardDomain}>{domainLabel[p.domain]}</div>
              <h2 className={styles.cardTitle}>{p.title}</h2>
              <p className={styles.cardSubtitle}>{p.subtitle}</p>
              <div
                className={`${styles.cardStatus} ${
                  p.status === 'in-progress'
                    ? styles.active
                    : p.status === 'complete'
                    ? styles.complete
                    : ''
                }`}
              >
                <span />
                {p.status === 'in-progress'
                  ? 'In progress'
                  : p.status === 'complete'
                  ? 'Deployed'
                  : 'Planned'}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── MANIFESTO ── */}
      <section className={styles.manifesto}>
        <div className={styles.manifestoLabel}>The approach</div>
        <blockquote className={styles.manifestoText}>
          The best way to understand something fully is to{' '}
          <strong>go beyond what's required.</strong> When your mind
          builds the full picture — connecting physics to finance to
          quantum computing — <em>the curriculum starts to feel easy.</em>{' '}
          That gap between knowing how something works and{' '}
          <strong>making it actually run</strong> — that's the space I live in.
        </blockquote>
      </section>

      <Footer />
    </div>
  );
}
