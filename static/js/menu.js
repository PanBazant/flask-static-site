data = Array(data.menu)[0]
const menuList = document.querySelector(".menu-list")


function renderItem (item){
    const elem = document.createElement("div")
    elem.classList.add("menu-item")
    
    const elemId = document.createElement("p")
    elemId.textContent = item.id
    elemId.classList.add("pizza-id")

    const elemName = document.createElement("p")
    elemName.textContent = item.name
    elemName.classList.add("pizza-name")

    const elemIngredients = document.createElement("p")
    elemIngredients.textContent = item.ingredients.join(", ")
    elemIngredients.classList.add("pizza-ingredients")

    const elemPriceS = document.createElement("p")
    elemPriceS.textContent = item.priceSmallSize
    elemPriceS.classList.add("pizza-size-s")

    const elemPriceM = document.createElement("p")
    elemPriceM.textContent = item.priceMediumSize
    elemPriceM.classList.add("pizza-size-m")

    const elemPriceL = document.createElement("p")
    elemPriceL.textContent = item.priceLargeSize
    elemPriceL.classList.add("pizza-size-l")

    const elemSpiciness = document.createElement("div")
    elemSpiciness.classList.add("pizza-spiciness")

    for(let i=0; i < item.spiciness; i++){
        const elemSpicinessIcon = document.createElement("i")
        elemSpicinessIcon.classList = ("fa-solid fa-pepper-hot")
        elemSpiciness.appendChild(elemSpicinessIcon)
    }

    elem.appendChild(elemId)
    elem.appendChild(elemName)
    elem.appendChild(elemIngredients)
    elem.appendChild(elemPriceS)
    elem.appendChild(elemPriceM)
    elem.appendChild(elemPriceL)
    elem.appendChild(elemSpiciness)

    menuList.appendChild(elem)
}


data.forEach(item => renderItem(item))

const menuSearch = document.querySelector(".menu-search")

menuSearch.addEventListener("keydown", inputPizza)

let word = ""

function inputPizza(event){
    const listOfSpecialCharacters = 
    ["Shift", "Escape", "Control", "Alt", "CapsLock", "Meta", "ContexMenu", "AltGraph", "Insert",
     "Delete", "Home", "End", "PageUp", "PageDown", "NumLock", "ScrollLock", 
     "Enter", "F1", "F2", "F3", "F4", "F5", "F6", "F7", "F8", "F9", "F10", "F11", "F12"]

    if (listOfSpecialCharacters.includes(event.key)) {
        console.log("Prevent default action ", event.key)
        event.preventDefault();
    }
    else if(event.key === "Backspace"){
        word = word.slice(0, -1)
    } else{
        word = word + event.key
    }
    console.log(word)
    searchPizza(word)
}


function searchPizza(word){
    menuList.innerHTML = "";
    const filterData = data.filter( el => {
        // console.log(el.name.includes(word))
        // console.log(word)
        return el.name.toLowerCase().includes(word.toLowerCase())
    })
    filterData.forEach(item => renderItem(item))
}


// for (let i = 0; i < 10; i++){
//     const elem = document.createElement("div");
//     elem.classList.add("menu-item");
//     elem.textContent = "XDDDDDDDDDDDDD"
//     menuList.append(elem)
// }