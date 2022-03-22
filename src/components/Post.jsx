import { Navigate, useNavigate } from 'react-router-dom';

function Post() {
  const status = 200;
  const navigate = useNavigate();
  const onClick = () => {
    console.log('hello');
    navigate('/about');
  };
  if (status === 404) {
    return <Navigate to="./notfount" />;
  }
  return (
    <div>
      Post
      <button onClick={onClick}>Click</button>
    </div>
  );
}

export default Post;
