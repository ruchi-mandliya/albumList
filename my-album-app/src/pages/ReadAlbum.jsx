import React from "react";
import { useParams, Link } from "react-router-dom";
import { useContext } from "react";
import { AddContext } from "../contextApi/AddFunctionality";
import { useEffect } from "react";

const ReadAlbum = () => {
  const { id } = useParams();
  const { readAlbum, album } = useContext(AddContext);

  useEffect(() => {
    readAlbum(id);
  }, []);

  return (
    <>
      <div className="card" style={{ margin: "200px" }}>
        <div className="card-header">{album.userId}</div>
        <div className="card-body">
          <h5 className="card-title"> title </h5>
          <p className="card-text">{album.title}</p>

          <Link to="/">
            <button className="btn btn-primary">Go back</button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ReadAlbum;
