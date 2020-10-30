import React from "react";
import { ArrowButtons, Prev, Next } from "./Atom";
type BtnType = {
  selector: string;
};
export default ({ selector }: BtnType) => (
  <ArrowButtons arrow={selector} className={selector}>
    {selector === "prev" ? <Prev /> : <Next />}
  </ArrowButtons>
);
