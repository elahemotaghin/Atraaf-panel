import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {Box, TextField, InputLabel} from '@mui/material';
import {toast} from 'react-toastify';

type props = {
    handleClose: () => void,
    onEnvCreate: (name:string) => void
}

const AddEnvDialog = ({handleClose, onEnvCreate}:props) =>{
    const [name, setName] = React.useState<string>('');
    const [helperText, setHelperText] = React.useState('');
    const [description, setDescription] = React.useState<string>('');

    const onSubmit = () =>{
        if(name===''){
            toast.error('نام محیط ضروری است.',
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
        }
        else{
            onEnvCreate(name);
            handleClose();
        }
    }

    const nameValidation = (event:any) => {
        const input = event.target.value;
        if(input.length == 0){
            setHelperText('این فیلد ضروری است.');
            setName('');
        }
        else if(input.length<3){
            setHelperText('نام نباید کمتر از 3 کاراکتر باشد.');
            setName('');
        }
        else if(input.length>32){
            setHelperText('نام نباید بیشتر از 32 کاراکتر باشد.');
            setName('');
        }
        else{
            setHelperText('');
            setName(input);
        }
    }

    return(
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>افزودن محیط</DialogTitle>
            <DialogContent sx={{width:'400px'}}>
                <DialogContentText>
                    محیط مورد نظر خود را ایجاد كنيد.
                </DialogContentText>
                <Box component={'div'} className='fleid-box'>
                    <InputLabel htmlFor="app-name-field">نام:</InputLabel>
                    <TextField
                    sx={{width: '100%'}} 
                    variant='standard'
                    id="app-name-field"
                    helperText={helperText}
                    onChange={nameValidation}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button  color='success' variant="contained" onClick={onSubmit} disableElevation>افزودن</Button>
                <Button color='error' variant="outlined" onClick={handleClose} disableElevation>بازگشت</Button>
            </DialogActions>
        </Dialog>
    );
}
export default AddEnvDialog;