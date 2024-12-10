"use client";

import LngCombobox from "./lng-combobox";
import RangePicker from "./range-picker";

const Home = () => {
  return (
    <div className="home">
      <div className={"flex items-center px pt-4 gap-2"}>
        <LngCombobox></LngCombobox>
        <RangePicker></RangePicker>
      </div>
    </div>
  );
};

export default Home;
