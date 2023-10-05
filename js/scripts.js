// scripts.js

document.addEventListener('DOMContentLoaded', function () {
  // Get all the menu items
  const menuItems = document.querySelectorAll('.menu-item');

  // Add scroll event listener
  window.addEventListener('scroll', function () {
    // Check if the scroll position is more than 50 pixels from the top
    if (window.scrollY > 50) {
      // If yes, add the 'scrolled' class to the header and menu items
      document.querySelector('header').classList.add('scrolled');
      menuItems.forEach(function (item) {
        item.classList.add('scrolled');
      });
    } else {
      // If not, remove the 'scrolled' class from the header and menu items
      document.querySelector('header').classList.remove('scrolled');
      menuItems.forEach(function (item) {
        item.classList.remove('scrolled');
      });
    }
  });
});

