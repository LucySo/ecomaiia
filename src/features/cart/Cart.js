import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts, selectOpen, close } from "./cartSlice";
import Drawer from "@material-ui/core/Drawer";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import ListItemText from "@material-ui/core/ListItemText";
import { ProductItem } from "./ProductItem";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  title: {
    padding: 10,
  },
  message: {
    padding: 10,
  },
  drawer: {
    width: "350px",
  },
});

export function Cart(props) {
  const dispatch = useDispatch();
  const open = useSelector(selectOpen);
  const productsInCart = useSelector(selectProducts);
  const classes = useStyles();

  const handleClose = () => dispatch(close());

  return (
    <Drawer anchor="right" open={open} onClick={handleClose}>
      <Grid className={classes.drawer} container spacing={1}>
        <Typography variant="h5" component="h2" className={classes.title}>
          Mon panier
        </Typography>
        <List>
          {productsInCart.length === 0 && (
            <Typography
              className={classes.message}
              variant="body2"
              color="textSecondary"
              component="p"
            >
              Sélectionnez un produit pour l'ajouter au panier
            </Typography>
          )}
          {productsInCart.map((product) => (
            <ProductItem product={product} />
          ))}
        </List>
      </Grid>
    </Drawer>
  );
}
