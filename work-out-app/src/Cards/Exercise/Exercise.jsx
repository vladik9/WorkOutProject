import React from "react";
export default function Exercise({ exercise }) {
  return (
    <div>
      <div>
        {exercise.exercise}
        <span>
          <strong> {exercise.repetisions}</strong>
        </span>
        <a href={exercise.link} target="_blank" rel="noreferrer">
          Image
        </a>
      </div>
    </div>
  );
}
