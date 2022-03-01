import FormContext from "./FormContext";

const FormProvider = (props) => {
  const formContext = {
    username: "",
    studyplan: "",
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
