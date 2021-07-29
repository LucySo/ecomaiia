import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useSelector } from 'react-redux';
import {selectProducts} from "../features/cart/cartSlice" 

export const NavBar = () => {
  const productsInCart = useSelector(selectProducts);

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Mon site e-commerce</Typography>
      </Toolbar>

      <IconButton aria-label="show 17 new notifications" color="inherit">
        <Badge badgeContent={productsInCart.length} color="secondary">
          <NotificationsIcon />
        </Badge>
      </IconButton>
    </AppBar>
  );
};
