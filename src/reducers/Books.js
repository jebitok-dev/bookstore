const initialState = {
  books: [
    { id: 1, title: 'Catch Me If You Can', category: 'Biography' },
    { id: 2, title: 'The Overlook', category: 'Mistery' },
    { id: 3, title: 'All the Devils are Here', category: 'History' },
    { id: 4, title: 'Whole New Mind', category: 'Learning' },
    { id: 5, title: 'Python for Kids', category: 'Kids' },
    { id: 6, title: 'Human Again', category: 'Sci-Fi' },
    { id: 7, title: 'The Stand', category: 'Horror' },
    { id: 8, title: 'The Eye of God', category: 'Action' },
  ],
};

const Books = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_BOOK':
      return {
        ...state,
        books: [
          ...state.books,
          {
            id: action.id, title: action.book.title, category: action.book.category,
          },
        ],
      };
    case 'REMOVE_BOOK':
      return {
        ...state,
        books: state.books.filter((book) => action.payload !== book.id),
      };
    default:
      return state;
  }
};

export default Books;
