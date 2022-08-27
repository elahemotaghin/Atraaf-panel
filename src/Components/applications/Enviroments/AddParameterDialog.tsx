import React from "react";
import IEnviroment from '../../../interfaces/Environment';
import {toast} from 'react-toastify';
import {Dialog, DialogActions, DialogTitle, DialogContent, DialogContentText} from '@mui/material';
import {Box, TextField, InputLabel, Select, MenuItem, Button} from '@mui/material';

type props = {
    enviroments: IEnviroment[],
    handleClose: any,
    onParameterCreate: (key: string[], value: string[], global: boolean[], envId: number) => void
}
const AddParameterDialog = ({handleClose, enviroments, onParameterCreate}: props) => {
    const [key, setKey] = React.useState<string>("");
    const [value, setValue] = React.useState<string>("");
    const [env, setEnv] = React.useState<string>("global");

    const getEnvId = (name: string) => {
        let enviroment = enviroments.filter((enviroment) => {
            return enviroment.name === name;
        })
        return enviroment[0].id;
    }

    const onSubmit = () =>{
        if(key===''){
            toast.error('نام پارامتر ضروری است.',
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
        }
        else if(value===''){
            toast.error('مقدار پارامتر ضروری است.',
            {
                position: toast.POSITION.TOP_RIGHT,
                autoClose: 2000
            });
        }
        else{
            if(env === 'global')
                onParameterCreate([key], [value], [true], enviroments[0].id);
            else
                onParameterCreate([key], [value], [false], getEnvId(env));
            handleClose();
        }
        

    }

    return(
        <>
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle>افزودن پارامتر</DialogTitle>
            <DialogContent sx={{width:'400px'}}>
                <DialogContentText>
                    پارامتر مورد نظر خود را ایجاد كنيد.
                </DialogContentText>
                <Box component={'div'} className='fleid-box'>
                    <InputLabel htmlFor="app-name-field">محیط:</InputLabel>
                    <Select
                        value={env}
                        onChange={(e)=>setEnv(e.target.value)}
                        displayEmpty
                        variant="standard"
                        size="small"
                        sx={{width: '100%'}}
                    >
                        <MenuItem value='global'>global</MenuItem>
                        {enviroments.map((item, index) => {
                            return <MenuItem key={index} value={item.name}>{item.name}</MenuItem>;
                        })}
                    </Select>
                </Box>
                <Box component={'div'} className='fleid-box'>
                    <InputLabel htmlFor="app-name-field">نام:</InputLabel>
                    <TextField
                    sx={{width: '100%'}} 
                    variant='standard'
                    id="app-name-field"
                    value={key}
                    onChange={(e)=>setKey(e.target.value)}
                    />
                </Box>
                <Box component={'div'} className='fleid-box'>
                    <InputLabel htmlFor="app-name-field">مقدار:</InputLabel>
                    <TextField
                    sx={{width: '100%'}} 
                    variant='standard'
                    id="app-name-field"
                    value={value}
                    onChange={(e)=>setValue(e.target.value)}
                    />
                </Box>
            </DialogContent>
            <DialogActions>
                <Button  color='success' variant="contained" onClick={onSubmit} disableElevation>افزودن</Button>
                <Button color='error' variant="outlined" onClick={handleClose} disableElevation>بازگشت</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}
export default AddParameterDialog;