let peopleList = document.querySelector('#people_btn');
let peopleNext = 'https://swapi.dev/api/people'

let planetList = document.querySelector('#planets_btn');
let planetNext = 'https://swapi.dev/api/planets'

let transportList = document.querySelector('#transport_btn')
let transportNext = 'https://swapi.dev/api/starships'

let informAbout = document.querySelector('.inform_about');


peopleList.addEventListener('click', () => {
    fetch(peopleNext)
        .then(res => res.json())
        .then((result) => result.results.forEach(function (value, index) {
            let groupOfPeople = document.querySelector('.people_list')
            let listOfPeople = document.createElement('li')
            listOfPeople.addEventListener('click', Information = ()=>{
                informAbout.innerHTML = ' '
                 for (const key in value) {
                     informAbout.innerHTML+=(`${key}: ${value[key]} <br>`);
                }
            })
            groupOfPeople.appendChild(listOfPeople)
            listOfPeople.innerHTML += `${value.name} `
            peopleNext = result.next
            if (peopleNext === null) {
                peopleList.style.display = 'none'
            }
        }))

})


planetList.addEventListener('click', () => {
    fetch(planetNext)
        .then(res => res.json())
        .then(result => result.results.forEach(function (value, index) {
            let groupOfPlanets = document.querySelector('.planets_list ul');
            let listOfPlanets = document.createElement('li');
            listOfPlanets.addEventListener('click', planetInfo = ()=>{
                informAbout.innerHTML = ' '
                for (const key in value) {
                    informAbout.innerHTML+=(`${key}: ${value[key]} <br>`);
                }
            })

            listOfPlanets.innerHTML += value.name;
            groupOfPlanets.appendChild(listOfPlanets)
            planetNext = result.next
            if (planetNext === null) {
                planetList.style.display = 'none'
            }
        }))
})


transportList.addEventListener('click', () => {
    fetch(transportNext)
        .then(res => res.json())
        .then(result => result.results.forEach(function (value) {
            let groupOfTransports = document.querySelector('.transport_list ul');
            let listOfTransports = document.createElement('li');
            listOfTransports.addEventListener('click', transportInfo = ()=>{
                informAbout.innerHTML = ' '
                for (const key in value) {
                    informAbout.innerHTML+=(`${key}: ${value[key]} <br>`);
                }
            })
            listOfTransports.innerHTML += value.name;

            groupOfTransports.appendChild(listOfTransports)
            transportNext = result.next
            if (transportNext === null) {
                transportList.style.display = 'none'
            }
        }))
})


