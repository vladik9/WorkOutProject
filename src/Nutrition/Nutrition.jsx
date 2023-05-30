import React from "react";
import styles from "./Nutrition.module.css";
import CaloriesCalculator from "./CaloriesCalculator/CaloriesCalculator";
export default function Nutrition() {
  return (
    <div className={styles.nutritionContainer}>
      <h2>Basic Concepts of PFC</h2>
      <h4> PCF stands for three main sources of energy for our bodies:</h4>
      <h4> P proteine, F for fat and C for carbohydrates.</h4>
      <div className={styles.pfcContainer}>
        <div className={styles.pfcElements}>
          <div className={styles.pfcElement}>
            <h2>Protein</h2>
            <p>
              is esential for building and repairing issues and for metabolic
              reactions
            </p>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.pfcElement}>
            <h2>Fats</h2>
            <p>help absorb vitamins and produce hormones</p>
          </div>
          <div className={styles.verticalLine}></div>
          <div className={styles.pfcElement}>
            <h2>Carbohydrates</h2>
            <p>provide energy and strength</p>
          </div>
        </div>
      </div>
      <div>
        <p>
          It's important to ensure we get the right amount of each element every
          day
        </p>
      </div>
      <p>
        For instance, a woman wighing <strong>60 kg</strong> should consume 60 g
        of proteiine, <strong>60g</strong> of fat, and <strong>240g</strong> of
        carbohydratesine daily.
      </p>
      <CaloriesCalculator />
    </div>
  );
}
