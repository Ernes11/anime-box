import React, {useState} from "react";
import { Button } from "../UI/Button";
import { Input } from "./Input";

export const Search = ({action}) => {
    const [search, setSearch] = useState("");
    const getValue = (text) => {
      setSearch(text);
    };
    const getSearch = () => {
        action(search);
    }
  return (
    <div className="search">
      <div className="search__input">
        <Input placeholder= "Search..."value={search} action={getValue} />
      </div>
      <div className="search__btn">
        <Button action={getSearch} type="transparent" text="S" />
      </div>
    </div>
  );
};
