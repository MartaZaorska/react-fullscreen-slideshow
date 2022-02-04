# React Fullscreen Slideshow

>React fullscreen slideshow component that you can add to your website/app. 

![Example Fullscreen Slideshow](/images/example-fullscreen-slideshow.png?raw=true)

## Table of contents

- [Usage](#usage)
- [Demo](#demo)
- [Contact](#contact)

## Usage

Download **FullscreenSlideshow** folder and add to your application (for example put in ***src*** folder):
```javascript
import { useState } from 'react';
import FullscreenSlideshow from './FullscreenSlideshow';

function App(){
  const [activeIndex, setActiveIndex] = useState(-1);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <FullscreenSlideshow 
        data={data} 
        options={options}
        activeIndex={activeIndex} 
        setActiveIndex={setActiveIndex} 
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      >
      <button onClick={() => setIsOpen(true)}>Open Fullscreen Slideshow</button>
    </>
  );
}

```

### **Props**

The ***data*** prop is an array containing objects containing information about images. 

- ***url*** - path or url to the image, **required**
- ***name*** - name for the image, optional
- ***tags*** - an array containing tags for the image, optional

Example:

```javascript
const data = [
  {
    url: "path_or_url_to_image",
    name: "Siberian tiger",
    tags: ["nature", "wild", ...]
  },
  ...
];
```

The ***isOpen*** and ***setIsOpen*** props is required. We create using the *useState* hook.
It is used to open / close fullscreen slideshow.

The ***activeIndex*** and ***setActiveIndex*** props is required. We create using the *useState* hook.
Define which photo is to be displayed after opening fullscreen slideshow.

Example
```javascript
const [activeIndex, setActiveIndex] = useState(-1);
const [isOpen, setIsOpen] = useState(false);

//function will open the fullscreen slideshow, displaying the image with the imageIndex index
const openHandler = (imageIndex) => {
  setActiveIndex(imageIndex);
  setIsOpen(true);
}

```

The ***options*** prop is optional (not required). 

Properties:

| Property                 |  Type          | Default         | Description |
| ------------------------ | :------------: | :-------------: | ----------- |
| ***background***         | String         | 'rgb(18,24,31)' | background color |
| ***fontColor***          | String         | '#eee'          | font color |
| ***controls***           | Boolean        | true            |  If true, the arrow icons will be displayed (next / prev image) |
| ***displayText***        | String/Boolean | 'tags'          | It takes values: 'name', 'tags', false or true. Defines what will be displayed under the image. If true, 'tags' will be displayed. If false, nothing will be displayed |
| ***displayNumeration***  | Boolean        | true            | If true, the numeration will be displayed under the photo |

Example
```javascript
const options = {
  background: "linear-gradient(to top, #cfd9df 0%, #e2ebf0 100%)",
  fontColor: "#232323",
  controls: false,
  displayText: "name",
  displayNumeration: false
};
```

Change images (desktop):

- keyboard buttons: ArrowLeft and ArrowRight,
- clicking on the next/prev image,
- arrow icons (if controls are set to true)

Change images (mobile): swipe.

Close a fullscreen slideshow: keyboard button Escape (desktop), by clicking on the icon (desktop and mobile)

Script / library for javascript + html (without react): [fullscreen-slideshow](https://github.com/MartaZaorska/fullscreen-slideshow)

## Demo

Example of use on the website: https://martazaorska.github.io/react-fullscreen-slideshow/

## Contact

Created by [Marta Zaorska](https://martazaorska.github.io/portfolio/).
