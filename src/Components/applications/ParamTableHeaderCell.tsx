import React from 'react';
import IEnviroment from '../../interfaces/Environment';
import '../../assets/themes/customStyle.css';
import {Box, Typography, Button, Menu, MenuItem, IconButton, Tooltip, Toolbar} from '@mui/material';
import {TableContainer, Table, TableHead, TableBody, TableRow, TableCell, TablePagination, Grid} from '@mui/material';

type props = {
    enviroment: IEnviroment,
    onShowEnvDetail: (e: IEnviroment) => void,
    onDeleteButtonClicked: (e: IEnviroment) => void,
    setOnForkEnv: (e: number) => void,
    openForkDialog: (e:boolean) => void
}

const ParamTableHeaderCell = ({enviroment, onShowEnvDetail, openForkDialog, setOnForkEnv, onDeleteButtonClicked}:props) => {
    const [anchor, setAnchor] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchor);

    return(
    <>
      <TableCell key={enviroment.id} 
      onClick={(e)=>setAnchor(e.currentTarget)} 
      align='center'
      sx={{cursor: 'pointer'}}>
        {enviroment.name}
      </TableCell>
      <Menu
        anchorEl={anchor}
        keepMounted
        open={open}
        onClose={() => setAnchor(null)}
      >
        <MenuItem onClick={() => {setAnchor(null); onShowEnvDetail(enviroment)}}>نمایش اطلاعات</MenuItem>
        <MenuItem onClick={() => {setAnchor(null); openForkDialog(true); setOnForkEnv(enviroment.id)}} >ساخت نمونه</MenuItem>
        <MenuItem onClick={() => {setAnchor(null); onDeleteButtonClicked(enviroment)}}>حذف محیط</MenuItem>
      </Menu>
  
    </>
    )
}
export default ParamTableHeaderCell;

