import { useToday } from "./hooks/useToday";
import "./App.css";
import type { DayRoutine, DaysString, View } from "./type";
import { useState } from "react";
import { Home } from "./views/Home";
import routine from "./data/routine.json";
import backIcon from "./assets/back-icon.png";
import styled from "styled-components";

function App() {
  const [view, setView] = useState<View>({ name: "home" });
  const today = useToday();

  return view.name === "home" ? (
    <Home {...{ today, setView }} />
  ) : view.name === "day-detailed" ? (
    <DayView
      {...{ day: view.day, setView, data: routine[view.day] as DayRoutine }}
    />
  ) : (
    ""
  );
}
const SCHeader = styled.header`
  display: grid;
  grid-template-columns: 4em auto 4em;
  padding: 1em;
  align-items: center;
`;

const SCBackIconButton = styled.button.attrs({ type: "button" })`
  width: 3rem;
  aspect-ratio: 1;
  border-radius: 100vw;
  overflow: "hidden";

  background-color: #fff;
  border: 1px solid #00000074;
  box-shadow: 0 0 5px 0 #00000039;

  display: flex;
  justify-content: center;
  align-items: center;

  & > img {
    width: 1.4em;
  }
`;

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
        <h1 style={{ textAlign: "center", fontSize: "26px" }}>{data.name}</h1>
      </SCHeader>
      <pre>{day + JSON.stringify(data.workouts, null, 2)}</pre>
    </div>
  );
};
export default App;
