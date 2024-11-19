let names = ["James", "Kevin", "Esther", "Edith"];

function displayName(){
    window.alert(names[0]);

}

/* function to display all names*/
function displayAllNames(){

    document.getElementById('pNames').innerHTML = names;
}

/* using eventlistener*/
let schoolnames = ["SST", "SHSIS", "SLS", "SBB"];
let buttonNames = document.getElementById('buttonSchools');

buttonNames.addEventListener('click', ()=>{

    document.getElementById('schoolNames').innerHTML = schoolnames;

});