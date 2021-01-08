import '../scss/style.scss';

import Swiper,{ Navigation, Pagination } from 'swiper';

Swiper.use([Navigation, Pagination]);

export const slider = document.querySelector('.swiper-container');

export let mySwiper;

function mobileSlider() {
  if (window.innerWidth < 768 && slider.dataset.mobile == "false") {
   mySwiper = new Swiper('.swiper-container', {
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
   });
   slider.dataset.mobile = 'true';
  }
  if (window.innerWidth > 768) {
    slider.dataset.mobile = 'false';

    if (slider.classList.contains('swiper-container-initialized')) {
    mySwiper.destroy;
  }
 }
}


mobileSlider();

window.addEventListener('resize', () => {
  mobileSlider();
});
export let bodyNoScroll = document.querySelector('body');
export let btn = document.querySelector('.page-sidebar');
export let openBtn = document.querySelector('.menu-icon-burger');
export let closeBtn = document.querySelector('.header-icon-close');
export let closeSidebar = document.querySelector('.page-sidebar__overlay');
openBtn.addEventListener('click',function () {
  btn.classList.add('page-sidebar_active');
  bodyNoScroll.classList.add('body_active');
})
openBtn.addEventListener('click',function () {
  btn.classList.add('page-sidebar_active');
  bodyNoScroll.classList.add('body_active');
})
closeBtn.addEventListener('click',function () {
  btn.classList.remove('page-sidebar_active');
  bodyNoScroll.classList.remove('body_active');
})

closeSidebar.addEventListener('click',function () {
  btn.classList.remove('page-sidebar_active');
  bodyNoScroll.classList.remove('body_active');
})

export let modal = document.querySelector('.modal-connection');
export let openModal = document.querySelector('.menu-icon-chat');
export let openModallConection = document.querySelector('.footer-icon-chat');
export let closeModal = document.querySelector('.button-close-icon');
export let closeModalFon = document.querySelector('.modal-connection__overlay');

openModal.addEventListener('click',function () {
  modal.classList.add('modal-connection_active');
  bodyNoScroll.classList.add('body_active');
})
openModallConection.addEventListener('click',function () {
  modal.classList.add('modal-connection_active');
  bodyNoScroll.classList.add('body_active');
})
closeModal.addEventListener('click',function () {
  modal.classList.remove('modal-connection_active');
  bodyNoScroll.classList.remove('body_active');
})
closeModalFon.addEventListener('click',function () {
  modal.classList.remove('modal-connection_active');
  bodyNoScroll.classList.remove('body_active');
})

export let modalCall = document.querySelector('.modal-call');
export let openModalCall = document.querySelector('.menu-icon-call');
export let openModalCallOne = document.querySelector('.footer-icon-call');
export let closeModalCall = document.querySelector('.button-modal-close-icon');
export let closeModalFonCall = document.querySelector('.modal-call__overlay');
openModalCall.addEventListener('click',function () {
  modalCall.classList.add('modal-call_active');
  bodyNoScroll.classList.add('body_active');
})
openModalCallOne.addEventListener('click',function () {
  modalCall.classList.add('modal-call_active');
  bodyNoScroll.classList.add('body_active');
})
closeModalCall.addEventListener('click',function () {
  modalCall.classList.remove('modal-call_active');
  bodyNoScroll.classList.remove('body_active');
})
closeModalFonCall.addEventListener('click',function () {
  modalCall.classList.remove('modal-call_active');
  bodyNoScroll.classList.remove('body_active');
})


