
window.addEventListener('DOMContentLoaded', function () {
    
    // Fade In Sections et titres

    const ratio = .2
    const options = { root: null, rootMargin: '0px', threshold: ratio }

    // Section 

    const handleIntersect = function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('visible')
                observer.unobserve(entry.target)
            }
            else {
                entry.target.classList.remove('visible')
            }
        })
    }

    const arraybanner = document.querySelectorAll('.section')
    const observer = new IntersectionObserver(handleIntersect, options)
    arraybanner.forEach(function (arraybanner) {
        observer.observe(arraybanner)
    })

    // 1ere partie du titre

    const handleIntersect2 = function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('titre_deplacement_1')
                observer.unobserve(entry.target)
            }
            else {
                entry.target.classList.remove('titre_deplacement_1')
            }
        })
    }

    const arraytitre = document.querySelectorAll('.titre-part1')
    const observer2 = new IntersectionObserver(handleIntersect2, options)
    arraytitre.forEach(function (arraytitre) {
        observer2.observe(arraytitre)
    })

    //2eme partie du titre

    const handleIntersect3 = function (entries, observer) {
        entries.forEach((entry) => {
            if (entry.intersectionRatio > ratio) {
                entry.target.classList.add('titre_deplacement_2')
                observer.unobserve(entry.target)
            }
            else {
                entry.target.classList.remove('titre_deplacement_2')
            }
        })
    }

    const arraytitre2 = document.querySelectorAll('.titre-part2')
    const observer3 = new IntersectionObserver(handleIntersect3, options)
    arraytitre2.forEach(function (arraytitre2) {
        observer3.observe(arraytitre2)
    })

    
    // Animation des nuages

    const bigcloud = document.querySelector('.cloud2');
    const littlecloud = document.querySelector('.cloud1');
    const maxPosition= 1050;
    
    window.addEventListener('scroll', () => {
        const scrollPercentage = (window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100;
        let newPosition = (scrollPercentage * 18) - 100;
        newPosition = Math.min(newPosition, maxPosition);
        bigcloud.style.left = newPosition + 'px';
        littlecloud.style.left = newPosition - 250 + 'px';
    });
    

    // Slider personnages

    var swiper = new Swiper(".mySwiper", {
        effect: "coverflow",
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: "auto",
        coverflowEffect: {
            rotate: 50,
            stretch: 0,
            depth: 70,
            modifier: 1,
            slideShadows: false,
        }
    })


    // Menu burger

    const button = document.querySelector('.button-menu');
    const nav = document.querySelector('.menuburger');
    const backdrop = document.querySelector('.backdrop');
    const removesitemain = document.querySelector('.site-main');
    const removefooter = document.querySelector('footer');
    
    button.addEventListener('click', () => {
        nav.classList.toggle('open');
        removesitemain.classList.toggle('remove');
        removefooter.classList.toggle('remove');
    });

    backdrop.addEventListener('click', () => {
        nav.classList.remove('open');
        removesitemain.classList.remove('remove');
        removefooter.classList.remove('remove');
    });

    button.addEventListener('click', () => {
        button.classList.toggle('active');
    });

})
