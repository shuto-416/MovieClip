import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import { movie_enum, movie_types } from "../../types/movie_type";
import { Text } from "@chakra-ui/react";
import axios from "axios";

const type_filter = (q_type: any) => {
  switch (q_type) {
    case "comedy":
      return movie_enum.COMEDDY;
    case "action":
      return movie_enum.ACTION_DEFAULT;
    case "anime":
      return movie_enum.ANIME;
    default:
      return movie_enum.MISSING;
  }
}

// all movies list -> filtered movies list
function filter_movies(
  movies: Array<movie_types>,
  genre: movie_enum
): Array<movie_types> {
  if (genre == movie_enum.MISSING) {
    return [];
  }
  let new_movie = Object.assign([], movies);
  new_movie = new_movie.filter((movie: movie_types) => movie.genre == genre);
  return new_movie;
}

const Clips = () => {

  const { query } = useRouter();
  const type = type_filter(query.type);
  // state
  const [movie_states, setMovie_states] = useState<Array<movie_types>>([])

  useEffect(() => {
    // 初回だけデータをバックエンドからとってくる
    axios.get("http://localhost:5000/all_movies").then((res: any) => {
      setMovie_states(res.data);
    });
  }, [])

  // とってきてるなら
  if (type == movie_enum.MISSING) {
    return <>LOADING</>
  }

  return (
    <div>
      {filter_movies(movie_states, type).map((movie: movie_types) => {
        return (
          <div key={movie.id}>
            <Text fontWeight={"bold"} fontSize={"3xl"}>
              {" "}
              {movie.title}{" "}
            </Text>
            {movie.title}, {movie.url}, {movie.id}
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Clips;
