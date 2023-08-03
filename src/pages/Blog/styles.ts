import { styled } from "styled-components";

export const PostContainer = styled.div`
  min-height: 42.75rem;
  max-width: 54rem;

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

  margin-top: -5.5rem;
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

        cursor: pointer;
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

// SearchForm é um estilo que fica entre estes dois, em outro componente interno e separado.

export const PostList = styled.ul`
  min-height: 16.25rem;
  max-width: 54rem;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 2rem;

  li {
    background-color: ${props => props.theme.colors["base-post"]};
    border-radius: 10px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    
    height: 16.25rem;
    max-width: 26rem;

    padding: 2rem;

    display: flex;
    flex-direction: column;

    // Borda já fica antes do hover, para que os elementos não se movam e só a borda apareça no focus
    border: solid 2px transparent;

    cursor: pointer;

    &:hover {
      border: solid 2px ${props => props.theme.colors['base-label']};

      transition: 0.2s;
    }

    div {
      display: flex;
      justify-content: space-between;
      height: 4rem;

      h3 {
        color: ${props => props.theme.colors["base-title"]};
        font-size: ${props => props.theme.fontSize.lg};
      }

      span {
        color: ${props => props.theme.colors["base-span"]};
        font-size: ${props => props.theme.fontSize.tn};
      }
   }

    p {
      color: ${props => props.theme.colors["base-text"]};
      height: 6.5rem;
      width: 22rem;

      // PASSOS PARA RESOLVER O PROBLEMA DE OVERFLOW:
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
    }
  }
`;
