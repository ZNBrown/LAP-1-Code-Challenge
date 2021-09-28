function initialise() {
    let form = document.getElementById('sbox')
    form.addEventListener('submit', handleFormSubmit)
}

function handleFormSubmit(e){
    e.preventDefault()
    let searchTerm = e.target.sboxspace.value;
    let route = e.submitter.id;
    console.log(route);
    if (route == "btnOne")
    {
        deliverContent(search(searchTerm));
    }
    else if (route == "btnTwo")
    {
        deliverContent(feelingLucky(searchTerm));
    }
}
function deliverContent(data){

}
function search(searchTerm){
    fetch(`http://localhost:3000/search/${searchTerm}`)
    .then(r => r.json())
    .then(data => console.log(data));
}
function feelingLucky(searchTerm){
    fetch(`http://localhost:3000/search/${searchTerm}/lucky`)
    .then(r => r.json())
    .then(data => console.log(data));
}

initialise();