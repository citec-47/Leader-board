const myListDataHolder = document.getElementById('Data-list-holder');
const myRefreshBrowser = document.getElementById('refreshBrowser');

myRefreshBrowser.addEventListener('click', () => {
  window.location.href = '';
});

const getNeWData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NdonyiDataScore5431/scores',
  )
    .then((response) => response.json())
    .then((data) => {
      const myNewData = data.result;
      myNewData.forEach((x) => {
        const list = document.createElement('li');
        list.className = 'my-record';
        list.innerHTML = `${x.user.charAt(0).toUpperCase() + x.user.slice(1)} : ${x.score}`;
        myListDataHolder.appendChild(list);
      });
    });
  const myScoreData = document.querySelectorAll('.my-record');
  for (let i = 1; i < myScoreData.length; i += 2) {
    myScoreData[i].style.backgroundColor = '#dddddd';
  }
};

getNeWData();
