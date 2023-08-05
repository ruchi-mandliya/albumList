// import { useState, createContext, useEffect } from "react";
// import axios from "axios";

// export const AddContext = createContext();
// export const AlbumProvider = ({ children }) => {
//   const [Albums, setAlbums] = useState([
//     {id:1,title:"post 1" ,userId:1}
//   ]);

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
//     <AddContext.Provider value={[Albums, setAlbums]}>
//       {children}
//     </AddContext.Provider>
//   );
// };

// // custom hook
// // const useAdd = () => useContext(AddContext);

// // export { useAdd };

import { useState, createContext, useEffect } from "react";
import axios from "axios";

export const AddContext = createContext();

export default function AlbumProvider({ children }) {
  const [albums, setAlbums] = useState([
    {
      title: "",
      userId: "",
    },
  ]);

  const fetchAlbums = async () => {
    try {
      const response = await axios.get(
        "https://jsonplaceholder.typicode.com/albums"
      );
      setAlbums(response.data);
    } catch (error) {
      console.error("Error fetching albums:", error);
    }
  };

  const addAlbum = async (newAlbum) => {
    try {
      const response = await axios.post(
        "https://jsonplaceholder.typicode.com/albums",
        newAlbum
      );
      setAlbums([...albums, response.data]);
    } catch (error) {
      console.error("Error adding album:", error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <AddContext.Provider value={{ albums, addAlbum }}>
      {children}
    </AddContext.Provider>
  );
}
