# Frontend Mentor - Article preview component solution

This is a solution to the [Article preview component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/article-preview-component-dYBN_pYFT). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Welcome! 👋

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See the social media share links when they click the share icon

### Links

- Solution URL: [Article Preview Component](https://github.com/Holgermueller/article-preview-component)
- Live Site: [Live Site](https://holgermueller.github.io/article-preview-component/)

## My Process

### Built with:

- Semantic HTML
- CSS
- A little Flexbox
- PostCSS, Autoprefixer, CSSNano
- Mobile-first workflow

### What I learned

This challenge gave me some practice with the transform:translateX,Y CSS functions and the :after pseudo class.

I used the translate function to position the social media links in the desktop layout:

```
   transform: translate(14.35rem, 6rem);
```

I used the pseudo class to make the little arrow appear when the app is in desktop layout:

```
  .share-section::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 50%;
    width: 0;
    height: 0;
    border-top: 20px solid hsl(217, 19%, 35%);
    border-left: 20px solid transparent;
    border-right: 20px solid transparent;
    margin-left: -15px;
    margin-bottom: -19px;
  }
```

## Author

- Website - [Portfolio](https://holgermueller.github.io/portfolio/)
- Frontend Mentor - [@Holgermueller](https://www.frontendmentor.io/profile/Holgermueller)
- Github - [Holgermueller](https://github.com/Holgermueller)

## Acknowledgments

Thank you to Daniel [@danielmrz-dev](https://www.frontendmentor.io/profile/danielmrz-dev) for reminding me to use grid to center my component on the DOM.
