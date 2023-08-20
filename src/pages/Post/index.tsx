import { FaArrowUpRightFromSquare, FaCalendar, FaChevronLeft, FaComment, FaGithub } from 'react-icons/fa6';
import { IssueTextContainer, IssueTitleContainer, PostContainer } from "./styles";
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { GitHubContext } from '../../contexts/GitHubContext';

export function Post() {
  const { userIssuesData } = useContext(GitHubContext);
  const params = useParams();

  const currentIssueData = userIssuesData.find(
    (data) => String(data.issueNumber) === params.id
  );
  // console.log(currentIssueData);

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
        <h2>{ }</h2>
        <div>
          <div>
            <FaGithub />
            <span>{currentIssueData?.issueLogin}</span>
          </div>
          <div>
            <FaCalendar />
            <span>{currentIssueData?.created_at}</span>
          </div>
          <div>
            <FaComment />
            <span>{currentIssueData?.comments}</span>
          </div>
        </div>
      </IssueTitleContainer>
      <IssueTextContainer>
        <p>
          {currentIssueData?.body}
        </p>
      </IssueTextContainer>
    </PostContainer>
  );
}