const weatherForm = document.querySelector('form')
const search = document.querySelector('input')
const messageOne = document.querySelector("#message1")
const messageTwo = document.querySelector("#message2")
const weatherImage = document.querySelector("#weatherImg");
weatherImage.style.display = "none"

weatherForm.addEventListener("submit", (e) => {
    e.preventDefault()

    const location =  search.value

    messageOne.textContent = "Loading..."
    messageTwo.textContent = ""

    fetch(`/weather?address=${location}`).then((response) => {
        response.json().then((data) => {
            if (data.error) {
                messageOne.textContent = data.error
            } else {
                weatherImage.src = data.forecast.weatherIcon
                weatherImage.style.display = "block"
                messageOne.textContent = data.location
                messageTwo.innerHTML = `<b>${data.forecast.weather}</b>. The temperature is ${data.forecast.temperature} &degC and precipitation is ${data.forecast.precipitation}.`
            }
        })
    })
})