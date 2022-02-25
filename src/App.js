import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Menu from "./components/Menu";
import Detail from "./routes/Detail";
import Home from "./routes/Home";
import HighRating from "./routes/HighRating";
import Romance from "./routes/Romance";
import Thriller from "./routes/Thriller";
import Animation from "./routes/Animation";

/* router를 render */

function App() {
  return (
    <Router>
      <Menu />
      <Routes>
        <Route path="/movie/:id" element={<Detail />} />
        {/* url localhost:3000 뒤에 /movie 해주면 Detail 컴포넌트 렌더링
                Movie 컴포넌트에 id 필요함
                */}
        <Route path="/" element={<Home />} />
        <Route path="/minimum_rating=8.8" element={<HighRating />} />
        <Route path="/genre=romance" element={<Romance />} />
        <Route path="/genre=thriller" element={<Thriller />} />
        <Route path="/genre=animation" element={<Animation />} />
        {/* user가 이 경로에 있으면 우리는 Home Route를 렌더링 해주겠다. */}
        {/* uesr가 홈 화면으로 갈 때 사용할 Route, "/" == home */}
      </Routes>
    </Router>
  );
}

export default App;
