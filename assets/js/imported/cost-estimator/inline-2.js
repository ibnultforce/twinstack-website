        document.addEventListener('DOMContentLoaded', () => {

            // Navbar Logic (Solid White)
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

            // Mobile Menu Logic
            const menuBtn = document.getElementById('mobile-menu-btn');
            const closeBtn = document.getElementById('close-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const toggleMenu = () => mobileMenu.classList.toggle('translate-x-full');
            menuBtn.addEventListener('click', toggleMenu);
            closeBtn.addEventListener('click', toggleMenu);
        });

        // Blog Filtering Logic
        function filterSelection(c, e) {
            const x = document.getElementsByClassName("filter-item");
            const targetCategory = (c === "all") ? "" : c;
            for (let i = 0; i < x.length; i++) {
                x[i].style.display = "none";
                if (x[i].className.indexOf(targetCategory) > -1) {
                    x[i].style.display = "flex";
                    x[i].classList.remove('aos-animate');
                    setTimeout(() => x[i].classList.add('aos-animate'), 50);
                }
            }
            const btns = document.querySelectorAll(".filter-btn");
            btns.forEach(btn => btn.classList.remove("active"));
            if (e && e.target) e.target.classList.add("active");
        }
    