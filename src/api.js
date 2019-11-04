const BASE_URL = 'https://thinkful-list-api.herokuapp.com/calvin-anthony';

const getItems = function() {
  try {
    return fetch(`${BASE_URL}/items`);
  }
  catch (error) {
    console.error('(FROM API) Error cause is:', error);
  }
};

const createItem = function(name) {
  let newItem = {
    name: name
  };
  let body = JSON.stringify(newItem);
  try {
    return fetch(`${BASE_URL}/items`, { method: 'POST', headers: { 'Content-type': 'application/json' }, body: body });
  }
  catch (error) {
    console.error('(FROM API) Error cause is:', error);
  }
};

const updateItem = function(id, updateData) {
  try {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'PATCH',
      headers: { 'Content-type': 'application/json' },
      body: JSON.stringify(updateData)
    })} 
  catch (error) {
    console.error('(FROM API) Error cause is:', error);
  }
    
};

const deleteItem = function(id) {
  try {
    return fetch(`${BASE_URL}/items/${id}`, {
      method: 'DELETE',
      headers: { 'Content-type': 'application/json' }
    });
  }
  catch (error) {
    console.error('(FROM API) Error cause is:', error);
  }
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};
