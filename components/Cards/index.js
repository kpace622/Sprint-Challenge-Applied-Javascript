// STEP 3: Create Article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Stduy the response data you get back, closely.
// You will be creating a component for each 'article' in the list.
// This won't be as easy as just iterating over an array though.
// Create a function that will programmatically create the following DOM component:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {authors name}</span>
//   </div>
// </div>
//
// Create a card for each of the articles and add the card to the DOM.
const cardsEntryPoint = document.querySelector('.cards-container');

const createCard = (object) => {
    const card = document.createElement('div');
    const headline = document.createElement('div');
    const author = document.createElement('div');
    const imgContainer = document.createElement('div');
    const articleImg = document.createElement('img');
    const credit = document.createElement('span');

    card.append(headline, author);
    author.append(imgContainer, credit);
    imgContainer.appendChild(articleImg);

    card.classList.add('card');
    headline.classList.add('headline');
    author.classList.add('author');
    imgContainer.classList.add('img-container');

    headline.textContent = `${object.headline}`
    author.textContent = `${object.authorName}`
    articleImg.src = object.authorPhoto;

    return card;
}

console.log(axios
    .get('https://lambda-times-backend.herokuapp.com/articles'));
    axios 
        .get('https://lambda-times-backend.herokuapp.com/articles')
        .then(response => {
            const articlesArr = Object.values(response.data.articles);
            articlesArr.forEach(item => {
                item.forEach(article => {
                    cardsEntryPoint.appendChild(createCard(article));
                })
            });
        })
