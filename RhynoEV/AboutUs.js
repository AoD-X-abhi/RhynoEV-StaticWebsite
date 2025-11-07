
    document.getElementById('mobile-menu').addEventListener('click', function() {
        var navItems = document.querySelector('.nav-items');
        var menuToggle = document.getElementById('mobile-menu');
        var icon = menuToggle.querySelector('i');

        if (navItems.classList.contains('active')) {
            navItems.classList.remove('active');
            navItems.classList.add('closing');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');

            // Remove the 'closing' class after the animation ends
            setTimeout(function() {
                navItems.classList.remove('closing');
            }, 1000); // Match this duration with the CSS animation duration
        } else {
            navItems.classList.add('active');
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        }
    });
