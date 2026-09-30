import { useToday } from "./hooks/useToday";
import { useState } from "react";
import { Home } from "./views/Home";
import {
  SCBackIconButton,
  SCCard,
  SCHeader,
  SCStack,
} from "./components/styled/BaseComponents";
import type { DayRoutine, DaysString, Routine, View } from "./type";
import routine from "./data/routine.json";
import backIcon from "./assets/back-icon.png";
import "./App.css";
import styled from "styled-components";

function App() {
  const [view, setView] = useState<View>({ name: "home" });
  const today = useToday();

  return view.name === "home" ? (
    <Home {...{ today, setView, routine: routine as unknown as Routine }} />
  ) : view.name === "day-detailed" ? (
    <DayView
      {...{ day: view.day, setView, data: routine[view.day] as DayRoutine }}
    />
  ) : (
    ""
  );
}

const BackIconBtn = ({
  setView,
}: {
  setView: React.Dispatch<React.SetStateAction<View>>;
}) => (
  <SCBackIconButton onClick={() => setView({ name: "home" })}>
    <img src={backIcon} alt="back" />
  </SCBackIconButton>
);

const DayView = ({
  day,
  setView,
  data,
}: {
  day: DaysString;
  setView: React.Dispatch<React.SetStateAction<View>>;
  data: DayRoutine;
}) => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <SCHeader>
        <BackIconBtn {...{ setView }} />
        <h1 style={{ textAlign: "center", fontSize: "24px" }}>{data.name}</h1>
      </SCHeader>
      <SCStack>
        {data.workouts.map((x) => (
          <ExerciseCard
            {...{
              name: x.name,
              desc: x.desc,
              duration: x.volume.duration.max,
              weight: x.volume.weight.max,
              sets: x.volume.sets,
              reps: x.volume.reps,
              perSide: x.volume["per-side"],
            }}
          >
            {/* <pre>{JSON.stringify(x.volume, null, 2)}</pre> */}
          </ExerciseCard>
        ))}
      </SCStack>
    </div>
  );
};
export default App;

const ExerciseCard = ({
  name,
  desc,
  duration,
  weight,
  sets,
  reps,
  perSide,
}: {
  name: string;
  desc: string;
  duration: number | null;
  weight: number | null;
  sets: number;
  reps: number;
  perSide: boolean;
}) => {
  return (
    <SCExerciseCard>
      <h3> {name}</h3>
      <p style={{ color: "#555" }}>{desc}</p>
      <div style={{ display: "flex", alignItems: "center", gap: "1em" }}>
        {duration && <Unit>{duration + " S"}</Unit>}
        {weight && <Unit>{weight + " KG"}</Unit>}
        <Unit>{reps + " x " + sets}</Unit>
        {perSide && <Unit>Per Side</Unit>}
      </div>
      {/* <pre>{JSON.stringify(x.volume, null, 2)}</pre> */}
    </SCExerciseCard>
  );
};

const SCExerciseCard = styled(SCCard)`
  flex-direction: column;
  align-items: baseline;
  gap: 0.6em;
  padding: 1em;
`;

const Unit = styled.span`
  display: block;
  padding: 0.4em 0.6em;
  border: 1px solid hsla(0, 0%, 0%, 0.2);
  border-radius: 0.4em;
  box-shadow: 0 0 6px hsla(0, 0%, 0%, 0.1);
  font-weight: 900;
`;
