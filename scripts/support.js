// Toggle menu button on mobile
const selectElement = element => {
  return document.querySelector(element);
};

let menuToggler = selectElement('.menu-toggle');
let body = selectElement('body');

menuToggler.addEventListener('click', () => {
  body.classList.toggle('open');
});

// Collapsible button
let coll = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < coll.length; i++) {
  let btnAction = document.getElementById(`btn-action${i}`);
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    let divContent = this.nextElementSibling;
    if (divContent.style.display === "block") {
      divContent.style.display = "none";
      btnAction.innerHTML = '+';
    } else {
      divContent.style.display = "block";
      btnAction.innerHTML = '-';
    }
  });
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
