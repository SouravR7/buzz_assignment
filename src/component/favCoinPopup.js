import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { DataGrid } from "@mui/x-data-grid";
import CloseIcon from "@mui/icons-material/Close";
import { makeStyles } from "@mui/styles";
import { columns } from "../data";

const useStyles = makeStyles({
  dialog: {
    border: `1px solid  black !important`,
    borderRadius: "8px !important",
    marginBottom: "100px !important",
    marginTop: "20px !important",
  },

  dialogTitle: {
    borderBottom: `1px solid  black !important`,
    fontSize: "1rem !important",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  dialogContent: {
    padding: "0px 25px !important",
    paddingTop: "20px !important",
    minHeight: "500px",
    overflowX: "hidden",
  },
  dialogActions: {
    padding: "20px !important",
  },
  dialogGridItem: {
    width: "80%",
    margin: "auto",
    "@media (max-width: 991px)": {
      width: "100%",
    },
  },
  dialogTextField: {
    width: "100%",
  },
});

export default function FavCoinPopup(props) {
  const classes = useStyles();
  const coinsAllData = useSelector((state) => state.coinsData);
  let favData = useSelector((state) => state.favCoinsData.favCoins);

  let selectedFavData =
    coinsAllData.coins.length > 0 && favData.length > 0
      ? coinsAllData.coins.filter((item) => favData.indexOf(item.id) > -1)
      : [];

  //console.log(selectedFavData);

  return (
    <Dialog
      maxWidth="lg"
      fullWidth={true}
      open={props.open}
      classes={{
        paper: classes.dialog,
      }}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle className={classes.dialogTitle}>
        Favorite Coins
        <CloseIcon onClick={props.onClose} style={{ cursor: "pointer" }} />
      </DialogTitle>
      <DialogContent className={classes.dialogContent}>
        <DialogContentText
          id="alert-dialog-description"
          style={{
            textAlign: "center",
            padding: "10px 0px",
            textWeight: "700",
            color: "black",
          }}
        >
          Selected Favorite Coins
        </DialogContentText>
        <Box
          sx={{
            minHeight: 500,
            width: "100%",
          }}
          className={classes.tableBoxContainer}
        >
          {selectedFavData && selectedFavData.length > 0 ? (
            <DataGrid
              autoHeight
              rows={selectedFavData}
              columns={columns}
              hideFooterPagination={true}
              experimentalFeatures={{ newEditingApi: true }}
              style={{ borderRadius: "10px" }}
            />
          ) : (
            <div>No Data found</div>
          )}
        </Box>
      </DialogContent>
      <DialogActions className={classes.dialogActions}></DialogActions>
    </Dialog>
  );
}
