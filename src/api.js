const BASE_URL = 'https://thinkful-list-api.herokuapp.com/calvin-anthony';

const getItems = function() {
  fetch(`${BASE_URL}/items`);
};

export default {
  getItems
};
