import React, { useState } from "react";
import styles from "./CaloriesCalculator.module.css";

export default function CaloriesCalculator() {
  const [gendre, setGendre] = useState("woman");
  const [weight, setWeight] = useState(20);
  const [caloriesResult, setCaloriesResult] = useState();
  const [pfcSelected, setPfcSelected] = useState(0); //0 p, 1 f, 2 c

  const handlePFCSelected = (e) => {
    const selected = e.target.getAttribute("value");
    switch (selected) {
      case "protein":
        setPfcSelected(0);
        break;
      case "fats":
        setPfcSelected(1);
        break;
      case "carbo":
        setPfcSelected(2);
        break;

      default:
        setPfcSelected(0);
    }
  };

  const handleCaloriesCalculations = (e) => {
    setGendre(e.target.value);
  };
  const handleCaloriesCalculationsOnClick = () => {
    if (gendre === "woman") {
      setCaloriesResult("you need: " + (weight * 22).toFixed(0) + " kcal");
    } else if (gendre === "man") {
      setCaloriesResult("you need: " + (weight * 24.4).toFixed(0) + " kcal");
    }
  };
  return (
    <div>
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
          <h3>for women: minimum = your weight x 22 kcal</h3>

          <h3>for men: minimum = your weight x 24,2 kcal</h3>

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

      <div className={styles.PFCMenu}>
        <ol>
          <span value="protein" onClick={handlePFCSelected}>
            Protein
          </span>
          <span value="fats" onClick={handlePFCSelected}>
            Fats
          </span>
          <span value="carbo" onClick={handlePFCSelected}>
            Carbohydrates
          </span>
          <div className={styles["hr-container"]}>
            <hr
              className={styles.proteinHr}
              style={{ borderColor: pfcSelected === 0 ? "yellow" : "" }}
            />
            <hr
              className={styles.fatsHr}
              style={{ borderColor: pfcSelected === 1 ? "yellow" : "" }}
            />
            <hr
              className={styles.carboHr}
              style={{ borderColor: pfcSelected === 2 ? "yellow" : "" }}
            />
          </div>
        </ol>
      </div>
    </div>
  );
}
