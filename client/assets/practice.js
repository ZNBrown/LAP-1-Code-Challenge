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
    let body2 = document.getElementById('googleBody2')
    //let searchBox = 
    let results = document.getElementById('results')

    console.log(results);
    body.style['display'] = 'none';
    body2.style['display'] = 'none';
    results.style['display'] = 'block';
    results.style['height'] = '98vh';

    // 0: "<b>A</b> - Wikipedia"
    // 1: "<b>A</b>, or <b>a</b>, is the first letter and the first vowel of the modern English alphabet and the ISO basic Latin alphabet. ... Its name in English is <b>a</b> (pronounced /ˈeɪ/),&nbsp;..."
    // 2: "https://en.wikipedia.org/wiki/A"
    // for (const item of data) {
    //     results.insertAdjacentHTML('afterbegin', item[0]);
    //     results.insertAdjacentHTML('afterbegin', item[1]);
    //     results.insertAdjacentHTML('afterbegin', item[2]);

    // }
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
    // try{

    //     fetch(`http://localhost:3000/search/${searchTerm}`)
    //     .then(r => r.json())
    //     .then(data => { console.log(data)
    //         deliverContent(data)
    //         })
    // }
    // catch (err) {
    //     alert(err)
    // }

    fetch(`http://localhost:3000/search/${searchTerm}`)
    .then(r => r.json())
    .then(data => { 
        deliverContent(data)
    }).catch(err => {
        alert(err)
    })
    
}
function feelingLucky(searchTerm){
    // try{
    // fetch(`http://localhost:3000/search/${searchTerm}/lucky`)
    // .then(r => r.json())
    // .then(data => {
    //     console.log(data)
    //     deliverContent(data)
    // })
    // }
    // catch (err) {
    //     alert(err)
    // }

    fetch(`http://localhost:3000/search/${searchTerm}/lucky`)
    .then(r => r.json())
    .then(data => {
        console.log(data)
        deliverContent(data)
    }).catch(err => {
    alert(err)
    })
}


initialise();