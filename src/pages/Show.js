import { Link, useLoaderData, Form } from "react-router-dom";


function Show(props) {
  const post = useLoaderData();
  
  const div = {
    textAlign: "center",
    border: "3px solid orange",
    width: "80%",
    margin: "30px auto",
  };
  
  return (
    <div style={div}>
      <h1>{post.name}</h1>
      <h2>{post.type}</h2>
      <h2>{post.origin_country}</h2>
      <div style={{ textAlign: "center" }}>
        <h2>Update Cheese</h2>
        <Form method="post" action={`/update/${post.id}`}>
          <input
            type="text"
            name="name"
            placeholder="Name"
            defaultValue={post.name}
          />
          <input
            type="text"
            name="type"
            placeholder="Type"
            defaultValue={ post.type}
          />
          <input
            type="text"
            name="origin_country"
            placeholder="Origin Country"
            defaultValue={post.origin_country}
          />
          <button className="button" color="orange">Update Cheese</button>
        </Form>
        <Form method="post" action={`/delete/${post.id}`}>
            <button className="button">Delete Cheese</button>
        </Form>
      </div>
      <Link to="/">Back to Index</Link>
    </div>
  )   
}

export default Show