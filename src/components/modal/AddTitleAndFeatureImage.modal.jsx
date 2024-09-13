import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Formik from "formik";
import { FileUploadButton } from "../common/Button/Button";
import { handleClickOpen } from "../../utilities/modalUtilities";
import { handleClose } from "../../utilities/modalUtilities";

export default function AddTitleAndFeatureImage() {
  const [open, setOpen] = React.useState(false);

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        ADD TITLE AND FETATURE IMAGE
      </Button>
      <Dialog
        open={open}
        onClose={() => handleClose({ setOpen })}
        PaperProps={{
          component: "div",
        }}
      >
        <DialogTitle>Add blog Overview</DialogTitle>
        <DialogContent className="flex flex-col gap-4">
          <Formik>
            {(formik) => (
              <div className="flex flex-col w-full items-center">
                <h2>Upload Feature Image</h2>
                <FileUploadButton
                  name="featureImage"
                  label="Feature Image"
                  role="button"
                  accept="image/*"
                />
              </div>
            )}
          </Formik>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => handleClose({ setOpen })}>Cancel</Button>
          <Button type="submit">Publish</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
