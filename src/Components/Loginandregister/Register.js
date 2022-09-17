import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Register({open,setOpen,submitHandler}) {

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} maxWidth="xs" fullWidth>
        <DialogTitle>Register</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            id="name"
            label="User Name"
            type="text"
            fullWidth
            variant="standard"
            autoComplete='off'
          />
          <TextField
            id="email"
            label="Email Address"
            type="email"
            fullWidth
            variant="standard"
            autoComplete='off'
          />
          <TextField
            id="password"
            label="Password"
            type="password"
            fullWidth
            variant="standard"
          />
          <TextField
            id="cpassword"
            label="Confirm Password"
            type="password"
            fullWidth
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} variant="contained" color="error">Cancel</Button>
          <Button onClick={submitHandler} variant="outlined" color="primary">Register</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
