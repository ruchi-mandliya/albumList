import { useState, useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AddContext } from "../contextApi/AddFunctionality";
const CreateAlbum = () => {
  const { addAlbum } = useContext(AddContext);
  const [title, setTitle] = useState("");
  const [userId, setUserId] = useState(1);
  const navigate = useNavigate();

  //   //   const [id, setId] = useState();

  const titleRef = useRef();
  const userIdRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    const newAlbum = {
      userId: userId, // Replace with desired user ID
      id: Date.now(), // Generate a new ID
      title: title,
    };

    addAlbum(newAlbum);
    alert("saved successfully");
    navigate("/");

    titleRef.current.value = "";
    userIdRef.current.value = "";
  };

  return (
    <div>
      <div className="form-container" style={{ margin: "100px" }}>
        <form onSubmit={handleSubmit}>
          <h2 className="title1">Add Your Album</h2>

          <div className="mb-3">
            <label htmlFor="title">Title:</label>
            <input
              type="text"
              autoFocus
              ref={titleRef}
              onChange={(e) => setTitle(e.target.value)}
              className="form-control"
              placeholder="Enter Title "
              required
            />
          </div>
          <div className="mb-3">
            <label htmlFor="userId">UserId:</label>
            <input
              type="number"
              autoFocus
              ref={userIdRef}
              onChange={(e) => setUserId(e.target.value)}
              className="form-control"
              placeholder="Enter Title "
              required
            />
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-start">
            <button type="submit" className="btn btn-primary btn-lg">
              Save
            </button>
            <Link to="/">
              <button type="submit" className="btn btn-primary btn-lg">
                Back
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateAlbum;
