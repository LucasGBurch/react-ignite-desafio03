import { styled } from 'styled-components';

export const PostListItemContainer = styled.li`
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

  div:last-child {
    color: ${props => props.theme.colors["base-text"]};
    height: 6.5rem;
    width: 22rem;

    // PASSOS PARA RESOLVER O PROBLEMA DE OVERFLOW DO TEXTO APRESENTADO EM CADA POST:
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
  }
`;