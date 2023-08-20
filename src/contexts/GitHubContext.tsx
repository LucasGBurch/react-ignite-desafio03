import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';
import { apiGitHubIssueSearch, apiGitHubUser } from '../lib/axios';
import { dateFormatter } from '../utils/formatter';

interface GitHubUserData {
  avatar_url: string;
  bio: string;
  company: string | null;
  followers: string;
  name: string;
  login: string;
}

// Modelo para confirmar caminho de cada dado: `https://api.github.com/search/issues?q=${query}%20repo:LucasGBurch/react-ignite-desafio03`
// Para consulta dos dados: https://api.github.com/search/issues?q=%20repo:LucasGBurch/react-ignite-desafio03

interface GitHubUserIssuesData {
  issueLogin: string;
  issueNumber: number;
  title: string;
  comments: string;
  created_at: string; // Formatada com date-fns
  body: string; // Aplicar com React Markdown
}

interface GitHubContextType {
  userData: GitHubUserData | undefined;
  userIssuesData: GitHubUserIssuesData[];
  fetchGitHubUserIssuesData: (query?: string) => Promise<void>;
  totalCount: number;
}

export const GitHubContext = createContext({} as GitHubContextType);

interface GitHubProviderProps {
  children: ReactNode;
}

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [userData, setUserData] = useState<GitHubUserData>();
  const [userIssuesData, setUserIssuesData] = useState<GitHubUserIssuesData[]>([]);
  const [totalCount, setTotalCount] = useState<number>(0);

  const fetchGitHubUserData = useCallback(async () => {
    const response = await apiGitHubUser
      .get('/users/LucasGBurch');

    const data = response.data;

    setUserData(() => ({
      avatar_url: data.avatar_url,
      bio: data.bio,
      company: data.company !== null ? data.company : 'Rocketseat Ignite',
      followers: data.followers > 1 ? `${data.followers} Seguidores` : `${data.followers} Seguidor`,
      name: data.name,
      login: data.login
    })
    );

    // console.log(userData);
  }, []);

  const fetchGitHubUserIssuesData = useCallback(async (query?: string) => {
    const response = await apiGitHubIssueSearch
      .get(`/issues?q=${query ? query : ''}%20repo:LucasGBurch/react-ignite-desafio03`);

    const data = response.data;
    // console.log(data)

    setTotalCount(() => data.total_count);

    setUserIssuesData(() => {
      const updatedIssues = [];

      for (const key in data.items) {
        updatedIssues.push({
          issueLogin: data.items[key].user.login,
          issueNumber: data.items[key].number,
          title: data.items[key].title,
          comments: data.items[key].comments === 1
            ? `${data.items[key].comments} comentário`
            : `${data.items[key].comments} comentários`,
          created_at: dateFormatter(data.items[key].created_at),
          body: data.items[key].body,
        });
      }

      return updatedIssues;
    });
  }, []);

  useEffect(() => {
    fetchGitHubUserData();
    fetchGitHubUserIssuesData();
  }, [fetchGitHubUserData, fetchGitHubUserIssuesData]);

  return (
    <GitHubContext.Provider value={{ userData, userIssuesData, fetchGitHubUserIssuesData, totalCount }}>
      {children}
    </GitHubContext.Provider>
  );
}
