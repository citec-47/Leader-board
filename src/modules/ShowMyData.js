const vanListDataHolder = document.getElementById('DataListholder');
const vanRefreshBrowser = document.getElementById('refreshmyBrowser');

vanRefreshBrowser.addEventListener('click', () => {
  window.location.href = '';
});

const vanGetNeWData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ndonDataScore5431/scores',
  )
    .then((response) => response.json())
    .then((data) => {
      const vanNewData = data.result;
      vanNewData.forEach((x) => {
        const list = document.createElement('li');
        list.className = 'v-record';
        list.innerHTML = `${x.user.charAt(0).toUpperCase() + x.user.slice(1)} : ${x.score}`;
        vanListDataHolder.appendChild(list);
      });
    });
  const myScoreData = document.querySelectorAll('.v-record');
  for (let i = 1; i < myScoreData.length; i += 2) {
    myScoreData[i].style.backgroundColor = '#dddddd';
  }
};

vanGetNeWData();
