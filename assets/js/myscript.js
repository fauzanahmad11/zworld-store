const btnScrollTop = document.querySelector("#btn-scroll-up");
btnScrollTop.addEventListener("click", function () {
    // window.scrollTo(0, 0);
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    });
});

window.addEventListener("scroll", scrollFunction);

function scrollFunction() {
    if (window.pageYOffset > 300) {
        btnScrollTop.style.visibility = "visible";
    } else {
        btnScrollTop.style.visibility = "hidden";
    }
}