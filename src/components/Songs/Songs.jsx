import { useState } from "react";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";

import Section from "../Section/Section";
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
    <div className={styles.section}>
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

      <Section
        title="Songs"
        data={filteredSongs}
        type="song"
        showToggle={false}
      />
    </div>
  );
}

export default Songs;