import Chip from "@mui/material/Chip";
import styles from "./Card.module.css";

function Card({
  image,
  title,
  follows = 0,
  likes = 0,
  type = "album",
}) {
  return (
    <div className={styles.card}>
      <div className={styles.cardContainer}>
        <img
          src={image}
          alt={title}
          className={styles.image}
        />

        <div className={styles.footer}>
          <Chip
            label={
              type === "song"
                ? `${likes} Likes`
                : `${follows} Follows`
            }
            size="small"
            className={styles.chip}
          />
        </div>
      </div>

      <p className={styles.title}>{title}</p>
    </div>
  );
}

export default Card;