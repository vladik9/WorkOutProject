import React from "react";
import styles from "./TableModal.module.css";
import { CiSaveDown1 } from "react-icons/ci";
var uiqueId = require("uniqid");

const Modal = ({ dataObject, setOpenTableModal, currentDayExercises }) => {
  const selectedWeekObject = dataObject.filter((items) => {
    return items.day === currentDayExercises;
  });
  return (
    <>
      <div className={styles.darkBG} onClick={() => setOpenTableModal(false)} />
      <div className={styles.centered}>
        <div className={styles.modal}>
          <div className={styles.modalContent}>
            <table className={styles.tg}>
              <tr key={uiqueId()}>
                <td className={styles["tg-0pky"]} key={uiqueId()}>
                  Index
                </td>
                <td className={styles["tg-0pky"]} key={uiqueId()}>
                  Exercise
                </td>
                <td className={styles["tg-0pky"]} key={uiqueId()}>
                  Sets
                </td>
                <td className={styles["tg-0pky"]} key={uiqueId()}>
                  Weight
                </td>
              </tr>
              <tbody>
                {selectedWeekObject.map((set) => {
                  return set.exercises.map((exercise, index) => {
                    return (
                      <tr key={uiqueId()}>
                        <td className={styles["tg-0pky"]} key={uiqueId()}>
                          <strong>{index + 1}</strong>
                        </td>
                        <td className={styles["tg-0pky"]} key={uiqueId()}>
                          {exercise.exercise}
                        </td>
                        <td className={styles["tg-0pky"]} key={uiqueId()}>
                          {exercise.repetisions}
                        </td>
                        <td className={styles.addExercise} key={uiqueId()}>
                          <input className={styles.weightInput} type="number" />

                          {exercise.weightHistory.map((weight, index) => {
                            if (index === 0) return " | " + weight + "kg";
                            else if (
                              index ===
                              exercise.weightHistory.length - 1
                            )
                              return weight + "kg | ";
                            else return " | " + weight + "kg | ";
                          })}
                          <CiSaveDown1
                            className={styles.buttonStyle}
                            key={uiqueId()}
                            onClick={(e) => {
                              console.log("i am clicked");
                            }}
                          />
                        </td>
                      </tr>
                    );
                  });
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
