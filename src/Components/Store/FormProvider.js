import FormContext from "./FormContext";

const FormProvider = (props) => {
  const formContext = {
    username: "",
    url: "",
    timer: [],
    studybuddy: {},
    clearForm: () => {},
  };

  return (
    <FormContext.Provider value={formContext}>
      {props.children}
    </FormContext.Provider>
  );
};

export default FormProvider;
