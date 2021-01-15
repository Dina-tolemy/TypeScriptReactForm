import * as React from "react";
import RadioButton from "../RadioButton/radioButton";
import SubmitButton from "../SubmitButton/submitButton";
import { useState, useEffect, useCallback } from "react";
import * as Styled from "../style";
import { useForm } from "react-hook-form";
import PhoneDiv from "../Phone";

//ask about using the ...

interface SubmitFormData {
  name: string;
  email: string;
  gender: string;
  phone: string;
}
const Form: React.FC<SubmitFormData> = (props) => {
  const [formName, setFormName] = useState("");
  const [formEmail, setFormEmail] = useState("");
  const [formPhone, setFormPhone] = useState([]);
  const [phoneDiv, setphoneDiv] = useState(false);
  const [employed, setEmployed] = useState("");
  const [empDiv, setEmpDiv] = useState(false);
  const [formGender, setFormGender] = useState("");
  const [company, setCompany] = useState("");
   const [genderToggle,setgenderToggle]=useState(false);
  
  //const toggleGenderbutton=()=>setgenderToggle(!genderToggle);
  //const toggleGender=()=>
  const togglePhone = () => {
    setphoneDiv(true);
   
    };

    const deletephone=()=>{
      setphoneDiv(false);
      formPhone.splice(-1,1);
    }


  const submitData = () => {
    confirm(
      " Supplied Information"+
      " \n \n name is:  " +
        formName +
        "\n \n Gender:  " +
        formGender +
        " \n\n  your  email is:  " +
        formEmail +
        "\n\n  and this are available phone numbers:  " +
        formPhone +
        "\n\n Employment Status:  " +
        employed +
        " " +
        "\n\n company name if available:  " +company
    );
  };

  const handleInputName = (event) => {
    setFormName(event.target.value);
  };
  const handleInputEmail = (event) => {
    setFormEmail(event.target.value);
  };
  ///ask about an action which will take the final value not with each key down
  ////// or another way to add to this array
  ///////// 
  const handleInputPhone = (event) => {
    const name = event.target.value;

    setFormPhone([...formPhone, name]);
  };

  const handleInputGender = (event) => {

    setFormGender(event.target.value);
    let g= event.target.value;
    setEmployed(g);
  };

  const handleEmployedValue = (event) => {
    let employmentStat= event.target.value;
    setEmployed(employmentStat);
    if (employmentStat === "employed") {
      setEmpDiv(true);
      //toggleEmpDiv();
    } else {
      setEmpDiv(false);
      setCompany("not employed");
    }
  };
  const handleCompanyName = (e) => {
    setCompany(e.target.value);
  };


  return (
    <div>
      <form>
        <div className="form-group">
          <label>Name: </label>
          <br />
          <input
            type="name"
            className="form-control"
            id="name"
            name="name"
            onChange={handleInputName}
          ></input>
          <br />
          <br />
          <label>Email: </label>
          <br />
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={handleInputEmail}
          ></input>
          <br />
          <br />

          <label>Phone Numbers: </label>
          <br />
          <input
            type="phone"
            className="form-control"
            id="phone"
            name="phone"
            onChange={handleInputPhone}
          ></input>
          <br />
          {
          phoneDiv ? (

            <div>
              <input type="phone" className="form-control" name="phone" onChange={handleInputPhone} />
              <span className="btn btn-primary" onClick={deletephone}>-</span>
              </div>
          ) : (
            <label></label>
          )}
          <br/>
          <span className="btn btn-primary" onClick={togglePhone}>
            add another phone number
          </span>
          <br />
          <br />
          <br />
          <label style={{ textAlign: "left" }}>Gender: </label>
          <br />
          <label>
            <input
              type="radio"
              id="genderRadio"
              value="male"
              name="male"
              onChange={handleInputGender}
            />
             Male {" "} {" "} 
          </label>
          <label>
            <input
              type="radio"
              id="genderRadio"
              value="female"
              name="Female"
              onChange={handleInputGender}
            />
            {" "} Female {" "} {" "} 
          </label>
          <br />
          <br />
          <label style={{ textAlign: "left" }}>Employed: </label>
          <br />
          <label>
            <input
              type="radio"
              id="empRadio"
              value="employed"
              name="employed"
              onChange={handleEmployedValue}
            />
            Yes{" "}
          </label>
          <label>
            <input
              type="radio"
              id="empRadio"
              value="not employed"
              name="employed"
              onChange={handleEmployedValue}
            />
            No{" "}
          </label>
          <br />
          <br />
          {empDiv ? (
            <label>
              Company name:
              <input
                type="text"
                name="companyName"
                className="form-control"
                onChange={handleCompanyName}
              />
            </label>
          ) : (
            <div></div>
          )}
          <br/>
          <br/>
          <button className="btn btn-success " onClick={submitData}>
            Submit Information
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
