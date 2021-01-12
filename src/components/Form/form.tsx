import * as React from 'react';
import RadioButton from '../RadioButton/radioButton';
import SubmitButton from '../SubmitButton/submitButton'

//ask about using the ... 

const Form=()=>{
    return(
        <div>
        
        <form >
        <div className="form-group">
            <label>Name: </label>
            <br/>
            <input type="name" className="form-control" id="name"></input>
            <br/>
            <br/>
            <label>Email: </label>
            <br/>
            <input type="email" className="form-control" id="email"></input>
            <br/>
            <br/>
            <label style={{textAlign:'left'}}>Gender: </label>
            <br/>
            
            <RadioButton {...{choice:false, text:"Male"}}>{}</RadioButton>
            
            <RadioButton {...{choice:false, text:"Female"}}>{}</RadioButton>
            
            <br/>
            <br/>
            <SubmitButton />
            </div>
        </form>
        </div>
    )
}
export default Form;
    


