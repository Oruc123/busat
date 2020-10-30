import React from "react";
import SignupContainer from "./MutationContainer";
import SignupForm from "./Form";
export default () => (
  <SignupContainer>
    {({ submit, onFinish }) => (
      <SignupForm submit={submit} onFinish={onFinish} />
    )}
  </SignupContainer>
);
