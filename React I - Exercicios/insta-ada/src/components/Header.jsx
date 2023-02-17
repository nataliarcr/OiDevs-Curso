import {Text} from "../ui/text";
import {Avatar} from "./Avatar";
import {Button} from "./button/Button";
import styled from "styled-components";

const HeaderWrapper = styled.div`
display: block;
justify-content: center;
width: 80%;
`;

export const Header = (props) => {
  return (
    <HeaderWrapper>
      <Avatar />
      <Text bold>@adatechbr</Text>
      <Button>
        <Text>Seguindo</Text>
      </Button>
      <Button>
        <Text>Enviar mensagem</Text>
      </Button>
      <Text>211 publicações</Text>
      <Text>44,2 mil seguidores</Text>
      <Text>2 seguindo</Text>
    </HeaderWrapper>
  );
};