import React, { createContext, ReactNode } from "react";
import cities from "../assets/cities.json";
import categories from "../assets/categories.json";
interface Items {
  label: string;
  path: string;
  img?: string;
}
type ContextProps = {
  cities: Array<Items>;
  categories: Array<Items>;
};

export type MainContext2Props = {
  children: ReactNode;
};

export const ctx = createContext<Partial<ContextProps>>({
  cities: [],
  categories: [],
});

const MainContext = (props: MainContext2Props) => {
  return (
    <ctx.Provider value={{ cities, categories }}>{props.children}</ctx.Provider>
  );
};

export default MainContext;
