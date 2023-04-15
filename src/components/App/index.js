import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import HomePage from "../HomePage/HomePage";
import Detail from "../DetailPage";

export default function App() {
  return (
    <BrowserRouter>
      <header>
        <Link to="/">Hi Cuties!</Link>
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/detail/:pet_id" element={<Detail />} />
      </Routes>
    </BrowserRouter>
  );
}
