import React from "react";
import { Link, useParams } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

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
  details: {
    boxSizing: "border-box",
    padding: 10,
  },
});

interface MemberDetailEntity {
  id: string;
  login: string;
  name: string;
  company: string;
  bio: string;
}

const createDefaultMemberDetail = () => ({
  id: "",
  login: "",
  name: "",
  company: "",
  bio: "",
});

export const DetailPage: React.FC = () => {
  const classes = useStyles();
  const [member, setMember] = React.useState<MemberDetailEntity>(
    createDefaultMemberDetail()
  );
  const { id } = useParams();
  const loadDetails = async () => {
    const response = await fetch(`https://api.github.com/users/${id}`);
    const json = await response.json();

    setMember(json);
  };

  React.useEffect(() => {
    (async () => await loadDetails())();
  }, []);

  return (
    <div className={classes.container}>
      <Card className={classes.details} variant="outlined">
        <h2>Details of {member.login}</h2>
        <p> id: {member.id}</p>
        <p> login: {member.login}</p>
        <p> name: {member.name}</p>
        <p> company: {member.company}</p>
        <p> bio: {member.bio}</p>
        <Link to="/list">Back to member list</Link>
      </Card>
    </div>
  );
};
