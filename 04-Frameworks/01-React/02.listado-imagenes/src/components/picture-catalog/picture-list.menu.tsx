import React from "react";
import { css } from "emotion";
import { Link, useLocation } from "react-router-dom";
import { AppBar, withStyles } from "@material-ui/core";

interface PictureListMenuProps {
  pictureCategories: string[];
}

const StyledAppBar = withStyles({
  root: {
      background: "#d2a679",
      marginBottom: "20px",
  }
})(AppBar);

const navLink = css`
  box-sizing: border-box;
  padding: 6px 12px;
  margin-right: 0.5em;
  display: inline-block;
  color: #000;
  text-decoration: none;
  &:hover {
    text-decoration: none;
    color: #fff;
    background-color: #604020;
  }
`;

const navLinkActive = css`
  box-sizing: border-box;
  padding: 6px 12px;
  margin-right: 0.5em;
  display: inline-block;
  text-decoration: none;
  color: #fff;
  background-color: #604020;
`;

export const PictureListMenu: React.FC<PictureListMenuProps> = ({
  pictureCategories,
}) => {
  const { pathname } = useLocation();

  return (
    <StyledAppBar position="relative">
      <nav>
        {pictureCategories.map((pc) => (
          <Link
            key={pc}
            to={`/${pc}`}
            className={pc === pathname.substring(1) ? navLinkActive : navLink}
          >
            {pc}
          </Link>
        ))}
      </nav>
    </StyledAppBar>
  );
};
