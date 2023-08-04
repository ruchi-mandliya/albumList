import { useState, useEffect } from "react";
import { useAdd } from "../contextApi/AddFunctionality";
import axios from "axios";

const UpdateAlbum = async (albumId, Title) => {
  const [albums, setAlbums] = useAdd();
  const updatedAlbums = albums.map((album) => {
    if (album.id === albumId) {
      return { ...album, title: Title };
    }
    return album;
  });

  try {
    await axios.put(`https://jsonplaceholder.typicode.com/albums/${albumId}`, {
      title: Title,
    });
    setAlbums(updatedAlbums);
  } catch (error) {
    console.error("Error updating album:", error);
  }
};

export default UpdateAlbum;
