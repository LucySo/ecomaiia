import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, selectOpen, close } from "./cartSlice";
import Drawer from "@material-ui/core/Drawer";
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";

import { ProductItem } from "./ProductItem";

export function Cart(props) {
  const dispatch = useDispatch();
  const open = useSelector(selectOpen);
  const productsInCart = useSelector(selectProducts);

  const handleClose = () => dispatch(close());

  return (
    <Drawer anchor="right" open={open} onClick={handleClose}>
      <List>
        <ListItemText primary="Mon panier" />
        {productsInCart.map((product) => (
          <ProductItem product={product} />
        ))}
      </List>
    </Drawer>
  );
}
