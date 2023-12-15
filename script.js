
  document.addEventListener('DOMContentLoaded', function () {
    var menuCheckbox = document.getElementById('menu');
    var navbar = document.querySelector('.navbar');

    menuCheckbox.addEventListener('change', function () {
      navbar.classList.toggle('show', this.checked);
    });
  });

