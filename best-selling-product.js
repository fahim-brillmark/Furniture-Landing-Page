document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-buttons");
  const tabContents = document.querySelectorAll(".tab-contents");

  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      

      tabButtons.forEach((button) => {
        button.classList.remove("active");
        
      });

      tabContents.forEach((content) => {
        content.classList.remove("tab-active");
        
      });

      

      button.classList.add("active");

      const target = button.getAttribute("data-target");

      document.getElementById(target).classList.add("tab-active");
      
      
    });
  });
  document.querySelector('.tab-buttons[data-target="slider1"]').click();
});
