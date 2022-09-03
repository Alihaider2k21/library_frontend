import * as React from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import { getByID, postBooks } from "../../APIs/callBooks";
import { Autocomplete } from "@mui/material";
import StudentTable from "../tables/studentTables";
import { students } from "../../APIs/callStudents";

export default function UpdateBooksForm(props) {
  const [student, setStudent] = React.useState([]);
  const getStudents = async () => {
    let response = await students();
    setStudent(response.data);
  };
  const [id, setId] = React.useState();
  const [bookName, setBookName] = React.useState("");
  const [author, setAuthor] = React.useState("");
  const [dateOfBorrow, setDateOfBorrow] = React.useState("");
  const [dateOfReturn, setBDateOfReturn] = React.useState("");
  const [borrowedBy, setBorrowedBy] = React.useState("");
  const [borrowedName, setBorrowedName] = React.useState("");

  const populateForm = async () => {
    try {
      const bookId = props.id;
      if (bookId === "new") return;
      const { data } = await getByID(bookId);
      setBookName(data[0].bookName);
      setAuthor(data[0].author);
      setDateOfBorrow(data[0].dateOfBorrow);
      setBDateOfReturn(data[0].dateOfReturn);
      setBorrowedBy(data[0].borrowedBy);
      setId(data[0].id);
      console.log(data[0]);
    } catch (ex) {}
  };
  const getStudentName = () => {
    const id = student.filter((stu) => stu.id === borrowedBy);
    setBorrowedName(id[0].firstName);
  };
  React.useEffect(() => {
    getStudents();
    populateForm();
    // getStudentName();
  }, []);

  const [open, setOpen] = React.useState(false);

  const getidofstudent = (e) => {
    const borrow = e.target.value;
    const id = student.filter(
      (stu) => stu.firstName.toLowerCase() === borrow.toLowerCase()
    );
    setBorrowedBy(id[0].id);
  };
  const doSubmit = async () => {
    const data = {
      id,
      bookName,
      author,
      borrowedBy,
      dateOfBorrow,
      dateOfReturn,
    };
    await postBooks(data);
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
        Enter Book Detail
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="bookName"
            type="text"
            value={bookName}
            onChange={(e) => setBookName(e.target.value)}
            fullWidth
            variant="standard"
          />
          <TextField
            margin="dense"
            id="author"
            type="text"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            fullWidth
            variant="standard"
          />
          <Autocomplete
            margin="dense"
            id="borrowBy"
            variant="standard"
            options={student}
            getOptionLabel={(option) => option.firstName}
            renderInput={(params) => (
              <TextField
                {...params}
                inputProps={{
                  ...params.inputProps,
                }}
              />
            )}
            onSelect={(e) => getidofstudent(e)}
            // onChange={(e) => getidofstudent(e)}
          />
          <h8 style={{ fontSize: "14px", color: "#d6cdcd" }}>
            {" "}
            Date Of Borrow
          </h8>
          <TextField
            margin="dense"
            id="dateOfBorrow"
            // ="Date Of Borrow"
            value={dateOfBorrow}
            onChange={(e) => setDateOfBorrow(e.target.value)}
            type="date"
            fullWidth
            variant="standard"
          />
          <h8 style={{ fontSize: "14px", color: "#d6cdcd" }}>
            {" "}
            Date Of Return
          </h8>{" "}
          <TextField
            margin="dense"
            id="dateOfReturn"
            value={dateOfReturn}
            onChange={(e) => setBDateOfReturn(e.target.value)}
            // label="Date Of Return"
            type="date"
            fullWidth
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
