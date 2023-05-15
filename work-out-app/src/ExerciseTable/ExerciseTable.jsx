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
  return (
    <table class="tg">
      <thead>
        <tr>
          <th class="tg-0lax">Date</th>
          <th class="tg-0lax">Exercise</th>
          <th class="tg-0lax">Sets</th>
          <th class="tg-0lax">Weight</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td class="tg-0lax">2020</td>
          <td class="tg-0lax">21</td>
          <td class="tg-0lax">3x3</td>
          <td class="tg-0lax">52ks</td>
        </tr>
      </tbody>
    </table>
  );
}
