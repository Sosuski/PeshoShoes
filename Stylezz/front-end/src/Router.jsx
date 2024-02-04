import { BrowserRouter, Routes, Route } from "react-router-dom";
import Main from "./components/Main";
import CreateProd from "./components/CreateProd";
import DisplayProd from "./components/DisplayProd";
import Register from "./components/Register";
import NotFound from "./components/NotFound";
import Login from "./components/Login";
import { Context }from "./components/Context";
import Navigation from "./components/Navigation";

function App() {
  return (
    <BrowserRouter>
      <Context>
        <Routes>
          <Route path="/" element={<Main />}></Route>
          <Route path="/Register" element={<Register />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/CreateProd" element={<CreateProd />}></Route>
          <Route path="/Nav" element={<Navigation />}></Route>
          <Route path="/DisplayProd" element={<DisplayProd />}></Route>
        </Routes>
      </Context>
      <Routes>
        <Route path="/NotFound" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
