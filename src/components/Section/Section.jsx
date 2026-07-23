import { useState } from "react";
import Card from "../Card/Card";
import Carousel from "../Carousel/Carousel";
import styles from "./Section.module.css";

function Section({
  title,
  data = [],
  carousel = false,
  type = "album",
}) {
  const [showAll, setShowAll] = useState(false);

  const displayData = showAll ? data : data.slice(0, 7);

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2>{title}</h2>

        {!carousel && (
          <button
            type="button"
            className={styles.toggle}
            onClick={() => setShowAll((prev) => !prev)}
          >
            {showAll ? "Collapse" : "Show All"}
          </button>
        )}
      </div>

      {carousel ? (
        <Carousel
          data={data}
          type={type}
        />
      ) : (
        <div className={styles.grid}>
          {displayData.map((album) => (
            <Card
              key={album.id}
              image={album.image}
              title={album.title}
              follows={album.follows}
              likes={album.likes}
              type={type}
            />
          ))}
        </div>
      )}
    </section>
  );
}

export default Section;