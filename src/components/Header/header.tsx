import * as React from 'react';

interface HeaderProp {
    text: string
    text1?: string
}
//function Header(props){
const Header = (props: HeaderProp) => {
    return(
        <h1 style={{color: '#666699',textAlign:'center',fontFamily:'Helvetica'}}>{props.text}</h1>
    )
}

export default Header;
