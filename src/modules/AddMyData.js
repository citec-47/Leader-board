const vanUserData = document.getElementById('inputData');
const vanScoreData = document.getElementById('inputDatas');
const vanAddNew = document.getElementById('button');

const vanNewAddData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ndonDataScore5431/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: vanUserData.value,
        score: vanScoreData.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json());
  vanUserData.value = '';
  vanScoreData.value = '';
};
vanAddNew.addEventListener('click', vanNewAddData);
