import React from "react";

export const FormBtn = props => (
  <button {...props} style={{ marginBottom: 10 }}>
    {props.children}
  </button>
);
