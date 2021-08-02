import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import Badge from "@material-ui/core/Badge";
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, close, open } from "../features/cart/cartSlice";
import { Cart } from "../features/cart/Cart";
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
  cartButton: {
    marginLeft: 'auto',
  }
});


export const NavBar = () => {
  const productsInCart = useSelector(selectProducts);
  const dispatch = useDispatch()
  const classes = useStyles();


  const handleClick = (event) => {
    dispatch(open());
  };

  return (
    <AppBar position="fixed">
      <Toolbar>
        <Typography variant="h6">Mon site e-commerce</Typography>
        <IconButton color="inherit" onClick={handleClick} className={classes.cartButton}>
          <Badge badgeContent={productsInCart.length} color="secondary">
            <ShoppingCartIcon />
          </Badge>
        </IconButton>
      </Toolbar>
      <Cart/>
    </AppBar>
  );
};
