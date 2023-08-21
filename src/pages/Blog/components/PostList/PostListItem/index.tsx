import { useNavigate } from 'react-router-dom';
import { PostListItemContainer } from './styles';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';

interface PostListItemProps {
  issueNumber: number;
  title: string;
  created_at: string;
  body: string;
}

export function PostListItem({ issueNumber, title, created_at, body }: PostListItemProps) {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate(`/post/${issueNumber}`);
  }

  return (
    <PostListItemContainer onClick={navigateHandler}>
      <div>
        <h3>{title}</h3>
        <span>{created_at}</span>
      </div>
      <div>
        <ReactMarkdown children={body} />
      </div>
    </PostListItemContainer>
  );
}
