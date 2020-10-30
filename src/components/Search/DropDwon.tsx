import React, { useContext } from "react";
import { ctx } from "../../context";
export interface Items {
  label: string;
  path: string;
}

interface Props {
  drType: string;
  clickHandler: (label: Items) => void;
}
const DropDown: React.FC<Props> = ({ clickHandler, drType }) => {
  const { cities, categories } = useContext(ctx);
  const onClick = (e: React.SyntheticEvent): void => {
    let li = e.target as HTMLElement;
    let label: any = li.innerText;
    let path: any = li.dataset.path;
    clickHandler({ label, path });
  };
  const render = drType === "city" ? cities : categories;
  return (
    <ul>
      {render?.map((el: Items, ind: number) => (
        <li data-path={el.path} onClick={onClick} key={ind}>
          {el.label}
        </li>
      ))}
    </ul>
  );
};

export default DropDown;
