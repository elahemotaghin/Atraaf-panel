import {createTheme } from '@mui/material/styles';

declare module '@mui/material/styles' {
    interface Palette {
        gray: Palette['primary'];
        defaultBack: Palette['primary'];
    }
    interface PaletteOptions {
        gray?: PaletteOptions['primary'];
        defaultBack?: PaletteOptions['primary'];
    }
}

const defaultTheme = createTheme({
    direction: 'rtl',
    palette:{
        primary:{
            light: '#77e4e1',
            main: '#2F6D80',
            dark: '#2B4560',
        },
        secondary:{
            light: '#F8AFA6',
            main: '#F79489',
            dark: '#E98973',
            contrastText: '#F79489',
        },
        gray:{
            main: '#B1B1B1',
            dark: '#8d8c8c'
        },
        defaultBack:{
            light: '#e0e7e7',
            main: '#fff'
        }
    },
    typography: {
        fontFamily: 'IRANYekan',
        h1:{
            fontSize: '28px',
        },
        h2:{
            fontSize: '26px',
        },
        h3:{
            fontSize: '24px',
        },
        h4:{
            fontSize: '22px',
        },
        h5:{
            fontSize: '20px',
        },
        h6:{
            fontSize: '18px',
        },
        body1:{
            fontSize: '14px',
            fontWeight: '400 !important'
        },
        body2:{
            fontSize: '14px',
            direction: 'rtl'
        }
    },
    components: {
        MuiCssBaseline: {
            styleOverrides: {
                root:{
                    fontSize: '14px',
                }
            }
          },
        MuiInputAdornment:{
            styleOverrides:{
                root:{
                    '&:not(.MuiInputAdornment-hiddenLabel)':{
                        margin: '16px',
                    }
                },
            }
        },
        MuiInputLabel:{
            styleOverrides:{
                root:{
                    color: '#000',
                    fontWeight: '700 !important'
                }
            }
        },
        MuiAppBar:{
            styleOverrides:{
                root:{
                    backgroundColor: '#E1E7E0',
                }
            }
        },
        MuiButton:{
            styleOverrides:{
                root:{
                    fontWeight: 700,
                    fontSize: '14px',
                    marginLeft: '5px',
                    boxShadow: 'none'
                },
            }
        },
        MuiCard:{
            styleOverrides:{
                root:{
                    boxShadow: 'none',
                    width: '100%',
                    margin: '16px',
                    borderRadius: '16px',
                }
            }
        },
        MuiCardHeader:{
            styleOverrides:{
                root:{
                    width: '100%',
                    margin: '0px',
                },
                title:{
                    fontSize: '18px',
                }
            }
        },
        MuiCardContent:{
            styleOverrides:{
                root:{
                    paddingTop: '0px',
                    // paddingBottom: '0px !important'
                }
            }
        },
        MuiChip:{
            styleOverrides:{
                root:{
                    margin: '2px',
                },
                deleteIcon:{
                    marginLeft: '4px',
                }
            }
        },
        MuiFilledInput:{
            styleOverrides:{
                root:{
                    border: '0px solid',
                    borderRadius: '20px',
                    margin: '0px 16px',
                    '&::before':{
                        borderBottom: 'none',
                    },
                    '&::after':{
                        borderBottom: 'none',
                    },
                    '&:hover:not(.Mui-disabled)':{
                        '&::before':{
                            borderBottom: 'none',
                        },
                    }
                },
                input:{
                    padding:'4px 8px'
                }
            }
        },
        MuiFormHelperText:{
            styleOverrides:{
                root:{
                    alignSelf: 'flex-start',
                    color: 'red'
                }
            }
        },
        MuiOutlinedInput:{
            styleOverrides:{
                root:{
                    border: '0px solid',
                    borderRadius: '16px',
                    paddingTop: '4px !important',
                    paddingBottom: '4px !important',
                    '&::before':{
                        borderBottom: 'none',
                    },
                    '&::after':{
                        borderBottom: 'none',
                    },
                    '&:hover:not(.Mui-disabled)':{
                        '&::before':{
                            borderBottom: 'none',
                        },
                    }
                },
                input:{
                    padding:'4px 8px'
                }
            }
        },
        MuiFormControl:{
            styleOverrides:{
                root:{
                }
            }
        },
        MuiList:{
            styleOverrides:{
                root:{
                }
            }
        },
        MuiListItem:{
            styleOverrides:{
                root:{
                    paddingBottom: '0px',
                    paddingLeft: '0px'
                }
            }
        },
        MuiMenuItem:{
            styleOverrides:{
                root:{
                    fontWeight: 500,
                    fontSize: '14px'
                }
            }
        },
        MuiCircularProgress:{
            styleOverrides:{
                
            }
        },
        MuiTypography:{
            styleOverrides:{
                root:{
                    fontWeight: 700
                }
            }
        },
        // MuiTabPanel:{
        //     styleOverrides:{
        //         root:{
        //             padding: 0,
        //         }
        //     }
        // },
        MuiTable:{
            styleOverrides:{
                root:{
                    
                }
            }
        },
        MuiTableCell:{
            styleOverrides:{
                root:{
                    padding: '4px 8px',
                    '&:first-child': {
                        fontWeight: '700',
                    }
                },
                head:{
                    fontWeight: '700',
                    color: 'gray',
                }
            }
        },
        MuiTableRow:{
            styleOverrides:{
                'root':{
                    cursor: 'pointer',
                    border: '0px solid',
                    borderBottom: '1px solid gray',
                },
            }
        },
        MuiTablePagination:{
            styleOverrides:{
                root:{
                    display: 'flex',
                    justifyContent: 'flex-start',
                },
                displayedRows:{
                    display: 'none',
                }
            }
        }
    },
});
export default defaultTheme;