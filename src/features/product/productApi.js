export const getProducts = async (page, limit) => {
    //notation async / await pour les promises
    // aller chercher la data sur l'api
    const result = await fetch(
      `http://localhost:6060/products?_page=${page}&_limit=${limit}`
    );
  
    const totalCount = result.headers.get("X-Total-Count");
  
    const products = await result.json();
    return {products, totalCount};
  }; 