import React from "react";
import styles from "./Hero.module.css";
import img from "../../assets/hero-image/hero-img.png";
import icon1 from "../../assets/hero-image/icon1.svg";
import icon2 from "../../assets/hero-image/icon2.svg";
import icon3 from "../../assets/hero-image/icon3.svg";

const Hero = () => {
  return (
    <div className={styles.hero}>
      {/* Hero description */}
      <div className={styles.heroDesc}>
        <h1>Квартирные переезды </h1>
        <p className={styles.subtitle}>По Москве и области</p>
        {/* hero button */}
        <div className={styles.btnContainer}>
          <button className={styles.primaryBtn}>Заказать</button>
        </div>

        {/* icon data */}
        <div className={styles.heroIcons}>
          <div className={styles.iconInfo}>
            <img src={icon1} alt="icon" />
            <p>Более 800 переездов</p>
          </div>
          <div className={styles.iconInfo}>
            <img src={icon2} alt="icon" />
            <p>Более 800 переездов</p>
          </div>
          <div className={styles.iconInfo}>
            <img src={icon3} alt="icon" />
            <p>Более 800 переездов</p>
          </div>
        </div>
      </div>

      {/* hero image */}
      <div className={styles.heroImg}>
        <img src={img} alt="image" />
      </div>
    </div>
  );
};

export default Hero;
