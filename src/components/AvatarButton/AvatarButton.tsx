import styles from './AvatarButton.module.css';

interface AvatarButtonProps {
  currentRank: string;
  playerName?: string;
}

export const AvatarButton = ({
  currentRank,
  playerName = '-',
}: AvatarButtonProps) => {
  return (
    <button className={styles.root}>
      <div className={styles.avatarHalo}>
        <img className={styles.avatar} src="/avatar.png" alt="" />
        <p className={styles.avatarName}>{playerName}</p>
      </div>
      <p className={styles.rankTitle}>
        Rank: «<span>{currentRank}</span>»
      </p>
      <img
        className={styles.rankLogo}
        src={`/${currentRank}.png`}
        alt={currentRank}
      />
    </button>
  );
};
