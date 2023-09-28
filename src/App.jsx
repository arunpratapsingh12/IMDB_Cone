// import Header from "./components/common/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import routePath from './constants/routes';
import CategoryMovie from "./pages/CategoryMovie";


function App() {
  return (
    <div>
      <BrowserRouter>
        {/* <Home /> */}
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="*" element={<Home />} />
          <Route path={routePath.categories} element={<CategoryMovie />} />
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;
