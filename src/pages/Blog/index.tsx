import { SearchForm } from "./components/SearchForm";
import { PostContainer, PostList, Profile } from "./styles";
import { FaArrowUpRightFromSquare } from 'react-icons/fa6';

export function Blog() {
  return (
    <PostContainer>
      <Profile>
        <img src="" />
        <section>
          <div>
            <h2>Nome</h2>
            <a>
              <span>GITHUB</span>
              <FaArrowUpRightFromSquare />
            </a>
          </div>
        </section>
      </Profile>

      <SearchForm />

      <PostList>

        <li>
          <div>
            <h3>Títulos</h3>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          </p>
        </li>
        <li>
          <div>
            <h3>Títulos</h3>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          </p>
        </li>
        <li>
          <div>
            <h3>Títulos</h3>
            <span>Há 1 dia</span>
          </div>
          <p>
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn.
          </p>
        </li>

      </PostList>
    </PostContainer>
  );
}