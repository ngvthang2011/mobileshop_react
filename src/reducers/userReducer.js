// reducers/peopleReducer.js
import * as ActionTypes from '../actions/actionTypes';
const initialState = {
  products: []
}

export default function peopleReducer(state = initialState, action) {
  switch (action.type) {
    case ActionTypes.ADD_CART:
      return {
        products: [...state.products, action.product],
      };
    // case REMOVE_PERSON:
    //   return {
    //     people: state.people.filter(p => p.name !== action.person.name),
    //   };
    default:
      return state;
  }
}