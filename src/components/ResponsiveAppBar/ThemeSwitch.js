import React from 'react';
import { connect } from 'react-redux';

import { darkModeOn } from '../../actions'

import Brightness7Icon from '@material-ui/icons/Brightness7';
import Brightness4Icon from '@material-ui/icons/Brightness4';

class ThemeSwitch extends React.Component {



    onDarkModeClick = () => {
        this.props.darkModeOn(true);
    };

    onBrightModeClick = () => {
        this.props.darkModeOn(false);
    };

    renderButton() {
        if (this.props.darkTheme === true) {
            return (
                <Brightness7Icon
                    onClick={this.onBrightModeClick}
                />
            )
        }
        return (
            <Brightness4Icon
                onClick={this.onDarkModeClick}
            />
        )
    }

    render() {
        return (
            <div>
                {this.renderButton()}
            </div>
        )
    }
};

const mapStateToProps = (state) => {
    return { darkTheme: state.theme.darkMode }
}

export default connect(
    mapStateToProps,
    { darkModeOn }
)(ThemeSwitch)