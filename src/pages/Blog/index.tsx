import { Link } from 'react-router-dom';
import { SearchForm } from "./components/SearchForm";
import { PostContainer, PostList, Profile } from "./styles";
import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6';
import { useContext } from 'react';
import { GitHubContext } from '../../contexts/GitHubContext';

export function Blog() {
  const { userData } = useContext(GitHubContext);

  return (
    <PostContainer>
      <Profile> {/**AVATAR URL */}
        <img src={userData?.avatar_url} alt={`Perfil do GitHub de `} />
        <section>
          <div>
            <h2>{userData?.name}</h2> {/**LOGIN NESSE LINK */}
            <Link to='https://github.com/LucasGBurch' target='_blank'>
              <span>GITHUB</span>
              <FaArrowUpRightFromSquare />
            </Link>
          </div>

          <p>{userData?.bio}</p>

          <div>
            <div>
              <FaGithub />
              <span>{userData?.login}</span>
            </div>
            <div>
              <FaBuilding />
              <span>{userData?.company}</span>
            </div>
            <div>
              <FaUserGroup />
              <span>{userData?.followers}</span>
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