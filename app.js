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
const questionLabel = document.getElementById('poll-question');
const optionALabel = document.getElementById('option-a');
const optionBLabel = document.getElementById('option-b');

// let state
const pastPollsArray = [];
let currentPoll = {
    question: '',
    nameA: '',
    nameB: '',
    scoreA: 0,
    scoreB: 0,
};

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
    const question = data.get('question');
    const nameA = data.get('option-a');
    const nameB = data.get('option-b');

    currentPoll.question = question;
    currentPoll.nameA = nameA;
    currentPoll.nameB = nameB;
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
    // add the current poll to an array of polls in state
    pastPollsArray.push(currentPoll);
    displayAllPolls();
    // reset the initial state to start with a new form
    currentPoll = {
        question: '',
        nameA: '',
        nameB: '',
        scoreA: 0,
        scoreB: 0,
    };
    displayCurrentPoll();
});

function displayCurrentPoll() {
  // clear out the current poll div
    currentPollEl.textContent = '';
    // change the label to show the question
    questionLabel.textContent = currentPoll.question;
    // change the label to show option A
    optionALabel.textContent = currentPoll.nameA;
    // change the label to show option B
    optionBLabel.textContent = currentPoll.nameB;
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