const Header = () => {
  return (
    <div>
      <nav
        className="navbar navbar-expand-lg fixed-top"
        style={{
          background:
            "linear-gradient(to left bottom,lightblue,black,black,gray)",
        }}
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <span className="album">Album</span>
            <span className="coll">Collection</span>
          </a>

          <button className="btn bg-warning bg-gradient" type="submit">
            Add Album
            <span className="icon">
              <i className="fa-solid fa-square-plus"></i>
            </span>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Header;
