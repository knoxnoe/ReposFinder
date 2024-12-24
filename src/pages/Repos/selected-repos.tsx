import React, { useEffect, useState, forwardRef, useImperativeHandle, useMemo } from "react";
import { fetchRepositories, Repository } from "../../githubApi";
import RepoCard from "./repo-card";
import { useRepoFilter } from "./repo-filter-context";
import { Skeleton } from "@/components/ui/skeleton";

const SelectedRepos = forwardRef<{ reload: () => void }>((props, ref) => {
  const { lngList, startDate, endDate } = useRepoFilter();
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const buildQuery = useMemo(() => {
    const languageFilter =
      lngList.length > 0 ? ` language:${lngList[0]}` : "";
    const createdAfter = startDate
      ? ` created:>${startDate.toISOString().split("T")[0]}`
      : "";
    const createdBefore = endDate
      ? ` created:<${endDate.toISOString().split("T")[0]}`
      : "";
    return `stars:>1${languageFilter}${createdAfter}${createdBefore}`.trim();
  }, [lngList, startDate, endDate]);

  const loadRepos = async () => {
    setLoading(true);
    try {
      const data = await fetchRepositories(buildQuery);
      setRepos(data);
      setError(null);
    } catch (err) {
      setError("Error fetching repositories");
      setRepos([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadRepos();
  }, [buildQuery]);

  useImperativeHandle(ref, () => ({
    reload: loadRepos
  }), [loadRepos]);

  if (loading) {
    return (
      <div className="repo-container mt-4 flex flex-wrap gap-4 justify-center">
        {[...Array(10)].map((_, index) => (
          <Skeleton key={index} className="h-[200px] w-[250px] rounded-xl" />
        ))}
      </div>
    );
  }

  if (error) return <div className="text-red-500 text-center mt-4">{error}</div>;

  if (repos.length === 0) {
    return (
      <div className="text-center text-gray-500 mt-4">
        No repositories found with the current filters.
      </div>
    );
  }

  return (
    <div className="repo-container mt-4 flex flex-wrap gap-4 flex-start">
      {repos.map((repo, index) => (
        <div key={index} className="flex flex-col gap-4">
          <RepoCard repo={repo} />
        </div>
      ))}
    </div>
  );
});

SelectedRepos.displayName = 'SelectedRepos';

export default SelectedRepos;
