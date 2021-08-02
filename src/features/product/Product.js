
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, selectProducts } from "../cart/cartSlice"

const useStyles = makeStyles({
  card: {
    maxWidth: 345,
    margin : 12
  },
  media: {
    height: 345,
    width : 345
  },
  text : {
    height : 25
  }
});

export const Product = (props) => {
  const { product } = props
  const { title, url, id } = product; //identique à const title = props.title
  const classes = useStyles();
  const productsInCart = useSelector(selectProducts)
  const productAlreadyInCart = (productsInCart.map(p=>p.id).includes(id))
  
  const dispatch = useDispatch()

  const handleAddToCart = ()=>{
    //ajouter au panier dans redux
    dispatch(addToCart(product))
  }

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={url}
          title={title}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p" className={classes.text}>
            {title}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button size="small" color="primary" onClick={handleAddToCart} disabled={productAlreadyInCart}>
          {productAlreadyInCart ? "Déjà dans le panier !" : "Ajouter au panier"}
        </Button>
      </CardActions>
    </Card>
  );
}


