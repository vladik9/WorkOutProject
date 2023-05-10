var uiqueId = require("uniqid");
const week1 = [
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
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/barbell-pause-bench.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "2.Dips (with or without additional weight) ",
        link: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Triceps-Dips.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "3.Incline dumbbell press (45°)",
        link: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Incline-Dumbbell-Press.gif",
        repetisions: "3x8",
        exId: uiqueId(),
      },
      {
        exercise: "4. Prayer bench press",
        link: "https://i.pinimg.com/originals/f5/07/a1/f507a173b4a8383cf04b56036c756c15.gif",
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
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/incline-dumbbell-curl.gif",
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

export default week1;
