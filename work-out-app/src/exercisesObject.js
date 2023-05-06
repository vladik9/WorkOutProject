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
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/low-bar-squat-form.gif",
        repetisions: "3x12",
        exId: uiqueId(),
      },
      {
        exercise: "2. Leg press (low foot placement)",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/leg-press.gif",
        repetisions: "2x15",
        exId: uiqueId(),
      },
      {
        exercise: "3. Deadlift with dumbbells (pause for 1 sec at the bottom)",
        link: "https://newlife.com.cy/wp-content/uploads/2019/12/03001301-Dumbbell-Deadlift_Back_360.gif",
        repetisions: "3x8",
        exId: uiqueId(),
      },
      {
        exercise: "4. Single-leg squats (with or without support)",
        link: "https://fitnessprogramer.com/wp-content/uploads/2022/02/Bodyweight-Bulgarian-Split-Squat.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise:
          "5. Jumping jacks to maximum height (jumps  as high as possible)",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2021/08/jumping-jacks.gif",
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
    day: "Friday",
    bodyPart: "Back, Triceps",
    exercises: [
      {
        exercise:
          "1. Deadlift (sumo or conventional, whichever is more comfortable)",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/02/barbell-deadlift-movement.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "2.Bent-over barbell row ",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/08/barbell-bent-over-row.gif",
        repetisions: "2x10",
        exId: uiqueId(),
      },
      {
        exercise: "3.Wide-grip lat pulldown",
        link: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Lat-Pulldown.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "4. Dumbbell row on bench",
        link: "https://d38ty1ecdjk742.cloudfront.net/wp-content/uploads/Dumbbell-Bent-over-Row_back_Back.gif",
        repetisions: "3x12",
        exId: uiqueId(),
      },
      {
        exercise: "5. Dumbbell shrugs",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2021/11/dumbbell-shrug.gif",
        repetisions: "3x12",
        exId: uiqueId(),
      },
      {
        exercise: "6. Triceps extensions with cable machine",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2021/10/cable-tricep-pushdown.gif",
        repetisions: "3x12",
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
