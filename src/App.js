import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import { UserStorage } from "./context/userContext";
import Login from "./pages/login";
import Search from "./pages/search";
import CriarUsuarios from "./pages/createuser";
import Postvideos from "./pages/postvideos";

function App() {


  return (
    <BrowserRouter>
    <UserStorage>
      <div className="App">
        <div style={{ width: '100%', display: 'flex' ,}}>
            <Routes>
              <Route path="/" element={<Home/>} />
              <Route path="/login" element={<Login/>} />
              <Route path="/search" element={<Search/>} />
              <Route path="/createuser" element={<CriarUsuarios/>} />
              <Route path="/postvideo" element={<Postvideos/>}/>
            </Routes>
        </div>
      </div>
    </UserStorage>
    </BrowserRouter>
  );
}

export default App;
