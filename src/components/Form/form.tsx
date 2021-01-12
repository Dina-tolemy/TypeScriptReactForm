import * as React from 'react';
import RadioButton from '../RadioButton/radioButton'

const Form=()=>{
    return(
        <div>
        
        <form style={{color: 'darkgrey',textAlign:'center'}}>
            <label>Name: </label>
            <br/>
            <input></input>
            <br/>
            <br/>
            <label>Email: </label>
            <br/>
            <input></input>
            <br/>
            <br/>
            <label style={{textAlign:'left'}}>Gender: </label>
            <br/>
            <label>Male: </label>
            <RadioButton choice={false} ></RadioButton>
            <label>Female: </label>
            <RadioButton choice={false} ></RadioButton>
            <br/>
            <br/>
            <button>Submit data</button>
        </form>
        </div>
    )
}
export default Form;
    


