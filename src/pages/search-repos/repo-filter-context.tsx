import React, { createContext, ReactNode, useContext, useState } from "react";

// 定义上下文的类型
export type SortMode =
  | "top_stars"
  | "top_stars_increase"
  | "recent_stars"
  | "most_forks"
  | "most_contributors"
  | "recently_updated"

interface RepoFilterContextType {
  filter: string;
  setFilter: React.Dispatch<React.SetStateAction<string>>;
  lngList: string[];
  setLngList: React.Dispatch<React.SetStateAction<string[]>>;
  startDate: Date | null;
  setStartDate: React.Dispatch<React.SetStateAction<Date | null>>;
  endDate: Date | null;
  setEndDate: React.Dispatch<React.SetStateAction<Date | null>>;
  sortMode: SortMode;
  setSortMode: React.Dispatch<React.SetStateAction<SortMode>>;
}

// 创建上下文
const RepoFilterContext = createContext<RepoFilterContextType | undefined>(
  undefined
);

// 创建提供者组件
export const RepoFilterProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [filter, setFilter] = useState<string>("");
  const [lngList, setLngList] = useState<string[]>([]); // 存储语言列表
  const [startDate, setStartDate] = useState<Date | null>(null); // 存储开始日期
  const [endDate, setEndDate] = useState<Date | null>(null); // 存储结束日期
  const [sortMode, setSortMode] = useState<SortMode>("top_stars");

  return (
    <RepoFilterContext.Provider
      value={{
        filter,
        setFilter,
        lngList,
        setLngList,
        startDate,
        setStartDate,
        endDate,
        setEndDate,
        sortMode,
        setSortMode,
      }}
    >
      {children}
    </RepoFilterContext.Provider>
  );
};

// 自定义钩子以便于使用上下文
export const useRepoFilter = (): RepoFilterContextType => {
  const context = useContext(RepoFilterContext);
  if (!context) {
    throw new Error("useRepoFilter must be used within a RepoFilterProvider");
  }
  return context;
};

// Utility function to convert sort mode to GitHub API sort parameter
export const convertSortModeToApiParam = (sortMode: SortMode): string => {
  switch (sortMode) {
    case "top_stars":
      return "stars";
    case "top_stars_increase":
      return "stars_increase";
    case "recent_stars":
      return "stars_recent";
    case "most_forks":
      return "forks";
    case "most_contributors":
      return "contributors";
    case "recently_updated":
      return "updated";
    default:
      return "stars"; // Default to stars
  }
};
