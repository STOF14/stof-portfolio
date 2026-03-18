import Footer from '../components/Footer';
import styles from './Downloads.module.css';

const downloads = [
  {
    num: '01',
    title: 'Curriculum Vitae',
    desc: 'Full CV covering education, research projects (trading engine, quantum platform, UniLife), experience, and technical skills. Updated March 2026.',
    meta: 'Word Document  ·  .docx  ·  March 2026',
    file: '/downloads/Luyolo_Stofile_CV.docx',
    label: 'Download CV',
  },
  {
    num: '02',
    title: 'Cover Letter',
    desc: 'Template cover letter detailing the systematic trading engine, quantum platform, and background. Adapt the opener and bracketed sections per application.',
    meta: 'Word Document  ·  .docx  ·  March 2026',
    file: '/downloads/Luyolo_Stofile_Cover_Letter.docx',
    label: 'Download Cover Letter',
  },
];

export default function Downloads() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Downloads</h1>
        <p className={styles.subtitle}>
          CV and cover letter, updated March 2026. The cover letter
          is a template — bracketed sections adapt per application.
        </p>
      </header>
      <div className={styles.grid}>
        {downloads.map((d) => (
          <div key={d.num} className={styles.card}>
            <div className={styles.cardNum}>{d.num}</div>
            <h2 className={styles.cardTitle}>{d.title}</h2>
            <p className={styles.cardDesc}>{d.desc}</p>
            <p className={styles.cardMeta}>{d.meta}</p>
            <a href={d.file} download className={styles.btn}>
              {d.label} ↓
            </a>
          </div>
        ))}
      </div>
      <div className={styles.note}>
        <p className={styles.noteText}>
          These documents are kept current. If you are reviewing this profile
          for a research, internship, or vacation work opportunity and need a
          tailored version — reach out via LinkedIn or email.
        </p>
      </div>
      <Footer />
    </div>
  );
}