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



const slideContainer = document.querySelector(".slide-container");
const imageSlider = document.querySelector(".image-slider");


const slidesDiv = document.querySelectorAll(".slides-div")


const sliderSpan = document.querySelectorAll('.slider-span')
console.log(sliderSpan)




// imageSlider.addEventListener("click", imageRenderNext)


slidesDiv.forEach(slide =>{
    slide.addEventListener("click", imageRenderNext)
})

let previousImage = 0;


function imageRenderNext (event){

    let carouselDirection = 0;

     for (let i = 0; i < 5; i++){
 
            if(imageSlider.children[i] === previousImage){
                carouselDirection = -1
                break
            }
        
     }

     for (let i = 5; i < imageSlider.children.length; i++){
 
        if(imageSlider.children[i] === previousImage){
            carouselDirection = 1
            break
        }
    
 }


     console.log("!!!")

    if (carouselDirection === 1){

    const tempSlideContainer = slideContainer.children[0];
    // console.log(tempSlideContainer.getAttribute("id").substring(11))
    let sliderSpanNewId = parseInt(tempSlideContainer.getAttribute("id").substring(11))  + slideContainer.children.length -1 // -1 bo poza spanami, którym przypisujemy id, jest jeszcze div
    slideContainer.removeChild(tempSlideContainer)
    tempSlideContainer.setAttribute("id", "slider-span" + sliderSpanNewId)
    slideContainer.insertBefore(tempSlideContainer, imageSlider)

    const tempImageSlider = imageSlider.children[0]
    let imageSliderNewId = parseInt(tempImageSlider.getAttribute("id").substring(6)) + imageSlider.children.length; // dodajemy nowe id, aby umieścić obrazek na końcu karuzeli
    imageSlider.removeChild(tempImageSlider)

    tempImageSlider.setAttribute('id', "slide-" + imageSliderNewId)

    let imageNewId = parseInt(tempImageSlider.children[0].getAttribute("id").substring(3)) + imageSlider.children.length
    tempImageSlider.children[0].setAttribute('id', "img" + imageNewId);

    let imageButtonNewId = parseInt(tempImageSlider.children[1].getAttribute("id").substring(7)) + imageSlider.children.length
    tempImageSlider.children[1].setAttribute('id', "button-" + imageButtonNewId);
    tempImageSlider.children[1].setAttribute('href', "#slider-span" + imageButtonNewId);





    for (let i = 0; i < imageSlider.children.length; i++){
        imageSlider.children[i].children[0].classList.remove('image-active')
        imageSlider.children[i].children[1].classList.remove('image-active')
    }



    event.currentTarget.children[0].classList.add('image-active')
    event.currentTarget.children[1].classList.add('image-active')

    imageSlider.appendChild(tempImageSlider)



    }

    if(carouselDirection === 0){
        for (let i = 0; i < imageSlider.children.length; i++){
            imageSlider.children[i].children[0].classList.remove('image-active')
            imageSlider.children[i].children[1].classList.remove('image-active')
        }
    
    
    
        event.currentTarget.children[0].classList.add('image-active')
        event.currentTarget.children[1].classList.add('image-active')
    
    }



     if (carouselDirection === -1){

         const tempSlideContainer = slideContainer.lastElementChild.previousElementSibling;
        //  console.log(tempSlideContainer.getAttribute("id").substring(11))
         let sliderSpanNewId = parseInt( slideContainer.children[0].getAttribute('id').substring(11))
         console.log(sliderSpanNewId);
         slideContainer.removeChild(tempSlideContainer)
         tempSlideContainer.setAttribute("id", "slider-span" + (sliderSpanNewId -1)) 
         console.log(tempSlideContainer)

         slideContainer.insertBefore(tempSlideContainer, slideContainer.children[0])
    
         const tempImageSlider = imageSlider.lastElementChild;
         let imageSliderNewId = parseInt(imageSlider.children[0].getAttribute("id").substring(6))
         imageSlider.removeChild(tempImageSlider)
    
         tempImageSlider.setAttribute('id', "slide-" + (imageSliderNewId - 1))
    
         let imageNewId = parseInt(imageSlider.children[0].children[0].getAttribute("id").substring(3))
         tempImageSlider.children[0].setAttribute('id', "img" + (imageNewId -1));
    
         let imageButtonNewId = parseInt(imageSlider.children[0].children[1].getAttribute("id").substring(7))
         tempImageSlider.children[1].setAttribute('id', "button-" + imageButtonNewId -1);
         tempImageSlider.children[1].setAttribute('href', "#slider-span" + (imageButtonNewId -1));
    
    
    
    
    
         for (let i = 0; i < imageSlider.children.length; i++){
             imageSlider.children[i].children[0].classList.remove('image-active')
             imageSlider.children[i].children[1].classList.remove('image-active')
         }
    
    
    
         event.currentTarget.children[0].classList.add('image-active')
         event.currentTarget.children[1].classList.add('image-active')
    
         imageSlider.appendChild(tempImageSlider)
    
    
    
         }



    previousImage = event.currentTarget;

    
}

function imageRenderPrev (){

}
