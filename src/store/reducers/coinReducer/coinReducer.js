import { ACTIONS } from "../../actions";

/**
 * Reducer specific to handeling all user data
 */

const initialState = {
  pageSize: 0,
  coins: [],
};

export function coinsData(state = initialState, action) {
  let newState = { ...state };
  switch (action.type) {
    case ACTIONS.GET_ALL_COIN_DATA:
      return {
        ...newState,
        coins: [...action.payload],
      };

    case ACTIONS.UPDATE_PAGES_COINS_DATA:
      return {
        ...newState,
        pageSize: action.payload.page,
        coins: [...newState.coins, ...action.payload.data],
      };

    default:
      return state;
  }
}
