import { createContext } from "react";
import { weatherSearchDefaultState } from "./reducers";

export const WeatherSearchContext = createContext<WeatherSearchState>(
  weatherSearchDefaultState
);
export const WeatherSearchDispatchContext = createContext<
  React.Dispatch<WeatherSearchAction>
>(() => {});



export const WeatherSearchProvider = ({
  state,
  dispatch,
  children,
}: {
  state: WeatherSearchState;
  dispatch: React.Dispatch<WeatherSearchAction>;
  children: React.ReactNode[] | React.ReactNode;
}) => {
  return (
    <WeatherSearchContext.Provider value={state}>
      <WeatherSearchDispatchContext.Provider value={dispatch}>
        {children}
      </WeatherSearchDispatchContext.Provider>
    </WeatherSearchContext.Provider>
  );
};
