import { DayCard } from "../components/DayCard";
import { SCStack } from "../components/styled/BaseComponents";
import { days } from "../constants/days";
import type { Days, Routine, View } from "../type";

export const Home = ({
  today,
  setView,
  routine,
}: {
  today: Days;
  setView: React.Dispatch<React.SetStateAction<View>>;
  routine: Routine;
}) => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        height: "100dvh",
      }}
    >
      <h1>Start your Trainng</h1>
      <SCStack>
        {days.map((day, i) => (
          <DayCard
            key={i}
            {...{
              today,
              day,
              setView,
              routine: { name: routine[day].name, desc: routine[day].desc },
            }}
          />
        ))}
      </SCStack>
    </div>
  );
};
