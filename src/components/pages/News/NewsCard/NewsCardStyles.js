import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';


let theme = createMuiTheme();
export default theme = responsiveFontSizes(theme);


export const styles = (theme) => ({
    root: {
        display: 'flex',
        borderRadius: '1px',
    },
    details: {
        display: 'flex',
        flexDirection: 'column',
    },
    cardContent: {
        flex: '1 0 auto',
    },
    cover: {
        WebkitMaskImage: '-webkit-gradient(linear, left top, right top, from(rgba(0,0,0,1)), to(rgba(0,0,0,0)))',
        MaskImage: 'linear-gradient(to right, rgba(0,0,0,1), rgba(0,0,0,0))',
        [theme.breakpoints.up('md')]: {
            width: '220px',
            display: 'block',
        },
        [theme.breakpoints.up('sm')]: {
            width: '110px',
            display: 'block',
        },
        display: 'none',
    },
});
