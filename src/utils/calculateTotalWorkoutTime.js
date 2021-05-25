const calculateTotalWorkoutTime = (exercises) => {
  return exercises.reduce(
    (
      acc,
      { rest_time_between_sets, reps_range, sets_range, rest_time },
      index
    ) => {
      const avgRestTime =
        rest_time_between_sets.reduce((acc, current) => acc + current, 0) /
        rest_time_between_sets.length;
      const avgRepsRange =
        reps_range.reduce((acc, current) => acc + current, 0) /
        reps_range.length;
      const avgSetsRange =
        sets_range.reduce((acc, current) => acc + current, 0) /
        sets_range.length;
      let totalExerciseTime =
        avgRestTime * (avgSetsRange - 1) + avgRepsRange * 0.025 * avgSetsRange;

      if (index !== exercises.length - 1) {
        totalExerciseTime += rest_time;
      }

      return acc + totalExerciseTime;
    },
    0
  );
};

export default calculateTotalWorkoutTime;
