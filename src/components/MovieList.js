import React from "react";
import styles from "../routes/Home.module.css";
import Movie from "./Movie";

function MovieList(props) {
  const { loading, movies } = props;

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

export default MovieList;
