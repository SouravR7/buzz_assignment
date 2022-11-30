import { combineReducers } from "redux";
import { coinsData } from "./coinReducer/coinReducer";
import { favCoinsData } from "./FavCoinReducer/favCoinsReducer";

const RootReducer = combineReducers({
  coinsData: coinsData,
  favCoinsData: favCoinsData,
});

export default RootReducer;
