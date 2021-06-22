let nextBookId = 2;
export function addBook(book) {
  /* eslint-disable */
  return { type: 'ADD_BOOK', id: nextBookId += 1, book };
}
/* eslint-enable */

export function removeBook(id) {
  return { type: 'REMOVE_BOOK', payload: id };
}
