const toggleMenuBtn = document.querySelector("#toggle-menu");
const closeMenuBtn = document.querySelector("#close-btn");
const mobileMenu = document.querySelector(".mobile-menu");
const overlay = document.querySelector(".overlay");
const toggleDropdownMenu = document.querySelectorAll(".menu-item .item");

console.log(toggleDropdownMenu);
toggleMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.add("active");
  overlay.classList.add("active");
});

closeMenuBtn.addEventListener("click", () => {
  mobileMenu.classList.remove("active");
  overlay.classList.remove("active");
});

$(window).ready(function () {
  let mouseX = 0;
  let mouseY = 0;
  let xp = 0;
  let yp = 0;

  $(document).mousemove(function (e) {
    $(".custom__cursor__inner").css({
      transform:
        "translate(" + (e.clientX - 3.25) + "px, " + (e.clientY - 3.25) + "px)",
    });

    mouseX = e.clientX - 10;
    mouseY = e.clientY - 10;
  });

  setInterval(function () {
    xp += (mouseX - xp) / 6;
    yp += (mouseY - yp) / 6;
    $(".custom__cursor__outer").css({
      transform:
        "translateX(" + (xp - 15) + "px) translateY(" + (yp - 15) + "px)",
    });
  }, 10);
});
