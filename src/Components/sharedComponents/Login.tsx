import React from 'react';
import useLogin from "../../services/Applications/useLogin";
import {Button, Typography, Box, InputLabel, TextField, Grid, Card, CardContent} from "@mui/material";
import { useNavigate } from 'react-router-dom';
import {isAuth} from './Utils';

type props = {
    setAuth : (auth:boolean)=>void
}

const Login = ({setAuth}:props) =>{
    //hook
    const loginHook = useLogin();
    let navigate = useNavigate();
    //state
    const [username, setUsername] = React.useState<string>("");
    const [password, setPassword] = React.useState<string>("");
    
    const onSubmit = async(username:string, password:string) =>{
        try{
            await loginHook.mutateAsync({
                username: username,
                password: password,
                podToken: 'abc'
            })
            await setAuth(isAuth());
            await navigate('/applications')
        }
        catch{}
        
    }
    return (
        <Grid container sx={{backgroundColor: 'defaultBack.light', justifyContent: 'center', alignItems: 'center', height: '100vh'}}>
            <Grid item md={4}>
            <Card component={"form"} sx={{padding: 3}}>
                <Box sx={{display: 'flex', justifyContent: 'center'}}>
                    <Typography color= 'primary' variant='h1' >ورود</Typography>
                </Box>
                <CardContent>
                <Box component={'div'} className='fleid-box'>
                    <InputLabel htmlFor="app-username-field">نام کاربری:</InputLabel>
                    <TextField
                    sx={{width: '100%'}} 
                    variant='standard'
                    id="app-username-field"
                    value={username}
                    onChange={(e)=>setUsername(e.target.value)}
                    />
                </Box>
                <Box component={'div'} className='fleid-box'>
                    <InputLabel htmlFor="app-username-field">رمز عبور:</InputLabel>
                    <TextField
                    sx={{width: '100%'}} 
                    variant='standard'
                    id="app-username-field"
                    value={password}
                    onChange={(e)=>setPassword(e.target.value)}
                    />
                </Box>
                <Box component={'div'} sx={{display:'flex', justifyContent:'center', marginTop: '24px'}}>
                    <Button variant='contained' onClick={()=>onSubmit(username, password)}>ورود</Button>
                </Box>
                </CardContent>
            </Card>
            </Grid>
        </Grid>
    );
}
export default Login;