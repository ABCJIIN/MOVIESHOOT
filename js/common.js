const Mhamburger = document.querySelector('.mobile.hamburger');
const Mclose = document.querySelector('.mobile.close');
const Mnav = document.querySelector('.header__Mnav');
const nav = document.querySelector('.header__nav');


Mhamburger.addEventListener('click', () => {
    Mnav.style.display = 'block';
    // nav.style.display = 'none';
});

Mclose.addEventListener('click', () => {
    Mnav.style.display = 'none';
});

(function() {
    var throttle = function(type, name, obj) {
        obj = obj || window;
        var running = false;
        var func = function() {
            if (running) { return; }
            running = true;
            requestAnimationFrame(function() {
                obj.dispatchEvent(new CustomEvent(name));
                running = false;
            });
        };
        obj.addEventListener(type, func);
    };

        throttle("resize", "optimizedResize");
    })();

    window.addEventListener('optimizedResize', () => {
        let winWidth = window.innerWidth;

        if (winWidth >= 767){
            Mnav.style.display = 'none';
        }
    });
