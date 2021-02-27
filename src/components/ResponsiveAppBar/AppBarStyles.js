import { makeStyles, fade } from '@material-ui/core/styles';

const drawerWidth = 100;
export const drawerStyles = makeStyles((theme) => ({
    drawer: {
        display: 'block',
        width: drawerWidth,
        flexShrink: 0,
    },
    drawerPaper: {
        width: drawerWidth,
    },
    drawerContainer: {
        overflow: 'auto',
    },
    listText: {
        letterSpacing: '-0.5px'
    },
    themeIcon: {
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
}));

export const searchBarStyles = makeStyles((theme) => ({
    searchIcon: {
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: theme.spacing(6),
        marginLeft: 0,
        width: '200px',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        paddingTop: theme.spacing(1),
        paddingBottom: theme.spacing(1),
        paddingRight: theme.spacing(1),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('md')]: {
            width: '20ch',
        },
        [theme.breakpoints.down('xs')]: {
            paddingLeft: '1em',
        },
    },
}));

export const appBarStyles = makeStyles((theme) => ({
    logoL: {
        maxWidth: "150px",
        padding: theme.spacing(1),

    },
    appBarIcon: {
        display: 'flex',
        position: 'absolute',
        right: 20,
    },
    menuIcon: {
        margin: 10,
    },
    themeIcon: {
        margin: 10,
        [theme.breakpoints.down('xs')]: {
            display: 'none',
        },
    },
}));