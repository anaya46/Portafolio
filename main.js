const hiddenElements = document.querySelectorAll(".hidden");
const links = document.querySelectorAll(".link");

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show")

            links.forEach(link => {
                const href = link.getAttribute("href").split("#")[1];
                const id = entry.target.id;

                if (href === id) {
                    link.classList.add("link__active")
                } else {
                    link.classList.remove("link__active")
                }
            })
        } else {
            entry.target.classList.remove("show")
        }
    })
}, {
    threshold: 0.5
});
hiddenElements.forEach((element) => observer.observe(element))

//show menu

const iconShowMenu = document.querySelector(".iconShowMenu");
const navbarMenu = document.querySelector(".navBar__menu")
iconShowMenu.addEventListener("click", () => {
    navbarMenu.classList.toggle("navBar__menu--show")
        ? iconShowMenu.classList.add('bx-x')
        : iconShowMenu.classList.remove('bx-x');

});

links.forEach((link) => {
    link.addEventListener("click", () => {
        navbarMenu.classList.toggle("navBar__menu--show")
            ? iconShowMenu.classList.add('bx-x')
            : iconShowMenu.classList.remove('bx-x');

    })
})


//mode-dark

let iconTheme = document.getElementById("sun-button")
let body = document.querySelector("body")

iconTheme.addEventListener("click", (e) => {
    body.classList.toggle("darkTheme")

    let isDark = body.classList.contains("darkTheme")

    if (isDark) {
        iconTheme.classList.replace("bx-moon", "bx-sun")
    } else {
        iconTheme.classList.replace("bx-sun", "bx-moon")
    }
})
