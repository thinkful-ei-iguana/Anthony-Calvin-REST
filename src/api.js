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

const updateItem = function(id, updateData) {
  return fetch(`${BASE_URL}/items/${id}`, { method: 'PATCH', headers: { 'Content-type': 'application/json' }, body: JSON.stringify(updateData) });
};

export default {
  getItems,
  createItem,
  updateItem
};
