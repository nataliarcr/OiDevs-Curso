import { Avatar } from "./components/Avatar";
import { Navbar } from "./components/Nav-bar";
import { Title } from "./components/Title";
import { NavItem } from "./components/Nav-item";
import { Text } from "./components/text/Text";
import { Button } from "./components/button/Button";
import { Header } from "./components/Header";


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

function App() {
    return (
        <>
            <Navbar>
                <Title />
                {items.map((items) => (
                    <NavItem key={items} text={items} />
                ))}
            </Navbar>
            <Header>
                <Avatar />
                <Text bold>@adatechbr</Text>
                <Button>
                    Seguindo
                </Button>
                <Button>
                    Enviar mensagem
                </Button>
                <Text>211 publicações</Text>
                <Text>44,2 mil seguidores</Text>
                <Text>2 seguindo</Text>
            </Header>
        </>
    );
}

export default App;