import './style.css';
import addMyScore from './modules/add-score.js';

const refreshbrowser = document.getElementById('refresh-Browser');
const submitmyButton = document.getElementById('submit');
const block = document.getElementById('my-score');
const yourNames = document.getElementById('names-here');
const yourScoreHere = document.getElementById('score-record');

const myUrl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NdV4nBNcUDAwYdX0EPGSQ0/scores';

const showmyScore = async () => {
  block.innerHTML = '';

  await fetch(myUrl)
    .then((response) => response.json())
    .then((json) => {
      const myScore = json.result;

      myScore.forEach((item) => {
        const taleRole = document.createElement('tr');
        taleRole.innerHTML = `
      <td>${item.user}</td>
      <td>:</td>
      <td>${item.score}</td>`;
        block.appendChild(taleRole);
      });
    });
};

refreshbrowser.addEventListener('click', () => {
  showmyScore();
});

submitmyButton.addEventListener('click', (e) => {
  e.preventDefault();
  addMyScore(myUrl, yourNames.value, yourScoreHere.value);
  showmyScore();
  yourNames.value = '';
  yourScoreHere.value = '';
});

showmyScore();