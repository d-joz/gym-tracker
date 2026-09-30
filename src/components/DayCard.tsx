import type React from "react";
import { days } from "../constants/days";
import type { Days, DaysString, View } from "../type";
import { SCDayCard, SCDayTitle, SCWorkoutType } from "./styled/BaseComponents";

export const DayCard = ({
  today,
  day,
  setView,
}: {
  today: Days;
  day: DaysString;
  setView: React.Dispatch<React.SetStateAction<View>>;
}) => {
  return (
    <SCDayCard
      $today={today === days.indexOf(day)}
      onClick={() => setView({ name: "day-detailed", day })}
    >
      <SCDayTitle>{day}</SCDayTitle>
      <SCWorkoutType>workout type</SCWorkoutType>
    </SCDayCard>
  );
};
