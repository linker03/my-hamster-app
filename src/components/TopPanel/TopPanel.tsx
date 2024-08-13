import { Button } from '../Button';
import styles from './TopPanel.module.css';

interface TopPanelProps {
  score?: number;
}

export const TopPanel = ({ score = 999999999 }: TopPanelProps) => {
  const formattedNumber = score.toLocaleString('en-US', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0,
  });
  return (
    <div className={styles.root}>
      <div className={styles.buttons}>
        <Button>🇺🇸</Button>
        <Button>EN</Button>
      </div>
      <p className={styles.score}>
        <img src="/token-white.png" alt="" />
        <p>{formattedNumber}</p>
      </p>
      <div className={styles.buttons}>
        <Button>
          <img src="/help.png" alt="" />
        </Button>
        <Button>
          <img src="/wallet.png" alt="" />
        </Button>
      </div>
    </div>
  );
};
