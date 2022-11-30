import React from "react";
import Grid from "@mui/material/Grid";
import { makeStyles } from "@mui/styles";

const useStyles = makeStyles({
  highlightedContiner: {
    width: "75% !important",
    margin: "auto !important",
    marginTop: "0px !important",
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    "@media (max-width: 991px)": {
      width: "80% !important",
    },
    "@media (max-width: 768px)": {
      width: "90% !important",
    },
  },
  dataContiner: {
    paddingTop: "1rem",
    paddingBottom: "1rem",
    color: "#fff",
  },
});

let marketData = [
  {
    name: "Market Cap",
    value: "1.02T",
  },
  {
    name: "Exchange Vol",
    value: "$34.54B",
  },
  {
    name: "Assests",
    value: "2295",
  },
  {
    name: "Exchanges",
    value: "73",
  },
  {
    name: "Markets",
    value: "12729",
  },
  {
    name: "BTC DOM Index",
    value: "31.1%",
  },
];

export default function Highlighted() {
  const classes = useStyles();
  return (
    <Grid container spacing={2} className={classes.highlightedContiner}>
      {marketData.map((item) => {
        return (
          <Grid
            item
            xs={4}
            md={4}
            lg={2}
            xl={2}
            className={classes.dataContiner}
          >
            <div>{item.name.toUpperCase()}</div>
            <div>{item.value}</div>
          </Grid>
        );
      })}
    </Grid>
  );
}
