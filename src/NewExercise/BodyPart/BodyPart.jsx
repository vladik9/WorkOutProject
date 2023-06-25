import React, { useState } from "react";
import { apiOptionsExercise } from "../../APIObjects";
import axios from "axios";

import styles from "./BodyPart.module.css";

export default function BodyPart({ bodyPart }) {
  const [selectedPart, setSelectedBodyPart] = useState(0);
  const [exerciseList, setExerciseList] = useState([]);
  const handleBodyPartClick = (event) => {
    const clickedBodyPart = event.target.id;
    setSelectedBodyPart(
      clickedBodyPart === selectedPart ? null : clickedBodyPart
    );
    console.log(apiOptionsExercise);

    const getExercises = async () => {
      try {
        console.log(apiOptionsExercise);
        console.log("selectedPart is " + event.target.id);
        const response = await axios.request(
          apiOptionsExercise.url + event.target.id,
          apiOptionsExercise
        );

        setExerciseList(response.data);
        console.log(
          "🚀 ~ file: BodyPart.jsx:26 ~ getExercises ~ response.data:",
          response.data
        );
      } catch (error) {
        console.error("Error " + error);
      }
    };
    getExercises();
  };
  return (
    <div
      id={bodyPart}
      style={{
        backgroundColor: bodyPart === selectedPart ? "yellow" : " ",
      }}
      className={styles.bodyPart}
      onClick={handleBodyPartClick}
    >
      {bodyPart.charAt(0).toUpperCase() + bodyPart.slice(1)}
    </div>
  );
}
