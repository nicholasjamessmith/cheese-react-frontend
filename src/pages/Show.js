import { Link, useLoaderData, Form } from "react-router-dom";


function Show(props) {
  const post = useLoaderData();
  
  const div = {
    textAlign: "center",
    border: "3px solid green",
    width: "80%",
    margin: "30px auto",
  };
  
  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.type}</h2>
      <h2>{post.origin_country}</h2>
      <Link to="/">Back to Index</Link>
    </div>
  )   
}

export default Show