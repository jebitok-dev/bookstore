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

export function removeBook(book) {
  return {
    type: 'REMOVE_BOOK',
    payload: book,
  };
}

export function changeFilter(category) {
  return { type: 'CHANGE_FILTER', payload: category };
}
