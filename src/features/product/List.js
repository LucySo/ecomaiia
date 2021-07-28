import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import Pagination from "@material-ui/lab/Pagination";

import { Product } from "./Product";

const productPerPage = 15;
export const List = () => {
  const [products, setProducts] = useState([]);
  const [pageCount, setPageCount] = useState(0);
  const [page, setPage] = useState(1);

  const handleChangePage = (event, value) => {
    setPage(value);
  };

  useEffect(() => {
    populateProducts(page);
  }, [page]);

  const countPages = (totalCount) => Math.ceil(totalCount / productPerPage);

  // une fonction qui va aller chercher la data sur l'api
  // fonction qui récupère data = fonction GET
  // elle retourne la liste des produits
  const getProducts = async (page, limit) => {
    //notation async / await pour les promises
    // aller chercher la data sur l'api
    const result = await fetch(
      `http://localhost:6060/products?_page=${page}&_limit=${limit}`
    );

    const totalCount = result.headers.get("X-Total-Count");

    setPageCount(countPages(totalCount));

    const productList = await result.json();
    return productList;
  };

  const populateProducts = async (page) => {
    //appeler getProduct
    const data = await getProducts(page, productPerPage);
    // mettre le résultat dans la variable products
    setProducts(data);
  };

  return (
    <Container maxWidth="lg">
      <Grid container spacing={3}>
        {products.map((product) => (
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
          Page: {page} / {pageCount}
        </Typography>
        <Pagination count={pageCount} page={page} onChange={handleChangePage} />
      </Grid>
    </Container>
  );
};
