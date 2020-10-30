import React from "react";
import { Row, Col } from "react-flexbox-grid";
import { SelectWrapper, SelecTitle, Select, SubmitButton } from "./Atom";
import DropDown from "./DropDwon";
import { useSearch } from "./search.hook";

const Search: React.FC = () => {
  const {
    city,
    citiesVisible,
    category,
    categorysVisible,
    changeCity,
    changeCategory,
    showCities,
    showCategory,
    goTo,
  } = useSearch();
  return (
    <Row>
      <Col xs={5}>
        <SelectWrapper>
          <span>Bölmə seçin</span>
          <SelecTitle onClick={showCategory}>{category.label}</SelecTitle>
          <Select>
            {categorysVisible && (
              <DropDown drType="category" clickHandler={changeCategory} />
            )}
          </Select>
        </SelectWrapper>
      </Col>
      <Col xs={5}>
        <SelectWrapper>
          <span>Şəhər seçin</span>
          <SelecTitle onClick={showCities}>{city.label}</SelecTitle>
          <Select>
            {citiesVisible && (
              <DropDown drType="city" clickHandler={changeCity} />
            )}
          </Select>
        </SelectWrapper>
      </Col>
      <Col xs={2}>
        <SubmitButton onClick={goTo}>Axtar</SubmitButton>
      </Col>
    </Row>
  );
};

export default Search;
