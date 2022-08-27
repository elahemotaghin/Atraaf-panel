import React from 'react';
import IApplication from 'interfaces/Application';
import DeleteDialog from './DeleteDialog';
import {useNavigate} from 'react-router-dom';
import {toLocalDate, getDateTooltip} from '../sharedComponents/Utils';

import {Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TablePagination, Grid, IconButton} from '@mui/material';
import {Tooltip} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import MoreVertIcon from '@mui/icons-material/MoreVert';

type props = {
    applications: IApplication[],
    onAppDelete: (id:number)=>void
}

const ApplicationTable = ({applications, onAppDelete}:props) =>{
    let navigate = useNavigate();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);
    const [openDeleteDialog, setOpenDeleteDialog] = React.useState(false);
    const [selectedAppId, setSelectedAppId] = React.useState<number>(0);


    //table paging function
    const handleChangePage = (event:any, newPage:number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event:any) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    //delete app
    const deleteClicked = (appId:number) => {
        setOpenDeleteDialog(true);
        setSelectedAppId(appId);
    }

    const handleCloseDeleteDialog = (operation:string) =>{
        if(operation === 'delete'){
            onAppDelete(selectedAppId);
        }
        setOpenDeleteDialog(false);
    }

    return (
    <Grid container justifyContent='center'>
        <Grid item md={12}>
        <TableContainer>
            <Table aria-label="application table">
                <TableHead>
                    <TableRow>
                        <TableCell align='right'>نام</TableCell>
                        <TableCell align='right'>شناسه</TableCell>
                        <TableCell align='right'>مشخصات</TableCell>
                        <TableCell align='right'>تاریخ ایجاد</TableCell>
                        <TableCell align='right'>آخرین بروزرسانی</TableCell>
                        <TableCell align='right'>عمليات</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {applications
                        ?.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                        ?.map((app) => {
                            return (
                            <TableRow
                            key={app?.id}
                            hover>  
                                <TableCell align='right' onClick={()=>navigate(`../applications/${app.id}`, { replace: true })}>
                                    {app?.name}
                                </TableCell>
                                <TableCell align='right' onClick={()=>navigate(`../applications/${app.id}`, { replace: true })}>
                                    {app?.id}
                                </TableCell>
                                <TableCell align='right' onClick={()=>navigate(`../applications/${app.id}`, { replace: true })}>
                                    {app?.description}...
                                </TableCell>
                                <Tooltip title={getDateTooltip(app?.created)}>
                                    <TableCell align='right' onClick={()=>navigate(`../applications/${app.id}`, { replace: true })}>
                                        {toLocalDate(app?.created).toString()}
                                    </TableCell>
                                </Tooltip>
                                <Tooltip title={getDateTooltip(app?.updated)}>
                                    <TableCell align='right' onClick={()=>navigate(`../applications/${app.id}`, { replace: true })}>
                                        {toLocalDate(app?.updated).toString()}
                                    </TableCell>
                                </Tooltip>
                                <TableCell align='center'>
                                    <Box sx={{display:'flex'}}>
                                        <IconButton onClick={()=>deleteClicked(app?.id)}>
                                            <DeleteIcon fontSize='small'/>
                                        </IconButton>
                                        <IconButton>
                                            <MoreVertIcon fontSize='small'/>
                                        </IconButton>
                                    </Box>
                                </TableCell>
                            </TableRow>
                            );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
        <Box sx={{display: 'flex', alignItems: 'center'}} color='text.secondary'>
            <TablePagination
                rowsPerPageOptions={[5]}
                component="div"
                count={applications?.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
            {applications?.length} / {(page * rowsPerPage + rowsPerPage) > applications?.length ? applications?.length : page * rowsPerPage + rowsPerPage} - {page * rowsPerPage+1}
        </Box>
        </Grid>
        {openDeleteDialog ?
        <DeleteDialog handleClose={($event: string) => {handleCloseDeleteDialog($event)}} massage={` آیا از حذف برنامه با شناسه${selectedAppId} مطمئن هستید؟`}/>
        : null} 
    </Grid>
    );
}
export default ApplicationTable;