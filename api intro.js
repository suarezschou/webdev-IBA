//oldschool
let request = new XMLHttpRequest();
request.open("GET", "https://ghibliapi.herokuapp.com/films", true);
request.onload = function() {
    console.log(response);

    let data = JSON.parse(this.response);

    console.log(data[2]);
}
request.send();

//fetch

fetch("https://ghibliapi.herokuapp.com/films")
.then(response =>{
    //console.log(response)
    return response.text();
})
.then(text => {
    //console.log(text);
    let data = JSON.parse(text);
    //console.log(data);
    console.log(data[2].title);
})

// API https://pokeapi.co


let pokemon = prompt("type in pokemon");
fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
.then(response => response.json())
.then(data =>{
    console.log(data);
    console.log(data.name)
    data.abilities.forEach(ability => {
        console.log(ability.ability.name)
    });
})
.catch(err => console.log("pokemon not found",err))

//geolocation
const getLoca = () => {
    if(Navigator.geolocation){
        Navigator.geolocation.getCurrentPosition(showPosition);
    }else{
    console.log("efsfesfes")
    }
}
const showPosition = (position) => {
    console.log(`Latitude:${position.coords.latitude}
    ,Longitude:${position.coords.longitude}`)
}
getLoca();