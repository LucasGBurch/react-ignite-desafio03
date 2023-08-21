import { styled } from "styled-components";

export const PostContainer = styled.div`
  min-height: 40rem;
  max-width: 54rem;
`;

export const IssueTitleContainer = styled.section`
  height: 10.5rem;
  width: 54rem;
  margin-top: -5.25rem;
  padding: 2rem;
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  background-color: ${props => props.theme.colors['base-profile']};

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  div:first-child {
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: ${props => props.theme.colors.blue};

    height: 1.25rem;

    font-size: ${props => props.theme.fontSize.tn};
    
    a {
      display: flex;
      align-items: center;
      gap: 0.5rem;
      
      border-bottom: solid 1px transparent;
      text-decoration: none;
      color: ${props => props.theme.colors.blue};
  
      &:hover {
        border-bottom: solid 1px ${props => props.theme.colors.blue};
        transition: 0.2s;
      }

    }
  }

  h2 {
    color: ${props => props.theme.colors['base-title']};
  }

  div:last-child {
      display: flex;
      justify-content: flex-start;
      gap: 1.5rem;
      font-size: ${props => props.theme.fontSize.lt};

      height: 1.625rem;
      
      div:first-child {
        justify-content: center;
        height: 1.625rem;
      }

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        span {
          color: ${props => props.theme.colors['base-span']};;
          font-size: ${props => props.theme.fontSize.lt};
        }
      }

      svg {
        color: ${props => props.theme.colors['base-label']};
        height: 1.125rem;
        width: 1.125rem;
      }
    }
`;

export const IssueTextContainer = styled.article`
  min-height: 20rem;
  width: 100%;
  padding: 2.5rem 2rem;

  p {
    color: ${props => props.theme.colors['base-text']};
  }

  pre {
    background-color: ${props => props.theme.colors['base-post']};
    border-radius: 2px;
    color: ${props => props.theme.colors['base-title']};
    padding: 1rem;
    margin: 1.5rem auto;
  }
`;
