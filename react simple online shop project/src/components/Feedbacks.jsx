import React, { useState, useEffect } from "react";
import { Card, CardImg, CardBody, CardTitle, CardHeader } from "reactstrap";
import axios from "axios";

function Feedbacks() {
  const [feedbackText, setFeedbackText] = useState("");
  const [feedbackAuthor, setFeedbackAuthor] = useState("");
  const [feedbackDate, setFeedbackDate] = useState("");
  const [feedback, setFeedback] = useState([]);

  const addFeedback = async () => {
    const newFeedback = {
      author: feedbackAuthor,
      message: feedbackText,
      date: feedbackDate,
    };
    const response = await axios.post(
      "http://localhost:3001/feedback",
      newFeedback
    );
    const updatedFeedback = [...feedback, response.data];
    setFeedback(updatedFeedback);
    setFeedbackText("");
    setFeedbackAuthor("");
    setFeedbackDate("");
  };

  return (
    <div className="container justify-content-center m-auto ">
      <div className="row m-1">
        <div className="col col-7">
          <Card>
            <h2 className="header m-lg-1">Give us your feedback</h2>
            <CardBody>
              <div className="mt-4">
                <h4>Add feedback</h4>
                <input
                  type="text"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  placeholder="Enter your feedback"
                />
                <button onClick={addFeedback}>Add feedback</button>
              </div>

              <form className="form-group" onSubmit={addFeedback}>
                <input
                  type="text"
                  className="form-control m-lg-1"
                  value={feedbackAuthor}
                  onChange={(e) => setFeedbackAuthor(e.target.value)}
                  placeholder="Enter your name"
                />
                <input
                  type="date"
                  hidden
                  className="form-control m-lg-1"
                  value={feedbackDate}
                  onChange={(e) => setFeedbackDate(e.target.value)}
                />
                <textarea
                  name="feedback"
                  value={feedbackText}
                  onChange={(e) => setFeedbackText(e.target.value)}
                  className="form-control m-lg-1"
                  id=""
                  placeholder="Write your feedback here"
                ></textarea>
                <button className="btn btn-primary m-lg-1" type="submit">
                  Submit
                </button>
              </form>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}

export default Feedbacks;

export const FeedbackList = ({ productId }) => {
  const [feedback, setFeedback] = useState([]);

  useEffect(() => {
    const fetchFeedback = async () => {
      const response = await axios.get("http://localhost:3001/feedback");
      const feedbackData = response.data;
      setFeedback(feedbackData);
    };
    fetchFeedback();
  }, [productId]);

  return (
    <Card>
      <CardHeader>{feedback.length} feedback </CardHeader>
      <CardBody>
        <Card className="p-2">
          {feedback.length > 0 ? (
            feedback.map((feedback) => (
              <div key={feedback.id}>
                <p>
                  {feedback.message} <br />
                  <span className="text-muted">
                    By {feedback.author} on{" "}
                    {new Date(feedback.date).toLocaleString()}
                  </span>
                </p>
                <hr />
              </div>
            ))
          ) : (
            <p>No feedback found for this product</p>
          )}
        </Card>
      </CardBody>
    </Card>
  );
};
