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
  ],
};

const Books = (state = initialState, action) => {
  let res;

  switch (action.type) {
    case 'ADD_BOOK':
      res = [...state, action.book];
      break;
    case 'REMOVE_BOOK':
      res = state
        .slice(
          0,
          state.findIndex((element) => element.id !== action.book),
        )
        .concat(
          state.slice(
            state.findIndex((element) => element.id === action.book) + 1,
            state.length,
          ),
        );
      break;
    default:
      if (localStorage.bookstore) {
        return JSON.parse(localStorage.bookstore);
      } localStorage.bookstore = JSON.stringify(state.books);
      return state.books;
  } localStorage.bookstore = JSON.stringify(res);
  return res;
};

export default Books;
