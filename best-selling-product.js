document.addEventListener("DOMContentLoaded", function () {
  const tabButtons = document.querySelectorAll(".tab-buttons");
  const tabContents = document.querySelectorAll(".tab-contents");
  // console.log(tabButtons)
  tabButtons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("BUtton is clicked");

      tabButtons.forEach((button) => {
        button.classList.remove("active");
        console.log('dgfsfg')
      });

      tabContents.forEach((content) => {
        content.classList.remove("tab-active");
        console.log("here");
      });

      console.log(tabContents)

      button.classList.add("active");

      const target = button.getAttribute("data-target");

      document.getElementById(target).classList.add("tab-active");
      console.log(document.getElementById(target));
      console.log(target);
    });
  });
  document.querySelector('.tab-buttons[data-target="slider1"]').click();
});
