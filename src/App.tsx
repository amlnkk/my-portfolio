import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";

import AboutMe from "./pages/AboutMe";
import MyCity from "./pages/MyCity";
import MyFuture from "./pages/MyFuture";

function App() {
  return (
    <BrowserRouter basename="/my-portfolio/">
      <Header />

      <main>
        <Routes>
          <Route path="/" element={<AboutMe />} />
          <Route path="/about" element={<AboutMe />} />
          <Route path="/my-city" element={<MyCity />} />
          <Route path="/my-future" element={<MyFuture />} />
        </Routes>
      </main>

      <Footer />
    </BrowserRouter>
  );
}

export default App;
