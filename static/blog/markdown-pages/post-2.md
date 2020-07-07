---
path: /blog/react-burger
date: 2020-04-22T04:00:00.000Z
title: A Simple React Burger Menu
image: manley-portfolio/src/images/burgerIcon.png
---
When creating this website, I wanted one component for a burger menu, where I could pass state from my navbar. Many available libraries were much larger than what I needed, or included animations that were incompatible with React. Therefore, I decided to create my own. 

The first challenge was when to display the standard navbar vs. the burger menu.
I added a media query inside my navbar component to detect screen width. Then at a certain width, the navbar state would update to display the burger menu.

```javascript
const [isSmallScreen, setIsSmallScreen] = useState(false);
const [open, setOpen] = useState(false);

useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 700px)");
    mediaQuery.addListener(handleMediaQueryChange);
    handleMediaQueryChange(mediaQuery);
    const listener = () => {
      setOpen(false)
    }
    window.addEventListener("scroll", listener)
    return () => {
      window.removeEventListener("scroll", listener)
    }
  },[]);

  const handleMediaQueryChange = (mediaQuery) => {
    if (mediaQuery.matches) {
      setIsSmallScreen(true)
    } else {
      setIsSmallScreen(false)
    }
  };
```
