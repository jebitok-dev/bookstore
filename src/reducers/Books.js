const initialState = {
  books: [
    {
      id: Math.floor(Math.random() * 20),
      title: 'Catch Me If You Can',
      category: 'Biography',
    },
    {
      id: Math.floor(Math.random() * 20),
      title: 'The Overlook',
      category: 'Mistery',
    },
    {
      id: Math.floor(Math.random() * 20),
      title: 'All the Devils are Here',
      category: 'History',
    },
    {
      id: Math.floor(Math.random() * 20),
      title: 'Whole New Mind',
      category: 'Learning',
    },
    {
      id: Math.floor(Math.random() * 20),
      title: 'Python for Kids',
      category: 'Kids',
    },
    {
      id: Math.floor(Math.random() * 20),
      title: 'Human Again',
      category: 'Sci-Fi',
    },
    {
      id: Math.floor(Math.random() * 20),
      title: 'The Stand',
      category: 'Horror',
    },
    {
      id: Math.floor(Math.random() * 20),
      title: 'The Eye of God',
      category: 'Action',
    },
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
      if (localStorage.bookstore) {
        return JSON.parse(localStorage.bookstore);
      } localStorage.bookstore = JSON.stringify(state);
      return state;
  }
};

export default Books;
