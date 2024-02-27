// const body = document.querySelector('body')
// const mastHead = document.querySelector('#masthead')
// const header = document.querySelector('header')

// let headerHeight = header.offsetHeight;
// let mastHeadHeight = mastHead.offsetHeight;

// window.addEventListener('scroll', (e) => {
//   console.log(window.scrollY);
//   if (window.scrollY > (mastHeadHeight * .10)) {
//     body.classList.add('scrolling')
//   } else body.classList.remove('scrolling');
// });

// Menu toggle

// const topMenu = document.querySelector('#top-menu');
// const menuOpen = document.querySelector('#menu-open');
// const menuClose = document.querySelector('#menu-close');

// function openMenu() {
//   console.log(topMenu)
//   topMenu.classList.remove('hidden');
// }

// function closeMenu() {
//   topMenu.classList.add('hidden');
// }

// menuOpen.addEventListener('click', openMenu);
// menuClose.addEventListener('click', closeMenu);

const bg1 = document.querySelector('.bg1');
const mastHead = document.querySelector('#masthead');
const sponsors = document.querySelector('#sponsors');
let mastHeadHeight = mastHead.offsetHeight;

bg1.setAttribute("style",`height:${mastHeadHeight}px`);

window.addEventListener('scroll', (e) => {
  console.log(window.scrollY);
  let move = window.scrollY * .5;
  mastHeadHeight = mastHead.offsetHeight - move;
  bg1.setAttribute("style", `top:${move}px; height:${mastHeadHeight}px`);
  sponsors.setAttribute("style", `margin-top:${move * .2}px; opacity:${move * .4}%`);
}) 