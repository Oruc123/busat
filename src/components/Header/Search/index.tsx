import React from "react";
import { SearchForm, Input, Button, SearchIcon } from "./Atom";

export default function Search() {
  return (
    <SearchForm>
      <Input placeholder="Axtarış..." />
      <Button type="submit">
        <SearchIcon />
      </Button>
    </SearchForm>
  );
}
