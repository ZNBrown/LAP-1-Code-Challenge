let btn1 = document.getElementById('s-box')



function handleFormSubmit(e){
    let searchTerm = e.target.s-boxspace.value;
    e.preventDefault()
    console.log(searchTerm);
    }

btn1.addEventListener('submit', handleFormSubmit) 
    
//s-box.addEventListener('submit', () )




    
//fetch(`http://localhost:3000/search/${searchTerm}`).then(r => r.json()).then(data => console.log(data))
   