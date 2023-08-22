import { gql, useQuery } from "@apollo/client";
import { Link } from "react-router-dom";

const ALL_MOVIES = gql`
  query getMovies {
    allMovies {
      title
      id
    }
    allTweets {
      id
      text
      author {
        fullName
      }
    }
  }
`;

function Movies() {
  const { data, loading, error } = useQuery(ALL_MOVIES);
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    return <h1>Could not fetch</h1>;
  }
  return (
    <ul>
      <h1>Movies</h1>
      {data.allMovies.map((res) => (
        <li key={res.id}>
          <Link to={`/movies/${res.id}`}>{res.title}</Link>
        </li>
      ))}
    </ul>
  );
}
export default Movies;
