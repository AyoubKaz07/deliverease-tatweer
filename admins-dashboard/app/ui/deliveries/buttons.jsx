"use client";
import IconButton from "@mui/material/IconButton";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import CancelButton from "../Buttons/cancel";
import ConfirmButton from "../Buttons/confirm";
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
import { useState } from "react";

export function UpdateDelivery({ id }) {
  return (
    <IconButton
      aria-label="delete"
      size="large"
      sx={{color:"black"}}
    >
      
   <SyncProblemIcon />
    </IconButton>
  );
}

export function DeleteDelivery({ id }) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        onClick={handleClickOpen}
        style={{ color: "rgba(102, 112, 133, 1)" }}
        aria-label="edite"
        size="large"
      >
        <DeleteOutlineIcon style={{ color: "black" }} />
      </IconButton>
    { open &&  <Dialog
        maxWidth="xs"
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleClose} />
          <ConfirmButton onClick={handleClose} autoFocus />
        </DialogActions>
      </Dialog>}
    </>
  );
}

export function DeleteAllDeliveries(item) {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <IconButton
        {...item}
        onClick={handleClickOpen}
        sx={{
          color: "black",
          "&.Mui-disabled": {
            color: "",
          },
        }}
        aria-label="delete"
        size="large"
      >
        <DeleteOutlineIcon />
      </IconButton>
     {open &&  <Dialog
        maxWidth="xs"
        fullWidth
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"Are you sure?"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <CancelButton onClick={handleClose} />
          <ConfirmButton onClick={handleClose} autoFocus />
        </DialogActions>
      </Dialog>}
    </>
  );
}
