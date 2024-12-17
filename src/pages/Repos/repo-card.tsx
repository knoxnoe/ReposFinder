import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Repository } from "@/githubApi";
import React from "react";

import "font-awesome/css/font-awesome.min.css";
import "./repo-card.css"; // 引入样式

interface RepoCardProps {
  repo: Repository;
}

// 语言颜色映射
const languageColors: { [key: string]: string } = {
  JavaScript: "#f1e05a",
  TypeScript: "#2b7489",
  Python: "#3572A5",
  Java: "#b07219",
  CSharp: "#178600",
  PHP: "#4F5D95",
  Ruby: "#701516",
  Go: "#00ADD8",
  // 添加更多语言和颜色
};

const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
  const languageColor = languageColors[repo.language || ""] || "#555"; // 默认颜色

  const handleOpenRepo = () => {
    window.open(repo.html_url, "_blank"); // 使用 window.open 打开链接
  };

  return (
    <Card className="repo-card flex flex-col justify-between">
      <div>
        <h2 className="text-base font-semibold">{repo.name}</h2>
        <div className="repo-stats">
          <span>
            <i className="fa fa-star" aria-hidden="true"></i>{" "}
            {repo.stargazers_count}
          </span>
          <span>
            <i className="fa fa-code-fork" aria-hidden="true"></i>{" "}
            {repo.forks_count}
          </span>
          <span>
            <i className="fa fa-eye" aria-hidden="true"></i> {repo.watchers}
          </span>
          <span>
            <i className="fa fa-exclamation-circle" aria-hidden="true"></i>{" "}
            {repo.open_issues_count}
          </span>
        </div>
        <Popover>
          <PopoverTrigger>
            <span className="repo-description">
              {repo.description || "No description available"}
            </span>
          </PopoverTrigger>
          <PopoverContent>
            {repo.description || "No description available"}
          </PopoverContent>
        </Popover>
        <div className="flex justify-end">
          <span style={{ color: languageColor }} className="text-xs">
            {repo.language || "Unknown"}
          </span>
        </div>
      </div>

      <div>
        <div className="flex items-center ">
          <img
            src={repo.owner.avatar_url}
            alt={`${repo.owner.login}'s avatar`}
            style={{ width: "32px", borderRadius: "50%", marginRight: "8px" }}
          />
          <span style={{ fontWeight: "normal", fontSize: "0.9rem" }}>
            {repo.owner.login}
          </span>
        </div>
        <Button
          size={"sm"}
          className="w-full mt-4"
          onClick={handleOpenRepo} // 设置 onClick 事件
        >
          View on GitHub
        </Button>
      </div>
    </Card>
  );
};

export default RepoCard;
