import React, {  useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";
import { useSelector, useDispatch } from 'react-redux';


import { Product } from "./Product";
import { selectProducts, selectCurrentPage, selectPageCount, populateProductsRedux, changePage } from "./productSlice"

const productPerPage = 15;
export const List = () => {
  const dispatch = useDispatch();

  const productsRedux = useSelector(selectProducts);
  const currentPageRedux = useSelector(selectCurrentPage)
  const pageCountRedux = useSelector(selectPageCount)


  const handleChangePage = (event, value) => {
    dispatch(changePage(value))
  };

  useEffect(() => {
    dispatch(populateProductsRedux(currentPageRedux));
  }, [currentPageRedux]);

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {productsRedux.map((product) => (
          <Grid item xs={12} sm={6} lg={4}>
            <Product
              title={product.title}
              image={product.url}
              key={product.id}
            />
          </Grid>
        ))}
      </Grid>
      <Grid>
        <Typography>
          Page: {currentPageRedux} / {pageCountRedux}
        </Typography>
        <Pagination count={pageCountRedux} page={currentPageRedux} onChange={handleChangePage} />
      </Grid>
    </Container>
  );
};
