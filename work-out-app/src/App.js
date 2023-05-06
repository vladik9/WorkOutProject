import React, { useState } from "react";
import Cards from "./Cards/Cards";
import styles from "./Cards/Cards.module.css";
import navStyles from "./Navigator/Navigator.module.css";
import exerciseObject from "./exercisesObject";
import { weeksDays } from "./exercisesObject";
import Navigator from "./Navigator/Navigator";
function App() {
  const [currentWeekNumber, setCurrentWeekNumber] = useState(weeksDays[0]);
  return (
    <>
      <div className={navStyles.navigatorPosition}>
        {weeksDays.map((el) => (
          <Navigator key={el} weekNumber={el} />
        ))}
      </div>
      <div className={styles.currentWeekStyle}>{currentWeekNumber}</div>
      <div className={styles.cardWrapper}>
        <Cards
          dataObject={exerciseObject}
          currentWeekNumber={currentWeekNumber}
        />
      </div>
    </>
  );
}

export default App;
