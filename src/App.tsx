import './reset.css';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Carousel } from './components/Carousel';
import { UpgradePanel } from './components/UpgradePanel';
import { ProgressBar } from './components/ProgressBar';
import { AvatarButton } from './components/AvatarButton';
import { TopPanel } from './components/TopPanel';

function App() {
  return (
    <>
      <TopPanel />
      <div className="content-container">
        <AvatarButton currentRank="acolyte" playerName="Jugglerez" />
        <Carousel />
        <ProgressBar totalLevels={3} currentLevel={1} />
        <UpgradePanel />
      </div>

      <img className="footer" src="/footer.png" alt="" />
    </>
  );
}

export default App;
