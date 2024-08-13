import styles from './AvatarButton.module.css';

interface AvatarButtonProps {
  currentRank: string;
  playerName?: string;
  raiseScore(): void;
}

export const AvatarButton = ({
  currentRank,
  playerName = '-',
  raiseScore,
}: AvatarButtonProps) => {
  return (
    <button className={styles.root} onClick={raiseScore}>
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
