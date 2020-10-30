import React from "react";
import { withFormik, Field } from "formik";
import { validUserSchema } from "./validation";
const fields = ["email", "name", "password"];

const InnerForm = (props: any) => {
  const {
    values,
    touched,
    errors,
    isSubmitting,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit}>
      {fields.map((field) => {
        let error = Boolean(errors[field] && touched[field]);

        return (
          <div key={field}>
            {/* <div key={field} error={error}> */}
            <label>{field}</label>
            <input
              type={field}
              onChange={handleChange}
              onBlur={handleBlur}
              value={values[field]}
              name={field}
              placeholder={field === "email" ? "Ex. johndoe@mail.com" : ""}
              spellCheck={false}
            />
            <div className="error">{errors[field]}</div>
          </div>
        );
      })}
      <button type="submit" disabled={isSubmitting}>
        {/* {isSubmitting ? <Svg name="logo" /> : "Sign up"} */}
        submit
      </button>
    </form>
  );
};

const SignupForm = withFormik({
  mapPropsToValues: () => ({ email: "", name: "", password: "" }),
  validationSchema: validUserSchema,
  handleSubmit: async (values, { props, setErrors, setSubmitting }: any) => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const errors = await props.submit(values);
    if (errors) {
      setErrors(errors);
    } else {
      props.onFinish();
    }
    setSubmitting(false);
  },

  displayName: "SignupForm",
})(InnerForm);

export default SignupForm;
