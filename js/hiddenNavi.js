const openMenu = document.querySelector(".navi-top__obtn");
const closeMenu = document.querySelector(".navi-top__cbtn");
const menu = document.querySelector(".navigation-holder");

let open = false;

openMenu.addEventListener("click", (event) => {
  event.preventDefault();
  if (!open) {
    menu.classList.add("transform-transition");
    menu.classList.add("transformHiddenNavi");
    setTimeout(() => {
      menu.classList.remove("transform-transition");
    }, 200);
  }
  open = !open;
});

closeMenu.addEventListener("click", (event) => {
  event.preventDefault();
  if (open) {
    menu.classList.add("transform-transition");
    menu.classList.remove("transformHiddenNavi");

    setTimeout(() => {
      menu.classList.remove("transform-transition");
    }, 200);
  }
  open = !open;
});
