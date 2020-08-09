export const initialState = {
  basket: [],
  user: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      // add to basket
      console.log(state.basket);
      return {
        ...state, //this will rerender the state
        basket: [...state.basket, action.item], // this will grab all the basket stuff and add item to it and update the basket
      };
    case "REMOVE_FROM_BASKET":
      //remove from basket
      let newBasket = [...state.basket];
      console.log(newBasket);
      const index = state.basket.findIndex(
        (basketItem) => basketItem.id === action.id
      );
      if (index >= 0) {
        //item exist in basket remove it
        newBasket.splice(index, 1);
      }
      console.log(state.basket);
      return { ...state, basket: newBasket };

    default:
      return state;
  }
};

export default reducer;
