const myUser = document.getElementById('input');
const myScore = document.getElementById('input1');
const myAdd = document.getElementById('bttn');

const myAddData = async () => {
  await fetch(
    'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/SyedAtrilDataScore5431/scores',
    {
      method: 'POST',
      body: JSON.stringify({
        user: myUser.value,
        score: myScore.value,
      }),
      headers: {
        'Content-type': 'application/json; charset=UTF-8',
      },
    },
  )
    .then((response) => response.json());
};

myAdd.addEventListener('click', myAddData);
