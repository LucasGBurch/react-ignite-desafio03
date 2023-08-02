import headerImg from '../../assets/Cover.svg';
import { HeaderContainer } from './styles';

export function Header() {
  return <HeaderContainer src={headerImg} alt="Cabeçalho" />;
}