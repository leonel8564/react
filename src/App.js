
import Itemlistcontainer from "./components/itemlistcontainer/Itemlistcontainer";
import Itemdetailconteiner from "./components/itemdetailconteiner/itemdetailconteiner";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar1 from "./components/NavBar/Navbar";
import Navbar2 from "./views/home/home";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar1/>
        <Routes>
          <Route exact path="/" element={<Navbar2/>}/>
          <Route exact path="/produc" element={<Itemlistcontainer/>}/>
          <Route exact path="/category/:categoryid" element={<Itemlistcontainer/>}/>
          <Route exact path="/product/:id" element={<Itemdetailconteiner/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
