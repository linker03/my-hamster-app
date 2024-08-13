import clsx from 'clsx';
import styles from './UpgradePanel.module.css';

interface UpgradePanelProps {
  isDisabled?: boolean;
  sum: number;
  text: string;
  onClick(): void;
}

export const UpgradePanel = ({
  isDisabled,
  sum = 0,
  text,
  onClick,
}: UpgradePanelProps) => {
  return (
    <div className={styles.root}>
      <div className={styles.textContainer}>
        <p>
          Impact force (per click) <span className={styles.count}>1</span>
        </p>
        <p>
          Max energy<span className={styles.count}>1000</span>
        </p>
        <p>
          Recovery (per second)<span className={styles.count}>1</span>
        </p>
      </div>
      <button
        className={styles.upgradeButton}
        disabled={isDisabled}
        onClick={onClick}
      >
        <div
          className={clsx(styles.upgradeButtonShared, styles.upgradeButtonLeft)}
        >
          <p>
            <img className={styles.token} src="/token.svg" alt="" />
            <span>{sum}</span>
          </p>
          <img src="/wave-left.svg" alt="" />
        </div>
        <div
          className={clsx(
            styles.upgradeButtonShared,
            styles.upgradeButtonRight
          )}
        >
          <img src="/wave-right.svg" alt="" />
          <p>{text}</p>
        </div>
      </button>
    </div>
  );
};
