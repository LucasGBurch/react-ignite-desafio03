import { useNavigate } from 'react-router-dom';
import { PostListItemContainer } from './styles';

interface PostListItemProps {
  issueId: number;
  title: string;
  created_at: string;
  body: string;
}

export function PostListItem({ issueId, title, created_at, body }: PostListItemProps) {
  const navigate = useNavigate();

  function navigateHandler() {
    navigate(`/post/${issueId}`)
  }

  return (
    <PostListItemContainer onClick={navigateHandler}>
      <div>
        <h3>{title}</h3>
        <span>{created_at}</span>
      </div>
      <p>
        {body}
      </p>
    </PostListItemContainer>
  );
}

/**
 * <li>
          <div>
            <h3>Títulos</h3>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. amming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build o
          </p>
        </li>
 */
