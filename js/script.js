// Swiper slider
const swiper = new Swiper('.spec__slider', {
	loop: true,
  speed: 1000,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});

const swiperMenu = new Swiper('.menu__slider', {
  slidesPerView: 2,
  grid: {
    rows: 2,
  },
  speed: 500,
  pagination: {
    el: '.swiper-pagination',
    clickable: true
  },
});
// end Slider

let tabs = document.querySelector('.tabs');
let menuSlider = document.querySelectorAll('.menu__slider-block ');

tabs.addEventListener('click', function (e) {
  if(e.target.classList.contains('tabs__item')){
    // пробегаемся по всем вкладкам и удаляем активный
    this.querySelectorAll('.tabs__item').forEach(item => item.classList.remove('active'))
    // а не посредственно по кликнутой добавляем клас активный
    e.target.classList.add('active')
  }

  // conect with block
  // пробегаемся по всем блокам и удаляем активный
  menuSlider.forEach(slider => slider.classList.remove('show'));
  // получаем по кликнутому data атрибут - его название 
  let tabIndex = e.target.dataset.tab
  // получаем слайдер по его id
  let thisSwiper = document.querySelector(tabIndex)
  // и добавляем активный клас
  thisSwiper.classList.add('show')

})


// Tabs scrool start
window.addEventListener('load', overflowTabs);
window.addEventListener('resize', overflowTabs);

function overflowTabs(){
  let outerTabs = document.querySelector('.tabs__container');
  let innerTabs = document.querySelector('.tabs');

  if(innerTabs.offsetWidth > outerTabs.offsetWidth){
    innerTabs.classList.add('overflow')
  } else {
    innerTabs.classList.remove('overflow')
  }
}
// Tabs scrool end