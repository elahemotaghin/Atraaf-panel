import React from "react";
import IEnviroment from "../../../interfaces/Environment";
import {toLocalDate, getDateTooltip} from '../../sharedComponents/Utils';
import {Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, Button, Tooltip} from '@mui/material';
import {Table, TableBody, TableCell, TableRow, TableHead} from '@mui/material';

type props = {
    handleClose: any,
    enviroment: IEnviroment
}

const columns = [
    {name: 'نام', align: 'right'},
    {name: 'کلید دسترسی', align: 'center'}, 
    {name: 'تاریخ ایجاد', align: 'right'}, 
    {name: 'تاریخ بروزرسانی', align: 'right'}
];

const EnvDetailDialog = ({handleClose, enviroment}: props) => {
    return(
        <>
        <Dialog open={true} onClose={handleClose}>
            <DialogTitle color='primary'>اطلاعات محیط</DialogTitle>
            <DialogContent>
                <DialogContentText>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {
                                    columns.map((column, index)=>{
                                        return(
                                            <TableCell key={index} align='center'>{column.name}</TableCell>
                                        )
                                    })
                                }
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow sx={{cursor: 'inherit', borderBottom: 'none'}}>
                                <TableCell sx={{borderBottom: 'none'}}>{enviroment?.name}</TableCell>
                                <TableCell sx={{borderBottom: 'none'}}>{enviroment?.accessKey}</TableCell>
                                <Tooltip title={getDateTooltip(enviroment?.created)}>
                                    <TableCell align="center" sx={{borderBottom: 'none'}}>
                                        {toLocalDate(enviroment?.created).toString()}
                                    </TableCell>
                                </Tooltip>
                                <Tooltip title={getDateTooltip(enviroment?.updated)}>
                                    <TableCell align="center" sx={{borderBottom: 'none'}}>
                                        {toLocalDate(enviroment?.updated).toString()}
                                    </TableCell>
                                </Tooltip>
                            </TableRow>
                        </TableBody>
                    </Table>
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button color='secondary' variant="outlined" onClick={handleClose} disableElevation>بازگشت</Button>
            </DialogActions>
        </Dialog>
        </>
    );
}
export default EnvDetailDialog;