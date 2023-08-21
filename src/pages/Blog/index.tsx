import { Link } from 'react-router-dom';
import { SearchForm } from "./components/SearchForm";
import { PostContainer, Profile } from "./styles";
import { FaArrowUpRightFromSquare, FaBuilding, FaGithub, FaUserGroup } from 'react-icons/fa6';
import { useContext } from 'react';
import { GitHubContext } from '../../contexts/GitHubContext';
import { PostList } from './components/PostList';

export function Blog() {
  const { userData } = useContext(GitHubContext);

  return (
    <PostContainer>
      <Profile> {/**AVATAR URL */}
        <img src={`https://github.com/${userData?.login}.png`} alt={`Perfil do GitHub de `} />
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

      <PostList />

    </PostContainer>
  );
}
