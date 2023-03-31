import React from 'react';
import { Card, CardImg, CardText, CardBody,
  CardTitle } from 'reactstrap';



    function RenderDish({menu}) {
    return (
      <Card>
        <CardImg src={menu.image} alt={menu.name} />
        <CardBody>
          <CardTitle>{menu.name}</CardTitle>
          <CardText>{menu.content}</CardText>
        </CardBody>
      </Card>             
    );       
  }

  function RenderComments({comments}) {
    const cmt = comments.map((w) => {
      return (
        <li key={w.id}>
          <p>{w.rating}</p>
          <p>{w.comment}</p>
          <p>
            -- {w.author}, &nbsp;
          {new Intl.DateTimeFormat('en-US', {
            year: 'numeric',
            month: 'long',
            day: '2-digit'
          }).format(new Date(w.date))}
          </p>
        </li>
      )
    })
    return(
      <div>
        <h5>Comments</h5>
          <ul className="list-unstyled">
            {cmt}
          </ul>
      </div>
    );
  }
  
    const DishdetailComponent = (props) => {

      if (props.menu != null) {
        return ( 
        <div>
          <div>
              <RenderDish menu = {props.menu} />
            </div>
            <div>
              <RenderComments comments = {props.menu.comments} />
            </div>
        </div>
                        
        );
    }
    else {
      return (
        <div></div>
      );
    }
  }

  export default DishdetailComponent;