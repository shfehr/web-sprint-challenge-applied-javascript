import axios from "axios";

const Card = (article) => {

  const fullCard = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imageContainer = document.createElement('div');
  const image = document.createElement('img');
  const byAuthor = document.createElement('span')

  fullCard.appendChild(headline);
  fullCard.appendChild(author);
  author.appendChild(imageContainer)
  imageContainer.appendChild(image)
  author.appendChild(byAuthor)

  fullCard.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imageContainer.classList.add('img-container');

  headline.textContent = article.headline
  byAuthor.textContent = article.authorName
  image.src = article.authorPhoto

  fullCard.addEventListener('click', () => {
    console.log(article.headline)
  })

  return fullCard

  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


}


const cardAppender = (selector) => {
  axios.get('http://localhost:5001/api/articles') 
  .then(resp => {
      // console.log(resp.data.articles.javascript[0])
      // for (let topic in resp.data.articles) {
        // console.log(resp.data.articles)
        for (let i = 0; i < Object.keys(resp.data.articles).length; i++) {

          // console.log(resp.data.articles[Object.keys(resp.data.articles)[i]])
            resp.data.articles[Object.keys(resp.data.articles)[i]].forEach(article => {
            document.querySelector(selector).append(Card(article))
            // });
        })
    }})

       
        // topic.forEach(article => {
        // document.querySelector(selector).append(Card(article))
        //  });
      //}
      // resp.data.articles.forEach(topic => {
      //    topic.forEach(article => {
      //    document.querySelector(selector).append(Card(article))
      //    });
//
//       document.querySelector(selector)
//       const cardFinal = Card(topic)
//       location.appendChild(cardFinal)
     

  .catch(err => console.error(err))
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
