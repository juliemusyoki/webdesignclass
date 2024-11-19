/*form validation*/
function validateForm(){

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let errorMessage = document.getElementById("error-message").value;
 
    //clear previous error messages
    errorMessage.innerHTML = "";

    //name validation
    if (name === "") {
        errorMessage.innerHTML += "Please enter namr<br>"
    }

    //email validation
    if (email === "") {
        errorMessage.innerHTML += "Please enter email"
    }

    //password validation
    if (password === "") {
        errorMessage.innerHTML += "Please enter password"
    }
}

/*jokes */
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