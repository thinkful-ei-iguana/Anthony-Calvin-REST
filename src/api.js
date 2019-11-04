const BASE_URL = 'https://thinkful-list-api.herokuapp.com/calvin-anthony';

const getItems = function() {
  return fetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
  let newItem = {
    name: name
  };
  let body = JSON.stringify(newItem);
  return fetch(`${BASE_URL}/items`, { method: 'POST', headers: { 'Content-type': 'application/json' }, body: body });
};

export default {
  getItems,
  createItem
};
