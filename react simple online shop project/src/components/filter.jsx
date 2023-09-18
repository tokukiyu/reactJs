import React from "react";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";
import { products } from "../store/product";
import { Link } from "react-router-dom";
function Product({ product }) {
  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <Link to={`/product/${product.id}`}>
        <Card>
          <CardImg className="CardImg" src={product.img} />
          <CardBody>
            <CardTitle>{product.title}</CardTitle>
            <CardTitle> price: {product.price}</CardTitle>
            <CardTitle>condition: {product.condition}</CardTitle>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}
export function Men() {
  const productsForMen = products.filter(
    (product) => product.forWhom === "men" || product.forWhom === "Men"
  );
  const productList = productsForMen.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return <div className="row">{productList}</div>;
}
export function Women() {
  const productsForWomen = products.filter(
    (product) => product.forWhom === "Women" || product.forWhom === "women"
  );
  const productList = productsForWomen.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return <div className="row">{productList}</div>;
}
export function Featured() {
  const productsForFeatured = products.filter(
    (product) => product.featured === true
  );
  const productList = productsForFeatured.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return <div className="row">{productList}</div>;
}
export function Kids() {
  const productsForKids = products.filter(
    (product) => product.forWhom === "Kids" || product.forWhom === "kids"
  );
  const productList = productsForKids.map((product) => (
    <Product key={product.id} product={product} />
  ));
  return <div className="row">{productList}</div>;
}
