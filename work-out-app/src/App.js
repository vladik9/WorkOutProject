import Cards from "./Cards/Cards";
import styles from "./Cards/Cards.module.css";
import exerciseObject from "./exercisesObject";
function App() {
  return (
    <div className={styles.cardWrapper}>
      <Cards data={exerciseObject} />
    </div>
  );
}

export default App;
