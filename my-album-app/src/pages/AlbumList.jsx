import { useEffect, useState } from "react";
import axios from "axios";

const AlbumList = () => {
  const [title, setTitle] = useState("");
  const [albums, setAlbums] = useState([]);

  useEffect(() => {
    fetchAlbums();
  }, []);
  const fetchAlbums = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
    setAlbums(res.data);
  };

  return (
    <div className="container" style={{ margin: "100px" }}>
      <div
        className="grid-container"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: "25px",
        }}
      >
        {albums.map((album) => (
          <div
            key={album.id}
            className="card"
            style={{
              width: "18rem",
              height: "10rem",
              background:
                "linear-gradient(to left bottom,lightblue,goldenrod,lightblue,black)",
            }}
          >
            <div className="card-body d-flex flex-column">
              <h5 className="card-title">{album.title}</h5>
              <div className="d-grid gap-2 d-flex justify-content-center mt-auto">
                <button className="btn btn-primary me-md-2">Update</button>
                <button className="btn btn-primary me-md-2">Delete</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AlbumList;
