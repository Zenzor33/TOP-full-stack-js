// // import your function
// import myName from './myName';

// function component() {
//   const element = document.createElement('div');

//   // use your function!
//   element.textContent = myName('Cody');
//   return element;
// }

// document.body.appendChild(component());

import _ from 'lodash';


function component() {
    const element = document.createElement('div');
  
   // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');

    return element;
  }
  
  document.body.appendChild(component());

// import your function
import myName from './myName';
