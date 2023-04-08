import { CardHeader, Container } from "reactstrap";
import { Card, CardImg, CardBody, CardTitle } from "reactstrap";

import React, { useState } from "react";
import axios from "axios";
import { FeedbackList } from "../components/Feedbacks";

function AdminHomePage() {
  return (
    <>
      <Container>
        <div className="row m-1">
          <div className="col">
            <Card>
              <CardHeader>Add new product</CardHeader>
              <CardBody>
                <UploadNewProduct />{" "}
              </CardBody>
            </Card>
            <div className="col">
              <Card>
                <CardHeader>mostly viewed product</CardHeader>
              </Card>
            </div>
            <div className="col">
              <Card>
                <CardHeader>update product </CardHeader>
              </Card>
            </div>
            <div className="col">
              <Card>
                <CardHeader>delete product </CardHeader>
              </Card>
            </div>
          </div>

          <div className="col">
            <Card>
              <CardHeader>new feedback list</CardHeader>
              <FeedbackList />
              <CardBody></CardBody>
            </Card>
          </div>
        </div>
        <div className="row"></div>
      </Container>
    </>
  );
}

export default AdminHomePage;

function UploadNewProduct() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileInputChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("file", selectedFile);
    try {
      await axios.post("http://localhost:3001/assets", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("File uploaded successfully!");
    } catch (error) {
      console.error("Error occurred while uploading the file!", error);
    }
  };

  return (
    <>
      <form class="form-group justify-content-center" onSubmit={handleSubmit}>
        <input type="file" name="file" onChange={handleFileInputChange} />{" "}
        <br />
        <input
          className="m-lg-1 "
          type="text"
          placeholder="Product title"
        />{" "}
        <br />
        <label htmlFor="desc">description: </label>
        <textarea
          name=""
          id="desc"
          rows="3"
          className="form-control m-lg-2 "
        ></textarea>
        <select className="form-control m-1" name="condition" id="contition">
          <option value="">new or used? </option>
          <option value="new">new</option>
          <option value="used">Used</option>
        </select>
        <select class="form-control m-1" name="forwhom" id="forwhom">
          <option value="">For whom </option>
          <option value="men">Men</option>
          <option value="men">Kids</option>
          <option value="men">Women</option>
        </select>{" "}
        <br />
        <button type="submit">Upload</button>
      </form>
    </>
  );
}
