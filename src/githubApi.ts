import axios from 'axios';

const GITHUB_API_URL = 'https://api.github.com/search/repositories';

interface Repository {
    id: number;
    name: string;
    full_name: string;
    stargazers_count: number;
    // 你可以根据需要添加更多字段
}

export const fetchRepositories = async (query: string, sort: 'stars' | 'forks' = 'stars', order: 'asc' | 'desc' = 'desc', since?: string): Promise<Repository[]> => {
    try {
        const response = await axios.get(GITHUB_API_URL, {
            params: {
                q: `${query} created:>${since || '2020-01-01'}`,
                sort: sort,
                order: order,
            },
        });
        return response.data.items; // 返回仓库列表
    } catch (error) {
        console.error('Error fetching repositories:', error);
        throw error; // 抛出错误以便调用者处理
    }
}; 