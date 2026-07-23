import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Carousel from "../Carousel/Carousel";
import styles from "./Songs.module.css";

function Songs({ songs = [], genres = [] }) {
  const [selectedGenre, setSelectedGenre] = useState("all");

  const handleChange = (_, newValue) => {
    setSelectedGenre(newValue);
  };

  const filteredSongs =
    selectedGenre === "all"
      ? songs
      : songs.filter((song) => song.genre.key === selectedGenre);

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>Songs</h2>

      <Tabs
        value={selectedGenre}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        textColor="inherit"
        indicatorColor="secondary"
      >
        <Tab value="all" label="All" />

        {genres.map((genre) => (
          <Tab
            key={genre.key}
            value={genre.key}
            label={genre.label}
          />
        ))}
      </Tabs>

      <Carousel
        data={filteredSongs}
        type="song"
      />
    </section>
  );
}

export default Songs;