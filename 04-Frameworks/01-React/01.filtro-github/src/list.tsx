import React from "react";
import { useDebounce } from "use-debounce";
import { Link, generatePath } from "react-router-dom";
import { OrganizationFilter } from "./organizationFilter";
import {
  withStyles,
  Theme,
  createStyles,
  makeStyles,
} from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from "@material-ui/core/TablePagination";

const StyledTableCell = withStyles((theme: Theme) =>
  createStyles({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  })
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
  createStyles({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.action.hover,
      },
    },
  })
)(TableRow);

const useStyles = makeStyles({
  container: {
    padding: 10,
    margin: 0,
    boxSizing: "border-box",
  },
  filter: {
    marginBottom: 20,
  },
  table: {
    minWidth: 700,
  },
});

interface MemberEntity {
  id: string;
  login: string;
  avatar_url: string;
}

const useGithubMembers = (organization: string) => {
  const [members, setMembers] = React.useState<MemberEntity[]>([]);
  const [debouncedOrganization] = useDebounce(organization, 500);

  const loadMembers = async () => {
    const response = await fetch(
      `https://api.github.com/orgs/${debouncedOrganization}/members?per_page=100`
    );
    const json = await response.json();
    setMembers(json);
  };

  return {
    members,
    debouncedOrganization,
    loadMembers,
  };
};

export const ListPage: React.FC = () => {
  const [organization, setOrganization] = React.useState("lemoncode");
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const { members, debouncedOrganization, loadMembers } = useGithubMembers(
    organization
  );

  React.useEffect(() => {
    (async () => await loadMembers())();
  }, [debouncedOrganization]);

  return (
    <div className={classes.container}>
      <h2>Members of {debouncedOrganization}</h2>
      <div className={classes.filter}>
        <OrganizationFilter
          organization={organization}
          onOrganizationChange={setOrganization}
        />
      </div>
      <TableContainer component={Paper}>
        <Table className={classes.table}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Avatar</StyledTableCell>
              <StyledTableCell>Id</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {!!members.map &&
              members
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((member) => (
                  <StyledTableRow key={member.id}>
                    <StyledTableCell component="th" scope="row">
                      <img src={member.avatar_url} style={{ width: "5rem" }} />
                    </StyledTableCell>
                    <StyledTableCell>{member.id}</StyledTableCell>
                    <StyledTableCell align="left">
                      <Link
                        to={generatePath("/detail/:id", { id: member.login })}
                      >
                        {member.login}
                      </Link>
                    </StyledTableCell>
                  </StyledTableRow>
                ))}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={members.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </div>
  );
};
