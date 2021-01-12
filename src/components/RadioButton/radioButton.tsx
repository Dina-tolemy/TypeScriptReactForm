import * as React from 'react';

interface RadioProp {
    choice: boolean
    
}
//function Header(props){
const RadioButton = (props: RadioProp) => {
    return(
        <input type="radio" id="genderRadio" />

    )
}

export default RadioButton;
