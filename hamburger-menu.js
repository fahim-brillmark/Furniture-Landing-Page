document.addEventListener("DOMContentLoaded", () => {
  const firstNavLinkMobile = document.querySelectorAll(".first-nav-link")[1];
  const firstNavLinkDesktop = document.querySelectorAll(".first-nav-link")[0];
  const submenu = document.querySelectorAll(".submenu")[1];
  const submenuDesktop = document.querySelectorAll(".submenu")[0];
  const hamburger = document.querySelector(".hamburger-menu");
  let navMenu = document.querySelector(".nav-menu-mobile");
  const caretImg = document.querySelectorAll(".caret-img")[1];
  const caretImgDesktop = document.querySelectorAll(".caret-img")[0];
  let navMenuHeight = navMenu.offsetHeight + 8;
  

  console.log("hey", submenu.classList.contains('active-nav'))
  hamburger.addEventListener("click", () => {
    

    console.log("nav menu height", navMenuHeight);

    navMenu.classList.toggle("active-nav");

    if (navMenu.classList.contains("active-nav")) {
      navMenu.style.bottom = `-${navMenuHeight}px`;
    } else {
      navMenu.style.bottom = `200px`;
    }
  });

  firstNavLinkMobile.addEventListener("click", (event) => {
    const submenuMobileHeight = submenu.offsetHeight;
    console.log("submenu mobile height", submenuMobileHeight);
    event.preventDefault();
    // console.log("firstNavLink clicked");
    submenu.classList.toggle("active-nav");

    if (submenu.classList.contains("active-nav")) {
      caretImg.style.transform = "rotate(180deg)";
      navMenuHeight = navMenu.offsetHeight + 8 + submenuMobileHeight;
      navMenu.style.bottom = `-${navMenuHeight}px`;

    } else {
      caretImg.style.transform = "rotate(0deg)";
      navMenuHeight = navMenu.offsetHeight + 8;
      navMenu.style.bottom = `-${navMenuHeight}px`;

      console.log('after colapse first nav',navMenuHeight)

    }
  });

  firstNavLinkDesktop.addEventListener("click", (event) => {
    event.preventDefault();
    // console.log("firstNavLink clicked");
    submenuDesktop.classList.toggle("active-nav");

    if (submenuDesktop.classList.contains("active-nav")) {
      caretImgDesktop.style.transform = "rotate(180deg)";
    } else {
      caretImgDesktop.style.transform = "rotate(0deg)";
    }
  });
});
