import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from "@material-ui/core/IconButton";
import { useDispatch } from "react-redux";
import { removeFromCart } from "./cartSlice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  image: {
    paddingRight: 10,
  }
});

export function ProductItem(props) {
  const { thumbnailUrl, title, id } = props.product;
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleRemoveFromCart = (event) => {
    event.stopPropagation();
    dispatch(removeFromCart(id));
  };

  return (
    <ListItem>
      <ListItemAvatar>
        <img src={thumbnailUrl} alt={title} className={classes.image} />
      </ListItemAvatar>
      <ListItemText secondary={title} />
      <IconButton edge="end" onClick={handleRemoveFromCart}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}

export default ProductItem;
