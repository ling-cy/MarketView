import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

import CallingDayChart from './Chart/CallingDayChart'
import CallingMinChart from './Chart/CallingMinChart'
import Quote from './Quote/Quote'
import News from './News'
import Discussion from './Discussion';

const StyledTabs = withStyles({
    root: {
        borderTop: '4px solid #e8e8e8',
    },
    indicator: {
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: '#808080',
        height: '3px',
        '& > span': {
            // maxWidth: 80,
            width: '100%',
            backgroundColor: '#808080',
        },
    },
})(Tabs);

const StyledTab = withStyles((theme) => ({
    root: {
        textTransform: 'none',
        textColor: 'primary',
        fontWeight: theme.typography.fontWeightRegular,
        fontSize: theme.typography.pxToRem(15),
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

function TabPanel(props) {
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
                    <Typography>{children}</Typography>
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

function a11yProps(index) {
    return {
        id: `scrollable-auto-tab-${index}`,
        'aria-controls': `scrollable-auto-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '100%',
        maxWidth: '1250px',
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function ScrollableTabsButtonAuto(props) {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <div className={classes.root}>
            {/* <AppBar position="static" color="default"> */}
            <StyledTabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs"
            >
                <StyledTab label="Quote" {...a11yProps(0)} />
                <StyledTab label="Intraday Chart" {...a11yProps(1)} />
                <StyledTab label="Day Chart" {...a11yProps(2)} />
                <StyledTab label="News" {...a11yProps(3)} />
                <StyledTab label="Discussion" {...a11yProps(4)} />
            </StyledTabs>
            {/* </AppBar> */}
            <TabPanel value={value} index={0}>
                <Quote symb={props.symb} />
            </TabPanel>

            <TabPanel value={value} index={1}>
                <CallingMinChart symb={props.symb} />
            </TabPanel>

            <TabPanel value={value} index={2}>

                <CallingDayChart symb={props.symb} />
            </TabPanel>

            <TabPanel value={value} index={3}>
                <News symb={props.symb} />
            </TabPanel>

            <TabPanel value={value} index={4}>
                <Discussion symb={props.symb} />
            </TabPanel>

        </div>
    );
}
