import Cards from "./Cards/Cards";
import styles from "./Cards/Cards.module.css";

const firstDayExercise = [
  {
    id: "782t38726478",
    day: "Monday",
    bodyPart: "Legs",
    exercises: [
      {
        exercise: "1. Barbell squats (high trap bar)",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/the-barbell-squat.jpg",
        repetisions: "3x12",
        exId: "78687462387",
      },
      {
        exercise: "2. Leg press (low foot placement)",
        link: "https://graduatefitness.com/wp-content/uploads/2021/01/IMG_2775.gif",
        repetisions: "2x15",
        exId: "78687462357",
      },
      {
        exercise: "3. Deadlift with dumbbells (pause for 1 sec at the bottom)",
        link: "https://media.tenor.com/kyOyzUcfIpMAAAAC/dumbbell-romanian.gif",
        repetisions3: "3x8",
        exId: "78687422387",
      },
      {
        exercise: "4. Single-leg squats (with or without support)",
        link: "https://i0.wp.com/thumbs.gfycat.com/MammothExaltedAyeaye-size_restricted.gif?w=1155&h=840",
        repetisions: "3x10",
        exId: "786822462387",
      },
      {
        exercise:
          "5. Jumping jacks to maximum height (jumps  as high as possible)",
        link: "https://cdn.dribbble.com/users/2931468/screenshots/5720362/jumping-jack.gif",
        repetisions: "4x10",
        exId: "786462387",
      },
    ],
  },
  {
    id: "782t38726478",
    day: "Monday",
    bodyPart: "Legs",
    exercises: [
      {
        exercise: "1. Barbell squats (high trap bar)",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/the-barbell-squat.jpg",
        repetisions: "3x12",
        exId: "78687462387",
      },
      {
        exercise: "2. Leg press (low foot placement)",
        link: "https://graduatefitness.com/wp-content/uploads/2021/01/IMG_2775.gif",
        repetisions: "2x15",
        exId: "78687462357",
      },
      {
        exercise: "3. Deadlift with dumbbells (pause for 1 sec at the bottom)",
        link: "https://media.tenor.com/kyOyzUcfIpMAAAAC/dumbbell-romanian.gif",
        repetisions3: "3x8",
        exId: "78687422387",
      },
      {
        exercise: "4. Single-leg squats (with or without support)",
        link: "https://i0.wp.com/thumbs.gfycat.com/MammothExaltedAyeaye-size_restricted.gif?w=1155&h=840",
        repetisions: "3x10",
        exId: "786822462387",
      },
      {
        exercise:
          "5. Jumping jacks to maximum height (jumps  as high as possible)",
        link: "https://cdn.dribbble.com/users/2931468/screenshots/5720362/jumping-jack.gif",
        repetisions: "4x10",
        exId: "786462387",
      },
    ],
  },
];
function App() {
  return <Cards className={styles.cardWrapper} data={firstDayExercise} />;
}

export default App;
