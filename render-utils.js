// let optionATitle = '';
// let optionBTitle = '';
// let optionAVotes = 0;
// let optionBVotes = 0;


// PURE FUNCTIONS
export function renderOption(title, votes) {
    const container = document.createElement('div');
    const titleEl = document.createElement('p');
    const votesEl = document.createElement('p');

    container.classList.add('option');
    titleEl.classList.add('title');
    votesEl.classList.add('votes');

    titleEl.textContent = title;
    votesEl.textContent = votes;

    container.append(titleEl, votesEl);

    return container;
}

export function renderPoll(poll) {
    const container = document.createElement('div');
    const questionEl = document.createElement('p');
    const optionADiv = renderOption(poll.titleA, poll.votesA);
    const optionBDiv = renderOption(poll.titleB, poll.votesB);    
    
    questionEl.textContent = poll.question;
    
    container.append(questionEl, optionADiv, optionBDiv);
    
    return container;
}

export function renderPastPoll(pastPoll) {
    const container = document.createElement('div');
    const pQuestionEl = document.createElement('p');
    const pTitleA = document.createElement('p');
    const pTitleB = document.createElement('p');
    const pVotesA = document.createElement('p');
    const pVotesB = document.createElement('p');

    container.classList.add('past-poll');
    pQuestionEl.textContent = pastPoll.question;
    pTitleA.textContent = pastPoll.optionATitle;
    pTitleB.textContent = pastPoll.optionBTitle;
    pVotesA.textContent = pastPoll.optionAVotes;
    pVotesB.textContent = pastPoll.optionBVotes;

    container.append(pQuestionEl, pTitleA, pTitleB, pVotesA, pVotesB);

    return container;
}
