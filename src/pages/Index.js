import Post from '../components/Post'
import { useLoaderData, Form } from "react-router-dom";

function Index(props) {
  //Fetch the loaderdata using the useLoaderData hook
  const cheeses = useLoaderData()
  return <>
    <div style={{ textAlign: "center" }}>
      <h1>The Cheese App!</h1>
      <h2>Add a Cheese</h2>
      <Form method="post" action="/create">
        <input className="input" type="text" name="name" placeholder="Name" />
        <input className="input" type="text" name="type" placeholder="Type" />
        <input className="input" type="text" name="origin_country" placeholder="Origin Country" />
        <button className="button">Add a new cheese</button>
      </Form>
    </div>
    {cheeses.map((cheese) => <Post key={cheese.id} post={cheese} />)}
    </>
}

export default Index