let prev = document.getElementById('prev')
let next = document.getElementById('next')
let data = document.getElementsByClassName('data')
let image = document.getElementsByClassName('image')


function toggleSlide(){
    data[0].classList.toggle('slideNone')
    data[1].classList.toggle('slideNone')
    image[0].classList.toggle('slideNone')
    image[1].classList.toggle('slideNone')
}
prev.addEventListener('click', toggleSlide)
next.addEventListener('click', toggleSlide)
// const toggleSlideMax = ()=>{
//     if (slide1.style.display==="none") {
//         slide1.style.display="flex"
//         slide2.style.display="none"
//     } else {
//         slide1.style.display="none"
//         slide2.style.display="flex"
//     }
// }

//         prev.addEventListener('click', toggleSlideMax)
//         next.addEventListener('click', toggleSlideMax)

      
