 // Get the current page URL
 const currentPage = window.location.pathname;

 // Select all navigation links
 const navLinks = document.querySelectorAll('.nav-link');

 // Loop through each link
 navLinks.forEach(link => {
     // Check if the href matches the current page
     if (link.getAttribute('href') === currentPage) {
         // Add the active class
         link.classList.add('active');
     }
 });