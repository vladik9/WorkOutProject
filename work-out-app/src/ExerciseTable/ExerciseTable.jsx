import React from "react";

export default function ExerciseTable({ dataObject }) {
  console.log(
    dataObject.map((item) => {
      return item.exercises.map((exercise) => {
        return {
          exercise: exercise.exercise,
          repetisions: exercise.repetisions,
          link: exercise.link,
        };
      });
    })
  );
  return <div>ExerciseTable</div>;
}
