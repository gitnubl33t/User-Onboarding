import React, { useState } from "react";
import * as yup from "yup";
import axios from "axios";

export default function Form() {
  //include export default in the function and it doesn't have to be written at the bottom of the page.

  //managing state for our form inputs
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    password: "",
    tos: "",
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

  return (
    <form onSubmit={formSubmit}>
      <label htmlFor="name">
        Name:
        <input type="text" name="name" />
      </label>

      <label htmlFor="email">
        Email:
        <input type="email" name="email" />
      </label>

      <label htmlFor="password">
        Password:
        <input type="password" name="password" />
      </label>

      <label htmlFor="tos">
        Terms of Service:
        <input type="checkbox" name="tos" />
      </label>

      <button>Submit</button>
    </form>
  );
}
