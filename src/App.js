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
        {MENU_LIST.map(({ path, type }) => {
          return (
            <Route
              key={path}
              path={path}
              element={<GetMovie key={path} type={type} />}
            />
          )
        })}
      </Routes>
    </Router>
  )
}

export default App
