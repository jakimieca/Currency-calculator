console.log("Hello World!");

const rateEUR = 4.4278;
const rateGBP = 4.9384;
const rateUSD = 3.9058;

let amonut = document.querySelector(".js-amount");
let curreny = document.querySelector(".js-currency");
let formResult = document.querySelector(".js-formResult");
let button = document.querySelector(".form_button")
let form = document.querySelector(".js-form");

form.addEventListener("submit", (event) => {
    event.preventDefault();
})

button.addEventListener("click", () => {


    if (curreny.value === "Euro") {
        result = amonut.value / rateEUR;
        console.log(result);
        formResult.innerText = (`${amonut.value} PLN = ${result.toFixed(2)} EUR`);

    } else if (curreny.value === "Dolar") {
        result = amonut.value / rateUSD;
        formResult.innerText = (`${amonut.value} PLN = ${result.toFixed(2)} USD`);
    } else {
        result = amonut.value / rateGBP;
        formResult.innerText = (`${amonut.value} PLN = ${result.toFixed(2)} GBP`);
    }

})