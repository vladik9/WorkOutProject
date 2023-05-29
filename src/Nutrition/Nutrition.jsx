import React, { useState } from "react";
import styles from "./Nutrition.module.css";
export default function Nutrition() {
  const [gendre, setGendre] = useState("woman");
  const [weight, setWeight] = useState(20);
  const [caloriesResult, setCaloriesResult] = useState();

  const handleCaloriesCalculations = (e) => {
    setGendre(e.target.value);
  };
  const handleCaloriesCalculationsOnClick = () => {
    if (gendre === "woman") {
      setCaloriesResult(weight * 22 + " kcal");
    } else if (gendre === "man") {
      setCaloriesResult(weight * 24.4 + " kcal");
    }
  };
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

      <div className={styles.crucialInformation}>
        <div style={{ width: "20%" }}>
          <h2>
            Another crucial concept in maintaining a healty diet is calories.
          </h2>
        </div>
        <div>
          <p>
            Many people mistakenly belive that a food's energy calue determines
            its usefulbess, but this is not true.
          </p>
          <p>
            To calculate the minimum daily calories, use the formula. Keep in
            mind that this figure doesn't take into account any physical
            acticity during the day.
          </p>
          <h3>for women: minimum = your weight x 22kcal</h3>

          <h3>for men: minimum = your weight x 24,2kcal</h3>

          <div className={styles.radioCalories}>
            <input
              type="radio"
              id="woman"
              value="woman"
              onChange={handleCaloriesCalculations}
              checked={gendre === "woman"}
            />
            Woman
            <input
              type="radio"
              id="man"
              value="man"
              checked={gendre === "man"}
              onChange={handleCaloriesCalculations}
            />
            Man
          </div>

          <input
            className={styles.caloryInput}
            type="number"
            min={weight}
            value={weight}
            onChange={(e) => {
              setWeight(e.target.value);
            }}
          />
          <button
            className={styles.caloryButton}
            type="button"
            onClick={handleCaloriesCalculationsOnClick}
          >
            calculate
          </button>
          <span>{caloriesResult}</span>
        </div>
      </div>
      <h4>Also, each item has a different caloric value</h4>
    </div>
  );
}
