import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useAdd } from "../contextApi/AddFunctionality";
const CreateAlbum = () => {
  const [albums, setAlbums] = useAdd();
  //   const [id, setId] = useState();

  const [title, setTitle] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = { title };

    try {
      await axios.post(
        "https://jsonplaceholder.typicode.com/albums",
        JSON.stringify(data)
      );
      setAlbums([...albums, data]);
      setTitle("");
      alert("Saved Successfully");
      navigate("/");
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  return (
    <div>
      <div className="form-container" style={{ margin: "100px" }}>
        <form onSubmit={handleSubmit}>
          <h2 className="title1">Add Your Album</h2>

          <div className="mb-3">
            <input
              type="text"
              autoFocus
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
