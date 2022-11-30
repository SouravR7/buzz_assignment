import { ACTIONS } from "../../actions";

/**
 * Reducer specific to handeling all user data
 */

const initialState = {
  favCoins: [],
};

export function favCoinsData(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case ACTIONS.UPDATE_FAVORITE_COINS:
      return {
        ...newState,
        favCoins: [...action.payload],
      };

    default:
      return state;
  }
}
