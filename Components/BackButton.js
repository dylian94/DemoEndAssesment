import React from 'react';
import { withNavigation } from 'react-navigation';
import {Appbar} from "react-native-paper";

class BackButton extends React.Component {
    render() {
        return <Appbar.BackAction onPress={() => { this.props.navigation.goBack() }} />;
    }
}

// withNavigation returns a component that wraps MyBackButton and passes in the
// navigation prop
export default withNavigation(BackButton);