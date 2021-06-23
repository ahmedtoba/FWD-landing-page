/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
*/

/**
 * Define Global Variables
 *
*/
const sections = document.querySelectorAll('section');

// the unordered list elemet <ul> inside the <nav> element
const navList = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/


// A function to build the navbar
function createNavbarItems() {
  //creating a docuemntFragment to prevent repeating reflow and repaint to make the code faster
  let docFrag = document.createDocumentFragment();
  //Looping through the sections to extract the section ID and data
  for (let i = 0; i < sections.length; i++) {
    //creating <li> element
    let navItem = document.createElement('li');
    //extracting id attribute of the section
    let sectionID = sections[i].getAttribute('id');
    //Extracting the data in the data-nav attribute
    let sectionName = sections[i].getAttribute('data-nav');
    //creating a link to the required section using the extracted id as an 'href' and the data from data-nav as link text content
    navItem.innerHTML = `<a class='menu__link' href="#${sectionID}">${sectionName}</a>`;
    docFrag.appendChild(navItem);
  }
  navList.appendChild(docFrag);
}




/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// A function to check whether a specified section is being viewed or not
function sectionBeingViewed(sec) {
  let secPosition = sec.getBoundingClientRect();
  return (secPosition.top >= 0);
}

// Giving the section being viewed the apperance of active class
function activeSection() {
  //looping through sections
  for (let i = 0; i < sections.length; i++) {
    // Distiguishing the section in view by adding the given class to the section
    if (sectionBeingViewed(sections[i])) {
      //adding (your-active-class) to the section if it is in view and not have the class (your-active-class) in the classList
      if (!sections[i].classList.contains('your-active-class')) {
        sections[i].classList.add('your-active-class')
      }
    //removing the given class from the section if it isn't in view
    } else {
      sections[i].classList.remove('your-active-class')
    }
  }
}



// build the nav
createNavbarItems();

// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', activeSection)

// Scroll to anchor ID using scrollTO event

// Scrolling smoothly to the anchored section (I think it is more straightforward than using the scrollTo)

document.querySelector('html').style.cssText= 'scroll-behavior: smooth;'

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
