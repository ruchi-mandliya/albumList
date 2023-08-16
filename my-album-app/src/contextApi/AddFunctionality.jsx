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
  const [album, setAlbum] = useState({
    title: "",
    userId: "",
  });

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
  const readAlbum = async (albumId) => {
    try {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/albums/${albumId}`
      );
      console.log(data);
      setAlbum({
        userId: data.userId,

        title: data.title,
      });
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
  const deleteAlbum = async (albumId) => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/albums/${albumId}`
      );
      setAlbums(albums.filter((album) => album.id !== albumId));
      const del = confirm("Are you sure you want to delete this album?");
      if (del == true) {
        alert("album deleted");
      }
    } catch (error) {
      console.error("Error deleting album:", error);
    }
  };

  useEffect(() => {
    fetchAlbums();
  }, []);

  return (
    <AddContext.Provider
      value={{ albums, album, readAlbum, addAlbum, deleteAlbum }}
    >
      {children}
    </AddContext.Provider>
  );
}
