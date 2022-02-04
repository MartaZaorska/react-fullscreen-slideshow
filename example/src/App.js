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
      <header className="header">
        <h1>Want to create amazing fullscreen slideshow?</h1>
        <button className="button" onClick={openHandler}>Open Fullscreen Slideshow</button>
        <a href="https://github.com/MartaZaorska/fullscreen-slideshow" rel="noreferrer" target="_blank">See documentation on Github</a>
      </header>
    </>
  );
}

export default App;
