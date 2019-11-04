import $ from 'jquery';
import api from './api';
import 'normalize.css';
import './index.css';
import store from './store';

import shoppingList from './shopping-list';

const main = function() {
  api
    .getItems()
    .then(items => {
      items.forEach(item => store.addItem(item));
      shoppingList.bindEventListeners();
      shoppingList.render();
    })
    .catch(error => {
      store.error = error;
      shoppingList.render();
      console.log(error);
    });
};

$(main);
