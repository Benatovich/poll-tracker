// import functions and grab DOM elements
import { renderPoll } from './render-utils.js';

const pollForm = document.getElementById('poll-form');

const optionAAddButton = document.getElementById('option-a-add-button');
const optionBAddButton = document.getElementById('option-b-add-button');
const optionAUndoButton = document.getElementById('option-a-undo-button');
const optionBUndoButton = document.getElementById('option-b-undo-button');

const closePollButton = document.getElementById('close-poll-button');
const questionEl = document.getElementById('poll-question');

const titleAEl = document.getElementById('option-a-title');
const titleBEl = document.getElementById('option-b-title');
const votesAEl = document.getElementById('option-a-votes');
const votesBEl = document.getElementById('option-b-votes');

const pollsEl = document.getElementById('polls-container');

// let state
let question = '';
let titleA = '';
let titleB = '';
let votesA = 0;
let votesB = 0;

const pollsArray = [];

// event listeners
optionAAddButton.addEventListener('click', () => {
    votesA++;

    votesAEl.textContent = votesA;
});
optionBAddButton.addEventListener('click', () => {
    votesB++;

    votesBEl.textContent = votesB;
});
optionAUndoButton.addEventListener('click', () => {
    votesA--;

    votesAEl.textContent = votesA;
});
optionBUndoButton.addEventListener('click', () => {
    votesB--;

    votesBEl.textContent = votesB;
});

pollForm.addEventListener('submit', (e) => {
    //prevent default form behavior 
    e.preventDefault();
    // get the name data from the form
    const data = new FormData(pollForm);
    // set state to this data from the form
    question = data.get('booger-question');
    titleA = data.get('booger-option-a');
    titleB = data.get('booger-option-b');

    displayCurrentPoll();
});

closePollButton.addEventListener('click', () => {
    // clear out the form
    pollForm.reset();
    const poll = makePoll();
    // add the current poll to an array of polls in state
    pollsArray.push(poll);
    // reset the initial state to start with a new form
    resetState();

    displayCurrentPoll();
    
    displayAllPolls();
});

function makePoll() {
    return {
        question: question,
        titleA: titleA,
        titleB: titleB,
        votesA: votesA,
        votesB: votesB,
    };
}

function resetState() {
    question = '';
    titleA = '';
    titleB = '';
    votesA = 0;
    votesB = 0;
}

function displayCurrentPoll() {
    // change the label to show the question
    questionEl.textContent = question;
    // change the label to show option A
    titleAEl.textContent = titleA;
    // change the label to show option B
    titleBEl.textContent = titleB;

    votesAEl.textContent = votesA;
    votesBEl.textContent = votesB;
}

// // call the render poll function to create a poll element
// const pollEl = renderPoll(currentPoll);
// pollEl.classList.add('current');
// // append the element to the cleared out current poll div
// currentPollEl.append(pollEl);

function displayAllPolls() {
    pollsEl.textContent = '';

    for (let poll of pollsArray) {
        const pollEl = renderPoll(poll);
        
        pollEl.classList.add('past');

        pollsEl.append(pollEl);
    }
}

// OLD VERSION:
// function displayAllPolls() {
//     pastPollsEl.textContent = '';
    
//     for (let pastPoll of pollsArray) {
//         const container = renderPastPoll(pastPoll);
        
//         pastPollsEl.append(container);
//     }
// }

displayCurrentPoll();