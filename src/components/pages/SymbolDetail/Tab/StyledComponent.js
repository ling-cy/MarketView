import { withStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box, Container } from '@material-ui/core'
import PropTypes from 'prop-types';

export const StyledTabs = withStyles({
    root: {
        borderTop: '4px solid #e8e8e8',
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#808080',
        height: '3px',
        '& > span': {
            width: '100%',
            backgroundColor: '#808080',
        },
    },
})(Tabs);


export const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        textColor: 'primary',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(14),
        letterSpacing: '-0.5px',
        marginRight: theme.spacing(1),
        '&:focus': {
            opacity: 1,
        },
        '&:hover': {
            opacity: 1,
            backgroundColor: 'rgb(0,0,0,0.03)'
        },
    },
}))((props) => <Tab disableRipple {...props} />);

export const TContainer = withStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        maxWidth: '1250px',
        padding: 0,
        backgroundColor: theme.palette.background.paper,
    },
}))(Container)

export function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`scrollable-auto-tabpanel-${index}`}
            aria-labelledby={`scrollable-auto-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box p={1}>
                    {children}
                </Box>
            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

export function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

