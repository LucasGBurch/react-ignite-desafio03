import { Link } from 'react-router-dom';
import { SearchForm } from "./components/SearchForm";
import { PostContainer, PostList, Profile } from "./styles";
import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6';

export function Blog() {
  return (
    <PostContainer>
      <Profile>
        <img src="https://github.com/LucasGBurch.png" alt={`Perfil do GitHub de `} />
        <section>
          <div>
            <h2>Lucas Burch</h2>
            <Link to='https://github.com/LucasGBurch' target='_blank'>
              <span>GITHUB</span>
              <FaArrowUpRightFromSquare />
            </Link>
          </div>

          <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass. </p>

          <div>
            <div>
              <FaGithub />
              <span>LucasGBurch</span>
            </div>
            <div>
              <FaBuilding />
              <span>Rocketseat Ignite</span>
            </div>
            <div>
              <FaUserGroup />
              <span>25 Seguidores</span>
            </div>
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
            Programming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build other data structures. Wherever possible, comparisons with other languages are drawn. amming languages all have built-in data structures, but these often differ from one language to another. This article attempts to list the built-in data structures available in JavaScript and what properties they have. These can be used to build o
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