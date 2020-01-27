import React from 'react';
import { createMuiTheme } from '@material-ui/core/styles'

const baseTheme = createMuiTheme({
    headerLayout: 'default',
    palette: {
        tonalOffset: 0.2,
        type: 'dark',
        // type: 'light',
        primary: {
            main: "#f64c72",
        },
        secondary: {
            main: "#2f2fa2",
        },
        error: {
            main: "#00FFAA",
        },
        success: {
            main: "#00FFAA",
        },
        warning: {
            main: "#00FFAA",
        },
        info: {
            main: "#00FFAA",
        },
        background: {
            main: "#00FFAA",
        },
    },
    shape: {
        borderRadius: 5,
    },
    typography: {
        fontFamily: 'Open Sans',
        fontSize: 14,
        button: {
            textTransform: 'none',
        },
    },
    overrides: {
        MuiExpansionPanel: {
            root: {
                '&$expanded': {
                    margin: '8px 0',
                    background: {
                        
                    }
                },
            },
        },
    },
    MuiOutlinedInput: {
        input: {
            padding: '6px 12px',
        },
    },
    MuiFormHelperText: {
        root: {
            margin: 0,
        },
        contained: {
            margin: '8px 0 0 0',
        },
    },
    MuiTextField: {
        root: {
            height: '24px',
        },
    },
    MuiInputLabel: {
        root: {
            textTransform: 'uppercase',
        },
    },
    MuiIcon: {
        root: {
            display: 'flex',
        },
    },
    MuiSwitch: {
        root: {
            width: 44,
            height: 24,
            padding: 0,
        },
        '&$checked': {
            transform: 'translateX(18px)',
            color: 'white',
        },
        switchBase: {
            padding: 1,
        },
        thumb: {
            width: 20,
            height: 20,
            margin: 1,
            borderWidth: 0,
        },
        track: {
            borderRadius: 24,
            backgroundColor: '#848484',
            opacity: 1,
        },
        focusVisible: {},
    },
    MuiButton: {
        root: {
            borderRadius: '50px',
            borderWidth: '1px',
        },
        contained: {
            boxShadow: 'none',
            '&:hover': {
                boxShadow: 'none',
            },
        },
    },
    MuiIconButton: {
        contained: {
            '&:hover': {
                boxShadow: 'none',
            },
        },
    },
    MuiButtonGroup: {
        root: {
            borderRadius: '50px',
        },
        contained: {
            boxShadow: 'none',
        },
    },
    MuiSelect: {
        root: {
            borderWidth: '1px',
        },
    },
    MuiRadio: {
        root: {
            borderWidth: '1px',
        },
    },
    MuiTableCell: {
        head: {
            textTransform: 'uppercase',
            fontSize: '11px',
            lineHeight: '24px',
            letterSpacing: '2px',
        },
    },
    MuiTableRow: {
        head: {
            border: 'none',
        },
        root: {
            borderStyle: 'solid',
            borderWidth: '1px',
        },
    },
    MuiDivider: {
        root: {
            background: 'rgba(0, 0, 0, 0.05)',
        },
    },
},
);

export default baseTheme;