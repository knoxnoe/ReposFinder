"use client";

import LngCombobox from "./lng-combobox";
import RangePicker from "./range-picker";
import SelectedRepos from "./selected-repos";
import { RepoFilterProvider } from './repo-filter-context';

const Home = () => {
  return (
    <RepoFilterProvider>
      <div className="home">
        <div className={"flex items-center px pt-4 gap-2"}>
          <LngCombobox></LngCombobox>
          <RangePicker></RangePicker>
        </div>
        <SelectedRepos></SelectedRepos>
      </div>
    </RepoFilterProvider>
  );
};

export default Home;
