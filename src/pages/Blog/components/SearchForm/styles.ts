import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  max-width: 54rem;



  input {
    background-color: ${props => props.theme["base-input"]};

    height: 3.125rem;

    &::placeholder {
      color: ${props => props.theme["base-label"]};
    }
  }
`;