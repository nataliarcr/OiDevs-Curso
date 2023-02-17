import { NavItem } from '../Nav-item';
import { Title } from '../Title';
import * as S from './styles';

const items = [
    "Página Inicial",
    "Pesquisa",
    "Explorar",
    "Reels",
    "Mensagens",
    "Notificações",
    "Criar",
    "Perfil",
    "Mais",
];


export const Navbar = (props) => {
    return (
      <S.NavBarWrapper>
        <S.Box>
          <S.Box>
            <Title />
          </S.Box>
          <S.Box>
            {items.map((item) => (
              <NavItem key={item} text={item} />
            ))}
          </S.Box>
        </S.Box>
      </S.NavBarWrapper>
    );
  };

