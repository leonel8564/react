
import Navbar2 from "./views/home/home";
import Itemlistcontainer from "./components/itemlistcontainer/Itemlistcontainer";
import Itemdetailconteiner from "./components/itemdetailconteiner/itemdetailconteiner";
import { Routes, Route, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar2/>
        <Routes>
          <Route exact path="/produc" element={<Itemlistcontainer/>}></Route>
          <Route exact path="/Produc/elem" element={<Itemdetailconteiner/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
