// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.


const promise = axios.get('https://lambda-times-api.herokuapp.com/articles')
console.log(promise)

function Constructor(obj) {
    //objects
    const card = document.createElement('div')
    const headline = document.createElement('div')
    const author = document.createElement('div')
    const imgContainer = document.createElement('div')
    const image = document.createElement('img')
    const span = document.createElement('span')
    //classes
    card.classList.add('card')
    headline.classList.add('headline')
    author.classList.add('author')
    imgContainer.classList.add('img-container')
    //text content
    headline.textContent = obj.headline
    image.src = obj.authorPhoto
    span.textContent = `By ${obj.authorName}`
    //append
    imgContainer.append(image)
    author.append(imgContainer,span)
    card.append(headline,author)
    //click event
    card.addEventListener('click', e => {
        console.log(obj.headline)
    })
    //return
    return card
}


const entryPoint = document.querySelector('.cards-container')

promise.then(response => {
    response.data.articles.bootstrap.forEach(item => {
        const funcFeeder = Constructor(item)
        entryPoint.appendChild(funcFeeder)
        
    })
})
promise.then(response => {
    response.data.articles.javascript.forEach(item => {
        const funcFeeder = Constructor(item)
        entryPoint.appendChild(funcFeeder)
        
    })
})
promise.then(response => {
    response.data.articles.jquery.forEach(item => {
        const funcFeeder = Constructor(item)
        entryPoint.appendChild(funcFeeder)
        
    })
})
promise.then(response => {
    response.data.articles.node.forEach(item => {
        const funcFeeder = Constructor(item)
        entryPoint.appendChild(funcFeeder)
        
    })
})
promise.then(response => {
    response.data.articles.technology.forEach(item => {
        const funcFeeder = Constructor(item)
        entryPoint.appendChild(funcFeeder)
        
    })
})


