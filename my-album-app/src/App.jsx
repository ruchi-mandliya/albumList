import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import AlbumList from "./pages/AlbumList.jsx";
import CreateAlbum from "./pages/CreateAlbum.jsx";
import UpdateAlbum from "./pages/UpdateAlbum.jsx";
import ReadAlbum from "./pages/ReadAlbum.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AlbumList />} />
        <Route path="/createAlbum" element={<CreateAlbum />} />
        <Route path="/updateAlbum/:id" element={<UpdateAlbum />} />
        <Route path="/readAlbum/:id" element={<ReadAlbum />} />
      </Routes>
    </div>
  );
};

export default App;
