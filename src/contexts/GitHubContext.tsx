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

interface GitHubUserIssuesData {
  total_count: number;
  login: string;
  id: number;
  title: string;
  comments: number;
  created_at: string; // Formatada com date-fns
  body: string; // Aplicar com React Markdown
}

interface GitHubContextType {
  userData: GitHubUserData | undefined;
  userIssuesData: GitHubUserIssuesData | undefined;
  fetchGitHubUserIssuesData: (query?: string) => Promise<void>;
}

export const GitHubContext = createContext({} as GitHubContextType);

interface GitHubProviderProps {
  children: ReactNode;
}

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [userData, setUserData] = useState<GitHubUserData>();
  const [userIssuesData, setUserIssuesData] = useState<GitHubUserIssuesData>();

  const fetchGitHubUserData = useCallback(async () => {
    const response = await apiGitHubUser.get('/users/LucasGBurch');

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

    console.log(userData);
  }, []);

  const fetchGitHubUserIssuesData = useCallback(async (query?: string) => {
    const response = await apiGitHubIssueSearch.get(`/issues?q=${query ? query : ''}%20repo:LucasGBurch/react-ignite-desafio03`);

    const data = response.data;

    setUserIssuesData(() => ({
      total_count: data.total_count,
      login: data.items.user.login,
      id: data.items.id,
      title: data.items.title,
      comments: data.items.comments,
      created_at: dateFormatter(data.items.created_at),
      body: data.items.body,
    }));
  }, []);

  useEffect(() => {
    fetchGitHubUserData();
    fetchGitHubUserIssuesData();
  }, [fetchGitHubUserData, fetchGitHubUserIssuesData]);

  return (
    <GitHubContext.Provider value={{ userData, userIssuesData, fetchGitHubUserIssuesData }}>
      {children}
    </GitHubContext.Provider>
  );
}
