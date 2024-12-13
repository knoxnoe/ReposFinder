import React, { useEffect, useState } from "react";
import { fetchRepositories, Repository } from "../../githubApi"; // 确保路径正确
import RepoCard from "./repo-card"; // 更新路径
import { useRepoFilter } from "./repo-filter-context";

const SelectedRepos: React.FC = () => {
  const { lngList, startDate, endDate } = useRepoFilter(); // 使用上下文
  const [repos, setRepos] = useState<Repository[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadRepos = async () => {
      console.log(lngList, startDate, endDate);
      try {
        // 构建查询字符串
        const languageFilter =
          lngList.length > 0 ? ` language:${lngList.join(",")}` : "";
        const createdAfter = startDate
          ? ` created:>${startDate.toISOString().split("T")[0]}`
          : "";
        const createdBefore = endDate
          ? ` created:<${endDate.toISOString().split("T")[0]}`
          : "";
        const query =
          `stars:>1${languageFilter}${createdAfter}${createdBefore}`.trim();

        const data = await fetchRepositories(query); // 请求带有过滤条件的仓库
        setRepos(data); // 更新状态
      } catch (err) {
        setError("Error fetching repositories"); // 处理错误
      } finally {
        setLoading(false); // 完成加载
      }
    };

    loadRepos();
  }, [lngList, startDate, endDate]); // 依赖于语言列表和日期范围

  if (loading) return <div>Loading...</div>; // 加载状态
  if (error) return <div>{error}</div>; // 错误状态

  return (
    <div className="repo-container mt-4">
      {repos.map((repo) => (
        <RepoCard key={repo.id} repo={repo} />
      ))}
    </div>
  );
};

export default SelectedRepos;
