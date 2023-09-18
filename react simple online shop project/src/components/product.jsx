import React, { useState } from "react";
import { Card, CardImg, CardBody, CardTitle, CardImgOverlay } from "reactstrap";
import { Link } from "react-router-dom";
import { products } from "../store/product";
import axios from "axios";

function Product({ product }) {
  const [likes, setLikes] = useState(product.likes);

  const handleLike = async () => {
    setLikes(likes + 1);
    const updatedProduct = {
      ...product,
      likes: likes + 1,
    };
    await axios.put(`http://localhost:3001/likes/${product.id}`, updatedProduct);
  };

  return (
    <div className="col-md-4 col-lg-3 mb-4">
      <Link to={`/product/${product.id}`}>
        <Card>
          <CardImg className="CardImg" src={product.img} />
          <CardBody>
            <CardTitle>{product.title}</CardTitle>
            <CardTitle> price: {product.price}</CardTitle>
            <CardTitle>condition: {product.condition}</CardTitle>
            <CardImgOverlay onClick={handleLike}>
              <i className="fa-solid fa-heart">{likes} likes</i>
            </CardImgOverlay>
          </CardBody>
        </Card>
      </Link>
    </div>
  );
}

export default function ShoppingList() {
  const productList = products.map((product) => (
    <Product key={product.id} product={product} />
  ));

  return <div className="row">{productList}</div>;
}
