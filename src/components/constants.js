export const URL = {
  New: "https://yts.mx/api/v2/list_movies.json?&sort_by=year",
  HighRating:
    "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year",
  Romance: "https://yts.mx/api/v2/list_movies.json?&genre=romance",
  Thriller: "https://yts.mx/api/v2/list_movies.json?&genre=thriller",
  Animation: "https://yts.mx/api/v2/list_movies.json?&genre=animation",
}

export const MENU_LIST = [
  {
    title: "",
    path: "/",
    type: "New",
  },
  {
    title: "High Rating",
    path: "minimum_rating=8.8",
    type: "HighRating",
  },
  {
    title: "Romance",
    path: "genre=romance",
    type: "Romance",
  },
  {
    title: "Thriller",
    path: "genre=thriller",
    type: "Thriller",
  },
  {
    title: "Animation",
    path: "genre=animation",
    type: "Animation",
  },
]
