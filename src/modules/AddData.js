const showMyUser = document.getElementById('input_data');
const showMyScore = document.getElementById('input_datas');
const addNew = document.getElementById('buttn');

const newAddData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/ndonyiDataScore5431/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: showMyUser.value,
        score: showMyScore.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json());
  showMyUser.value = '';
  showMyScore.value = '';
};

addNew.addEventListener('click', newAddData);
