console.log('connected')

// DOM Manipulation - With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

// In js event listeners are used to w8 for an event to occur and react accoridngly to given condition


//  these both are ways of getting html element in our js
// we can also include by classname as well
// in query selector we have to mention .,# or tag name depending on what we r using
const btn = document.querySelector('#btn')
const body = document.getElementById('body')
const text = document.querySelector('#text')
const img = document.querySelector('#image')

// here we r adding eventlistener on btn that whenever we click on this bg-color changes to blue and text color changes to black, new text appears, car image changes 
// () => this is an arrow function ( they allow us to use shorter function syntax )
btn.addEventListener('click', () =>{
    body.style.backgroundColor = 'blue'
    body.style.color = 'black'
    text.innerHTML = ''
    text.innerHTML = 'The content has been changed'
    img.setAttribute('src','https://imgs.search.brave.com/aAQJW3ra0eqOwp1xJwY5HNFFqnA5dLd-_mlviABaBcI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YzLzE3/LzhlL2YzMTc4ZWYx/NjNlNmYzYTA2NGE4/YjRlMjVmYmQ2OWE1/LmpwZw')

    // to remove image
    // img.style.display = 'none'
})



