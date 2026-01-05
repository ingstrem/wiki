const loc = location.pathname;
const links = document.querySelectorAll(".header-link");

links.forEach((link) => {
  if (link.getAttribute("href") === loc) link.classList.add("active");
});
