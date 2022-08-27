import {createTheme } from '@mui/material/styles';
import '../../../../assets/themes/customStyle.css';
export const tableTheme = createTheme({
    palette: {
        primary:{
            main: '#2F6D80',
        },
        secondary:{
            main: '#F79489',
        },
    },
    typography:{
        fontFamily: 'IRANYekan',
    },
    components:{
        MuiTableCell:{
            styleOverrides:{
                root:{
                    '&:first-child': {
                        fontWeight: '700',
                        position: 'sticky',
                    },
                    maxWidth: '150px',
                    maxHeight: '50px',
                    overflow: 'hidden'
                },
                head:{
                    fontWeight: 700,
                    maxWidth: '150px',
                }
            }
        }

    }
})