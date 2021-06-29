export function addBook(book) {
  return {
    type: 'ADD_BOOK',
    book: {
      id: Math.floor(Math.random() * 20),
      title: book.title,
      category: book.category,
    },
  };
}

export function removeBook(id) {
  return { type: 'REMOVE_BOOK', payload: id };
}

export function changeFilter(category) {
  return { type: 'CHANGE_FILTER', payload: category };
}
