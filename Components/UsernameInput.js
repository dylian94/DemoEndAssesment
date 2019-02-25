import * as React from 'react';
import { View } from "react-native";
import { HelperText, TextInput } from 'react-native-paper';

export default class UsernameInput extends React.Component {
    state = {
        showError: false
    };

    onChangeText = (text) => {
        this.setState({
            showError: text.includes(' ')
        },() => {
            if (!this.state.showError)
            {
                this.props.onUserNameChanged(text);
            }
        });
    };

    render(){
        return (
            <View>
                <TextInput
                    label="Username"
                    value={this.props.userName}
                    onChangeText={this.onChangeText} />
                <HelperText
                    type="error"
                    visible={this.state.showError} >
                    No spaces allowed in username!
                </HelperText>
            </View>
        );
    }
}