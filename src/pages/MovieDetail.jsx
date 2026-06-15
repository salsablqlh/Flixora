import { useParams } from "react-router-dom";

function MovieDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1>Movie Detail Page</h1>
      <h2>ID Film: {id}</h2>
    </div>
  );
}

export default MovieDetail;