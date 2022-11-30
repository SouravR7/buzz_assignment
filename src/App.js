import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./App.css";
import Header from "./component/header";
import Highlighted from "./component/highlighted";
import DataTable from "./component/dataTable";
import { cryptoData } from "./data";
import { makeStyles } from "@mui/styles";
import { ACTIONS } from "./store/actions";

import { getDataList } from "./services/http.services";

const useStyles = makeStyles({
  mainContainer: {
    background:
      "linear-gradient(to right, rgb(63, 81, 181), rgb(100, 181, 246)) rgb(255, 255, 255) !important",
    paddingBottom: "10em ",
    "@media (max-width: 991px)": {
      paddingBottom: "5em",
    },
    "@media (max-width: 768px)": {
      paddingBottom: "3em ",
    },
  },
  tableHead: {
    padding: "1.5rem",
    background: "rgb(236, 239, 241)",
    minHeight: "450px",
  },
});
//https://api.coinstats.app/public/v1/coins?skip=0&limit=20&currency=EUR
function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [coinsData, setCoinsData] = useState(null);

  const coinsAllData = useSelector((state) => state.coinsData);

  console.log(coinsAllData);

  useEffect(() => {
    if (!coinsData) {
      getDataList()
        .then((res) => res.json())
        .then((response) => {
          setCoinsData(response.coins);
          dispatch({
            type: ACTIONS.GET_ALL_COIN_DATA,
            payload: response.coins,
          });
        });
    }
  }, []);

  return (
    <div className="App">
      <Header />
      <div className={classes.mainContainer}>
        <Highlighted />
      </div>
      <div className={classes.tableHead}>
        <DataTable
          cryptoData={coinsAllData.coins}
          pageSize={coinsAllData.pageSize}
        />
      </div>
    </div>
  );
}

export default App;
