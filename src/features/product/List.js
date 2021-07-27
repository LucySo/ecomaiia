import React, { useState, useEffect } from "react";
import { Product } from "./Product";

export const List = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    populateProducts();
  }, []);

  // une fonction qui va aller chercher la data sur l'api
  // fonction qui récupère data = fonction GET
  // elle retourne la liste des produits
  const getProducts = async () => {
    //notation async / await pour les promises
    // aller chercher la data sur l'api
    const result = await fetch("https://jsonplaceholder.typicode.com/photos");
    const data = await result.json();
    return data;
  };

  const populateProducts = async () => {
    //appeler getProduct
    const data = await getProducts();
    // mettre le résultat dans la variable products
    setProducts(data);
  };

  return (
    <div>
      {products.map((product) => (
        <Product
          title={product.title}
          image={product.thumbnailUrl}
          key={product.id}
        />
      ))}
    </div>
  );
};
