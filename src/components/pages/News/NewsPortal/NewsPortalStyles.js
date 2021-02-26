import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
export default theme;

export const styles = (theme) => ({

    modalContent: {
        position: 'absolute',
        [theme.breakpoints.up('650')]: {
            width: '650px',
            display: 'block',
        },
        width: '90%',
        display: 'block',
        backgroundColor: theme.palette.background.paper,
        border: '0px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(0, 0, 2),
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        outline: 0,
        height: '80%',
        maxHeight: '600px'
    },
    cover: {
        WebkitMaskImage: '-webkit-gradient(linear, left top, left bottom, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
        MaskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
    },
    section1: {
        margin: theme.spacing(0, 2, 2),
    },
    section2: {
        margin: theme.spacing(2),
    },
    detail: {
        color: '#8d99ae',
    },
    cardContent: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        backgroundColor: theme.palette.background.paper,
    },
    shareIcon: {
        marginLeft: '7px',
    },
});