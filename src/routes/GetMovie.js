import React, { useState, useEffect } from "react"
import MovieList from "../components/MovieList"

import { URL } from "../components/constants"

function GetMovie({ type }) {
  console.log("url", type)

  const [loading, setLoading] = useState(true)
  const [movies, setMovies] = useState([])

  const getMovies = async () => {
    const response = await fetch(URL[type])
    const json = await response.json()
    console.log(json)
    setMovies(json.data.movies)
    setLoading(false)
  }
  console.log(movies)

  useEffect(() => {
    getMovies()
    setLoading(true)
  }, [type])

  return <MovieList loading={loading} movies={movies} />
}

export default GetMovie
