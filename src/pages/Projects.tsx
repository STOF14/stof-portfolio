import { projects } from '../data/content';
import Footer from '../components/Footer';
import styles from './Projects.module.css';

const domainLabel: Record<string, string> = {
  quant: 'Quant Finance',
  quantum: 'Quantum Computing',
  app: 'Full-Stack App',
  research: 'Research',
};

export default function Projects() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Projects</h1>
        <p className={styles.subtitle}>
          Three active tracks. One research-to-execution trading engine.
          One quantum computing research platform. One deployed app.
          All documented in public.
        </p>
      </header>

      <div className={styles.list}>
        {projects.map((p, i) => (
          <div key={p.id} className={styles.projectRow} tabIndex={0}>
            <div className={styles.rowNum}>0{i + 1}</div>

            <div className={styles.rowMain}>
              <div className={styles.rowDomain}>{domainLabel[p.domain]}</div>
              <h2 className={styles.rowTitle}>{p.title}</h2>
              <p className={styles.rowSubtitle}>{p.description}</p>
              <div className={styles.rowStack}>
                {p.stack.map((t) => (
                  <span key={t} className={styles.tag}>{t}</span>
                ))}
              </div>
            </div>

            <div className={styles.rowLayers}>
              {p.layers.map((l) => (
                <div key={l} className={styles.layerItem}>— {l}</div>
              ))}
            </div>

            <div className={styles.rowMeta}>
              <div
                className={`${styles.rowStatus}`}
              >
                <div
                  className={`${styles.statusDot} ${
                    p.status === 'in-progress'
                      ? styles.active
                      : p.status === 'complete'
                      ? styles.complete
                      : ''
                  }`}
                />
                {p.status === 'in-progress'
                  ? 'In progress'
                  : p.status === 'complete'
                  ? 'Deployed'
                  : 'Planned'}
              </div>
              <div className={styles.rowYear}>{p.year}</div>
              <div className={styles.rowArrow}>→</div>
            </div>
          </div>
        ))}
      </div>

      <div className={styles.pitchBlock}>
        <div className={styles.pitchInner}>
          <p className={styles.pitchEyebrow}>The pitch</p>
          <p className={styles.pitchText}>
            Most students learn the theory. A few build a script.{' '}
            <em>Almost none build the full system.</em> These projects
            are the full systems — every layer, from first principles,
            documented rigorously, visualised beautifully, honest
            about exactly where the edge is and where it isn't.
          </p>
        </div>
      </div>

      <Footer />
    </div>
  );
}
