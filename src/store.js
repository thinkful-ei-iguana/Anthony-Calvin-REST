const items = [];
let hideCheckeditems = false;

const findById = function(id) {
  return this.items.find(currentItem => currentItem.id === id);
};

const addItem = function(item) {
  this.items.push(item);
};

const findAndUpdate = function(id, newData) {
  let foundItem = this.items.find(item => item.id === id);
  return Object.assign(foundItem, newData);
};

const findAndDelete = function(id) {
  this.items = this.items.filter(currentItem => currentItem.id !== id);
};

const toggleCheckedFilter = function() {
  this.hideCheckedItems = !this.hideCheckedItems;
};

const error = '';

export default {
  items,
  hideCheckeditems,
  findById,
  findAndUpdate,
  addItem,
  findAndDelete,
  toggleCheckedFilter,
  error
};
