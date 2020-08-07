// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element


import axios from 'axios'

const promise = axios.get('https://lambda-times-api.herokuapp.com/topics')
console.log(promise)

function tabs (obj) {
    //objects
   const tab = document.createElement('div')
   tab.classList.add('tab')
   tab.textContent = obj
   return tab
}   
const entryPoint = document.querySelector('.topics')

promise.then((response) => {
    response.data.topics.forEach(i => {
    const newTab = tabs(i)
    entryPoint.appendChild(newTab)
    })
})

.catch((errorResponse) => {
    console.log('error!', errorResponse)
  })


