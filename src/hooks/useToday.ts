import { useEffect, useState } from "react";
import type { Days } from "../type";

export const useToday = () => {
  const [date, setDate] = useState(new Date());

  useEffect(() => {
    console.log("updating");
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const timeUntilNextDay =
      (24 * 60 * 60 - (hours * 60 * 60 + minutes * 60 + seconds)) * 1000;

    setTimeout(() => {
      setDate(new Date());
    }, timeUntilNextDay + 1);
  }, [date]);

  return date.getDay() as Days;
};
