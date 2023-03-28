import Footer from "Components/Footer";
import NotFound from "Components/NotFound";
import Pattern from "Components/Pattern";
import Post from "Components/Post";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Menu from "./Components/Menu";
import Home from './Pages/Home'
import SobreMim from './Pages/SobreMim'


function AppRoutes() {
  return (
    <BrowserRouter>
      <Menu/>

      <Routes>

          <Route path="/" element={<Pattern/>}>
            <Route index element={<Home/>}/>
            <Route path="SobreMim" element={<SobreMim/>}/>
          </Route>
          <Route path="Posts/:id" element={<Post/>}/>
          <Route path="*" element={<NotFound/>}/>
   
      </Routes>

      <Footer/>
    </BrowserRouter>
  );
}

export default AppRoutes;
