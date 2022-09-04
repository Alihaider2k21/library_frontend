import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { getStudentbyid, postStudent } from "../../APIs/callStudents";

export default function UpdateStudentForm(props) {
  const [id, setId] = React.useState();
  const [open, setOpen] = React.useState(false);
  const [firstName, setFirstName] = React.useState("");
  const [lastName, setLastName] = React.useState("");

  const populateForm = async () => {
    try {
      const studentId = props.id;
      if (studentId === "new") return;
      const { data } = await getStudentbyid(studentId);
      setFirstName(data[0].firstName);
      setLastName(data[0].lastName);
      setId(data[0].id);
      console.log(data[0]);
    } catch (ex) {}
  };

  React.useEffect(() => {
    populateForm();
  }, []);

  const doSubmit = async () => {
    const data = {
      id,
      firstName,
      lastName,
    };
    await postStudent(data);
    // props.history.push("/students");
    window.location.reload(true);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Click Here to Edit
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="firstName"
            type="text"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="lastName"
            type="text"
            fullWidth
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={doSubmit}>Done</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
