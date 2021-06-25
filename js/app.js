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


const lorem1 = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi fermentum metus faucibus lectus pharetra dapibus. Suspendisse potenti. Aenean aliquam elementum mi, ac euismod augue. Donec eget lacinia ex. Phasellus imperdiet porta orci eget mollis. Sed convallis sollicitudin mauris ac tincidunt. Donec bibendum, nulla eget bibendum consectetur, sem nisi aliquam leo, ut pulvinar quam nunc eu augue. Pellentesque maximus imperdiet elit a pharetra. Duis lectus mi, aliquam in mi quis, aliquam porttitor lacus. Morbi a tincidunt felis. Sed leo nunc, pharetra et elementum non, faucibus vitae elit. Integer nec libero venenatis libero ultricies molestie semper in tellus. Sed congue et odio sed euismod.'
const lorem2 = 'Aliquam a convallis justo. Vivamus venenatis, erat eget pulvinar gravida, ipsum lacus aliquet velit, vel luctus diam ipsum a diam. Cras eu tincidunt arcu, vitae rhoncus purus. Vestibulum fermentum consectetur porttitor. Suspendisse imperdiet porttitor tortor, eget elementum tortor mollis non.'
// Adding 5 secions dynamically using Javascript
const mainTag = document.querySelector('main')
const docFragment = document.createDocumentFragment();
(function() {
  for (var i = 1; i <= 5 ; i++) {
    // creating <section> Tag and adding id, data-nav and class Attributes
    let section = document.createElement('section');
    section.setAttribute('id','section'+i);
    section.setAttribute('data-nav','Section '+i);
    // setting first section class to your-active-class by default
    if (i === 1) {
      section.setAttribute('class','your-active-class');
    }

    // creating <div> with landing__container class
    let secDiv = document.createElement('div');
    secDiv.setAttribute('class','landing__container');
    // creating heading
    let heading = document.createElement('h2');
    heading.textContent = 'Section '+i;
    // creating paragraphs
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    p1.textContent = lorem1;
    p2.textContent = lorem2;

    section.appendChild(secDiv);
    secDiv.appendChild(heading);
    secDiv.appendChild(p1);
    secDiv.appendChild(p2);

    docFragment.appendChild(section);
  }
  mainTag.appendChild(docFragment)
}());



const sections = document.querySelectorAll('section');

// the unordered list elemet <ul> inside the <nav> element
const navList = document.querySelector('#navbar__list');


/**
 * End Global Variables
 * Start Helper Functions
 *
*/


// A function to build the navbar using the IIFE
(function () {
  //creating a docuemntFragment to prevent repeating reflow and repaint to make the code faster
  let docFrag = document.createDocumentFragment();
  //Looping through the sections to extract the section ID and data
  sections.forEach(section => {
    //creating <li> element
    let navItem = document.createElement('li');
    //extracting id attribute of the section
    let sectionID = section.getAttribute('id');
    //Extracting the data in the data-nav attribute
    let sectionName = section.getAttribute('data-nav');
    //creating a link to the required section using the extracted id as an 'href' and the data from data-nav as link text content
    navItem.innerHTML = '<a class=\'menu__link\' href=\"#'+ sectionID +'\">'+ sectionName +'</a>';
    docFrag.appendChild(navItem);
  });

  navList.appendChild(docFrag);
})();




/**
 * End Helper Functions
 * Begin Main Functions
 *
*/
// A function to check whether a specified section is being viewed or not
function sectionBeingViewed(sect) {
    const position = sect.getBoundingClientRect();
    return (
        position.top >= 0 
    );
}


// Giving the section being viewed the apperance of active class
function activeSection() {
  //looping through sections
  for (let i = 0; i < sections.length; i++) {
    // Distiguishing the section in view by adding the given class to the section
    if (sectionBeingViewed(sections[i])) {
      //adding (your-active-class) to the section if it is in view and not have the class (your-active-class) in the classList
      if (sections[i].classList.contains('your-active-class') === false) {
        sections[i].classList.add('your-active-class')
      }
    //removing the given class from the section if it isn't in view
    } else {
      sections[i].classList.remove('your-active-class')
    }
  }
}



// build the nav


// Add class 'active' to section when near top of viewport

document.addEventListener('scroll', activeSection)

// Scroll to anchor ID using scrollIntoView event

// First, we create a list of all anchors
const anchors = document.querySelectorAll('a');
// looping through the anchors and adding the clicking event listener to apply smooth scrolling to targetted section
anchors.forEach( anchor => {
  anchor.addEventListener('click', function (evt) {
    // preventing the default action of jumping to the targeted section using the href attribute
    evt.preventDefault();
    // using the id selector "#id" stored in anchor's href attribute to get the section element by it's id
    document.querySelector(anchor.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

/**
 * End Main Functions
 * Begin Events
 *
*/

// Build menu

// Scroll to section on link click

// Set sections as active
