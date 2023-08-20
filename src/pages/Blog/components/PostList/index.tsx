import { useContext } from 'react';
import { PostListContainer } from './styles'
import { GitHubContext } from '../../../../contexts/GitHubContext';
import { PostListItem } from './PostListItem';

export function PostList() {
  const { userIssuesData } = useContext(GitHubContext);

  return (
    <PostListContainer>
      {userIssuesData?.map((issueData) => (
        <PostListItem
          key={issueData.issueId}
          issueId={issueData.issueId}
          title={issueData.title}
          created_at={issueData.created_at}
          body={issueData.body}
        />
      ))}
    </PostListContainer>
  )
}