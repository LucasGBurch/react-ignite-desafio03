import { FaArrowUpRightFromSquare, FaCalendar, FaChevronLeft, FaComment, FaGithub } from 'react-icons/fa6';
import { IssueTextContainer, IssueTitleContainer, PostContainer } from "./styles";
import { Link, useParams } from 'react-router-dom';
import { useContext } from 'react';
import { GitHubContext } from '../../contexts/GitHubContext';
import { ReactMarkdown } from 'react-markdown/lib/react-markdown';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { oneDark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export function Post() {
  const { userIssuesData } = useContext(GitHubContext);
  const params = useParams();

  const currentIssueData = userIssuesData.find(
    (data) => String(data.issueNumber) === params.id
  );
  // console.log(currentIssueData);

  // A propriedade components do ReactMarkdown veio deste link, só que, infelizmente, não consegui implementar para estilizar os códigos dentro das issues e achei complexo demais para compreender/mexer: https://github.com/remarkjs/react-markdown#use-custom-components-syntax-highlight

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
        <h2>{currentIssueData?.title}</h2>
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
        <ReactMarkdown
          children={currentIssueData!.body}
          components={{
            code({node, inline, className, children, ...props}) {
              const match = /language-(\w+)/.exec(className || '')
              return !inline && match ? (
                <SyntaxHighlighter
                  {...props}
                  children={String(children).replace(/\n$/, '')}
                  style={oneDark}
                  language={match[1]}
                  PreTag="div"
                />
              ) : (
                <code {...props} className={className}>
                  {children}
                </code>
              )
            }
          }}
        />
      </IssueTextContainer>
    </PostContainer>
  );
}