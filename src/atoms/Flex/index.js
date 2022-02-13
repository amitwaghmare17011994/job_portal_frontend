import React from "react";
import { useStyles } from "./style";

function Flex(props) {
  const {
    children,
    flex,
    direction = "row",
    top = 0,
    bottom = 0,
    right = 0,
    left = 0,
    style = {},
    onClick,
  } = props;
  console.log();
  const classes = useStyles();
  return (
    <div
      className={classes.container}
      style={{
        flex: flex,
        flexDirection: direction,
        marginTop: top,
        marginLeft: left,
        marginRight: right,
        marginBottom: bottom,
        ...style,
      }}
      onClick={onClick}
    >
      {children}
    </div>
  );
}

export default Flex;
