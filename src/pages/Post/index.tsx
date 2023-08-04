import { FaArrowUpRightFromSquare, FaCalendar, FaChevronLeft, FaComment, FaGithub } from 'react-icons/fa6';
import { IssueTextContainer, IssueTitleContainer, PostContainer } from "./styles";
import { Link } from 'react-router-dom';

// Facomment e FaCalendar

export function Post() {
  return (
    <PostContainer>
      <IssueTitleContainer>
        <div>
          <Link to='/'>
            <FaChevronLeft />
            <span>VOLTAR</span>
          </Link>
          <Link to='https://github.com/LucasGBurch' target='_blank'>
            <span>VER NO GITHUB</span>
            <FaArrowUpRightFromSquare />
          </Link>
        </div>
        <h2>Título da Issue do GitHub</h2>
        <div>
            <div>
              <FaGithub />
              <span>LucasGBurch</span>
            </div>
            <div>
              <FaCalendar />
              <span>Há 2 dias</span>
            </div>
            <div>
              <FaComment />
              <span>25 Comentários</span>
            </div>
          </div>
      </IssueTitleContainer>
      <IssueTextContainer>

      </IssueTextContainer>
    </PostContainer>
  )
}