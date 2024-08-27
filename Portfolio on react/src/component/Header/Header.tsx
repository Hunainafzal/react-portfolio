import React from "react";
import styles from "../Header/Header.module.css";

const Home: React.FC = () => {
  return (
    <>
      <section className={styles.home} id="home">
        <div className={styles.maxWidth}>
          <div className={styles.homeContent}>
            <div className={styles.text1}>Hello, my name is</div>
            <div className={styles.text2}>Hunain Afzal</div>
            <div className={styles.text3}>
              And I'm a <span className={styles.typing}></span>
            </div>
            <a href="#contact">Hire me</a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
