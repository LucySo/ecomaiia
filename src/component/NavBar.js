import React, {useState} from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import NotificationsIcon from "@material-ui/icons/Notifications";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, close, open } from "../features/cart/cartSlice";
import { Cart } from "../features/cart/Cart";

export const NavBar = () => {
  const productsInCart = useSelector(selectProducts);
  const dispatch = useDispatch()

  const handleClick = (event) => {
    dispatch(open());
  };

  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6">Mon site e-commerce</Typography>
        <IconButton color="inherit" onClick={handleClick}>
          <Badge badgeContent={productsInCart.length} color="secondary">
            <NotificationsIcon />
          </Badge>
        </IconButton>
      </Toolbar>
      <Cart/>
    </AppBar>
  );
};
