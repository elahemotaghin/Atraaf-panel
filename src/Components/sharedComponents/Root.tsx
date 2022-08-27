import React, { useEffect } from "react";
import {Route, Routes, useLocation, Navigate} from "react-router-dom";

import defaultTheme from "../../assets/themes/defultTheme";
import { isAuth } from "./Utils";
import Header from "./Header";
import Login from "./Login"
import ApplicationRoot from "../applications/index";
import AppView from "../applications/AppView";
import NoMatch from "./NoMatch";
import '../../assets/themes/customStyle.css';

import {Box, Toolbar, CssBaseline} from '@mui/material';
import {ThemeProvider} from '@mui/material/styles';


const Root = () =>{
    const drawerWidth = React.useState(200);
    const [auth, setAuth] = React.useState(isAuth());

    return(
        <ThemeProvider theme={defaultTheme}>
            <Box sx={{ display: 'flex'}}>
                <CssBaseline />
                {
                    auth?
                    <>
                        <Header setAuth={setAuth}/>
                    </>
                    :
                    null
                }
                <Box
                    component="main"
                    sx={{ flexGrow: 1, bgcolor: 'background.default' }}
                >
                    {auth? <Toolbar /> : null}
                    <Routes>
                        <Route path="/login" element={<Login setAuth={setAuth}/>}/>
                        <Route
                            path="/applications"
                            element={
                            <RequireAuth>
                                <ApplicationRoot/>
                            </RequireAuth>
                        }/>
                        <Route
                            path="/applications/:appId"
                            element={
                            <RequireAuth>
                                <AppView/>
                            </RequireAuth>
                        }/>
                    </Routes>
                </Box>
            </Box>
        </ThemeProvider>
    );
};
export default Root;

function RequireAuth({ children }: { children: JSX.Element }) {
    let location = useLocation();
  
    if (!isAuth()) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
    return children;
  }