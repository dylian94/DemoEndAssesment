import * as React from 'react';
import { StyleSheet, View} from "react-native";
import { HelperText, TextInput } from 'react-native-paper';

export default class UsernameInput extends React.Component {
    state = {
        showError: false
    };

    onChangeText = (text) => {
        this.setState({
            showError: text === ""
        },() => {
            this.props.onJokeTextChanged(text);
        });
    };

    render(){

        const styles = StyleSheet.create({
            input: {
                height: this.props.height || 200
            }
        });

        return (
            <View>
                <TextInput
                    label="Joke text"
                    style={styles.input}
                    value={this.props.jokeText}
                    multiline={true}
                    onChangeText={this.onChangeText} />
                <HelperText
                    type="error"
                    visible={this.state.showError} >
                    Joke text is required!
                </HelperText>
            </View>
        );
    }
}