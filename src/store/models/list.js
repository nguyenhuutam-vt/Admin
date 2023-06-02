const data = [];
export const list = {
    state: {
      listProduct: data,
      count: 0,
    }, // initial state
    reducers: {
      // handle state changes with pure functions
      setListProduct(state, listProduct) {
        return {
            ...state,
            listProduct,
          };
      },
      setCount(state, count) {
        return {
            ...state,
            count,
          };
      },
    },
    effects: (dispatch) => ({
      async fecthList(payload, rootState) {
        const data = await fetch('https://dummyjson.com/products')
        .then(response => response.json());
    
        this.setListProduct(data);
      }
    }),
    selectors: (slice, createSelector) => ({
      selectCount() {
        return slice(state => state.count);
      },
  }),
  };