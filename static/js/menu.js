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
const pizzaHot = document.querySelector(".pizza-hot")
const pizzaSweet = document.querySelector(".pizza-sweet")
const pizzaVegetarian = document.querySelector(".pizza-vegetarian")






let spice = false
let sweet = false
let vegetarian = false

pizzaHot.addEventListener('change', function() {
    if (this.checked) {
      spice = true
      console.log("spice true")
      searchPizza(word)
    } else {
        spice = false
        console.log("spice false")
        searchPizza(word)

    }
  });


  pizzaSweet.addEventListener('change', function() {
    if (this.checked) {
      sweet = true
      console.log("sweet true")
      searchPizza(word)
    } else {
      sweet = false
      searchPizza(word)
      console.log("sweet false")

    }
  });


  pizzaVegetarian.addEventListener('change', function() {
    if (this.checked) {
      vegetarian = true
      console.log("vegetarian true")
      searchPizza(word)
    } else {
      vegetarian = false
      searchPizza(word)
      console.log("vegetarian false")

    }
  });


menuSearch.addEventListener("keyup", inputPizza)
// menuSearch.addEventListener("change", inputPizza)




let word = ""

function inputPizza(event){

    word = menuSearch.value;
    searchPizza(word)
}


function searchPizza(word){
    menuList.innerHTML = "";
    
    const filterData = data.filter( el => {

        // console.log(spice)
        // console.log(sweet)

        console.log(word)




        return el.name.toLowerCase().includes(word.toLowerCase()) &&
                //nie wiem jaki dać inny warunek, żeby nie robiło nic w innym wypadku
                spice && sweet && vegetarian ? el.spiciness > 0 && el.sweet === true && el.vegetarian === true && el.name.toLowerCase().includes(word.toLowerCase()): 
                spice && sweet ? el.spiciness > 0 && el.sweet === true  && el.name.toLowerCase().includes(word.toLowerCase()): 
                spice && vegetarian ? el.spiciness > 0 && el.vegetarian === true  && el.name.toLowerCase().includes(word.toLowerCase()): 
                vegetarian && sweet ? el.vegetarian === true && el.sweet === true  && el.name.toLowerCase().includes(word.toLowerCase()): 
                spice ? el.spiciness > 0 && el.name.toLowerCase().includes(word.toLowerCase()) : 
                sweet ? el.sweet === true  && el.name.toLowerCase().includes(word.toLowerCase()) : 
                vegetarian ? el.vegetarian === true  && el.name.toLowerCase().includes(word.toLowerCase()) :
                el.name.toLowerCase().includes(word.toLowerCase())
    })
    
    filterData.forEach(item => renderItem(item))
}


/*
             spice && sweet ? el.spiciness > 0 && el.sweet === true  && el.name.toLowerCase().includes(word.toLowerCase()): 
                spice ? el.spiciness > 0 && el.name.toLowerCase().includes(word.toLowerCase()) : 
                sweet ? el.sweet === true  && el.name.toLowerCase().includes(word.toLowerCase()) : el.name.toLowerCase().includes(word.toLowerCase()) */