var uiqueId = require("uniqid");
const exerciseObject = [
  {
    weekNumber: "Week1",
    id: uiqueId(),
    day: "Monday",
    bodyPart: "Legs",
    exercises: [
      {
        exercise: "1. Barbell squats (high trap bar)",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/the-barbell-squat.jpg",
        repetisions: "3x12",
        exId: uiqueId(),
      },
      {
        exercise: "2. Leg press (low foot placement)",
        link: "https://graduatefitness.com/wp-content/uploads/2021/01/IMG_2775.gif",
        repetisions: "2x15",
        exId: uiqueId(),
      },
      {
        exercise: "3. Deadlift with dumbbells (pause for 1 sec at the bottom)",
        link: "https://media.tenor.com/kyOyzUcfIpMAAAAC/dumbbell-romanian.gif",
        repetisions: "3x8",
        exId: uiqueId(),
      },
      {
        exercise: "4. Single-leg squats (with or without support)",
        link: "https://i0.wp.com/thumbs.gfycat.com/MammothExaltedAyeaye-size_restricted.gif?w=1155&h=840",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise:
          "5. Jumping jacks to maximum height (jumps  as high as possible)",
        link: "https://cdn.dribbble.com/users/2931468/screenshots/5720362/jumping-jack.gif",
        repetisions: "4x10",
        exId: uiqueId(),
      },
    ],
  },
  {
    weekNumber: "Week1",
    id: uiqueId(),

    day: "Wednesday",
    bodyPart: "Chest, Biceps, Shoulders",
    exercises: [
      {
        exercise: "1. Bench press with 2 sec pause at the bottom",
        link: "https://media1.giphy.com/media/QvXVzMT3oziRDud6df/giphy.gif?cid=6c09b952aqejufxjy7st2t6eu0u226er5sl56r5tk0xxhgss&rid=giphy.gif&ct=s",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "2.Dips (with or without additional weight) ",
        link: "https://www.bodybuildingmealplan.com/wp-content/uploads/Weighted-Dips-scaled.jpg",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "3.Incline dumbbell press (45°)",
        link: "https://media.tenor.com/9T1dx6LbbgwAAAAC/2inclne-dumbel-press.gif",
        repetisions: "3x8",
        exId: uiqueId(),
      },
      {
        exercise: "4. Prayer bench press",
        link: "https://media.tenor.com/Vhhf9PFyFSwAAAAC/exercise-close-grip-bench-press.gif",
        repetisions: "3x15",
        exId: uiqueId(),
      },
      {
        exercise: "5. Hammer curls",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/04/dumbbell-hammer-curl.gif",
        repetisions: "3x8",
        exId: uiqueId(),
      },
      {
        exercise: "6. Dumbbell curls with supination on incline bench (45 °)",
        link: "https://cdn.dribbble.com/users/2931468/screenshots/5720362/jumping-jack.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "7. Standing arm swings",
        link: "https://flabfix.com/wp-content/uploads/2019/06/Arm-Swings.gif",
        repetisions: "2x20",
        exId: uiqueId(),
      },
    ],
  },
  {
    weekNumber: "Week1",
    id: uiqueId(),
    day: "Monday",
    bodyPart: "Legs",
    exercises: [
      {
        exercise: "1. Barbell squats (high trap bar)",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/06/the-barbell-squat.jpg",
        repetisions: "3x12",
        exId: uiqueId(),
      },
      {
        exercise: "2. Leg press (low foot placement)",
        link: "https://graduatefitness.com/wp-content/uploads/2021/01/IMG_2775.gif",
        repetisions: "2x15",
        exId: uiqueId(),
      },
      {
        exercise: "3. Deadlift with dumbbells (pause for 1 sec at the bottom)",
        link: "https://media.tenor.com/kyOyzUcfIpMAAAAC/dumbbell-romanian.gif",
        repetisions: "3x8",
        exId: uiqueId(),
      },
      {
        exercise: "4. Single-leg squats (with or without support)",
        link: "https://i0.wp.com/thumbs.gfycat.com/MammothExaltedAyeaye-size_restricted.gif?w=1155&h=840",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise:
          "5. Jumping jacks to maximum height (jumps  as high as possible)",
        link: "https://cdn.dribbble.com/users/2931468/screenshots/5720362/jumping-jack.gif",
        repetisions: "4x10",
        exId: uiqueId(),
      },
    ],
  },
];

export const weeksDays = [
  "Week 1",
  "Week 2",
  "Week 3",
  "Week 4",
  "Week 5",
  "Week 6",
  "Week 7",
  "Week 8",
];

export default exerciseObject;
