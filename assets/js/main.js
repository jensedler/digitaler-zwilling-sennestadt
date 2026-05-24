/* DIGITALER ZWILLING SENNESTADT - Main JS */

// Mobile Navigation
(function(){
  const toggle=document.querySelector('.nav-toggle');
  const nav=document.querySelector('.site-nav');
  if(!toggle||!nav)return;
  toggle.addEventListener('click',()=>{
    nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded',nav.classList.contains('open'));
  });
  document.addEventListener('click',(e)=>{
    if(!e.target.closest('.site-header'))nav.classList.remove('open');
  });
})();

// Carousel
function initCarousel(selector){
  const carousel=document.querySelector(selector);
  if(!carousel)return;
  const track=carousel.querySelector('.carousel__track');
  const items=carousel.querySelectorAll('.carousel__track > *');
  const btnPrev=carousel.querySelector('.carousel__btn--prev');
  const btnNext=carousel.querySelector('.carousel__btn--next');
  const dotsEl=carousel.querySelector('.carousel__dots');
  if(!track||items.length===0)return;

  const getVisible=()=>window.innerWidth<=640?1:2;
  let current=0;
  const totalSlides=()=>Math.ceil(items.length/getVisible());

  function buildDots(){
    if(!dotsEl)return;
    dotsEl.innerHTML='';
    for(let i=0;i<totalSlides();i++){
      const d=document.createElement('button');
      d.className='carousel__dot'+(i===current?' active':'');
      d.setAttribute('aria-label','Folie '+(i+1));
      d.addEventListener('click',()=>goTo(i));
      dotsEl.appendChild(d);
    }
  }

  function updateDots(){
    if(!dotsEl)return;
    dotsEl.querySelectorAll('.carousel__dot').forEach((d,i)=>{
      d.classList.toggle('active',i===current);
    });
  }

  function goTo(index){
    const max=totalSlides()-1;
    current=Math.max(0,Math.min(index,max));
    const itemW=items[0].offsetWidth;
    const gap=parseFloat(getComputedStyle(track).gap)||20;
    const perSlide=getVisible();
    track.style.transform='translateX(-'+(current*perSlide*(itemW+gap))+'px)';
    updateDots();
    if(btnPrev)btnPrev.disabled=current===0;
    if(btnNext)btnNext.disabled=current>=totalSlides()-1;
  }

  if(btnPrev)btnPrev.addEventListener('click',()=>goTo(current-1));
  if(btnNext)btnNext.addEventListener('click',()=>goTo(current+1));
  buildDots();goTo(0);
  window.addEventListener('resize',()=>{buildDots();goTo(0);});
}

// Gallery
function initGallery(selector){
  const gallery=document.querySelector(selector);
  if(!gallery)return;
  const track=gallery.querySelector('.gallery__track');
  const items=gallery.querySelectorAll('.gallery__item');
  const btnPrev=gallery.querySelector('.gallery__btn--prev');
  const btnNext=gallery.querySelector('.gallery__btn--next');
  if(!track||items.length===0)return;
  let current=0;
  const getVisible=()=>window.innerWidth<=640?1:3;

  function goTo(index){
    const max=items.length-getVisible();
    current=Math.max(0,Math.min(index,max));
    const itemW=items[0].offsetWidth;
    const gap=parseFloat(getComputedStyle(track).gap)||16;
    track.style.transform='translateX(-'+(current*(itemW+gap))+'px)';
    if(btnPrev)btnPrev.disabled=current===0;
    if(btnNext)btnNext.disabled=current>=items.length-getVisible();
  }

  if(btnPrev)btnPrev.addEventListener('click',()=>goTo(current-1));
  if(btnNext)btnNext.addEventListener('click',()=>goTo(current+1));
  goTo(0);
  window.addEventListener('resize',()=>goTo(0));
}

document.addEventListener('DOMContentLoaded',()=>{
  initCarousel('.carousel');
  initGallery('.gallery');
});
