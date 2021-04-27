// Toggle menu button on mobile
const selectElement = element => {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', () => {
  body.classList.toggle('open');
});

// Implement Tab display
let $tab1 = document.querySelector('#tab1');
let $tab2 = document.querySelector('#tab2');
let $tab3 = document.querySelector('#tab3');

$tab1.addEventListener('click', (event) => {
  openCity(event, 'tab-1-head');
})

$tab2.addEventListener('click', (event) => {
  openCity(event, 'tab-2-head');
})

$tab3.addEventListener('click', (event) => {
  openCity (event, 'tab-3-head');
})

function openCity(evt, tabId) {
  let i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablinks");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabId).style.display = "block";
  evt.currentTarget.className += " active";
}


// Testimony Slide
const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');

$prev.addEventListener('click', () => {
  plusSlides(-1);
})

$next.addEventListener('click', () => {
  plusSlides(1);
})

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  slides[slideIndex-1].style.display = "block";  
}

// Scrolling Elements
const scrollElements = document.querySelectorAll(".el-scroll");

const elementInView = (el, dividend = 1) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop <=
    (window.innerHeight || document.documentElement.clientHeight) / dividend
  );
};

const elementOutofView = (el) => {
  const elementTop = el.getBoundingClientRect().top;
  return (
    elementTop > (window.innerHeight || document.documentElement.clientHeight)
  );
};

const displayScrollElement = (element) => {
  element.classList.add("scrolled");
};

const hideScrollElement = (element) => {
  element.classList.remove("scrolled");
};

const handleScrollAnimation = () => {
  scrollElements.forEach((el) => {
    if (elementInView(el, 1.25)) {
      displayScrollElement(el);
    } else if (elementOutofView(el)) {
      hideScrollElement(el)
    }
  })
}

window.addEventListener("scroll", () => { 
  handleScrollAnimation();
});

// Header style on scroll
window.addEventListener("scroll", function () {
  let nav = document.querySelector(".nav");
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle("scroll-active", windowPosition);
});
