import { gql, useApolloClient } from "@apollo/client";
import { useEffect, useState } from "react";

function Movies() {
  const [movies, setMovies] = useState([]);
  const client = useApolloClient();
  useEffect(() => {
    client
      .query({
        query: gql`
          {
            allMovies {
              title
              id
            }
          }
        `,
      })
      .then((res) => setMovies(res.data.allMovies));
  }, [client]);
  return (
    <ul>
      {movies.map((data) => (
        <li key={data.id}>{data.title}</li>
      ))}
    </ul>
  );
}
export default Movies;
