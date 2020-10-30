import { useState, useCallback, useEffect, SyntheticEvent } from "react";
import { useHistory } from "react-router-dom";
import { Items } from "./DropDwon";
export const useSearch = () => {
  const history = useHistory();
  const [city, setCity] = useState<Items>({ label: "Bakı", path: "baku" });
  const [citiesVisible, setcitiesVisible] = useState(false);
  const [category, setCategory] = useState<Items>({
    label: "Restoranlar",
    path: "restoranlar",
  });
  const [categorysVisible, setscategorysVisible] = useState(false);

  const changeCity = useCallback(
    ({ label, path }) => {
      setCity({ label, path });
      setcitiesVisible(!citiesVisible);
    },
    [citiesVisible]
  );

  const showCities = () => {
    setcitiesVisible(!citiesVisible);
  };

  const changeCategory = useCallback(
    ({ label, path }) => {
      setCategory({ label, path });
      setscategorysVisible(!categorysVisible);
    },
    [categorysVisible]
  );

  const showCategory = () => {
    setscategorysVisible(!categorysVisible);
  };

  let goTo = () => history.push(`/${city.path}/${category.path}`);

  useEffect(() => {
    const hidedrop = (e: any): void => {
      if (categorysVisible || citiesVisible) {
        setscategorysVisible(false);
        setcitiesVisible(false);
      }
    };
    document.addEventListener("click", hidedrop);
    return () => document.removeEventListener("click", hidedrop);
  }, [categorysVisible, citiesVisible]);
  return {
    city,
    citiesVisible,
    category,
    categorysVisible,
    changeCity,
    changeCategory,
    showCities,
    showCategory,
    goTo,
  };
};
