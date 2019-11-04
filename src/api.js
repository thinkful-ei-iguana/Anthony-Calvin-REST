const BASE_URL = 'https://thinkful-list-api.herokuapp.com/calvin-anthony';

function listApiFetch(...args) {
  let error;
  return fetch(...args)
    .then(res => {
      if (!res.ok) {
        // Valid HTTP response but non-2xx status - let's create an error!
        error = { code: res.status };
      }

      // In either case, parse the JSON stream:
      return res.json();
    })
    .then(data => {
      // If error was flagged, reject the Promise with the error object
      if (error) {
        error.message = data.message;
        return Promise.reject(error);
      }

      // Otherwise give back the data as resolved Promise
      return data;
    });
}

const getItems = function() {
  return listApiFetch(`${BASE_URL}/items`);
};

const createItem = function(name) {
  let newItem = {
    name: name
  };
  let body = JSON.stringify(newItem);
  return listApiFetch(`${BASE_URL}/items`, {
    method: 'POST',
    headers: { 'Content-type': 'application/json' },
    body: body
  });
};

const updateItem = function(id, updateData) {
  return listApiFetch(`${BASE_URL}/iitems/${id}`, {
    method: 'PATCH',
    headers: { 'Content-type': 'application/json' },
    body: JSON.stringify(updateData)
  });
};

const deleteItem = function(id) {
  return listApiFetch(`${BASE_URL}/items/${id}`, {
    method: 'DELETE',
    headers: { 'Content-type': 'application/json' }
  });
};

export default {
  getItems,
  createItem,
  updateItem,
  deleteItem
};
