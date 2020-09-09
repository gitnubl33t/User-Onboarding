import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
  //include export default in the function and it doesn't have to be written at the bottom of the page.

  //managing state for our form inputs

  const [formState, setFormState] = useState({
    name: "",
  });

  //onSubmit function
  const formSubmit = (e) => {
    e.preventDefault();
    console.log("form submitted!");
  };

  //onChange function
  const inputChange = (e) => {
    console.log("input changed!", e.target.value);
    setFormState({ name: e.target.value });
  };
}
