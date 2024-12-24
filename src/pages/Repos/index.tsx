"use client";

import { useState, useRef } from "react";
import { Button } from "@/components/ui/button";
import LngCombobox from "./lng-combobox";
import RangePicker from "./range-picker";
import { RepoFilterProvider, useRepoFilter } from "./repo-filter-context";
import SelectedRepos from "./selected-repos";
import SortMode from "./sort-mode";


const Home = () => {
  const selectedReposRef = useRef<{ reload: () => void }>(null);

  const handleSearch = () => {
    if (selectedReposRef.current) {
      selectedReposRef.current.reload();
    }
  };

  return (
    <RepoFilterProvider>
      <div className="home">
        <div className={"flex items-center px pt-4 gap-2"}>
          <SortMode></SortMode>
          <LngCombobox></LngCombobox>
          <RangePicker></RangePicker>
          <Button onClick={handleSearch}>
            Search Repos
          </Button>
        </div>
        <SelectedRepos ref={selectedReposRef} />
      </div>
    </RepoFilterProvider>
  );
};

export default Home;
