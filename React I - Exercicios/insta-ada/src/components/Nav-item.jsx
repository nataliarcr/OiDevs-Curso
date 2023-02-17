import { Text } from '../ui/text/Text';

export const NavItem = (props) => {
    return <Text className ="navItem">
        {props.text}
    </Text>
}