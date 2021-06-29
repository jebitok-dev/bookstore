export function addBook(book) {
  /* eslint-disable */
  return { type: 'ADD_BOOK', id: Math.floor(Math.random() * 20), book };
}
/* eslint-enable */

export function removeBook(id) {
  return { type: 'REMOVE_BOOK', payload: id };
}

export function changeFilter(category) {
  return { type: 'CHANGE_FILTER', payload: category };
}
