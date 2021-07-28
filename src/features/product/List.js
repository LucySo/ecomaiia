import React, { useState, useEffect } from "react";
import Grid from "@material-ui/core/Grid";
import Container from "@material-ui/core/Container";

import { Product } from "./Product";

export const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    populateProducts();
  }, []);

  // une fonction qui va aller chercher la data sur l'api
  // fonction qui récupère data = fonction GET
  // elle retourne la liste des produits
  const getProducts = async (page, limit) => {
    //notation async / await pour les promises
    // aller chercher la data sur l'api
    const result = await fetch(
      `http://localhost:6060/products?_page=${page}&_limit=${limit}`
    );
    const data = await result.json();
    return data;
  };

  const populateProducts = async () => {
    //appeler getProduct
    const data = await getProducts(1, 15);
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
    </Container>
  );
};
