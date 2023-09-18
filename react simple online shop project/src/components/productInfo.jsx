import {
  Card,
  CardImgOverlay,
  CardImg,
  CardBody,
  CardTitle,
  CardHeader,
} from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { products } from "../store/product";
import { useState } from "react";
import { comment } from "../store/comment";
import axios from "axios";
import ProductComments from "./comment";
const thunk = require("redux-thunk");
const redux = require("redux");

function ProductInfo() {
  const { id } = useParams();
  const product = products.find((product) => product.id === Number(id));
  const [likes, setLikes] = useState(product.likes);

  const handleLike = async () => {
    setLikes(likes + 1);
    const updatedProduct = {
      ...product,
      likes: likes + 1,
    };
    await axios.put(
      `http://localhost:3001/likes/${product.id}`,
      updatedProduct
    );
  };
  if (!product) {
    // Check if the product is undefined
    return <h1>Product not found</h1>;
  } else {
    return (
      <div className="row justify-content-center">
        <div className="col-md-8 col-lg-6 mb-4">
          <Card>
            <CardImg className="CardImg" src={product.img} />
            <CardImgOverlay onClick={handleLike}>
              <i class="fa-solid fa-heart">likes</i>
            </CardImgOverlay>
            <CardBody>
              <CardTitle>{product.title}</CardTitle>
            </CardBody>
          </Card>
        </div>

        <div className="col-md-4 col-lg-3 mb-4">
          <Card className="p-3">
            <CardTitle> price: {product.price}</CardTitle>
            <CardTitle>condition: {product.condition}</CardTitle>
          </Card>

          <ProductComments productId={product.id} />
        </div>
        <div className="col-md-4 col-lg-3 mb-4"></div>
      </div>
    );
  }
}

const ProductComment = ({ productId }) => {
  const [comments, setComments] = useState([]);

  const filteredComments = comment.filter(
    (comment) => comment.CommentedItemId === productId
  );

  const commentCount = filteredComments.length;
  const handleClick = () => {
    setComments(filteredComments);
  };
  const mapToDispatchState = (dispatch) => {};
  return (
    <Card>
      <CardHeader>{commentCount} Comments </CardHeader>
      <CardBody>
        <button onClick={handleClick}>Load Comments</button>
        <Card className="p-2">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <p>
                  {comment.Message} <br />
                  <span className="text-muted">By {comment.author}</span>
                </p>
                <hr />
              </div>
            ))
          ) : (
            <p>No comments found for this product</p>
          )}
        </Card>
      </CardBody>
    </Card>
  );
};

const createStore = redux.createStore;
const applyMiddleware = redux.applyMiddleware;

// Action Types
const FETCH_COMMENT_REQUEST = "FETCH_COMMENT_REQUEST";
const FETCH_COMMENT_SUCCESS = "FETCH_COMMENT_SUCCESS";
const FETCH_COMMENT_FAILURE = "FETCH_COMMENT_FAILURE";

// Action Creators
const fetchCOMMENTRequest = () => {
  return {
    type: FETCH_COMMENT_REQUEST,
  };
};

const fetchCOMMENTSuccess = (COMMENTs) => {
  return {
    type: FETCH_COMMENT_SUCCESS,
    payload: COMMENTs,
  };
};

const fetchCOMMENTFailure = (error) => {
  return {
    type: FETCH_COMMENT_FAILURE,
    payload: error,
  };
};

// Async Action Creator
const fetchCOMMENTs = () => {
  return function (dispatch) {
    dispatch(fetchCOMMENTRequest());
    axios
      .get("http://localhost:3001/comment")
      .then((response) => {
        const COMMENTs = response.data.map((COMMENT) => COMMENT.id);
        dispatch(fetchCOMMENTSuccess(COMMENTs));
      })
      .catch((error) => {
        const errorMessage = error.message;
        dispatch(fetchCOMMENTFailure(errorMessage));
      });
  };
};

// Initial State
const initialState = {
  loading: false,
  COMMENTs: [],
  error: "",
};

// Reducer
const COMMENTReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COMMENT_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_COMMENT_SUCCESS:
      return {
        ...state,
        loading: false,
        COMMENTs: action.payload,
        error: "",
      };
    case FETCH_COMMENT_FAILURE:
      return {
        ...state,
        loading: false,
        COMMENTs: [],
        error: action.payload,
      };
    default:
      return state;
  }
};

// Store
const store = createStore(COMMENTReducer, applyMiddleware(thunk.default));
store.dispatch(fetchCOMMENTs());

const mapStateToProps = (state) => {
  return {
    COMMENTData: state.comment,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCOMMENTs: () => dispatch(fetchCOMMENTs()),
  };
};

export default ProductInfo;
