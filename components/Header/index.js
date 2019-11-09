// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

const Header = () => {
    const mainHeader = document.createElement('div');
    const dateSpan = document.createElement('span');
    const headerTitle = document.createElement('h1');
    const tempSpan = document.createElement('span');

    mainHeader.append(dateSpan, headerTitle, tempSpan);

    mainHeader.classList.add('header');
    dateSpan.classList.add('date');
    tempSpan.classList.add('temp')

    dateSpan.textContent = 'MARCH 28, 2019'
    headerTitle.textContent = 'Lambda Times'
    tempSpan.textContent = '98°'

    return mainHeader;
}

const headerEntryPoint = document.querySelector('.header-container');
headerEntryPoint.appendChild(Header());
