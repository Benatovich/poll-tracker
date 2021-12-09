// import functions and grab DOM elements
import { renderOption, renderPoll, renderPastPoll } from './render-utils.js';

const pollForm = document.getElementById('poll-form');

const optionAAddButton = document.getElementById('option-a-add-button');
const optionBAddButton = document.getElementById('option-b-add-button');
const optionAUndoButton = document.getElementById('option-a-undo-button');
const optionBUndoButton = document.getElementById('option-b-undo-button');

const closePollButton = document.getElementById('close-poll-button');
const questionEl = document.getElementById('poll-question');

const optionATitleEl = document.getElementById('option-a-title');
const optionBTitleEl = document.getElementById('option-b-title');
const optionAVotesEl = document.getElementById('option-a-votes');
const optionBVotesEl = document.getElementById('option-b-votes');

const pastPollsEl = document.getElementById('past-polls-container');

// let state
let question = '';
let optionATitle = '';
let optionBTitle = '';
let optionAVotes = 0;
let optionBVotes = 0;

const pastPollsArray = [];

// event listeners
optionAAddButton.addEventListener('click', () => {
    optionAVotes++;

    optionAVotesEl.textContent = optionAVotes;
});
optionBAddButton.addEventListener('click', () => {
    optionBVotes++;

    optionBVotesEl.textContent = optionBVotes;
});
optionAUndoButton.addEventListener('click', () => {
    optionAVotes--;

    optionAVotesEl.textContent = optionAVotes;
});
optionBUndoButton.addEventListener('click', () => {
    optionBVotes--;

    optionBVotesEl.textContent = optionBVotes;
});

pollForm.addEventListener('submit', (e) => {
    //prevent default form behavior 
    e.preventDefault();
    // get the name data from the form
    const data = new FormData(pollForm);
    // set state to this data from the form
    question = data.get('booger-question');
    optionATitle = data.get('booger-option-a');
    optionBTitle = data.get('booger-option-b');

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

function makePoll() {
    return {
        question: question,
        optionATitle: optionATitle,
        optionBTitle: optionBTitle,
        optionAVotes: optionAVotes,
        optionBVotes: optionBVotes,
    };
}

function resetState() {
    question = '';
    optionATitle = '';
    optionBTitle = '';
    optionAVotes = 0;
    optionBVotes = 0;
}

function displayCurrentPoll() {
    // change the label to show the question
    questionEl.textContent = question;
    // change the label to show option A
    optionATitleEl.textContent = optionATitle;
    // change the label to show option B
    optionBTitleEl.textContent = optionBTitle;

    optionAVotesEl.textContent = optionAVotes;
    optionBVotesEl.textContent = optionBVotes;
}

// // call the render poll function to create a poll element
// const pollEl = renderPoll(currentPoll);
// pollEl.classList.add('current');
// // append the element to the cleared out current poll div
// currentPollEl.append(pollEl);

function displayAllPolls() {
    pastPollsEl.textContent = '';
    
    for (let pastPoll of pastPollsArray) {
        const container = renderPastPoll(pastPoll);
        
        pastPollsEl.append(container);
    }
}

// OLD VERSION:
// function displayAllPolls() {
//   // clear out past polls list in the DOM
//     pastPollsEl.textContent = '';
//   // loop through the past polls in state
//     for (let poll of pastPollsArray) {
//         const pollEl = renderPoll(poll);
//         pollEl.classList.add('past');
//         pastPollsEl.append(pollEl);
//     }
  
  // render and append a past poll for each past poll in state

displayCurrentPoll();