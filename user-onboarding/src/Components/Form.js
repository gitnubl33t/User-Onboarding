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
    e.preventDefault(); //prevents page refresh on submit
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
        <input
          type="text"
          name="name"
          id="name"
          placeholder="enter your name"
          value={formState.name} //this allows the input to be controlled (by state)
          onChange={inputChange}
        />
      </label>

      <label htmlFor="email">
        Email:
        <input
          type="email"
          name="email"
          id="email"
          placeholder="enter your email"
          value={formState.email}
          onChange={inputChange}
        />
      </label>

      <label htmlFor="password">
        Password:
        <input
          type="password"
          name="password"
          id="password"
          placeholder="create a password"
          value={formState.password}
          onChange={inputChange}
        />
      </label>

      <label htmlFor="tos">
        Terms of Service:
        <input
          type="checkbox"
          name="tos"
          value={formState.tos}
          checked={true}
        />
      </label>

      <button>Submit</button>
    </form>
  );
}
