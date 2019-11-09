// Step 2: Create Tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-backend.herokuapp.com/topics
// Once the data is returned console.log it and review the structure.
// Iterate over the topics creating a new Tab component and add it to the DOM
// under the .topics element.
//
//  The tab component should look like this:
//    <div class="tab">topic here</div>

const tabsEntryPoint = document.querySelector('.topics')

const tab = (object) => {
    const tabComp = document.createElement('div');

    tabComp.classList.add('tab');

    tabComp.textContent = object;

    return tabComp
}

console.log(axios 
    .get('https://lambda-times-backend.herokuapp.com/topics'));
    axios 
        .get('https://lambda-times-backend.herokuapp.com/topics')
        .then(response => {
            const topicsArr = response.data.topics;
            topicsArr.forEach(element => {
             const newTab = tab(element);
             tabsEntryPoint.appendChild(newTab)
            });
        })