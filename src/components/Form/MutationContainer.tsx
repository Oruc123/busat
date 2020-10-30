import { useMutation, gql } from "@apollo/client";
import { withRouter } from "react-router-dom";

const signupMutation = gql`
  mutation Mutation($email: String!, $name: String!, $password: Int!) {
    weddingDress(email: $email, size: $name, password: $password)
  }
`;

const SignupContainer = (props: any) => {
  const [mutate] = useMutation(signupMutation);

  async function submit(values: any) {
    const { data } = await mutate({
      variables: values,
    });
    if (data) {
      return data.signup;
    }
    return null;
  }

  function onFinish() {
    props.history.push("/");
  }

  return props.children({ submit, onFinish });
};

export default withRouter(SignupContainer);
