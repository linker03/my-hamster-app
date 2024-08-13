import styles from './ProgressBar.module.css';

interface ProgressBarProps {
  totalLevels?: number;
  currentLevel?: number;
}

export const ProgressBar = ({
  totalLevels = 1,
  currentLevel = 0,
}: ProgressBarProps) => {
  const targetProgress =
    totalLevels === currentLevel
      ? 100
      : Math.floor((100 / totalLevels) * (currentLevel + 1));
  const currentProgress = Math.floor((100 / totalLevels) * currentLevel);
  return (
    <div className={styles.root}>
      <div
        className={styles.targetProgress}
        style={{ width: `${targetProgress}%` }}
      />
      <div
        className={styles.progress}
        style={{ width: `${currentProgress}%` }}
      />
    </div>
  );
};
