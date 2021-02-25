import { makeStyles, createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

let theme = createMuiTheme();
theme = responsiveFontSizes(theme);
export default theme;

const drawerWidth = 100;
export const errorPageStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth,
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        textAlign: 'center',
    },
    button: {
        margin: theme.spacing(3),
    }
}));


