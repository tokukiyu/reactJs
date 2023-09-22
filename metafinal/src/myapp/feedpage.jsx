import React, { useState } from "react";
import { Container, Card, CardHeader, CardBody, CardImg } from 'reactstrap';

// Placeholder data for posts
const initialPosts = [
  {
    id: 1,
    username: "user1",
    caption: "This is a sample caption.",
    imageUrl: "https://via.placeholder.com/300x300",
  },
  {
    id: 2,
    username: "user2",
    caption: "Another example caption.",
    imageUrl: "https://via.placeholder.com/300x300",
  },
  // Add more posts here
];

function Feed() {
  const [posts, setPosts] = useState(initialPosts);

  return (
    <div className="feed" >
      {posts.map((post) => (
        <div key={post.id} className="post card">
          <div className="post-header">
            <span className="username">{post.username}</span>
          </div>
          <div className="post-image">
            <CardImg
              src={post.imageUrl}
              alt={`Post by ${post.username}`}
              className="img-fluid"
            />
          </div>
          <div className="post-caption">
            <p>{post.caption}</p>
          </div>
          <FeedActionButtons />
        </div>
      ))}
    </div>
  );
}
function FeedActionButtons() {
  return (
    <div className="d-flex justify-content-around">
      <i className="fa-solid fa-share"></i>
      <i className="fa-regular fa-bookmark"></i>
      <i className="fa-solid fa-plane-departure"></i>
    </div>
  );
}
export default Feed;
