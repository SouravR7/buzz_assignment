import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuIcon from "@mui/icons-material/Menu";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

import Divider from "@mui/material/Divider";

import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

import FavCoinPopup from "./favCoinPopup";

const useStyles = makeStyles({
  appBar: {
    backgroundColor: "#fff !important",
    position: "sticky !important",
    top: 0,
    zIndex: 999,
    fontSize: "12px !important",
    color: "#000 !important",
    padding: "0px 60px",
    "@media (max-width: 991px)": {
      padding: "0px 20px",
    },
  },
  loginLogo: {
    height: "40px",
    marginLeft: "55px",
    "@media (max-width: 768px)": {
      height: "35px",
      marginLeft: "0px",
    },
  },
  buttonWallet: {
    padding: "7px 15px",
    backgroundColor: "rgb(24, 198, 131) !important",
    color: "#fff",
    borderRadius: "25px",
    textAlign: "center",
    cursor: "pointer",
  },
});

const drawerWidth = 240;
const leftNavItems = [
  {
    name: "Coin",
    type: "button-n",
  },
  {
    name: "Exchange",
    type: "button-n",
  },
  {
    name: "Swap",
    type: "button-n",
  },
];
const rightNavItems = [
  {
    name: "Currency",
    type: "drop-down",
    valueS: "USD",
    drops: [
      {
        name: "USD",
        value: "USD",
      },
      {
        name: "RUPEE",
        value: "RUPEE",
      },
      {
        name: "UAH",
        value: "UAH",
      },
    ],
  },
  {
    name: "Language",
    type: "drop-down",
    valueS: "English",
    drops: [
      {
        name: "English",
        value: "English",
      },
      {
        name: "Hindi",
        value: "Hindi",
      },
      {
        name: "Tamil",
        value: "Tamil",
      },
    ],
  },
  {
    name: "Favorite Coins",
    type: "button-g",
  },
];
const allNavItems = [
  {
    name: "Coin",
    type: "button-n",
  },
  {
    name: "Exchange",
    type: "button-n",
  },
  {
    name: "Swap",
    type: "button-n",
  },
  {
    name: "Currency",
    type: "drop-down",
    valueS: "USD",
    drops: [
      {
        name: "USD",
        value: "USD",
      },
      {
        name: "RUPEE",
        value: "RUPEE",
      },
      {
        name: "UAH",
        value: "UAH",
      },
    ],
  },
  {
    name: "Language",
    type: "drop-down",
    valueS: "English",
    drops: [
      {
        name: "English",
        value: "English",
      },
      {
        name: "Hindi",
        value: "Hindi",
      },
      {
        name: "Tamil",
        value: "Tamil",
      },
    ],
  },
  {
    name: "Favorite Coins",
    type: "button-g",
  },
];

export default function Header(props) {
  const classes = useStyles();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [favCoinPopup, setFavCoinPopup] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const onClose = () => {
    setFavCoinPopup(false);
  };

  let headerImg = "https://coincap.io/static/logos/black.svg";

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <img
        src={headerImg}
        alt="icon"
        className={classes.loginLogo}
        style={{ padding: "10px" }}
      />
      <Divider />
      <List>
        {allNavItems.map((item) => (
          <ListItem key={item.name} disablePadding>
            {item.type === "button-n" ? (
              <ListItemButton sx={{ textAlign: "center" }}>
                <ListItemText primary={item.name} />
              </ListItemButton>
            ) : item.type === "button-g" ? (
              <span
                className={classes.buttonWallet}
                style={{ margin: "auto", marginTop: "20px", cursor: "pointer" }}
                onClick={() => setFavCoinPopup(true)}
              >
                {item.name}
              </span>
            ) : item.type === "drop-down" ? (
              <FormControl
                sx={{ m: 1, minWidth: 80, margin: "auto" }}
                size="small"
              >
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  value={item.valueS}

                  //onChange={handleChange}
                >
                  {item.drops.map((items) => (
                    <MenuItem value={items.value}>{items.value}</MenuItem>
                  ))}
                </Select>
              </FormControl>
            ) : null}
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar>
          <Box sx={{ display: { xs: "none", sm: "block" } }}>
            {leftNavItems.map(
              (item) =>
                item.type === "button-n" && (
                  <Button key={item.name} sx={{ color: "#000" }}>
                    {item.name}
                  </Button>
                )
            )}
          </Box>
          <Box sx={{ display: { sm: "block" } }}>
            <img src={headerImg} alt="icon" className={classes.loginLogo} />
          </Box>

          <Box sx={{ flexGrow: 1 }} />
          <Box
            sx={{ display: { xs: "none", sm: "flex" }, alignItems: "center" }}
          >
            {rightNavItems.map((item) =>
              item.type === "drop-down" ? (
                <FormControl sx={{ m: 1, minWidth: 50 }} size="small">
                  <Select
                    labelId="demo-select-small"
                    id="demo-select-small"
                    value={item.valueS}

                    //onChange={handleChange}
                  >
                    {item.drops.map((items) => (
                      <MenuItem value={items.value}>{items.value}</MenuItem>
                    ))}
                  </Select>
                </FormControl>
              ) : (
                <span
                  className={classes.buttonWallet}
                  onClick={() => setFavCoinPopup(true)}
                >
                  {item.name}
                </span>
              )
            )}
          </Box>
          <Box sx={{ mr: 2, display: { sm: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              //aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleDrawerToggle}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
      {favCoinPopup && <FavCoinPopup open={favCoinPopup} onClose={onClose} />}
    </Box>
  );
}
