// import { useState, useContext, createContext, useEffect } from "react";
// import axios from "axios";

// const AddContext = createContext();
// const AlbumProvider = ({ children }) => {
//   const [Albums, setAlbums] = useState([]);
//   const [title, setTitle] = useState("");

//   useEffect(() => {
//     fetchAlbums();
//   }, []);
//   const fetchAlbums = async () => {
//     try {
//       const response = await axios.get(
//         "https://jsonplaceholder.typicode.com/albums"
//       );
//       setAlbums(response.data);
//     } catch (error) {
//       console.error("Error fetching albums:", error);
//     }
//   };

//   //   useEffect(() => {
//   //     let existingCartItem = localStorage.getItem("cart");
//   //     if (existingCartItem) setAlbums(JSON.parse(existingCartItem));
//   //   }, []);

//   return (
//     <AddContext.Provider value={[Albums, setAlbums, title, setTitle]}>
//       {children}
//     </AddContext.Provider>
//   );
// };

// // custom hook
// const useAdd = () => useContext(AddContext);

// export { useAdd, AlbumProvider };
