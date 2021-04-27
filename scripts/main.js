const innerDiv = document.querySelector(".about-box");
const aboutDiv = document.querySelector('.about-sub-menu');
const var1 = document.querySelector('#sub-menu-1');
const var2 = document.querySelector('#sub-menu-2');
const var3 = document.querySelector('#sub-menu-3');
const var4 = document.querySelector('#sub-menu-4');
const var5 = document.querySelector('#sub-menu-5');
const var6 = document.querySelector('#sub-menu-6');
const var7 = document.querySelector('#sub-menu-7');

var1.addEventListener("mouseover", () =>  {
  displayAboutMenu("sub-menu-1");
});
var2.addEventListener("mouseover", (event) =>  {
  displayAboutMenu(event, "sub-menu-2");
});
var3.addEventListener("mouseover", () =>  {
  displayAboutMenu("sub-menu-3");
});
var4.addEventListener("mouseover", () =>  {
  displayAboutMenu("sub-menu-4");
});
var5.addEventListener("mouseover", () =>  {
  displayAboutMenu("sub-menu-5");
});
var6.addEventListener("mouseover", () =>  {
  displayAboutMenu("sub-menu-6");
});
var7.addEventListener("mouseover", () =>  {
  displayAboutMenu("sub-menu-7");
});

innerDiv.addEventListener("mouseleave", () =>  {
  aboutDiv.classList.remove("show-sub-menu");
  var2.classList.remove("active")
});

function displayAboutMenu(evt, testId) {
    if (testId === "sub-menu-2" && aboutDiv.classList.contains("show-sub-menu") === false) {
      aboutDiv.classList.add("show-sub-menu");
      var2.classList.add("active")
    } else if (testId != "sub-menu-2" && aboutDiv.classList.contains("show-sub-menu") === true) {
      aboutDiv.classList.remove("show-sub-menu");
      var2.classList.remove("active")
    }  
}

// function hideAboutMenu(testId) {
//   if (aboutDiv.classList.contains("show-sub-menu") === true) {
//     aboutDiv.classList.remove("show-sub-menu");
//   }
// }



// Toggle menu button on mobile
const selectElement = (element) => {
  return document.querySelector(element);
};

let menuToggler = selectElement(".menu-toggle");
let body = selectElement("body");

menuToggler.addEventListener("click", () => {
  body.classList.toggle("open");
});

// Implement Tab display
let $tab1 = document.querySelector("#tab1");
let $tab2 = document.querySelector("#tab2");
let $tab3 = document.querySelector("#tab3");
let $tab4 = document.querySelector("#tab4");

$tab1.addEventListener("click", (event) => {
  openCity(event, "tab-1-head");
});

$tab2.addEventListener("click", (event) => {
  openCity(event, "tab-2-head");
});

$tab3.addEventListener("click", (event) => {
  openCity(event, "tab-3-head");
});

$tab4.addEventListener("click", (event) => {
  openCity(event, "tab-4-head");
});

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

// Implement Counter
// const counters = document.querySelectorAll(".counter");
// const speed = 800;

// counters.forEach((count) => {
//   const updateCounter = () => {
//     const ourTarget = +count.getAttribute("data-target");
//     const ourCounter = +count.innerText;
//     const increment = ourTarget / speed;

//     if (ourCounter < ourTarget) {
//       count.innerText = (ourCounter + increment).toFixed(2);
//       setTimeout(updateCounter, 1);
//     } else {
//       count.innerText = ourTarget;
//     }
//   };
//   updateCounter();
// });

// Collapsible button
let coll = document.getElementsByClassName("collapsible");
let i;
for (i = 0; i < coll.length; i++) {
  let btnAction = document.getElementById(`btn-action${i}`);
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    let divContent = this.nextElementSibling;
    if (divContent.style.display === "block") {
      divContent.style.display = "none";
      btnAction.innerHTML = "+";
    } else {
      divContent.style.display = "block";
      btnAction.innerHTML = "-";
    }
  });
}

// Testimony Slide
// const $prev = document.querySelector(".prev");
// const $next = document.querySelector(".next");

// $prev.addEventListener("click", () => {
//   plusSlides(-1);
// });

// $next.addEventListener("click", () => {
//   plusSlides(1);
// });

// let slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides((slideIndex += n));
// }

// function showSlides(n) {
//   let i;
//   let slides = document.getElementsByClassName("mySlides");
//   if (n > slides.length) {
//     slideIndex = 1;
//   }
//   if (n < 1) {
//     slideIndex = slides.length;
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slides[slideIndex - 1].style.display = "block";
// }

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
      hideScrollElement(el);
    }
  });
};

window.addEventListener("scroll", () => {
  handleScrollAnimation();
});

// Header style on scroll
window.addEventListener("scroll", function() {
  let nav = document.querySelector(".nav");
  let windowPosition = window.scrollY > 0;
  nav.classList.toggle("scroll-active", windowPosition);
});
