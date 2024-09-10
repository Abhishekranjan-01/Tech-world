import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { DialogActions } from "@mui/material";
import LoginForm from "../form/Login.form";
import useUser from "../../hooks/user.hook";
import userLogin from "../../api/userLogin.api";

export default function LoginFormDialog({ notify }) {
  const [open, setOpen] = React.useState(false);
  const { data, error, setUserCredentials } = useUser({
    queryKey: "loginUser",
    apiFunction: userLogin,
  });

  const handleClickOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  if (data) {
    notify({
      label: `Successfully Loggedin!!`,
      type: "success",
      autoClose: 1800,
    });
    // setTimeout(() => {
    //   navigate("/blogs");
    //   handleClose();
    // }, 1800);
  }

  if (error) {
    notify({ label: `${error.message}`, type: "error" });
    handleClose();
  }
  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Login
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "div",
        }}
      >
        <DialogContent>
          <LoginForm
            open={open}
            setOpen={setOpen}
            handleClickOpen={handleClickOpen}
            handleClose={handleClose}
            notify={notify}
            setUserCredentials={setUserCredentials}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Close</Button>
          {/* <Button type="submit">Subscribe</Button> */}
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
