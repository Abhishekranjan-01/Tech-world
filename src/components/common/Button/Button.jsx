import * as React from "react";
import Button from "@mui/material/Button";

export function SubmitButton({ label, variant = "outlined", ...props }) {
  return (
    <Button type="submit" variant={variant} {...props}>
      {label}
    </Button>
  );
}
