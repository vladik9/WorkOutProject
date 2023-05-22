import React, { useState } from "react";
import styles from "./Table.module.css";
var uiqueId = require("uniqid");

const Table = ({ history }) => {
  const [newExerciseState, setNewExerciseState] = useState(false);
  return (
    <div className={styles.tableOverflow}>
      <table className={styles.greyGridTable}>
        <thead>
          <tr key={uiqueId()}>
            <th key={uiqueId()}>Index</th>
            {history.map((el, index) => {
              return <th key={uiqueId()}>{index + 1}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          <tr key={uiqueId()}>
            <td key={uiqueId()}>Weight</td>
            {history.map((el, index) => {
              return <td key={uiqueId()}>{el} kg</td>;
            })}
          </tr>
        </tbody>
      </table>
      <div className={styles.exerciseButtons}>
        <button
          className={styles.buttonAddExercise}
          onClick={() => {
            console.log("adding exercies");
            setNewExerciseState(!newExerciseState);
          }}
        >
          add exercise
        </button>
        {newExerciseState && (
          <input
            className={styles.inputWeight}
            id="exerciseWeight"
            min="1"
            type="number"
            placeholder="exercise weight"
          />
        )}
        <button
          className={styles.buttonResetExercises}
          onClick={() => {
            console.log("removing exercies");
          }}
        >
          remove exercise
        </button>
      </div>
    </div>
  );
};
export default Table;
