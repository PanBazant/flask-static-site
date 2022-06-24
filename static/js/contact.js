contactDays = document.querySelector(".contact-days");
contactIcon = document.querySelector(".contact-icon");


contactDaysClone = contactDays.cloneNode(true)

contactIcon.addEventListener("click", toggleContactList)

console.log(contactDays.children)

function toggleContactList(){


         for (let i = 0; i < contactDaysClone.children.length; i++){

            if(contactDays.children[i].style.display !== "none"){
                setTimeout(() =>{
                    // contactDays.children[i].style.opacity = "0"
    
                    setTimeout(()=>{
                        contactDays.children[i].style.display = "none"
                    },30)
                    console.log(i)
                    contactIcon.children[0].classList.remove("fa-caret-down")
                    contactIcon.children[0].classList.add("fa-caret-right")
                    console.log(contactIcon.nextElementSibling)
                    contactIcon.nextElementSibling.style.opacity = "1"

                }, 50*i)
            } else{
                    setTimeout(() =>{
                        // contactDays.children[i].style.opacity = "1"
        
                        setTimeout(()=>{
                            contactDays.children[i].style.display = "flex"
                        },30)
                        console.log(i)
                        contactIcon.children[0].classList.remove("fa-caret-right")
                        contactIcon.children[0].classList.add("fa-caret-down")
                        contactIcon.nextElementSibling.style.opacity = "0"

        
                    }, 50*i)
                    
            }

       

        // if(contactDays.children[i].style.visibility !== "hidden"){
        //     contactDays.children[i].style.visibility = "hidden";
    
        // } else{
        //     contactDays.children[i].style.visibility = "visible";
    
        // }


    //         if(contactDays.children[i].style.display !== "none"){
    //     contactDays.children[i].style.display = "none"
    // } else{
    //     contactDays.children[i].style.display = "flex"

    // }

    }

    

 




}

