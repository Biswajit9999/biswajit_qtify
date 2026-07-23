import HeroImage from "../../assets/hero_headphones.png";
import styles from "./Hero.module.css";

function Hero() {
  return (
    <div className={styles.hero}>
      <div className={styles.content}>
        <h1>100 Thousand Songs, ad-free</h1>
        <h1>Over thousands podcast episodes</h1>
      </div>

      <div>
        <img
          src={HeroImage}
          alt="Headphones"
          width={212}
        />
      </div>
    </div>
  );
}

export default Hero;