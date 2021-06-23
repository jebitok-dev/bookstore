const Filter = (All, action) => {
  switch (action.type) {
    case 'CATEGORY_FILTER':
      return {
        ...All,
        category: [
          ...All.category,
          {},
        ],
      };
    default:
      return All;
  }
};

export default Filter;
