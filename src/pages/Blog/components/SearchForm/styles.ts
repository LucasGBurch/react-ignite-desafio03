import { styled } from "styled-components";

export const SearchFormContainer = styled.form`
  width: 54rem;
  margin-bottom: 3rem;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  label {
    display: flex;
    justify-content: space-between;

    h3 {
      color: ${props => props.theme.colors['base-subtitle']};
      font-size: ${props => props.theme.fontSize.lm};
    }

    span {
      color: ${props => props.theme.colors['base-span']};
      font-size: ${props => props.theme.fontSize.lt};
    }
  }

  input {
    background-color: ${props => props.theme.colors["base-input"]};
    border: solid 1px ${props => props.theme.colors["base-border"]};
    color: ${props => props.theme.colors["base-text"]};
    font-size: ${props => props.theme.fontSize.md};

    width: 100%;

    border-radius: 6px;
    padding: 0.5rem 1rem;

    height: 3.125rem;

    &:focus {
      border: solid 1px ${props => props.theme.colors.blue};
      transition: 0.2s;
    }

    &::placeholder {
      color: ${props => props.theme.colors["base-label"]};
      font-size: ${props => props.theme.fontSize.md};
    }
  }
`;