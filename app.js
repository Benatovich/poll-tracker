// import functions and grab DOM elements
import { renderOption } from './render-utils.js';
import { renderPoll } from './render-utils.js';

// let state
const pastPollsArray = [];
let currentPoll = {
    nameA: '',
    nameB: '',
    scoreA: 0,
    scoreB: 0,
};
// set event listeners 
  // get user input
  // use user input to update state 
  // update DOM to reflect the new state
console.log(renderOption());
console.log(renderPoll());