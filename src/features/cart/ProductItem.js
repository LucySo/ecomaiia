import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import { useDispatch } from 'react-redux';
import {removeFromCart} from "./cartSlice" 

export function ProductItem(props) {
    const { thumbnailUrl, title, id } = props.product
    const dispatch = useDispatch()

    const handleRemoveFromCart = (event) =>{
        event.stopPropagation()
        dispatch(removeFromCart(id))
    }

    return (
        <ListItem button>
              <ListItemAvatar>
              <img class="fit-picture"
                src={thumbnailUrl}
                alt={title}/>
        </ListItemAvatar>
        <ListItemText secondary={title} />
        <IconButton edge="end" onClick={handleRemoveFromCart}>
            <DeleteIcon />
        </IconButton>
      </ListItem>
    );
}

export default ProductItem;