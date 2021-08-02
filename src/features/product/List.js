import React, { useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Pagination from "@material-ui/lab/Pagination";
import { useSelector, useDispatch } from "react-redux";
import { Product } from "./Product";
import {
  selectProducts,
  selectCurrentPage,
  selectPageCount,
  populateProductsRedux,
  changePage,
} from "./productSlice";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  list: {
    marginTop: "12vh",
  },
  container: {
    flexGrow: 1,
  },
  pagination : {
    justifyContent:"center",
    display:'flex'
  }
});
const productPerPage = 15;
export const List = () => {
  const dispatch = useDispatch();

  const productsRedux = useSelector(selectProducts);
  const currentPageRedux = useSelector(selectCurrentPage);
  const pageCountRedux = useSelector(selectPageCount);
  const classes = useStyles();

  const handleChangePage = (event, value) => {
    dispatch(changePage(value));
  };

  useEffect(() => {
    dispatch(populateProductsRedux(currentPageRedux));
  }, [currentPageRedux]);

  return (
    <Container maxWidth="lg" className={classes.list}>
      <Grid container className={classes.container}>
        {productsRedux.map((product) => (
          <Grid item xs={12} sm={6} lg={4}>
            <Grid container justify="center">
              <Product product={product} key={product.id} />
            </Grid>
          </Grid>
        ))}
      </Grid>
        <div className={classes.pagination}>
          <Pagination
            count={pageCountRedux}
            page={currentPageRedux}
            onChange={handleChangePage}
            outlined
          />
          </div>
    </Container>
  );
};
