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
        display: 'flex',
        position: 'absolute',
        right: 5,
        top: 6,
    },
    search: {
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: fade(theme.palette.common.black, 0.15),
        '&:hover': {
            backgroundColor: fade(theme.palette.common.black, 0.25),
        },
        marginRight: '60px',
        marginLeft: 0,
        width: '100%',
        maxWidth: '23ch',

        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(3),
            width: 'auto',
        },
    },
    inputRoot: {
        color: 'inherit',
    },
    inputInput: {
        padding: theme.spacing(1, 4, 1, 2),
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '15ch',
        },
    },
}));

export const appBarStyles = makeStyles((theme) => ({

    logoL: {
        maxWidth: "150px",
        padding: theme.spacing(1, 2, 1, 1),

    },
    appBarIcon: {
        display: 'flex',
        position: 'absolute',
        right: 15,
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
    emptyBox: {

    }
}));