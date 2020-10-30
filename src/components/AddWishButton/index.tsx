import React, { useEffect, useState } from "react";
import { Button, Heart } from "./Atom";
type IButton = {
  id: string;
};
const AddWishButton: React.FC<IButton> = React.memo(({ id }) => {
  let whishListitem: string = localStorage.getItem("whishList") ?? "[]",
    whishListParced: [string] = JSON.parse(whishListitem);

  let [whishList, setWhisList] = useState<Array<string>>(whishListParced);
  let [isWhish, setisWhish] = useState(false);

  const clickHandler = () => {
    if (isWhish) {
      let newList: string[] = whishList.filter((el) => {
        return el !== id;
      });
      localStorage.setItem("whishList", JSON.stringify(newList));
      setWhisList(newList);
    } else {
      let newList: string[] = [...whishList, id];
      setWhisList(newList);
      localStorage.setItem("whishList", JSON.stringify(newList));
    }
  };
  useEffect(() => {
    if (whishList?.includes(id)) {
      setisWhish(true);
    } else {
      setisWhish(false);
    }
  }, [isWhish, whishList, id]);
  return (
    <Button onClick={clickHandler} bg={isWhish}>
      <Heart />
    </Button>
  );
});
export default AddWishButton;
