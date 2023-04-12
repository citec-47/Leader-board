const myUserData = document.getElementById('input-Data');
const myScoreData = document.getElementById('input-Datas');
const addNew = document.getElementById('buttn');

const newAddData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/NdonyiDataScore5431/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: myUserData.value,
        score: myScoreData.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json());
  myUserData.value = '';
  myScoreData.value = '';
};

addNew.addEventListener('click', newAddData);
