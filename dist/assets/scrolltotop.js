// $(document).ready(function(){
//     $("btnScrollToTop").click(function(){
//         $('html, body').animate({scrollTop: 0}, 800);
//         console.log("HELLO");
//     });
// });

const button = document.querySelector(".btnScrollToTop");
console.log(button);

button.addEventListener('click', (event) => {
    event.window.scroll({
        top: 0,
        behavior: "smooth"
    })
})