import React from 'react';
import {Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle} from '@mui/material';
import {Box, TextField, InputLabel} from '@mui/material';
import {toast} from 'react-toastify';

type props = {
    handleClose: () => void,
    onAppCreate: (name:string, description: string) => void
}

const AddApplicationDialog = ({handleClose, onAppCreate}:props) =>{
    const [name, setName] = React.useState<string>('');
    const [helperText, setHelperText] = React.useState('');
    const [description, setDescription] = React.useState<string>('');

    const onSubmit = () =>{
        if(name===''){
            toast.error('نام برنامه ضروری است.',
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
        }
        else{
            onAppCreate(name, description);
            handleClose();
        }
    }

    const nameValidation = (event:any) => {
        const input = event.target.value;
        if(input.length == 0){
            setHelperText('این فیلد ضروری است.');
            setName('');
        }
        else if(input.length<5){
            setHelperText('نام نباید کمتر از 5 کاراکتر باشد.');
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
            <DialogTitle>افزودن برنامه</DialogTitle>
            <DialogContent sx={{width:'400px'}}>
                <DialogContentText>
                    برنامه مورد نظر خود را ایجاد كنيد.
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
                <Box component={'div'} className='fleid-box'>
                    <InputLabel htmlFor="app-description-field">مشخصات:</InputLabel>
                    <TextField sx={{width: '100%'}} 
                    variant='standard' 
                    id="app-description-field" 
                    multiline rows={3}
                    onChange={(e)=>setDescription(e.target.value)}
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
export default AddApplicationDialog;