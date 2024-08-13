import './reset.css';
import './App.css';
import 'swiper/css';
import 'swiper/css/navigation';

import { Carousel } from './components/Carousel';
import { UpgradePanel } from './components/UpgradePanel';

function App() {
  return (
    <>
      <Carousel />
      <UpgradePanel />
      <img className="footer" src="/footer.png" alt="" />
    </>
  );
}

export default App;
