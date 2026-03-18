import { books } from '../data/content';
import Footer from '../components/Footer';
import styles from './Reading.module.css';

const papers = [
  { title: 'Common Risk Factors in the Returns on Stocks and Bonds', meta: 'Fama & French · 1993 · Read when building factors in May' },
  { title: 'Returns to Buying Winners and Selling Losers', meta: 'Jegadeesh & Titman · 1993 · Read alongside momentum signal' },
  { title: 'Optimal Execution of Portfolio Transactions', meta: 'Almgren & Chriss · 2001 · Read in September with execution layer' },
  { title: 'The Deflated Sharpe Ratio: Correcting for Selection Bias', meta: 'López de Prado · 2018 · Read before any validation work' },
  { title: 'Honey, I Shrunk the Sample Covariance Matrix', meta: 'Ledoit & Wolf · 2004 · Read before portfolio construction in July' },
];

export default function Reading() {
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1 className={styles.title}>Reading</h1>
        <p className={styles.subtitle}>
          The project tells you what to read next. You don't sit down
          and read stochastic calculus on top of your QM coursework.
          You pull from the list when the build demands it.
        </p>
      </header>

      <div className={styles.tableWrap}>
        <div className={styles.tableHead}>
          <div className={styles.th}>#</div>
          <div className={styles.th}>Title</div>
          <div className={styles.th}>When</div>
          <div className={styles.th}>Why</div>
        </div>

        {books.map((b, i) => (
          <div key={b.title} className={styles.bookRow}>
            <div className={styles.rowNum}>0{i + 1}</div>
            <div>
              <div className={styles.bookTitle}>{b.title}</div>
              <div className={styles.bookAuthor}>{b.author}</div>
            </div>
            <div className={styles.bookWhen}>{b.when}</div>
            <div className={styles.bookWhy}>{b.why}</div>
          </div>
        ))}
      </div>

      <div className={styles.papers}>
        <span className={styles.papersLabel}>Papers</span>
        <div className={styles.paperList}>
          {papers.map((p) => (
            <div key={p.title} className={styles.paperItem}>
              <div className={styles.paperTitle}>{p.title}</div>
              <div className={styles.paperMeta}>{p.meta}</div>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </div>
  );
}
