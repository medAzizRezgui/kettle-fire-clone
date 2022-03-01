import React from "react";
import Layout from "../sections/Layout/Layout";
import Product from "../sections/Product Page/Product";
import ProductProps from "../sections/Product Page/ProductProps";
const PageProduct = () => {
  return (
    <Layout>
      <Product />
      <ProductProps />
    </Layout>
  );
};

export default PageProduct;
