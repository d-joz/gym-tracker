import styled from "styled-components";

export const SCStack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 0.8rem;
  gap: 0.4em;
`;
export const SCCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1.5em 1em;
  border: 1px solid hsla(0, 0%, 0%, 0.2);
  border-radius: 1em;
  box-shadow: 0 0 6px hsla(0, 0%, 0%, 0.1);
`;

export const SCDayCard = styled(SCCard)<{ $today: boolean }>`
  --bg: ${({ $today }) => ($today ? "black" : "white")};
  --fg: ${({ $today }) => ($today ? "white" : "black")};

  background-color: var(--bg);
  color: var(--fg);
`;

export const SCDayTitle = styled.h2`
  font-size: 24px;
  text-transform: capitalize;
  font-weight: 900;
  color: hsl(25, 100%, 45%);
`;

export const SCWorkoutType = styled.h3`
  font-size: 22px;
  color: var(--fg);
`;
