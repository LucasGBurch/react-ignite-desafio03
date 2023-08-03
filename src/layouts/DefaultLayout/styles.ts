import { styled } from "styled-components";

export const LayoutContainer = styled.div`
  background-color: ${props => props.theme.colors["base-background"]};

  margin: 0 auto;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
`;
