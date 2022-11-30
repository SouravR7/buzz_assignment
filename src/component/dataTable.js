import React, { useState } from "react";
import Box from "@mui/material/Box";
import { useSelector, useDispatch } from "react-redux";
import { DataGrid } from "@mui/x-data-grid";
import { makeStyles } from "@mui/styles";
import { ACTIONS } from "../store/actions";
import { columns } from "../data";

import { updateDataList } from "../services/http.services";

const useStyles = makeStyles({
  tableBoxContainer: {
    margin: "auto",
    marginTop: "-10em",
    background: "#fff",
    borderRadius: "10px",
    marginBottom: "10px",
    "@media (max-width: 991px)": {
      marginTop: "0em",
    },
  },
  buttonWallet: {
    margin: "auto",
    padding: "7px 15px",
    width: "120px",
    backgroundColor: "rgb(24, 198, 131) !important",
    color: "#fff",
    borderRadius: "25px",
    textAlign: "center",
    cursor: "pointer",
  },
});

export default function DataTable(props) {
  const classes = useStyles();
  const dispatch = useDispatch();

  const [selectionModel, setSelectionModel] = useState([]);

  let tableData = props.cryptoData;
  let pageSize = props.pageSize;

  const handleSelectionModel = (newSelectionModel) => {
    if (newSelectionModel.length <= 3) {
      setSelectionModel(newSelectionModel);
      dispatch({
        type: ACTIONS.UPDATE_FAVORITE_COINS,
        payload: [...newSelectionModel],
      });
    } else {
      alert("Cannot select more then 3 row");
    }
  };

  const handleViewmore = () => {
    updateDataList(pageSize + 20)
      .then((res) => res.json())
      .then((response) => {
        dispatch({
          type: ACTIONS.UPDATE_PAGES_COINS_DATA,
          payload: {
            data: response.coins,
            page: pageSize + 20,
          },
        });
      });
  };

  return (
    <>
      <Box
        sx={{
          minHeight: 500,
          width: "80%",
        }}
        className={classes.tableBoxContainer}
      >
        {tableData && tableData.length > 0 && (
          <DataGrid
            autoHeight
            rows={tableData}
            columns={columns}
            hideFooterPagination={true}
            experimentalFeatures={{ newEditingApi: true }}
            checkboxSelection
            onSelectionModelChange={handleSelectionModel}
            selectionModel={selectionModel}
            style={{ borderRadius: "10px" }}
          />
        )}
      </Box>
      <div className={classes.buttonWallet} onClick={handleViewmore}>
        View More
      </div>
    </>
  );
}
