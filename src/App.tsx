import './reset.css';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Carousel } from './components/Carousel';
import { UpgradePanel } from './components/UpgradePanel';
import { ProgressBar } from './components/ProgressBar';
import { AvatarButton } from './components/AvatarButton';
import { TopPanel } from './components/TopPanel';
import { Header } from './components/Header';
import { useState } from 'react';

const ranks = [
  { rankName: 'acolyte', levels: 1, cost: 2000 },
  { rankName: 'deacon', levels: 2, cost: 2000 },
  { rankName: 'priest', levels: 3, cost: 2000 },
  { rankName: 'bishop', levels: 2, cost: 2000 },
  { rankName: 'archbishop', levels: 1, cost: 2000 },
];

function App() {
  const [currentCarouselRank, setCurrentCarouselRank] = useState('acolyte');
  const [currentStats, setCurrentStats] = useState({
    score: 0,
    rankName: 'acolyte',
    currentLevel: 0,
  });

  const raiseScore = () => {
    setCurrentStats((state) => ({ ...state, score: state.score + 1000 }));
  };

  const currentCarouselRankIndex = ranks.findIndex(
    (item) => item.rankName === currentCarouselRank
  );
  const currentRankIndex = ranks.findIndex(
    (item) => item.rankName === currentStats.rankName
  );

  const getUpgradeButtonText = () => {
    if (currentCarouselRankIndex === currentRankIndex) return 'ACHIEVED';
    if (currentCarouselRankIndex > currentRankIndex + 1) return 'FUTURE RANK';
    if (currentCarouselRankIndex === currentRankIndex + 1) return 'UPGRADE';
    return '';
  };

  const currentCarouselRankSum = ranks[currentCarouselRankIndex].cost;

  const isUpgradeDisabled =
    getUpgradeButtonText() !== 'UPGRADE' ||
    currentCarouselRankSum > currentStats.score;

  const upgrade = () => {
    const currentRankInfo = ranks[currentRankIndex];
    if (currentRankInfo.levels === currentStats.currentLevel + 1) {
      const nextRank = ranks[currentRankIndex + 1];
      setCurrentStats((state) => ({
        score: state.score - currentRankInfo.cost,
        rankName: nextRank.rankName,
        currentLevel:
          nextRank.rankName === 'archbishop' ? state.currentLevel : 0,
      }));
    } else {
      setCurrentStats((state) => ({
        ...state,
        currentLevel: state.currentLevel + 1,
        score: state.score - currentRankInfo.cost,
      }));
    }
  };

  const onSlideChange = (rankName: string) => setCurrentCarouselRank(rankName);

  return (
    <>
      <Header />
      <TopPanel score={currentStats.score} />
      <div className="content-container">
        <AvatarButton
          currentRank={currentStats.rankName}
          playerName="Jugglerez"
          raiseScore={raiseScore}
        />
        <Carousel ranks={ranks} onSlideChange={onSlideChange} />
        <ProgressBar
          totalLevels={ranks[currentRankIndex].levels}
          currentLevel={currentStats.currentLevel}
        />
        <UpgradePanel
          text={getUpgradeButtonText()}
          sum={currentCarouselRankSum}
          isDisabled={isUpgradeDisabled}
          onClick={upgrade}
        />
      </div>

      <img className="footer" src="/footer.png" alt="" />
    </>
  );
}

export default App;
