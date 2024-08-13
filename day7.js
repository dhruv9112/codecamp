console.log('connected')

// DOM Manipulation - With the HTML DOM, JavaScript can access and change all the elements of an HTML document.

// In js event listeners are used to w8 for an event to occur and react accoridngly to given condition


//  these both are ways of getting html element in our js
// we can also include by classname as well
// in query selector we have to mention .,# or tag name depending on what we r using


// const btn = document.querySelector('#btn')

// // const body = document.getElementById('body')

const text = document.querySelector('#text')

// const img = document.querySelector('#image')

// // const username = document.querySelector('#username')

// let state = 'right'

// // here we r adding eventlistener on btn that whenever we click on this bg-color changes to blue and text color changes to black, new text appears, car image changes 
// // () => this is an arrow function ( they allow us to use shorter function syntax )


// btn.addEventListener('click', () =>{

    
//     // const value = username.value
//     // username.value = ''

//     //  to remove input box
//     // username.style.display = 'none'
    
//     // body.style.backgroundColor = 'blue'
//     // body.style.color = 'black'

//     // text.innerHTML = ''
//     // text.innerHTML = `${value}`

//     // img.setAttribute('src','https://imgs.search.brave.com/aAQJW3ra0eqOwp1xJwY5HNFFqnA5dLd-_mlviABaBcI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2YzLzE3/LzhlL2YzMTc4ZWYx/NjNlNmYzYTA2NGE4/YjRlMjVmYmQ2OWE1/LmpwZw')

//     // to remove image
//     // img.style.display = 'none'


//     // animation
//     // img.style.animationPlayState = 'running'


//     // toggle button animation

//     // if(state=='right'){
//     //     img.style.animation='right-left 1s forwards'
//     //     img.style.animationPlayState = 'running'
//     //     state= 'left'
//     // }

//     // else{
//     //     img.style.animation='left-right 1s forwards'
//     //     img.style.animationPlayState = 'running'
//     //     state = 'right'
//     // }


// })
            



// method 1
// function handleclick(){
//     text.innerHTML=''
//     text.innerHTML='bye'

// }

// method 2 using arrow funtion

let handleclick = () =>{
      text.innerHTML=''
    text.innerHTML='bye'
}