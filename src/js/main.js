function setupNavbarToggle() {
    const menuBtn = document.getElementById("menu-toggle"); 
    const mobileMenu = document.getElementById("mobile-menu"); 
    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => {
        mobileMenu.classList.toggle("hidden"); 
      });
    } else {
      console.error("Menu button or mobile menu not found!");
    }
  }
  document.addEventListener("DOMContentLoaded", () => {
    setupNavbarToggle();
  });
  