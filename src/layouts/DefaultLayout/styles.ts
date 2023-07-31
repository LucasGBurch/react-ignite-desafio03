import { styled } from "styled-components";

export const LayoutContainer = styled.div`
  background-color: ${props => props.theme["base-background"]};

  margin: 0 auto;
  max-width: 90rem;

  display: flex;
  flex-direction: column;
`;
