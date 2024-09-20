document.addEventListener("DOMContentLoaded", () => {

  const firstNavLinkMobile = document.querySelectorAll(".first-nav-link")[1];
  const firstNavLinkDesktop = document.querySelectorAll(".first-nav-link")[0];
  const submenu = document.querySelectorAll(".submenu")[1];
  const submenuDesktop = document.querySelectorAll(".submenu")[0];
  const hamburger = document.querySelector(".hamburger-menu");
  const navMenu = document.querySelector(".nav-menu-mobile");
  const caretImg = document.querySelectorAll(".caret-img")[1]
  const caretImgDesktop = document.querySelectorAll(".caret-img")[0]
  hamburger.addEventListener("click", () => {
    console.log("hamburger clicked");
      navMenu.classList.toggle("active-nav");
  });


  firstNavLinkMobile.addEventListener("click", (event) => {
    event.preventDefault();
      console.log('firstNavLink clicked');
      submenu.classList.toggle("active-nav"); 

   
    if (submenu.classList.contains("active-nav")) {
      caretImg.style.transform = "rotate(180deg)"; 
    } 
  
  else {
    caretImg.style.transform = "rotate(0deg)"; 
  }
  });

  firstNavLinkDesktop.addEventListener("click", (event) => {
    event.preventDefault();
      console.log('firstNavLink clicked');
      submenuDesktop.classList.toggle("active-nav"); 

   
    if (submenuDesktop.classList.contains("active-nav")) {
      caretImgDesktop.style.transform = "rotate(180deg)"; 
    } 
  
  else {
    caretImgDesktop.style.transform = "rotate(0deg)"; 
  }
  });
});
