import React from "react";
import styles from "./TableModal.module.css";
import { CiLink, CiSaveDown1 } from "react-icons/ci";
const today = new Date();
const Modal = ({ dataObject, setOpenTableModal, currentDayExercises }) => {
  console.log("🚀 ~ file: TableModal.jsx:5 ~ Modal ~ dataObject:", dataObject);
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
              <tbody>
                {/* <tr>
                  <td className={styles["tg-0pky"]}>Date</td>
                  <td className={styles["tg-0pky"]}>Exercise</td>
                  <td className={styles["tg-0pky"]}>Sets</td>
                  <td className={styles["tg-0pky"]}>Weight</td>
                </tr> */}
                <tr>
                  {selectedWeekObject.map((item) => {
                    return item.exercises.map((exercise, index) => {
                      return (
                        <tr key={"tableRowMapped " + exercise.index}>
                          <td
                            className={styles["tg-0pky"]}
                            key={"date" + exercise.index}
                          >
                            {today.getDate()}
                          </td>
                          <td
                            className={styles["tg-0pky"]}
                            key={"date" + exercise.index}
                          >
                            {exercise.exercise}
                          </td>
                          <td
                            className={styles["tg-0pky"]}
                            key={"link" + exercise.index}
                          >
                            <div
                              href={exercise.link}
                              alt="gif"
                              key={"imageLink" + exercise.index}
                            >
                              <CiLink key={"imageIcon" + exercise.index} />
                            </div>
                          </td>
                          <td
                            className={styles["tg-0pky"]}
                            key={"sets" + exercise.index}
                          >
                            {exercise.repetisions}
                          </td>
                          <td
                            className={styles["tg-0pky"]}
                            id={"weight" + exercise.exercise}
                          >
                            52ks
                          </td>
                          <CiSaveDown1 key={"saveButton" + exercise.index} />
                        </tr>
                      );
                    });
                  })}
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};
export default Modal;
