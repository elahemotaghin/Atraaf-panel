import React, { useEffect } from 'react';
import './assets/style/style.css'
import ApplicationTable from './ApplicationTable';
import AddApplicationDialog from 'Components/applications/AddApplicationDialog';
import SnackbarMassage from '../sharedComponents/SnakebarMassage';
import useGetAllApplications from '../../services/Applications/useGetAllApplicaitions'
import useDeletedApplication from 'services/Applications/useDeleteApplication';
import useCreateApplication from 'services/Applications/useCreateAppliaction';

import {Button, Typography, Box, CircularProgress, InputAdornment, TextField} from "@mui/material";
import AddIcon from '@mui/icons-material/Add';

const ApplicationRoot = () => {
    //states
    const [openAddDialog, setOpenAddDialog] = React.useState(false);
    const [openSnack, setOpenSnake] = React.useState(false);
    
    //hooks
    const getAppHook = useGetAllApplications();
    const deleteAppHook = useDeletedApplication();
    const createAppHook = useCreateApplication();

    const onAppDelete = async (id:number) => {
        try {
            await deleteAppHook.mutateAsync({
                id:id
            })
            if(deleteAppHook.isSuccess)
                setOpenSnake(true);
            await getAppHook.refetch()
        }
       catch {}
    }

    const onAppCreate = async (name:string, description:string) => {
        try {
            await createAppHook.mutateAsync({
                name: name,
                description: description
            })
            await getAppHook.refetch()
        }
       catch {}
    }
    
    return (
        <Box padding={5}>
            <Box className='application-root-header-box'>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Typography variant='h1' color="primary.dark">ليست برنامه ها</Typography>
                    <Button variant='contained' size="small" id="addBtn" onClick={()=>setOpenAddDialog(true)} sx={{mx:2}}>
                        <AddIcon fontSize='small'/>
                         افزودن برنامه
                    </Button>
                </Box>
            </Box>
            <Box marginTop={5}>
                {getAppHook.isLoading?
                <Box sx={{display:'flex', justifyContent:'center', alignItems: 'center', height: '50vh'}}><CircularProgress/></Box>:
                <ApplicationTable applications={getAppHook.data!} onAppDelete={onAppDelete}/>
                }
            </Box>
            {openSnack? <SnackbarMassage handleOpenSnake={setOpenSnake} massage='حذف با موفقیت انجام شد.'/> : null}
            {openAddDialog? <AddApplicationDialog handleClose={()=>setOpenAddDialog(false)} onAppCreate={onAppCreate}/> : null}
        </Box>
    );
}
export default ApplicationRoot;