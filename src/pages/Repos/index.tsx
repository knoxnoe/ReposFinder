"use client";

import LngCombobox from "./lng-combobox";
import RangePicker from "./range-picker";
import { RepoFilterProvider } from "./repo-filter-context";
import SelectedRepos from "./selected-repos";
import SortMode from "./sort-mode";

const Home = () => {
  return (
    <RepoFilterProvider>
      <div className="home">
        <div className={"flex items-center px pt-4 gap-2"}>
          <SortMode></SortMode>
          <LngCombobox></LngCombobox>
          <RangePicker></RangePicker>
        </div>
        <SelectedRepos></SelectedRepos>
      </div>
    </RepoFilterProvider>
  );
};

export default Home;
