const imageSlider = document.querySelector(".image-slider");


const slidesDiv = document.querySelectorAll(".slides-div")






slidesDiv.forEach(slide =>{
    slide.addEventListener("click", imageRenderNext)
})

let previousImage = 0;


let counter = 1;

function imageRenderNext (event){

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
    
    
            imageSlider.style.transform =  `translateX(${(window.screen.availWidth /2) - event.currentTarget.offsetLeft - parseInt(getComputedStyle(slidesDiv[0]).marginLeft.replace("px","")) -
            parseInt(getComputedStyle(slidesDiv[0]).marginRight.replace("px",""))}px)`

    } else{
        console.log("image has been active")
    }

    


}

