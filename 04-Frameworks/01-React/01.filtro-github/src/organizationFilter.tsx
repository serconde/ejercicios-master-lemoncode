import React from "react";
import { TextField } from "@material-ui/core";

interface Props {
  organization: string;
  onOrganizationChange: (organization: string) => void;
}

export const OrganizationFilter: React.FC<Props> = ({
  organization,
  onOrganizationChange,
}) => {
  return (
    <TextField
      name="organization"
      value={organization}
      onChange={(e) => onOrganizationChange(e.target.value)}
    />
  );
};
