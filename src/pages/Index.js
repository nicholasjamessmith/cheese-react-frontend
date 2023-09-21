import Post from '../components/Post'
import { useLoaderData } from "react-router-dom";

function Index(props) {
  //Fetch the loaderdata using the useLoaderData hook
  const cheeses = useLoaderData()
  return <>
    {cheeses.map((cheese) => <Post key={cheese.id} post={cheese} />)}
    </>
}

export default Index