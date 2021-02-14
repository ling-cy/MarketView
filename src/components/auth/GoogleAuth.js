import React from 'react';
import { connect } from 'react-redux';

import { googSignIn, signOut } from '../../actions'



class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                // clientId: '680632301237-cv0c50fo1ub6g9lk4vvbc9tu0fh27mqf.apps.googleusercontent.com',
                clientId: '680632301237-uugp6v6rc700ubm9bh9lpgdu922i2bpa.apps.googleusercontent.com',
                scope: 'email'
            }).then(() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);

            });
        });
    }

    onAuthChange = (isSignedIn) => {
        if (isSignedIn) {
            this.props.googSignIn(
                this.auth.currentUser.get().getId(),
                this.auth.currentUser.get().getBasicProfile().getEmail()
            );
        } else {
            this.props.signOut();
        }
    };

    onSignInClick = () => {
        this.auth.signIn();
    };

    onSignOutClick = () => {
        this.auth.signOut();
    };


    renderGoogButton() {

        if (this.props.isSignedIn === null) {
            return null
        } else if (this.props.isSignedIn) {
            return (
                <button
                    onClick={this.onSignOutClick}
                >
                    Sign Out
                </button>
            )
        } else {
            return (
                <button
                    onClick={this.onSignInClick}
                >
                    Sign In With Google
                </button>
            )
        }

    }

    render() {
        return (
            <div>
                {this.renderGoogButton()}
            </div>
        )
    }
};

const mapStatetoProps = (state) => {
    return { isSignedIn: state.auth.isSignedIn }
}


export default connect(
    mapStatetoProps,
    { googSignIn, signOut }
)(GoogleAuth);