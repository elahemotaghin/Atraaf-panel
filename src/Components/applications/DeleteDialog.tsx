import React from "react";
import IApplication from "../../interfaces/Application";
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';

type props = {
    handleClose: any,
    massage: string
}

const DeleteDialog = ({handleClose, massage}:props) => {   
    return(
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>حذف برنامه</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {massage}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button onClick={() => handleClose('delete')} color='success' variant="contained" disableElevation>حذف</Button>
                <Button onClick={() => handleClose('close')} color='error' variant="outlined" disableElevation>بازگشت</Button>
            </DialogActions>
        </Dialog>
    );
}
export default DeleteDialog;