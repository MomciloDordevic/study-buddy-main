import React from "react";

const FormContext = React.createContext({
  username: "",
  studyplan: "",
  timer: [],
  studybuddy: {},
  clearForm: () => {},
});

export default FormContext;
