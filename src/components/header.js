import axios from "axios";


const Header = (title, date, temp) => {
  const headerInfo = document.createElement('div');
  const dateInfo = document.createElement('span');
  const titleInfo = document.createElement('h1');
  const tempInfo = document.createElement('span');

  headerInfo.appendChild(dateInfo);
  headerInfo.appendChild(titleInfo);
  headerInfo.appendChild(tempInfo);

  // console.log(headerInfo)

  headerInfo.classList.add('header');
  dateInfo.classList.add('date');
  tempInfo.classList.add('temp');

  dateInfo.textContent = date;
  titleInfo.textContent = title;
  tempInfo.textContent = temp;

  // arguments passed into the function can be used directly within the function

  

  return headerInfo 

  // cannot return a function within itself (most of the time) --> recursion 
  // make sure to return what is created (component)


  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

// console.log(Header("Chicago", "July", "21")) 


const headerAppender = (selector) => {

  const newHeader = Header("Chicago", "July", "21")
  const location = document.querySelector(selector)

  location.appendChild(newHeader)
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}


export { Header, headerAppender }
