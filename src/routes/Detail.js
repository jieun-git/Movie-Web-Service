import { useParams } from "react-router-dom";
import React, { useEffect, useState } from "react";

import MovieDetail from "../components/MovieDetail";
import styles from "./Home.module.css";

function Detail() {
  const [loading, setLoading] = useState(true);
  const [details, setDetails] = useState([]);
  const { id } = useParams();

  const getMovies = async () => {
    const json = await (
      await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
    ).json();
    console.log(json);
    setDetails(json.data.movie);
    setLoading(false);
  };
  console.log(details);

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
        <div>
          <MovieDetail
            backgroundImageOriginal={details.background_image_original}
            mediumCoverImage={details.medium_cover_image}
            url={details.url}
            titleLong={details.title_long}
            rating={details.rating}
            runtime={details.runtime}
            genres={details.genres}
            downloadCount={details.download_count}
            likeCount={details.like_count}
          />
        </div>
      )}
    </div>
  );
}

export default Detail;
