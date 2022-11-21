
//------- RANDOM DOG GENERATOR -------//

let img = document.querySelector('img');
let dogButton = document.querySelector('button');

fetch('https://dog.ceo/api/breeds/image/random')
    .then(function (response) {
        //console.log(response.json());
        return response.json();
    })

    .then(function (data) {
        console.log(data);
        console.log(data.message);

        img.src = data.message;
    })

dogButton.addEventListener('click', function () {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            img.src = data.message;
        })
})

//------- WEATHER APPLICATION -------//
let weatherButton = document.querySelector('#button')
let temp = document.querySelector('#temp')
let wind = document.querySelector('#wind');
let description = document.querySelector('#desc');
let city = document.querySelector('#city')


weatherButton.addEventListener('click', (e) => {
    e.preventDefault();
    //console.log(input.value)
    fetch(encodeURI(`https://goweather.herokuapp.com/weather/{${input.value}}`))
        .then(res => {
            //console.log(res.json())
            return res.json()

        })
        .then(data => {
            console.log(data)
           

            city.innerText = input.value
            temp.innerHTML = data.temperature;
            wind.innerHTML = data.wind;
            description.innerHTML = data.description;

        })

})























