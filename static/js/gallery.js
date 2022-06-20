// const carouselSlide = document.querySelectorAll('.carousel-slide img');
// const mainSlide = document.querySelector('.main-slide img');
// console.log(imagesFileList)





// // const size = carouselSlide[0].clientWidth;
// // let counter = 1;
// // carouselSlide.style.transform = 'translateX(' + (-size * counter) + 'px)';



// carouselSlide.forEach( (slide,index) =>{
//     console.log(index)
//     slide.setAttribute('src', `static/images/${index+1}.jpg` );
//     slide.addEventListener("click", chooseSlide)
// })




// function chooseSlide(event){
//     console.log(event.path[0].src)
//     mainSlide.setAttribute('src', event.path[0].src)
    
// }


const imageSlider = document.querySelector(".image-slider");
const imageSliderClone = imageSlider.cloneNode(true);

const slidesDiv = document.querySelectorAll(".slides-div")
// console.log(imageSliderClone.children)


// for (let i = 0; i < imageSliderClone.children.length; i++){
//     imageSlider.appendChild(imageSliderClone.children[i])
// }




// imageSlider.addEventListener("click", imageRenderNext)


slidesDiv.forEach(slide =>{
    slide.addEventListener("click", imageRenderNext)
})




function imageRenderNext (event){
    console.log(event.currentTarget)
    const tempImage = imageSlider.children[0]
    imageSlider.removeChild(tempImage)
    imageSlider.appendChild(tempImage)
}

function imageRenderPrev (){

}
