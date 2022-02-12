import React, { useState, useEffect } from "react";
import axios from "axios";

const FetchData = () => {
  const [post, setPost] = useState([]);
  const [displaypost, setDisplaypost] = useState([]);
  const [limit, setLimit] = useState(20);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) =>
        // console.log(response.data)
        {
          setPost(response.data);
          setDisplaypost(response.data.slice(0, limit));
        }
      )
      .catch((error) => console.log(error));
    setDisplaypost(post.slice(0, limit));
  }, [limit]);

  return (
    <div>
      {displaypost.map((item) => (
        <li key={item.id}>{item.title}</li>
      ))}
      {limit < post.length && (
        <button
          onClick={() => {
            setLimit(limit + 20);
          }}
        >
          Show More
        </button>
      )}
      {limit > 0 && (
        <button
          onClick={() => {
            setLimit(limit - 20);
          }}
        >
          Show Less
        </button>
      )}
    </div>
  );
};

export default FetchData;
