const imageSlider = document.querySelector(".image-slider");

const slideContainer = document.querySelector(".slide-container")
const slidesDiv = document.querySelectorAll(".slides-div")


const imageSliderClone = imageSlider.cloneNode(true)

let currentRightRender = 0
let currentLeftRender = imageSliderClone.children.length - 1




slidesDiv.forEach(slide =>{
    slide.addEventListener("click", imageRenderNext)
})



let currentOffset = 0;

function imageRenderNext (event){

    // imageSlider.style.transition = ".7s"
    if (!event.currentTarget.children[0].classList.contains("image-active")){
        console.log(event.currentTarget.children[0].classList)
        for (let i = 0; i < imageSlider.children.length; i++){
            imageSlider.children[i].children[0].classList.remove('image-active')
            imageSlider.children[i].children[1].classList.remove('image-active')
        }
    
        event.currentTarget.children[0].classList.add('image-active')
        event.currentTarget.children[1].classList.add('image-active')
    
    
            console.log(getComputedStyle(slidesDiv[0]).marginLeft.replace("px",""))
            console.log(getComputedStyle(slidesDiv[0]).marginRight)
    
    
        
            console.log(event.currentTarget.classList)
    
    
      
            //create new image

          
                

            currentOffset = currentOffset + (window.screen.availWidth /2) - event.currentTarget.offsetLeft - parseInt(getComputedStyle(slidesDiv[0]).marginLeft.replace("px","")) -
            parseInt(getComputedStyle(slidesDiv[0]).marginRight.replace("px",""))

            console.log((window.screen.availWidth /2) - event.currentTarget.offsetLeft - parseInt(getComputedStyle(slidesDiv[0]).marginLeft.replace("px","")) -
            parseInt(getComputedStyle(slidesDiv[0]).marginRight.replace("px","")))


            console.log(Array.from(event.currentTarget.parentNode.children).length)
            console.log(Array.from(event.currentTarget.parentNode.children).indexOf(event.currentTarget))


            let elemToStart = (0 - Array.from(event.currentTarget.parentNode.children).indexOf(event.currentTarget))
            let elemToEnd = (Array.from(event.currentTarget.parentNode.children).length - Array.from(event.currentTarget.parentNode.children).indexOf(event.currentTarget))

            if(elemToEnd < 4) {
            console.log(elemToEnd)
                for(let i = 0; i < 3; i++){
                renderElement()

                }
            }

            if(Math.abs(elemToStart) < 4) {
                console.log(elemToEnd)
                    for(let i = 0; i < 3; i++){
                    renderElementPrev()
    
                    }
                }
                
            console.log(Math.abs(elemToStart))

            // console.log("!!!")
            // console.log(currentOffset)
            
            
            imageSlider.style.transform =  `translateX(${(window.screen.availWidth /2) - event.currentTarget.offsetLeft - parseInt(getComputedStyle(slidesDiv[0]).marginLeft.replace("px","")) -
            parseInt(getComputedStyle(slidesDiv[0]).marginRight.replace("px",""))}px)`


    } else{
        console.log("image has been active")
    }

    


}

function renderElement(){
    // imageSlider.style.transition = "none"
    const tempSlideContainer = slideContainer.children[currentRightRender].cloneNode(true);
    // console.log(tempSlideContainer.getAttribute("id").substring(11))
    let sliderSpanNewId = parseInt(slideContainer.lastElementChild.previousElementSibling.getAttribute("id").substring(11))  + 1 // -1 bo poza spanami, którym przypisujemy id, jest jeszcze div
    // slideContainer.removeChild(slideContainer.children[0])
    console.log(sliderSpanNewId)
    tempSlideContainer.setAttribute("id", "slider-span" + sliderSpanNewId)
    slideContainer.insertBefore(tempSlideContainer, imageSlider)

    const tempImageSlider = imageSliderClone.children[currentRightRender].cloneNode(true)
    let imageSliderNewId = parseInt(imageSlider.lastElementChild.getAttribute("id").substring(6)) + 1; // dodajemy nowe id, aby umieścić obrazek na końcu karuzeli
    // imageSlider.removeChild(imageSlider.children[0])

    tempImageSlider.setAttribute('id', "slide-" + imageSliderNewId)

    let imageNewId = parseInt(imageSlider.lastElementChild.children[0].getAttribute("id").substring(3)) + 1
    tempImageSlider.children[0].setAttribute('id', "img" + imageNewId);

    let imageButtonNewId = parseInt(imageSlider.lastElementChild.children[1].getAttribute("id").substring(7)) + 1
    tempImageSlider.children[1].setAttribute('id', "button-" + imageButtonNewId);
    tempImageSlider.children[1].setAttribute('href', "#slider-span" + imageButtonNewId);


    tempImageSlider.addEventListener("click", imageRenderNext) //dodanie nasłuchiwania eventów
    imageSlider.appendChild(tempImageSlider) 

    console.log(imageSliderClone.children.length)


    if (currentRightRender < imageSliderClone.children.length -1){
        currentRightRender++;

    } else {

        currentRightRender = 0;
    }
}


function renderElementPrev (){
    const tempSlideContainer = slideContainer.children[currentLeftRender].cloneNode(true);
         let sliderSpanNewId = parseInt( slideContainer.children[0].getAttribute('id').substring(11))

         tempSlideContainer.setAttribute("id", "slider-span" + (sliderSpanNewId -1)) 

         slideContainer.insertBefore(tempSlideContainer, slideContainer.children[0])
    
         const tempImageSlider = imageSliderClone.children[currentLeftRender].cloneNode(true);
         let imageSliderNewId = parseInt(imageSlider.children[0].getAttribute("id").substring(6))
    
         tempImageSlider.setAttribute('id', "slide-" + (imageSliderNewId - 1))
    
         let imageNewId = parseInt(imageSlider.children[0].children[0].getAttribute("id").substring(3))
         tempImageSlider.children[0].setAttribute('id', "img" + (imageNewId -1));

        console.log('imageSlider.children[0].children[0].getAttribute("id")',imageSlider.children[0].children[0].getAttribute("id"))
        console.log("imageNewId ", imageNewId)

         let imageButtonNewId = parseInt(imageSlider.children[0].children[1].getAttribute("id").substring(7))
         console.log('imageSlider.children[0].children[1].getAttribute("id").substring(7)', imageSlider.children[0].children[1].getAttribute("id").substring(7))
         console.log("imageButtonNewId ", imageButtonNewId)

        console.log('imageSlider.children[0].children[1].getAttribute("id")', imageSlider.children[0].children[1].getAttribute("id"))

         tempImageSlider.children[1].setAttribute('id', "button-" + (imageButtonNewId -1));
         tempImageSlider.children[1].setAttribute('href', "#slider-span" + (imageButtonNewId -1));


         tempImageSlider.addEventListener("click", imageRenderNext)
         imageSlider.insertBefore(tempImageSlider, imageSlider.children[0]) 

         if (currentLeftRender > 0){
             currentLeftRender--;
         } else{
            currentLeftRender = imageSliderClone.children.length - 1

         }
}