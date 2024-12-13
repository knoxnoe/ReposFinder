import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/repositories';

export interface Repository {
    id: number;
    name: string;
    full_name: string;
    stargazers_count: number;
    forks_count: number;
    open_issues_count: number;
    owner: {
        login: string;
        avatar_url: string;
    };
    description: string | null; // 可能没有描述
    language: string | null; // 语言
    html_url: string; // 仓库链接
    created_at: string; // 创建时间
    updated_at: string; // 更新时间
    topics: string[]; // 主题标签
    watchers: number;
} 


export const fetchRepositories = async (query: string): Promise<Repository[]> => {
    try {
        const response = await axios.get(GITHUB_API_URL, {
            params: {
                q: query,
                sort: 'stars',
                order: 'desc',
            },
        });
        return response.data.items; // 返回仓库列表
    } catch (error) {
        console.error('Error 1fetching repositories:', error);
        throw error; // 抛出错误以便调用者处理
    }
}; 