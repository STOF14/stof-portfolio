import { useState } from 'react';
import { roadmap } from '../data/content';
import Footer from '../components/Footer';
import styles from './Roadmap.module.css';

export default function Roadmap() {
  const [active, setActive] = useState('now');

  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Roadmap</h1>
        <p className={styles.subtitle}>
          A year mapped honestly. Two parallel tracks.
          Academics always win during exam blocks.
          July doesn't get wasted.
        </p>
      </header>

      <div className={styles.timeline}>
        <div className={styles.timelineAxis}>
          <div className={styles.axisLine}>
            {roadmap.map((phase) => (
              <button
                key={phase.id}
                className={`${styles.axisItem} ${
                  active === phase.id
                    ? phase.status === 'active'
                      ? styles.current
                      : styles.active
                    : ''
                }`}
                onClick={() => setActive(phase.id)}
              >
                {phase.period}
              </button>
            ))}
          </div>
        </div>

        <div className={styles.phases}>
          {roadmap.map((phase) => (
            <div
              key={phase.id}
              id={`phase-${phase.id}`}
              className={`${styles.phase} ${
                active === phase.id || phase.status === 'active'
                  ? phase.status === 'active'
                    ? styles.current
                    : styles.active
                  : ''
              }`}
              onClick={() => setActive(phase.id)}
            >
              <div className={styles.phaseHead}>
                <span className={styles.phasePeriod}>{phase.period}</span>
                <h2 className={styles.phaseTitle}>{phase.title}</h2>
                {phase.status === 'active' && (
                  <span className={styles.currentBadge}>Now</span>
                )}
              </div>
              <div className={styles.phaseItems}>
                {phase.items.map((item) => (
                  <div key={item.label} className={styles.phaseItem}>
                    <div className={styles.itemLabel}>{item.label}</div>
                    <div className={styles.itemDetail}>{item.detail}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.principle}>
        <span className={styles.principleLabel}>Governing rule</span>
        <p className={styles.principleText}>
          <strong>8–10 hours per week</strong> on the project during semester.{' '}
          <strong>20–25 hours per week</strong> during university holidays.
          Research reading in 30–45 minute daily sessions — not competing with lectures.{' '}
          The project tells you what to learn next.{' '}
          <strong>Academics always win during exam blocks.</strong>
        </p>
      </div>

      <Footer />
    </div>
  );
}
