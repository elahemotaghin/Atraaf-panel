import React from 'react';
import {IconButton, Snackbar} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
type props = {
  handleOpenSnake: any,
  massage: string
}

const SnackbarMassage = ({handleOpenSnake, massage}: props) => {
    const action = (
        <React.Fragment>
          <IconButton
            size="small"
            aria-label="close"
            color="inherit"
            onClick={()=>handleOpenSnake(false)}
            sx={{margin: '0px 15px'}}
          >
            <CloseIcon fontSize="small" />
          </IconButton>
        </React.Fragment>
    );

    return(
        <Snackbar
            open={true}
            autoHideDuration={3000}
            onClose={()=>handleOpenSnake(false)}
            message= {massage}
            action={action}
        />
    );
}
export default SnackbarMassage;