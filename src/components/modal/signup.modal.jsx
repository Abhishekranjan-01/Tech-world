import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import SignupForm from "../form/Signup.form";

export default function SignupFormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Signup
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "div",
        }}
      >
        <DialogContent>
          <SignupForm
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
          />
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Subscribe</Button>
        </DialogActions> */}
      </Dialog>
    </React.Fragment>
  );
}
