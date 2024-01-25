//app.js는 더 이상 영화를 보여주지 않지만 router을 render함
//router은 URL을 보고 있는 component
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/movie/:id" element={<Detail />}></Route>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
