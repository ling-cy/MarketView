
export const homeStyles = (theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        padding: theme.spacing(1),
    },
    cir: {
        '& > * + *': {
            marginLeft: theme.spacing(2),
        },
        padding: theme.spacing(5),
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
    },
    modalStyle: {
        position: 'absolute',
        width: '100 %',
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 0,
    },
    stockPanelCotainer: {
        display: 'flex',
    },
    stockPanel: {
        minWidth: 300,
        [theme.breakpoints.down('sm')]: {
            padding: theme.spacing(0, 1),
        },
    },
    newsPanel: {
        maxWidth: 850,
        width: '100%'
    },
    panel: {
        maxWidth: 1250,
    },
    spHeader: {
        fontWeight: '600',
        fontSize: '14px',
        padding: theme.spacing(0, 0, 0, 1),
    },
    paper: {
        margin: theme.spacing(0, 0, 1, 0),
        maxWidth: 1050,
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto'
    },
    header: {
        fontWeight: 300,
        textAlign: 'center'
    }
});