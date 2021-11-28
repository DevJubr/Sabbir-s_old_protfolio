let togolBar = document.querySelector('.fa-bars');
let forShow = document.querySelector('.forShow')
let htsyhMainConFristP = document.querySelectorAll('.htsyhMainConFrist p');
let jsInnerLabel = document.querySelector('.labelCon label span.jsiner');
let phpInnerLabel = document.querySelector('.labelCon label span.phpiner');
let pytonInnerLabel = document.querySelector('.labelCon label span.Pythoniner');
let psInnerLabel = document.querySelector('.labelCon label span.Photoshopiner');

togolBar.addEventListener('click', function () {
  forShow.classList.toggle('ULshow');
  togolBar.classList.toggle('fa-times')
});

function coundown() {
  
htsyhMainConFristP.forEach( (counter) => {
  counter.innerText = '0';

  function updetCounter () {
    const target = counter.getAttribute('data-target');
    const kaj = Number(counter.innerText);

    const inc = target / 250;
    
 
    if(kaj < target){
      counter.innerText = `${Math.round(kaj + inc)}`;
      setTimeout(updetCounter, 100);
    } else{
      counter.innerText = target;
    }
  }
  updetCounter();
});
}

window.addEventListener('scroll', function(){
  let scrollHeight = window.pageYOffset;
  if(scrollHeight < 600){
    coundown();
  } else{
    coundown(45);
  }
})

window.addEventListener('scroll', function(){
  let scrollHeight = window.pageYOffset;
  if(scrollHeight < 760){
    jsInnerLabel.style.animationName = 'heda1';
    phpInnerLabel.style.animationName = 'heda2';
    pytonInnerLabel.style.animationName = 'heda3';
    psInnerLabel.style.animationName = 'heda4';
  }
})


// let scrollHeight = window.pageYOffset;
// console.log(scrollHeight);





var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});