// Make mobile navigation work

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
  headerEl.classList.toggle("nav-open");
});

/////////////////////////////////////////////////////////////////
// Close navigation list
const allLinks = document.querySelectorAll("a:link");

allLinks.forEach(function (link) {
  link.addEventListener("click", function () {
    if (link.classList.contains("nav-link"))
      headerEl.classList.toggle("nav-open");
  });
});
