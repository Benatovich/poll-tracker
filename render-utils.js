// Q: can I put all of my functions here?
// A: can anyone stop me...?

// PURE FUNCTIONS
export function renderPoll(poll) {
    const pollDiv = document.createElement('div');
    const questionEl = document.createElement('p');
    const optionADiv = renderOption(poll.nameA, poll.scoreA);
    const optionBDiv = renderOption(poll.nameB, poll.scoreB);

    pollDiv.classList.add('poll');
    questionEl.textContent = poll.question;
    
    pollDiv.append(optionADiv, optionBDiv);
    
    return pollDiv;
}

export function renderOption(name, score) {
    const optionDiv = document.createElement('div');
    const nameDiv = document.createElement('p');
    const scoreDiv = document.createElement('p');

    optionDiv.classList.add('option');
    nameDiv.classList.add('name');
    scoreDiv.classList.add('score');

    nameDiv.textContent = name;
    scoreDiv.textContent = score;

    optionDiv.append(nameDiv, scoreDiv);

    return optionDiv;
}

// IMPURE FUNCTIONS

export function displayCurrentPoll() {
    // clear out the current poll div
    currentPollEl

}

export function displayAllPolls() {

}