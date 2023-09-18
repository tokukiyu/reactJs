import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";
class DishdetailComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      
    };
    
  }
  
  RenderDish(dish) {
    
    if (dish != null) {
      return (
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>
              <strong>{dish.name}</strong>
            </CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    } else {
      return <div/>;
    }
  }
  RenderComments(dish) {
    if (dish != null) {
      const comments = dish.comments.map((comment) => {
        return (
          <li>
            <p>{comment.comment}</p>
            <p>
              --{comment.author} ,{" "}
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(comment.date)))}
            </p>
          </li>
        );
      });

      return (
        <div>
          <h4>
            <strong>Comments</strong>
          </h4>
          <ul className="list-unstyled">{comments}</ul>
        </div>
      );
    } else {
      return <div/>;
    }
  }
  render() {
    
    return (
      <div className="row m-1 p-1">
        <div className="col-12 col-md-5  ">
          {this.RenderDish(this.props.selectedDish)}
        </div>
        <div className="col-12 col-md-5 ">
          {this.RenderComments(this.props.selectedDish)}
        </div>
      </div>
    );
  }
}

export default DishdetailComponent;

///This is the better one to understand the concept
