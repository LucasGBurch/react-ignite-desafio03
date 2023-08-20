import { styled } from "styled-components";

export const PostContainer = styled.div`
  min-height: 42.75rem;
  max-width: 54rem;
  margin-top: -5.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Profile = styled.section`
  background-color: ${props => props.theme.colors["base-profile"]};
  border-radius: 10px;

  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;

  height: 13.25rem;
  width: 54rem;

  margin-bottom: 4.5rem;

  display: flex;
  gap: 2rem;

  padding: 2rem 2rem 2rem 2.5rem;

  img {
    border-radius: 8px;
    height: 9.25rem;
    width: 9.25rem;
  }

  section {
    margin-top: 0.425rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    div:first-child {
      display: flex;
      justify-content: space-between;
      align-items: flex-start;

      h2 {
        color: ${props => props.theme.colors['base-title']};
      }

      a {
        color: ${props => props.theme.colors.blue};
        display: flex;
        align-items: center;
        gap: 0.5rem;
        text-decoration: none;

        font-size: ${props => props.theme.fontSize.tn};

        border-bottom: solid 1px transparent;

        &:hover {
          border-bottom: solid 1px ${props => props.theme.colors.blue};
          transition: 0.2s;
        }
      }
    }

    p {
      color: ${props => props.theme.colors['base-text']};

      // PASSOS PARA RESOLVER O PROBLEMA DE OVERFLOW:
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
    }

    div:last-child {
      display: flex;
      justify-content: flex-start;
      gap: 1.5rem;

      div {
        display: flex;
        align-items: center;
        gap: 0.5rem;

        span {
          color: ${props => props.theme.colors['base-subtitle']};;
          font-size: ${props => props.theme.fontSize.lt};
        }
      }

      svg {
        color: ${props => props.theme.colors['base-label']};
      }
    }
  }
`;
