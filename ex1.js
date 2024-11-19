document.addEventListener('DOMContentLoaded', function(){

const jokes =[
    "joke number 1",
    "joke number 2",
    "joke number 3",
    "joke number 4",
    "joke number 5"
];

const generateJokeButton = document.getElementById('generateJoke');
const jokeDiplay = document.getElementById('jokeDisplay');

generateJokeButton.addEventListener('click', function(){

    const randomIndex = Math.floor(Math.random()*jokes.length);
    const randomJoke = jokes[randomIndex];
    jokeDiplay.textContent = randomJoke;

})

});