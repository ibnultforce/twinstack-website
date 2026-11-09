        // Lightweight reveal-on-scroll (replaces the AOS library)
        (function(){
            var els = document.querySelectorAll('[data-aos]');
            if (!('IntersectionObserver' in window)) { els.forEach(function(e){ e.classList.add('aos-in'); }); return; }
            var io = new IntersectionObserver(function(entries){
                entries.forEach(function(en){ if (en.isIntersecting) { en.target.classList.add('aos-in'); io.unobserve(en.target); } });
            }, { rootMargin: '0px 0px -80px 0px' });
            els.forEach(function(e){ io.observe(e); });
        })();

        // Navbar Logic (Solid White Transition)
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 50) {
                navbar.classList.remove('top-6', 'w-[95%]', 'max-w-7xl', 'rounded-2xl');
                navbar.classList.add('top-0', 'w-full', 'max-w-full', 'rounded-none');
            } else {
                navbar.classList.add('top-6', 'w-[95%]', 'max-w-7xl', 'rounded-2xl');
                navbar.classList.remove('top-0', 'w-full', 'max-w-full', 'rounded-none');
            }
        });

        // Mobile Menu
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('close-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        const toggleMenu = () => mobileMenu.classList.toggle('translate-x-full');
        menuBtn.addEventListener('click', toggleMenu);
        closeBtn.addEventListener('click', toggleMenu);
    