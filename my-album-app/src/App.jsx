import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import AlbumList from "./pages/AlbumList.jsx";
import CreateAlbum from "./pages/CreateAlbum.jsx";
import UpdateAlbum from "./pages/UpdateAlbum.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AlbumList />} />
        <Route path="/createAlbum" element={<CreateAlbum />} />
        <Route path="/updateAlbum" element={<UpdateAlbum />} />
      </Routes>
    </div>
  );
};

export default App;
