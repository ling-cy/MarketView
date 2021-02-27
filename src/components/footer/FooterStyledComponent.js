import { Container, Typography } from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';


export const FTypo = withStyles({
    root: {
        color: '#888888',
        fontSize: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
    },
})(Typography);

export const FContainer = withStyles({
    root: {
        flexShrink: 0,
        height: '30px',
    },
})(Container);