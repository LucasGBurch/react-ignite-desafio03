import { styled } from "styled-components";

export const PostContainer = styled.div`
  min-height: 79.25rem;
  max-width: 54rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Profile = styled.section`
  background-color: ${props => props.theme["base-profile"]};


  margin-top: -40%;
`;

export const PostList = styled.ul`
  min-height: 16.25rem;
  max-width: 54rem;

  display: grid;
  grid-template-columns: repeat(2, 50%);
  gap: 2rem;

  li {
    background-color: ${props => props.theme["base-post"]};
    border-radius: 10px;

    height: 16.25rem;
    max-width: 26rem;

    display: flex;
    flex-direction: column;

    cursor: pointer;

    div {
      display: flex;

      h3 {
        color: ${props => props.theme["base-title"]};
      }

      span {
        color: ${props => props.theme["base-span"]};
      }
   }

    p {
      color: ${props => props.theme["base-text"]};
    }
  }
`;
