import * as React from "react";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import { ErrorMessage, useField } from "formik";

export function SubmitButton({ label, variant = "outlined", ...props }) {
  return (
    <Button type="submit" variant={variant} {...props}>
      {label}
    </Button>
  );
}


const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

export function FileUploadButton({
  label = "",
  role = "",
  variant = "contained",
  ...props
}) {
  const [field, meta] = useField(props);
  return (
    <div className="flex flex-col gap-2">
      <Button
        component="label"
        role={role}
        variant="contained"
        tabIndex={-1}
        startIcon={<CloudUploadIcon />}
        // {...props}
      >
        {label}
        <VisuallyHiddenInput type="file" {...field} {...props} />
      </Button>
      {meta.error && meta.touched && (
        <ErrorMessage name={field.name}>
          {(msg) => <p className="text-xs font-semibold text-red-600">{msg}</p>}
        </ErrorMessage>
      )}
    </div>
  );
}
