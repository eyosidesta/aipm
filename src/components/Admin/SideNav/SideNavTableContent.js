import React from "react";
import {
  TableRow,
  TableCell,
  Typograhy,
  Paper,
  makeStyles,
  Typography,
} from "@material-ui/core";
import {
  DEEP_BLUE_COLOR,
  FOOTER_COLOR,
  WHITE_COLOR,
} from "../../../utils/constants/colors";
import { useLocation } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tableCell: {
    textAlign: "center",
    cursor: "pointer",
  },
}));

const SideNavTableContent = ({ data }) => {
  const location = useLocation();
  const classes = useStyles();
  const handleClick = (item) => {
    console.log("id is: ", item.id);
    console.log("title", item.title);
  };
  return (
    <TableRow>
      <TableCell
        className={classes.tableCell}
        style={{
          backgroundColor:
            data.url === location.pathname ? DEEP_BLUE_COLOR : WHITE_COLOR,
          color: data.url === location.pathname ? WHITE_COLOR : DEEP_BLUE_COLOR,
        }}
        onClick={() => handleClick(data)}
      >
        <Typography variant="h6">
          {data.title}
        </Typography>
      </TableCell>
    </TableRow>
  );
};

export default SideNavTableContent;
