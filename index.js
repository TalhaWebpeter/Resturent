
        document.addEventListener("DOMContentLoaded", function () {
            let menu = document.querySelector('#menu-icon');
            let navlist = document.querySelector('.navlist');  // Use class for navlist

            // Ensure that both menu and navlist elements exist before adding the event listener
            if (menu && navlist) {
                menu.onclick = () => {
                    menu.classList.toggle('bx-x');   // Optional, for changing the icon
                    navlist.classList.toggle('open');  // Toggle the menu visibility
                };
            } else {
                console.log('Menu or navlist not found!');
            }
        });
  window.onscroll = () => {
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
  };

  const sr = ScrollReveal({
    origin: 'top',
    distance: '85px',
    duration:2500,
    reset: false
  })

  sr.reveal ('.home-text',{delay:100});
  sr.reveal ('.home-image',{delay:150});
  sr.reveal ('.container',{delay:150});

  sr.reveal ('.about-img',{});
  sr.reveal ('.about-text',{delay:100});

  sr.reveal ('.middle-text',{});
  sr.reveal ('.row-btn,.shop-content',{delay:100});

  sr.reveal ('.review-content,.contact',{delay:100});

  document.querySelector('.scroll').addEventListener('click', function(e) {
    e.preventDefault();  // Prevent the default action
    document.querySelector('#home').scrollIntoView({
        behavior: 'smooth'  // Smooth scroll effect
    });
});

