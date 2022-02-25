import React, { useState, useEffect } from "react";
import Movie from "../components/Movie";
//import Menu from "../components/Menu";
import styles from "./Home.module.css";

function Thrill() {
  const [loading, setLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?&genre=thriller",
    ); //c->s syn
    const json = await response.json();
    console.log(json);
    setMovies(json.data.movies);
    setLoading(false);
  };
  console.log(movies);

  useEffect(() => {
    getMovies();
  }, []);

  return (
    <div className={styles.container}>
      {loading ? (
        <div className={styles.loader}>
          <span>Loading...</span>
        </div>
      ) : (
        <>
          {/*<Menu className={styles.menus} />*/}
          <div className={styles.movies}>
            {movies.map((movie) => (
              <Movie //App에서 Movie로 보내줄 애들
                key={movie.id} //map() very important
                id={movie.id} //for dynamic url, props로 movie에 넘겨 줘야 함.
                year={movie.year}
                mediumCoverImage={movie.medium_cover_image}
                title={movie.title}
                summary={movie.summary}
                genres={movie.genres}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Thrill;
