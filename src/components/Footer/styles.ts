import { styled } from "styled-components";

export const FooterContainer = styled.footer`
  height: 4rem;
  width: 100%;
  max-width: 90rem;

  bottom: 0;
  margin-top: 2rem;

  font-size: 1rem;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => props.theme["base-post"]};
  color: ${props => props.theme["base-title"]};

  a {
    text-decoration: none;
    font-weight: bold;

    &:visited {
      color: ${props => props.theme["base-text"]};
    }
  }
`;