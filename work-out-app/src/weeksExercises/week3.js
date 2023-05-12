//need to update this

var uiqueId = require("uniqid");
const Week3 = [
  {
    weekNumber: "Week3",
    id: uiqueId(),
    day: "Monday",
    bodyPart: "Legs",
    exercises: [
      {
        exercise: "1. Barbell squats",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/05/low-bar-squat-form.gif",
        repetisions: "4x6",
        exId: uiqueId(),
      },
      {
        exercise: "2. Front sqyats",
        link: "https://newlife.com.cy/wp-content/uploads/2019/12/27281301-StrongMan-Front-Chest-Squat_Weightlifting_360.gif",
        repetisions: "2x10",
        exId: uiqueId(),
      },
      {
        exercise: "3. Deadlifts",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/sumo-deadlift.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "4. Leg press with a pause at the buttom for 3 sec",
        link: "https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif",
        repetisions: "3x8",
        exId: uiqueId(),
      },
      {
        exercise: "5. Jumping jacks to maximum height",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2021/08/jumping-jacks.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
    ],
  },
  {
    weekNumber: "Week3",
    id: uiqueId(),
    day: "Wednesday",
    bodyPart: "Chest",
    exercises: [
      {
        exercise: "1. Dumble bench press",
        link: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Press.gif",
        repetisions: "3x8",
        exId: uiqueId(),
      },
      {
        exercise: "2. Close-grip barbell bench press",
        link: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Close-Grip-Bench-Press.gif",
        repetisions: "2x10",
        exId: uiqueId(),
      },
      {
        exercise: "3. Parallel bar dips(weighted if possible)",
        link: "https://fitnessprogramer.com/wp-content/uploads/2022/04/parallel-bar-dip.gif",
        repetisions: "3x8",
        exId: uiqueId(),
      },
      {
        exercise: "4. Flyes",
        link: "https://newlife.com.cy/wp-content/uploads/2019/11/03021301-Dumbbell-Decline-Fly_Chest_360.gif",
        repetisions: "4x12",
        exId: uiqueId(),
      },
      {
        exercise: "5. Plate press",
        link: "https://fitnessprogramer.com/wp-content/uploads/2021/06/Svend-Press.gif",
        repetisions: "2x20",
        exId: uiqueId(),
      },
    ],
  },
  {
    weekNumber: "Week3",
    id: uiqueId(),
    day: "Friday",
    bodyPart: "Back",
    exercises: [
      {
        exercise: "1. Deadlift",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2023/01/barbell-deadlift-front-view.gif",
        repetisions: "3x7",
        exId: uiqueId(),
      },
      {
        exercise: "2. Deadlift",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2023/01/barbell-deadlift-front-view.gif",
        repetisions: "2x9",
        exId: uiqueId(),
      },
      {
        exercise: "3. Pull-ups (or pull-donw)",
        link: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Pull-up.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "4. Pull-donw",
        link: "https://sporium.net/wp-content/uploads/2020/01/pulldown-min.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "5. Dumbbell row on bent-over position",
        link: "https://newlife.com.cy/wp-content/uploads/2019/11/02921301-Dumbbell-Bent-over-Row_back_Back_360.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "6. Seated Dumbbell shrugs",
        link: "https://fitnessprogramer.com/wp-content/uploads/2022/01/Dumbbell-Seated-Gittleson-Shrug.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "7. Straight barbell curls",
        link: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Barbell-Curl.gif",
        repetisions: "3x12",
        exId: uiqueId(),
      },
      {
        exercise: "8. Reverse grip barbell curls",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/10/barbell-reverse-curl.gif",
        repetisions: "2x15",
        exId: uiqueId(),
      },
    ],
  },
  {
    weekNumber: "Week3",
    id: uiqueId(),
    day: "Monday",
    bodyPart: "Legs, Shoulders",
    exercises: [
      {
        exercise: "1. Barbell squats",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/barbell-full-squat.gif",
        repetisions: "2x8",
        exId: uiqueId(),
      },
      {
        exercise: "2.  Barbell squatsc with pause at the buttom",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/03/barbell-full-squat.gif",
        repetisions: "2x7",
        exId: uiqueId(),
      },
      {
        exercise: "3. Leg press with a wide and high stance",
        link: "https://fitnessprogramer.com/wp-content/uploads/2015/11/Leg-Press.gif",
        repetisions: "4x12",
        exId: uiqueId(),
      },
      {
        exercise:
          "4. Walking lunges with dumbbells for each leg (forward or backward)",
        link: "https://www.inspireusafoundation.org/wp-content/uploads/2022/01/dumbbell-lunges.gif",
        repetisions: "3x10",
        exId: uiqueId(),
      },
      {
        exercise: "5. Seated dumbbell lateral raises barbell shoulder press",
        link: "https://fitnessprogramer.com/wp-content/uploads/2021/02/Dumbbell-Shoulder-Press.gif",
        repetisions: "3x15",
        exId: uiqueId(),
      },
    ],
  },
];

export default Week3;
