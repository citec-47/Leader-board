const myListHolder = document.getElementById('list-holder');
const myRefresh = document.getElementById('reff');

myRefresh.addEventListener('click', () => {
  window.location.href = '';
});

const getData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SyedAtrilDataScore5431/scores',
  )
    .then((response) => response.json())
    .then((data) => {
      const myData = data.result;
      myData.forEach((x) => {
        const li = document.createElement('li');
        li.className = 'my-record';
        li.innerHTML = `${x.user} : ${x.score}`;
        myListHolder.appendChild(li);
      });
    });
  const myScoreItems = document.querySelectorAll('.my-record');
  for (let i = 1; i < myScoreItems.length; i += 2) {
    myScoreItems[i].style.backgroundColor = '#dddddd';
  }
};

getData();
