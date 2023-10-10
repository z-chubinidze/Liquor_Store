//years of experience Tu rise numbers automatikally

var valueDisplays = document.querySelectorAll(".number")
let interval = 11000; //interval what time we need to work function

valueDisplays.forEach((valueDisplay) => {
    let startValue = 0;
    let endValue = parseInt(valueDisplay.getAttribute("data-val"));


    let duration = Math.floor(interval / endValue);

    let caunter = setInterval(function () {
        startValue = startValue + 1;
        valueDisplay.textContent = startValue;
        if (startValue == endValue) {
            clearInterval(caunter);
        }
    }, duration)

})

// plus minus button to change numbers of product

var decrementBTN = document.getElementById("decrementBTN")
var incrementtBTN = document.getElementById("incrementtBTN")
var quantity = document.getElementById("quantity")


incrementtBTN.addEventListener("click", () => {
    quantity.value = parseInt(quantity.value) + 1;
})
decrementBTN.addEventListener("click", () => {
    if (quantity.value <= 0) {
        quantity.value = 0;
    } else {
        quantity.value = parseInt(quantity.value) - 1;
    }

})

//reviews buttons click chnges revius, descriptions and manufacturer

var button1 = document.getElementById("button1")
var button2 = document.getElementById("button2")
var button3 = document.getElementById("button3")
var description = document.getElementById("description")
var manufacturer = document.getElementById("manufacturer")
var reviews = document.getElementById("reviews")

button1.addEventListener("click", () => {
    description.classList.remove("d-none");
    description.classList.add("d-block");
    manufacturer.classList.add("d-none")
    button1.classList.add("active")
    button2.classList.remove("active")
    button3.classList.remove("active")
})
button2.addEventListener("click", () => {
    description.classList.add("d-none");
    manufacturer.classList.remove("d-none");
    manufacturer.classList.add("d-block")
    button2.classList.add("active")
    button1.classList.remove("active")
    button3.classList.remove("active")
    reviews.classList.add("d-none");
})
button3.addEventListener("click", () => {
    reviews.classList.remove("d-none");
    reviews.classList.add("d-block")
    button3.classList.add("active")
    button1.classList.remove("active")
    button2.classList.remove("active")
    manufacturer.classList.add("d-none")
    description.classList.add("d-none");
})