import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Group from "./routes/Group";
import Detail from "./routes/Detail";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <Navbar />
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={`/page/:group/:page`} element={<Group />} />
        <Route path={`/movie/:id`} element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
