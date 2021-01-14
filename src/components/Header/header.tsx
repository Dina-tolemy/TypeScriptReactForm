import * as React from 'react';
import * as Styled from '../style'

interface HeaderProp {
    text: string
    text1?: string
}
//function Header(props){
const Header = (props: HeaderProp) => {
    return(
        <Styled.MainHeader>{props.text}</Styled.MainHeader>
    )
}

export default Header;
