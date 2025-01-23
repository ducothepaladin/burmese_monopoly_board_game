import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Page from "./pages/Page";
import Home from "./pages/Home";
import PlayGround from "./pages/PlayGround";

export default function App() {



  return (
    <>
    <Router>
      <Routes>
        <Route path="/" element={<Page />}>
            <Route path="/" element={<Home />}></Route>
            <Route path="/playground" element={<PlayGround />}></Route>
        </Route>  
        <Route path='*' element={<Navigate to="/" replace />}></Route>
      </Routes>
    </Router>
    </>
  )
}
