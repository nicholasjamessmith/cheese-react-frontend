import { Link } from 'react-router-dom';

function Post({ post }) {
  const div = {
    textAlign: 'center',
    border: '3px solid orange',
    margin: '10px auto',
    width: "60%"
  }
  
  return <div style={div}>
    <Link to={`/post/${post.id}`}>
      <h1>{post.name}</h1>
      <h2>{post.type}</h2>
      <h2>{post.origin_country}</h2>
    </Link>
  </div>

}

export default Post