import React from 'react';

import { StyledTab, StyledTabs, TContainer, TabPanel, a11yProps } from './TabStyledComponent';
import Chart from '../Chart/Chart';
import Quote from '../Quote/Quote';
import News from '../News';
import Discussion from '../Discussion/Discussion';


export default function ScrollableTabsButtonAuto(props) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const tabs = [
        {
            tabName: 'Quote',
            content: <Quote symb={props.symb} />,
        }, {
            tabName: 'Day Chart',
            content: <Chart symb={props.symb} />,
        }, {
            tabName: 'News',
            content: <News symb={props.symb} />,
        }, {
            tabName: 'Discussion',
            content: <Discussion symb={props.symb} />,
        },
    ]

    return (
        // <div className={classes.root}>
        <TContainer>
            <StyledTabs
                value={value}
                onChange={handleChange}
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs"
            >
                {
                    tabs.map((tab, index) => {
                        return (
                            <StyledTab key={index} label={tab.tabName} {...a11yProps(index)} />
                        )
                    })
                }

            </StyledTabs>

            {
                tabs.map((tab, index) => {
                    return (
                        <TabPanel value={value} index={index} key={index}>
                            {tab.content}
                        </TabPanel>

                    )
                })
            }
        </TContainer>
        // </div>
    );
}
