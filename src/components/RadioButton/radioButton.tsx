import * as React from 'react';
import {useState ,useEffect} from 'react';
interface RadioProp {
    choice: boolean,
    text: string
    
}
//function Header(props){
const RadioButton = (props: RadioProp) => {

    const [inputText,setInputText]=useState([]);
    const [inputCheck,setInputCheck]=useState('');

    return(
        
        <label><input type="radio" id="genderRadio" />{props.text}</label>

    )
}

export default RadioButton;
