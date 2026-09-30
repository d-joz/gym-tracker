import type React from "react";
import { days } from "../constants/days";
import type { Days, DaysString, View } from "../type";
import { SCDayCard, SCDayTitle, SCWorkoutType } from "./styled/BaseComponents";
import styled from "styled-components";

export const DayCard = ({
  today,
  day,
  setView,
  routine,
}: {
  today: Days;
  day: DaysString;
  setView: React.Dispatch<React.SetStateAction<View>>;
  routine: { name: string; desc: string };
}) => {
  return (
    <SCDayCard
      $today={today === days.indexOf(day)}
      onClick={() => setView({ name: "day-detailed", day })}
    >
      <SCDayTitle>{day.slice(0, 3).toUpperCase()}</SCDayTitle>
      <SCWorkoutType>{routine.name}</SCWorkoutType>
    </SCDayCard>
  );
};

