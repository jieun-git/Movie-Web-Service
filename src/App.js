import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Menu from "./components/Menu"
import Detail from "./routes/Detail"
import { MENU_LIST } from "./components/constants"

import GetMovie from "./routes/GetMovie"

/* router를 render */

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        {MENU_LIST.map(({ path }) => {
          return (
            <Route
              key={path}
              path={path}
              element={MENU_LIST.map(({ path, type }) => {
                return <GetMovie key={path} type={type} />
              })}
            />
          )
        })}
        {/*<Route path="/" element={<GetMovie type="New" />} />*/}
        {/*<Route*/}
        {/*  path="/minimum_rating=8.8"*/}
        {/*  element={<GetMovie type="HighRating" />}*/}
        {/*/>*/}
        {/*<Route path="/genre=romance" element={<GetMovie type="Romance" />} />*/}
        {/*<Route path="/genre=thriller" element={<GetMovie type="Thriller" />} />*/}
        {/*<Route*/}
        {/*  path="/genre=animation"*/}
        {/*  element={<GetMovie type="Animation" />}*/}
        {/*/>*/}
      </Routes>
    </Router>
  )
}

export default App
