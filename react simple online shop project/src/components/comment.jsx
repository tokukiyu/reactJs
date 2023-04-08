import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, CardTitle, CardHeader } from "reactstrap";
import axios from "axios";
import { comment } from "../store/comment";

const ProductComments = ({ productId }) => {
  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [commentAuthor, setCommentAuthor] = useState("");
  const [commentDate, setCommentDate] = useState("");

  useEffect(() => {
    const fetchComments = async () => {
      const response = await axios.get("http://localhost:3001/comment");
      const commentsData = response.data;
      const filteredComments = commentsData.filter(
        (comment) => comment.CommentedItemId === productId
      );
      setComments(filteredComments);
    };
    fetchComments();
  }, [productId]);

  const addComment = async () => {
    const newComment = {
      CommentedItemId: productId,
      author: commentAuthor,
      Message: commentText,
      date: commentDate,
    };
    const response = await axios.post(
      "http://localhost:3001/comment",
      newComment
    );
    const updatedComments = [...comments, response.data];
    setComments(updatedComments);
    setCommentText("");
    setCommentAuthor("");
    setCommentDate("");
  };

  return (
    <Card>
      <CardHeader>{comments.length} Comments </CardHeader>
      <CardBody>
        <Card className="p-2">
          {comments.length > 0 ? (
            comments.map((comment) => (
              <div key={comment.id}>
                <p>
                  {comment.Message} <br />
                  <span className="text-muted">
                    By {comment.author} on-
                    {(e = comment.date) => {
                      return  Date(e).toLocaleString();
                    }}
                  </span>
                </p>
                <hr />
              </div>
            ))
          ) : (
            <p>No comments found for this product</p>
          )}

          <div className="mt-4">
            <h4>Add Comment</h4>
            <input
              type="text"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
              placeholder="Enter your comment"
            />
            <input
              type="text"
              value={commentAuthor}
              onChange={(e) => setCommentAuthor(e.target.value)}
              placeholder="Enter your name"
            />
            <input
              type="date"
              hidden
              value={commentDate}
              onChange={(e) => setCommentDate(new Date(e.target.value))}
            />
            <button onClick={addComment}>Add Comment</button>
          </div>
        </Card>
      </CardBody>
    </Card>
  );
};

export default ProductComments;
