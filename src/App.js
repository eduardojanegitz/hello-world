import DefaultPage from "components/DefaultPage";
import Footer from "components/Footer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route path="/" element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
        </Route>

        <Route path="*" element={<div>Página não encontrada</div>} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}


