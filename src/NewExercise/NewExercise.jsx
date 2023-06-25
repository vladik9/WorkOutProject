import React, { useState } from "react";
import axios from "axios";
import apiOptions from "../APIObjects";
import styles from "./NewExercise.module.css";
import navStyles from "./BodyPart/BodyPart.module.css";
import BodyPart from "./BodyPart/BodyPart";

export default function NewExercise() {
  const [bodyPart, setBodyPart] = useState([]);

  const handleGetExercise = () => {
    const getData = async () => {
      try {
        console.log(apiOptions);
        const response = await axios.request(apiOptions);
        console.log(response.data);
        setBodyPart(response.data);
      } catch (error) {
        console.error("Error " + error);
      }
    };
    getData();
  };

  return (
    <div>
      <button className={styles.addButton} onClick={handleGetExercise}>
        +
      </button>

      <div className={navStyles.navigatorPosition}>
        {bodyPart.length !== 0 &&
          bodyPart.map((el) => <BodyPart key={el} bodyPart={el} />)}
      </div>
    </div>
  );
}
