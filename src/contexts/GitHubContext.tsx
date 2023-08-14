import { ReactNode, createContext, useCallback, useEffect, useState } from 'react';
import { api } from '../lib/axios';

interface GitHubUserData {
  avatar_url: string;
  bio: string;
  company: string | null;
  followers: string;
  name: string;
  login: string;
}

// interface GitHubUserIssues {

// }

interface GitHubContextType {
  userData: GitHubUserData | undefined;
}

export const GitHubContext = createContext({} as GitHubContextType);

interface GitHubProviderProps {
  children: ReactNode;
}

export function GitHubProvider({ children }: GitHubProviderProps) {
  const [userData, setUserData] = useState<GitHubUserData>();

  const fetchGitHubUserData = useCallback(async () => {
    const response = await api.get('/users/LucasGBurch');

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



  useEffect(() => {
    fetchGitHubUserData();
  }, [fetchGitHubUserData]);

  return (
    <GitHubContext.Provider value={{ userData }}>
      {children}
    </GitHubContext.Provider>
  );
}
