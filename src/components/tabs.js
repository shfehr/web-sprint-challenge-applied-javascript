import axios from "axios";


const Tabs = (topics) => {
// console.log(topics)
  const topicsList = document.createElement('div');
  topicsList.classList.add('topics')
  
  topics.forEach(topic => {
    const tab = document.createElement('div');
    tab.classList.add('tab');
    tab.textContent = topic
    topicsList.appendChild(tab);
  })
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //  const newHeader = Header("Chicago", "July", "21")
  
  return topicsList
}

Tabs(['javascript', 'bootstrap', 'technology'])

const tabsAppender = (selector) => {

  axios.get('http://localhost:5001/api/topics') 
   .then(resp => {
      //  console.log(resp.data.topics)
       const topics = resp.data.topics
       const finalTab = Tabs(topics)
       const tabLocation = document.querySelector(selector)
       tabLocation.appendChild(finalTab)
      //  for (let i = 0; i < topics.length; i++) {
      //    const tabLocation = document.querySelector(selector)
      //    const finalTab = Tabs(topics[i])
      //    tabLocation.appendChild(finalTab)
       //}

    // resp.data.topics.forEach(topic => {
    //   const tabLocation = document.querySelector(selector)
    //   const finalTab = Tabs(topic)
    //   tabLocation.appendChild(finalTab)
    
    // })
 })
   .catch(err => console.error(err))

  // const newTab = Tabs(resp)
  // const location = document.querySelector(selector)

  // location.appendChild(newTab)
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5001/api/topics` (test it with a console.log!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
 }

export { Tabs, tabsAppender }
