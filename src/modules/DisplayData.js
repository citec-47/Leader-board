const myNewListHolder = document.getElementById('data_list');
const myBrowserRefresh = document.getElementById('refreshBrowser');

myBrowserRefresh.addEventListener('click', () => {
  window.location.href = '';
});

const getNewData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ndonyiDataScore5431/scores',
  )
    .then((response) => response.json())
    .then((data) => {
      const myNewData = data.result;
      myNewData.forEach((x) => {
        const list = document.createElement('li');
        list.className = 'my_New_record';
        list.innerHTML = `${x.user.charAt(0).toUpperCase() + x.user.slice(1)} : ${x.score}`;
        myNewListHolder.appendChild(list);
      });
    });
  const myNewScore = document.querySelectorAll('.my_New_record');
  for (let i = 1; i < myNewScore.length; i += 2) {
    myNewScore[i].style.backgroundColor = '#dddddd';
  }
};

getNewData();
