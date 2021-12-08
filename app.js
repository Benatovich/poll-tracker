// import functions and grab DOM elements
import { renderOption, renderPoll } from './render-utils.js';
const currentPollEl = document.getElementById('current-poll-container');
const pastPollsEl = document.getElementById('past-polls-container');

const pollForm = document.getElementById('poll-form');
const optionAAddButton = document.getElementById('option-a-add-button');
const optionBAddButton = document.getElementById('option-b-add-button');
const optionARemoveButton = document.getElementById('option-a-remove-button');
const optionBRemoveButton = document.getElementById('option-b-remove-button');

const closePollButton = document.getElementById('close-poll-button');
const questionEl = document.getElementById('poll-question');
// const optionATitleEl = document.getElementById('option-a');
// const optionBTitleEl = document.getElementById('option-b');
const optionATitleEl = document.getElementById('option-a-title');
const optionBTitleEl = document.getElementById('option-b-title');
const optionAVotesEl = document.getElementById('option-a-votes');
const optionBVotesEl = document.getElementById('option-b-votes');

const pastPollsEl = document.getElementsByClassName('past-polls');

// let state
let question = '';
let optionAVotes = 0;
let optionBVotes = 0;
let optionATitle = 0;
let optionBTitle = 0;

const pastPollsArray = [];
// let currentPoll = {
//     question: '',
//     nameA: '',
//     nameB: '',
//     scoreA: 0,
//     scoreB: 0,
// };

// findByName(name, array) {
//   // return the correct object (FOR MUSHROOM GAME)
//   for (let item of array) {
//     if (item.name === name) {
//       return item;
//     }
//   }
// };

pollForm.addEventListener('submit', (e) => {
    //prevent default form behavior 
    e.preventDefault();
    // get the name data from the form
    const data = new FormData(pollForm);
    // set state to this data from the form
    question = data.get('booger-question');
    optionATitle = data.get('booger-option-a');
    optionBTitle = data.get('booger-option-b');

    currentPoll.question = question;
    currentPoll.optionATitle = optionATitle;
    currentPoll.optionBTitle = optionBTitle;
    // reset the form values
    pollForm.reset();
    displayCurrentPoll();
});

optionAAddButton.addEventListener('click', () => {
    currentPoll.scoreA++;
    displayCurrentPoll();
});
optionBAddButton.addEventListener('click', () => {
    currentPoll.scoreB++;
    displayCurrentPoll();
});
optionARemoveButton.addEventListener('click', () => {
    currentPoll.scoreA--;
    displayCurrentPoll();
});
optionBRemoveButton.addEventListener('click', () => {
    currentPoll.scoreB--;
    displayCurrentPoll();
});

closePollButton.addEventListener('click', () => {
    // clear out the form
    pollForm.reset();
    const poll = makePoll();
    // add the current poll to an array of polls in state
    pastPollsArray.push(poll);
    // reset the initial state to start with a new form
    resetState();

    displayCurrentPoll();
    
    displayAllPolls();
});

function displayCurrentPoll() {
  // clear out the current poll div
    currentPollEl.textContent = '';
    // change the label to show the question
    questionEl.textContent = currentPoll.question;
    // change the label to show option A
    optionATitleEl.textContent = currentPoll.optionATitle;
    // change the label to show option B
    optionBTitleEl.textContent = currentPoll.optionBTitle;
    // call the render poll function to create a poll element
    const pollEl = renderPoll(currentPoll);
    pollEl.classList.add('current');
    // append the element to the cleared out current poll div
    currentPollEl.append(pollEl);
}

function displayAllPolls() {
  // clear out past polls list in the DOM
    pastPollsEl.textContent = '';
  // loop through the past polls in state
    for (let poll of pastPollsArray) {
        const pollEl = renderPoll(poll);
        pollEl.classList.add('past');
        pastPollsEl.append(pollEl);
    }
  
  // render and append a past poll for each past poll in state
}

displayCurrentPoll();