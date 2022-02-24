import React from "react";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import Menu from './components/Menu';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

/* router를 render */

function App () {
    return (
        <Router>
            <Menu/>
            <Routes>
                <Route path="/movie/:id" element={ <Detail/> }></Route>
                {/* url localhost:3000 뒤에 /movie 해주면 Detail 컴포넌트 렌더링
                Movie 컴포넌트에 id 필요함
                */ }
                <Route path="/" element={ <Home/> }></Route>
                {/* user가 이 경로에 있으면 우리는 Home Route를 렌더링 해주겠다. */ }
                {/* uesr가 홈 화면으로 갈 때 사용할 Route, "/" == home */ }
            </Routes>
        </Router>
    );
}

export default App;
