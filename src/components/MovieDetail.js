import React from "react";
import styles from './MovieDetail.module.css'
//import PropTypes from "prop-types";

function MovieDetail({ backgroundImageOriginal, mediumCoverImage,
                       url, titleLong, rating, runtime, genres,
                       downloadCount, likeCount }) {
  return (
      <div className={styles.page}>
        {<img className={styles.bgOriginal} src={backgroundImageOriginal}/> }
        <div className={styles.show}>
          <img className={styles.mImage} src={mediumCoverImage} />
          <div className={styles.textbox}>
            <h1 className={styles.title}><a href={url} target="_blank">{titleLong}</a></h1>
            <ul>
              <li>Rating: {rating}</li>
              <li>Like: {likeCount}</li>
              <li>Runtime: {runtime}</li>
              <li>Download: {downloadCount}</li>
              <li>
                Genres:
                <ul>
                  {genres.map(g => <li key={g}>{g}</li>)}
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
  );
}

export default MovieDetail;
