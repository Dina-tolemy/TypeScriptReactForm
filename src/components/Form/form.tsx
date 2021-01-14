import * as React from "react";
import RadioButton from "../RadioButton/radioButton";
import SubmitButton from "../SubmitButton/submitButton";
import { useState, useEffect } from "react";
import * as Styled from "../style";
import { useForm } from "react-hook-form";

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
  const [formGender, setFormGender] = useState();

  const submitData = () => {
    alert(
      "may name is " +
        formName +
        "I am a : " +
        formGender +
        " and my email is : " +
        formEmail +
        " and this are my phone numbers: " +
        formPhone
    );
  };

  function handleInputName(event) {
    const { name, value } = event.target;
    setFormName(value);
  }
  function handleInputEmail(event) {
    const { name, value } = event.target;
    setFormEmail(value);
  }
  function handleInputPhone(event) {
    const { name, value } = event.target;
    setFormPhone(value);
  }

  function handleInputGender(event) {
    const { name, value } = event.target;
    setFormGender(value);
  }

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

          <label>Phone: </label>
          <br />
            <input
              type="phone"
              className="form-control"
              id="phone"
              name="phone"
              onChange={handleInputPhone}
            ></input>
            <button className="btn btn-success ">+</button>
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
            Male:{" "}
          </label>
          <label>
            <input
              type="radio"
              id="genderRadio"
              value="female"
              name="Femal"
              onChange={handleInputGender}
            />
            Female:{" "}
          </label>
          <br />
          <br />
          <button className="btn btn-success " onClick={submitData}>
            Submit Information
          </button>
        </div>
      </form>
    </div>
  );
};
export default Form;
