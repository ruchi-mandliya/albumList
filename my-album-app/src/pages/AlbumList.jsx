// import { useEffect, useState } from "react";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { AddContext } from "../contextApi/AddFunctionality";

const AlbumList = () => {
  const { albums, deleteAlbum } = useContext(AddContext);

  // const fetchAlbums = async () => {
  //   const res = await axios.get("https://jsonplaceholder.typicode.com/albums");
  //   setAlbums(res.data);
  // };

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
        {albums &&
          albums.map((album, i) => (
            <div
              key={i}
              className="card"
              style={{
                width: "18rem",
                height: "10rem",
                background:
                  "linear-gradient(to left bottom,lightblue,goldenrod,lightblue,black)",
              }}
            >
              <div className="card-body d-flex flex-column">
                <h6 className="card-title">{album.userId}</h6>
                <h5 className="card-title">{album.title}</h5>
                <div className="d-grid gap-2 d-flex justify-content-center mt-auto">
                  <Link to={`/readAlbum/${album.id}`}>
                    <button className="btn btn-primary me-md-2">Details</button>
                  </Link>
                  <Link to={`/updateAlbum/${album.id}`}>
                    <button className="btn btn-primary me-md-2">Update</button>
                  </Link>

                  {/* <button className="btn btn-primary me-md-2">Update</button> */}

                  <button
                    onClick={() => deleteAlbum(album.id)}
                    className="btn btn-primary me-md-2"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default AlbumList;
