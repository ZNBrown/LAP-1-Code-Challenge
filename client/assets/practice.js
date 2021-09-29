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
       search(searchTerm);
    }
    else if (route == "btnTwo")
    {
        feelingLucky(searchTerm);
    }
}
function deliverContent(data){
    let body = document.getElementById('googleBody')
    let results = document.getElementById('results')
    let bar = document.getElementById('fakeBar')
    bar.style['display'] = 'block';

    console.log(results);
    body.style['display'] = 'none';
    results.style['display'] = 'block';
    results.style['height'] = 'auto';

    for (let index = data.length - 1; index >= 0; index--) {
        const item = data[index];
        console.log(item);
        let title = `<div class=card> <h3>${item[0]}</h3>`
        let body = `<p>${item[1]}</p> <br>`
        let link = ` <a href='${item[2]}'>${item[2]}</a> <br> </div>`
        results.insertAdjacentHTML('afterbegin', title + body + link);
    }
}
function search(searchTerm){
    fetch(`http://localhost:3000/search/${searchTerm}`)
    .then(r => r.json())
    .then(data => { 
        deliverContent(data)
    }).catch(err => {
        alert(err)
    })
    
}
function feelingLucky(searchTerm){
    fetch(`http://localhost:3000/search/${searchTerm}/lucky`)
    .then(r => r.json())
    .then(data => {
        console.log(data)
        location.assign(data);
    }).catch(err => {
    alert(err)
    })
}


initialise();