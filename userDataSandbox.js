const axios = require('axios').default;

async function getUserData() {
  const url = 'https://randomuser.me/api/';

  try {
    const response = await axios.get(url);
    const data = await response.json();
  } catch (error) {
    console.log(error);
  }
  console.log(data);
}

getUserData();
