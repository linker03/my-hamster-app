import styles from './Header.module.css';

export const Header = () => {
  return (
    <div className={styles.root}>
      <button className={styles.backButton}>
        <img src="arrow-left.svg" alt="" />
        Back
      </button>
      <div className={styles.appTitle}>
        <h1>2eden</h1>
        <p>Bot</p>
      </div>
      <button className={styles.menuButton}>
        <img src="/menu.png" alt="" />
      </button>
    </div>
  );
};
