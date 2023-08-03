import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import AlbumList from "./pages/AlbumList.jsx";

const App = () => {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<AlbumList />} />
      </Routes>
    </div>
  );
};

export default App;
