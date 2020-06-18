import * as React from "react";
import { useState } from "react";
import {
  useLogin,
  TextInput,
  SimpleForm,
  useNotify,
  Notification,
} from "react-admin";
import { ThemeProvider, makeStyles } from "@material-ui/styles";
import Button from "@material-ui/core/Button";


const useStyles = makeStyles({
  root: {
    background: "#38CCFC",
    border: 0,
    borderRadius: 3,
    boxShadow: "0 3px 5px 2px rgba(255, 105, 135, .3)",
    color: "white",
    height: 48,
    padding: "0 30px",
    "&:hover": {
      background: "#38CCFC",
    },
  },
  form: {
    textAlign: "center",
  },
});

const validateUserLogin = (values) => {
  const errors = {};
  if (!values.user) {
    errors.user = ["User Name is required"];
  }
  if (!values.password) {
    errors.password = ["password is required"];
  } 
  return errors;
};
const MyLoginPage = ({ theme }) => {
  const [username, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const login = useLogin();
  const classes = useStyles();
  const notify = useNotify();
  const submit = (e) => {
    e.preventDefault();

    login({ username, password }).catch(({error}) => notify(error));
  };

  return (
    <ThemeProvider theme={theme}>
      <SimpleForm
        onSubmit={submit}
        toolbar={null}
        className={classes.form}
        validate={validateUserLogin}
      >
        <TextInput
          label="User Name"
          source="user"
          type="text"
          value={username}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextInput
          label="Password"
          source="password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button color="primary" type="submit" className={classes.root}>
          Sign In
        </Button>
        <Notification />
      </SimpleForm>
    </ThemeProvider>
  );
};

export default MyLoginPage;
