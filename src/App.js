import DefaultPage from "components/DefaultPage";
import Footer from "components/Footer";
import Post from "components/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./components/Menu";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import NotFound from "pages/NotFound";

export default function App() {
  return (
    <BrowserRouter>
      <Menu />

      <Routes>
        <Route path="/" element={<DefaultPage />}>
          <Route index element={<Home />} />
          <Route path="aboutme" element={<AboutMe />} />
          <Route path="post/:id" element={<Post />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  );
}


