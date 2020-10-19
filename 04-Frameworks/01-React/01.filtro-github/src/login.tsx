import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardContent from "@material-ui/core/CardContent";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  container: {
    display: "grid",
    gridTemplateColumns: "1fr",
    alignItems: "center",
    marginTop: "2rem",
    ["@media (min-width: 800px)"]: {
      justifyItems: "center",
    },
  },
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },
});

export const LoginPage: React.FC = () => {
  const classes = useStyles();
  const history = useHistory();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleNavigation = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (username === "admin" && password === "test") {
      history.push("/list");
    } else {
      alert("User / password not valid, psst... admin / test");
    }
  };

  return (
    <div className={classes.container}>
      <Card>
        <CardHeader title="Hello from the login page" />
        <CardContent>
          <form onSubmit={handleNavigation}>
            <div className={classes.form}>
              <TextField
                label="Username"
                margin="normal"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <TextField
                label="Password"
                type="password"
                margin="normal"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <Button type="submit" variant="contained" color="primary">
                Login
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};
