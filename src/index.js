const btnOpenMenu = document.querySelector('.header__burger-menu');
const btnCloseMenu = document.querySelector('.navtab__btn-close');
const navTab = document.querySelector('.navtab');

function openNavTab(e) {
  e.preventDefault();
  navTab.classList.add('navtab__active');
}

function closeNavTab(e) {
  e.preventDefault();
  navTab.classList.remove('navtab__active');
}

btnOpenMenu.addEventListener('click', e => openNavTab(e));
btnCloseMenu.addEventListener('click', e => closeNavTab(e));