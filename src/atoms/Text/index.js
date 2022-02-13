import React from "react";
import { Typography } from "@material-ui/core";



export const Bold = ({ children, style, color = "white" }) => {
  return (
    <Typography   style={{ fontWeight: "bold", color, ...style }}>
      {children}
    </Typography>
  );
};



export const H4Bold = ({ children, style, color = "white" }) => {
  return (
    <Typography variant="h4" style={{ fontWeight: "bold", color, ...style }}>
      {children}
    </Typography>
  );
};

export const H4 = ({ children, style, color = "white" }) => {
  return (
    <Typography variant="h4" style={{ color, ...style }}>
      {children}
    </Typography>
  );
};

export const H5 = ({ children, style, color = "white" }) => {
    return (
      <Typography variant="h5" style={{ color, ...style }}>
        {children}
      </Typography>
    );
  };
  
  export const H6 = ({ children, style, color = "white" }) => {
    return (
      <Typography variant="h6" style={{ color, ...style }}>
        {children}
      </Typography>
    );
  };
  