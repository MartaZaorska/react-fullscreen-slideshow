import { useState } from 'react';
import FullscreenSlideshow from './FullscreenSlideshow';
import { images } from './data';

function App() {
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  const openHandler = () => {
    setActiveIndex(1);
    setIsOpen(true);
  }

  return (
    <>
      <FullscreenSlideshow data={images} isOpen={isOpen} setIsOpen={setIsOpen} activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <button className="btn" onClick={openHandler}>Open Fullscreen Slideshow</button>
    </>
  );
}

export default App;
