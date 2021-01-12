import * as React from 'react';

interface RadioProp {
    choice: boolean,
    text: string
    
}
//function Header(props){
const RadioButton = (props: RadioProp) => {
    return(
        <label><input type="radio" id="genderRadio" />{props.text}</label>

    )
}

export default RadioButton;
